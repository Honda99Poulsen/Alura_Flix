import styled from "styled-components";
import BotonCard from "../EditCard/BotonCard";
import Input from "../EditCard/Input";
import { useContext, useState } from "react";
import { GlobalContext } from "../../contexto/GlobalContext.jsx";
import SelectNuevoVideo from "../SelectNuevoVideo/index.jsx";
import InputNuevoVideo from "../InputNuevoVideo/index.jsx";
import { conexionApi } from "../../js/Controllers/conexionApi.jsx";

const Div = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-self: flex-start;
    gap: 20px;
`

const SeccionNuevo = () => {

    const {nuevoTitulo, 
          nuevoCategoria, 
          nuevoImagen, 
          nuevoVideo, 
          setNuevoTitulo, 
          setNuevoImagen, 
          setNuevoVideo, 
          nuevoDescripcion,
          setNuevoDescripcion,
          videos } = useContext(GlobalContext)

  const guardarDatos = (e) => {

    e.preventDefault()

    let id = videos.length + 1
    
    conexionApi.crearNuevoVideo(id.toString(), nuevoTitulo, nuevoVideo, nuevoImagen, nuevoCategoria === "FRONTEND" ? 1 : (nuevoCategoria === "BACKEND" ? 2 : 3), nuevoDescripcion)
    console.log('creado supuestamente');

}

  const [inputTitulo, setInputTitulo] = useState(false)
  const [inputNuevoVideo, setInputNuevoVideo] = useState(false)
  const [inputImagen, setInputImagen] = useState(false)
  const [inputVideo, setInputVideo] = useState(false)
  const [inputDescripcion, setInputDescripcion] = useState(false)


  return (

      <form onSubmit={guardarDatos} >
      <Div>
        <Input vacio={inputTitulo} setVacio={setInputTitulo} topico="Titulo" placeholder="¿qué es javascript?" valor={nuevoTitulo} setValor={setNuevoTitulo}/>
        <SelectNuevoVideo vacio={inputNuevoVideo} setVacio={setInputNuevoVideo}/>
      </Div>
      <Div>
        <Input vacio={inputImagen} setVacio={setInputImagen} topico="Imagen" placeholder="inserte url aqui" valor={nuevoImagen} setValor={setNuevoImagen} />
        <Input vacio={inputVideo} setVacio={setInputVideo} topico="Video" placeholder="inserte link del video aqui" valor={nuevoVideo} setValor={setNuevoVideo}/>
      </Div>
      <Div>
        <Input vacio={inputDescripcion} setVacio={setInputDescripcion} altura="220px" topico="Descripcion" placeholder="inserte una descripcion aqui" valor={nuevoDescripcion} setValor={setNuevoDescripcion} top="10px" type="textarea"/>
        {/* <InputNuevoVideo altura="220px" topico="Descripcion" placeholder="inserte descripcion aqui" top="10px" /> */}
      </Div>
      <Div>
        <BotonCard gap="30px"/>
      </Div>
      </form>
  );
};

export default SeccionNuevo;
