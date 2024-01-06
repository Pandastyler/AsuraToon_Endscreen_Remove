// A large portion of this code is copy pasted straight from ChatGPT (Though slightly modded since GPT isnt amazing)
// So just ignore bad readability and obvious comments

// You can just rip the code from here onto your own repo to mod it if you want
// just remember to change the url in the ScriptAutoRunner code.

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
			foundElement.parentElement.remove();
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
		document.querySelector("#chapter").width = 85;
		document.querySelector("#chapter").height = 17;
	}
}


function TimeoutRemoves() {
	document.querySelector("body > div.code-block.code-block-21").remove();
	document.querySelector("body > div.code-block.code-block-19 > a > img").parentElement.parentElement.remove();

}

setTimeout(function changeWidth_misc3() {
	// Find all elements with the ID "chapter"
	const chapterElements = document.querySelectorAll("#chapter");
	// Check if the second element exists
	if (chapterElements.length >= 2) {
		// Select the second element (index 1, as indexing starts from 0)
		const secondChapterElement = chapterElements[1];

		// Clone the second chapter element
		const clonedChapterElement = secondChapterElement.cloneNode(true);
		// Set the width of the cloned element to 112 pixels
		clonedChapterElement.style.width = "112px";
		// Replace the second chapter element with the modified clone
		secondChapterElement.parentNode.replaceChild(clonedChapterElement, secondChapterElement);
	}
// Use the function for other things


	TimeoutRemoves()

}, 3000); // 1000 milliseconds = 1 second

setTimeout(function misc1() {

	TimeoutRemoves()

}, 1000);

setTimeout(function misc1() {

	TimeoutRemoves()

}, 2000);