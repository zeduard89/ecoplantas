import { useSelector, useDispatch } from 'react-redux';
import { changeEmail } from '../redux/userSlice';

export const EjemploToolkit = () =>{

    const dispatch = useDispatch();
                    //      -Estado- -nombre del slice-
    const user = useSelector((state)=> state.user)
    const email = useSelector((state)=> state.user.email)

    const handleChange = (event) =>{
        dispatch(changeEmail(event.target.value));
    }

    return (
        <div className= "EjemploToolkit">
            <div>
                <h1> Redux Toolkit Example</h1>
                <ul>
                    <li>Name:{user.name}</li>
                    <li>Email:{user.email}</li>
                    <li>UserName:{user.userName}</li>
                </ul>
            </div>
            <input type="email" value={email} placeholder='Email' onChange={handleChange} />
        </div>
    )

}

export default EjemploToolkit;
