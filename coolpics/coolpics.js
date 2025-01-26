document.querySelector("#menu").addEventListener("click", toggleMenu);

const images = document.querySelectorAll("img");

images.forEach(image => {image.addEventListener("click", viewHandler)});

function imageViewer()
{
    document.querySelector(".viewer").classList.remove("hidden")
}



{
    document.querySelector(".viewer").classList.add("hidden")
}

function toggleMenu() {
    document.querySelector("nav").classList.toggle("hidden");
    
    const menu = document.querySelector("#menu")
    if (document.querySelector("nav").classList.contains("hidden")) {
        menu.style.padding = "1em 0 1em 0";
    } else {
        menu.style.padding = "1em 0 0 0";
    }
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    target = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    const imgName = target.src.split("-");

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    newSrc = imgName[0] + "-full.jpeg";
    altText = target.alt;

    htmltoinsert =     `
    <div class="viewer">
        <button class="close-viewer">X</button>
        <img src=${newSrc} alt="${altText}">
    </div>`;

	// insert the viewerTemplate into the top of the body element
    document.body.insertAdjacentHTML("afterbegin", htmltoinsert);

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector(".close-viewer").addEventListener("click", closeViewer)
    function closeViewer()
    {
        document.querySelector(".viewer").classList.add("hidden")
    }
}