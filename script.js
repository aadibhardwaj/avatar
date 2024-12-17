const addButton = document.getElementById('addButton');
const nameModal = document.getElementById('name');
const nameInput = document.getElementById('nameInput');
const confirmButton = document.getElementById('confirmButton');
const cancelButton = document.getElementById('cancelButton');
const avatarsContainer = document.getElementById('avatarsContainer');


addButton.addEventListener('click', () => {
nameModal.style.display = 'flex';
nameInput.value = '';
nameInput.focus();
});


cancelButton.addEventListener('click', () => {
  nameModal.style.display = 'none';
});


confirmButton.addEventListener('click', () => {
  const name = nameInput.value.trim();
  if (name) {
    createAvatar(name);
    nameModal.style.display = 'none';
  } else {
    alert('Please enter a valid name.');
  }
});


function createAvatar(name) {
  const avatar = document.createElement('div');
  avatar.classList.add('avatar');
  avatar.textContent = name.charAt(0).toUpperCase();


  const deleteButton = document.createElement('button');
  deleteButton.classList.add('delete-button');
  deleteButton.textContent = '×';
  deleteButton.addEventListener('click', () => {
  avatar.remove();
  });

  avatar.appendChild(deleteButton);
  avatarsContainer.appendChild(avatar);
}