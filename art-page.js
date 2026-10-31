
/* ==================================================
   STUDIES POSTS
================================================== */

const studiesPosts = [

    // POST 1
    {
        number: 1,
        image: "assets/image/studies/p1.jpeg",
        title: "STUDY 1",
        description: "08.2026 \nPencil",
        search: "guitar"
    },

    // POST 2
    {
        number: 2,
        image: "assets/image/studies/p2.jpeg",
        title: "STUDY 2",
        description: "06.2026 \nWoman on the beach \nPencil",
        search: "girl"
    },

    // POST 3
    {
        number: 3,
        image: "assets/image/studies/p3.jpeg",
        title: "STUDY 3",
        description: "04.2026 \nJazz musicians \nPencil",
        search: "music"
    },

    // POST 4
    {
        number: 4,
        image: "assets/image/studies/p4.jpeg",
        title: "STUDY 4",
        description: "02.2026 \nOut for air \nPencil",
        search: "girl"
    },

    // POST 5
    {
        number: 5,
        image: "assets/image/studies/p5.jpeg",
        title: "STUDY 5",
        description: "09.2026 \nPencil",
        search: "couple"
    },

    // POST 6
    {
        number: 6,
        image: "assets/image/studies/p6.jpeg",
        title: "STUDY 6",
        description: "11.2025 \nChristmas Ballroom - Abstract \nAcrylics",
        search: "paint"
    }

];
/*==========================================
 PROJECTS POSTS
==========================================*/

const projectsPosts = [
    // POST 1
    { number: 1, image: "assets/image/projects/poza1.jpeg", title: "Betrayal", description: "17.06.2026 \nCharcoals \nArtemis embodying the pain of betrayal and the fierce desire for justice after being hurt by someone close", search: "Artemis" },

    // POST 2
    { number: 2, image: "assets/image/projects/poza2.jpeg", title: "Mamaia", description: "05.2025 \nAcrylics \nRomanian sea view at night", search: "sea" },

    // POST 3
    { number: 3, image: "assets/image/projects/poza3.jpeg", title: "PROJECT", description: "03.2026 \nAlcohol Markers", search: "smoket" },

    // POST 4
    { number: 4, image: "assets/image/projects/poza4.jpeg", title: "Clara", description: "12.2025 \nAcrylics \nAbstract visualization of Clara dancing near the Christmas tree alongside the Nutcracker", search: "ballet" },

    // POST 5
    { number: 5, image: "assets/image/projects/poza5.jpeg", title: "Formula 1", description: "08.2025\nColored Pencils", search: "car" },

    // POST 6
    { number: 6, image: "assets/image/projects/poza6.jpeg", title: "2021", description: "05.2024 \nAcrylics \n2021 art trend", search: "flower" },

    // POST 7
    { number: 7, image: "assets/image/projects/poza7.jpeg", title: "City", description: "07.2025 \nPastels", search: "city" },

    // POST 8
    { number: 8, image: "assets/image/projects/poza8.jpeg", title: "Meduze", description: "04.2025 \nAcrylics \nJellyfish under the light blue sea", search: "jellyfish" },

    // POST 9
    { number: 9, image: "assets/image/projects/poza9.jpeg", title: "70s", description: "03.2026 \nPastels \n Woman inspired by the original Scooby-Doo show ", search: "color" },

    // POST 10
    { number: 10, image: "assets/image/projects/poza10.jpeg", title: "Tara", description: "08.2024 \nAcrylics and Penci \nYoung 1700s Aristocrat Reading-moment in time \nDouble-sided canvas", search: "library" },

    // POST 11
    { number: 11, image: "assets/image/projects/poza11.jpeg", title: "Gardens", description: "03.2025 \nAcrylics \nGarden of Tara-moment in time \nDouble-sided canvas", search: "project 11 personal art" },

    // POST 12
    { number: 12, image: "assets/image/projects/poza12.jpeg", title: "Movie Scene", description: "09.2026 \nPenicil and Charcoals \nYoung love", search: "couple" },

    // POST 13
    { number: 13, image: "assets/image/projects/poza13.jpeg", title: "Vision", description: "04.2026 \nPastels", search: "color" },

    // POST 14
    { number: 14, image: "assets/image/projects/poza14.jpeg", title: "Tutto Passa", description: "0.4.2026 \n Acrylics and Graffiti Markers \nPoster", search: "italian" },

    // POST 15
    { number: 15, image: "assets/image/projects/poza15.jpeg", title: "PROJECT", description: "10.2025\nPencils \nCollage", search: "music" },

    // POST 16
    { number: 16, image: "assets/image/projects/poza16.jpeg", title: "PROJECT", description: "11.2025 \nPencils \n'Colage'", search: "swan" },

    // POST 17
    { number: 17, image: "assets/image/projects/poza17.jpeg", title: "PROJECT", description: "A06.2026 \nPencil \nWoman at the beach", search: "girl" },

    // POST 18
    { number: 18, image: "assets/image/projects/poza18.jpeg", title: "Guitarist", description: "08.2026 \nPencil", search: "guitar music" },

    // POST 19
    { number: 19, image: "assets/image/projects/poza19.jpeg", title: "FirsT", description: "05.2026 \nPastels", search: "man" },

    // POST 20
    { number: 20, image: "assets/image/projects/poza20.jpeg", title: "LovE", description: "02.2025 \nAcrylics \nDecor", search: "pink love poster" },

    // POST 21
    { number: 21, image: "assets/image/projects/poza21.jpeg", title: "View", description: "06.2026 \nAcrylics and Pencils\nAbstract sea view ", search: "abstract sea view" }
];

/* ==================================================
   GENERATE POSTS
================================================== */

const isProjectsPage = document.body.classList.contains("projects-page");

const activePosts = isProjectsPage ? projectsPosts : studiesPosts;

const postsContainer = document.getElementById("artPosts");

if (postsContainer) {

    activePosts.forEach(function(post) {

        const article = document.createElement("article");

        article.className = "art-post";

        article.id = "post-" + post.number;

        article.dataset.search = post.search;

        article.innerHTML = `

            <!-- POST ${post.number} -->

            <h2 class="art-post-name">
                ${post.title}
            </h2>

            <div class="art-image-frame">

                <img
                    src="${post.image}"
                    alt="${post.title}"
                    class="art-post-image"
                    loading="lazy"
                >

            </div>

            <div class="art-post-actions">

                <button
                    class="post-heart"
                    aria-label="Like post ${post.number}"
                >

                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>

                </button>

                <button
                    class="post-question"
                    aria-label="Show description"
                >
                    ?
                </button>

            </div>

           <div class="art-description">
    ${post.description.replace(/\n/g, "<br>")}
</div>

        `;

        postsContainer.appendChild(article);

    });

}

/* ==================================================
   MAIN MENU
================================================== */

const menuBtn =
    document.getElementById("menuBtn");

const dropdownMenu =
    document.getElementById("dropdownMenu");


const artButton =
    document.getElementById("artButton");

const thinkingBubbles =
    document.getElementById("thinkingBubbles");



if (menuBtn && dropdownMenu) {

    menuBtn.addEventListener("click", function(event) {

        event.stopPropagation();

        dropdownMenu.classList.toggle("active");


        if (!dropdownMenu.classList.contains("active")) {

            if (thinkingBubbles) {

                thinkingBubbles.classList.remove("active");

            }

        }

    });

}



/* ==================================================
   ART
================================================== */

if (artButton && thinkingBubbles) {

    artButton.addEventListener("click", function(event) {

        event.stopPropagation();

        thinkingBubbles.classList.toggle("active");

    });

}


if (thinkingBubbles) {

    thinkingBubbles.addEventListener("click", function(event) {

        event.stopPropagation();

    });

}


document.addEventListener("click", function() {

    if (dropdownMenu) {

        dropdownMenu.classList.remove("active");

    }


    if (thinkingBubbles) {

        thinkingBubbles.classList.remove("active");

    }

});



/* ==================================================
   SEARCH
================================================== */

const searchButton =
    document.getElementById("searchButton");

const searchBox =
    document.getElementById("searchBox");

const searchInput =
    document.getElementById("artSearch");

const searchResults =
    document.getElementById("searchResults");


const posts =
    document.querySelectorAll(".art-post");



if (searchButton && searchBox) {

    searchButton.addEventListener("click", function(event) {

        event.stopPropagation();

        searchBox.classList.toggle("active");


        if (searchBox.classList.contains("active")) {

            searchInput.focus();

        }

    });


    searchBox.addEventListener("click", function(event) {

        event.stopPropagation();

    });

}



if (searchInput) {

    searchInput.addEventListener("input", function() {

        const query =
            searchInput.value.toLowerCase().trim();


        searchResults.innerHTML = "";


        if (query === "") {

            return;

        }


        posts.forEach(function(post) {

            const keywords =
                post.dataset.search.toLowerCase();

            const name =
                post.querySelector(".art-post-name")
                    .textContent
                    .toLowerCase();


            if (
                keywords.includes(query) ||
                name.includes(query)
            ) {

                const result =
                    document.createElement("a");


                result.href =
                    "#" + post.id;


                result.className =
                    "search-result";


                result.textContent =
                    post.querySelector(".art-post-name")
                        .textContent;


                result.addEventListener("click", function() {

                    searchBox.classList.remove("active");

                });


                searchResults.appendChild(result);

            }

        });

    });

}



/* ==================================================
   SIDEBAR HEART
================================================== */

const sidebarHeart =
    document.getElementById("sidebarHeart");


if (sidebarHeart) {

    sidebarHeart.addEventListener("click", function() {

        sidebarHeart.classList.toggle("active");

    });

}



/* ==================================================
   POST HEARTS
================================================== */

document.querySelectorAll(".post-heart")
.forEach(function(heart) {

    heart.addEventListener("click", function() {

        heart.classList.toggle("active");

    });

});



/* ==================================================
   QUESTION MARKS
================================================== */

document.querySelectorAll(".post-question")
.forEach(function(button) {

    button.addEventListener("click", function() {

        const post =
            button.closest(".art-post");


        const description =
            post.querySelector(".art-description");


        description.classList.toggle("active");

    });

});


/* ==================================================
   IMAGE LIGHTBOX
================================================== */

const imageLightbox = document.getElementById("imageLightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");


// OPEN IMAGE

document.addEventListener("click", function(event) {

    const image = event.target.closest(".art-post-image");

    if (!image || !imageLightbox || !lightboxImage) {
        return;
    }

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    imageLightbox.classList.add("active");
    imageLightbox.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

});


// CLOSE IMAGE

function closeImage() {

    if (!imageLightbox) {
        return;
    }

    imageLightbox.classList.remove("active");
    imageLightbox.setAttribute("aria-hidden", "true");

    if (lightboxImage) {
        lightboxImage.src = "";
    }

    document.body.style.overflow = "";

}


// CLOSE BUTTON

if (lightboxClose) {

    lightboxClose.addEventListener("click", closeImage);

}


// CLICK OUTSIDE IMAGE

if (imageLightbox) {

    imageLightbox.addEventListener("click", function(event) {

        if (event.target === imageLightbox) {
            closeImage();
        }

    });

}


// ESCAPE KEY

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closeImage();
    }

});
