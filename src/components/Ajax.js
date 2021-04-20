function ajax(metodo,datos){ 
    var configuracion = !metodo ?  null : {
        method : metodo,
        body : JSON.stringify(datos),
        headers : {
            "Content-type" : "application/json"
        }
    }
    return fetch("http://localhost:8888/bbdd/", configuracion)
    .then(respuesta => respuesta.json());
   
    
}
export default ajax;
