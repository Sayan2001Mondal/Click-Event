import {useState} from "react";

function MyCounter(){
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState("false");


    const updateName = () => {
        setName("Doge");
    }

    const incrementAge = () => {
        setAge(age +1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p> Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p> Is Employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle Status</button>

            <p> Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>
        </div>
    );
}
export default MyCounter