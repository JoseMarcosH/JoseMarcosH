window.onload = function (){
    var boton = document.getElementById("btnAceptar");
    var txtUsuario = document.getElementById("txtUsuario")
    var txtPassword = document.getElementById("txtPassword")  
    boton.addEventListener('click', function(){
        let usuario = txtUsuario.value;
        let pass = txtPassword.value;
        let arreglousuarios=[
            { id:1, nombre:"Federica Peluche", imgen:"fede.jpg", username:"fedep", password:"123" },
            { id:1, nombre:"Don Camerino", imgen:"dc.jpg", username:"Camerino", password:"123" },
            { id:1, nombre:"Vivi", imgen:"vivi.jpg", username:"Vivi", password:"123" },
        ];
        let encontro = false;
        
        arreglousuarios.forEach(fila=>{
            if(fila.username == usuario.trim() && fila.password==pass.trim()){
                encontro=true;
                localStorage.setItem("usuario", JSON.stringify(fila));
                let fecha=new Date();
                localStorage.setItem("fecha",fecha.getFullYear()+"/"+fecha.getMonth()+"/"+fecha.getDay()+"/"+fecha.getHours()+"/"+fecha.getMinutes()+"/"+fecha.getSeconds());
            }
        });
        
        if(encontro){
            ///redoreccionar
            location.href="./index.html";
            
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