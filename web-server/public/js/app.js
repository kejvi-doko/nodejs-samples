console.log('Client side javascript file is loaded!')



const weatherForm = document.querySelector('form');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');



weatherForm.addEventListener("submit", (e) => {
    e.preventDefault();

    messageTwo.textContent = "";

    messageOne.textContent = "Searching...";

    const location = weatherForm.querySelector('input').value;

    fetch("http://localhost:3000/weather?address=" + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                //console.log(data.error);
                messageOne.textContent = data.error;
            }
            else {
                // console.log(data.location);
                // console.log(data.forcast);

                messageOne.textContent = data.location;
                messageTwo.textContent = data.forcast;
            }

        })
    });
});