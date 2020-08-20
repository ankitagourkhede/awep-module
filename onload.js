const parent = document.querySelector("#parentBlock");
console.log(parent);

window.addEventListener("load", () => {
  console.log("ON.LOAD");

  

  let xhr = new XMLHttpRequest();


  xhr.open("GET", "https://reqres.in/api/users?page=2");

  // handshake and lisner of response
  xhr.onreadystatechange = () => {
    // on ready state 4 :: when operation comples with server
    if (xhr.readyState === 4) {
      // server response
      console.log(xhr.responseText);

    
      let sjson = JSON.parse(xhr.responseText);
    
      console.log(sjson.data);

      domlogicHere(sjson.data);
    }
  };

  // AJAX call goes here.
  xhr.send();
});

// list from server
let domlogicHere = function (list) {
  const parent = document.querySelector("#parentBlock");
  console.log("INSIDE.LOAD", parent);

  
  for (let i = 0; i < list.length; i++) {
    let item = list[i];

    
    const newElement = parent.children[0].cloneNode(true);
    newElement.style.display = "flex";

    // data wil be placed to first child of new element :: as there is no title in server data
    newElement.children[0].innerHTML =
      item.first_name + " " + item.last_name;

    // append to parent block
    parent.insertBefore(newElement, parent.firstChild);
  }
};