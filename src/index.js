const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

let count = 0;

number.innerHTML = count;

const updateCount = () => {
  number.innerHTML = count;
}

const handleAdd = () => {
  count++;
  updateCount();
};

const handleMinus = () => {
  count--;
  updateCount();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);