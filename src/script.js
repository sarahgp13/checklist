import React, { Component } from 'react';
import './App.css';
const url=("http://localhost:3000/")

// function showing all items on home page
const getItems = async() => {
    const item = await fetch("http://localhost:3000/item")
    .then((response)=> {
        return response.json();
    })
    .then((myJson) => {
        return myJson
        });
    return item
}

// function to post a new item on home page
const newItem = async (data) => {
    const items = await fetch("http://localhost:3000/newitem",
    {
        method: 'post',
        cors: true,
        headers: {
            'Content-type': 'application/json; charset-UTF-8',
        },
        body: JSON.stringify(data)
    }
    ).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})
    return items;
}

// function to update/edit an item
const editItem = async (data) => {
    console.log(data)
    const items = await fetch(`${"http://localhost:3000/item/content/"}${data._id}`, 
    {
        method: 'put',
        cors: true,
        headers: {
        'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify(data)
    }
    ).then((result)=>{console.log(result)}).catch((err)=>{console.log(err)})
    return items;
}

// function to delete an item
const deleteItem = async (_id) => {
    const items = await fetch(`${"http://localhost:3000/item/"}${_id}`, 
    {
        method: 'delete',
        cors: true,
        // headers: {
        //   'Content-type': 'application/json; charset=UTF-8'
        // },
        // body: JSON.stringify(data)
    }
    ).then((result)=>{console.log(`${result} comment deleted`)}).catch((err)=>{console.log(err)})
    return items;
}

//  export default class apiCall extends Component {getComments}
export {
    getItems,
    newItem,
    editItem,
    deleteItem
}