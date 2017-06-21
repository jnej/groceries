$(document).ready(function() {
  $("#shoppingItems").submit(function(event) {
//build an array of the inputted items.//

    var items = [$("#item1").val(), $("#item2").val(), $("#item3").val(), $("#item4").val()];
//
    //Sort the array in alphabetical order//
    items.sort();

    //Make a new array with each entry uppercased //
    var lists = items.map(function(item) {
      return item.toUpperCase();
    });

    //Display the sorted list of things as list items inside a <ul>//
    $("#shoppingItems").hide();
    $("#shoppingList ul").append("<li>" + lists[0] + "</li>");
    $("#shoppingList ul").append("<li>" + lists[1] + "</li>");
    $("#shoppingList ul").append("<li>" + lists[2] + "</li>");
    $("#shoppingList ul").append("<li>" + lists[3] + "</li>");


        event.preventDefault();
  })
})
