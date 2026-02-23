import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import SumCard from './SumCard';

function App(){
    const [a,setA] = useState(20);
    const [b,setB] = useState(15);
    const [res,setRes] = useState(null);
    // const [c,setC] = useState(null);

    // function handleClick(){
    //     setC(a+b);
    // }

    // function increaseA(){
    //     setA(a+1);
    // }

    // function increaseB(){
    //     setB(b+1);
    // }
    return(
        <div>
            <Header/>
            <SumCard a = {a} b = {b} setRes = {setRes}/>
            <p>The sum is: {res}</p>
            {/* <p>The value of a is: {a}</p> 
            <button onClick={increaseA}>Increase the value of a</button>
            <p>The value of b is: {b}</p>
            <button onClick={increaseB}>Increase the value of a</button>
            <button onClick={handleClick}>Calculate</button>  
            <p>The sum of {a} and {b} is: {c}</p>
            <h2>Darpan Giri</h2>
            <h3>Hello World</h3>   */}
            <Footer/>     
        </div>
    )
}

export default App;