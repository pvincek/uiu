import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './Registracija.css'

const Registracija2 = () => {

    return <div className="background">
        <div className="registracija">
        <form>
            <label>Radno mjesto</label>
            <input type="text" />
            <label>Grad</label>
            <input type="text" />
        </form>
    </div>
    </div>
}

export default Registracija2