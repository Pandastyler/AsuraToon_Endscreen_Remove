# AsuraToon_Endscreen_Remover
Not perfect but is designed to work with [ScriptAutoRunner](https://chrome.google.com/webstore/detail/scriptautorunner/gpgjofmpmjjopcogjgdldidobhmjmdbm)

Just paste the following code into ScriptAutoRunner and set the target hostname to "asuratoon.com"

const Http = new XMLHttpRequest();
const url = "https://raw.githubusercontent.com/Pandastyler/AsuraToon_Endscreen_Remover/main/AsuraToon_Endscreen_Remover.js";
Http.open("GET", url);
Http.send();

Http.onreadystatechange = e => {
	eval(Http.responseText);
};

Code ends here.

It might not be amazing code but it mostly works.

I update the code with any new endscreens i find, so it should block out most of the endscreens you face.

Code can be viewed [here](https://github.com/Pandastyler/AsuraToon_Endscreen_Remover/blob/main/AsuraToon_Endscreen_Remover.js)

This doesn't remove the "we caught up to raws" as some may want to keep it.

Also has additional stuff that it does but i wont note it here, [read the code yourself](https://github.com/Pandastyler/AsuraToon_Endscreen_Remover/blob/main/AsuraToon_Endscreen_Remover.js) if you want to find it.
