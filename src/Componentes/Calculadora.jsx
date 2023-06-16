

import React, { useState } from "react";
import './Calculadora.css'
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

export default function Calculadora(){
const[num,setNum] = useState(0);
const[oldnum,setOldNum] = useState(0);
const[operador,setOperador] = useState();

function inputNum(e){
var input = e.target.value;
if(num===0){
    setNum(input);
}else{
    setNum(num + input);

}
}

function clear (e){
    setNum(0);
}

function porcentagem(){
    setNum(num / 100);
}

function changeSign (){
    if(num>0){
        setNum(-num);
    }else{
setNum(Math.abs(num));
    }
}

function operatorHandler(e){
var operatorInput=e.target.value;
setOperador(operatorInput);
setOldNum(num);
setNum(0);
}

      function Calculate() {
        if (operador === "/") {
          setNum(parseFloat(oldnum) / parseFloat(num));
        } else if (operador === "X") {
          setNum(parseFloat(oldnum) * parseFloat(num));
        } else if (operador === "-") {
            console.log(oldnum)
            console.log(num)
            console.log(oldnum-num)
          setNum(parseFloat(oldnum) - parseFloat(num));
        } else if (operador === "+") {
          setNum(parseFloat(oldnum) + parseFloat(num));
        }
      }



return(
<Container maxWidth="xs">
<Box m={5}/>

<div className="wrapper">

<Box m={2}/>

<h1 className="result">{num}</h1>
          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={porcentagem}>%</button>
          <button className="orange" onClick={operatorHandler} value={"/"}>
            /
          </button>
          <button className="gray" onClick={inputNum} value={7}>
            7
          </button>
          <button className="gray" onClick={inputNum} value={8}>
            8
          </button>
          <button className="gray" onClick={inputNum} value={9}>
            9
          </button>
          <button className="orange" onClick={operatorHandler} value="X">
            X
          </button>
          <button className="gray" onClick={inputNum} value={4}>
            4
          </button>
          <button className="gray" onClick={inputNum} value={5}>
            5
          </button>
          <button className="gray" onClick={inputNum} value={6}>
            6
          </button>
          <button className="orange" onClick={operatorHandler} value="-">
            -
          </button>
          <button className="gray" onClick={inputNum} value={1}>
            1
          </button>
          <button className="gray" onClick={inputNum} value={2}>
            2
          </button>
          <button className="gray" onClick={inputNum} value={3}>
            3
          </button>
          <button className="orange" onClick={operatorHandler} value="+">
            +
          </button>
          <button className="gray" onClick={inputNum} value={0}>
            0
          </button>
          <button className="gray" onClick={inputNum} value={"."}>
            ,
          </button>
          <button className="gray" style={{ visibility: "hidden" }}>
            ,
          </button>
          <button className="orange" onClick={Calculate}>
            =
          </button>
</div>

</Container>

);
}