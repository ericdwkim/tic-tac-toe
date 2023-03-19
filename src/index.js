import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Child components - 9 `Square` child components get created
// sets state to null until modified via onClick event listener
// sends new states up to parent `Board` component via `props` 
// FYI: `super(props)` __must__ be called within a subclass constructor to ensure that `this` is defined; see https://overreacted.io/why-do-we-write-super-props/ for more info
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    }
  }
  render() {
    return (
      <button 
          className="square" 
          onClick={ () => this.setState({value: 'X'})}
          >
        {this.state.value}
      </button>
    );
  }
}

// Parent `Board` component; passes `value` prop to `Square` children components to update states
// keeps chidren components in sync 
class Board extends React.Component {
  constructor() {
    super();
    this.state = {
      squares: Array(9).fill(null), // `squares` array of 9 cells with default value to `null`
    };
  }

  renderSquare(i) {
    return <Square value={this.state.squares[i]} // passing prop `value` back to Square
    // FYI: `this` is allowed to be used in this parent component
    // as constructor in Square subclass contained `super(props)` with a default state to null
    onClick = { () => this.handleClick(i)}
    // passing prop `onClick` back to Square component
    // `onClick` is a fn that Square can call
    />
  };

  render() {
    const status = 'Next player: X';

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);

