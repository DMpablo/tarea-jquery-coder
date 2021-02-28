$(document).ready(function(){

    $('.selectColor').hide();    
    //$('.alert').hide();
    $('.boton-siguiente').click(function(){
       let nombre = $('#apodo').val();       
       let edad = $('#edad').val();
       if(edad >= 18){
       $('.inicio').hide()
       $('.selectColor').show(nombre)
       }else{
         alerta();
       } 
    })


    function alerta(){
   
      $('.alertas').html(function(){        
       alert('No tenes edad sufiiente');
        })
      }
    
    $('.boton-azul').click(fondoAzul);
    $('.boton-rojo').click(fondoRojo);
    $('.boton-volver').click(()=>{
      $('.selectColor').hide();
      $('.inicio').show();
    });

    function fondoAzul(){
        //console.log('cambia a azul');
        $('body').css("background", "#8F90C5" );
    }
    function fondoRojo(){
       // console.log('cambia a Rojo');
        $('body').css("background", "#C58F8F" );
    }
    /* function volver(){
      $
        $('.donde-mostrar').show(inicio);
     } */



})