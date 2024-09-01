document.querySelector('.input-numbers').addEventListener('click', (event) => {
  const screen = document.querySelector('.calculator-screen');
  let value = event.target.innerText;

  if (event.target.tagName !== 'BUTTON') return;
  // Verifica que el evento provenga de un botón.

  if (value === 'AC') {
    screen.value = '0';
  } else if (value === '=') {
    screen.value = screen.value.replace(/x/g, '*').replace(/÷/g, '/');
    screen.value = eval(screen.value);
  } else {
    screen.value = screen.value === '0' ? value : screen.value + value;
  }
});

//* Hacemos una "función" que obtiene los valores del texto interno del input principal que contiene las
// operaciones, almacena su valor y lo procesa mediante una estructura condicional, la cuál sí dependiendo
// el signo seleccionado hace la operación, y también comprueba que no haya errores con un ternario.
