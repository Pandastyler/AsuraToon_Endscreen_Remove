# AsuraToon_Endscreen_Remover

NO LONGER MAINTAINED / PROBABLY NOT WORKING


Designed to work with [ScriptAutoRunner](https://chrome.google.com/webstore/detail/scriptautorunner/gpgjofmpmjjopcogjgdldidobhmjmdbm)

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

I also recommend running uBlock Origin alongside this (though if youre here you probably already use it)

I use the following rules which are very minimalistic, some of them were set before i made this script so it may have some useless rules.
You should probably also copy any rules you have for the site if these dont work for you

! Asuratoon
asuratoon.com##p:nth-of-type(1)
asuratoon.com##.comments-area.bixbox
asuratoon.com###footer
asuratoon.com##.scrollToTop
asuratoon.com##.socialts
asuratoon.com##[href="https://story.alandal.com/asuranecrocampaign"]
asuratoon.com##p:nth-of-type(13)
asuratoon.com##p:nth-of-type(15)
asuratoon.com##header
asuratoon.com##.bound > span
asuratoon.com##.headpost
asuratoon.com##div.kln:nth-of-type(5)
asuratoon.com##.ai-sticky-widget.section

