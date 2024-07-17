import './App.css';

import { connect } from "react-redux"

import {
  increaseCounter,
  decreaseCounter,
  multiplyCounter,
} from "./redux/Counter/counter.actions"

// Component App get updated state from redux by props
function App(props) {
  return (
    <div className="App">
      <div>Count: {props.count} {props.myName}</div>

      <button onClick={() => props.increaseCounter()}>Increase Count</button>
      <button onClick={() => props.decreaseCounter()}>Decrease Count</button>
      <button onClick={() => props.multiplyCounter()}>Multiply Count</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count: state.counter.count,
    myName: state.counter.name,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increaseCounter: () => dispatch(increaseCounter()),
    decreaseCounter: () => dispatch(decreaseCounter()),
    multiplyCounter: () => dispatch(multiplyCounter()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
