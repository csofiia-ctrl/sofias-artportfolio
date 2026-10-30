
/* =====================================================
   MUSIC PLAYER
   Add and edit your songs in the songs array below.
   ===================================================== */

const songs = [
    {
        title: "Morning Mood - Edvard Grieg",
        duration: "04:12",
        date: "06.2022",
        type: "image",
        audio: "assets/music/Morning Mood - Peer Gynt Suite No. 1, Op. 46, No. 1 -Edvard Grieg .mp3",
        video: "assets/video/Morning Mood - Peer Gynt Suite No. 1, Op. 46, No. 1 -Edvard Grieg .mp4"
    },
    {
        title: "J.S.Bach Concerto in the Italian Style",
        duration: "04:12",
        date: "06.2022",
        type: "video",
        audio: "assets/music/J.S.Bach Concerto in the Italian Style .mp3",
        video: "assets/video/J.S.Bach Concerto in the Italian Style .mp4"
    },
    {
        title: "Prelude and Fugue in C minor",
        duration: "00:54",
        date: "2018",
        type: "image",
        audio: "assets/music/Prelude and Fugue in C minor.mp3",
        video: "assets/video/Prelude and Fugue in C minor.mp4"
    },
    {
        title: "jun 2018",
        duration: "02:59",
        date: "06.2018",
        type: "image",
        audio: "assets/music/WhatsApp Video 2026-10-24 at 10.29.30 PM.mp3",
        video: "assets/video/WhatsApp Video 2026-10-24 at 10.29.30 PM.mp4"
    },
    {
        title: "2019",
        duration: "01:13",
        date: "2019",
        type: "image",
        audio: "assets/music/WhatsApp Video 2026-10-24 at 10.41.26 PM.mp3",
        video: "assets/video/WhatsApp Video 2026-10-24 at 10.41.26 PM.mp4"
    },
     {
        title: " piano duet prima vista",
        duration: "01:16",
        date: "4.05.2026",
        type: "image",
        audio: "assets/music/ piano duet prima vista.mp3",
        video: "assets/video/ piano duet prima vista.mp4"
    },
     {
        title: "Nocturne Op. 9, no 1",
        duration: "04:09",
        date: "14.08.2026",
        type: "image",
        audio: "assets/music/nocturne.mp3",
        video: "assets/video/nocturne.mp4"
    }
];


/* =====================================================
   HTML ELEMENTS
   ===================================================== */

const songList = document.getElementById("songList");

const searchButton = document.getElementById("searchButton");
const searchBox = document.getElementById("searchBox");
const musicSearch = document.getElementById("musicSearch");
const searchResults = document.getElementById("searchResults");

const songOverlay = document.getElementById("songOverlay");
const closePlayer = document.getElementById("closePlayer");

const playerTitle = document.getElementById("playerTitle");
const totalTime = document.getElementById("totalTime");
const currentTime = document.getElementById("currentTime");

const timeline = document.getElementById("timeline");
const timelineProgress = document.getElementById("timelineProgress");

const playButton = document.getElementById("playButton");
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");

const audioPlayer = document.getElementById("audioPlayer");
const songVideo = document.getElementById("songVideo");
const toggleVideoButton = document.getElementById("toggleVideoButton");
const mediaMessage = document.getElementById("mediaMessage");
const imagePlaceholder = document.getElementById("imagePlaceholder");

let currentSongIndex = 0;


/* =====================================================
   HELPER FUNCTIONS
   ===================================================== */

function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
        return "00:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return String(minutes).padStart(2, "0") + ":" +
           String(remainingSeconds).padStart(2, "0");
}


function stopMedia() {
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer.removeAttribute("src");
        audioPlayer.load();
    }

    if (songVideo) {
        songVideo.pause();
        songVideo.removeAttribute("src");
        songVideo.load();
        songVideo.hidden = true;
        songVideo.style.display = "none";
    }
}


/* =====================================================
   GENERATE SONG LIST FROM music.js
   ===================================================== */

function renderSongList() {
    if (!songList) {
        console.error('Could not find the element with id="songList".');
        return;
    }

    songList.innerHTML = "";

    songs.forEach((song, index) => {
        const row = document.createElement("button");

        row.type = "button";
        row.className = "song-row song-item";

        row.dataset.title = song.title;
        row.dataset.duration = song.duration;
        row.dataset.date = song.date;
        row.dataset.type = song.type;

        const number = document.createElement("div");
        number.textContent = String(index + 1).padStart(2, "0");

        const title = document.createElement("div");
        title.className = "song-name";
        title.textContent = song.title;

        const duration = document.createElement("div");
        duration.textContent = song.duration;

        const date = document.createElement("div");
        date.textContent = song.date;

        row.append(number, title, duration, date);

        row.addEventListener("click", () => {
            openSong(song, index);
        });

        songList.appendChild(row);
    });
}


/* =====================================================
   OPEN A SONG
   ===================================================== */

function openSong(song, index) {
    if (!song || !songOverlay) return;

    currentSongIndex = index;

    stopMedia();

    playerTitle.textContent = song.title;
    totalTime.textContent = song.duration || "00:00";
    currentTime.textContent = "00:00";
    timelineProgress.style.width = "0%";

    playButton.textContent = "▶";

    songOverlay.classList.add("active");

    if (imagePlaceholder) {
        imagePlaceholder.hidden = false;
        imagePlaceholder.style.display = "";
    }

    toggleVideoButton.hidden = !song.video;
    toggleVideoButton.textContent = "Watch video";

    if (song.audio) {
        audioPlayer.src = song.audio;
        mediaMessage.textContent =
            "Press play to listen. The video is optional.";
    } else {
        audioPlayer.removeAttribute("src");
        mediaMessage.textContent =
            "No audio file configured. Add its path in music.js.";
    }

    if (song.video) {
        songVideo.src = song.video;
    } else {
        songVideo.removeAttribute("src");
    }
}


/* =====================================================
   SEARCH
   ===================================================== */

if (searchButton && searchBox && musicSearch && searchResults) {

    searchButton.addEventListener("click", event => {
        event.stopPropagation();

        searchBox.classList.toggle("active");

        if (searchBox.classList.contains("active")) {
            musicSearch.focus();
        }
    });

    searchBox.addEventListener("click", event => {
        event.stopPropagation();
    });

    musicSearch.addEventListener("input", () => {
        const query = musicSearch.value.toLowerCase().trim();

        searchResults.innerHTML = "";

        if (!query) return;

        const matchingSongs = songs.filter(song =>
            song.title.toLowerCase().includes(query)
        );

        matchingSongs.forEach(song => {
            const result = document.createElement("button");

            result.type = "button";
            result.className = "search-result";
            result.textContent = song.title;

            result.addEventListener("click", () => {
                musicSearch.value = song.title;
                searchResults.innerHTML = "";
                searchBox.classList.remove("active");

                openSong(song, songs.indexOf(song));
            });

            searchResults.appendChild(result);
        });
    });

    document.addEventListener("click", () => {
        searchBox.classList.remove("active");
    });
}


/* =====================================================
   CLOSE PLAYER
   ===================================================== */

if (closePlayer) {
    closePlayer.addEventListener("click", () => {
        songOverlay.classList.remove("active");
        stopMedia();
        playButton.textContent = "▶";
    });
}

if (songOverlay) {
    songOverlay.addEventListener("click", event => {
        if (event.target === songOverlay) {
            songOverlay.classList.remove("active");
            stopMedia();
            playButton.textContent = "▶";
        }
    });
}


/* =====================================================
   AUDIO PLAY / PAUSE
   ===================================================== */

if (playButton) {
    playButton.addEventListener("click", async () => {

        if (!audioPlayer.src) {
            mediaMessage.textContent =
                "No audio file linked to this song. Check the audio path in music.js.";
            return;
        }

        try {
            if (audioPlayer.paused) {
                await audioPlayer.play();
            } else {
                audioPlayer.pause();
            }
        } catch (error) {
            mediaMessage.textContent =
                "Audio could not be played. Check the filename and file path.";
            console.error("Audio playback error:", error);
        }
    });
}


/* =====================================================
   OPTIONAL VIDEO INSIDE THE YELLOW FILM FRAME
   ===================================================== */

if (songVideo) {
    songVideo.style.width = "100%";
    songVideo.style.height = "100%";
    songVideo.style.objectFit = "contain";
    songVideo.style.position = "absolute";
    songVideo.style.inset = "0";
    songVideo.style.background = "#000";
    songVideo.style.zIndex = "2";

    // Audio is played by the separate audio element.
    // Mute the video to prevent two audio tracks playing together.
    songVideo.muted = true;
    songVideo.playsInline = true;
}

if (toggleVideoButton) {
    toggleVideoButton.addEventListener("click", async () => {

        if (songVideo.hidden) {

            songVideo.hidden = false;
            songVideo.style.display = "block";

            if (imagePlaceholder) {
                imagePlaceholder.hidden = true;
                imagePlaceholder.style.display = "none";
            }

            toggleVideoButton.textContent = "Hide video";

            if (songVideo.src) {
                try {
                    await songVideo.play();
                } catch (error) {
                    mediaMessage.textContent =
                        "Video loaded. Press play on the video controls if needed.";
                    console.error("Video playback error:", error);
                }
            }

        } else {

            songVideo.pause();
            songVideo.hidden = true;
            songVideo.style.display = "none";

            if (imagePlaceholder) {
                imagePlaceholder.hidden = false;
                imagePlaceholder.style.display = "";
            }

            toggleVideoButton.textContent = "Watch video";
        }
    });
}


/* =====================================================
   AUDIO TIMELINE AND PLAYBACK EVENTS
   ===================================================== */

if (audioPlayer) {

    audioPlayer.addEventListener("loadedmetadata", () => {
        if (Number.isFinite(audioPlayer.duration)) {
            totalTime.textContent = formatTime(audioPlayer.duration);
        }
    });

    audioPlayer.addEventListener("timeupdate", () => {
        currentTime.textContent = formatTime(audioPlayer.currentTime);

        const duration = audioPlayer.duration || 0;

        timelineProgress.style.width = duration
            ? (audioPlayer.currentTime / duration * 100) + "%"
            : "0%";

        if (duration) {
            totalTime.textContent = formatTime(duration);
        }
    });

    audioPlayer.addEventListener("play", () => {
        playButton.textContent = "Ⅱ";
    });

    audioPlayer.addEventListener("pause", () => {
        playButton.textContent = "▶";
    });

    audioPlayer.addEventListener("ended", () => {
        playButton.textContent = "▶";
    });

    audioPlayer.addEventListener("error", () => {
        if (audioPlayer.src) {
            mediaMessage.textContent =
                "Audio file not found or unsupported. Check the path in music.js.";
        }
    });
}

if (songVideo) {
    songVideo.addEventListener("error", () => {
        mediaMessage.textContent =
            "Video file not found or unsupported. Check the path in music.js.";
    });
}

if (timeline) {
    timeline.addEventListener("click", event => {
        if (!Number.isFinite(audioPlayer.duration) ||
            !audioPlayer.duration) {
            return;
        }

        const rect = timeline.getBoundingClientRect();

        const ratio = Math.max(
            0,
            Math.min(1, (event.clientX - rect.left) / rect.width)
        );

        audioPlayer.currentTime = ratio * audioPlayer.duration;
    });
}


/* =====================================================
   PREVIOUS / NEXT SONG
   ===================================================== */

if (previousButton) {
    previousButton.addEventListener("click", () => {
        const index =
            (currentSongIndex - 1 + songs.length) % songs.length;

        openSong(songs[index], index);
    });
}

if (nextButton) {
    nextButton.addEventListener("click", () => {
        const index = (currentSongIndex + 1) % songs.length;

        openSong(songs[index], index);
    });
}


/* =====================================================
   INITIALIZE
   ===================================================== */

// Run only after songs and the HTML elements have been defined.
renderSongList();
