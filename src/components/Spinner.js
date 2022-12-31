import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status"></div>
            <span className="sr-only mx-2 my-1">Loading...</span>
        </div>
    )
  }
}

export default Spinner