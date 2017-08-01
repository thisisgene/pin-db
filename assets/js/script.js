function getCity(url) {
  $.get( url, function(data) {
    $('main').html(data);
  });
}

function loadCity() {
  var city = $( ".select-city" ).val();

  if (city !== "") {
    var url = "./_includes/city-" + city + ".html";
    getCity(url);
  }

}