import { useState } from "react";

function Calculator() {
    const[num1,setNum1]=useState("")
    const[num2,setNum2]=useState("")
    const[type,setType]=useState("")
    const[res,setRes]=useState(null)

    function handleClick(){
       const n1 = parseFloat(num1);
       const n2 = parseFloat(num2);

      if(isNaN(n1) || isNaN(n2)){
        setType("please enter valid numbers");
      return;}

       let result;
 
    switch (type) {
      case "+":
        result = n1 + n2;
        break;
      case "-":
        result = n1 - n2;
        break;
      case "*":
        result = n1 * n2;
        break;
      case "/":
        result = n2 !==0 ? n1 / n2 : "can not devide by 0 ";
      break;
      default:

        result = "Invalid operation";
    }

    setRes(result);
  }
  
    return (
        <div>
          <input
          value={num1}
          placeholder="first-number"
          onChange={(e)=>setNum1(Number(e.target.value))}
          />  
           <input
          value={num2}
          placeholder="second-number"
          onChange={(e)=>setNum2(Number(e.target.value))}
          />  
         <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="+"> + </option>
        <option value="-"> - </option>
        <option value="*"> * </option>
        <option value="/"> / </option>

        </select>

          <button onClick={handleClick}> Calculate </button>
          <p>{res}</p>
        </div>
    );
}
export default Calculator;