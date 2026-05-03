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