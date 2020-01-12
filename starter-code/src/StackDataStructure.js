document.getElementById('addPost').addEventListener('submit', addItems);
document.getElementById('removeItem').addEventListener('click', removeItems);
const storage = document.querySelectorAll('.storage');

function addItems(e) {
  e.preventDefault();
  const item = document.getElementById('item').value;
  for (let i = storage.length - 1; i >= 0; i--) {
    if (storage[i].innerHTML === 'Stack Underflow' && item) {
      storage[i].innerHTML = '';
      storage[i].classList.remove('under-flow');
    }
    if (storage[i].innerHTML === '' && item) {
      storage[i].innerHTML = item;
      storage[i].classList.add('color');
      document.getElementById('item').value = '';
      break;
    }
    if (storage[i].innerHTML !== '' && i === 0 && item) {
      storage[i].innerHTML = 'Stack Overflow';
      storage[i].classList.add('over-flow');
    }
  }
}
function removeItems() {
  for (let i = 0; i < storage.length; i++) {
    if (
      storage[i].innerHTML !== '' &&
      storage[i].innerHTML !== 'Stack Underflow'
    ) {
      storage[i].innerHTML = '';
      storage[i].classList.remove('color');
      storage[i].classList.remove('over-flow');
      break;
    }
    if (
      i === storage.length - 1 &&
      storage[storage.length - 1].innerHTML === ''
    ) {
      storage[i].innerHTML = 'Stack Underflow';
      storage[i].classList.add('under-flow');
    }
  }
}

// function StackDataStructure() {}
