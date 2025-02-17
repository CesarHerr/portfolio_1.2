import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'
import { useDispatch } from 'react-redux'
import confetti from 'canvas-confetti'
import '../styles/tictactoe.css'
import PropTypes from 'prop-types'
import { setOnAbout } from '../redux/projectSlice'

const Square = ({ children, updateBoard, isSelected, index }) => {
  const className = `square text-sm w-8 h-8 border border-myGray rounded-sm cursor-pointer
                    grid place-items-center ${isSelected ? `bg-myYellow` : ''}`

  const handleClick = () => {
    updateBoard(index)
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

Square.propTypes = {
  children: PropTypes.node,
  updateBoard: PropTypes.func,
  isSelected: PropTypes.bool,
  index: PropTypes.number
}

function TicTacToe() {
  const dispatch = useDispatch()
  const { ref: refAbout, inView: inViewAbout } = useInView()
  const turns = {
    X: '❌',
    O: '⭕'
  }

  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(turns.X)
  const [winner, setWinner] = useState(null)
  const [isGameInProgress, setIsGameInProgress] = useState(true)

  const winnerCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

  const checkWinner = boardCheck => {
    for (let i of winnerCombos) {
      const [a, b, c] = i
      if (
        boardCheck[a] &&
        boardCheck[a] === boardCheck[b] &&
        boardCheck[a] === boardCheck[c]
      ) {
        return boardCheck[a]
      }
    }
    return null
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(turns.X)
    setWinner(null)
    setIsGameInProgress(true)
  }

  const checkEndGame = newBoard => {
    return newBoard.every(square => square !== null)
  }

  const { t } = useTranslation()

  useEffect(() => {
    const performComputerMove = () => {
      if (turn === turns.O && isGameInProgress) {
        const emptySquares = board.reduce((acc, val, idx) => {
          if (val === null) acc.push(idx)
          return acc
        }, [])

        if (emptySquares.length > 0) {
          const randomIndex =
            emptySquares[Math.floor(Math.random() * emptySquares.length)]
          updateBoard(randomIndex)
        }
      }
    }
    setTimeout(() => {
      performComputerMove()
    }, 700)
  }, [board, turn, isGameInProgress, turns.O])

  const updateBoard = index => {
    if (board[index] || winner || !isGameInProgress) return

    const newBoard = [...board]
    newBoard[index] = turn

    setBoard(newBoard)

    const newTurn = turn === turns.X ? turns.O : turns.X
    setTurn(newTurn)

    const newWinner = checkWinner(newBoard)

    if (newWinner) {
      confetti()
      setWinner(newWinner)
      setIsGameInProgress(false)
    } else if (checkEndGame(newBoard)) {
      setWinner(false)
    }
  }

  useEffect(() => {
    dispatch(setOnAbout(inViewAbout))
  }, [inViewAbout, dispatch])

  return (
    <section className='w-fit mx-auto overflow-hidden' id='playGround'>
      <div ref={refAbout} className='flex mt-10 justify-center'>
        <div className='flex justify-center gap-2 w-full'>
          <p className='text-xs font-bold text-myBlue -rotate-12 animate-pulse curs'>
            {t('ticTacToe.message1')}
          </p>
          <p className='text-xs font-bold text-myBlue rotate-12 animate-pulse-slow'>
            {t('ticTacToe.message2')}
          </p>
        </div>
      </div>
      <div className='grid place-content-center'>
        <div className='rotate-12 grid grid-cols-3 gap-1 mt-3 mb-7 place-items-center '>
          {board.map((square, index) => {
            return (
              <Square key={index} index={index} updateBoard={updateBoard}>
                {square}
              </Square>
            )
          })}
        </div>
      </div>
      <div className='flex p-1 justify-center gap-2'>
        <Square isSelected={turn === turns.X}>{turns.X}</Square>
        <Square isSelected={turn === turns.O}>{turns.O}</Square>
      </div>
      {winner !== null && (
        <div className='fixed w-full h-screen top-0 left-0 grid place-items-center bg-myBlue z-50 opacity-0.9'>
          <div className='text-4xl text-myYellow flex flex-col justify-around h-3/6'>
            <h2>
              {' '}
              {winner === false
                ? t('ticTacToe.draw')
                : t('ticTacToe.winner')}{' '}
            </h2>

            <header className='win'>
              {winner && <Square>{winner}</Square>}
            </header>
            <footer>
              <button
                className='mt-20 p-5 rounded cursor-pointer bg-transparent'
                onClick={resetGame}>
                {t('ticTacToe.new')}
              </button>
            </footer>
          </div>
        </div>
      )}
    </section>
  )
}

export default TicTacToe
