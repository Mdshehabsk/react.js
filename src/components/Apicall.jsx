import React, { useEffect, useState } from "react";
import Skleton from "./Skleton";
const Apicall = () => {
  const [value, setvalue] = useState(['']);
    const api = async () => {
            const data = await fetch("https://jsonplaceholder.typicode.com/todos");
        const actualData = await data.json();
        setvalue(actualData)

    }
    useEffect(()=>{
        setTimeout(() => {
          api()
        }, 3000);
    },[])
    const arr = []
    for(let i = 0; i<200;i++){arr.push(i)}

  return (
    <div>
      {
        value.map(elem=>{
          return(
            elem ? <h1> {elem.title} </h1> : arr.map(n=><Skleton key={n} ></Skleton>)
          )
        })
      }

    </div>
  );
};

export default Apicall;
