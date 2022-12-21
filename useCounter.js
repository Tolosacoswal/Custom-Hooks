import { useState } from "react"



// esto es un hook una funcion
// el inicialvalue si no es suministrado le daremos el valor que cremos es el necesario 
export const useCounter = (inicialValue=10)=>{
    const [counter,setCounter]= useState(inicialValue)

    const añadir= (value = 1)=>{
        setCounter ((current)=> current  +value);
    }
    const reducir =(value = 1 )=>{
        // if(counter === 0)return;
        setCounter( (current)=> current -value);
    }
    const limpiar = ()=>{
        setCounter (inicialValue);
    }
    return{
        counter,añadir,reducir,limpiar

    }
}
// esto esn hook una funcion 