import styled from "styled-components"
import Card from "../Card"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../../contexto/GlobalContext"

const Container = styled.section`
    margin-bottom: 93px;
`

const Titulo = styled.h1`
    width: 432px;
    padding: 20px 0;
    border-radius: 20px;
    background-color: ${props => props.$backgroundtitulo ? props.$backgroundtitulo : "#b4b4b4"};
    color: #f5f5f5;
    margin-bottom: 40px;
    font-size: 32px;
    text-align: center;
    font-weight: 800;
`

const CardContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 30px;
`

const Secciones = ({nombre, color, id}) => {

    const {videos, setVideos} = useContext(GlobalContext);

    useEffect( () => {
        fetch('http://localhost:3000/videos')
        .then( (response) => response.json() )
        .then( data => setVideos(data) )
    } )


    return(
        <Container>
            <Titulo $backgroundtitulo={color}>{nombre}</Titulo>
            <CardContainer>
                {
                    
                    videos.filter( video => video.idCategoria === id).map(
                        (data) => {
                            return <Card color={color} {...data} key={data.id} />
                        }
                    )
                }
            </CardContainer>
        </Container>
    )
}

export default Secciones