import  navbar  from "../../components.sachin/navbar.js";
document.getElementById("nav").innerHTML=navbar()
let view = document.getElementById("view_list")

let poduct = JSON.parse(localStorage.getItem("cartproduct")) || [];

let append = () => {
    view.innerHTML = null;
    poduct.forEach((el) => {
        let img_div = document.createElement("div");
        img_div.setAttribute("id", "img");
        let img = document.createElement("img");
        img.src = el.image;
        img.style.width='200px'
        img.style.height='250px'
        img_div.append(img);

        let content = document.createElement("div");
        content.setAttribute("id", "content")
        let title = document.createElement("h4")
        title.innerText = el.title;
        let price = document.createElement("p")
        price.innerText = el.price;
        content.append(title, price);

        let size = document.createElement("div");
        size.setAttribute("id", "size");
        let span1 = document.createElement("span");
        span1.innerText = "XS"
        let span2 = document.createElement("span");
        span2.innerText = "S"
        let span3 = document.createElement("span");
        span3.innerText = "M"
        let span4 = document.createElement("span");
        span4.innerText = "L"
        let span5 = document.createElement("span");
        span5.innerText = "XL"

        size.append(span1, span2, span3, span4, span5);

        let shopping_bag = document.createElement("div");
        shopping_bag.setAttribute("id", "shopping_bag");
        shopping_bag.innerText = "ADD TO SHOPPING BAG";
        shopping_bag.addEventListener("click", () => {
            poduct.push(el);
            localStorage.setItem("cart", JSON.stringify(poduct));
        })
        let dream = document.createElement("div")
        dream.setAttribute("id", "dream_box");
        dream.innerText = "ADD TO DREAM BOX";

        let exter = document.createElement("div");
        exter.setAttribute("id", "exter");
        exter.innerText = "This item is excluded from all promotional offers."

        view.append(img_div, content, size, shopping_bag, dream, exter)

    });
}
let recent = document.getElementById("recenty_view");
append()
let most = () => {
    data.forEach((el) => {
        let img = document.createElement("img");
        img.src = el.image||"https://" + el.imageUrl


        let title = document.createElement("h3");
        title.innerText = el.title;

        let price = document.createElement("p")
        price.innerText = el.price;

        let div = document.createElement("div");
        div.setAttribute("class", "most")
        div.append(img, title, price)
    });
}
import  footer  from "../../components.sachin/footer.js";
document.getElementById("foot").innerHTML=footer()