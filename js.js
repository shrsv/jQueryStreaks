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
            console.log("blah");
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
    num = num + 1;
}
