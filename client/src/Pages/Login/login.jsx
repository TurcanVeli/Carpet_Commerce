import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import "./login.css"


const Login = () => {
    return (
        <div className='login-page'>
            <div className="login-form-container">
                <div className="login-logo-container">
                    <div className="login-logo">
                        <LoginIcon/>
                    </div>
                    <div className="login-title">
                        Üye Girişi
                    </div>
                </div>
                <form action="" className='form-container'>
                    <label for="fname">First name:</label>
                    <input type="text" id="fname" name="fname" />
                    <label for="lname">Last name:</label>
                    <input type="text" id="lname" name="lname" />
                </form>
                <div className="login-buttons-container">
                    <div className="login-remember-me-container">
                        beni hatırla
                    </div>
                    <div className="login-forgot-passwd-container">
                        şifremi unuttum
                    </div>

                </div>
                <div className="login-button">
                    Giriş Yap
                </div>
                <div className="login-register-button">
                    Hesabınız yoksa üye olmak için tıklayınız
                </div>
            </div>

        </div>
    )
}

export default Login
