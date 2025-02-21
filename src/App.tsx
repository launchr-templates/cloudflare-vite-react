import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button'

function App() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Unknown')

    return (
        <div className="min-h-screen bg-[#242424] flex items-center justify-center">
            <div className="max-w-[1280px] mx-auto p-8 text-center">
                <div className="flex flex-col items-center gap-8">
                    <div className="flex justify-center gap-8">
                        <a href="https://vite.dev" target="_blank">
                            <img
                                src={viteLogo}
                                className="h-24 p-6 transition-all hover:drop-shadow-[0_0_2em_#646cffaa]"
                                alt="Vite logo"
                            />
                        </a>
                        <a href="https://react.dev" target="_blank">
                            <img
                                src={reactLogo}
                                className="h-24 p-6 transition-all hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-[spin_20s_linear_infinite]"
                                alt="React logo"
                            />
                        </a>
                    </div>

                    <h1 className="text-3xl font-bold text-white/90">
                        Vite + React + Cloudflare + TailwindCSS
                    </h1>

                    <div className="mt-4">
                        <Button onClick={() => setCount(count => count + 1)}>
                            count is {count}
                        </Button>
                        <p className="mt-4 text-white/70">
                            Edit <code className="font-mono">src/App.tsx</code>{' '}
                            and save to test HMR
                        </p>
                    </div>

                    <div className="mt-4">
                        <Button
                            onClick={() => {
                                fetch('/api/')
                                    .then(
                                        res =>
                                            res.json() as Promise<{
                                                name: string
                                            }>,
                                    )
                                    .then(data => setName(data.name))
                            }}
                        >
                            Name from API is: {name}
                        </Button>
                        <p className="mt-4 text-white/70">
                            Edit <code className="font-mono">src/App.tsx</code>{' '}
                            and save to test HMR
                        </p>
                    </div>

                    <p className="text-[#888] mt-8">
                        Click on the Vite and React logos to learn more
                    </p>
                </div>
            </div>
        </div>
    )
}

export default App
