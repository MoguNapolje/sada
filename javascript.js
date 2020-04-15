$(document).ready(function() {

	$.get("https://ipinfo.io", function (response) {
	    // $("#ip").html("IP: " + response.ip);
	    console.log(response.city, response.country);

		// todo pokazi lepo srpsku neosisanu latinicu
	    $("#grad").html("Nalazis se u  " + response.city + ", " + response.region);

	    if (response.country !== "RS") {
	    	$("#odgovor").html("Mozes tebra, ti ne zivis u Srbijici majci!");
	    } else {
	    	$("#odgovor_vpn").hide();
	    	var d = new Date();
  			var h = d.getHours();
  			if (h >= 5 && h < 17) {
    			$("#odgovor").html("Imaš fore do 5 popodne. Uhvati dan!");
  			} else {
  				$("#odgovor").html("Nikako buraz, zakasnio si.");
  			}
	    }
	    // $("#zemlja").html("Kod zemlje: " + response.country);
	    // $("#details").html(JSON.stringify(response, null, 4));
	}, "jsonp");


});