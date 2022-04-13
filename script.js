$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //typing animation script
    var typed = new Typed(".typing", {
        strings: ["Web Developer", "Social Media Marketer", "Freelancer", "Graphic Designer"], 
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Web Developer", "Social Media Marketer", "Freelancer", "Graphic Designer"], 
        typeSpeed: 100,
        backSpeed: 70,
        loop: true
    });
}); 