


/**
 * 画弧
 *
 * 容器120，圆半径50，10为居中偏离值
 *
 * @param {number} startRadian
 * @param {number} endRadian
 *
 *
 *
 * 返回路径 path d 值
 * */
export default function drawArc({
     startRadian = 0,
     endRadian
 }) {
    // 圆的顶点坐标(圆最高的点)，基础起始点，以此点作为起始画圆
    let ognY = 10 // 根据容器可能会有所调整，目前容器 120
    let ognX = 50 + ognY
    let r = 50

    let startX=Math.sin(startRadian) * r + ognX;
    let startY =r - Math.cos(startRadian) * r + ognY;

    // 弧度单位
    var endx = Math.sin(endRadian) * r + ognX;
    var endy = r - Math.cos(endRadian) * r + ognY;

    if (endRadian === 2 * Math.PI) endx -= 0.001;

    return 'M' + startX + ' ' + startY + ' A ' + r + ' ' + r + ', 0, ' + (endRadian-startRadian > Math.PI ? 1 : 0) + ', 1, ' + endx.toFixed(3) + ' ' + endy.toFixed(3);

}