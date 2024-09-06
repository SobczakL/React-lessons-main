import { useRef } from "react"

export default function UseRefBasic(){

    const buttonRef = useRef(0)

    const handleClick = () => {
        buttonRef.current = buttonRef.current + 1
        alert(`You clicked me ${buttonRef.current}`)
    }

    return (
        <div>
            <button onClick={handleClick}>Click me!</button>
        </div>
    )
}