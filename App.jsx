import { useState } from 'react'
import './App.css'

/**
 * Calculate the winner of the board.
 * @param {(string|null)[]} squares
 * @returns {{winner: string, line: number[]} | null}
 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line: lines[i] }
    }
  }
  return null
}

/**
 * Square component
 * @param {{value: string|null, onClick: (e: React.MouseEvent<HTMLButtonElement>) => void}} props
 */
function Square({ value, onClick }) {
  const displayValue = value === 'X' ? '❌' : value === 'O' ? '⭕' : ''
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  )
}

/**
 * Board component
 * @param {{squares: (string|null)[], onClick: function}} props
 */
function Board({ squares, onClick }) {
  /**
   * @param {number} i
   */
  function renderSquare(i) {
    return <Square key={i} value={squares[i]} onClick={() => onClick(i)} />
  }

  return (
    <div>
      <div className="board-row">{renderSquare(0)}{renderSquare(1)}{renderSquare(2)}</div>
      <div className="board-row">{renderSquare(3)}{renderSquare(4)}{renderSquare(5)}</div>
      <div className="board-row">{renderSquare(6)}{renderSquare(7)}{renderSquare(8)}</div>
    </div>
  )
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  const result = calculateWinner(squares)
  const winner = result ? result.winner : null
  const isDraw = !winner && squares.every(Boolean)

  /**
   * @param {number} i
   */
  function handleClick(i) {
    if (squares[i] || winner) return
    const next = squares.slice()
    next[i] = xIsNext ? 'X' : 'O'
    setSquares(next)
    setXIsNext(!xIsNext)
  }

  function reset() {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }

  let status
  if (winner) {
    status = `Winner: ${winner}`
  } else if (isDraw) {
    status = "It's a draw"
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`
  }

  return (
    <div className="game">
      <div>
        <h1>Tic-Tac-Toe</h1>
        <div className="status">{status}</div>
        <Board squares={squares} onClick={handleClick} />
        <div style={{ marginTop: 12 }}>
          <button onClick={reset}>Restart</button>
        </div>
      </div>
    </div>
  )
}

export default App
