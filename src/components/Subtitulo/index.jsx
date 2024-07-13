import styled from "styled-components"

const Parrafo = styled.p`
    color: #FFF;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    text-transform: uppercase;
    padding: 16px;
`

const Subtitulo = ({children}) => {
    return (
        <Parrafo>{children}</Parrafo>
    )
}

export default Subtitulo