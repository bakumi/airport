
const departuresButton = document.querySelector('.tab-button.departures');
const arrivalsButton = document.querySelector('.tab-button.arrivals');
const departureFlights = document.querySelectorAll('.flight-block.departure');
const arrivalFlights = document.querySelectorAll('.flight-block.arrival');


departuresButton.addEventListener('click', () => showFlights('departures'));
arrivalsButton.addEventListener('click', () => showFlights('arrivals'));


function showFlights(tab) {
    if (tab === 'departures') {
        showBlocks(departureFlights);
        hideBlocks(arrivalFlights);
    } else {
        showBlocks(arrivalFlights);
        hideBlocks(departureFlights);
    }
}


function showBlocks(blocks) {
    blocks.forEach(block => {
        block.style.display = 'block';
    });
}

function hideBlocks(blocks) {
    blocks.forEach(block => {
        block.style.display = 'none';
    });
}


