var mozesGastosu = "Mozes tebra, ti ne zivis u Srbijici majci";
var vpnGastos = "Osim ako koristis VPN, onda nemam pojma gde si.";

var potvrdanOdgovor = "Imaš fore do 6 uveče. Uhvati dan!";
var odricanOdgovor = "Nikako buraz, zakasnio si.";

$(document).ready(function() {

	$.get("https://ipinfo.io", function (response) {
	    // $("#ip").html("IP: " + response.ip);
	    console.log(response.city, response.country);

	    $("#grad").html("Nalaziš se u  " + response.city + ", " + response.region);

	    if (daLiSiUSrbiji(response.country)) {
	    	$("#odgovor").html(mozesGastosu);
	    	$("#odgovor_vpn").html(vpnGastos);
	    } else {
	    	$("#odgovor_vpn").hide();
  			if (daLiJePolicijskiCas) {
    			$("#odgovor").html(potvrdanOdgovor);
  			} else {
  				$("#odgovor").html(odricanOdgovor);
  			}
	    }
	    // $("#details").html(JSON.stringify(response, null, 4));
	}, "jsonp");


});

function daLiSiUSrbiji(zemljinKod) {
	 return zemljinKod !== "RS"
}

function daLiJePolicijskiCas() {
	var d = new Date();
  	var h = d.getHours();
  	return h >= 5 && h < 18;
}