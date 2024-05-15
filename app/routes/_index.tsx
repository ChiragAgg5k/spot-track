import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Spot Track" },
    {
      name: "Spotting/tracking down song info",
      content: "Welcome to Spot Track!",
    },
  ];
};

export default function Index() {
  return (
    <div
      className={`flex h-screen flex-col items-center justify-center text-center`}
    >
      <h1 className="mb-3 text-5xl font-bold">Spot Track</h1>
      <p className={`text-lg font-semibold opacity-70`}>Work in progress...</p>
    </div>
  );
}
