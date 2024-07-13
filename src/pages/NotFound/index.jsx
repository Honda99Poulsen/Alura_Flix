import styled from "styled-components"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import HeaderLink from "../../components/HeaderLink"

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;
    height: 50vh;
    background-color: #A5A5A5;
    flex-direction: column;
`

const H1 = styled.div`
    font-size: 30px;
    font-weight: 900;
    color: red;
    border-bottom: 2px solid black;
    margin: 20px;
`

const NotFound = () => {
    return( 
        <>
            <Header/>
                <Container>
                    <H1>Error 404 Pagina no existe</H1>
                    <HeaderLink to='/'>
                        Vuelve al inicio
                    </HeaderLink>
                </Container>
            <Footer/>
        </>
    )
}

export default NotFound