import styled from "styled-components"

const LabelEstilizado = styled.label`
    color: ${props => props.$vacio ? 'red': 'white'};
    font-size: 20px;
    font-weight: 600;
    margin: 10px;
`

const Label = ({children, vacio}) => {
    return(
        <LabelEstilizado $vacio={vacio}>{children}</LabelEstilizado>
    )
}

export default Label