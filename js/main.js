jQuery(function() {
    var canvas = jQuery('#canvas');

    /* IE8以下のブラウザ対策 */
    if (!jQuery.support.opacity && typeof FlashCanvas !== 'undefined') {
      FlashCanvas.initElement(canvas.get(0));
    }

    /* プラグイン初期化 */
    canvas.clickableCanvas();

    canvas.createShape('circle1', 'circle', {x: 80, y: 160, r: 50}, {
      zindex: 15,
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
          this.animateShape('circle1', {
            strokeStyle: '#FFF',
            fillStyle: '#FFF',
            endlinewidth: 5,
            endcoord: {x: 140, y: 180, r: 120}
          });
        }
    });
});
