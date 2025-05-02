// Video player functionality
document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('gameVideo');
    const playlistItems = document.querySelectorAll('.playlist-item');

    playlistItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remove active class from all items
            playlistItems.forEach(i => i.classList.remove('active'));
            
            // Add active class to clicked item
            this.classList.add('active');
            
            // Update video source
            const videoSrc = this.getAttribute('data-src');
            video.src = videoSrc;
            
            // Play the video
            video.play();
        });
    });
});