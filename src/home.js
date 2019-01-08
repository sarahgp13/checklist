import React, { Component } from 'react';
import './index.css';
import {getItems} from './script.js';
// import Item from './item.js';
// import itemForm from './itemform.js';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            itemsId : []
        }
}

async componentDidMount() {
    const items = await fetch('http://localhost:3000/item')
                        .then((response)=> {return response.json();})
                        .then((myJson)=> {return myJson});
    const ids = this.mapItemsId(items)
    this.setState({itemsId: ids})
}
mapItemsId(data){
    const result = data.map((datum)=>{const wanted = datum._id; return wanted})
    return result
}

getAllItems=async()=>{
    const items = await getItems();
    const data = this.mapItemsId(items);
    this.setState(
        {itemsId: data}
    )
}

render() {
    return (
        <div class="">
            <button class="" onClick={this.getAllItems}>get items</button>
            <ul>
                {this.state.itemsId.map((itemId, i)=>{
                    return <li key={i}>
                    <Item
                    _id={this.state.itemsId[i]}>
                    </Item>
                    </li>
                })}
            </ul>
            <br/>
            <ItemForm></ItemForm>
        </div>
        
    );
  }
}

export default Home;