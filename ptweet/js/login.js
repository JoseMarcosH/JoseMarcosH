window.onload = function (){
    var boton = document.getElementById("btnAceptar");
    var txtUsuario = document.getElementById("txtUsuario")
    var txtPassword = document.getElementById("txtPassword")  
    boton.addEventListener('click', function(){
        let usuario = txtUsuario.value;
        let pass = txtPassword.value;
        if(usuario.trim() == "admin" && pass.trim() == "123"){
            alert("LISTO")
        }else{
            document.getElementById("error").innerHTML="Credenciales Incorrectas";
            txtUsuario.style.backgroundColor="green";
            txtPassword.style.backgroundColor="green";
        }
        
    });
    
    
}
function limpiar(){
        txtUsuario.style.backgroundColor="#FFF";
        txtPassword.style.backgroundColor="#FFF";
    }