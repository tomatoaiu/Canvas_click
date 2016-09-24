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
      style: {
        strokeStyle: '#CCC',
          fillStyle: '#FF0',
          lineWidth: 2
        },
        hoverStyle: {
          strokeStyle: '#555',
          fillStyle: '#FF0',
          fadeSpeed: 300,
          easeType: 'easeInQuad'
        },
          activeStyle: {
          strokeStyle: '#00F',
          fillStyle: '#0FF'
        },
        gradient: {
          strokeStyle: '#F00',
          startFrom: 'center',
          color: ['#F00', '#FF0', 'rgba(0,255,255,0.8)'],
          position: [0, 0.5, 1]
        },
        onClick: function () {
          this.animateShape('circle1', {
            endlinewidth: 5,
            endcoord: {x: 140, y: 180, r: 120}
          });
        }
    });
});
