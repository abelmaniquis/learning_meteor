import React, { Component, PropTypes } from 'react';
 
import { Tasks } from '../api/tasks.js';
 

class Task extends Component{
  constructor(props){
    super(props);
  }
  toggleChecked(){
    Tasks.update(this.props.task._id,{
      $set: { checked: !this.props.task.checked }
    });  
  }
  
  deleteThisTask(){
    Tasks.remove(this.props.task._id);
  }
  
  render(){
    
    const taskClassName = this.props.task.checked ? 'checked' : '';
    
    return(
      <li>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>
        
        <input
          type="checkbox"
          readOnly
          checked={this.props.task.checked}
          onClick={this.toggleChecked.bind(this)}
        />
        <span className="text"><strong>{this.props.task.username}</strong>: {this.props.task.text}</span>
      </li>
    )
    
  }
  
}




export default Task
