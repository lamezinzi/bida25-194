const welcomeScreen = document.getElementById('welcome-screen');

if (welcomeScreen) {
  document.body.classList.add('blurred');

  setTimeout(function () {
    welcomeScreen.classList.add('fade-out');
    document.body.classList.remove('blurred');

    setTimeout(function () {
      welcomeScreen.style.display = 'none';
    }, 800);

  }, 3000);
}


 function showSidebar(){
    const sidebar = document.querySelector('.sidebar').classList.add('active');
    sidebar.style.display = 'flex'
 }

 function hideSidebar(){
    const sidebar = document.querySelector('.sidebar').classList.remove('active');
    sidebar.style.display = 'none'
 }

 function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden'; 
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}


document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeLightbox();
});



const revealButton = document.getElementById('reveal-fact'); 

const funFact = document.getElementById('fun-fact'); 

 

revealButton.addEventListener('click', function() { 

    // Toggle the fact visibility 

    funFact.classList.toggle('show'); 

 

    // Change button text based on visibility 

    if (funFact.classList.contains('show')) { 

        revealButton.textContent = 'Hide Fun Fact'; 

    } else { 

        revealButton.textContent = '🔍 Click to Reveal a Fun Fact About Me!'; 

    } 

}); 