//about.js 

$(document).ready(function(){
                //함수호출!
                //fadeSlide();
                //1. 클릭할 때 마다 함수 호출
                /* $('.viewer').click(function(){
                    fadeSlide();
                }); */

                //2. 3초 간격으로 함수 호출 (자동실행) setInterval은 시작코드블럭 없이 바로 사용가능

                // setInterval(fadeSlide, 3000); 

                //3. 이벤트 연결 
                // 마우스를 올렸을 때 자동실행 멈춤 -> clearInterval()
                //마우스가 벗어나면 자동실행!

                var autoCall; //인터벌을 담는 변수

                autoCall = setInterval(fadeSlide, 5000);

                $('.vision-intro').mouseover(function(){
                    //인터벌 제거 - 멈춤
                    clearInterval(autoCall);
                }).mouseout(function(){
                    //인터벌 재가동
                    autoCall = setInterval(fadeSlide, 5000);
                });
            });

            /*////////////////////////////////////

            함수명 : fadeSlide
            기능 : fade 효과를 적용해 슬라이드 전환

            ///////////////////////////////////*/

            function fadeSlide (){

                //1번 - 현재 보여지는 슬라이드, 첫 번째 슬라이드
                var firstSlide = $('.vision-intro .vision-box').first();
                // console.log('첫번째 슬라이드: ' + firstSlide);
                //2번 - 현재 보여지는 슬라이드의 '다음' 슬라이드

                var nextSlide = firstSlide.next();
                // console.log('다음 슬라이드: ' + nextSlide);

                nextSlide.hide().addClass('active').fadeIn(800, function(){
                    //다음을 위한 준비!
                    //1번 슬라이드를 맨 뒤로 이동!!
                    $('.vision-intro').append(firstSlide);

                    //첫번째 슬라이드의 z-index제거!
                    firstSlide.removeClass('active');

                });
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