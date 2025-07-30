//flow_250613.js

var autocall;  //인터벌을 담을 변수!

$(document).ready(function(){

    autocall = setInterval(flow, 10); //흘러가는 속도 조절 -> 자동실행 시간으로 조절!

    //마우스 오버 시 멈춤, 아웃시 다시 실행
    $('.flow li').hover(function(){
        //mouseenter
        // 1) 자동실행 멈춤 - 인터벌 지우기 
        // 2) .caption 등장!

        clearInterval(autocall);

        $(this).find('.caption').animate({
            top: '105%',
            opacity: 1
        }, 500);

    },function(){
        //mouseleave
        // 1) 자동실행 - 인터벌 재실행
        // 2) .caption 숨기기

        autocall = setInterval(flow, 10);

        //$('.caption').hide();

        $(this).find('.caption').hide(0, function(){
            //재등장을 위한 초깃값 복원!
            $(this).css({
                top: '50%',
                opacity: 0,
                display: 'block'
            });
        });
    });


});

/*/////////////////////////////////////////////////
함수명 : flow
기능 : 컨텐츠를 왼쪽으로 흐르게 하는 함수!
////////////////////////////////////////////////*/

var moveNum = 0; //이동하는 left값을 담을 변수!

function flow (){

    moveNum++; //left 이동값을 1씩 증가

    // (무한반복을 위해) 다음을 위한 준비!
    // li 하나의 너비보다 이동한 left값(moveNum)이 커졌을 때 
    // li 하나의 너비를 구하자!

    var boxWidth = $('.flow li').first().outerWidth();

    //if else 문
    if (moveNum > boxWidth) {
        // 이동한 픽셀수가 li 하나의 너비보다 커졌을 때! >> 다음을 위한 준비!
        // (왼쪽으로 흘러가서) 사라진 첫번째 li를 .flow의 맨 뒤로 이동 >> append
        // .flow의 li 순서가 변경되었으므로 left값 초기화!
        // 동시에 이동값(moveNum) 초기화 
        
        $('.flow').append($('.flow li').first()).css({
            left: 0
        });

        moveNum = 0;   

    } else {
        //moveNum의 값을 left 값으로 적용!
        $('.flow').css({
            left: -moveNum
        });
    }


    

}

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