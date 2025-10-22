import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'

export default class Hospitales extends Component {

    state = {
        hospitales: null
    }

    loadHospitales = () => {
        console.log("Accediendo al servicio")
        axios.get(Global.apiHospitales).then(response => {
            console.log("Datos Hospitales recibidos!!!")
            this.setState({
                hospitales: response.data
            })
        })
    }

    componentDidMount = () => {
        this.loadHospitales()
    }

    render() {

        return (
            <div>

                <table className='table table-success table-bordered mx-auto w-50 p-3'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>DIRECCION</th>
                            <th>TELEFONO</th>
                            <th>CAMAS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.hospitales != null &&
                            this.state.hospitales.map((hosp, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{hosp.idhospital}</td>
                                        <td>{hosp.nombre}</td>
                                        <td>{hosp.direccion}</td>
                                        <td>{hosp.telefono}</td>
                                        <td>{hosp.camas}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}
