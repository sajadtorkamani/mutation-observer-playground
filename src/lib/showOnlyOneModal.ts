
// Next up:
// Keep track of which modals we hide with this script.
// Then, when we close the last modal, we can show the last modal we hid.
export function showOnlyOneModal() {
  const modalDialogs = Array.from(document.querySelectorAll('.modal.show'))
  const modalBackdrops = Array.from(document.querySelectorAll('.modal-backdrop.fade.show'))

  if (modalDialogs.length === 0 && modalBackdrops.length === 0) {
    console.log('No modals found. Nothing to do.')
    return
  }

  if (modalDialogs.length === 1 && modalBackdrops.length === 1) {
    console.log('Only one modal found. Nothing to do.')
    return
  }

  // Hide all the modal dialogs except the last
  modalDialogs.slice(0, modalDialogs.length - 1).forEach(element => {
    const modal = element as HTMLElement
    modal.style.display = 'none'
  })

  // Hide all the modal backdrops except the last
  modalBackdrops.slice(0, modalBackdrops.length - 1).forEach(element => {
    const backdrop = element as HTMLElement
    backdrop.style.display = 'none'
  })
}

