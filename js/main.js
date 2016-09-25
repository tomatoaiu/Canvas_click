$(function() {
    var canvas = $('#canvas');

    var cClicked1 = false,
        cClicked2 = false;

    var dotName, target;

    //canvasサイズをブラウザ画面のサイズに
    var size = $('#canvas').get(0);
    var container = $('#wrap').get(0);
    sizing();

    //サイズ変更処理
    function sizing() {
      size.height = container.offsetHeight;
      size.width = container.offsetWidth;
    }

    //リサイズイベントの発生時
    window.addEventListener('resize', function() {
      (!window.requestAnimationFrame) ? setTimeout(sizing, 300): window.requestAnimationFrame(sizing);
    });

    /* IE8以下のブラウザ対策 */
    if (!jQuery.support.opacity && typeof FlashCanvas !== 'undefined') {
      FlashCanvas.initElement(canvas.get(0));
    }

    /* プラグイン初期化 */
    canvas.clickableCanvas();

    //元となる線の設定と描画
    var l1 = canvas.createShape('line1', 'line', [
        {x: 80, y: 160}, //始点
        {x: 700, y: 160} //終点
    ], {
        style: {
              lineWidth: 5,
              fillStyle: '#555',
            strokeStyle: '#555'
        }
    });

    //元となる点の設定と描画
     var c1 = canvas.createShape('circle1', 'circle', {x: 80, y: 160, r: 50}, {
      //図形のデフォルトのスタイル
      style: {
        strokeStyle: '#000',
          fillStyle: '#EEE',
          lineWidth: 2
      },
      //ポインターが図形に乗ったときのスタイル
      hoverStyle: {
        strokeStyle: '#555',
        fillStyle: '#999',
        fadeSpeed: 300,
        easeType: 'easeInQuad'
      },
      //図形をクリックした際のスタイル（ほとんど瞬間的）
      activeStyle: {
        strokeStyle: '#FFF',
        fillStyle: '#FFF'
      },
      //クリックしたときの処理
      onClick: function () {
        cClicked1 = true;
        dotClicked(c1, 'circle1');
      }

    });

    //クリックされたら対象の要素の色を変更
    //dotClicked(対象, 対象名)
    function dotClicked(target, dotName) {

      target.animateShape(dotName , {
        endcolor: {
          strokeStyle: '#000',
          fillStyle: '#000'
        },
        endlinewidth: 2,
        endcoord: {}
      });
      if(cClicked1 == true && cClicked2 == true){
        dotLink();
      }
    }

    //二点間を結ぶ線の描画
    function dotLink(){

      l1.animateShape('line1', {
        endlinewidth: 5,
        endcolor: {
            strokeStyle: '#08F',
              fillStyle: '#08F'
        },
        endcoord: [
            {x: 80, y: 160},
            {x: 700, y: 160}
        ]
      });
    }

    // circle1をコピー、circle2を描画
    // canvas.copyShape(コピー元名, 新しい名前, {各種設定});
    var c2 = canvas.copyShape('circle1', 'circle2', {
        coords: {x: 700, y: 160, h: 80, w: 160, r: 50},
        //クリックしたときの処理
        onClick: function () {
          cClicked2 = true;
          dotClicked(c2, 'circle2');
        }
    });

});
