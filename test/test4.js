$(function(){
    'use strict';

    $('img#logo').css({'width':'800px'});
    $('main h2').css({
        'color':'#858584',
        'text-transform':'uppercase'
    });

    function changeColor(){
        $('nav.menu').css({'background-color':'#004d4db6'});
    }

    function defaultColor(){
        $('nav.menu').css({'background-color':'#008b8b80'});
    }

    $('nav.menu').on('mouseenter',changeColor);
    $('nav.menu').on('mouseleave',defaultColor);
})