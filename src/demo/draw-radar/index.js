import {drawRadar} from '../../svg-draw';



let names=['1迷失Z城/失落之城','2将来的事','3速度与激情8','4','5','6麻烦家族']
let data = [.3, .7, .5, .8, 1, .9]

let el = document.querySelector('#test')

el.appendChild(drawRadar({
  el,
  data,
  names
}))

el.onclick=function (e) {
  let {target} = e
  if( target.tagName==='SPAN'){
    alert(target.innerHTML)
  }
}





