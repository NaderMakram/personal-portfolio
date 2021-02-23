// Open the Modal
let modal = document.querySelector('.modal');
function openModal(e) {
  modal.querySelector('img').src = e.target.src

  modal.style.display = 'flex'
}

// Close the Modal
function closeModal() {
  modal.style.display = 'none';
}

let pics = document.querySelectorAll('img.modal-image')

pics.forEach(pic => {
  pic.addEventListener('click', (e) => {
    openModal(e)
  })
})



let closeBtn = document.querySelector('.closeBtn')
closeBtn.addEventListener('click', () => closeModal())
window.addEventListener('keyup', (e) => {
  if (e.keyCode !== 27) return
  closeModal()
})
modal.addEventListener('click', (e) => {
  if (e.target.tagName == "IMG") return
  closeModal()
})