const downloadButton = document.getElementById('ebook-download')
const modal = document.getElementsByClassName('popup')[0]
const closeModal = document.getElementById('close-modal')
const policyAgreement = document.getElementById('terms-conditions-box')
const inputFields = document.getElementsByClassName('ebook-fields')[0].children

// Clear inputs after the modal is opened
const clearInputs = () => {
  for(let input of inputFields){
    input.value = ''
  }
  policyAgreement.checked = false
}

// Check if all inputs are filled and the Terms were accepted
const checkInputs = () => {
  const check = []
  for(let input of inputFields) {
    if (!input.value) {
      check.push(false)
      input.style.borderColor = 'red'
    } else{
      check.push(true)
    }
  }
  if (check.includes(false)){
    return false
  }
  return true
}

// Handles the click on download button
const handleOpen = (e) => {
  e.preventDefault()
  const inputs = checkInputs()
  if (policyAgreement.checked && inputs){
    modal.style.display = 'flex'
    // Goes to top of the screen
    window.scrollTo(0, 0)
  }
  policyAgreement.style.border = '2px solid red'
}

// Handles close of the modal and cleans inputs
const handleClose = () => {
  clearInputs()
  modal.style.display = 'none'
}

downloadButton.addEventListener('click', handleOpen)
closeModal.addEventListener('click', handleClose)
