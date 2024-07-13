import styled from "styled-components";
import { GlobalContext, UseGlobalContext } from "../../contexto/GlobalContext";
import BotonCard from "./BotonCard";
import Titulo from "./titulo";
import Input from "./Input";

import { useContext, useEffect } from "react";
import SelectNuevoVideo from "../SelectNuevoVideo/index.jsx";
import { conexionApi } from "../../js/Controllers/conexionApi.jsx";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
`;

const BotonCerrar = styled.button`
  position: absolute;
  background-color: transparent;
  right: 240px;
  top: 70px;
  border: none;
  z-index: 20;
  cursor: pointer;
`

const Dialog = styled.dialog`
  position: absolute;
  background: transparent;
  top: 50px;
  width: 974px;
  background-color: #03122f;
  border-radius: 20px;
  border: 5px solid #6bd1ff;
  display: flex;
  justify-content: center;
  padding: 84px 0;
  z-index: 10;
`;

const EditCard = () => {

  const { editar, cambiarEstadoV2 } = UseGlobalContext();
  const {parametroId, videos} = useContext(GlobalContext)

  const { nuevoTitulo, setNuevoTitulo, nuevoCategoria, setNuevoCategoria, nuevoImagen, setNuevoImagen, nuevoVideo, setNuevoVideo,
    nuevoDescripcion, setNuevoDescripcion } = useContext(GlobalContext)

    const categoriaMap = {
      1: 'FRONTEND',
      2: 'BACKEND',
      3: 'INNOVACION Y GESTION'
    };

    useEffect(() => {

      const video = videos.find(video => video.id === parametroId);
      
      if (video) {
        setNuevoTitulo(video.titulo);
  
        setNuevoImagen(video.src);
        setNuevoVideo(video.video);
        setNuevoDescripcion(video.descripcion);
        setNuevoCategoria(categoriaMap[video.idCategoria] || video.idCategoria);

      }

    }, [parametroId]);

  const cambiarEstado = () => {
      return cambiarEstadoV2(!editar)
  }


  async function manejarSubmit(e) {

    e.preventDefault()
    alert('Se han actualizado los datos')

   await conexionApi.actualizarVideo(parametroId, nuevoTitulo, nuevoVideo, nuevoImagen, nuevoCategoria === "FRONTEND" ? 1 : (nuevoCategoria === "BACKEND" ? 2 : 3), nuevoDescripcion)
  
  }

  return (
    <>
      { editar && <Overlay>
      <BotonCerrar onClick={ ()=> cambiarEstado() } ><img src="img/cancel.png" alt="icono cerrar" /></BotonCerrar>
      <Dialog open={editar}>
        <form method="dialog" onSubmit={manejarSubmit}>
          <Titulo>EDITAR CARD:</Titulo>
          <Input valor={nuevoTitulo} setValor={setNuevoTitulo} topico='Titulo' placeholder='¿qué es javascript?'/>
          <SelectNuevoVideo />
          <Input valor={nuevoImagen} setValor={setNuevoImagen} topico='Imagen' placeholder='inserte url aqui'/>
          <Input valor={nuevoVideo} setValor={setNuevoVideo} topico='Video' placeholder='inserte link del video aqui'/>
          <Input valor={nuevoDescripcion} setValor={setNuevoDescripcion} $altura='82px' topico='Descripcion' placeholder='inserte descripcion aqui' $top='10px'/>
          <BotonCard />
        </form>
      </Dialog>
    </Overlay>}
    </>
  );
};

export default EditCard;
