import { useEffect,useState } from "react";




export const useFetch = (url) => {
 
        const [state, setState] = useState({
            datos: null,
            isLoading: true,
            hasError: null,
        })
  
    const getFetch = async ()=>{
        setState({
            ...state,
            isLoading:true,
            hasError:null,
        })
        const respuesta = await fetch(url);
        const datos = await respuesta.json();

       setState({
            datos,
            isLoading: false,
            hasError: null,

        })
        
    }
  useEffect(()=>{
    getFetch();
  },[url])
  
  
  return{
            datos: state.datos,
            isLoading: state.isLoading,
            hasError: state.hasError,
            
  };
    
    
  
     }

