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
  }

  render () {
    const isModalActivated = this.state.modalActivated
    return (
      <div>
        <div className="modal_button" role="button"></div>
        { isModalActivated &&
          <ReactCSSTransitionGroup
            transitionName="modal_window"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <div id="component_modal" is="div">
              <div className="component_modal_inner">
                <div className="component_modal_content">
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
