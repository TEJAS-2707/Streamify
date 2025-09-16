import React,{useState} from 'react';


function button(){
    const [count, setCount] = useState(0);
    const Click = () =>{
        setCount(count+1);
    };
    return(
        <h1>Counter : {count}</h1>
        <button onclick={Click}>count</button>
    );
}
