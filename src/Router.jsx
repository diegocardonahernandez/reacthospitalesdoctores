import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import Home from './components/Home'
import MenuHospitales from './components/MenuHospitales'
import Doctores from './components/Doctores'
import DoctorDetalles from './components/DoctorDetalles'
import Createhospital from './components/Createhospital'

export default class Router extends Component {

    render() {

        function ShowDoctores() {
            let { idhospital } = useParams()
            return <Doctores hospital={idhospital} />
        }

        return (
            <BrowserRouter>
                <MenuHospitales />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/doctores/:idhospital' element={<ShowDoctores/>}/>
                    <Route path='/crearhospital' element={<Createhospital/>}/>  
                </Routes>
            </BrowserRouter>
        )
    }
}
