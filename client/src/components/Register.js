import React,{Fragment,useState,useContext,useEffect} from 'react'
import {Link} from 'react-router-dom';
import UserContext from './UserState/userContext';
import AlertContext from './AlertState/alertContext';
import Alerts from './Alerts';
const Register = (props) => {
    const userContext=useContext(UserContext);
    const alertContext=useContext(AlertContext);
    const {error,isAuthenticated,Register,clearErrors}=userContext;
    const {setAlert}=alertContext;
    useEffect(()=>{
        if(isAuthenticated===true){
            props.history.push('/');
        }
        if(error==="User already exists!"){
            setAlert(error,'danger');        
            clearErrors();
        }
    })
    const [user,setUser]=useState({
        name:'',
        email:'',
        age:'',
        address:'',
        password:''
    })
    const{name,email,age,address,password}=user;
    
    const onChange =e=>{
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit=e=>{
        e.preventDefault();
        
        Register({name,email,age,address,password});
       
    }
    return (
    <Fragment>  
    <div className="container">
    <div className="row">
    <div className="col-sm">
    <Alerts/>
    <form onSubmit={onSubmit}>
    <div className="form-group">
    <label className="control-label col-sm-5" for="name">Full name</label>
    <div className="col-sm-8">
    <input onChange={onChange} type="text" className="form-control" name="name" value={name} required placeholder="Full name"/>
    </div>
 
    </div>
    <div className="form-group">
    <label className="control-label col-sm-5" for="email">Email address</label>
    <div className="col-sm-8">
    <input onChange={onChange} type="email" className="form-control" name="email" value={email} required placeholder="Email"/>
    </div>
   
    </div>
    <div className="form-group">
    <label className="control-label col-sm-5" for="age">Age</label>
    <div className="col-sm-8">
    <input onChange={onChange} type="text" className="form-control" name="age"value={age} required placeholder="Age"/>
    </div>
  
    </div>
    <div className="form-group">
    <label className="control-label col-sm-5" for="age">Address</label>
    <div className="col-sm-8">
    <input onChange={onChange} type="text" className="form-control" name="address"value={address} required placeholder="Address"/>
    </div>
    
    </div>
    <div className="form-group">
    <label className="control-label col-sm-5" for="password">Password</label>
    <div className="col-sm-8">
    <input onChange={onChange} type="password" className="form-control" name="password"value={password} required placeholder="Password"/>
    </div>
    </div>

    <div className="col-sm-offset-2 col-sm-10">
    <button type="submit" className="btn btn-black">Register</button>
    </div>
    </form>
    </div>
    <div className="col-sm">
        <h3>You already have an account?
            <Link to="/api/login"> Sign in</Link>
        </h3>
    </div>
    </div>
    </div> 
    </Fragment>   
    )
}

export default Register
