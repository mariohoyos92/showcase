import React, {Component} from 'react';

class Sum extends Component {
    constructor() {
        super();
        this.state = {
          number1: 0,
          number2: 0,
          sum: null
        }
      }
    
      sum(num1, num2) {
          

          this.setState({ sum: parseInt(num1,10) + parseInt(num2,10)});
        
      }

      render() {
        return (
          <div className="puzzleBox sumPB">
            <h4>Sum</h4>
            <input
              className="inputLine"
              onChange={e => {
                this.setState({ number1: e.target.value });
              }}
            />
            <input
              className="inputLine"
              onChange={e => {
                this.setState({ number2: e.target.value });
              }}
            />
            <button
              className="confirmationButton"
              onClick={() => {
                this.sum(this.state.number1, this.state.number2);
              }}
            >
              Click here to sum up the numbers!
            </button>
            <span className="resultsBox">
             {this.state.sum}
            </span>
          </div>
        );
      }
}

export default Sum;