// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the cat.gif initially
function displayCat() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var catImage = new Image();
    // Set the source (file path) for the cat image
    catImage.src = 'cat.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    catImage.alt = 'Cat';
    // When the cat image is fully loaded, add it to the image container
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}

// Function to display the cat-heart.gif
function displayCatHeart() {
    // Clear existing content in the image container
    document.getElementById('image-container').innerHTML = '';
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat-heart
    var catHeartImage = new Image();
    // Set the source (file path) for the cat-heart image
    catHeartImage.src = 'cat-heart.gif'; // Assuming the cat-heart image is named "cat-heart.gif"
    // Set alternative text for the image (for accessibility)
    catHeartImage.alt = 'Cat Heart';
    // When the cat-heart image is fully loaded, add it to the image container
    catHeartImage.onload = function() {
        imageContainer.appendChild(catHeartImage);
        // Hide the options container
        document.getElementById('options').style.display = 'none';
        // Add "i love you" text all over the screen
        createLoveTexts();
    };
}

// Function to create "i love you" text scattered all over the screen
function createLoveTexts() {
    var textContainer = document.getElementById('love-text-container');
    var numberOfTexts = 180; // Number of "i love you" texts to display
    
    console.log('Creating ' + numberOfTexts + ' love texts'); // Debug message
    
    // Create a perfect grid distribution with NO randomness
    var columns = 15; // 15 columns
    var rows = 12;    // 12 rows
    
    for (var i = 0; i < numberOfTexts; i++) {
        var loveText = document.createElement('div');
        loveText.className = 'love-text';
        loveText.innerText = 'i love you';
        
        // Calculate grid position
        var col = i % columns;
        var row = Math.floor(i / columns);
        
        // Perfect even distribution - NO randomness
        var baseLeft = (col * 6.67) + 1; // Distribute evenly across width (100/15 = 6.67)
        var baseTop = (row * 8.33) + 1;  // Distribute evenly across height (100/12 = 8.33)
        
        loveText.style.left = baseLeft + '%';
        loveText.style.top = baseTop + '%';
        
        // Keep text horizontal (no rotation)
        loveText.style.transform = 'none';
        
        // Fixed font size for consistency
        loveText.style.fontSize = '24px';
        
        // Fixed opacity
        loveText.style.opacity = 0.5;
        
        textContainer.appendChild(loveText);
    }
    console.log('Finished creating love texts'); // Debug message
}

// Display the cat.gif initially
displayCat();
