$(document).ready(function() {

  var eventDisplayInfo = ["Name", "Date", "Location", "Description", "Author"];

  var eventList = [
    {
      Name: "FluxJam",
      Date: "01/06/19",
      Location: "Flux Federation",
      Description: "",
      Author: "Ali G",
      Category: "Music",
      TimeStamp: "Fri Jul 17 1998 00:00:00 GMT+1200 (New Zealand Standard Time)"
    },
    {
      Name: "gig",
      Date: "giggity goo",
      Location: "Wellywood",
      Description: "We gon' gig",
      Author: "Ali G",
      Category: "Music",
      TimeStamp: "Fri Jul 17 1998 00:00:00 GMT+1200 (New Zealand Standard Time)"
    },
    {
      Name: "gig",
      Date: "giggity goo",
      Location: "Wellywood",
      Description: "We gon' gig",
      Author: "Ali G",
      Category: "Music",
      TimeStamp: "Fri Jul 17 1998 00:00:00 GMT+1200 (New Zealand Standard Time)"
    },
    {
      Name: "Party",
      Date: "Tonight!",
      Location: "At Laura's friend's house",
      Description: "We gon' gig it upppp",
      Author: "Moi",
      Category: "Music",
      TimeStamp: "Fri Jul 17 1998 00:00:00 GMT+1200 (New Zealand Standard Time)"
    }
  ];


    $(eventList).each(function( index ) {
      var tbody = document.getElementById('tableRows');
      var row = document.createElement("tr");

      for (var i=0; i<eventDisplayInfo.length; i++) {
        var attribute = document.createElement("td");
        var textNode = document.createTextNode(eventList[index][eventDisplayInfo[i]]);
        attribute.appendChild(textNode);
        row.append(attribute);
      }

      tbody.appendChild(row);


      //
      // $("#divTarget").append(node);
      // console.log(index);
  });
});
