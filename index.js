var cnt = 0;
function doiChu() {
    $(".title p").text("Don't touch");
    $(".task").css("background-color", "green").addClass("giamDan").on("animationend", function () {
        $(this).removeClass("giamDan");
        $(".title > p + div").css("background-color", "");
        $(".title p").text("Press to open");
    });
}

function napHopQua(ten){
    var tam = `.${ten}`;
    $(tam).addClass("animate__animated animate__rotateOutUpRight").on("animationend", function () {
        $(".gift-box").css("pointer-events", "");

        $(this).removeClass("animate__animated animate__rotateOutUpRight").css({ "background-color": "transparent" });
    });
}

function thanHopQua(ten,ten1,ten2)
{
    var tam = `.${ten}`;
    var tam1 = `.${ten1}`;
    var tam2 =  `.${ten2}`;
    $(tam).addClass("animate__animated animate__rotateOutDownLeft").on("animationend", function () {

        $(".gift-box").css("pointer-events", "");

        $(this).removeClass("animate__animated animate__rotateOutDownLeft").css({
            "background-color": "transparent",

        });
        $(tam1).removeClass("hidden");
        $(tam2).removeClass("hidden");
    });
}

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.onload = function () {



    $(".main-gift-body").on("click", function () {
        var audio = document.getElementById('audio');
        audio.play();
        doiChu();

       
        cnt++;
        $(".gift-box").css("pointer-events", "none");
        if (cnt <= 2) {

            if(cnt%2!=0)
            {
                $("body").css("background-color","lightsteelblue");
                $(".title > p").css("color","white");
                napHopQua("main-gift-head");

            }
           
            else thanHopQua("main-gift-body","gift-head","gift-body");
        }
        else if(cnt > 2 && cnt <=4)
        {

            if(cnt%2 !=0)
            {
                $("body").css("background-color","bisque");
                $(".title > p").css("color","black");
                napHopQua("gift-head");
            }
            else thanHopQua("gift-body","giftH2","giftB2");



         
        }
        else if(cnt >4 && cnt <= 6)
        {
            if(cnt%2!=0)
            {
                $("body").css("background-color","darksalmon");
                $(".title > p").css("color","aqua");
                napHopQua("giftH2");
            }
            else
                thanHopQua("giftB2","giftH3","giftB3");
        }
        else if(cnt > 6 && cnt<=8)
        {
            if(cnt%2!=0)
                {
                    $("body").css("background-color","rosybrown");
                $(".title > p").css("color","blanchedalmond");
                    napHopQua("giftH3");
                }
                else
                    thanHopQua("giftB3","giftH4","giftB4");
        }
        else if(cnt > 8&&cnt<=10)
        {
            if(cnt%2!=0)
                {
                    $("body").css("background-color","darkseagreen");
                    $(".title > p").css("color","white");
                    napHopQua("giftH4");
                }
                else
                {
                    
                    $(".giftB4").addClass("animate__animated animate__rotateOutDownLeft").on("animationend", function () {

                        $(".gift-box").css("pointer-events", "");
                
                        $(this).removeClass("animate__animated animate__rotateOutDownLeft").css({
                            "background-color": "transparent",
                
                        });

                        $(".gift-box").addClass("hide");
                        $('.title').addClass("hide");
                        

                        $('.test').removeClass("hide").addClass("animate__animated animate__backInUp").on("animationend",function(){
                            $(this).removeClass("animate__animated animate__backInUp");
                        });

                    });
                   
                }
                  
        }
    });


    var x = document.querySelector(".test");

    if(isElementInViewport(x))
    {
        let timeout;

        function resetTimer() {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                var audio = document.getElementById('audio');
                $(audio).attr("src","./yay.mp3");
                audio.play();
             $(".test").addClass("animate__animated animate__backOutRight").on("animationend",function(){
                $(this).removeClass("animate__animated animate__backOutRight").addClass("hide");
                $(".letters").removeClass("hide").addClass("animate__animated animate__jackInTheBox").on("animationend",function(){
                    $(this).removeClass("animate__animated animate__jackInTheBox");
                });
             });   
            }, 15000);
        }

        // Lắng nghe các sự kiện tương tác của người dùng
        window.onload = resetTimer;
        document.onmousemove = resetTimer;
        document.onkeypress = resetTimer;
        document.onclick = resetTimer;
        document.onscroll = resetTimer;
    }

    $(".btn").on("click",function(){
        var audio = document.getElementById('audio');
        $(audio).attr("src","./yay.mp3");
        audio.play();
        $(".test").addClass("animate__animated animate__backOutRight").on("animationend",function(){
            $(this).removeClass("animate__animated animate__backOutRight").addClass("hide");
            $(".letters").removeClass("hide").addClass("animate__animated animate__jackInTheBox").on("animationend",function(){
                $(this).removeClass("animate__animated animate__jackInTheBox");
            });
         });   
    });

};