function describeCity(city, country = "Pakistan") {
    var message = city.toUpperCase() + " is in " + country.toUpperCase() + ".";
    console.log(message);
  }
  
  describeCity("Karachi");
  describeCity("Lahore");
  describeCity("Istumbul" , "Turkiye");