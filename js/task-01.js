const list = document.querySelectorAll('.item');
console.log("Number of categories:", list.length);

list.forEach((el)=>{
    console.log("Category:", el.firstElementChild.outerText);
    let elements = el.querySelector("ul");
    console.log("Elements:", elements.children.length);
    console.log("");
});






