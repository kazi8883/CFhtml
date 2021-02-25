// $(document).ready(function(){
//     $('#hide').click(function(){
//         $('p').hide();
//     });
// });
// $(document).ready(function(){
//     $('#show').click(function(){
//         $('p').show();
//     });
// });
// $(document).ready(function(){
//     $('#toggle').click(function(){
//         $('p').toggle();
//     });
// });

// $(document).ready(function(){
//     $('#fadein').click(function(){
//         $('.box1').fadeIn(1000);
//     });
// });
// $(document).ready(function(){
//     $('#fadein').click(function(){
//         $('.box2').fadeIn(2000);
//     });
// });
// $(document).ready(function(){
//     $('#fadein').click(function(){
//         $('.box3').fadeIn(3000);
//     });
// });

// // $(document).ready(function(){
// //     $('#fadeout').click(function(){
// //         $('.box11').fadeOut(3000);
// //         $('.box22').fadeOut(2000);
// //         $('.box33').fadeOut(1000);
// //     });
// // });

// $(document).ready(function(){
//     $('#fadeout').click(function(){
//         $('.box11').toggle(3000);
//         $('.box22').toggle(2000);
//         $('.box33').toggle(1000);
//     });
// });

// **********************************

// $(document).ready(function(){
//     $('#abir').click(function(){
//         $('#kazi').slideToggle();
//     });
// });

// $(document).ready(function(){
//     $('#abir').click(function(){
//         $('#kazi').animate({
//             left: '200px', 
//             opacity: 0.5 
//         }, 3000);
//         $('#kazi').css({
//             background : 'blue'
//         });
//     });
// });


// $(document).ready(function(){
//         $('#abir').click(function(){
//             $('#kazi').slideDown(2000);
//     });

//     $('#btn').click(function(){
//         $('#kazi').stop();
//     })
// });

// *************************** call back

// $(document).ready(function(){
//         $('#abir').click(function(){
//             $('#kazi').hide(2000, function(){
//                 alert('Hello!');
//             });
//     });
// });

//************************************chaining

$(document).ready(function(){
    $('#abir').click(function(){
        $('#kazi').css('color', 'black')
        .slideUp(2000)
        .slideDown(2000)
        .css('background','white')
    });
});