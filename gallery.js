document.addEventListener("DOMContentLoaded", function () {
    // Gallery items array
    const galleryItems = [
        { filename: "flowers-yellow", title: "Sunflowers in the hamlet Dernekamp, Kirchspiel, Dülmen, North Rhine-Westphalia, Germany", credits: "By Dietmar Rabich - Own work, CC BY-SA 4.0" },
        { filename: "flowers-pink", title: "Market in Münster, North Rhine-Westphalia, Germany", credits: "By Dietmar Rabich - Own work, CC BY-SA 4.0" },
        { filename: "flowers-purple", title: "Sentmaring Park, Münster, North Rhine-Westphalia, Germany", credits: "By Dietmar Rabich - Own work, CC BY-SA 4.0" },
        { filename: "flowers-red", title: "Poppies in cornfield, Dülmen, North Rhine-Westphalia, Germany", credits: "By Dietmar Rabich - Own work, CC BY-SA 4.0" },
        { filename: "flowers-white", title: "Daffodils in Sentmaring park, Münster, North Rhine-Westfalia, Germany", credits: "By Dietmar Rabich - Own work, CC BY-SA 4.0" },
        // Add more items as needed
    ];

    // Select elements
    const thumbnailList = document.getElementById("thumbnail-list");
    const featuredImage = document.querySelector("#gallery figure img");
    const caption = document.querySelector("#gallery figure figcaption");

    // Dynamically build the thumbnail list
    galleryItems.forEach(function (item, index) {
        const listItem = document.createElement("li");
        const thumbnailImage = document.createElement("img");

        thumbnailImage.src = `images/${item.filename}-small.jpg`;
        thumbnailImage.alt = item.title;
        thumbnailImage.width = 240;
        thumbnailImage.height = 160;

        // Add a click event listener to each thumbnail
        thumbnailImage.addEventListener("click", function () {
            // Change the featured image src and alt
            featuredImage.src = `images/${item.filename}-large.jpg`;
            featuredImage.alt = item.title;

            // Update the caption
            caption.textContent = `${item.title} - ${item.credits}`;
        });

        // Append the thumbnail to the list item
        listItem.appendChild(thumbnailImage);

        // Append the list item to the thumbnail list
        thumbnailList.appendChild(listItem);

        // Initially set the first image as active
        if (index === 0) {
            thumbnailImage.classList.add("active");
            featuredImage.src = `images/${item.filename}-large.jpg`;
            featuredImage.alt = item.title;
            caption.textContent = `${item.title} - ${item.credits}`;
        }
    });
});
