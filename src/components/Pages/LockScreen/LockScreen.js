import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './LockScreen.css'
const LockScreen = props => {
    let history = useHistory()
    const [emailVal,setEmailVal] = useState('')
    const [passwordVal,setPasswordVal] = useState('')
    const [emailError,setEmailError] = useState()
    const emailChange = e => setEmailVal(e.target.value.trim())
    const passwordChange = e => setPasswordVal(e.target.value)
    useEffect(() => {
        const emailTimer = setTimeout(() => {
            if(!emailVal.includes('@foi.hr') && emailVal.length > 1){
                setEmailError('Adresa mora sadržavati @foi.hr')
            }
            else setEmailError()},500)
            return () => clearTimeout(emailTimer)
    }, [emailVal])

    const onSubmit = e => {
        e.preventDefault()
        if(passwordVal.length < 6){
            alert('Netocna lozinka!')
            return null;
        }
        if(emailVal.includes('@foi.hr')){
            history.push('/kalendar')
        }

    }

    




    return <div className="lock">
        <div className="login">
            <img src='https://cdn.discordapp.com/attachments/901025438770540554/922172141921779722/Capture-removebg-preview.png'/>
            <h2>Prijava</h2>
            <form onSubmit={onSubmit}>
            <p style={{color: 'red'}}>{emailError}</p>
                <label>Email</label>
               <div className="inputs">
                <input
                    type="email"
                    value={emailVal}
                    onChange={emailChange}/>
                <label>Lozinka</label>
                <input  type="password"
                        value={passwordVal}
                        onChange={passwordChange}/>


               </div>
               <a href="#">Zaboravljena lozinka?</a>
                <div className='checky'><input type="checkbox" name="zapamti" id="zapamti" />
                <label htmlFor="zapamti"> Zapamti me na ovom uređaju</label>
                </div>
                <div><button className='loginBtn' type="submit">Prijava</button>
                <button
                    type='button'
                    className='secondary'
                    onClick={() => history.push('/registracija')}>Registracija</button></div>

               
            </form>

        </div>
    </div>
}

export default LockScreen