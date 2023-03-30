
let block = document.querySelector(".block");
const request = new XMLHttpRequest();
request.open("GET", "data.json");
request.setRequestHeader("Content-Type", "application/json");
request.send(); 

request.addEventListener("load", () => {
  const objects = JSON.parse(request.response);
  objects.data.map((item) => {
    console.log(item);

    let div = `
    <div class="hotels">
        <div class="container">
            <img class="image" src="${item.image_url}" alt="" />
        </div>
        <div class="descrip">
            <div class="title">${item.title}</div>
            <div class="description">${item.address}</div>
            <div class="price"> от ${item.price} 1 ночь/1 персона</div>
        </div>
    </div>
           `;
    block.innerHTML += div;
  });
});