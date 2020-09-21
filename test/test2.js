// $=jQuery

$(function(){
    'use strict';
    console.log('ready');


    // $('nav a:last').hide();
    // $('main').hide();
    // $('main').show();


    // var copy =$('main').clone();
    // $('main').append(copy);
    // $('header').prepend(copy);
    // $('h1').html("Hello");
    // var text=`<ul> <li> hello </li></ul>`;
    // $("#petSection").append(text);
   
//    add this to do to self
    // $('h1').on('click',function(){
    //     console.log('Click');
    //     $(this).addClass('bordered');
    // });



    $('h1').on('click',function(){
        console.log('Click');
        $('nav').addClass('bordered');
    });

    $('h1').on('mouseenter',function(){
        console.log('mouse over h1');
    })


    $('h1').on('mouseleave',function(){
        console.log('mouse leaves the h1');
    })

// jQuery List methods

//     var countries = ['United States', 'Canada', 'Argentina', 'Armenia'];
//     var cList = $('ul.mylist')
//     $.each(countries, function(i){
//         var li = $('<li/>')
//             .addClass('ui-menu-item')
//             .attr('role', 'menuitem')
//             .appendTo(cList);
//         var aaa = $('<a/>')
//             .addClass('ui-all')
//             .text(countries[i])
//             .appendTo(li);
//         console.log(countries);
// });

    const countries = ['United States', 'Canada', 'Argentina', 'Armenia'];

    const $ul = $('<ul>', {class: "mylist"}).append(
  countries.map(country => 
    $("<li>").append($("<a>").text(country))
  )
);
console.log(countries);

});



