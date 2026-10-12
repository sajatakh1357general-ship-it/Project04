const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

const avatarImg = document.getElementById('profile-avatar');
const switchPhotoBtn = document.getElementById('switch-photo-btn');

const photos = [
  { src: 'assets/profile.jpg', alt: 'Professional Photo' },
  { src: 'assets/prof1.jpg', alt: 'Casual Photo' }
];

let photoIndex = 0;

switchPhotoBtn.addEventListener('click', () => {

  avatarImg.classList.add('fade-out');

  setTimeout(() => {
    photoIndex = (photoIndex + 1) % photos.length;
    avatarImg.src = photos[photoIndex].src;
    avatarImg.alt = photos[photoIndex].alt;

    avatarImg.classList.remove('fade-out');
  }, 200);
});
