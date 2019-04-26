window.onload = () => {
    const preLoader = document.querySelector(".preLoader");
    preLoader.classList.add("hidden");

    const input = document.getElementById("mat-input-0");
    const itemNames = document.querySelectorAll(".itemName");
    
    input.addEventListener("keyup", () => {
        const inputUppCase = input.value.toUpperCase();
        itemNames.forEach( itemName => {
            if (itemName.textContent.toUpperCase().indexOf(inputUppCase) < 0) {
                itemName.parentElement.style.display = "none";
            } else {
                itemName.parentElement.style.display = "flex";
            }
        })
    })
}

