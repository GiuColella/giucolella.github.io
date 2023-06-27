import React from 'react'
import './calendario.css'
import Header from '../header/Header'

// const msjDay = 'Los horarios estarán pronto disponibles'

function Calendario() {
    return (
        <>
            <div>
                <Header/>
            </div>
            <div className='cont_calendario'>
                <ul>
                    <li className=''>
                        <h3>Lun</h3>
                    </li>
                    <li className=''>
                        <h3>Lun</h3>
                    </li>
                    <li className=''>
                        <h3>Lun</h3>
                    </li>
                    <li className=''>
                        <h3>Lun</h3>
                    </li>
                    <li className=''>
                        <h3>Lun</h3>
                    </li>
                    <li className=''>
                        <h3>Lun</h3>
                    </li>
                    <li className=''>
                        <h3>Lun</h3>
                    </li>
                </ul>
            </div>
        </>

    )
}

export default Calendario