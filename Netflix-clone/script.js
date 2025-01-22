// Example for adding functionality like hover effects or interactions
document.querySelectorAll('.row-posters img').forEach(img => {
    img.addEventListener('click', () => {
      alert(`You clicked on ${img.alt}`);
    });
  });
  document.querySelectorAll('.row').forEach(row => {
    const rowPosters = row.querySelector('.row-posters');
    const leftBtn = row.querySelector('.scroll-btn.left');
    const rightBtn = row.querySelector('.scroll-btn.right');
  
    // Scroll left
    leftBtn.addEventListener('click', () => {
      rowPosters.scrollBy({
        left: -300, // Adjust scroll distance as needed
        behavior: 'smooth',
      });
    });
  
    // Scroll right
    rightBtn.addEventListener('click', () => {
      rowPosters.scrollBy({
        left: 300, // Adjust scroll distance as needed
        behavior: 'smooth',
      });
    });
  });
    