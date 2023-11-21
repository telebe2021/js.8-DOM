document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('container');
  
    for (let i = 1; i <= 20; i++) {
      const box = document.createElement('div');
      box.classList.add('box');
  
      if (i % 2 === 0) {
        box.style.backgroundColor = 'red'; 
      } else {
        box.style.backgroundColor = 'yellow';
      }
  
      if (i === 5 || i === 10 || i === 15 || i === 20) {
        box.style.backgroundColor = 'blue'; 
      }
  
      box.textContent = i; 
      container.appendChild(box);
    }
  });
  