import React, { useState } from 'react';
import './Form.css'
const EventForm = props => {
    const [naslov,setNaslov] = useState()
    const [start,setStart] = useState()
    const [end,setEnd] = useState()
    const [note,setNote] = useState()
    const onNaslov = e => setNaslov(e.target.value)
    const onStart = e => setStart(new Date(e.target.value))
    const onEnd = e => setEnd(new Date(e.target.value))
    const onNote = e => setNote(e.target.value)


    const submitHandler = e => {
        e.preventDefault()
        const newEvent = {
            title: naslov,
            start,
            end,
            note
        }


        props.onEventForm(newEvent)
        props.onClose()
    }


    return <form className="modalForm" onSubmit={submitHandler} >
            <label>Naslov</label>
            <input type="text" required onChange={onNaslov} />
            <div className='date-grid'>
            <div>
                <label>Početak</label>
                <input onChange type="datetime-local" onChange={onStart}  />
            </div>
            <div>
                <label>Kraj</label>
                <input type="datetime-local" onChange={onEnd} />
            </div>
            </div>
            <label>Napomene</label>
            <textarea cols="30" rows="10" onChange={onNote}></textarea>

        <div>
        <button className="primary" type="submit">Dodaj</button>
        <button className="secondary" onClick={props.onClose}>Odustani</button>
        </div>
    </form>
}

export default EventForm