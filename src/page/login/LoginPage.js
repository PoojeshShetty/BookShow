import {useState} from 'react'
import Logo from '../../compenent/logo/Logo'
import { Link} from 'react-router-dom'
import './LoginPage.css'
import useLogin from '../../hook/useLogin'

function LoginPage() {

    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {login, error} = useLogin()

    const handleLogin = (e) => {

        e.preventDefault()

        login(email,password)

    }  
         
    return (
        <div className="login__container">

            <Logo />

            <form className="login__form" onSubmit={(e) => handleLogin(e)}>
                <div className="login__title">Login</div>

                {
                    error && <div className="error--msg">{error}</div>
                }

                <div className="form__controle">
                    <label>Email</label>
                    <input 
                        type="email" 
                        placeholder='Email'
                        value={email}
                        onChange={({target}) => setEmail(target.value.trim())}
                        required
                    />
                </div>

                <div className="form__controle">
                    <label>Password</label>
                    <input 
                        type="password" 
                        placeholder='Password'
                        value={password}
                        onChange={({target}) => setPassword(target.value.trim())}
                        required
                    />
                </div>

                <div className="login__btncl">
                    <button className='btn'>LOGIN</button>
                    <button className='btn'>Guest Credential</button>
                </div>
                
                <div className="signup__link">
                    Do not have an account ? <Link to="/signup">Sign up</Link>
                </div>
            </form>
        </div>
    )
}

export default LoginPage
