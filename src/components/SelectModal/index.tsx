import * as React from "react"
import * as ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import "./index.scss"

interface SelectModalState {
  modalActivated: boolean
}

export class SelectModal extends React.Component<{}, SelectModalState>{
  constructor(props: any) {
    super(props)
    this.state = {
      modalActivated: true,
    }

    this.toggleModal = this.toggleModal.bind(this)
    this.closeModalSelf = this.closeModalSelf.bind(this)
  }

  toggleModal () {
    this.setState({
      modalActivated: !this.state.modalActivated
    })
  }

  closeModalSelf (event: React.MouseEvent<HTMLDivElement>) {
    if (event.target === event.currentTarget) {
      this.toggleModal()
    }
  }

  render () {
    const isModalActivated = this.state.modalActivated
    return (
      <div>
        <div className="modal_button" role="button" onClick={this.toggleModal}></div>
        { isModalActivated &&
          <ReactCSSTransitionGroup
            className="modal_window"
            transitionName="modal_window"
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}
            tag="div"
          >
            <div
              id="component_modal"
              onClick={this.closeModalSelf}
            >
              <div className="component_modal_inner">
                <div className="component_modal_content">
                  <div className="component_modal_close_button"
                    role="button"
                    onClick={this.toggleModal}
                  ></div>
                  <h2 className="component_modal_title">Choose your component</h2>
                </div>
              </div>
            </div>
          </ReactCSSTransitionGroup>
        }
      </div>
    )
  }
}
