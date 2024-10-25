        // Function to display greeting based on time of day
        function displayGreeting() {
            const greetingElement = document.getElementById('greeting');
            const now = new Date();
            const hour = now.getHours();
            let greetingMessage = '';

            if (hour >= 5 && hour < 12) {
                greetingMessage = 'Good Morning!';
            } else if (hour >= 12 && hour < 18) {
                greetingMessage = 'Good Afternoon!';
            } else {
                greetingMessage = 'Good Evening!';
            }

            greetingElement.textContent = greetingMessage;
        }

        // Function to track button clicks
        let clickCount = 0;
        const nextPageButton = document.getElementById('nextPageButton');
        const clickCountElement = document.getElementById('click-count');

        nextPageButton.addEventListener('click', function() {
            clickCount++;
            clickCountElement.textContent = `Button clicked ${clickCount} times`;
        });

        // Call the displayGreeting function when the page loads
        window.onload = displayGreeting;