import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "sFUEL Station" },
    { name: "description", content: "Welcome to SKALE Network's sFUEL Station" },
  ];
};

export default function Index() {
  return (
    <div className="center">
      <p>Hi</p>
    </div>
  );
}
