import React, { Component } from 'react';
import Counter from './Counter'
import * as Actions from '../Actions'
import PropTypes from 'prop-types'

export  class CounterContainer extends Component {
  constructor(){
    // super(props, context)
    super(...arguments)
    this.onChange = this.onChange.bind(this)
  }
  componentDidMount(){
    this.context.store.subscribe(this.onChange)
  }
  render(){
    const {caption} = this.props
    return <Counter caption={caption}
      onIncrement={this.onIncrement.bind(this)}
      onDecrement={this.onDecrement.bind(this)}
      value={this.getState()[caption]} />
  }
  onChange(){
    this.setState(this.getState())
  }
  getState(){
    return this.context.store.getState()
  }
  onIncrement(){
    const {caption} = this.props
    console.log(caption)
    this.context.store.dispatch(Actions.increment(caption))
  }
  onDecrement(){
    const {caption} = this.props
    this.context.store.dispatch(Actions.decrement(caption))
  }

}

CounterContainer.contextTypes = {
  store: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

function mapStateToProps(state, ownProps) {
  return {
    value: state[ownProps.caption]
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    onIncrement: () => {
      dispatch(Actions.increment(ownProps.caption))
    },
    onDecrement: () => {
      dispatch(Actions.decrement(ownProps.caption))
    }
  }
}