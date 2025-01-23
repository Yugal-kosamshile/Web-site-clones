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

  document.querySelectorAll('.custom-dropdown').forEach((dropdown) => {
    const button = dropdown.querySelector('.dropdown-button');
    const menu = dropdown.querySelector('.dropdown-menu');
  
    // Toggle dropdown menu visibility
    button.addEventListener('click', () => {
      dropdown.classList.toggle('active');
    });
  
    // Handle dropdown item selection
    menu.querySelectorAll('.dropdown-item').forEach((item) => {
      item.addEventListener('click', () => {
        const value = item.getAttribute('data-value');
        const text = item.textContent.trim();
        const icon = item.querySelector('img').src;
  
        // Update button text and icon
        button.innerHTML = `<img src="${icon}" alt="Selected Icon" class="dropdown-icon"> ${text}`;
  
        // Close the dropdown menu
        dropdown.classList.remove('active');
      });
    });
  
    // Close dropdown when clicking outside
    document.addEventListener('click', (event) => {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('active');
      }
    });
  });
  