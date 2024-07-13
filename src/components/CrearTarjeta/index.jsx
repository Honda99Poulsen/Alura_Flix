import styled from "styled-components"

const Container = styled.div`
    margin: 55px 0 17px 0;
    color: #FFF;
    display: flex;
    align-self: flex-start;
    border-bottom: 1px solid #A5A5A5;
    border-top: 1px solid #A5A5A5;
    width: 100%;
`

const Titulo = styled.h3`
    padding: 20px;
    font-size: 36px;
    font-weight: 600;
    
`

const CrearTarjeta = () => {
    return (
        <Container>
            <Titulo>Crear Tarjeta</Titulo>
        </Container>
    )
}

export default CrearTarjeta