var selectedCategory = "";
var sortBy = "";
var eventList = {};
var eventDisplayInfo = ["TITLE", "DATETIME", "LOCATION", "DESCRIPTION", "AUTHOR"];

$(document).ready(function() {

  getBulletinsNoCategory((a) => {
    eventList = a;
    console.log(a);
    console.log(eventList.data[0].AUTHOR)
    loadTable();
  });
});


  //   [{
  //     Name: "FluxJam",
  //     Date: "01/06/19",
  //     Location: "Flux Federation",
  //     Description: "",
  //     Author: "Ali G",
  //     Category: "Music"
  //   },
  //   {
  //     Name: "gig",
  //     Date: "giggity goo",
  //     Location: "Wellywood",
  //     Description: "We gon' gig",
  //     Author: "Ali G",
  //     Category: "Music"
  //   },
  //   {
  //     Name: "gig",
  //     Date: "giggity goo",
  //     Location: "Wellywood",
  //     Description: "We gon' gig",
  //     Author: "Ali G",
  //     Category: "Music"
  //   },
  //   {
  //     Name: "Party",
  //     Date: "Tonight!",
  //     Location: "At Laura's friend's house",
  //     Description: "We gon' gig it upppp",
  //     Author: "Moi",
  //     Category: "Event"
  //   }
  // ];

const loadTable = () => {

  eventList.data.map((event, index) => {

    console.log(index);
    var tbody = document.getElementById('tableRows');
    var row = document.createElement("tr");

    for (var i=0; i<eventDisplayInfo.length; i++) {
      var attribute = document.createElement("td");
      var textNode = document.createTextNode(event[eventDisplayInfo[i]]);
      attribute.appendChild(textNode);
      row.append(attribute);
      console.log(attribute);
    }

    tbody.appendChild(row);
  });
}


const submitFilters = () => {
  console.log(selectedCategory);
  console.log(sortBy);

}

const submitNewBullet = () => {
  var bullet = {
    Name: document.getElementById("bulletName").value,
    Date: document.getElementById("bulletDate").value,
    Location: document.getElementById("bulletLocation").value,
    Description: document.getElementById("bulletDescription").value,
    Author: "user1",
    Category: document.getElementById("bulletName").value

  }

  const { Name, Date, Location, Description, Author, Category} = bullet;

  newBulletin(Name, Description, Category, Location, Date, (a,b) => {});

  $('#exampleModal').modal(show=false);
}

const updateCategory = (category) => {
  console.log(category);
  selectedCategory = category
  console.log();
}

const updateSort = (type) => {
  console.log(type);
  sortBy = type
}

const submit = () => {

  //hit api
}

const checkIfLoggedIn = () => {
  isLoggedIn()
    ? null
    : window.location.href = "/loginregister.html";
}