for (let i = 0; i < 51; i++) {
	// Main loop
	const selector = `#readerarea > p:nth-child(${i}) > img`;
	const foundElement = document.querySelector(selector);
	const other = document.querySelector(`#readerarea > p:nth-child(${i}) > a`);
	if (other) {
		other.parentElement.remove();
	}
}
for (let i = 0; i < 51; i++) {
	// Additional loop for extras
	if (document.querySelector("#readerarea > a")) {
		document.querySelector("#readerarea > a").remove();
	}
	const currentPost = document.querySelector("#content > div > div > div").firstElementChild;
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
}
