$(function(){
  'use strict';

  $('.nuestros-servicios div:first').show();
  $('.servicios nav a:first').addClass('activo');

  $('.servicios nav a').on('click', mostrarTabs);

  function mostrarTabs(){
    $('.servicios nav a').removeClass('activo');
    $(this).addClass('activo');
    var enlace = $(this).attr('href');
    $('.nuestros-servicios div').fadeOut();
    $(enlace).fadeIn();
    return false;
  }

  /* var proximosViajes = ['Londres','Valencia','Madrid','Paris','Milan'];
  console.log(proximosViajes);

  $.each(proximosViajes, function(i, v){
    if(i ==0 ){
        $('aside').append('<h2>Proximos Viajes</h2>');
    }
    $('aside').append('<li>' +  v + '</li>');

  });

  var viajePorFecha = {
      primero:'LOndres',
      segundo:'Valencia',
      tercero:'Madrid',
      cuarto:'Paris',
      quinto:'Milan',
  };

  console.log(viajePorFecha);

  $.each(viajePorFecha, function(i, v){
      $('aside').append('<li>' +i+'-'+  v + '</li>');
  }) */

 /*  $('.logo img').click(function(){
      $('main article:firts').slideUp(1000);
  });

  $('aside').click(function(){
    $('main article:firts').slideDown(1000);
  }); */


/*Eventos   
$('.logo img').on('click', function(){
      $(this).animate({'width':'200px'}, 1000);
  });

  $('main article img').on('mouseenter', aumentarImagen);
  $('main article img').on('mouseleave', disminuirImagen);

  function aumentarImagen(){
      $(this).animate({'width':'100%'});
  }

  function disminuirImagen(){
    $(this).animate({'width':'350px'});
} */

 /*
 cambiar estilos de css 
  $('navegacion').show();

  $('.logo img').css({'width':'400px'});

  $('.main article h2').css({'color':'#db008d'});

  $('aside').css({'backgroud-color':'#e1e1e1',
                  'text-transform':'uppercase',
                  'padding':'20px',
    });

   $('.navegacion ul li a').on('mouseenter', cambiarColor);

   function cambiarColor(){
       $('.navegacion').css('backgroud-color','#e1e1e1');
   } */

 /*  $('.navegacion').show();

  $('main article:first img').on('click', function(){
      $(this).attr('src', 'img/imagen_2.jpg');
  });
 */


/*   $('main').on({
      click:function(){
        $(this).addClass('fondorojo activo')
      },mouseenter: function(){
        $(this).addClass('fondorojo');
      },mouseleave: function(){
        $(this).addClass('fondoblanco');
      }
  }) */
/* 
agregar y queitar clases
  $('div.logo img').addClass('activo');

  $('.navegacion').show();
  $('main article:first').addClass('activo');

  $('.navegacion ul li a').on('click', function(e){
      $('.navegacion ul li a').removeClass('activo');
      e.preventDefault();
      $(this).addClass('activo');
  });
 */

  //metodos
 /*  $('#menu').on('click', function(){
      $('#navegacion').show();
  }); */

  /* $('div.logo img').on('mouseenter',function(){
    console.log("sobre el logo");
  });


  $('div.logo img').on('mouseleave',function(){
    console.log("fuera el logo");
  }); */

 /*  $('div.logo img').on('click',function(){
    $(this).remove();
  }); */


});