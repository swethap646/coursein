$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('.nav-bar').toggleClass('nav-toggle');
    });


    $('#login').click(function(){
        $('.login-form').addClass('popup');
    });

    $('.login-form form .fa-times').click(function(){
        $('.login-form').removeClass('popup');
    });

    
    $(window).on('load scroll',function(){
        $('#menu').removeClass('fa-times');
        $('.nav-bar').removeClass('nav-toggle');
    

    $('section').each(function(){

        let top = $(window).scrollTop();
        let height = $(this).height();
        let id = $(this).attr('id');
        let offset = $(this).offset().top-200;


        if(top > offset && top < offset + height){
           $('.nav-bar ul li a').removeClass('active');
           $('.nav-bar').find(`[href="#${id}"]`).addClass('active');
        }
    });

});
});