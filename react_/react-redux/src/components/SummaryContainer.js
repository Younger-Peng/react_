import React, { Component } from 'react'
import store from '../store'
import Summary from './Summary'

export default class SummaryContainer extends Component {
  constructor(props){
    super(props)
    this.onChange = this.onChange.bind(this)
  }
  componentDidMount(){
    store.subscribe(this.onChange)
  }
  getState(){
    return store.getState()
    
  }
  render(){
    let currentState = this.getState()
    let total = 0;
    for(let key in currentState){
      total += currentState[key]
    }

    return <Summary value={total}/>
  }
  onChange(){
    this.setState(this.getState())
  }
}