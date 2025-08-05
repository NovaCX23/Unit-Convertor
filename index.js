/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
//CONSTANTS
const convertBtn = document.getElementById("convert-button");
const inputElement = document.getElementById("input-element");

const volumeConversion = document.getElementById("volume-conversion");
const lengthConversion = document.getElementById("length-conversion");
const massConversion = document.getElementById("mass-conversion");


const minWidth = 2.4;
inputElement.style.width = `${minWidth}em`;

//EVENT LISTENERS

convertBtn.addEventListener("click", () => {
    const value = inputElement.value;
    if (value) {
        const feet = (value * 3.281).toFixed(3);
        const meters = (value / 3.281).toFixed(3);
        const gallons = (value * 0.264).toFixed(3);
        const liters = (value / 0.264).toFixed(3);
        const pounds = (value * 2.204).toFixed(3);
        const kilograms = (value / 2.204).toFixed(3);

        lengthConversion.textContent = `${value} meters = ${feet} feet | ${value} feet = ${meters} meters`;
        volumeConversion.textContent = `${value} liters = ${gallons} gallons | ${value} gallons = ${liters} liters`;
        massConversion.textContent = `${value} kilos = ${pounds} pounds | ${value} pounds = ${kilograms} kilos`;
    }
    else{
        lengthConversion.textContent = "Please enter a value to convert.";
        volumeConversion.textContent = "";
        massConversion.textContent = "";
    }

});


inputElement.addEventListener('input', (event) => {
    const valueLength = event.target.value.length;
    
    // Set a minimum width and add a factor for each character
    event.target.style.width = `${Math.max(minWidth, valueLength * 0.7)}em`;
});