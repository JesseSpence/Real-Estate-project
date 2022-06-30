let houses = JSON.parse(localStorage.getItem("houses"))
? JSON.parse(localStorage.getItem("houses")):[
    {id:1,
        image: 'https://picsum.photos/200/300/?blur',
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
    },

    {id:2,
        image:'https://picsum.photos/200/300/?blur',
    title:'Cute Apartment',
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
   },
   {id:3,
    image: 'https://picsum.photos/200/300/?blur',
   title:'Cozy Apartment',
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
  },
  {id:4,
    image: 'https://picsum.photos/200/300/?blur',
  title:'Newly Built Apartment',
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
 },
 {id:5,
    image: 'https://picsum.photos/200/300/?blur',
 title:'Fully Furnished Apartment',
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
},
{id:6,
    image: 'https://picsum.photos/200/300/?blur',
     title:'North Facing House',
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
    },
    {id:7,
        image: 'https://picsum.photos/200/300/?blur',
    title:'Newly Built House',
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
   },
   {id:8,
    image: 'https://picsum.photos/200/300/?blur',
   title:'Grand Mansion',
   price: '$4500/mo',
   address:'2436 SW 8th St, Miami, FL 33135, USA',
   bedrooms:'4',
   bathrooms:'2',
   garage:'1',
   size:'1200',
   type:'House',
   user:' Samuel Palmer',
   datePosted:'04/04/2020',
   yearBuilt:'2016',
  },
  {id:9,
    image: 'https://picsum.photos/200/300/?blur',
  title:'Bachelor Pad',
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
 },
 {id:10,
    image: 'https://picsum.photos/200/300/?blur',
 title:'Penthouse Open Floor',
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
},];

   const propertiesContainer = document.querySelector("#properties");

// add array to local storage   
//    localStorage.setItem("houses", JSON.stringify(houses));
   
// display local storage    
// document.getElementById("properties").innerHTML = JSON.parse( localStorage.getItem("houses"));
function showHouses (houses) {
    propertiesContainer.innerHTML = "";
    houses.forEach(house => {
        propertiesContainer.innerHTML += `
            <div id='housecards'>
            <span id="heart" class="heart"><i onclick="wishList()" class="fas fa-heart"></i></span>
                <img src=${ house.image } />
                 <h3>${house.title}</h3>
                 <p>${house.address}</p>
                 <ul id=house-values>
        
                 <li><i class="fa-solid fa-bed"></i>${house.bedrooms}</li>
                 <li><i class="fa-solid fa-shower"></i>${house.bathrooms}</li>
                <li><i class="fa-solid fa-car"></i>${house.garage}</li>
                <li><i class="fa-solid fa-ruler"></i>${house.size}</li>
                


            </div>
        `
    })
};

showHouses(houses);

// console.log( document.getElementById("comboA").ariaValueMax);

//  function handleChange(houses){
//     let value = document.getElementById("comboA").ariaValueMax;
//     houses = houses.filter(function(house) { 
//         let filteredHouses = houses.filter(function(house) {
//             return house.type === value;
//           });
//       });}
function typeHouse() {
    let value = document.getElementById("comboA").value;
    let filteredHouses = houses.filter((house) => {
      return house.type === value     //loop through houses and return houses which id noes not match
    });   
    showHouses(filteredHouses);
  }

  function addressHouse() {
    let value = document.getElementById("comboB").value;
    let filteredHouses = houses.filter((house) => {
      return house.address == (text.includes(value));      //loop through houses and return houses which id noes not match
    });   
    showHouses(filteredHouses);
  }

//     document.getElementById("comboA").onchange = function(){
//     let value = document.getElementById("comboA").value;  
//     houses = houses.filter(function(house) {
//     return house.type === value;

    
//   });}
  
  
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


// function sortListings(){
//     let price = listings.sort((a, b) => {
//       return a.price - b.price;
//     });
//     let retrievedList = price;
//     document.querySelector("#properties").innerHTML = "";
//     retrievedList.forEach((propperty) => {
//     showlistings(retrievedList)
//   })
// }