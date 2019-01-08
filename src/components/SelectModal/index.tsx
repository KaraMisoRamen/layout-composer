import * as React from "react";
import "./index.scss"

export class SelectModal extends React.Component<any> {
  constructor(props: any) {
    super(props)
    this.state = {
      modalActivated: true,
    };
  }

  render () {
    return (
      <div>
        <div className="modal_button" role="button"></div>

        <div id="component_modal">
          <div className="component_modal_inner">
            <div className="component_modal_content">
              <h2 className="component_modal_title">Choose your component</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
