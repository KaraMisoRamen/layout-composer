
export const TOGGLE_MODAL: string = 'TOGGLE_MODAL'

export const toggleModal = (state: boolean) => {
  return {
    type: 'TOGGLE_MODAL',
    state: !state
  }
}
