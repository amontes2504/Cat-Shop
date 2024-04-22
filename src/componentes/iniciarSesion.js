import React from "react";
import './Registro.css';
import Swal from "sweetalert2";

export default function IniciarSesion() {

        const iniciarSesion=(e)=>{
            e.preventDefault()
        }

    fetch("http://localhost:3001/login", { 
        method:"POST",
        headers:{"Content-Type":"Application/json","Acept":"application/json"},
        body:JSON.stringify(values)
    })
    .then(response=>{
        if(response.status===200 && values.rol==="Usuario"){
            cookies.set("email", values.email,{
                secure:true,
                sameSite:"None",
                path:"/"
            })
            window.location.hash="/sesion"
        }
        else if(response.status===200 && values.rol==="Administrador"){
            cookies.set("email", values.email,{
                secure:true,
                sameSite:"None",
                path:"/"
            })
            window.location.hash="/usurios-registrados"
        }
        else{
            console.log("sdfd",response.status)
            Swal.fire({
                title:"Las credenciales ingresadas no son correctas",
                icon:"error"
            })
            window.location.hash="/login"
        }
    })
            .catch (()=>Swal.fire({
                title:"No  se puede iniciar sesion por un problema en el servidor",
                icon:"error"
            }),
            window.location.hash="/login"
        )
    
    return (
        <div className="registro-container">
            <form className="registro-form">
                <h2>Inicio de Sesion</h2>
                <div className="form-group">
                    <label htmlFor="email">Correo electrónico:</label>
                    <input type="email" id="email" name="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" />
                </div>
                <button type="submit">Iniciar Sesion</button>
            </form>
        </div>

    );
}