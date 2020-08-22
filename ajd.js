
let ajaxcall = function () {

    var xhr = new XMLHttpRequest();

xhr.onload = () => {
    const refjson = JSON.parse(xhr.responseText);
    domlogic(refjson);
};

xhr.open("GET","https://reqres.in/api/users?page=2");
xhr.send();

};

let domlogic = function(refjson){
    console.log(refjson);

    let parent = document.querySelector("#parent");

    for(i=0; i<refjson.data.length;i++){
         const item = refjson.data[i];

    let newElement = parent.children[0].cloneNode(true);
    newElement.innerHTML = item.first_name +" " + item.last_name + " " + item.id;
    parent.insertBefore(newElement, parent.firstChild);
    }
};
