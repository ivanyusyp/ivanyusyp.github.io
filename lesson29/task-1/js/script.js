const playList = [
	{
		author: "LED ZEPPELIN",
		song: "STAIRWAY TO HEAVEN"
	},
	{
		author: "QUEEN",
		song: "BOHEMIAN RHAPSODY"
	},
	{
		author: "LYNYRD SKYNYRD",
		song: "FREE BIRD"
	},
	{
		author: "DEEP PURPLE",
		song: "SMOKE ON THE WATER"
	},
	{
		author: "JIMI HENDRIX",
		song: "ALL ALONG THE WATCHTOWER"
	},
	{
		author: "AC/DC",
		song: "BACK IN BLACK"
	},
	{
		author: "QUEEN",
		song: "WE WILL ROCK YOU"
	},
	{
		author: "METALLICA",
		song: "ENTER SANDMAN"
	}
];
const ol = document.createElement('ol');
ol.setAttribute('id', 'songlist');
document.body.appendChild(ol);
playList.forEach(element => {
	const li = document.createElement("li");
	li.innerHTML = `${element.author}<br>${element.song}`;
	document.getElementById("songlist").appendChild(li);
});

