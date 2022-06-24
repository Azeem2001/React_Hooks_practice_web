import React, { useState } from 'react'
import "./form.css"
const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [allEntry, setAllEntry] = useState([])

    const submitForm = () => {
        const newEntry = { email: email, password: password }
        
        setAllEntry([... newEntry]);
    }

    return (
        <div>
            <form action="" onSubmit={submitForm}>
                <div className='flex'>
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" name='email' id='email' autoComplete='off' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='flex'>
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" name='password' id='password' autoComplete='off' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <button type='submit'>Login</button>
            </form>
        </div>
    )
}

export default Form