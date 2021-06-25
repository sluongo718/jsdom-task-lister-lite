document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('form');
  const input = document.querySelector('input');
  const task = document.querySelector('#tasks');

    form.addEventListener('submit', (event) => {
      const li = document.createElement('li');
      const button = document.createElement('button')
      const value = input.value

      li.innerText = value
      button.innerText = 'x'
      button.id = value
      li.appendChild(button)
      task.appendChild(li)
      input.value = ''
      event.preventDefault();

      button.addEventListener('click', () => {
        li.remove()
      });

    });
});
