import React from 'react'

class Product extends React.Component{
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    )
  }
}



Product.propTypes = {
  name: React.PropTypes.string.isRequired,
  producer: React.PropTypes.string,
  hasWatermark: React.PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName]
    if (weight === undefined) {
      return "The `weight` prop validator does not validate the value as being required."
    }

    if (isNaN(weight)) {
      return 'The `weight` prop validator is accepting types other than a number.'
    }

    if (weight < 80 || weight > 300) {
      return 'The `weight` prop validator does not check for the weight ranging between 80 and 300.'
    }
  }
}



Product.defaultProps = {
  hasWatermark: false
}

module.exports = Product
