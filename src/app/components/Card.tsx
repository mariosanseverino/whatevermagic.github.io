'use client';
import { useState } from "react";

export default function Card () {
    const [flip, setFlip] = useState(false)
    function background() {
        if (flip === false) {
            return 'bg-blue-400'
        } else {
            return "bg-card-back bg-center bg-contain bg-no-repeat"
        }
    }

    return (
        <div
            className={ `h-card-height w-card-width rounded-lg mx-auto ${background()}` }
            onClick={ () => setFlip(!flip) }
        >
        </div>
    )
}
