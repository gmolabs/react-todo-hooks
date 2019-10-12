import { useState } from "react"

function useToggleState(initialVal = false) {
    //call useState to "reserve a piece of state"
    const [state, setState] = useState(initialVal)
    const toggle = () => {
        setState(!state)
    }

    //return piece of state AND a function
    return [state, toggle]
}

export default useToggleState