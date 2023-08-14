// Time


const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');

function updateTime() {
  const currentTime = new Date();

  const currentHour = currentTime.getHours();
  const currentMinute = currentTime.getMinutes();

  hourEl.innerText = currentHour.toString();
  minuteEl.innerText = currentMinute.toString().padStart(2, '0');
}

updateTime();

setInterval(updateTime, 1000);



// CALCULATOR


const resultEl = document.querySelector('.result');
let expression = '';

document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', (e) => {
    const value = button.value;
    if(value == '=') {
      try {
        expression = expression.replace(/×/g, '*').replace(/−/g, '-').replace(/÷/g, '/');
        expression = eval(expression);
        expression = parseFloat(expression);
        resultEl.innerText = expression;
      } catch (err) {
        resultEl.innerText = 'Error';
      }
    }
    else if(value == 'AC') {
      expression = '';
      resultEl.innerText = expression;
    }
    else if (value == '%') {
      try {
        expression = expression.replace(/×/g, '*').replace(/−/g, '-').replace(/÷/g, '/');
        expression = eval(expression) / 100;
        resultEl.innerText = expression;
      } catch (err) {
        resultEl.innerText = 'Error';
      }
    }
    else if (value == 'CE') {
      expression = expression.slice(0, -1);
      resultEl.innerText = expression;
    }
    else {
      expression += e.target.innerText;
      resultEl.innerText = expression;
    }
  })
});
