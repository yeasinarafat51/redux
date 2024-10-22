
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counnterSlice.jsx'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  console.log(count)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button className='btn border-t-cyan-700'
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <br />
        <span>{count}</span>
        <br />
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}