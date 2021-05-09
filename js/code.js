// comportamento da seta sobe
// quando ocorre rolagem na tela do navegador
$(window).scroll(function(){
    // se a rolagem for maior ou igual a 550
    // mostra a seta com fade
    // caso contrário, oculta a seta com fade
    if($(window).scrollTop() >= 550)
    {
      $('.seta-sobe').fadeIn();
    }else{
      $('.seta-sobe').fadeOut();
    }
  });
  $('.seta-sobe').click(function(){
      // aplica animação de rolagem no body,html até o topo
      $('body, html').animate({
         // fontSize: 30,
         // margin: 100
         scrollTop: 0
      },1200);
          
  });
  