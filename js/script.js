        // Auto-play music on page load
        window.addEventListener('load', function() {
            const music = document.getElementById('bg-music');
            const button = document.querySelector('.music-button');
            
            // Attempt to play music automatically
            music.play().catch(error => {
                // Handle autoplay restrictions
                console.log('Autoplay prevented, click button to play');
                button.classList.add('muted');
            });
        });

        function toggleMusic() {
            const music = document.getElementById('bg-music');
            const button = document.querySelector('.music-button');
            
            if (music.paused) {
                music.play();
                button.classList.remove('muted');
            } else {
                music.pause();
                button.classList.add('muted');
            }
        }