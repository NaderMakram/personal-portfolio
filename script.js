// home page videos play in viewport
let homeVideos = document.querySelectorAll('video#homeVideo')
function callback(entries, observer) {
  entries.forEach(entry => {
    entry.isIntersecting ? entry.target.play() : entry.target.pause();
  })
}

options = {}

const observer = new IntersectionObserver(callback, options)

homeVideos.forEach(video => {
  video.playbackRate = 0.5;
  observer.observe(video)
})


// mobile menu
let navUl = document.querySelector('.nav-container ul')
let navBtn = document.querySelector('.mobile-menu-toggle')
navBtn.addEventListener('click', () => {
  navUl.classList.toggle('slide')
  navBtn.classList.toggle('rotate')
})


// shadow over the menu when scrolled
let navBar = document.querySelector('nav')
let signal = document.querySelector('.signal')

const navBarObserver = new IntersectionObserver((entries, observer) => {
  let signal = entries[0]
  signal.isIntersecting ? navBar.classList.remove('shadow') : navBar.classList.add('shadow')
},
  { threshold: 0 })

navBarObserver.observe(signal)