import styled from "styled-components"
import { GlobalContext, UseGlobalContext } from "../../contexto/GlobalContext"
import { conexionApi } from "../../js/Controllers/conexionApi"
import { useContext } from "react"

const DivImg = styled.div`
    width: 420px;
    height: 260px;
    border: 5px solid ${props => props.color ? props.color : "#F5F5F5"};
    box-sizing: border-box;
    border-radius: 25px 25px 0 0;
`
const IMGDIV = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 20px 20px 0 0;
`

const DivBotones = styled.div`
    width: 420px;
    height: 59px;
    display: flex;
    border-radius: 0 0 20px 20px;
    border: 5px solid ${props => props.color ? props.color : "#f5f5f5"};
    box-sizing: border-box;
`
const DivBoton = styled.div`
    flex: 50%;
    background-color: #000000E5;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    gap: 20px;
`

const DivBotonBorrar = styled(DivBoton)`
    border-radius: 0 0 0 20px;
`
const DivBotonEditar = styled(DivBoton)`
    border-radius: 0 0 20px 0;
`

const Icon = styled.img`
    width: 25.47px;
    height: 28px;
`

const Boton = styled.button`
    font-size: 16px;
    font-weight: 800;
    color: #f5f5f5;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`


const Card = ({color, src, id, titulo}) => {
    
    const {cambiarEstado} = UseGlobalContext();
    const {setParametroId} = useContext(GlobalContext)

    const manejarEliminacion = () => {
        const respuesta = confirm(`Te gustaria eliminar el video '${titulo}?'`)

        if(respuesta){
            conexionApi.eliminarVideo(id)
            alert(`${titulo} se ha eliminado correctamente`);
        }
    }

    const actualizarBanner = (id) => {
        console.log(`parametro actualizado`);
        return setParametroId(id)
    }

    return(
        <section>
                <DivImg onClick={ ( ) => actualizarBanner(id) } color={color}>
                    <IMGDIV src={src}/>
                </DivImg>
                <DivBotones color={color}>
                    <DivBotonBorrar>
                        <Boton onClick={ () => manejarEliminacion(id) }>
                            <Icon src="/public/img/Basurero.png" alt="icono basurero" />BORRAR</Boton>
                    </DivBotonBorrar>
                    <DivBotonEditar>   
                        <Boton onClick={ () => cambiarEstado(id)}>
                            <Icon src="/public/img/Editar.png"/>EDITAR</Boton>
                    </DivBotonEditar>
                </DivBotones>
            </section>
    )
}

export default Card