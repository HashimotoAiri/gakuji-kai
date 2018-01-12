$(function () {

 // モバイルのアコーディオン
  $('#sp_menu').on('click', function() {
    $('.accordion').slideToggle();
	});

  // アコーディオン中のリンクタップ時
  $('.accordion a').on('click', function() {
    $('.accordion').slideToggle();
	});
});

$(function(){

// アコーディオン
  $(".func-acco dt").on("click",function(){
    $(this).toggleClass("open");
    $(this).next().slideToggle();
  });

// #で始まるアンカーをクリックした場合に処理
  $('a[href^=#]').click(function() {
    // スクロールの速度
    var speed = 400; // ミリ秒
    // アンカーの値取得
    var href= $(this).attr("href");
    // 移動先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    // 移動先を数値で取得
    var position = target.offset().top;
    // スムーススクロール
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

// リンク内が画像の場合ホバー処理
  $('a').has('img').hover(
    function(){
    $(this).stop().fadeTo("2000",0.6);
  },function(){
    $(this).stop().fadeTo("2000",1.0);
  });


});