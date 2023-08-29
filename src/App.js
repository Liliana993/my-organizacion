import { useState } from 'react';
import {v4 as uuid} from "uuid";
import './App.css'
import Header from "./componentes/Header/Header.js"
import Formulario from './componentes/Formulario/Formulario'
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';

function App() {

const [mostrarFormulario,actualizarMostrar] = useState(false)
const [colaboradores, actualizarColaboradores] = useState([{
  id: uuid(),
  equipo:"Front End",
  foto:"https://github.com/harlandlohora.png",
  nombre:"Harland Lohora",
  puesto: "Instructor",
  fav: true
},
{
  id: uuid(),
  equipo:"Programación",
  foto:"https://github.com/genesysaluralatam.png",
  nombre:"Genesys Rondón",
  puesto: "Desarrolladora de software e instructora",
  fav: false
},
{
  id: uuid(),
  equipo:"UX y Diseño",
  foto:"https://github.com/JeanmarieAluraLata.png",
  nombre:"Jeanmarie Quijada",
  puesto: "Instructora en Alura Latam",
  fav: false
},
{
  id: uuid(),
  equipo:"Front End",
  foto:"https://github.com/harlandlohora.png",
  nombre:"Harland Lohora",
  puesto: "Instructor",
  fav: false
},
{
  id: uuid(),
  equipo:"Devops",
  foto:"https://github.com/christianpva.png",
  nombre:"Christian Velasco",
  puesto: "Head en Alura Latam e instructor",
  fav: false
},
{
  id: uuid(),
  equipo:"Innovación y Gestión",
  foto:"https://github.com/JoseDarioGonzalezCha.png",
  nombre:"José Gonzales",
  puesto: "Dev FullStack",
  fav: false
}])

const [equipos, actualizarEquipos] = useState( [
  {
    id: uuid(),
    titulo: "Programación",
    colorPriario: "#57C278",
    colorSecundario: "#D9F7E9"
  },
  {
    id: uuid(),
    titulo: "Front End",
    colorPriario: "#E8F8FF",
    colorSecundario: "#82CFFA"
  },

{
  id: uuid(),
  titulo: "Data Science",
  colorPriario: "#F0F8E2",
  colorSecundario: "#A6D157"
},

{
  id: uuid(),
  titulo: "Devops",
colorPriario: "#FDE7E8",
colorSecundario: "#E06B69"
},

{
  id: uuid(),
  titulo: "UX y Diseño",
colorPriario: "#FAE9F5",
colorSecundario: "#DB6EBF"
},

{
  id: uuid(),
  titulo: "Móvil",
colorPriario: "#FFF5D9",
colorSecundario: "#FFBA05"
},

  {
    id: uuid(),
    titulo: "Innovación y Gestión",
  colorPriario: "#FFEEDF",
  colorSecundario: "#FFBA29"
  }
  

])

//Ternario --> condicion ? (entonces) seMuestra (sino) noSeMuestra

const cambiarMostrar = () => {
  actualizarMostrar(!mostrarFormulario)
}

//registrar colaborador
const registrarColaborador = (colaborador) => {
  console.log("Nuevo colaborador", colaborador)
  //spread operator
  actualizarColaboradores([...colaboradores, colaborador])
}

//eliminar colaborador
const eliminarColaborador = (id) => {
  console.log("eliminar colaborador", id)
  const nuevosColaboradores = colaboradores.filter((colaborador) => {
    return colaborador.id !== id
  })
  actualizarColaboradores(nuevosColaboradores)
}

//actualizar color de equipo
const actualizarColor = (color, id) => {
  console.log("Actualizar: ", color, id)
  const equiposActualizados = equipos.map((equipo) => {
if(equipo.id === id){
  equipo.colorSecundario = color
}

return equipo
  })

  actualizarEquipos(equiposActualizados)
}

//Crear equipo
const crearEquipo = (nuevoEquipo) => {
console.log(nuevoEquipo)
actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid()}])
}

const like = (id) => {
  console.log("like", id)
  const colaboradoresActualizados = colaboradores.map((colaborador) => {
    if(colaborador.id === id){
      colaborador.fav = !colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradoresActualizados)
}

  return (
    <div>
      <Header />
      {mostrarFormulario && <Formulario equipos={equipos.map((equipo) => equipo.titulo)} 
      registrarColaborador={registrarColaborador}
      crearEquipo={crearEquipo}
      /> 
      }

      <MiOrg cambiarMostrar={cambiarMostrar} />
      
      {   
      equipos.map((equipo) => <Equipo datos={equipo} 
      key={equipo.titulo} 
      colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
      eliminarColaborador={eliminarColaborador}
      actualizarColor={actualizarColor}
      like={like}
      />
      )
      }

      <Footer />

        </div>
  )}

export default App;
