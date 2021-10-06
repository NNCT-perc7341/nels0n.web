$(window).on('load',function(){
  $("#loader").delay(2000).fadeOut('slow');//ローディング画面を1.5秒（1500ms）待機してからフェードアウト
  $("#loader-animation").delay(2000).fadeOut('slow');
  $("#loader-logo").delay(1700).fadeOut('slow');//ロゴを1.2秒（1200ms）待機してからフェードアウト
});


/*modal language*/
$(function(){
    $('.languages').on('click',function(){
        $('.modal_language').fadeIn();
        return false;
    });
    $('.modal_close').on('click',function(){
        $('.modal_language').fadeOut();
        return false;
    });
});

/*modal about*/
$(function(){
    $('.about').on('click',function(){
        $('.modal_about').fadeIn();
        return false;
    });
    $('.modal_about_close').on('click',function(){
        $('.modal_about').fadeOut();
        return false;
    });
});

/*select language*/
const ja = document.querySelector(".modal_ja");
const en = document.querySelector(".modal_en");

ja.addEventListener("click" , () => {
  var thisurl = location.href ;
  var nexturl = thisurl.replace("/en/" , "/ja/");
  location.href = nexturl;
});

en.addEventListener("click" , () => {
  var thisurl = location.href ;
  var nexturl = thisurl.replace("/ja/" , "/en/");
  location.href = nexturl;
});

/*logo*/
const logo = document.querySelector(".nels0n");

logo.addEventListener("click" , () =>{
  var host = location.hostname ;
  location.href = "http://" + host;
});
