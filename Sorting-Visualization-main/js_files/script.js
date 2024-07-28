document.addEventListener('DOMContentLoaded', (event) => {
    createNewArray();
    document.querySelector('#newArray button').addEventListener('click', createNewArray);
    // Add other event listeners and sorting algorithm functions here
});

function createNewArray() {
    const container = document.querySelector('.flex-container');
    container.innerHTML = ''; // Clear the container
    const numberOfBars = document.querySelector('#input input').value;

    for (let i = 0; i < numberOfBars; i++) {
        const bar = document.createElement('div');
        bar.classList.add('flex-item');
        bar.style.height = `${Math.random() * 100}%`;
        container.appendChild(bar);
    }
}
