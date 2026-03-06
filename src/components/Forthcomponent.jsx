// Create a Fourthcomponent.jsx, have two variables i.e weight and height and bind them on the user interface. Then render the component on App.js
const Forthcomponent = () => {
    let weight = "65Kg";
    let height = "189cm\u00B2";

    return(
        <div className="Forthcomponent">
            <h1>This is my forth component</h1>
            <h5>His weight is: {weight}</h5>
            <h5>His height is: {height}</h5>
        </div>
    )
}

export default Forthcomponent;