$(document).ready(function(){
    //sticky menu
    $(".js--services").waypoint(function(direction){
        if (direction == "down"){
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    });

    //ACTIVE LINK
    $("nav ul li a").click(function(){
        $("nav ul li a").removeClass("active");
        $(this).addClass("active");
    });
    $("nav a img.logo").click(function(){
        $("nav ul li a").removeClass("active");
        $("nav ul li:first-child a").addClass("active");
    });

    //MIXITUP(portfolio)
    var mixer = mixitup('.container');
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}