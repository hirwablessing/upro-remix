import type { MetaFunction } from 'remix'
import { Link } from 'remix'

export let meta: MetaFunction = () => {
    return {
        title: 'about page',
        description: 'Welcome to remix!',
    }
}

export default function AboutRoute() {
    return (
        <section className="font-display flex h-screen w-screen  flex-col items-center justify-center bg-black font-primary text-white">
            <h1 className="py-4 text-xl">About</h1>
            <Link to="/" className="text-blue-500">
                👈 back
            </Link>
        </section>
    )
}
