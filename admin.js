let houses = JSON.parse(localStorage.getItem("houses"))
? JSON.parse(localStorage.getItem("houses")):[
    {id:1,
        image:'https://picsum.photos/200/300/?blur',
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
   type:'Apartment',
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
},]

localStorage.setItem("houses", JSON.stringify(houses));

    const propertiesTable = document.querySelector("#propertylist");

function ShowHouseListings (houses) {
    document.querySelector("#propertylist").innerHTML = "";
  
    houses.forEach(house => {
      propertiesTable.innerHTML += `
        <tr>
        <td>${house.id}</td>
          <td><img src=${house.image}</td>
          <td>${house.title}</td>
          <td>${house.address}</td>
          <td>${house.type}</td>
          <td>${house.bedrooms}</td>
          <td>${house.bathrooms}</td>
          <td>${house.garage}</td>
          <td>${house.size}sq ft</td>
          <td>${house.price}</td>
          <td><button onclick="editHouse(${house.id})">✎</button> </td><td><button onclick="deleteHouse(${house.id})">✂</button></td>
        <tr>
      `;
    })
  };
  
ShowHouseListings(houses);

// delete function
function deleteHouse(id) {
  houses = houses.filter((house) => {
    return house.id !== id;     //loop through houses and return houses which id noes not match
  });   
  localStorage.setItem("houses", JSON.stringify(houses));
  ShowHouseListings(houses);
}


// edit house listing 
function editHouse(id) {
  let house = houses.find((house) => house.id === id); //Finds the id of button that was clicked
  let input = prompt("Input Changes"); //Allows the user to input their own changes
  house.title = input; //Changes the content to what the user's input
  // addToStorage(objectives); //Adds to local storage
  ShowHouseListings(houses);
}

function addListing() {
  let listing = {
    id: houses.length + 1,
    title: document.querySelector("#Title").value,
    area: document.querySelector("#Location").value,
    image: document.querySelector("#Image").value,
    type: document.querySelector("#Type").value,
    bedrooms: document.querySelector("#Bedrooms").value,
    baths: document.querySelector("#Bathrooms").value,
    garage: document.querySelector("#Garage").value,
    size: document.querySelector("#Size").value,
    price: document.querySelector("#Price").value,
    status: document.querySelector("#Status").value,
  };
  houses.push(listing);
  localStorage.setItem("properties", JSON.stringify(houses));
  
  ShowHouseListings(houses);
  console.log(houses);
}





// let index = houses.indexOf(house => {houses.id ===id})
// houses= houses.slice(index,1);