$(document).ready(function(){

    let inicio = `
    <h1 class="text-center mt-5">Esto es JQuery!</h1>
          
    <div class="formulario m-5">
      <div class="form-group">
        <label>Nombre o Apodo</label>
        <input type="text" class="form-control" id="apodo" placeholder="ApodoCrack!">
      </div>

      <div class="form-group">
        <label>Tu edad</label>
        <input type="number" class="form-control" id="edad" placeholder="proba si sos +18">
      </div>

      <button type="submit" class="btn btn-primary  boton-siguiente">siguiente</button>
  </div>
    `;
    $('.donde-mostrar').html(inicio);    

    $('.boton-siguiente').click(function(){
       let nombre = $('#apodo').val();       
       let edad = $('#edad').val();
       if(edad >= 18){
           //console.log('valido');
        $('.donde-mostrar').html(azulRojo(nombre))
       }else{
           
        $('.donde-mostrar').html('No pude continuar')
       } 
    })

    
    function azulRojo(nombre){        
        let selectColor = `
        <div class="container">
         <h1 class="m-5">${nombre} cambia de color el fondo</h1>
        <div class="row">
       
        <button type="submit" class="btn btn-primary m-2 boton-azul">AZUL</button>
        <button type="submit" class="btn btn-danger m-2 boton-rojo ">ROJO</button>
        <button type="submit" class="btn btn-secundary m-2 boton-volver ">volver</button>
        </div>
        </div>
        `
        $('.donde-mostrar').html(selectColor)
        $('.boton-azul').click(fondoAzul);
        $('.boton-rojo').click(fondoRojo);
        $('.boton-volver').click(volver);

    }

    function fondoAzul(){
        //console.log('cambia a azul');
        $('body').css("background", "blue" );
    }
    function fondoRojo(){
       // console.log('cambia a Rojo');
        $('body').css("background", "red" );
    }
    function volver(){
        $('.donde-mostrar').html(inicio);
     }


})