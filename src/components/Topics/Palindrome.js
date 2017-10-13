import React, {Component} from 'react';

class Palindrome extends Component {
    constructor() {
        super();
        this.state = {
          palindrome: "",
          userInput: ""
        }
      }
    
      palCheck(str) {
        let arr = str.toLowerCase().split("");

        console.log(this.state.userInput);
        console.log(arr);
        console.log(arr.reverse().join());

        arr.join("") === arr.reverse().join("") ? this.setState({palindrome: "YES!"}) : this.setState({ palindrome: "NO!"});
      }

      render() {
        return (
          <div className="puzzleBox filterStringPB">
            <h4>Palindrome</h4>
            <input
              className="inputLine"
              onChange={e => {
                this.setState({ userInput: e.target.value });
              }}
            />
            <button
              className="confirmationButton"
              onClick={() => {
                this.palCheck(this.state.userInput);
              }}
            >
              Click here to check if your string is a palindrome!
            </button>
            <span className="resultsBox">
             {this.state.palindrome}
            </span>
          </div>
        );
      }
}

export default Palindrome;