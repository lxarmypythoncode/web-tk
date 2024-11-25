document.addEventListener("DOMContentLoaded", function() {
    const text = "BERITA";
    let i = 0;
    const speed = 100; // Adjust typing speed

    function typeWriter() {
        if (i < text.length) {
            document.querySelector('.berita-page-title').innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
});

function showDetails(detailId) {
    const detailElement = document.getElementById(detailId);
    if (detailElement.style.display === "none" || detailElement.style.display === "") {
        detailElement.style.display = "block";
    } else {
        detailElement.style.display = "none";
    }
}
