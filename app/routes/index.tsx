import type {MetaFunction} from "remix";
import {Link} from "remix"

export let meta: MetaFunction = () => {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
};

export default function Index() {

  return (
    <div className="flex justify-center flex-col items-center h-screen w-screen bg-black text-white">
      <h1 className="text-xl py-4">Remix Starter and tailwindcss</h1>
      <Link to="/about" className="text-blue-500"> about</Link>
    </div>
  );
}
