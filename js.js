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
  
 var x = [];
    makeFlights16("paris", "23/10/2020", "24/10/2020", "$3400", "first class", "paris");
    x.push(flight);
const dateInput = document.getElementById('dat');
const searchInput = document.getElementById('search-in');
searchInput.addEventListener("input", (event) => {
    event.preventDefault();
    if( $("#search-in").val()==='paris' ){
        $("#btn").click(function(){
            window.location.href = 'index1.html' }); 

        }
        else if ($("#search-in").val()==='tokyo'  ){
            $("#btn").click(function(){
                window.location.href = 'index2.html' });
        }
        
         
     });

    
    

    
    
    
    
