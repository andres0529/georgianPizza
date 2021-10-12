var size = document.querySelectorAll('#ulSize li input');
var pizzaIcon = document.querySelector("#sizeRight img");
var pizzaFlavour = document.querySelectorAll("#flavour ul li input")

// ----------------driver for size-----------
const changeSize = (data) => {
    switch (data.target.id) {
        case 'small':
            pizzaIcon.style.width = "10%"
            break;
        case 'medium':
            pizzaIcon.style.width = "12%"
            break;
        case 'large':
            pizzaIcon.style.width = "15%"
            break;
        default:
            break;
    }
}
size.forEach((element, i) => {
    size[i].addEventListener('click', changeSize)
});

// ------------------driver for flavour-------------
let pizzaFlavours = [
    { id: "pepperoniPizza", urlImg: "./img/pepperoni.png" },
    { id: "cheessePizza", urlImg: "./img/cheesse.png" },
    { id: "garlicPizza", urlImg: "./img/garlic.png" },
    { id: "greekPizza", urlImg: "./img/greek.png" },
    { id: "europeanPizza", urlImg: "./img/european.png" },
    { id: "canadaPizza", urlImg: "./img/canada.png" },
    { id: "beefPizza", urlImg: "./img/beef.png" },
    { id: "metLoversPizza", urlImg: "./img/meatLovers.png" }
]

const changePizza = (data) => {

    let flavour = pizzaFlavours.find((element) => {
        return element.id === data.target.id
    })
    pizzaIcon.setAttribute('src', flavour.urlImg);
}

pizzaFlavour.forEach((element, i) => {
    pizzaFlavour[i].addEventListener('click', changePizza)
});
