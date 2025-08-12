'use client' // Error boundaries must be Client Components

import { useEffect, useState } from 'react'

type errorType = {
    error: Error & { digest?: string };
    reset?: () => void;
}

export default function Error({ error, reset }: errorType) {

    const [message, setMessageError] = useState<string>('')
    useEffect(() => {
        setMessageError(error.message || 'An unexpected error occurred')
    }, [error])

    return (
        <div>
            <div className="bg-white text-gray-900 font-sans container mx-auto px-6 py-8 max-w-lg">
                <h1 className="text-red-600 text-2xl font-bold mb-4">Oops! Something went wrong!</h1>
                <h2 className="text-lg mb-4 text-red-500">{message}</h2>
                <button
                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer'
                    onClick={() => reset?.()}
                >
                    Try again
                </button>
            </div>
        </div>
    )
}