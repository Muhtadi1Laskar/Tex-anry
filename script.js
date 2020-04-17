const text = document.getElementById("text-area");
const place = document.getElementById("area");
const button = document.getElementById("btn");

const convert = () => {
    const value = text.value;
    const res = value
                  .split("")
                  .map(b => b.charCodeAt(0).toString(2))
                  .join(" ")
                  
    place.innerText = res;
}


// Event Listeners
button.addEventListener('click', convert);