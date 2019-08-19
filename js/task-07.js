let input;
const numbers = [];
let total = 0;

do {
  input = prompt(`Пожалуйста, введите число:`);
  if (!isNaN(input) && input !== null) {
    numbers.push(Number(input));
  } 
    else if (isNaN(input)) {
    alert(`Значение указано не верно!`);
    }
} 
while (input !== null);

if (numbers.length > 0) {
  for (let i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  console.log(`Сумма чисел: ${total}`);
}
else {
  console.log(`Отменено пользователем.`);
}
