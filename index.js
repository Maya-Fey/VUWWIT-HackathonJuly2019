var selectedCategory = "";
var sortBy = "";
var eventList = {};
var eventDisplayInfo = ["TITLE", "DATETIME", "LOCATION", "DESCRIPTION", "AUTHOR"];

$(document).ready(function() {

  loadAllBulletins();

});


const loadTable = () => {
  // Reset table
  var tbody = document.getElementById("tableRows");
  tbody.innerHTML = '';

  eventList.data.map((event, index) => {
    var tbody = document.getElementById('tableRows');
    var row = document.createElement("tr");

    for (var i=0; i<eventDisplayInfo.length; i++) {
      var attribute = document.createElement("td");
      var textNode = document.createTextNode(event[eventDisplayInfo[i]]);
      attribute.appendChild(textNode);
      row.append(attribute);
    }

    tbody.appendChild(row);
  });
}


const submitFilters = () => {
  selectedCategory === "all"
   ? loadAllBulletins()
   : getBulletins(selectedCategory, (events)=>{
      eventList = events;
      loadTable();
  });

}

const loadAllBulletins = () => {
  getBulletinsNoCategory((a) => {
    eventList = a;
    loadTable();
  });
}

const submitNewBullet = () => {
  var category = "";
  var radios = document.getElementsByName('Category');

  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      category = radios[i].value;
      break;
    }
  }

  var bullet = {
    Name: document.getElementById("bulletName").value,
    Date: document.getElementById("bulletDate").value,
    Location: document.getElementById("bulletLocation").value,
    Description: document.getElementById("bulletDescription").value,
    Author: "user1",
    Category: category
  }

  const { Name, Date, Location, Description, Author, Category} = bullet;
  newBulletin(Name, Description, Category, Location, Date, (a,b) => {});
  $('#exampleModal').modal(show=false);

}

const updateCategory = (category) => {
  selectedCategory = category;
  categoryReadableText = "";
  if (selectedCategory === 'Event') {
    categoryReadableText = "Events";
  }
  else if (selectedCategory === 'RestaurantBar') {
    categoryReadableText = "Restaurants/Bars";
  }
  else if (selectedCategory === 'BuySell') {
    categoryReadableText = "Buy/Sell";
  }
  else {
    categoryReadableText = "All Categories";
  }
  document.getElementById('categoryDropDown').innerHTML = categoryReadableText;


}

const updateSort = (type) => {
  sortBy = type
}


const checkIfLoggedIn = () => {
  isLoggedIn()
    ? null
    : window.location.href = "/loginregister.html";
}
