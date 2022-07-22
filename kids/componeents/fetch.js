const options1 = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "07d8be2f0amshfe7275d34ba65d5p17af07jsn876783647380",
      "X-RapidAPI-Host": "asos2.p.rapidapi.com",
    },
  };

  fetch(
    "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
    options1
  )
    .then((response) => response.json())
    .then((response) => {
      append(response.products);
      filt(response.products);
    })
    .catch((err) => console.error(err));

  let append = (data) => {
    var dd = data;
    let main = document.getElementById("product");
    main.innerHTML = null;
    data.forEach((el) => {
      let img = document.createElement("img");
      img.src = "https://" + el.imageUrl;

      let view = document.createElement("span");
      let viewimg = document.createElement("img");
      viewimg.src =
        "data:image/png;base64,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";
      view.append(viewimg);
      viewimg.id = "randomImg";
      viewimg.addEventListener("click", () => {
        viewdata(el);
      });

      let fev = document.createElement("span");
      let fevimg = document.createElement("img");
      fevimg.src =
        "data:image/png;base64,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";
      fev.append(fevimg);
      fevimg.id = "randomImg";
     

      let hr = document.createElement("hr");
      hr.id = "nor";

      let price = document.createElement("p");
      price.innerText = el.price.current.text;

      let name = document.createElement("h6");
      name.innerText = el.brandName;
      name.style.margin = "4px";

      let title = document.createElement("h4");
      title.innerText = el.name;

      let color = document.createElement("p");
      color.innerText = el.colour;
      color.style.fontSize = "15px";

      let div = document.createElement("div");
      div.append(img, view, fev, hr, title, name, price, color);
      div.id='mainDiv'

      main.append(div);
    });
  };

  let viewdata = (el) => {
    localStorage.setItem("view", JSON.stringify(el));
    window.location.href = "view.html";
  };

//   let price = document.getElementById("price");
//   price.addEventListener("click", () => {
//     const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '07d8be2f0amshfe7275d34ba65d5p17af07jsn876783647380',
// 		'X-RapidAPI-Host': 'asos2.p.rapidapi.com'
// 	}
// };

// fetch('https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US', options)
//       .then((response) => response.json())
//       .then((response) => {
//         filt(response.products);
//       })
//       .catch((err) => console.error(err));
//   });
  let filt = (data) => {
    data=data.filter((el) => {
        let price = document.getElementById("price").value;
      return el.price.current.text <= price;
    });
    append(data);
    console.log(data);
  };
