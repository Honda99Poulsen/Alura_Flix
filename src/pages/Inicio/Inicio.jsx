import Banner from "../../components/Banner"
import Header from "../../components/Header"
import imagen from '../../../public/img/BackBanner.png'
import ContainerPrincipal from "../../components/ContainerPrincipal"
import Secciones from "../../components/Secciones"
import Footer from "../../components/Footer"
import EditCard from "../../components/EditCard"
import { useContext } from "react"
import { GlobalContext } from "../../contexto/GlobalContext"

const Inicio = () => {

    const {categorias,} = useContext(GlobalContext)



    return(

        <>
            <Header/>
            <Banner backgroundimage={imagen}/>
            <ContainerPrincipal>
                {
                    categorias.map( categoria => {
                       return(
                        <Secciones {...categoria} key={categoria.id}/>
                       )
                    } )
                }
            </ContainerPrincipal>
            <EditCard/>
            <Footer/>
        </>
    )
}

export default Inicio