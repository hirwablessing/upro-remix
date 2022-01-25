import type { MetaFunction } from 'remix'
import { Link } from 'remix'

export let meta: MetaFunction = () => {
    return {
        title: 'Remix Starter',
        description: 'Welcome to remix!',
    }
}

export default function Index() {
    return (
        <div className="font-display flex h-screen w-screen flex-col items-center justify-center bg-black font-primary text-white">
            <h1 className="font-display py-4 text-xl">
                {' '}
                Remix Starter and tailwindcss
            </h1>
            <Link to="/about" className="text-blue-500">
                about
            </Link>
        </div>
    )
}
