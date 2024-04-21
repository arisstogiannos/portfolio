import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

export default function Magnetic({children,distance}) {
    const magnetic = useRef(null);

    useEffect( () => {
        const xTo = gsap.quickTo(magnetic.current, "x", {duration: 1, ease: "elastic.out"})
        const yTo = gsap.quickTo(magnetic.current, "y", {duration: 1, ease: "elastic.out"})

        magnetic.current.addEventListener("mousemove", (e) => {
            const { clientX, clientY } = e;
            const {height, width, left, top} = magnetic.current.getBoundingClientRect();
            const x = clientX - (left + width/2)
            const y = clientY - (top + height/2)
            xTo(x * 0.5);
            yTo(y * 0.5)
        })
        magnetic.current.addEventListener("mouseleave", (e) => {
            xTo(0);
            yTo(0)
        })
    }, [])

    return (
        React.cloneElement(children, {ref:magnetic})
    )
}