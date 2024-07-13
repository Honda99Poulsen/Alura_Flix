import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ContainerNuevoVideo from "../../components/ContainerNuevoVideo";
import Titulo from "../../components/EditCard/titulo";
import Subtitulo from "../../components/Subtitulo";
import CrearTarjeta from "../../components/CrearTarjeta";
import SeccionNuevo from "../../components/SeccionNuevo/index.jsx";

const NuevoVideo = () => {
  return (
    <>
      <Header />
      <ContainerNuevoVideo>
        <Titulo color="#f5f5f5">NUEVO VIDEO</Titulo>
        <Subtitulo>Complete el formulario para crear una nueva tarjeta de video</Subtitulo>
        <CrearTarjeta />
        <SeccionNuevo/>
      </ContainerNuevoVideo>
      <Footer />
    </>
  );
};

export default NuevoVideo;
