const likeBtns = document.querySelectorAll('.product-card__buttons > button');
likeBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (e.target.style.color !== 'red') {
      e.target.style.color = 'red';

    } else {
      e.target.style.color = 'black';
    }
  })
})

