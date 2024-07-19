import React, { useEffect } from 'react';
import './App.css';
import type { RootState, AppDispatch } from './redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/Counter/counterSlice'
import { fetchAllUsers } from './redux/User/userSlice'
import LazyLoad from 'react-lazyload';

function App() {
  const count = useSelector((state: RootState) => state.counter.value)
  const users = useSelector((state: RootState) => state.user.entities);
  const loading = useSelector((state: RootState) => state.user.loading);
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchAllUsers())
  }, [])

  return (
    <div className="App">
      <div>Count: {count}</div>
      <div>
        <button
          aria-label="Increment Amount value"
          onClick={() => dispatch(incrementByAmount(count))}
        >
          Increment Amount value
        </button>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
      <div>
        <h1>Users</h1>
        {
          loading === 'failed' ?
            <div>Sth wrong {`(#x#)`}, plz try again</div> :
            loading === 'pending' ?
              <p>Loading...</p> :
              loading === 'succeeded' ?
                <div>
                  {users.map((user) => (
                    <div key={user.id}>
                      <LazyLoad height={user.height} offset={100}>
                        <img src={user.url} alt="#" width='100' height='100' />
                      </LazyLoad>
                    </div>
                  ))}
                </div>
                : <></>
        }
      </div>
    </div>
  );
}

export default App;
