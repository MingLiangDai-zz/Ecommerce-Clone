/*const newItemBox = `<div class="itemBox">
<div class="imageBox">
  <a href=""><img src="resources/item.jpg" alt=""/></a>
</div>
<div class="caption">
  <h3><a href="">This is the caption</a></h3>
</div>
<div class="description">
  <p>
    This is the description: Lorem ipsum dolor, sit amet consectetur
    adipisicing elit. Quas dolorum rerum hic fugit? Similique vitae
    labore minus! Officia libero inventore praesentium nulla totam,
    corporis at? Ut deleniti quibusdam iusto modi?
  </p>
</div>
</div>`;
*/

const itemContainer = document.querySelector(".container");

const category = ["Men", "Women", "Sale"];

var itemList = [];
for (var i = 0; i < 20; i++) {
  const rndCat = category[Math.floor(Math.random() * 3)];
  // const newItemBox = document.createElement("div");

  const newItemBox = `
    <div class="itemBox ${rndCat}">
        <div class="imageBox">
        <img src="resources/${Math.floor(Math.random() * 8)}.jpg" alt=""/>
        </div>
        <div class="caption">
        <h3>This is item ${i} (${rndCat})</h3>
        </div>
        <div class="description">
        <p>
            This is the description: Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Quas dolorum rerum hic fugit? Similique vitae
            labore minus! Officia libero inventore praesentium nulla totam,
            corporis at? Ut deleniti quibusdam iusto modi?
        </p>
        </div>
    </div>`;

  itemList[i] = newItemBox;
  //  newItembox.insertAdjacentHTML("afterbegin", newItemContent);
  itemContainer.insertAdjacentHTML("beforeend", newItemBox);
}

const itemBoxes = itemContainer.querySelectorAll(".itemBox");

const buttonList = document.querySelector(".buttonList");
const menuButtons = buttonList.querySelectorAll(".menuButton");

menuButtons.forEach(menuButton => {
  menuButton.addEventListener("click", () => {
    itemContainer.innerHTML = "";
    for (var i = 0; i < itemBoxes.length; i++) {
      if (itemBoxes[i].className === "itemBox " + menuButton.textContent) {
        //itemContainer.insertAdjacentHTML("beforeend", itemList[i]);
        itemContainer.appendChild(itemBoxes[i]);
      }
      if (menuButton.textContent === "Home") {
        //itemContainer.insertAdjacentHTML("beforeend", itemList[i]);
        itemContainer.appendChild(itemBoxes[i]);
      }
    }
  });
});

const cover = document.querySelector(".cover");
const popUp = document.querySelector(".popUp");

itemBoxes.forEach(itemBox => {
  itemBox.addEventListener("click", () => {
    popUp.classList.add("active");
    cover.classList.add("active");

    const popUpImg = document.createElement("div");
    const popUpCaption = document.createElement("div");
    const popUpDescription = document.createElement("div");
    const imgContent = document.createElement("img");
    const captionText = document.createElement("h3");
    const descriptionText = document.createElement("p");
    const popUpButtons = document.createElement("div");
    const buy = document.createElement("button");
    const cancel = document.createElement("button");

    popUp.appendChild(popUpImg);
    popUp.appendChild(popUpCaption);
    popUp.appendChild(popUpDescription);
    popUp.appendChild(popUpButtons);

    popUpImg.classList.add("popUpImg");
    popUpCaption.classList.add("popUpCaption");
    popUpDescription.classList.add("popUpDescription");
    popUpButtons.classList.add("popUpButtons");

    popUpImg.appendChild(imgContent);
    popUpCaption.appendChild(captionText);
    popUpDescription.appendChild(descriptionText);
    popUpButtons.appendChild(buy);
    popUpButtons.appendChild(cancel);

    const getImg = itemBox.querySelector("img");
    const getCaption = itemBox.querySelector("h3");
    const getDescription = itemBox.querySelector("p");
    buy.classList.add("buy");
    cancel.classList.add("cancel");

    imgContent.src = getImg.src;
    captionText.textContent = getCaption.textContent;
    descriptionText.textContent = getDescription.textContent;
    buy.textContent = "Buy";
    cancel.textContent = "Cancel";

    cancel.addEventListener("click", function() {
      cover.classList.remove("active");
      popUp.classList.remove("active");
      popUp.innerHTML = "";
    });
  });
});

cover.addEventListener("click", function() {
  cover.classList.remove("active");
  popUp.classList.remove("active");
  popUp.innerHTML = "";
});
