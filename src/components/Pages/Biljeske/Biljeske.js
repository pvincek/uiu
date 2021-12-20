import React, { useState, useEffect } from 'react';
import MainWrapper from '../../UI/MainWrapper';
import Biljeska from './Biljeska';
import './biljeske.css'
const Biljeske = () => {
const [biljeske, setBiljeske] = useState([
    {
        tekst: 'Kupi kruh',
        boja: 'violet',
        id: 1
    }
])
const [tekst,setTekst] = useState()
const [boja,setBoja] = useState('lightblue')
const onType = e => setTekst(e.target.value)
const onDelete = id => setBiljeske(biljeske.filter(b => b.id !== id))
const onClick = e => setBoja(e.target.style.backgroundColor);
const onSubmit = e => {
    e.preventDefault()
    const newNote = {
        tekst,
        boja,
        id: biljeske.length +1
    }
    setBiljeske([newNote, ...biljeske])
    setTekst('')

}
const [currBiljeske, setCurrBiljeske] = useState()
useEffect(() => {
    setCurrBiljeske(biljeske.map(b => <Biljeska
        tekst={b.tekst} deleteHandler={onDelete} boja={b.boja} id={b.id}/>))
},[biljeske])





return <MainWrapper>
    <div className="biljeske">
        <h2>Bilješke</h2>
        <form onSubmit={onSubmit}>
            <input required style={{backgroundColor: boja}} type="text" onChange={onType} value={tekst}/>
            <button type="submit" className="primary">Dodaj</button>
            <div className="colors">
                <button className="clrBtn active" type='button' onClick={onClick} style={{backgroundColor: 'lightgreen'}}></button>
                <button className="clrBtn" type='button' onClick={onClick} style={{backgroundColor: 'lightblue'}}></button>
                <button className="clrBtn" type='button' onClick={onClick} style={{backgroundColor: 'violet'}}></button>
                <button className="clrBtn" type='button' style={{backgroundColor: 'aquamarine'}} onClick={onClick}></button>
                <button className="clrBtn" type='button' onClick={onClick} style={{backgroundColor: 'darksalmon'}}></button>

            </div>
            <div className="cont">
            {currBiljeske}
            </div>
        </form>
    </div>
</MainWrapper>


}

export default Biljeske