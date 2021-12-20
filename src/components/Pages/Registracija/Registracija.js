import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Registracija.css'
import Modal from '../../Modal/Modal';
const Registracija = () => {
let history = useHistory();
const [username, setUsername] = useState('')
const [date,setDate] = useState()
const [sex,setSex] = useState()
const [password,setPassword] = useState('')
const [rPassword,setRPassword] = useState('')
const [userMsg,setUserMsg] = useState(false)
const [passwordCheck,setPasswordCheck] = useState(true);
const [rPasswordCheck,setRPasswordCheck] = useState(true)
const [regModal,setRegModal] = useState(false)
const [leaveModal, setLeaveModal] = useState(false)

// username check
useEffect(() => {
    const userTimer = setTimeout(() => {
        if(username.length > 3) setUserMsg(true)
        else setUserMsg(false)
    }, 1000)
    return () => clearTimeout(userTimer)
},[username])

const onUsername = e => setUsername(e.target.value)

// password check
const onPassword = e => setPassword(e.target.value)
useEffect(() => {
    const passwordTimer = setTimeout(() => {
        if(password.length < 6 && password.length > 2) setPasswordCheck(false)
        else setPasswordCheck(true)
    }, 1000)
    return () => clearTimeout(passwordTimer)
}, [password])

// repeated password
const onRPassword = e => setRPassword(e.target.value)
useEffect(() => {
    const rPasswordTimer = setTimeout(() => {
        if(rPassword && rPassword != password) setRPasswordCheck(false)
        else if( rPassword && rPassword === password) setRPasswordCheck(true)

    }, 1000)
    return () => clearTimeout(rPasswordTimer)
}, [rPassword, password])

const onSubmit = e => {
    e.preventDefault()
    if(!sex) alert('Odaberite spol!');
    if(passwordCheck && rPasswordCheck && userMsg) setRegModal(true)
    

}
// date and sex
const onDate = e => setDate(e.target.value)
const onSex = e => setSex(e.target.value)

return <>
<div className="background">
    <div className="registracija">
    <h2>Registracija</h2>
    <form onSubmit={onSubmit}>
        <p style={{color: 'green'}}>{userMsg ? 'Korisnik Pronađen!' : ''}</p>
        <label>Korisničko ime</label>
        <input required onChange={onUsername} value={username} type="text" placeholder='LDAP korisničko ime' />
        <label>Broj mobitela</label>
        <input type="tel"  />
        <label>Datum rođenja</label>
        <input required value={date} onChange={onDate} type="date"/>
        <label>Spol</label>
        <select onChange={onSex} value={sex}>
            <option value={undefined}>Odaberite</option>
            <option value="muško">Muško</option>
            <option value="žensko">Žensko</option>
            <option value="drugo">Drugo</option>
        </select>
        <label>Lozinka</label>
        <p style={{color: 'red'}}>{passwordCheck ? '' : 'Lozinka prekratka!'}</p>
        <input required onChange={onPassword} type="password"  />
        <label>Ponovite lozinku</label>
        <p style={{color: 'red'}}>{rPasswordCheck ? '' : 'Lozinke se ne podudaraju!'}</p>
        <input onChange={onRPassword} type="password" />
        <label>Radno mjesto</label>
        <input type="text" />
        <label>Grad</label>
        <input required type="text" />
        <label>Profilna slika</label>
        <input type="file"  />
        <button type='submit' className="primary">Registracija</button>
        <button type='button' onClick={() => setLeaveModal(true)} className="secondary">Odustani</button>

    </form>
</div>
</div>
<Modal isOpen={regModal} onClose={() => history.push('/')}>
    <h4>Registracija uspjesna</h4>
    <button onClick={() => history.push('/')} className="primary">Na prijavu</button>
</Modal>
<Modal isOpen={leaveModal} onClose={() => setLeaveModal(false)}>
    <h4>Jeste li sigurni?</h4>
    <p>Svi upisani podaci bit će izgubljeni.</p>
    <button onClick={() => history.push('/')} className="primary">Napusti</button>
    <button onClick={() => setLeaveModal(false)} className="secondary">Ostani</button>
</Modal>
</>
}

export default Registracija