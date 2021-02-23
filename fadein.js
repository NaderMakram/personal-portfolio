let galleryImages = document.querySelectorAll('.gallery img')
function callback(entries, observer) {
  entries.forEach(entry => {
    entry.isIntersecting ? entry.target.classList.add('opacity1') : entry.target.classList.remove('opacity1');
  })
}

options = {}

const fadeInObserver = new IntersectionObserver(callback, options)

galleryImages.forEach(img => {
  img.classList.add('opacity0');
  fadeInObserver.observe(img)
})