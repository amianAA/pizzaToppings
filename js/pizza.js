$(document).ready(function(){
    $('.btn-pepperonni').click(ingredients);
    $('.btn-mushrooms').click(ingredients);
    $('.btn-green-pepper').click(ingredients);

    function ingredients(){
        if($(this).hasClass('btn-pepperonni')){
            $('.pep').toggle('.pep');
        }else if($(this).hasClass('btn-mushrooms')){
           $('.mushroom').toggle('.mushroom');
        }
    }
});

