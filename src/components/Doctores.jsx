import axios from 'axios'
import React, { Component } from 'react'
import Global from '../Global'
import { NavLink } from 'react-router-dom'
import DoctorDetalles from './DoctorDetalles'

export default class Doctores extends Component {

    state = {
        doctores: [],
        doctor: null
    }

    loadDoctores = () => {
        console.log("Accediendo info doctores...")
        let request = "api/Doctores/DoctoresHospital/" + this.props.hospital
        axios.get(Global.apiDoctores + request).then(response => {
            console.log("Doctores recibidos!")
            console.log(Global.apiDoctores + request)
            this.setState({
                doctores: response.data
            })
        })
    }


    selectDoctor = (doc) => {
        this.setState({
            doctor: doc
        })
    }

    componentDidMount = () => {
        this.loadDoctores()
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.hospital != this.props.hospital) {
            this.setState({
                doctor: null
            })
            this.loadDoctores()
        }
    }


    render() {
        return (
            <div>
                <h2 style={{ color: "green", textAlign: "center", fontFamily: "fantasy" }}>
                    Doctores Hospital: {this.props.hospital}
                </h2>
                <table className='table table-secondary w-25 mx-auto'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>APELLIDO</th>
                            <th>ESPECIALIDAD</th>
                            <th>SALARIO</th>
                            <th>DETALLES</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.doctores.map((doctor, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{doctor.idDoctor}</td>
                                        <td>{doctor.apellido}</td>
                                        <td>{doctor.especialidad}</td>
                                        <td>{doctor.salario}</td>
                                        <td>
                                            <button onClick={() => {
                                                this.selectDoctor(doctor)
                                            }}
                                                value={doctor.idDoctor} className='btn btn-dark'>
                                                Ver Detalles</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                {
                    this.state.doctor != null && 
                    <DoctorDetalles iddoc={this.state.doctor.idDoctor}/>
                }
                
            </div>
        )
    }
}
