import { useState, useEffect } from "react";

const Header = () => {
    const heading = "This is the real header."
    

    const [count, setCount] = useState(1);
    let [name, setName] = useState("Vishwa");
    let [age, setAge] = useState(19);

    const handleClick = () => {
        setName("Vishwa Krithik");
        setAge(19.5);
    }

    const handleClicker = (name, age) => {
        setName(name);
        setAge(age);
        setCount(count + 1);
    }

    useEffect(() => {
        console.log("I shall run");
        console.log(name, age);
    }, [name, age]);

    return ( 
        <div className="header">
            <h2>{ heading }</h2>
            <p>Random number: { Math.random() * 10 }</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={ () => handleClicker("Vishwa", 19) }>Click me { count }</button>
            <p>{ name } is { age } years old</p>
        </div>
    );
}
 
export default Header