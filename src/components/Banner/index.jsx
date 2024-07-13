import { useContext, useEffect } from "react"
import styled from "styled-components"
import { GlobalContext } from "../../contexto/GlobalContext"

const Container = styled.div`
    height: 832px;
    display: flex;
    align-items: center;
    background: 
    linear-gradient(
      to bottom, 
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
    ), 
    url(${props => props.$backgroundimage});
    background-size: 100% 100%;
    padding: 40px;
    box-sizing: border-box;
`
const Categoria = styled.h1`
    border-radius: 15px;
    font-size: 48px;
    background-color: ${props => props.$categoria == 1 ? '#6BD1FF' : (props.$categoria == 2 ? '#00C86F' : '#FFBA05')};
    color: white;
    font-weight: 800;
    padding: 20px;
    width: 296px;
    margin-bottom: 40px;
`
const Titulo = styled.h2`
    font-size:46px;
    font-weight: 400;
    color: #F5F5F5;
`
const Parrafo = styled.p`
    font-size: 18px;
    font-weight: 300;
    color: #F5F5F5;
    line-height: 21.09px;
    margin-top: 9px;
`

const DivInformacion = styled.div`
    flex: 50%;
    display: flex;
    flex-direction: column;
`
const DivImagen = styled.div`
    flex: 50%;
    height: 334px;
    border-radius: 20px;
    border: 5px solid ;
    border-color: ${props => props.$categoria == 1 ? '#6BD1FF' : ( props.$categoria == 2 ? '#00C86F' : '#FFBA05')};
`
const Iframe = styled.iframe`
   
`

const Banner = ({backgroundimage}) => {

    const {parametroId, videos, banner, setBanner} = useContext(GlobalContext);

    useEffect( () => {
        // const ban =  videos.filter((video) => video.id == parametroId).map(video => console.log(video))
        const ban = videos.filter((video) => video.id == parametroId)[0];
        
        setBanner(ban)
        
    }, [parametroId] )

    const parrafoDefault = 'Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.'

    const source = "https://www.youtube.com/embed/ov7vA5HFe6w?si=4Xp_d2CfodC09djo";

    const map = {
        1 : 'FRONTEND',
        2 : 'BACKEND',
        3 : 'INNOVACION Y GESTION'
    }   

    return (
        <Container $backgroundimage={backgroundimage}>
            <DivInformacion className="informacion">
                <Categoria $categoria={banner && banner.idCategoria}>{banner ? map[banner.idCategoria] : 'FRONT END'}</Categoria>
                <Titulo>{banner ? banner.titulo : 'Challenge React'}</Titulo>
                <Parrafo>{banner ? banner.descripcion : parrafoDefault}</Parrafo>
            </DivInformacion>   
            <DivImagen className="Imagen" $categoria={banner && banner.idCategoria}>
            <iframe className="Iframe"  width="100%" height="100%" src={banner ? banner.video : source} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </DivImagen>
        </Container>
    )
}

export default Banner