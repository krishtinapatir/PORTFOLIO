var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

// ---------------------------my work--------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const works = document.querySelectorAll(".work");
    const seeMoreBtn = document.getElementById("see-more-btn");
    const seeLessBtn = document.getElementById("see-less-btn");
    const showCount = 3;

    function showInitialWorks() {
        works.forEach((work, index) => {
            if (index >= showCount) {
                work.classList.add("hidden");
            } else {
                work.classList.remove("hidden");
            }
        });
        seeMoreBtn.style.display = "inline-block";
        seeLessBtn.style.display = "none";
        sessionStorage.setItem("viewState", "less");
    }

    function showAllWorks() {
        works.forEach((work, index) => {
            if (index >= showCount) {
                setTimeout(() => {
                    work.classList.remove("hidden");
                }, index * 200); // fade-in effect
            }
        });
        seeMoreBtn.style.display = "none";
        seeLessBtn.style.display = "inline-block";
        sessionStorage.setItem("viewState", "more");
    }

    // Handle button events
    seeMoreBtn.addEventListener("click", function (e) {
        e.preventDefault();
        showAllWorks();
    });

    seeLessBtn.addEventListener("click", function (e) {
        e.preventDefault();
        showInitialWorks();
    });

    // Restore the previous view state if available
    const storedState = sessionStorage.getItem("viewState");
    if (storedState === "more") {
        showAllWorks();
    } else {
        showInitialWorks();
    }
});


// -----------------------------------------------------------------

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// -----------------sidemenu--------------------

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}



// ------------------Contact Form-------------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbyZ2iLfNGhgM57_GLsLT8B4WwdOyR1U1Ms8-FgANqPMIPDor9PY2S2iSD92sh2zl_Ql/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully!"
        setTimeout(function() {
            msg.innerHTML = ""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})