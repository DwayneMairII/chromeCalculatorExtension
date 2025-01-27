// Function to load the HTML content from 'index.html'
function loadHTML() {
    fetch('calculator/index.html')  // Fetch the content from 'index.html'
        .then(response => {
            if (response.ok) {
                return response.text();  // Get the content as text
            }
            throw new Error('Failed to load HTML');
        })
        .then(html => {
            // Get the container where the HTML content will go
            document.getElementById('container').innerHTML = html;
        })
        .catch(error => {
            console.error('Error loading HTML:', error);
        });
}

// Load the HTML content as soon as the page is loaded
window.onload = loadHTML;
