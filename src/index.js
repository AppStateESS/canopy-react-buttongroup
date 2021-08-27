'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ButtonGroup extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let buttons = this.props.buttons.map(
      function (value, key) {
        const activeColor = 'btn btn-' + this.props.activeColor
        const buttonColor = 'btn btn-' + this.props.color

        let cn = buttonColor
        if (this.props.match !== null && this.props.match !== undefined) {
          if (
            this.props.match.constructor === Array &&
            this.props.match.indexOf(value.value) !== -1
          ) {
            cn = activeColor
          } else if (this.props.match == value.value) {
            cn = activeColor
          }
        }

        return (
          <button
            type="button"
            key={key}
            className={cn}
            disabled={this.props.disabled}
            value={value.value}
            onClick={this.props.handle.bind(null, value.value)}>
            {value.label}
          </button>
        )
      }.bind(this)
    )

    const buttonClass =
      this.props.vertical === true ? 'btn-group-vertical' : 'btn-group'

    let hidden
    if (this.props.match && this.props.match.constructor === Array) {
      hidden = this.props.match.map(
        function (value, key) {
          let name = this.props.name + '[]'
          return <input type="hidden" name={name} value={value} key={key} />
        }.bind(this)
      )
    } else {
      hidden = (
        <input type="hidden" name={this.props.name} value={this.props.match} />
      )
    }

    return (
      <div>
        <div className={buttonClass} role="group">
          {buttons}
        </div>
        {hidden}
      </div>
    )
  }
}

ButtonGroup.propTypes = {
  buttons: PropTypes.array.isRequired,
  handle: PropTypes.func.isRequired,
  activeColor: PropTypes.string,
  color: PropTypes.string,
  match: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.array,
  ]),
  vertical: PropTypes.bool,
  name: PropTypes.string,
  disabled: PropTypes.bool,
}

ButtonGroup.defaultProps = {
  activeColor: 'dark',
  color: 'outline-dark',
  match: '',
  name: null,
  disabled: false,
}

export default ButtonGroup
