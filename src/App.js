import './App.css';

import { useSelector, useDispatch } from "react-redux";

import {
    increaseCounter,
    decreaseCounter,
    multiplyCounter,
} from "./redux/Counter/counter.actions"

function App() {
    const count = useSelector((state) => state.counter.count);
    const myName = useSelector((state) => state.counter.name);
    const Msg = useSelector(state => state.counter.Msg);

    const dispatch = useDispatch(); // to call defined actions

    const handleIn = () => {
        dispatch(increaseCounter())
    }

    return (
        <div className="App">
            <div>Count: {count} {myName}</div>
            {Msg && <div style={{ color: 'red' }}>{Msg}</div>}
            <button onClick={() => dispatch(increaseCounter())}>Increase Count</button>
            {/* <button onClick={handleIn}>Increase Count</button> */}
            <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
            <button onClick={() => dispatch(multiplyCounter())}>Multiply Count</button>
        </div>
    )
}

export default App;