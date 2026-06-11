function createSlider(id, images, speed) {

    let current = 0;

    setInterval(function() {

        current++;

        if(current >= images.length) {
            current = 0;
        }

        document.getElementById(id).src = images[current];

    }, speed);

}

createSlider("najSlider", [
    "Images/naj1.jpg",
    "Images/naj2.jpg"
], 3000);

createSlider("husnaSlider", [
    "Images/husna1.jpg",
    "Images/husna2.jpg"
], 3000);

createSlider("assyaSlider", [
    "Images/assya1.jpg",
    "Images/assya3.jpeg"
], 3000);

createSlider("nadiaSlider", [
    "Images/nadia1.jpeg",
    "Images/nadia2.jpeg"
], 3000);

createSlider("izzatiSlider", [
    "Images/izzati1.jpg",
    "Images/izzati2.jpg"
], 3000);

createSlider("nanaSlider", [
    "Images/nana1.jpg",
    "Images/nana2.jpg"
], 3000);

createSlider("qieSlider", [
    "Images/qie2.jpg",
    "Images/chibiqie.jpeg"
], 3000);

createSlider("miraSlider", [
    "Images/mira2.jpg",
    "Images/chibimirs.jpeg"
], 3000);

createSlider("nimanSlider", [
    "Images/niman1.jpg",
    "Images/chibinir.jpeg"
], 3000);

createSlider("liaSlider", [
    "Images/alia2.jpg",
    "Images/chibilia.jpeg"
], 3000);


let songs = [

{
    image: "Images/kidult.jpg",
    title: "Kidult",
    artist: "SEVENTEEN",
    audio: "AudioMusic/kidult.mp3"
},

{
    image: "Images/ja.jpg",
    title: "Car's Outside",
    artist: "James Arthur",
    audio: "AudioMusic/cars.mp3"
},

{
    image: "Images/cs.jpg",
    title: "Crystal Snow",
    artist: "BTS (방탄소년단)",
    audio: "AudioMusic/crystalsnow.mp3"
}

];

let currentSong = 0;

function updateSong() {

    let audio =
    document.getElementById("songAudio");

    audio.pause();

    document.getElementById("songImage").src =
    songs[currentSong].image;

    document.getElementById("songTitle").innerHTML =
    songs[currentSong].title;

    document.getElementById("songArtist").innerHTML =
    songs[currentSong].artist;

    audio.src =
    songs[currentSong].audio;

    audio.load();
}

function nextSong() {

    currentSong++;

    if(currentSong >= songs.length) {

        currentSong = 0;
    }

    updateSong();
}

function previousSong() {

    currentSong--;

    if(currentSong < 0) {

        currentSong = songs.length - 1;
    }

    updateSong();
}

document.getElementById("songAudio")
.addEventListener("ended", function() {

    nextSong();

});