
import {drawArc} from 'svg-draw';


let d = drawArc({
    startRadian:0,
    endRadian:Math.PI/3
});
document.querySelectorAll('path')[0].setAttribute('d',d);

d = drawArc({
    startRadian:Math.PI/3,
    endRadian:Math.PI/1.5
});
document.querySelectorAll('path')[1].setAttribute('d',d);

d = drawArc({
    startRadian:Math.PI/1.5,
    endRadian:Math.PI/1.2
});
document.querySelectorAll('path')[2].setAttribute('d',d);

d = drawArc({
    startRadian:Math.PI/1.2,
    endRadian:Math.PI*1.5
});
document.querySelectorAll('path')[3].setAttribute('d',d);

d = drawArc({
    startRadian:Math.PI*1.5,
    endRadian:Math.PI*2
});
document.querySelectorAll('path')[4].setAttribute('d',d);

//    d = drawArc({
//        startRadian:0,
//        endRadian:Math.PI*2
//    })
//    document.querySelectorAll('path')[5].setAttribute('d',d)