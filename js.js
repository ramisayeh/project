function makeFlights16(city, flightdate1,  flightdate2, price, fds, bgimgurl ) {
   
    return   flight = {
          "city" : city ,
          "flightdate1": flightdate1,
          "flightdate2": flightdate2,
          "fds" : fds,
           "price": price,
          bgimgurl : bgimgurl
      } 
      
                 
  
  
  }    

    makeFlights16("paris", "23/10/2020", "24/10/2020", "$3400", "first class", "paris");
    x.push(flight);
    makeFlights16("paris", "23/10/2020", "24/10/2020", "$2100", "business class", "paris");
    x.push(flight);
    makeFlights16("paris", "23/10/2020", "24/10/2020", "$900", "economy class", "paris");
    x.push(flight);
    makeFlights16("venice", "23/10/2020", "24/10/2020", "$4100", "first  class", "venice");
    x.push(flight);
    makeFlights16("venice", "23/10/2020", "24/10/2020", "$3000", "business  class", "venice");
    x.push(flight);
    makeFlights16("venice", "23/10/2020", "24/10/2020", "$1100", "economy  class", "venice");
    x.push(flight);
    makeFlights16("tokyo", "23/10/2020", "24/10/2020", "$3100", "first  class", "tokyo");
    x.push(flight);
    makeFlights16("tokyo", "23/10/2020", "24/10/2020", "$2000", "business  class", "tokyo");
    x.push(flight);
    makeFlights16("tokyo", "23/10/2020", "24/10/2020", "$1100", "economy  class", "tokyo");
    x.push(flight);
    makeFlights16("madrid", "23/10/2020", "24/10/2020", "$5100", "first  class", "madrid");
    x.push(flight);
    makeFlights16("madrid", "23/10/2020", "24/10/2020", "#1900", "business  class", "madrid");
    x.push(flight);
    makeFlights16("madrid", "23/10/2020", "24/10/2020", "$1100", "ecocnomy  class", "madrid");
    x.push(flight);
    makeFlights16("Séoul", "23/10/2020", "24/10/2020", "$3100", "first  class", "Séoul");
    x.push(flight);
    makeFlights16("Séoul", "23/10/2020", "24/10/2020", "$2100", "business  class", "Séoul");
    x.push(flight);
    makeFlights16("Séoul", "23/10/2020", "24/10/2020", "$850", "economy  class", "Séoul");
    x.push(flight);
    makeFlights16("new york", "23/10/2020", "24/10/2020", "$4100", "first  class", "new york");
    x.push(flight);
    makeFlights16("new york", "23/10/2020", "24/10/2020", "$3600", "business  class", "new york");
    x.push(flight);
    makeFlights16("new york", "23/10/2020", "24/10/2020", "$900", "first  class", "new york");
    x.push(flight);

    var flight = [ { "city": "berlin", "flightdate1": "23/10/2020", "flightdate2": "24/10/2020", "fds": "first class", "price": "$3500", "bgimgurl": "berlin"},
     {"city": "berlin", "flightdate1": "23/10/2020","flightdate2": "24/10/2020","fds": "Business class", "price": "$2400", "bgimgurl": "berlin"} ,
     {"city": "berlin", "flightdate1": "23/10/2020", "flightdate2": "24/10/2020", "fds": "economy class", "price": "$950","bgimgurl": "berlin"},
     {"city": "paris", "flightdate1": "23/10/2020","flightdate2": "24/10/2020", "fds": "first class", "price": "$3400","bgimgurl": "paris"},
     {"city": "paris", "flightdate1": "23/10/2020", "flightdate2": "24/10/2020", "fds": "business class", "price": "$2100","bgimgurl":  "paris"},
     {"city": "paris","flightdate1": "23/10/2020", "flightdate2": "24/10/2020", "fds": "economy class", "price": "$900","bgimgurl": "paris"},
     {"city": "venice", "flightdate1": "23/10/2020", "flightdate2": "24/10/2020", "fds": "first  class", "price": "$4100","bgimgurl": "venice"},
     {"city": "venice", "flightdate1": "23/10/2020", "flightdate2": "24/10/2020", "fds": "business  class", "price": "$3000","bgimgurl": "venice"},
     {"city": "venice",  "flightdate1": "23/10/2020", "flightdate2": "24/10/2020", "fds": "economy  class","price": "$1100","bgimgurl": "venice"},
     {"city": "tokyo",  "flightdate1": "23/10/2020", "flightdate2": "24/10/2020", "fds": "first  class", "price": "$3100","bgimgurl": "tokyo"},
    {"city": "tokyo",  "flightdate1": "23/10/2020", "flightdate2": "24/10/2020","fds": "business  class", "price": "$2000","bgimgurl": "tokyo"},
     {"city": "tokyo",  "flightdate1": "23/10/2020", "flightdate2": "24/10/2020", "fds": "economy  class", "price": "$1100","bgimgurl": "tokyo"},
     {"city": "madrid",  "flightdate1": "23/10/2020", "flightdate2": "24/10/2020", "fds": "first  class","price": "$5100","bgimgurl": "madrid"},
     {"city": "madrid",  "flightdate1": "23/10/2020","flightdate2": "24/10/2020", "fds": "business  class", "price": "#1900","bgimgurl": "madrid"},
     {"city": "madrid",  "flightdate1": "23/10/2020","flightdate2": "24/10/2020", "fds": "ecocnomy  class", "price": "$1100","bgimgurl": "madrid"},
     {"city": "Séoul",  "flightdate1": "23/10/2020", "flightdate2": "24/10/2020", "fds": "first  class", "price": "$3100","bgimgurl": "Séoul"},
    {"city": "Séoul",  "flightdate1": "23/10/2020","flightdate2": "24/10/2020", "fds": "business  class","price": "$2100","bgimgurl": "Séoul"},
    {"city": "Séoul",  "flightdate1": "23/10/2020", "flightdate2": "24/10/2020", "fds": "economy  class", "price": "$850","bgimgurl": "Séoul"},
     {"city": "new york",  "flightdate1": "23/10/2020", "flightdate2": "24/10/2020", "fds": "first  class", "price": "$4100","bgimgurl": "new york"},
    {"city": "new york",  "flightdate1": "23/10/2020", "flightdate2": "24/10/2020", "fds": "business  class", "price": "$3600","bgimgurl": "new york"},
    {"city": "new york",  "flightdate1": "23/10/2020", "flightdate2": "24/10/2020", "fds": "first  class", "price": "$900","bgimgurl": "new york"} ]


    
    
    
