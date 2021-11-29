import type {MetaFunction} from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};

export default function Index() {

  return (
    <div className="grid place-items-center h-screen w-screen bg-black text-white">
      <h1>Remix Starter and tailwindcss</h1>
    </div>
  );
}
