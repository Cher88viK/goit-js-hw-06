let counterValue = 0;
const counter = document.getElementById("value");
const dBtn = document.querySelector('button[data-action ="decrement"]');
const iBtn = document.querySelector('button[data-action ="increment"]');

iBtn.addEventListener("click", () => {
    counterValue++;
    counter.innerHTML=counterValue;
});

dBtn.addEventListener("click", () => {
    counterValue--;
    counter.innerHTML=counterValue;
});

