import React, { Component } from 'react'
import Item from './todoItem'

class InputField extends Component {
    constructor(props){
        super(props);
        this.state = {todo: [] };
    }

    addToList = () => {
        let itemList = this.state.todo
        itemList.push(document.getElementById('inputItem').value)
        this.setState({todo: itemList})
    }

    clear = () => {
        let newtodo = []
        console.log(document.getElementById(`todoItem-0`).state.textDecoration)

        // for (let i=0; i<this.state.todo.length;i++) {
        //     if (document.getElementById(`todoItem-${i}`).state.textDecoration === '') {
        //         newtodo.push(this.state.todo[i])
        //     }
        // }
        console.log('clear')
    }

    render(){
        return (
            <div>
                <input id = 'inputItem' type="text"/>
                <input type="submit" value='Add' onClick = {this.addToList} />

                <h3>Checklist</h3>

                <a href = '#' onClick = {this.clear} >Clear</a>

                <div>
                    {this.state.todo.map((item, index) => <Item value = {item} id = {index} key = {index} />)}
                </div>
            </div>
        )
    }
}

export default InputField;
