import './Form.css'
import React, { useState } from 'react';
const UserForm = props => {
    const [ime, setIme] = useState('')
    const [school, setSchool] = useState('');
    const [phone, setPhone] = useState('');
    const onIme = e => setIme(e.target.value)
    const onSchool = e => setSchool(e.target.value)
    const onPhone = e => setPhone(e.target.value)

    const submitHandler = e => {
        e.preventDefault()
        if(!school) {alert('Odaberi skolu!'); return}
        const id = Math.random()
        const newUser = {
            id,
            name: ime,
            phone,
            school
        }
        props.onUserForm(newUser)
        props.onClose()
    }

    return <form className="modalForm" onSubmit={submitHandler}>
        <div>
            <label>Ime
                <input type="text" required onChange={onIme} value={ime} />
            </label>
        </div>
        <div>
            <label>Skola
                <select 
                    name="Skola" 
                    id="Skola"
                    required
                    value={school}
                    onChange={onSchool}>
                        <option value={null}>Odaberi</option>
                        <option value="Srednja">Srednja</option>
                        <option value="Osnovna">Osnovna</option>
                        <option value="Fakultet">Fakultet</option>
                    </select>
            </label>
        </div>
        <div>
            <label>Telefon
                <input type="text" value={phone} onChange={onPhone} />
            </label>
        </div>
        <div>
            <button type="submit" className="primary">Dodaj</button>
            <button 
            className="secondary"
            onClick={props.onClose}
            >Odustani</button>
        </div>
    </form>

}

export default UserForm