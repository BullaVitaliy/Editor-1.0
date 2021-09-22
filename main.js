const display = document.querySelector(".display_text");
const area = document.querySelector(".textarea");
const edit_block = document.querySelector(".edit_block");
const style_block = document.querySelector(".style_block");
const containerBlock = document.querySelector(".container_block");
const addBlock = document.querySelector(".add_block");
const formCreateTable = document.querySelector(".formCreateTable");
const formCreateList = document.querySelector(".formCreateList");

//Функціонал кнопки edit
let edit = document.querySelector(".edit");

edit.addEventListener("click", function () {
  area.value = display.innerHTML;
  edit.style.cssText =
    "border: 1px solid #ff9a03; box-shadow: 0 0 0 3px #ffc46c;";
  edit_block.classList.remove("hidden");
  style_block.classList.add("hidden");
  block_style_one.classList.add("hidden");
  document.querySelector('.block_style_two').classList.add('hidden');
});

// Функціонал кнопки save
let save = document.querySelector(".save");
save.addEventListener("click", function () {
  display.innerHTML = area.value;
  edit_block.classList.add("hidden");
  style_block.classList.add("hidden");
});

//Функціонал кнопки style
const block_style_one = document.querySelector(".block_style_one");

function styleBth() {
  style_block.classList.remove("hidden");
  edit_block.classList.add("hidden");
  block_style_one.classList.remove("hidden");
}

const COLOR_BTN = document.querySelector('#clickColor');
const BG_BTN = document.querySelector('#clickBg');
let bg = false;

COLOR_BTN.addEventListener('click', event => {
    bg = false;
    document.querySelector('.block_style_two').classList[1] == 'hidden' ? document.querySelector('.block_style_two').classList.remove('hidden') : document.querySelector('.block_style_two').classList.add('hidden');
})

BG_BTN.addEventListener('click', event => {
    bg = true;
    document.querySelector('.block_style_two').classList[1] == 'hidden' ? document.querySelector('.block_style_two').classList.remove('hidden') : document.querySelector('.block_style_two').classList.add('hidden');
})

document.querySelector('.block_style_two').addEventListener('click', event => {
    if (bg)
        document.querySelector('.display_top').style.backgroundColor = event.target.classList[1];
    else
        document.querySelector('.display_top').style.color = event.target.classList[1];
})

//Функціонал блоку style
function fontSize() {
  display.style.fontSize = event.target.value;
}

function fontFamily() {
  display.style.fontFamily = event.target.value;
}

function fontWeight() {
  // if(event.target.checked){
  //     display.style.fontWeight = 'bold';
  // } else {
  //     display.style.fontWeight = 'normal';
  // }
  display.style.fontWeight = event.target.checked ? "bold" : "normal";
}

function fontStyle() {
  event.target.checked
    ? display.classList.add("style_checked")
    : display.classList.remove("style_checked");
}

//Блок add
function addBth() {
  addBlock.classList.remove("hidden");
  containerBlock.classList.add("hidden");
}

//function button botton back
function backBtn() {
  addBlock.classList.add("hidden");
  containerBlock.classList.remove("hidden");
}

//function button create list
function createListBtn() {
  let form2 = document.forms["formCreateList"];
  let countLi = form2.countLi.value;

  let select = form2.querySelector("select");

  select.addEventListener("click", function () {});

  area.value += `<ul>`;
  for (let i = 1; i < countLi; i++) {
    area.value += `<li style="list-style-type:${select.value};">item${[
      i,
    ]}</li>`;
  }
  area.value += `</ul>`;

  backBtn();
}

//function button create table
function createTibleBtn() {
  const form = document.forms["formCreateTable"];
  let countTr = form.countTr.value;
  let countTd = form.countTd.value;
  const widthTd = document.querySelector("#widthTd");
  const heightTd = document.querySelector("#heightTd");
  const WeightOfBorder = form.querySelector("#WeightOfBorder");
  const typeBorder = document.querySelector(".type_border");
  const colorBorder = document.querySelector(".color_border");

  typeBorder.addEventListener("click", function () {});
  colorBorder.addEventListener("click", () => {});

  area.value += `<table >`;
  for (let i = 1; i <= countTr; i++) {
    area.value += `<tr>`;
    for (let j = 1; j <= countTd; j++) {
      area.value += `<td style=" text-align: center; border: ${WeightOfBorder.value}px ${typeBorder.value} ${colorBorder.value} ;color:${colorBorder.value};width:${widthTd.value}px;height:${heightTd.value}px;">TD</td>`;
    }
    area.value += `</tr>`;
  }
  area.value += `</table>`;

  form.classList.add("hidden");
  backBtn();
}

//check teble or list
function chooseBtn() {
  console.log(event.target.dataset.create);
  if (event.target.dataset.create === "table") {
    formCreateTable.classList.remove("hidden");
    formCreateList.classList.add("hidden");
    document.querySelector(".add_block").style.height = "475px";
  } else if (event.target.dataset.create === "list") {
    formCreateList.classList.remove("hidden");
    formCreateTable.classList.add("hidden");
    document.querySelector(".add_block").style.height = "300px";
  }
}
