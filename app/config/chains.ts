export type ChainKey = "none" | "calypso" | "europa" | "nebula" | "titan" | "chaos";

export type ChainInfo = {
	chainId: number;
	rpcUrl: string;
	proofOfWork: string;
	threshold: number;
	contracts: {
		address: string;
		contractName: string;
		contractType: "erc20" | "erc721" | "erc1155";
		decimals?: number;
	}[]
}

export type Chain = {
	name: string;
	description: string;
	logoUrl: string;
	color: string;
	background: string;
    gradientBackground: string;
    chainInfo?: {
    	mainnet?: ChainInfo;
    	testnet: ChainInfo;
    }
};

const chains = {
	"calypso": {
		"name": "Calypso Innovation Hub",
		"description": "An Innovation Hub focused on projects looking to use blockchain in new and unique ways",
		"logoUrl": "https://raw.githubusercontent.com/skalenetwork/skale-network/master/metadata/mainnet/logos/honorable-steel-rasalhague.png",
		"color": "#FFF",
		"background": "#ce126f",
    	"gradientBackground": "linear-gradient(270deg, rgb(103 35 71), rgb(57 15 68))",
    	"chainInfo": {
    		"mainnet": {
    			"rpcUrl": "https://mainnet.skalenodes.com/v1/honorable-steel-rasalhague",
    			"chainId": 1564830818,
    			"contracts": [],
    			"proofOfWork": "0x02891b34B7911A9C68e82C193cd7A6fBf0c3b30A",
    			"threshold": 0.005
    		},
    		"testnet": {
    			"rpcUrl": "https://staging-v3.skalenodes.com/v1/staging-utter-unripe-menkar",
    			"chainId": 344106930,
    			"proofOfWork": "0x84b7265Bc964BB69b4275d4Dac4df0FD87556960",
    			"threshold": 0.0075,
    			"contracts": [
    				{
    					address: "0x7E1B8750C21AebC3bb2a0bDf40be104C609a9852",
    					contractName: "SKL",
    					contractType: "erc20",
    					decimals: 18
    				},
    				{
    					address: "0x49c37d0Bb6238933eEe2157e9Df417fd62723fF6",
    					contractName: "USDC",
    					contractType: "erc20",
    					decimals: 6
    				}
    			]
    		}
    	}
	},
	"europa": {
		"name": "Europa DeFi & Liquidity Hub",
		"description": "The Liquidity Hub acts as both a utility to the SKALE Ecosystem and the home of DeFi on SKALE",
		"logoUrl": "https://raw.githubusercontent.com/skalenetwork/skale-network/master/metadata/mainnet/logos/elated-tan-skat.png",
		"color": "#FFF",
		"background": "rgb(5 19 37)",
    	"gradientBackground": "linear-gradient(270deg, rgb(5, 19, 37), rgb(13 36 65))",
    	"chainInfo": {
    		"mainnet": {
    			"rpcUrl": "https://mainnet.skalenodes.com/v1/elated-tan-skat",
    			"chainId": 2046399126,
    			"proofOfWork": "0x2B267A3e49b351DEdac892400a530ABb2f899d23",
    			"threshold": 0.1,
    			"contracts": []
    		},
    		"testnet": {
    			"rpcUrl": "https://staging-v3.skalenodes.com/v1/staging-legal-crazy-castor",
    			"chainId": 476158412,
    			"proofOfWork": "0x436389289aEAFefD1d7471b7FbEc67539Bde3E34",
    			"threshold": 0.005,
    			"contracts": [
	    			{
	    				address: "0xD2Aaa00700000000000000000000000000000000",
	    				contractName: "ETH",
	    				contractType: "erc20",
	    				decimals: 18
	    			},
					{
    					address: "0xbA1E9BA7CDd4815Da6a51586bE56e8643d1bEAb6",
    					contractName: "SKL",
    					contractType: "erc20",
    					decimals: 18
    				},
    				{
    					address: "0xf06De9214B1Db39fFE9db2AebFA74E52f1e46e39",
    					contractName: "Ruby",
    					contractType: "erc20",
    					decimals: 18
    				},
    				{
    					address: "0x3595E2f313780cb2f23e197B8e297066fd410d30",
    					contractName: "DAI",
    					contractType: "erc20",
    					decimals: 18
    				},
    				{
    					address: "0xe0E2cb3A5d6f94a5bc2D00FAa3e64460A9D241E1",
    					contractName: "USDP",
    					contractType: "erc20",
    					decimals: 18
    				},
    				{
    					address: "0xa388F9783d8E5B0502548061c3b06bf4300Fc0E1",
    					contractName: "USDT",
    					contractType: "erc20",
    					decimals: 6
    				},
    				{
    					address: "0x5d42495D417fcd9ECf42F3EA8a55FcEf44eD9B33",
    					contractName: "USDC",
    					contractType: "erc20",
    					decimals: 6
    				},
    				{
    					address: "0xf5E880E1066DDc90471B9BAE6f183D5344fd289F",
    					contractName: "WBTC",
    					contractType: "erc20",
    					decimals: 8
    				}
    			]
    		},
    	}
	},
	"nebula": {
		"name": "Nebula Gaming Hub",
		"description": "A hub focused 100% on gaming, Nebula is the home of gaming on the SKALE Network",
		"logoUrl": "https://raw.githubusercontent.com/skalenetwork/skale-network/master/metadata/mainnet/logos/green-giddy-denebola.png",
		"color": "#FFF",
		"background": "#2c1626",
    	"gradientBackground": "linear-gradient(270deg, #2f1728, #1b0e17)",
    	"chainInfo": {
    		"mainnet": {
    			"rpcUrl": "https://mainnet.skalenodes.com/v1/green-giddy-denebola",
    			"chainId": 1482601649,
    			"contracts": [],
    			"proofOfWork": "0x5a6869ef5b81DCb58EBF51b8F893c31f5AFE3Fa8",
    			"threshold": 0.0001
    		},
    		"testnet": {
    			"rpcUrl": "https://staging-v3.skalenodes.com/v1/staging-faint-slimy-achird",
    			"chainId": 503129905,
    			"proofOfWork": "0xfd56A3456fbAB0fc013213edCc830B9d32403C8B",
    			"threshold": 0.0001,
    			"contracts": [
    				{
    					address: "0x7F73B66d4e6e67bCdeaF277b9962addcDabBFC4d",
    					contractName: "SKL",
    					contractType: "erc20",
    					decimals: 18
    				},
    				{
    					address: "0x717d43399ab3a8aada669CDC9560a6BAfdeA9796",
    					contractName: "USDC",
    					contractType: "erc20",
    					decimals: 6
    				}
    			]
    		},
    	}
	},
	"titan": {
		"name": "Titan AI Hub",
		"description": "The AI Hub on SKALE is a great starting place to explore the crossover between AI and blockchain",
		"logoUrl": "https://portal.skale.space/assets/parallel-stormy-spica-068cfa33.png",
		"color": "#FFF",
		"background": "#FFF",
    	"gradientBackground": "linear-gradient(270deg, rgb(72, 33, 17), rgb(34, 13, 5))",
    	"chainInfo": {
    		"mainnet": {
    			"rpcUrl": "https://mainnet.skalenodes.com/v1/parallel-stormy-spica",
    			"chainId": 1350216234,
    			"contracts": [],
    			"proofOfWork": "0xa5C297dF8f8386E4b940D61EF9A8f2bB367a6fAB",
    			"threshold": 0.005
    		},
    		"testnet": {
    			"rpcUrl": "https://staging-v3.skalenodes.com/v1/staging-aware-chief-gianfar",
    			"chainId": 1517929550,
    			"contracts": [],
    			"proofOfWork": "0xdb6c305e94097033904a76587e4BBCa41B14B2B2",
    			"threshold": 0.005
    		},
    	}
	},
	"chaos": {
		"name": "Chaos Testnet",
		"description": "Still not sure? Checkout Chaos Testnet to start. (Hint: You can always switch later!)",
		"logoUrl": "https://raw.githubusercontent.com/skalenetwork/skale-network/master/metadata/staging/logos/staging-fast-active-bellatrix.png",
		"color": "#FFF",
		"background": "#FFF",
		"gradientBackground": "linear-gradient(227deg, rgb(65, 159, 91), rgb(26, 81, 40))",
		"chainInfo": {
    		"testnet": {
    			"rpcUrl": "https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix",
    			"chainId": 1351057110,
    			"proofOfWork": "0x1B2e7E6E66a6c202cdC0C31DF996b530af22CBee",
    			"threshold": 0.0001,
    			"contracts": [
    				{
    					address: "0x08f98Af60eb83C18184231591A8F89577E46A4B9",
    					contractName: "DAI",
    					contractType: "erc20",
    					decimals: 18
    				},
    				{
    					address: "0x082081c8E607ca6C1c53aC093cAb3847ED59C0b0",
    					contractName: "USDT",
    					contractType: "erc20",
    					decimals: 6
    				}
    			]
    		},
		}
	},
} satisfies {[key: string]: Chain};

const chainList = Object.entries(chains);

export {
	chains,
	chainList
}