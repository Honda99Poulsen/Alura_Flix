import styled from "styled-components"

const Container = styled.div`
    padding: 71px 174px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #262626;
    flex-direction: column;
`

const ContainerNuevoVideo = ({children}) => {
    return(
        <Container>
            {children}
        </Container>
    )
}

export default ContainerNuevoVideo