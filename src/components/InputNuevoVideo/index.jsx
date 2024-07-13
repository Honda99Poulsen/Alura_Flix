import { useContext } from "react";
import Label from "../EditCard/LabelCard";
import { GlobalContext } from "../../contexto/GlobalContext";
import styled from "styled-components";

const DivLI = styled.div`
    margin-top: 43px;
`
const InputEstilzado = styled.textarea`
    padding: 16px 10px;
    color: white;
    border-radius: 15px;
    border: 2px solid #2271d1;
    width: 100%;
    background-color: transparent;
    margin-top: 15px;
    height: ${props => props.$altura && props.$altura};
    box-sizing: border-box;
    font-size: 20px;
    line-height: 1.5;
    

    &::placeholder{
        color: #a5a5a5;
        position: absolute;
        top: ${props => props.$top && props.$top};
        font-size: 20px;
    }
`

const InputNuevoVideo = ({topico, placeholder, type='text', altura, top, required=true}) => {

    const {nuevoDescripcion, setNuevoDescripcion} = useContext(GlobalContext)

    const nuevaFuncion = ( e ) => {
        e.preventDefault()
    
        setNuevoDescripcion(e.target.value);
    }

    return(
        <DivLI>
            <Label>{topico}</Label>
            <InputEstilzado $altura={altura} placeholder={placeholder} type={type} $top={top}
            required={required} value={nuevoDescripcion} onChange={nuevaFuncion}></InputEstilzado>
        </DivLI>
    )
}

export default InputNuevoVideo