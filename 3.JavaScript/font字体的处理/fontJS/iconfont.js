;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-shoucang" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M699.882088 104.177688c-78.288041 0-139.940193 39.007409-187.831946 103.317087C464.101083 143.127791 402.571728 104.177688 324.218196 104.177688c-141.15895 0-256.027118 124.684744-256.027118 277.958616 0 91.448782 41.173748 155.593707 74.191746 207.075219 96.100732 149.71993 326.494029 311.410496 336.657506 319.290977 9.867742 7.532557 21.474081 11.31879 32.902364 11.31879 11.543917 0 23.02132-3.78521 32.902364-11.31879 10.272971-7.880481 240.606917-169.570024 336.714811-319.290977 33.017998-51.481512 74.249051-115.626437 74.249051-207.075219C955.859064 228.863455 840.941777 104.177688 699.882088 104.177688L699.882088 104.177688 699.882088 104.177688 699.882088 104.177688zM840.941777 554.431392c-93.442182 145.588843-329.505619 310.182528-329.505619 310.182528S275.389094 700.019211 181.888584 554.431392c-34.521235-53.721529-65.308425-104.833627-65.308425-175.406962 0-121.853255 90.994434-220.684168 203.254194-220.684168 83.018785 0 142.446269 54.03773 174.136016 131.386376l0-0.318248 0.042979 0c2.333138 8.032954 9.274224 13.921058 17.364483 13.921058 8.162914 0 15.046694-5.888104 17.379832-13.921058l0.209778 0c31.696909-77.196173 91.122347-131.068128 173.918052-131.068128 112.309902 0 203.304336 98.829889 203.304336 220.684168C906.306484 449.597765 875.455849 500.709863 840.941777 554.431392L840.941777 554.431392 840.941777 554.431392 840.941777 554.431392zM840.941777 554.431392"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shoucang1" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M895.8464 517.685248c88.278016-91.943936 88.221696-240.900096 0-332.834816-45.108224-46.958592-104.531968-69.929984-163.643392-68.9152-82.67776 1.462272-219.037696 115.387392-219.037696 115.387392s-140.1856-115.557376-224.91136-115.410944c-57.719808 0.103424-115.406848 23.085056-159.449088 68.938752-88.226816 91.93472-88.278016 240.89088 0 332.834816l383.520768 399.297536L895.8464 517.685248z" fill="#e02710" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shoucang2" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M519.798 764.444l-231.441 127.636 44.488-270.632-186.952-191.719 258.452-39.191 115.455-246.27 115.455 246.27 258.451 39.191-186.953 191.72 44.488 270.632-231.44-127.637zM1049.411 376.766l-365.962-56.139-163.651-348.485-163.65 348.485-365.962 56.139 264.807 271.161-62.497 383.44 327.301-181.128 327.301 181.128-62.494-383.44 264.807-271.161z" fill="#ff9600" ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shoucang3" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M979.5584 361.6768L689.152 320.8192 559.3088 66.048c-19.1488-37.5808-74.752-37.5808-93.9008 0l-130.048 254.6688-290.4064 40.96c-42.8032 6.0416-60.2112 57.1392-29.0816 86.4256l210.0224 198.3488L203.776 769.9456l-27.648 156.672c-7.3728 41.472 37.6832 72.9088 75.8784 53.5552L511.6928 847.872l259.584 132.3008c38.5024 19.6608 83.2512-12.1856 75.8784-53.5552l-49.664-280.064 210.0224-198.3488c31.9488-29.3888 14.7456-80.4864-27.9552-86.528z" fill="#FBC639" ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
