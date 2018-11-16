(() => {
	// get a ref to the lottie container
	const preloader = document.querySelector('.preloader');

	let preloadAnim = bodymovin.loadAnimation({
		wrapper : preloader,
		animType : 'svg',
		loop : false,
		autoplay : false,
		path : 'data/search.json'
	});

	function playAnimation() {
		preloadAnim.play();
	}

	preloader.addEventListener("mouseover", playAnimation);
})();