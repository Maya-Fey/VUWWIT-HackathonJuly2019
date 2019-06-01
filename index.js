$(document).ready(function() {

  var eventList = [
    {
      Name: "gig",
      Date: "giggity goo",
      Location: "Wellywood",
      Description: "We gon' gig",
      Author: "Ali G"
    },
    {
      Name: "Party",
      Date: "Tonight!",
      Location: "At Laura's friend's house",
      Description: "We gon' gig it upppp",
      Author: "Moi"
    }
  ];



    $(eventList).each(function( index ) {
      var elm = document.getElementById('tableRows');
      var row = document.createElement("tr");
      for (var i=0; i<eventList[0].length; i++) {
        var attribute = createElement("td");
        var textnode = document.createTextNode(eventList[index].Name);
        attribute.appendChild(textNode);
      }
      elm.appendChild(row);
      console.log(elm);


      //
      // $("#divTarget").append(node);
      // console.log(index);
  });
});
