var mozesGastosu = "Mozes tebra, ti ne zivis u Srbijici majci";
var vpnGastos = "Osim ako koristis VPN, onda nemam pojma gde si.";

var odgovorZaSloboduKretanja = "Imaš fore do 6 uveče. Uhvati dan!";
var odgovorZaZabranuKretanja = "Nikako buraz, zakasnio si.";
var odgovorZaZabranuKretanjaVikendom = "Nikako buraz, ovaj vikend sediš kod kuće.";

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
	    	console.log(" policijski cas aktivan - " + daLiJePolicijskiCas());
	    	console.log(" daLiJeVikend - " + daLiJeVikend());

  			if (imaLiVikendZabrane() && daLiJeVikend()) {
    			$("#odgovor").html(odgovorZaZabranuKretanjaVikendom);
  			} else {
	  			if (daLiJePolicijskiCas()) {
    				$("#odgovor").html(odgovorZaZabranuKretanja);
  				} else {
  					$("#odgovor").html(odgovorZaSloboduKretanja);
  				}
  			}
	    }
	    // $("#details").html(JSON.stringify(response, null, 4));
	}, "jsonp");


	!function(d,s,id) {
		var js,fjs=d.getElementsByTagName(s)[0];
		if (!d.getElementById(id)) {
			js = d.createElement(s);
			js.id = id;
			js.src = 'https://weatherwidget.io/js/widget.min.js';
			fjs.parentNode.insertBefore(js,fjs);

			console.log(" weather - yes");
		} else {
			console.log(" weather - not");
		}
	}
	(document, 'script', 'weatherwidget-io-js');


});

function daLiSiUSrbiji(zemljinKod) {
	 return zemljinKod !== "RS"
}

function daLiJePolicijskiCas() {
	var d = new Date();
  	var h = d.getHours();
  	return ((h < 5) || (h >= 18));
}

function daLiJeVikend() {
	var vreme = new Date();
  	var dan = vreme.getDay();
  	// 0 je nedelja, 6 je subota
  	return (dan === 0 || dan === 6); 
}

function imaLiVikendZabrane() {
	// pogledati na Tv-u 
  	return false;
}