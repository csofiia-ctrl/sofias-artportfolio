/* ==================================================
   COMMON MENU
================================================== */

document.addEventListener("DOMContentLoaded", function () {


    /* ==================================================
       EXACT HEART FROM THE ORIGINAL MENU
    ================================================== */

    const heartSvg = `
        <svg viewBox="0 0 24 24" class="heart-icon-small">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
        </svg>
    `;


    const bigHeartSvg = `
        <svg viewBox="0 0 24 24" class="heart-icon">
            <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"/>
        </svg>
    `;


    /* ==================================================
       MENU HTML
    ================================================== */

    const menuHTML = `

        <header class="google-header">

            <div class="menu-container">


                <!-- MENU BUTTON -->

                <button class="heart-menu-btn" id="menuBtn">

                    <div class="heart-stack">

                        ${bigHeartSvg}
                        ${bigHeartSvg}
                        ${bigHeartSvg}

                    </div>

                </button>


                <!-- MAIN MENU -->

                <div class="dropdown-menu" id="dropdownMenu">


                    <!-- HOME -->

                    <a href="index.html" class="menu-item">

                        <span>HOME</span>

                        ${heartSvg}

                    </a>


                    <!-- ME -->

                    <a href="me.html" class="menu-item">

                        <span>ME</span>

                        ${heartSvg}

                    </a>


                    <!-- ART -->

                    <div class="art-menu-wrapper">

                        <button class="menu-item art-menu-button" id="artButton">

                            <span>ART</span>

                            ${heartSvg}

                        </button>


                        <!-- THINKING BUBBLES -->

                        <div class="thinking-bubbles" id="thinkingBubbles">


                            <a href="studies.html"
                               class="thinking-bubble bubble-2">

                                <span class="bubble-arc"></span>

                            </a>


                            <a href="projects.html"
                               class="thinking-bubble bubble-3">

                                <span class="bubble-arc"></span>

                            </a>


                            <!-- ART MINI MENU -->

                            <div class="art-mini-menu">


                                <a href="studies.html"
                                   class="mini-menu-item">

                                    <span>STUDIES</span>

                                    ${heartSvg}

                                </a>


                                <a href="projects.html"
                                   class="mini-menu-item">

                                    <span>PROJECTS</span>

                                    ${heartSvg}

                                </a>

                            </div>

                        </div>

                    </div>


                    <!-- MUSIC -->

                    <a href="music.html" class="menu-item">

                        <span>MUSIC</span>

                        ${heartSvg}

                    </a>



                    <!-- DIGITAL / MARKETING -->

                    <a href="digital-marketing.html" class="menu-item">

                        <span>DIGITAL/MARKETING</span>

                        ${heartSvg}

                    </a>


                </div>

            </div>


            <!-- HEADER TITLE -->

            <div class="header-title">

                _sofiaCaprariu

            </div>

        </header>

    `;


    /* ==================================================
       INSERT MENU
    ================================================== */

    const menuPlaceholder = document.getElementById("site-menu");


    if (menuPlaceholder) {

        menuPlaceholder.innerHTML = menuHTML;

    } else {

        document.body.insertAdjacentHTML(
            "afterbegin",
            menuHTML
        );

    }


    /* ==================================================
       GET ELEMENTS
    ================================================== */

    const menuBtn =
        document.getElementById("menuBtn");

    const dropdownMenu =
        document.getElementById("dropdownMenu");

    const artButton =
        document.getElementById("artButton");

    const thinkingBubbles =
        document.getElementById("thinkingBubbles");


    /* ==================================================
       OPEN / CLOSE MAIN MENU
    ================================================== */

    menuBtn.addEventListener("click", function (event) {

        event.stopPropagation();

        dropdownMenu.classList.toggle("active");


        if (!dropdownMenu.classList.contains("active")) {

            thinkingBubbles.classList.remove("active");

        }

    });


    /* ==================================================
       ART BUTTON
    ================================================== */

    artButton.addEventListener("click", function (event) {

        event.stopPropagation();

        thinkingBubbles.classList.toggle("active");

    });


    /* ==================================================
       DON'T CLOSE WHEN CLICKING INSIDE MENU
    ================================================== */

    dropdownMenu.addEventListener("click", function (event) {

        event.stopPropagation();

    });


    /* ==================================================
       DON'T CLOSE WHEN CLICKING BUBBLES / MINI MENU
    ================================================== */

    thinkingBubbles.addEventListener("click", function (event) {

        event.stopPropagation();

    });


    /* ==================================================
       CLICK OUTSIDE
    ================================================== */

    document.addEventListener("click", function () {

        dropdownMenu.classList.remove("active");

        thinkingBubbles.classList.remove("active");

    });

});