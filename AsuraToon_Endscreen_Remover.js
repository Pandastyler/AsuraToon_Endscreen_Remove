const currentPost = document.querySelector("#content > div > div > div").firstElementChild;
for (let i = 0; i < 51; i++) {
	// Main loop
	const selector = `#readerarea > p:nth-child(${i}) > img`;
	const foundElement = document.querySelector(selector);
	const other = document.querySelector(`#readerarea > p:nth-child(${i}) > a`);
	if (other) {
		other.parentElement.remove();
	}
    if (foundElement) {
		if (foundElement.outerHTML.includes("EndDesignPSD02")) {
			foundElement.parentElement.remove()
		}
		
	}
}
for (let i = 0; i < 51; i++) {
	// Additional loop for extras
	if (document.querySelector("#readerarea > a")) {
		document.querySelector("#readerarea > a").remove();
	}
	const PatreonAd = currentPost.querySelector(
		"div.entry-content.entry-content-single.maincontent > a"
	);
	if (PatreonAd) {
		PatreonAd.remove();
		// Clean up additional redirects/garbage related to "PatreonAd" below
		currentPost
			.querySelector("div.entry-content.entry-content-single.maincontent > div.chnav.cbot > a")
			.removeAttribute("href");
		currentPost
			.querySelector(
				"div.entry-content.entry-content-single.maincontent > div.chnav.cbot > div > a:nth-child(1)"
			)
			.remove();
	}
	if (document.querySelector("#chapter")) {
		document.querySelector("#chapter").width = 85
		document.querySelector("#chapter").height = 17
	}
}
function changeWidth() {
   	// Sets the size of the chapter navigator at the bottom of the page to be a set length because it sometimes gets really long with named chapters
	var xpath = "/html/body/div[4]/div/div/div/article/div[4]/div[6]/span[1]/div/select";  
    var element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

    if (element) {
        element.style.width = '112px';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    
    setTimeout(changeWidth, 1);
});
