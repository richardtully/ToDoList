import React, { Component} from 'react';


class Item extends Component {
  constructor(props) {
    super(props)
    this.state ={ textDecoration: '' }
  }

  toggleLineThrough = () => {
    if (this.state.textDecoration === '') {
      this.setState({textDecoration: 'line-through'})
    } else {
      this.setState({textDecoration: ''})
    }
    console.log('hello')
  }

  render() {
    return (
      <div>
        <input type='checkbox' id = {`todoCheckbox-${this.props.id}`} onClick = {this.toggleLineThrough} ></input>
        <span id = {`todoItem-${this.props.id}`} style = {{textDecoration: this.state.textDecoration }}>
          {this.props.value}
        </span>
      </div>
    )
  }
}         


export default Item;