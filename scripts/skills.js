//languages bars

const skillsBars = document.querySelectorAll('div.bar');
var skillsValue = Array(5);

window.addEventListener('load', skillBarAnimate);

function skillBarAnimate(){
  for (var i = 0; i < skillsBars.length; i++) {
    skillsValue[i] = skillsBars[i];
    skillsBars[i].animate([
      {
        width: 0
      },
      {
        width: skillsValue[i].dataset.percent + "%"
      }
    ],
    {duration: 1000,
    fill: "forwards",
    easing: "linear"});
  }
};
