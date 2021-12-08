import type {MetaFunction} from "remix"
import {Link} from "remix";

export let meta: MetaFunction = () => {
  return {
    title: "about page",
    description: "Welcome to remix!"
  };
};


export default function AboutRoute() {
  return <section className="flex bg-black text-white font-sans  flex-col justify-center items-center h-screen w-screen">
    <h1 className="text-xl py-4">About</h1>
    <Link to="/" className="text-blue-500">👈 back</Link>
  </section>
}
