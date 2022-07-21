// var users = {
//     "Akmal": {
//         name: "Akmal",
//         surname: "O'ktamov",
//         age: 27,
//         salary: 800
//     },

//     "Oybek": {
//         name: "Oybek",
//         surname: "sattorov",
//         age: 36,
//         salary: 1500
//     },

//     "Umid": {
//         name: "Umid",
//         surname: "Abdushukurov",
//         age: 21,
//         salary: 400
//     },

//     "Umi": {
//         name: "Umid",
//         surname: "Abdushukurov",
//         age: 40,
//         salary: 400
//     }
// }


// var colors = ["red", "yellow", "green"];

// function sumSalary(object) {
//     var result = 0;

//     for (var key in object) {
//         var item = object[key].salary;
//         result += item * 1;

//     }

//     return result;
// }

// console.log(sumSalary(users));




// function ortachaAga(object) {
//     var summaYosh = 0;

//     for (var key in object) {

//         summaYosh += object[key].age
//     }

//     var ortYosh = (summaYosh) / Object.keys(object).length


//     return ortYosh;
// }

// console.log(ortachaAga(users));





// var sampleTExt = "JavaScript is a must-know programming language for a modern developer"

// function modifyText(text) {

//     var splitedTex1 = text.split(" ").reverse().join(" ");
//     var splitedTex2 = text.split("").reverse().join("");

//     return {
//         result1: splitedTex1,
//         result2: splitedTex2
//     }

// }

// console.log(modifyText(sampleTExt));




var arrayPokemon = pokemons;

var elBody = document.querySelector("#mainBody");


function renderArray(array, wrapper) {

    var divContainer = document.createElement("div");
    divContainer.classList = "container";

    var divRow = document.createElement("div");
    divRow.classList = "row  g-4";

    for (var item of array) {


        var divCol = document.createElement("div");
        divCol.classList = "col-3";

        var divCard = document.createElement("div");
        divCard.classList = "card h-100  hovercha";
        divCard.style = "border-radius:15px; border: 1px solid black; ";

        var newImg = document.createElement("img");
        newImg.src = item.img;
        newImg.classList = "card-img-top m-0 mt-2 m-auto";
        newImg.style = "width: 170px; "

        var divCardbody = document.createElement("div");
        divCardbody.classList = "card-body d-flex flex-column align-items-center";

        var elH5 = document.createElement("h5");
        elH5.classList = "card-title mb-3 fw-bold";
        elH5.innerHTML = item.name

        var elText1 = document.createElement("p");
        elText1.classList = "card-text mb-1 fw-bold";
        elText1.innerHTML = item.height;

        var elText2 = document.createElement("p");
        elText2.classList = "card-text  fw-bold";
        elText2.innerHTML = item.weight;




        divRow.appendChild(divCol);
        divCol.appendChild(divCard);
        divCard.appendChild(newImg);
        divCard.appendChild(divCardbody);
        divCardbody.appendChild(elH5);
        divCardbody.appendChild(elText1);
        divCardbody.appendChild(elText2);

    }

    wrapper.appendChild(divContainer);
    divContainer.appendChild(divRow);

    console.log(wrapper);

}

renderArray(arrayPokemon, elBody);