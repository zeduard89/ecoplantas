import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { EjemploToolkit } from './EjemploToolkit';
import { addUser } from '../redux/userSlice'

function Ejemplo2doToolkit() {
    const dispatch = useDispatch();

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users/1")
        .then((response)=> response.json())
        .then((data)=>dispatch(addUser(data)))
        .catch((error)=> console.log(error))
    },[dispatch]);

    return(
        <div className= "Ejemplo2doToolkit">
            <EjemploToolkit/>
        </div>
    )
}
export default Ejemplo2doToolkit;