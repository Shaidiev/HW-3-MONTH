
let block = document.querySelector(".block");

const getData = async () => {
  try {
    const response = await fetch("data.json");
    const objects = await response.json();
    objects.data.forEach((item) => {
      let div = `
        <div class="hotels">
          <div class="container">
            <img class="image" src="${item.image_url}" alt="" />
          </div>
          <div class="descrip">
            <div class="title">${item.title}</div>
            <div class="description">${item.address}</div>
            <div class="price">от ${item.price} 1 ночь/1 персона</div>
          </div>
        </div>
      `;
      block.innerHTML += div;
    });
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
};

getData();


