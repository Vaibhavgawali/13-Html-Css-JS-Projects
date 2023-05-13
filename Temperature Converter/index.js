const celEl = document.getElementById("cel");
const fahEl = document.getElementById("fah");
const kelEl = document.getElementById("kel");

function computeTemp(event) {
    
    // console.log(event.target.value)
    const currentVal =+ event.target.value;

    switch (event.target.name) {
        case "Celsius":
            kelEl.value=(currentVal+273.32).toFixed(2);
            fahEl.value=(currentVal*1.8+32).toFixed(2);
            break;

        case "Fahrenheit":
            celEl.value=((currentVal-32)/1.8).toFixed(2);
            kelEl.value=((currentVal-32)/1.8+273.32).toFixed(2);
            break;

        case "Kelvin":
            celEl.value=(currentVal-273.32).toFixed(2);
            fahEl.value=((currentVal-273.32)*1.8+32).toFixed(2);
            break;

        default:
            break;
    }
}