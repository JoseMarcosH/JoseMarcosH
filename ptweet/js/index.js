window.onunload=()=>{
    let usuario= JSON.parse(localStorage.getItem("usuario"));
    console.log("usuario");
    document,getElementById("usuario").innerHTML="hola"+usuario.nombre
}