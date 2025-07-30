$(document).ready(function(){
            //mouseenter, mouseleave
            //mouseover, mouseout

            $('.depth01 > li').mouseenter(function(){
                // $('.depth02').slideDown();
                $(this).find('.depth02').stop().slideDown(); // .stop 슬라이드업 되는 것 멈추고 슬라이드 다운하기
            });

            $('.depth01 > li').mouseleave(function(){
                $('.depth02').stop().slideUp(); //슬라이드다운되는 것 멈추고 슬라이드 업하기
            });
        }); 