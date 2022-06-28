let houses = JSON.parse(localStorage.getItem("houses"))
? JSON.parse(localStorage.getItem("houses")):[
    {image: 'https://picsum.photos/200/300/?blur',
     title:'Light and Modern Apartment',
     price: '$4500/mo',
     address:'2436 SW 8th St, Miami, FL 33135, USA',
     bedrooms:'4',
     bathrooms:'2',
     Garage:'1',
     size:'1200',
     type:'Apartment',
     user:' Samuel Palmer',
     datePosted:'04/04/2020',
     yearBuilt:'2016',
    },

    {image:'https://picsum.photos/200/300/?blur',
    title:'Light and Modern Apartment',
    price: '$4500/mo',
    address:'2436 SW 8th St, Miami, FL 33135, USA',
    bedrooms:'4',
    bathrooms:'2',
    garage:'1',
    size:'1200',
    type:'Apartment',
    user:' Samuel Palmer',
    datePosted:'04/04/2020',
    yearBuilt:'2016',
   },]

   const propertiesContainer = document.querySelector("#properties")

// add array to local storage   
//    localStorage.setItem("houses", JSON.stringify(houses));
   
// display local storage    
// document.getElementById("properties").innerHTML = JSON.parse( localStorage.getItem("houses"));
function showHouses (houses) {
    propertiesContainer.innerHTML = "";
    houses.forEach(house => {
        propertiesContainer.innerHTML += `
            <div id='housecards'>
                <img src=${ house.image } />
                 <h3>${house.title}</h3>
                 <ul id=house.values>
                 <li>${house.address}</li>
                 <li><i class="fa-solid fa-bed"></i>${house.bedrooms}</li>
                 <li><i class="fa-solid fa-shower"></i>${house.bathrooms}</li>
                 
                 <li><i class="fa-solid fa-car"></i>${house.garage}</li>


            </div>
        `
    })
}

showHouses(houses);



// houses.forEach((house) => {
    
//     li.innerHTML = `<input type="checkbox" onc"div");
//     const li = document.createElement("li");lick="taskComplete(this)" class="check" ${
//         task.completed ? "checked" : ""
//     }>
//       <input type="text" value="${task.task}" class="task ${
//         task.completed ? "completed" : ""
//     }" onfocus="getCurrentTask(this)" onblur="editTask(this)">
//       <i class="fa fa-trash" onclick="removeTask(this)"></i>`;
//     list.insertBefore(li, list.children[0]);
// });
// place= JSON.stringify(houses, null, 2);

// function createProperties (){
// for (let i = 0; houses[i]; i++);
// document.getElementById("properties").innerHTML = houses;}

// createProperties();       

