function updateComment() {
    fetch("https://api.qjqq.cn/api/Yi?c=j")     
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {

        const poemElement = document.getElementById('poem');
        const infoElement = document.getElementById('info');
        poemElement.innerHTML = data.hitokoto;
        if (data.from_who !== null) {
          infoElement.innerHTML = data.from_who + " · " + "《 " + data.from + " 》";
        } else {
          infoElement.innerHTML = " “ " + data.from + " ” ";
        }
      })
      .catch(error => {

        // const poemElement = document.getElementById('poem');
        // const infoElement = document.getElementById('info');
        // poemElement.innerHTML = "获取出错啦";
        // infoElement.innerHTML = "";
        console.error('Fetch error:', error);
      });
  }

updateComment();

window.addEventListener('load', updateComment);

//鼠标控制横向滚动
if (document.getElementsByClassName("menu-item")[0]){
  var xscroll = document.getElementsByClassName("menu-item")[0];
  xscroll.addEventListener("mousewheel", function (e) {
  //计算鼠标滚轮滚动的距离
  var v = -e.wheelDelta / 2;
  xscroll.scrollLeft += v;
  //阻止浏览器默认方法
  e.preventDefault();
  }, false);
}

// 获取当前时间

var box = document.getElementById('message-date-box')

//不足十位补零
var addZero = val => val < 10 ? '0' + val : val
//把阿拉伯数字的星期转化为中国汉字的星期 // 星期映射表
var trans = val => {
    var obj = {
        0: '日',
        1: '一',
        2: '二',
        3: '三',
        4: '四',
        5: '五',
        6: '六'
    }
    return obj[val]
}
setTime ()
//获取时间的方法
function setTime() {
    var time = new Date();
    // var year = time.getFullYear(); // 获取年
    // var month = time.getMonth() + 1; // 获取月（是从0到11，所以我们要给他加1）
    // var date = time.getDate(); // 获取日
    var hour = time.getHours(); // 获取小时
    var min = time.getMinutes(); // 获取分钟
    var sec = time.getSeconds(); // 获取秒
    var day = time.getDay(); // 获取星期几(0是星期日)


    var value = addZero(hour) +
        ':' + addZero(min) + ":" + addZero(sec) + ' 星期'+ trans(day)
    // 把所有的时间拼接到一起
    box.innerText = value
    // console.log(value)
    // 把拼接好的时间插入到页面

}
// 让定时器每间隔一秒就执行一次setTime这个方法（这是实现时钟的核心）
setInterval(setTime, 1000)


function Navvisible(){
  var navbar = document.getElementById('menu-container')
  if (navbar) {
      // 首先判断是否存在active类
      if (navbar.className.indexOf('active-menu-bar') > -1){
        // 存在则移除
        navbar.classList.remove('active-menu-bar');
      }
      else{
        // 不存在则先添加
        navbar.classList.add('active-menu-bar');
      }
  }
}


function waterfall(a) {
  function b(a, b) {
    var c = window.getComputedStyle(b);
    return parseFloat(c["margin" + a]) || 0;
  }
  function c(a) {
    return a + "px";
  }
  function d(a) {
    return parseFloat(a.style.top);
  }
  function e(a) {
    return parseFloat(a.style.left);
  }
  function f(a) {
    return a.clientWidth;
  }
  function g(a) {
    return a.clientHeight;
  }
  function h(a) {
    return d(a) + g(a) + b("Bottom", a);
  }
  function i(a) {
    return e(a) + f(a) + b("Right", a);
  }
  function j(a) {
    a = a.sort(function (a, b) {
      return h(a) === h(b) ? e(b) - e(a) : h(b) - h(a);
    });
  }
  function k(b) {
    f(a) != t && (b.target.removeEventListener(b.type, arguments.callee), waterfall(a));
  }
  "string" == typeof a && (a = document.querySelector(a));
  var l = [].map.call(a.children, function (a) {
    return (a.style.position = "absolute"), a;
  });
  a.style.position = "relative";
  var m = [];
  l.length && ((l[0].style.top = "0px"), (l[0].style.left = c(b("Left", l[0]))), m.push(l[0]));
  for (var n = 1; n < l.length; n++) {
    var o = l[n - 1],
      p = l[n],
      q = i(o) + f(p) <= f(a);
    if (!q) break;
    (p.style.top = o.style.top), (p.style.left = c(i(o) + b("Left", p))), m.push(p);
  }
  for (; n < l.length; n++) {
    j(m);
    var p = l[n],
      r = m.pop();
    (p.style.top = c(h(r) + b("Top", p))), (p.style.left = c(e(r))), m.push(p);
  }
  j(m);
  var s = m[0];
  a.style.height = c(h(s) + b("Bottom", s));
  var t = f(a);
  window.addEventListener ? window.addEventListener("resize", k) : (document.body.onresize = k);
}