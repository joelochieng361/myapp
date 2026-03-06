import { useState } from "react"

const Sixthcomponent = () => {
    const [weight, setWeight] = useState(50)
    return(
        <div className="Sixthcomponet">
            <h1>Welcome to the Sixth component</h1>

            <h2>Current Weight is: {weight}kg</h2>
            <button onClick={ () => setWeight(55)}>Update Weight</button>
        </div>
    )
}

export default Sixthcomponent;