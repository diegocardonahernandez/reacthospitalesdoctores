import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class DoctorDetalles extends Component {

    state = {
        doctor: null
    }


    loadDoctorData = () => {

        console.log("Buscando doctor")
        let request = "api/Doctores/" + this.props.iddoc
        axios.get(Global.apiDoctores + request).then(response => {
            console.log("Datos del Doctor recibidos!")
            this.setState({
                doctor: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadDoctorData()
    }

    componentDidUpdate = (oldProps) => {

        if (oldProps.iddoc != this.props.iddoc) {
            this.loadDoctorData()
        }

    }


    render() {
        return (
            <div>

                {
                    this.state.doctor != null &&

                    <table className='table table-dark w-25 mx-auto'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>AEPELLIDO</th>
                                <th>ESPECIALIDAD</th>
                                <th>SALARIO</th>
                                <th>ID HOSPITAL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{this.state.doctor.idDoctor}</td>
                                <td>{this.state.doctor.apellido}</td>
                                <td>{this.state.doctor.especialidad}</td>
                                <td>{this.state.doctor.salario}</td>
                                <td>{this.state.doctor.idHospital}</td>
                            </tr>
                        </tbody>
                    </table>
                }

            </div>
        )
    }
}
