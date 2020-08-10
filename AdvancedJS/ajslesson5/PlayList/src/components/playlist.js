class PlayList {
	constructor() {
		this.songs = [];
		this.currentIndex = 0;
	}
	add(song) {
		this.songs.push(song)
		console.log(this.songs)
	}
	play() {
		let song = this.song[this.currentIndex];
		song.play();
	}
	stop() {
		let song = this.song[this.currentIndex];
		song.stop();
	}
	next() {
		this.stop();
		this.currentIndex++;
		if (this.currentIndex === this.songs.length) {
			this.currentIndex = 0;
		}
		let song = this.songs[this.currentIndex];
		song.play();
	}
	render(list) {
		list.innerHTML = '';
		return this.songs.forEach(song => {
			list.innerHTML += song.toHtml()
		})
	}
}
// function PlayList() {
// 	this.songs = []
// 	this.currentIndex = 0;
// }
// PlayList.prototype.add = function (song) {
// 	this.songs.push(song);
// }
// PlayList.prototype.play = function () {
// 	let song = this.songs[this.currentIndex];
// 	song.play();
// }
// PlayList.prototype.stop = function () {
// 	let song = this.songs[this.currentIndex];
// 	song.stop();
// }
// PlayList.prototype.next = function () {
// 	this.stop();
// 	this.currentIndex++;
// if (this.currentIndex === this.songs.length) {
// 	this.currentIndex = 0;
// }
// let song = this.songs[this.currentIndex];
// song.play();
// }

// PlayList.prototype.render = function (list) {
// 	list.innerHTML = '';
// 	return this.songs.forEach(song => {
// 		list.innerHTML += song.toHtml()
// 	})
// }

export default PlayList;