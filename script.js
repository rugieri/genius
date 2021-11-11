let order = [];
let clickOrder = [];
let score = 0;

/* 0- green
   1- red
   2- yellow
   3- blue 

*/

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shuffleOrder = () => {
  let colorOrder = Math.floor(Math.random() * 4);
  order(order.length) = colorOrder;
  clickedOrder = [];

  for(let i in order) {
    let elementColor = createColorElement(order[i])
    lightColor(elementColor, Number(i) +1)
  }

  let lightColor = (element, number) => {
    number = number * 500;
    setTimeout(()=> {
      element.classList.add('selected')
    }, number - 250)
    setTimeout(()=> {
      element.classList.remove('selected')
    })
  }

  let checkOrder = () => {
    for(let in clickOrder) {
      if(clickOrder[i] != order[i]) {
        lose();
        break;
      }
    }
    if(clickedOrder.length == order.length) {
      alert(`Score ${score}\nYou Win!!! Get Ready for the Next Level !!!`)
      nextLevel();
    }
  }
  let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElement(color).classList.add('selected');

    setTimeout(() => {
      createColorElement(color).classList.remove('selected');
    })

    checkOrder();
  }
}
