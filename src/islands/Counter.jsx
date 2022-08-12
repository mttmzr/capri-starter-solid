import { createSignal } from 'solid-js'

export default function Counter({ start = 0 }) {
  const [counter, setCounter] = createSignal(start)

  return (
    <div class="counter" data-testid="counter">
      <button onClick={() => setCounter((c) => c - 1)}>-</button>
      <span>{counter()}</span>
      <button onClick={() => setCounter((c) => c + 1)}>+</button>
    </div>
  )
}
