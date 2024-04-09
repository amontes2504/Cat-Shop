import React from 'react'
import "./registro.css"

export default function Registro() {
    return (
        <div>
            <form>
                <div class="form-group">
                    <label htmlFor='id' >Identificacion</label>
                    <input type="number" class="form-control" id="Identificacion" aria-describedby="id" placeholder="Debe tener entre 5 y 10 digitos" />
                        <small id="emailHelp" class="form-text text-muted"></small>
                </div>
                <div class="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Debe tener minimo tres caracteres"/>
                </div>
                <div class="form-group">
                    <label htmlFor="address">Apellido</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Debe tener minimo tres caracteres"/>
                </div>
                <div class="form-group">
                <label for="exampleInputEmail1">Email </label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="alguien@gmail.com"/>
                <small id="emailHelp" class="form-text text-muted"></small>
                 </div>
                 <div class="form-group">
                    <label htmlFor="address">Direccion</label>
                    <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Debe tener minimo 15 caracteres"/>
                </div>
                <div class="form-group">
                    <label htmlFor="phone">Telefono</label>
                    <input type="number" class="form-control" id="telefono" placeholder="Debe ser de 10 numeros"/>
                </div>
                <div class="form-group">
                    <label htmlFor="date">Fecha de nacimiento</label>
                    <input type="date" class="form-control" id="fechaNacimiento" placeholder="MM/DD/AAAA"/>
                </div>
                <div class="form-group">
                    <label htmlFor="Password">Password</label>
                    <p> <small id="emailHelp" class="form-text text-muted">Debe tener entre 8 y 15 caracteres,utilizar mayusculas y minusculas,tener un caracter especial</small></p>
                    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                    

                    </div>
                    <div class="form-group">
                    <label htmlFor="Password">Repeat your Password</label>
                    <input type="number" class="form-control" id="exampleInputPassword1" placeholder="Password"/>

                    </div>
                
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Acepto terminos y condiciones</label>
                </div>
                
                
                <button type="submit" class="btn btn-primary">Registrarse</button>
            </form>
        </div>

    )
}
