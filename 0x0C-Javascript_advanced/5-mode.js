function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
};

function main() {
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");

    let spooky_button = document.createElement("button");
    let darkMode_button = document.createElement("button");
    let screamMode_button = document.createElement("button");

    let paragraph = document.createElement("p");
    paragraph.textContent = "Welcome Holberton!";
    document.body.appendChild(paragraph);
    
    spooky_button.onclick = spooky;
    spooky_button.textContent = "Spooky";


    darkMode_button.onclick = darkMode;
    darkMode_button.textContent = "Dark mode";

    screamMode_button.onclick = screamMode;
    screamMode_button.textContent = "Scream mode";

    document.body.appendChild(spooky_button);
    document.body.appendChild(darkMode_button);
    document.body.appendChild(screamMode_button);
}

main()
