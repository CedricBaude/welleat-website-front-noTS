import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import "./auth.css";

import { accountService } from '../../_services/account.service';

const Login = () => {
    let navigate = useNavigate();
    // const [login, setLogin] = useState('');
    // const [password, setPassword] = useState('');
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        accountService.login(credentials)
            .then(res => {
                console.log(res)
                accountService.saveToken(res.data.accessToken)
                navigate('/admin')
            })
            .catch(error => console.log(error))
    }

    return (
        <div className="login-content">

            <div className="login-logo">

            </div>
            <div className="login-logo-text">

            </div>
            <form action="" onSubmit={onSubmit} className="form-login">
                <div className="group">
                    <label className='form-login-label' htmlFor="login">Identifiant</label>
                    <input className='form-login-input' type="text" name="email" value={credentials.email} onChange={onChange} />
                </div>
                <div className="group">
                    <label className='form-login-label' htmlFor="password">Mot de passe</label>
                    <input className='form-login-input' type="text" name='password' value={credentials.password} onChange={onChange} />
                </div>
                <div className="group">
                    <button className='form-login-button'>CONNEXION</button>
                </div>
            </form>
        </div>
    );
};

export default Login;