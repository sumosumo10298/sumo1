// $(document).ready(function () {
//     $('.clickme').click(function (e) { 
//         e.preventDefault();
//          $('.mainmodal').fadeIn();
//     });
   
//     $('.mainmodal').click(function (e) { 
//         e.preventDefault();
//          $('.mainmodal').fadeOut();
//     });

//     $('.modalcontent').click(function (e) { 
//         e.preventDefault();
//         e.stopPropagation();
//     });
//     $('.login').click(function (e) { 
//         e.preventDefault();
//         // let test=$('.register').text()
//         // console.log(test)
//         let username= $('.username').val();
//         let password=$('.password').val();
//         console.log("Username: ", username);
//         console.log("Password: ", password);
//         if(username === "admin" && password === "admin"){
//             $('.mainmodal').fadeOut();
//             $('.clickme').text("LOGIN SUCESS").css('background','pink')
//         } 
//         else{
//             $('.login-tt1').text("ERROR ^!^").css('color','pink')
//         }
//     });
    

// });

// $(document).ready(function () {
//     $('.navbar a').click(function (e) { 
//         e.preventDefault();
//         let content= $(this).text();
//         $('.content').text(content);
//         // $('.navbar a').removeClass('home');
//         $(this).toggleClass('home');
//     });
// });

// $(document).ready(function () {
//     // $(window).scroll(function () { 
//     //     let currentPots=$(this).scrollTop();
//     //    // console.log(currentPots);
//     //    if(currentPots>200){
//     //     $('.totop').fadeIn();
//     //    }
//     //    else{
//     //         $('.totop').fadeOut();
//     //    }
//     // });


//     // $('.totop').click(function (e) { 
//     //     e.preventDefault();
//     //     $(window).scrollTop(0);
//     // });

//     // $('.clickme,.hello').click(function (e) { 
//     //     e.preventDefault();
//     //     let left=  $(this).offset().left;
//     //     let top=  $(this).offset().top;
//     //     console.log("left: ", left)
//     //     console.log("top: ", top)  
//     // });

//     // $('.khong').click(function (e) { 
//     //     e.preventDefault();
//     //     let left=  $('.khong').offset().left;
//     //     let top=  $('.khong').offset().top;
       
//     // });

    

//     // let width=$(window).width();
//     // let height= $(window).height();


//     // $('.khong').mouseenter(function () { 
//     //     let rd= Math.random();
//     //     $('.khong').css({
//     //         left: rd*width,
//     //          top: rd*height
//     //     });
//     // });
// });


// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel({
//     items:1,
//     margin:10,
//     loop:true,
//     autoplay: true,
//     autoplayTimeout: 4000,
//     nav:true,
//     navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
//     navSpeed:3000,
//     });
// });

$(document).ready(function () {
    // $('.to-contact').click(function (e) { 
    //     e.preventDefault();
    //     let contactTop= $('.contact').offset().top;
    //     $('html').animate({
    //         scrollTop: contactTop
    //     },1000)
    //     // $(window).scrollTop(contactTop)
    // });

     $('nav>ul>li>a').click(function (e) { 
        e.preventDefault();
        // let idName = $(this).attr('href');

        // let offsetTop=$(idName).offset().top;

        $(this).animate({
            marginLeft:200,
            // backgroundColor: 'pink'
        })

        // $('html').animate({
        //     scrollTop: offsetTop
        // },1000,'easeOutBounce')
    });

});