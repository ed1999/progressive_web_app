let db = new PouchDB("bdMensajes");

function guardarMensaje( mensaje ){

    mensaje._id = new Date().toISOString();

    db.put(mensaje).then( () => {
        console.log("Se guardo correctamente")
    })
    .catch(error => {
        console.log("Falla al guardar en pouch DB")
    });
}

function enviarMensaje(){

    db.allDocs({include_docs:true})

}