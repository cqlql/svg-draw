/**
 * Created by cql on 2017/7/7.
 */


require('./index.pcss')


export default function drawRadar({el, data,names}) {

  let eBox = document.createElement('div')

  eBox.innerHTML=`<div class="draw-radar">
  <svg viewBox="0 0 120 120">
    <path fill="none" stroke="#e8e8e8" stroke-width=".2"></path>
    <path fill="rgba(26,213,215, 0.08)" stroke="rgb(26,213,215)" stroke-width=".8"></path>
  </svg>
</div>`
  eBox= eBox.children[0]


  // 边数
  let num = 6

  let radian = Math.PI * 2 / num

// 圆的顶点坐标(圆最高的点)，基础起始点，以此点作为起始画圆
  let r = 50
  let ognY = 10 // 根据容器可能会有所调整，目前容器 120
  let ognX = r + ognY

  let paths = eBox.querySelectorAll('path')

// 根据弧度、半径 取对应的点
// ox, oy 为偏移坐标，起始画图位置
  function getxy(rad, r, ox, oy) {
    return {
      x: (Math.sin(rad) * r + ox).toFixed(3) * 1,
      y: (r - Math.cos(rad) * r + oy).toFixed(3) * 1
    }
  }

// 画背景
  function bg() {
    let d = ''


    // 画多边形
    function drayPolygon(r, sx, sy) {
      d += 'M' + sx + ' ' + sy
      for (let i = 1; i < num; i++) {
        let rad = radian * i
        let {x, y} = getxy(rad, r, sx, sy)
        d += 'L' + x + ' ' + y
      }
      d += 'Z';

      return d
    }

    // 开始画米线，架子线
    let cx = r + ognY // 中心点 xy，xy相同
    let cy = cx // 中心点 xy，xy相同
    for (let i = 0; i < num; i++) {
      let rad = radian * i
      let {x, y} = getxy(rad, r, ognX, ognY)
      d += 'M' + cx + ' ' + cy + 'L' + x + ' ' + y
    }


// 开始画雷达背景层数
    let lyNum = 4
    let lyd = r / lyNum

    for (let i = 0; i < lyNum; i++) {
      let _oty = lyd * i
      let _r = r - _oty
      let sy = _oty + ognY

      let d = drayPolygon(_r, ognX, sy)
    }
    paths[0].setAttribute('d', d)
  }

// 画标签
  function label(names) {

// 画标签

    let html = ''
    let pt = {
      0:'t'
    }
    pt[num/2]='b'


    for (let i = 0; i < num; i++) {
      let rad = radian * i
      let {x, y} = getxy(rad, r+3, ognX,ognY-3)
      x=x/120 *100
      y=y/120 *100

      let hf =num/2
      let cname = 'b'
      if(i===0){
        cname='t'
      }else if(i<hf){
        cname='r'
      }else if(i>hf){
        cname='l'
      }

      html+='<div class="lb '+cname+'" style="left:' +x+'%;'+ 'top:' +y+'%;"><span>'+names[i]+'</span></div>'

    }

    let elem = document.createElement('div')
    elem.className ='lbs'
    elem.innerHTML = html
    eBox.appendChild(elem)
  }

// 画数据图形
  function draw() {
    let d = ''
    for (let i = 0; i < num; i++) {
      let rad = radian * i
      let _r = r * data[i]
      let {x, y} = getxy(rad, _r, ognX, r - _r + ognY)

      d += (i ? 'L' : 'M') + x + ' ' + y
    }
    d += 'Z'

    paths[1].setAttribute('d', d)
  }

  bg()
  label(names)
  draw();

  el.outerHTML = eBox.outerHTML
}
