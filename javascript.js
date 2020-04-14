$.get("http://ipinfo.io", function (response) {
    // $("#ip").html("IP: " + response.ip);
    console.log(response.city, response.country);

// todo pokazi lepo srpsku neosisanu latinicu
    $("#grad").html("Nalazis se u  " + response.city + ", " + response.region);
    // $("#zemlja").html("Kod zemlje: " + response.country);
    // $("#details").html(JSON.stringify(response, null, 4));
}, "jsonp");
