import React, { Component } from 'react'
import Item from './todoItem'

let x = []

class InputField extends Component {
    constructor(props){
        super(props);
        this.state = {
            todo: [],
            currentItem: ''
        };
    }

    extract = (e) => {

        this.setState({currentItem: e.target.value}) 

        // console.log(this.state.currentItem)
    }

    add = () => {
        x.unshift(this.state.currentItem)
        // let list = this.state.todo
        // console.log(list)
        this.setState({todo: x})
        return this.state.todo
    }

    render(){
        return (
            <div>
                <input onChange = {this.extract} id = 'item' type="text" name="name"/>
                {/* 
                access the value attribute of the input feild (the one which
                we're actually adding todo things to) from a different element
                */}
                <input type="submit" value='Add' onClick = {this.add} />

                <h1>Checklist</h1>

                {this.state.todo.map(item => <Item value = {item}/>)}

                {/* <p>{this.state.todo}</p> */}

            </div>
        )
    }
}

export default InputField;
