
import {
  toggleModal,
  TOGGLE_MODAL
} from '../action/actions'

interface Action {
  type: string
}

const initialModalState: boolean = false

function modalSetter(state = initialModalState, action: Action) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return !toggleModal
    default:
      return state
  }
}
