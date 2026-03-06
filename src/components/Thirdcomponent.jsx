// Variable enables us to create dynamic websites. (It means the contents of the website will be changing over time.)
    // Below we declare some varibles. Note: variables are usually declared just before the return statement in Reactjs.
const Thirdcomponent = () => {
    let name = "Benson";
    let age = 25;
    let message = "I love programming"

    return(
        <div className="Thirdcomponent">
            <h1>Welcome to my third component</h1>
            <h5>My name is: {name}</h5>
            <h5>my age is: {age}</h5>
            <h5>message is {message}</h5>
      </div>
    )
}

export default Thirdcomponent;