$(document).ready(function() {
    $.ajax({
        url: "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0"
    }).then(function(data) {

        let ini = "<table class='table table-striped' border='2'>";
        let tableHHead = '<thead class="table-light text-center"><tr><th>Nombre</th><th>Detalles</th><th>Imagen</th></tr></thead>'
        let content = "";        
        data.results.forEach(element => {
          let images = element.url.split("/");
          let urlImagen = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + images[images.length - 2] + ".png";
          content += "<tr><td>" + element.name + "</td><td><a href='" + element.url + "'>"+ element.url +"</a></td><td><img src='"+ urlImagen + "'></td></tr>";
        });
        
        $('.greeting-id').append(ini + tableHHead + content + "</table>");
        $('.greeting-content').append(formatDate(new Date()));
    });    
});

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
  }
  
  function formatDate(date) {
    return [
      padTo2Digits(date.getDate()),
      padTo2Digits(date.getMonth() + 1),
      date.getFullYear(),
    ].join('/');
  }