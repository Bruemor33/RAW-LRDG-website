




(function(){

  var summaryToggle = document.getElementById('summary').addEventListener('click', function(event){

    console.log('I was clicked');

    $('#sea-isle-summary').toggle('slow');

  });

  $('#scroll ul li a[href^="#"]').click(function(event){
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $(this.hash).offset().top
    }, 500);
  });

}());
