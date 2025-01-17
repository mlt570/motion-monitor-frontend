import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'

const Login = () => {
    // state to manage email and password inputs
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, isLoading} = useLogin()

    // function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault()
        await login (email,password)
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h3>Log in</h3>

            <label>Email: </label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)} // update email state on change
                value = {email} // set input val to email state
            />

            <label>Password: </label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)} 
                value = {password}
            />
            <button disabled={isLoading}>Log in</button>         
            {error && <div className="error">{error}</div>}

        </form>
    )
}

export default Login