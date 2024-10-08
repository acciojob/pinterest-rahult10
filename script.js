/* Container - hero section */
.hero {
    display: flex; /* Align content side by side */
    justify-content: space-between; /* Space the content evenly */
    align-items: center; /* Vertically center the content */
    padding: 20px;
    background-color: #f4f4f4; /* Light background */
    height: 400px; /* Set the height for the hero section */
}

/* Content inside the hero section */
.hero-content {
    max-width: 50%; /* Set maximum width for content */
}

/* Heading and paragraph styles */
.hero-content h1 {
    font-size: 3em;
    margin-bottom: 10px;
    color: #333;
}

.hero-content p {
    font-size: 1.2em;
    margin-bottom: 20px;
    color: #666;
}

/* Explore Now Button */
.explore-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    font-size: 1em;
}

.explore-button:hover {
    background-color: #0056b3;
}

/* Image container */
.hero-image {
    max-width: 50%; /* Image takes up half the width of the container */
}

/* Styling the image */
.hero-image img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ensure the image covers its container */
    border-radius: 10px; /* Optional rounded corners for a cleaner look */
}
