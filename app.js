// get items from HTML

const btnSubmit = document.querySelector(".btnSubmit");
const section2 = document.querySelector(".section2");

// functions

//create Elements
const createItems = () => {
  const valueTextArea = document.getElementById("textarea").value;

  // create items
  const div = document.createElement("div");
  const ul = document.createElement("ul");
  const li = document.createElement("li");
  const a = document.createElement("a");
  // apend child tags
  section2.appendChild(div);
  div.appendChild(ul);
  ul.appendChild(li);
  ul.appendChild(a);

  a.textContent = "x";
  li.textContent = valueTextArea;

  // add classList to the tags
  a.classList.add("span");
  ul.classList.add("ul");
  li.classList.add("li");

  a.addEventListener("click", () => {
    section2.removeChild(div);
    delelteFromLocalStorage(valueTextArea);
  });
  addToLocalStorage(valueTextArea);

  document.getElementById("textarea").value = "";
  alert("یادداشت با موفقیت ذخیره شد");
};
//get From Local Strorage

let getFromLocalStorage = () => {
  let notes;
  let getFromLS = localStorage.getItem("notes");

  if (getFromLS === null) {
    // if local storage empty
    notes = [];
  } else {
    notes = JSON.parse(getFromLS);
  }
  return notes;
};
//add values to local storage

const addToLocalStorage = (valueTextArea) => {
  const notes = getFromLocalStorage();

  notes.push(valueTextArea);
  localStorage.setItem("notes", JSON.stringify(notes));
};

// delete items from local storage

const delelteFromLocalStorage = (valueTextArea) => {
  const validNotes = getFromLocalStorage();
  validNotes.forEach((element, index) => {
    if (element === valueTextArea) {
      // Delete First item[index] From Array
      validNotes.splice(index, 1);
    }
  });
  // Set LocalStorage With New Array
  localStorage.setItem("notes", JSON.stringify(validNotes));
};
// DOM Loaded show Items In Screen

const domLoaded = () => {
  const notes = getFromLocalStorage();

  notes.forEach((element) => {
    // create items
    const div = document.createElement("div");
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    const a = document.createElement("a");
    // apend child tags
    section2.appendChild(div);
    div.appendChild(ul);
    ul.appendChild(li);
    ul.appendChild(a);

    a.textContent = "x";
    li.textContent = element;

    // add classList to the tags
    a.classList.add("span");
    ul.classList.add("ul");
    li.classList.add("li");

    a.addEventListener("click", () => {
      section2.removeChild(div);
      delelteFromLocalStorage(element);
    });
    console.log(element);
  });
};

// eventListeners

btnSubmit.addEventListener("click", createItems);

document.addEventListener("DOMContentLoaded", domLoaded);
