var num = 0;
var start = 50;
var shift = 105;

while (num < 31) {
    $('canvas').drawArc({
        layer: true,
        fillStyle: 'rgb( 0,0,255 )',
        x: start + num*shift, y: 50,
        radius: 50,
        click: function(layer) {
            console.log(layer);
            if (layer.fillStyle == 'rgb( 0,0,255 )') {
                $(this).animateLayer(layer, {
                    fillStyle: 'rgb( 0,255,0 )'
                }, 'slow');
            } else {
                $(this).animateLayer(layer, {
                    fillStyle: 'rgb( 0,0,255 )'
                }, 'slow');

            }
          }
    });
  $('canvas').drawText({
  fillStyle: '#9cf',
  strokeStyle: '#25a',
  strokeWidth: 2,
  x: start + num*shift, y: 50,
  fontSize: 48,
  fontFamily: 'Verdana, sans-serif',
  text: num+1
});;
    num = num + 1;
}
