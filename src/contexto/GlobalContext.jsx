import { createContext, useContext, useEffect, useState } from "react"

export const GlobalContext = createContext();

GlobalContext.displayName = 'Variables'

// initialState = {

// }

export default function GlobalContextProvider({children}){

    const [editar, setEditar] = useState(false)
    const [categorias, setCategorias] = useState([])
    const [videos, setVideos] = useState([])


    const [nuevoTitulo, setNuevoTitulo] = useState('')
    const [nuevoCategoria, setNuevoCategoria] = useState('')
    const [nuevoImagen, setNuevoImagen] = useState('')
    const [nuevoVideo, setNuevoVideo] = useState('')
    const [nuevoDescripcion, setNuevoDescripcion] = useState('')

    const [parametroId, setParametroId] = useState("1")
    const [banner, setBanner] = useState([])

    useEffect( () => {
        fetch('https://my-json-server.typicode.com/Honda99Poulsen/ApiRestAluraFlix/categorias')
        .then((response) => response.json())
        .then( data => setCategorias(data) )
    }, [] )

    return <GlobalContext.Provider value={{editar, setEditar, categorias, setCategorias, videos, setVideos,
        nuevoTitulo, setNuevoTitulo, nuevoCategoria, setNuevoCategoria, nuevoImagen, setNuevoImagen, nuevoVideo, setNuevoVideo,
        nuevoDescripcion, setNuevoDescripcion, parametroId, setParametroId, banner, setBanner
    }}>
        {children}
    </GlobalContext.Provider>
}

export function UseGlobalContext(){

    const { editar, setEditar, setParametroId } = useContext(GlobalContext)

    const {setInputTitulo, setNuevoCategoria, 
        setInputImagen, setInputVideo, setInputDescripcion
    } = useContext(GlobalContext)

    function cambiarEstado(id){

        setParametroId(id)

        return setEditar(!editar)
    }

    function cambiarEstadoV2(){
        return setEditar(!editar)
    }

    function vaciarParametros(){
        setInputTitulo(''), 
        setNuevoCategoria(''), 
        setInputImagen(''),
        setInputVideo(''), 
        setInputDescripcion('')
    }

    return {editar, cambiarEstado, cambiarEstadoV2, vaciarParametros}

}

