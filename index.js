var selectedCategory = "";
var sortBy = "";
var eventList = {};
var eventDisplayInfo = ["TITLE", "DATETIME", "LOCATION", "DESCRIPTION", "AUTHOR"];

$(document).ready(function() {

  getBulletinsNoCategory();

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
  getBulletins(selectedCategory, (events)=>{
    eventList = events;
    loadTable();
  });

}

getBulletinsNoCategory((a) => {
  eventList = a;
  loadTable();
});

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
  selectedCategory = category
}

const updateSort = (type) => {
  sortBy = type
}


const checkIfLoggedIn = () => {
  isLoggedIn()
    ? null
    : window.location.href = "/loginregister.html";
}
