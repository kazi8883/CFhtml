$(document).ready(function(){
    $('.btn').click(function(){
        $('p').append('<b> Abir</b>');
    });
});

$(document).ready(function(){
    $('.btn').click(function(){
        $('p').prepend('<b>Abir </b>');
    });
});

$(document).ready(function(){
    $('.btn').click(function(){
        $('p').before('<b>Abir</b>');
    });
});
$(document).ready(function(){
    $('.btn').click(function(){
        $('p').after('<b>Abir</b>');
    });
});

// **************************

$(document).ready(function(){
    $('.btn2').click(function(){
        $('.box').empty();
    });
});

// $(document).ready(function(){
//     $('.btn2').click(function(){
//         $('.box').remove();
//     });
// });

//************************************

// $(document).ready(function(){
//     $('.btn3').click(function(){
//         $('.box1').addClass('red');
//     });
// });

// $(document).ready(function(){
//     $('.btn3').click(function(){
//         $('.box10').removeClass('red');
//     });
// });

$(document).ready(function(){
    $('.btn3').click(function(){
        $('.box10').toggleClass('red');
    });
});


//********************************


$(document).ready(function(){
    $('.btn4').click(function(){
        $('.one').css({
            'color' : 'white',
            'font-size' : '20px',
            'background' : 'black'
        });
    });
});