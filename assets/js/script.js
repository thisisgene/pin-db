function getCity(url) {
  $.get( url, function(data) {
    $('main').html(data);
  });
}

function loadCity() {
  var city = $( ".select-city" ).val();

  if (city !== "") {
    var url = "./assets/cities/city-" + city + ".html";
    getCity(url);
  }

}

function filterDb(col) {
  // Declare variables
  var id, input, filter, table, tr, td, i;
  id = "input-" + col;
  id = id.toString();
  console.log(id);
  input = document.getElementById(id);
  filter = input.value.toUpperCase();
  table = document.getElementById("data-table");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[col];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        console.log('here');
      } else {
        tr[i].style.display = "none";
        console.log('not here');
      }
    }
  }
}