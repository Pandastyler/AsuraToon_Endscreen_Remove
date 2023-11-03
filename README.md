# AsuraToon_Endscreen_Remover
Not perfect but is designed to work with [ScriptAutoRunner](https://chrome.google.com/webstore/detail/scriptautorunner/gpgjofmpmjjopcogjgdldidobhmjmdbm)

Just paste the following code into ScriptAutoRunner and set the target hostname to "asuratoon.com"

const Http = new XMLHttpRequest();
const url = "https://raw.githubusercontent.com/Pandastyler/AsuraToon_Endscreen_Remover/master/AsuraToon_Endscreen_Remover.js";
Http.open("GET", url);
Http.send();

Http.onreadystatechange = e => {
	eval(Http.responseText);
};

Code ends here.

It might not be amazing code but it mostly works.

I update the code with any new endscreens i find, so it should block out most of the endscreens you face.

It also has a couple addtional QOL tweaks.
