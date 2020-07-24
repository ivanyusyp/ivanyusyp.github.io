// function Media(title, duration) {
// 	this.title = title;
// 	this.duration = duration;
// 	this.isPlaying = false;
// }
class Media {
	constructor(title, duration) {
		this.title = title;
		this.duration = duration;
		this.isPlaying = false;
	}
}

// Media.prototype.play = function () {
// 	this.isPlaying = true;
// }
class Play extends Media {
	constructor() {
		super();
		this.isPlaying = true;
	}
}


// Media.prototype.stop = function () {
// 	this.isPlaying = false;
// }
class Stop extends Media {
	constructor() {
		super();
		this.isPlaying = false;
	}
}

export default Media;