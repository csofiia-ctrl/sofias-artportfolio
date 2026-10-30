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



/* ==================================================
   NU ÎNCHIDE CÂND DAI CLICK ÎN ART
================================================== */

if (thinkingBubbles) {

    thinkingBubbles.addEventListener("click", function(event) {

        event.stopPropagation();

    });

}



/* ==================================================
   CLICK ÎN AFARA MENIULUI
================================================== */

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
