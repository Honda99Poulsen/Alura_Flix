
async function crearNuevoVideo(id, titulo, video, src, idCategoria, descripcion ){

    try {
        
        const url = `http://localhost:3000/videos`

            fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    id:id,
                    titulo:titulo,
                    video:video,
                    src:src,
                    idCategoria:idCategoria,
                    descripcion:descripcion,
            })
            });

    } catch (error) {
        console.log(error);
    }

}

// actualizarVideo

async function actualizarVideo(id, titulo, video, src, idCategoria, descripcion) {
    try {
        const url = `http://localhost:3000/videos/${id}`;

        await fetch(url, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({
                id:id,
                titulo:titulo,
                video:video,
                src:src,
                idCategoria:idCategoria,
                descripcion:descripcion,
            })
        });

    } catch (error) {
        console.log(error);
    }
}

async function eliminarVideo(id) {

    const conexion = await fetch(`http://localhost:3000/videos/${id}`, {
        method: `DELETE`
    });

    if (!conexion.ok) {
        throw new Error(`Error al eliminar el artículo`);
    }

}


export const conexionApi = { crearNuevoVideo, actualizarVideo,  eliminarVideo}