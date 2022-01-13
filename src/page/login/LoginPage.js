import {useState} from 'react'
import Logo from '../../compenent/logo/Logo'
import './LoginPage.css'

function LoginPage() {

    const [email, setEmail] = useState('')
    const [password,setPassword] = useState('')

    return (
        <div className="login__container">

            <Logo />

            <form className="login__form">
                <div className="login__title">Login</div>

                <div className="form__controle">
                    <label>Email</label>
                    <input 
                        type="email" 
                        placeholder='Email'
                        value={email}
                        onChange={({target}) => setEmail(target.value)}
                        required
                    />
                </div>

                <div className="form__controle">
                    <label>Password</label>
                    <input 
                        type="passord" 
                        placeholder='Password'
                        value={password}
                        onChange={({target}) => setPassword(target.value)}
                        required
                    />
                </div>

                <div className="login__btncl">
                    <button className='btn'>LOGIN</button>
                    <button className='btn'>Guest Credential</button>
                </div>
                
            </form>
        </div>
    )
}

export default LoginPage
