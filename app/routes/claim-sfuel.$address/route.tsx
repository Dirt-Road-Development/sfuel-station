import { LoaderFunctionArgs, MetaFunction, json, redirect } from "@remix-run/node";
import { useLoaderData, useLocation, useNavigate, useRevalidator } from "@remix-run/react";
import styles from "./styles.css";
import { chains } from "~/config/chains";
import { useEffect, useState } from "react";
import { JsonRpcProvider, Wallet, WebSocketProvider, formatEther, isAddress } from "ethers";
import Miner from "./miner";

export const meta: MetaFunction = () => {
  return [
    { title: "Claim sFUEL - sFUEL Station" },
    { name: "description", content: "Claim sFUEL for the SKALE Network chains at the sFUEL Station" },
  ];
};

export const links = () => [
  { rel: "stylesheet", href: styles }
];

export async function loader({ request, params: { address } }: LoaderFunctionArgs) {

	if (address === undefined) return redirect("/connect-wallet", 303);

	if (!isAddress(address)) return redirect("/connect-wallet", 303);

	const url = new URL(request.url);
	const isMainnet = url.searchParams.get("testnet") === null;
	let balances = {} as {[key: string]: string};

	if (isMainnet) {
		const mainnetChainNames = ["honorable-steel-rasalhague", "elated-tan-skat", "green-giddy-denebola", "parallel-stormy-spica"];
		const [ calypso, europa, nebula, titan ] = await Promise.all(mainnetChainNames.map(async(chainName: string) => {
			const provider = new JsonRpcProvider(`https://mainnet.skalenodes.com/v1/${chainName}`);
			const balance = await provider.getBalance(address);
			return formatEther(balance);
		}));

		balances["calypso"] = calypso;
		balances["europa"] = europa;
		balances["nebula"] = nebula;
		balances["titan"] = titan;
	} else{
		const mainnetChainNames = ["utter-unripe-menkar", "fast-active-bellatrix", "legal-crazy-castor", "faint-slimy-achird", "aware-chief-gianfar"];
		const [ calypso, chaos, europa, nebula, titan ] = await Promise.all(mainnetChainNames.map(async(chainName: string) => {
			const provider = new JsonRpcProvider(`https://staging-v3.skalenodes.com/v1/staging-${chainName}`);
			const balance = await provider.getBalance(address);
			return formatEther(balance);
		}));

		balances["calypso"] = calypso;
		balances["chaos"] = chaos;
		balances["europa"] = europa;
		balances["nebula"] = nebula;
		balances["titan"] = titan;
	}

	return json({
		address,
		balances,
		network: isMainnet ? "mainnet" : "testnet"
	});

	
}

export default function ClaimSkaleFuel() {

	const navigate = useNavigate();
	const location = useLocation();
	const revalidator = useRevalidator();

	const { address, balances, network } = useLoaderData<typeof loader>();
	
	const [isMainnet, setIsMainnet] = useState<boolean>(true);
	const [displayChains, setDisplayChains] = useState<any[]>([]);
	const [miner] = useState(() => new Miner());
	const [isMining, setIsMining] = useState<{[key: string]: boolean}>({});

	useEffect(() => {
		setIsMainnet(network === "mainnet");
		if (network === "mainnet") {
			setDisplayChains(Object.entries(chains).filter((chain) => chain[1].name !== "Chaos Testnet"));
		} else {
			setDisplayChains(Object.entries(chains));
		}
	}, [network]);

	return (
		<div className="center">
			<div className="section-header">
				<h2>Claim sFUEL</h2>
				<button onClick={(e) => {
					e.preventDefault();
					if (isMainnet) {
						navigate(location.pathname + "?testnet=true");
					} else {
						navigate(location.pathname);
					}
				}}>
					{isMainnet ? "Click for Testnet" : "Click for Mainnet"}
				</button>
			</div>
			<p>Your address: <strong>{address}</strong></p>
			<section className="chains">
				{displayChains.map(([key, chain], index) => {
					return (
						<div 
							key={index}
							className="chain"
							style={{
								color: chain.color,
								background: chain.gradientBackground,
								border: key === "none" ? `1px solid ${chain.background}` : undefined
							}}
							onClick={(e) => {
								e.preventDefault();
							}}
						>
						<div className="chain-container">
							<div className="chain-left">
								<div className="chain-left__icon">
									<img src={chain.logoUrl} alt={key} />
								</div>
							</div>
							<div className="chain-right">
								<h3
									style={{
										color: chain.color
									}}
								>{chain.name}</h3>
								<p>{chain.description}</p>
							</div>
						</div>
						<div className="balance">
							{Number(balances[key]) < (chain?.chainInfo?.[isMainnet ? "mainnet" : "testnet"]?.threshold ?? 0.0001)
								? <button
									disabled={isMining[key]}
									onClick={async(e) => {
										e.preventDefault();
										
										try {
											setIsMining({
												...isMining,
												[key]: true
											});
											
											const provider = new JsonRpcProvider(chain?.chainInfo?.[isMainnet ? "mainnet" : "testnet"]?.rpcUrl);
											
											const randomWallet = Wallet.createRandom(provider);
											
											const nonce = await provider.getTransactionCount(randomWallet.address);
											
											const { duration, gasPrice } = await miner.mineGasForTransaction(nonce, 100_000, randomWallet.address);
											console.log("Gas Price: ", gasPrice);

											const functionSignature = key === "europa" ? "0x6a627842" : "0x0c11dedd";

											const response = await randomWallet.sendTransaction({
												to: chain?.chainInfo?.[isMainnet ? "mainnet" : "testnet"].proofOfWork,
												data: `${functionSignature}000000000000000000000000${address.substring(2)}`,
												gasLimit: 100_000,
												gasPrice
											});

											
											await provider.waitForTransaction(response.hash, 1);

											await new Promise<void>((resolve) => setTimeout(resolve, 1000));
											
											setIsMining({
												...isMining,
												[key]: false
											});

											revalidator.revalidate();

										} catch (err) {
											console.log("ERR: ", err);
										}
									}}
								>{isMining[key] ? "Claiming sFUEL..." : "Claim sFUEL"}</button> : <div />}
							<p>Balance: {Number(balances[key]).toFixed(5)} sFUEL</p>
						</div>
					</div>
					);
				})}
			</section>
		</div>
	);
}