$(function(){
    'use strict';

    $('main').on({
        click:function(){
            $(this).addclass('red-bg');
        },
        mouseenter:function(){
            $(this).addClass('active');
        },
        mouseleave:function(){
            $(this).removeClass('active red-bg');
        }
    });

    var text=$('footer h2').text();
    console.log(text);
    $('footer h3').text('The Fashion Pet');

    $('header img').on('click',function(){
        $(this).attr('src',"https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")
    }):

})