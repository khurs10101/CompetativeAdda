import React from 'react'


const Login= ()=>(
    <div>
        <form>
            <label>Email:
                <input type="text" name="email"/>
            </label>
            <label>Password:
                <input type="password" name="password"/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    </div>
)

export default Login