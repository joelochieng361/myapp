import { useState } from "react"

const Fifthcomponent = () => {
    
    
    //The usestate() hook enables to create dynamic websites whereby it usually has the start initials followed by a state that get shown when an effect happens on a website

    const [number, setNumber] = useState(10)
    return(
        <div className="Fifthcomponent">
            {/* Below we bind the value for number */}
            <h1>Welcome to our Fifth component</h1>

            <h2>Current number is: {number}</h2>

            {/* Call the setNumber function to update number after click effect */}
            <button onClick={ () => setNumber(20)}> Click to update the number </button>
        </div>
    )
}
export default Fifthcomponent;