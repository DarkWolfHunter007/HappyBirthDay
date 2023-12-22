function saveMessage(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    localStorage.setItem('name', name);
    localStorage.setItem('message', message);

    window.location.href = 'display.html';
}

document.addEventListener('DOMContentLoaded', function () {
    const name = localStorage.getItem('name');
    const message = localStorage.getItem('message');

    const displayedName = document.getElementById('displayedName');
    const displayedMessage = document.getElementById('displayedMessage');

    if (name && message) {
        displayedName.textContent = name;
        displayedMessage.textContent = message;
    } else {
        displayedMessage.textContent = 'No birthday message received.';
    }
 

});

function developer() {
    console.log("Designed and developed by Allen MT Maliyil");
  }