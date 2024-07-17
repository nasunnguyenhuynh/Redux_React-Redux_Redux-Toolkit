import './App.css';

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';

import {
    increaseCounter,
    decreaseCounter,
    multiplyCounter,
    fetchAllUsers,
} from "./redux/Counter/counter.actions"

function App() {
    // to read data from store
    const count = useSelector((state) => state.counter.count);
    const myName = useSelector((state) => state.counter.name);
    const Msg = useSelector(state => state.counter.Msg);

    const dispatch = useDispatch(); // to call defined actions

    // const handleIn = () => {
    //     dispatch(increaseCounter())
    // }

    useEffect(() => {
        dispatch(fetchAllUsers())
    }, [])

    const listUsers = useSelector(state => state.user.listUsers)
    const isLoading = useSelector(state => state.user.isLoading)
    const isError = useSelector(state => state.user.isError)

    return (
        <div className="App">
            <div>Count: {count} {myName}</div>
            {Msg && <div style={{ color: 'red' }}>{Msg}</div>}
            <button onClick={() => dispatch(increaseCounter())}>Increase Count</button>
            {/* <button onClick={handleIn}>Increase Count</button> */}
            <button onClick={() => dispatch(decreaseCounter())}>Decrease Count</button>
            <button onClick={() => dispatch(multiplyCounter())}>Multiply Count</button>
            {
                isError ?
                    <div>Sth wrong {`(#x#)`}, plz try again</div> :
                    isLoading ?
                        <p>Loading...</p> :
                        listUsers && listUsers.map((item, index) => (
                            <div key={index}>
                                <img src={item.url} alt={`user-${index}`} height='100' width='100' />
                            </div>
                        ))

            }
        </div>
    )
}

export default App;