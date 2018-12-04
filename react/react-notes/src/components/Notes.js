import React, { Component } from 'react';
import { db, loadCollection } from '../database';
import Note from './Note'
// 支持离线的Web App  
class Notes extends Component {
  constructor(props) {
    super(props);
    this.getInitialData();
  }
  state = {
    entities: []
  }
  getInitialData () {
    loadCollection('notes')
      .then(collection => {
        // collection.insert([
        //   { body: 'hello ~' },
        //   { body: 'hola ~' }
        // ]);
        // db.saveDatabase();

        const entities = collection.chain().find().simplesort('$loki','isdesc').data()
      })
  }
  render () {
      const entities = this.state.entities;
      const noteItems = entities.map(entity=>
        <Note 
            key = {entity.$loki}
            entity={entity}

        />
        )
    return (
      <div className='ui container notes'>
      <h4 className='ui hotizontal divider header'>
        <i className="paw icon"></i>
        Notes App _ React.js
      </h4>
      <button className='ui right floated basic violet button' onClick={this.createEntity}> 添加笔记</button>
    </div>
    )
  }
  createEntity=()=>{
    console.log(this)
  }
}
export default Notes;
