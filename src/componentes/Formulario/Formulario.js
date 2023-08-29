import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo/Campo"
import ListaOpciones from "../ListaOpciones/ListaOpciones"
import Boton from "../Boton/Boton"

const Formulario = (props) => {

    const [nombre,actualizarNombre] = useState("")
    const [puesto,actualizarPuesto] = useState("")
    const [foto,actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [ titulo, actualizarTitulo] = useState("")
    const [ color, actualizarColor] = useState("")

    const {registrarColaborador, crearEquipo} = props

const manejarEnvio = (event) => {
    event.preventDefault()
    console.log("Manejar el envio")

    let datosAEnviar = {
        nombre,
    puesto,
    foto,
    equipo    
    }

    registrarColaborador(datosAEnviar)
}

const manejarNuevoEquipo = (e) => {
    e.preventDefault()
    crearEquipo({titulo, colorSecundario: color})
}

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>

        <Campo 
        titulo="Nombre" 
        placeholder="Ingrese nombre" 
        required valor={nombre} 
        actualizarValor={actualizarNombre} 
        />
        <Campo 
        titulo="Puesto" 
        placeholder="Ingrese puesto" 
        required
        valor={puesto} 
        actualizarValor={actualizarPuesto} 
        />
        <Campo 
        titulo="Foto" 
        placeholder="Ingrese foto" 
        required
        valor={foto} 
        actualizarValor={actualizarFoto}  
        />
        <ListaOpciones 
        valor={equipo}
        actualizarEquipo= {actualizarEquipo}
        equipos={props.equipos}
        />
        <Boton texto="Crear colaborador" />
        </form>

        <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el equipo.</h2>

        <Campo 
        titulo="Titulo" 
        placeholder="Ingresar titulo" 
        required valor={titulo} 
        actualizarValor={actualizarTitulo} 
        />
        <Campo 
        titulo="Color" 
        placeholder="Ingresar el color en Hexa" 
        type="color"
        required
        valor={color} 
        actualizarValor={actualizarColor} 
        />
        <Boton texto="Crear equipo" />
        </form>
    </section>
}

export default Formulario