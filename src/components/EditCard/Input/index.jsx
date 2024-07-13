import styled from "styled-components"
import Label from "../LabelCard"


const DivLI = styled.div`
    margin-top: 43px;
`
const InputEstilzado = styled.input`
    padding: 16px 10px;
    color: ${props => props.$vacio ? 'red' : 'white'};
    border-radius: 15px;
    border: 2px solid;
    border-color: ${props => props.$vacio ? 'red' : "#2271d1"};
    width: 100%;
    background-color: transparent;
    margin-top: 15px;
    height: ${props => props.$altura && props.$altura};
    box-sizing: border-box;
    font-size: 20px;
    line-height: 1.5;
    

    &::placeholder{
        color: ${props => props.$vacio ? 'red' : "#a5a5a5"};
        position: absolute;
        top: ${props => props.$top && props.$top};
        font-size: 20px;
    }
`

const Input = ({vacio, setVacio, topico, placeholder, type='text', altura, top, required=true, valor, setValor}) => {

    const nuevaFuncion = ( e ) => {
        e.preventDefault()
    
        if(e.target.value === ""){
            // setVacio(!vacio)
            if(!vacio){
                            setVacio(!vacio)
                        }
                    }else{
                        if(vacio){
                            setVacio(!vacio)
                        }
        }

        setValor(e.target.value);
    }

    let errorMessage = `El ${topico} es obligario`

    return(
        <DivLI>
            <Label vacio={vacio}>{topico}</Label>
            <InputEstilzado $vacio={vacio} $altura={altura} placeholder={ vacio ? errorMessage : placeholder } type={type} $top={top}
            required={required} value={valor} onChange={nuevaFuncion}  style={{color: vacio ? 'red' : 'white'}}></InputEstilzado>
        </DivLI>
    )
}

export default Input