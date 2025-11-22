// Main JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    console.log('Blog Berita Terbaru - Ready!');
    
    // Get all "Read More" buttons
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    // Add click event listener to each button
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const newsTitle = this.getAttribute('data-title');
            alert(`Anda akan membaca artikel: "${newsTitle}"\n\nFitur ini akan mengarahkan ke halaman detail artikel.`);
        });
    });
    
    // Add hover effect animation for news titles
    const newsTitles = document.querySelectorAll('.news-title');
    
    newsTitles.forEach(title => {
        title.addEventListener('mouseenter', function() {
            this.style.textDecoration = 'underline';
        });
        
        title.addEventListener('mouseleave', function() {
            this.style.textDecoration = 'none';
        });
    });
});