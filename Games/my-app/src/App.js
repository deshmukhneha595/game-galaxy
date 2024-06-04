import './App.css'
import axios from 'axios'

function App() {
  const startTicTacToe = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/run-tictactoe')
      console.log(response.data.message)
    } catch (error) {
      console.error('Error starting Tic Tac Toe:', error)
    }
  }

  const startConnector = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/run-connect')
      console.log(response.data.message)
    } catch (error) {
      console.error('Error starting Tic Tac Toe:', error)
    }
  }
  const startDino = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/run-dino')
      console.log(response.data.message)
    } catch (error) {
      console.error('Error starting Tic Tac Toe:', error)
    }
  }

  const startSnake = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/run-snake')
      console.log(response.data.message)
    } catch (error) {
      console.error('Error starting Tic Tac Toe:', error)
    }
  }

  const startSandL = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:5000/run-sandl')
      console.log(response.data.message)
    } catch (error) {
      console.error('Error starting Tic Tac Toe:', error)
    }
  }
  return (
    <div className="App">
      <div style={{ backgroundColor: '#002379' }}>
        <div
          style={{
            color: '#FFFAE6',
            fontSize: '56px',
            padding: '10px',
            fontFamily: 'fantasy',
            fontWeight: '100',
          }}
        >
          GAMES GALAXY
        </div>
      </div>
      <div className="games_grid">
        <div onClick={startTicTacToe} className="game">
          <img className="img" src="/static/tic-tac-toe.png" alt="" />
        </div>

        <div onClick={startConnector} className="game">
          <img className="img" src="/static/connector.png" alt="" />
        </div>
        <div onClick={startDino} className="game">
          <img className="img" src="/static/dino.jpg" alt="" />
        </div>
        <div onClick={startSnake} className="game">
          <img className="img" src="/static/snake.png" alt="" />
        </div>
        <div onClick={startSandL} className="game">
          <img className="img" src="/static/snake_ladder.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default App
