import React, { Component } from 'react'
import Global from '../Global'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

export default class Createhospital extends Component {

    cajaId = React.createRef()
    cajaNombre = React.createRef()
    cajaDireccion = React.createRef()
    cajaTelefono = React.createRef()
    cajaCamas = React.createRef()

    insertNewHospital = (e) => {
        e.preventDefault()

        let hospital = {
            idhospital: parseInt(this.cajaId.current.value),
            nombre: this.cajaNombre.current.value,
            direccion: this.cajaDireccion.current.value,
            telefono: this.cajaTelefono.current.value,
            camas: parseInt(this.cajaCamas.current.value)
        }

        let request = "https://apicrudhospital.azurewebsites.net/webresources/hospitales/post"
        axios.post(request, hospital).then(response => {
            console.log("Hospital insertado correctamente !")
            this.setState({
                status: true
            })
        })

    }

    state = {
        status: false
    }
    
    render() {
        return (
            <div>

            {
                this.state.status &&
                <Navigate to="/hospitales"/>
            }

                <h2 style={{ color: "darkgreen", textAlign: "center", padding: "2em" }}>RELLENE LOS DATOS PARA AÑADIR UN  NUEVO HOSPITAL</h2>

                <form className='w-25 mx-auto' onSubmit={this.insertNewHospital}>

                    <label className="">ID: </label>
                    <input type="text" className='form-control' ref={this.cajaId} />
                    <label className="">Nombre: </label>
                    <input type="text" className='form-control' ref={this.cajaNombre} />
                    <label className="">Dirección: </label>
                    <input type="text" className='form-control' ref={this.cajaDireccion} />
                    <label className="">Teléfono: </label>
                    <input type="text" className='form-control' ref={this.cajaTelefono} />
                    <label className="">Camas: </label>
                    <input type="text" className='form-control' ref={this.cajaCamas} />

                    <div className='p-3 d-grid'>
                        <input className='btn btn-success d-grid' type="submit" value="Crear"/>
                    </div>

                </form>

            </div>
        )
    }
}
