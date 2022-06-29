import React, { Component } from "react";
class body extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="body1">
        <div className="body">
          <body>
            <div className="border">
              <img className="pan" src={this.props.src} alt="img" />
            </div>
            <div>
              <button onClick={() => {
        window.open("https://youtu.be/5khjF0-SqEc", "_blank");}} className="btn" type="button" class="btn btn-primary">
                Watch
              </button>
            </div>
          </body>
        </div>
      </div>
    );
  }
}
export default body;
