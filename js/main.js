/*
$(セレクタ).メソッド();

セレクタ
対象になるもの
「～に」、「～に対して」、「～を」
CSSと同じ書き方

メソッド
やりたい内容、処理したい内容
「～をする」
jQueryを作った人が決めてます
https://api.jquery.com/
*/


//.menu_btnをクリックしたら、
//「～したら」と訳せるものは、イベント
//bodyにクラスonをつけたり消したりしたい

/*
クラスmenu_btnに対して、
（クリック）の、イベントと、
イベントに対して、行ってほしい内容(関数)を設定する
*/
$('.menu_btn').on('click',()=>{
    $('body').toggleClass('on');
});

$(window).resize(()=>{
    $('body').removeClass('on');
});
