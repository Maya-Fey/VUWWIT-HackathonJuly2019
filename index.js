$(document).ready(function() {

  var eventList = [
    {
      Name: "gig",
      Description: "giggity goo"
    },
    {
      Name: "Elk",
      Description: "Valhalla"
    }
  ];



    $(eventList).each(function( index ) {

      var elm = document.getElementById('divTarget');
      var node = document.createElement("div");


      var textnode = document.createTextNode(eventList[index].Name + eventList[index].Description);
      node.appendChild(textnode);
      elm.append(node);
      console.log(elm);


      //
      // $("#divTarget").append(node);
      // console.log(index);
  });
});
