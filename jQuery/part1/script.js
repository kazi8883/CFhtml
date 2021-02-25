// $(document).ready(function(){
//     $('#kazi').hide();
// });

// $(document).ready(function(){
//     $('.abir').hide();
// });
// $(document).ready(function(){
//     $('p').hide();
// });

// $(document).ready(function(){
//     $('a').hide();
// });

// $(document).ready(function(){
//     $('[href]').hide();
// });

// $(document).ready(function(){
//     $('button').click(function(){
//         $('h2').hide();
//     });
// });

// $(document).ready(function(){
//     $('button').click(function(){
//         $('h2').show();
//     });
// });

// $(document).ready(function(){
//         $('button').dblclick(function(){
//             $('h2').show();
//         });
//     });

// $(document).ready(function(){
//         $('button').mouseenter(function(){
//             $(this).hide();
//         });
//     });

// $(document).ready(function(){
//             $('button').mouseleave(function(){
//                 $(this).hide();
//             });
//         });

// $(document).ready(function(){
//             $('button').hover(function(){
//                 $(this).hide();
//             });
//         });

// $(document).ready(function(){
//     $('button').click(function(){
//         $('h2').toggle('10');
//     });
// });

// $(document).ready(function(){
//     $('button').on('click', function(){
//         $('h2').toggle('fast');
//     });
// });

$(document).ready(function(){
    $('input').on('focus', function(){
        $('h2').css('background-color','#ccc');
    });
});