import React,{useState} from 'react'
import './App.css';

const App = () => {
    const [data,setData] =useState({
        username:"",
        email:"",
        password:"",
        confirmpassword:"",


    })
    const {username,email,password,confirmpassword} =data;
    const changehandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e => {
        e.preventDefault()
        if(password === confirmpassword){
            console.log("password are matching");
        }
        else{
            console.log("password are not matching")
        }
        
    }
    return(
        <div>
            <center>
                <form onSubmit={submitHandler} >
                    <h1>login form</h1>
                    <label>username</label> <br /> <br />
                    <input type="text" name="username" value={username} onChange={changehandler} /> <br />
                    <label>email</label> <br />
                    <input type="text" name="email" value={email} onChange={changehandler} /> <br />
                    <label>password</label> <br/>
                    <input type="password  "name="password" value={password} onChange={changehandler}/> <br />
                    <label>confirmpassword</label> <br/>
                    <input type="confirmpassword  "name="confirmpassword" value={confirmpassword} onChange={changehandler}/> <br />
                    <button>submit</button>
                </form>
            </center>
        </div>
    )
}
export default App;
