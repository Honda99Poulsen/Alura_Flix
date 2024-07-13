import styled from "styled-components"
import { GlobalContext, UseGlobalContext } from "../../../contexto/GlobalContext"
import { useContext } from "react"

const ContainerBotones = styled.div`
    display: flex;
    gap: ${props => props.$gap ? props.$gap : '210px'};
    margin-top: 43px;
`

const Boton = styled.button`
    padding: 17px 25px;
    color: #2271D1;
    border-radius: 10px;
    border: 2px solid #2271D1;
    background-color: #000000E5;
    font-size: 20px;
    font-weight: 900;
`
const BotonLimpiar = styled(Boton)`
    color: white;
    border-color: #fff;
`

const BotonCard = ({gap}) => {

    const { setNuevoTitulo, setNuevoCategoria, setNuevoImagen , setNuevoVideo, setNuevoDescripcion } = useContext(GlobalContext)

    const limpiarCampos = (e) => {
        e.preventDefault()

        setNuevoTitulo(""),
        setNuevoCategoria(""),
        setNuevoImagen(""),
        setNuevoVideo(""),
        setNuevoDescripcion("")

    }

    return(
        <ContainerBotones $gap={gap}>
            <Boton type="submit" >GUARDAR</Boton>
            <BotonLimpiar onClick={ limpiarCampos }>LIMPIAR</BotonLimpiar>
        </ContainerBotones>
    )
}

export default BotonCard