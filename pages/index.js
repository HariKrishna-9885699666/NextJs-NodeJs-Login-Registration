import Login from './login';

export default function Root({...props}){
    return(
        <>
            <Login {...props}></Login>
        </>
    )
}