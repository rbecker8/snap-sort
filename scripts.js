// var sortAlphabets = function(text) {
// // // 		return text.split('').sort().join('');
// // // };
// // //
// // // console.log(sortAlphabets("It indicates a synchronic distortion in the areas emanating triolic waves. The cerebellum, the cerebral cortex, the brain stem,  the entire nervous system has been depleted of electrochemical energy. Any device like that would produce high levels of triolic waves. These walls have undergone some kind of selective molecular polarization. I haven't determined if our phaser energy can generate a stable field. We could alter the photons with phase discriminators. Sensors indicate human life forms 30 meters below the planet's surface. Stellar flares are increasing in magnitude and frequency. Set course for Rhomboid Dronegar 006, warp seven. There's no evidence of an advanced communication network. Total guidance system failure, with less than 24 hours' reserve power. Shield effectiveness has been reduced 12 percent. We have covered the area in a spherical pattern which a ship without warp drive could cross in the given time. Resistance is futile."));
// // //
// // // var words = function(text) {
// // // 			return words.filter('sensor');
// // // };
// // //
// // // console.log(words("It indicates a synchronic distortion in the areas emanating triolic waves. The cerebellum, the cerebral cortex, the brain stem,  the entire nervous system has been depleted of electrochemical energy. Any device like that would produce high levels of triolic waves. These walls have undergone some kind of selective molecular polarization. I haven't determined if our phaser energy can generate a stable field. We could alter the photons with phase discriminators. Sensors indicate human life forms 30 meters below the planet's surface. Stellar flares are increasing in magnitude and frequency. Set course for Rhomboid Dronegar 006, warp seven. There's no evidence of an advanced communication network. Total guidance system failure, with less than 24 hours' reserve power. Shield effectiveness has been reduced 12 percent. We have covered the area in a spherical pattern which a ship without warp drive could cross in the given time. Resistance is futile."));

function alphabetize() {
	let text = document.getElementById("star-par").textContent;

	//make an array of words based on empty spaces change all words to lowercase
	let words = text.split(" ");

	//alphabetize
	words.sort(function (a, b) {
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});

	//remove the sensors
	let newWords= words.filter(a => a.toLowerCase() !=="sensors");


	//join the randomized words and insert new paragraph
	document.getElementById("star-par").textContent = newWords.join(" ");
}