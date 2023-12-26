import React, { useState } from 'react'
import './form.css'

const Form = () => {
    const [name, setname] = useState()
    const [password, setpassword] = useState()
    const [nameerror, setnameerror] = useState()
    const [pswrderror, setpswrderror] = useState()
    const username = "Reshmi-02";
    const userpassword = "harleyquinn1234";
    const handle = (e) => {


        if (e.target.name === "usrna") {
            console.log(e.target.value, e.target.name);
            setname(e.target.value)
        }
        else if (e.target.name === "usrpsw") {
            console.log(e.target.value, e.target.name);
            setpassword(e.target.value)
        }

    }
    const validate = (e) => {
        e.preventDefault()
        if (isNaN(name)) {
            if (password.length >= 8) {
                if (name === username) {
                    if (password === userpassword) {
                        alert("Login Successful");
                    }
                    else {
                        alert("Enter correct password");
                    }
                }
                else {
                    alert("Enter correct username")
                }

            }
            else if (password.length < 8) {
                setpswrderror("password must be 8 character")
            }
        }
        else if (Number(name)) {
            setnameerror("number not allowed")
        }

    }
    return (

        <div className='form-section'>
            <div className='form-container'>
                <div className='form-row'>
                    <div className='form-col'>
                        <form onSubmit={validate}>
                            <div>
                               <div className='form-name'>
                                    <label>Username</label>
                               </div>
                                <div className='form-input'>
                                    <input type="text" name="usrna" value={name} onChange={handle} />
                                </div>
                                <p>{nameerror}</p>
                            </div>
                            <div>
                               <div className='form-name'>
                               <label>Password</label>
                               </div>
                                <div className='form-input'>
                                    <input type="password" name="usrpsw" value={password} onChange={handle} />
                                </div>
                                <p>{pswrderror}</p>
                            </div>
                            <button>submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Form