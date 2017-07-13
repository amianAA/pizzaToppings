$(document).ready(function(){
    //Clic events
    $('.btn-pepperonni').click(ingredients);
    $('.btn-mushrooms').click(ingredients);
    $('.btn-green-peppers').click(ingredients);
    $('.btn-sauce').click(especialIngredients);
    $('.btn-crust').click(especialIngredients);

    //Inicio apartado 2
    (function setValues(){
        $('.crust-gluten-free').removeClass('crust-gluten-free');
        $('.btn-crust').removeClass('active');
        $('.sauce-white').removeClass('sauce-white');
        $('.btn-sauce').removeClass('active');
        $('.price ul').children().eq(3).toggle();
        $('.price ul').children().eq(4).toggle();
    }())
    //Fin apartado 2

    var defaultPrice = 13;

toppings = { //objeto con "boton : [clase, coste, posicion del ingrediente en lista de precio]"
    'btn-pepperonni'     : ['.pep', 1, 0],
    'btn-mushrooms'      : ['.mushroom', 1, 1],
    'btn-green-peppers'  : ['.green-pepper', 1, 2],
    'btn-sauce'          : ['.sauce', 3, 3],
    'btn-crust'          : ['.crust', 5, 4]
}

    function ingredients(){

        var ingrediente = toppings[this.classList[1]][0];
        var coste = toppings[this.classList[1]][1];
        var elem = toppings[this.classList[1]][2]; //elemento de la lista de precios que se va a mostrar/ocultar

        $(ingrediente).toggle(); //le pasa al objeto la clase del boton presionado y el objeto devuelve la clase a la que se le hace "toggle"
        if($(this).hasClass('active')){ //if-else que modifica la clase active del boton pulsado
            $(this).removeClass('active');
            $('.price ul').children().eq(elem).toggle(); //Oculta en el panel de precios
            defaultPrice-=coste; //Resta el precio del ingrediente
        }else{
            $(this).addClass('active');
            $('.price ul').children().eq(elem).toggle();  //Muestra en el panel de precios
            defaultPrice+=coste; //Suma el precio del ingrediente
        }
        $('strong').text('Total Price: $'+defaultPrice);
    }

    function especialIngredients(){

        var ingrediente = toppings[this.classList[1]][0];
        var coste = toppings[this.classList[1]][1];
        var elem = toppings[this.classList[1]][2]; //elemento de la lista de precios que se va a mostrar/ocultar

        if($(this).hasClass('active')){ //if-else que modifica la clase active del boton pulsado
            $(this).removeClass('active');
            $('.price ul').children().eq(elem).toggle(); //Oculta en el panel de precios
            defaultPrice -= coste; //Resta el precio del ingrediente
        }else{
            $(this).addClass('active');
            $('.price ul').children().eq(elem).toggle();  //Muestra en el panel de precios
            defaultPrice += coste; //Suma el precio del ingrediente
              }

         if($(this).hasClass('btn-sauce')){ //activa o desactiva la salsa y la masa sin gluten
            $(toppings['btn-sauce'][0]).toggleClass('sauce-white');
        }else{
            $(toppings['btn-crust'][0]).toggleClass('crust-gluten-free');
        } $('strong').text('Total Price: $'+defaultPrice);
    } $('strong').text('Total Price: $'+defaultPrice);
})

