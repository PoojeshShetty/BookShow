import {useState} from 'react'
import Logo from '../../compenent/logo/Logo'
import './SignupPage.css'

function SignupPage() {
    
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    return (
        <div className="signup__container">

            <Logo />

            <form className="signup__form">
                <div className="signup__title">Sign Up</div>

                <div className="form__controle">
                    <label>Username</label>
                    <input 
                        type="text" 
                        placeholder='Username'
                        value={username}
                        onChange={({target}) => setUsername(target.value)}
                        required
                    />
                </div>

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

                <button className='btn'>SIGNUP</button>
                
            </form>
        </div>
    )
}

export default SignupPage
