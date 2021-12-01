import {Link} from "remix";

export default function AboutRoute() {
  return <section className="flex bg-black text-white  flex-col justify-center items-center h-screen w-screen">
    <h1 className="text-xl py-4">About</h1>
    <Link to="/" className="text-blue-500"> home</Link>
  </section>
}
