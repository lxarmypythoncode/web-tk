function openTab(event, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tab-button");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}

// Default open tab
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("sejarah").style.display = "block";
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.guru-img');

    images.forEach(img => {
        img.addEventListener('click', function() {
            if (this.classList.contains('paused')) {
                this.classList.remove('paused');
            } else {
                this.classList.add('paused');
            }
        });
    });
});

