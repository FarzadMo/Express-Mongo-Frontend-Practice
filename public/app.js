console.log("Hello!");

function displayResults(animals) {
  $("tbody").empty();

  animals.forEach(function(animal) {
    var tr = $("<tr>").append(
      $("<td>").text(animal.name),
      $("<td>").text(animal.numLegs),
      $("<td>").text(animal.class),
      $("<td>").text(animal.weight),
      $("<td>").text(animal.whatIWouldReallyCallIt)
    );
  });

  $("tbody").append(tr);
}

function setActive(selector) {
  $("th").removeClass("active");
  $(selector).addClass("active");
}

$.getJSON("/all", function(data) {
  displayResults(data);
});

$("#name-sort").on("click", function() {
  $.getJSON("/name", function(data) {
    displayResults(data);
  });
});

$("#weight-sort").on("click", function() {
  $.getJSON("/weight", function(data) {
    displayResults(data);
  });
});
