import React,{useState,useContext,useEffect} from 'react'
import UserContext from './UserState/userContext';
import AlertContext from './AlertState/alertContext';
import Alerts from './Alerts';
const Login = (props) => {
    const userContext=useContext(UserContext);
    const alertContext=useContext(AlertContext);
    const {isAuthenticated,Login,error,clearErrors}=userContext;
    const {setAlert}=alertContext;
    useEffect(()=>{
        if(isAuthenticated===true){
            props.history.push('/');
        }
        if(error){
            
            setAlert(error,'danger');        
            clearErrors();
        }
    })
    const [user,setUser]=useState({
        email:'',
        password:''
    });
    const {email,password}=user;
   
    const onChange=e=>{
        setUser({...user,[e.target.name]:e.target.value});
    }
    const onSubmit=e=>{
        e.preventDefault()
        Login({email,password})
       
    }
    return (
        <div className="container">
        <div className="row">
    <div className="col-sm">
    <Alerts/>
    <form onSubmit={onSubmit}>

    <div className="form-group">
    <label className="control-label col-sm-5" for="email">Email address</label>
    <div className="col-sm-8">
    <input onChange={onChange} type="email" className="form-control" name="email"value={email} required placeholder="Email"/>
    </div>
    </div>
    <div className="form-group">
    <label className="control-label col-sm-5" for="password">Password</label>
    <div className="col-sm-8">
    <input onChange={onChange} type="password" className="form-control" name="password" value={password} required placeholder="Password"/>
    </div>
    </div>
    <div className="col-sm-offset-2 col-sm-10">
    <button type="submit" className="btn btn-black">Login</button>
    </div>
    </form>
    </div>
    <div className="col-sm">
        <h3>Sign in and start buying!
        </h3>
    </div>
        </div>
        </div>
    )
}

export default Login
