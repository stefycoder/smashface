var puntos=0;
var k=0;

 $(function(){
  $("#sedes").on("change",cargarImagen)
  $(".comprobar").on("click",comprobar)
  cargarPuntos()

 })

function cargarImagen(){
var sede=$("#sedes").val()
var arraySede;
  switch(sede){
    case "peru":
          arraySede=peru       
          break;
    case "arequipa":
          arraySede=arequipa      
          break;
    default: 
          alert("Selecciona una sede")
           }

  function makeUniqueRandom() {
  var uniqueRandoms = [];
  var numRandoms = arraySede.length;

    // refill the array if needed
    if (!uniqueRandoms.length) {
        for (var i = 0; i < numRandoms; i++) {
            uniqueRandoms.push(i);
        }
    }
    var index = Math.floor(Math.random() * uniqueRandoms.length);
    var val = uniqueRandoms[index];

    // now remove that value from the array
    uniqueRandoms.splice(index, 1);

    return val;

}

  var indice=makeUniqueRandom()

  $("#coder").attr("src","fotos/"+sede+"/"+arraySede[indice].image)
  $("#coder").attr("alt",arraySede[indice].name)
}

function comprobar(){
  var nombre=$(".nombre").val()
  var name=$("#coder").attr("alt")
  if(nombre==name){ 
    $(".mensaje").html("Conoces muy bien a "+name+"!"+" +5 a tu puntaje. ¡Sigue Adelante!")
    puntos=puntos+5
    cargarPuntos()
    cargarImagen()
    clean()
    }
  else{
    $(".mensaje").html("No es correcto :( Inténtalo de nuevo ;) ")
    k++
    clean()
      if(k==5){
      puntos=puntos-1
      k=0
      $(".mensaje").html("Excediste los intentos permitidos. Tienes un punto menos")
      cargarPuntos()
      cargarImagen()
      }
  }
}

function cargarPuntos(){
  $("#puntos").html(puntos)
}

function clean(){
  $(".nombre").val("")
  $(".nombre").focus()
}













