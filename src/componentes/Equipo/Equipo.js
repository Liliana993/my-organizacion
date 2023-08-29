import "./Equipo.css"
import Colaborador from "../Colaborador/Colaborador.css/Colaborador"
import hexToRgba from 'hex-to-rgba';

const Equipo = (props) => {

    const { colorPriario, colorSecundario, titulo, id } = props.datos

    const{colaboradores, eliminarColaborador, actualizarColor, like} = props

    const obj = {
        backgroundColor: hexToRgba (colorSecundario, 0.6)
    }

    const obje = {
        borderColor: colorSecundario
    }

return <>
{ colaboradores.length > 0 &&
    <section className="equipo" style={obj} >
        <input 
        type="color"
        className="input-color"
        value={colorSecundario}
        onChange={(event) => {
            actualizarColor(event.target.value, id)
        }}
        />
<h3 style={obje} >{titulo}</h3>
<div className="colaboradores">
{
    colaboradores.map( (colaborador) => <Colaborador datos={colaborador} key={colaborador}
    colorSecundario={colorSecundario}
    eliminarColaborador={eliminarColaborador}
    like={like}
    /> )
}
</div>
</section>
}
</>
}

export default Equipo