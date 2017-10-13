import React, {Component} from 'react';

class FilterString extends Component {
    constructor() {
        super();
        this.state = {
          unfilteredArray: [
              " Carl", " Sue", " Mario", " Deeno", " Kelly", " George", " Hallie", " Karolina", " Dana"
          ],
          filteredArray: [],
          userInput: ""
        }
      }
    
      filterPeople(str) {
        this.setState({ filteredArray: this.state.unfilteredArray.filter(val => val.includes(str)) + " "});
      }

      render() {
        return (
          <div className="puzzleBox filterStringPB">
            <h4>Filter String</h4>
            <span className="puzzleText">
              Unfiltered: {this.state.unfilteredArray}
            </span>
            <input
              className="inputLine"
              onChange={e => {
                this.setState({ userInput: e.target.value.toLowerCase() });
              }}
            />
            <button
              className="confirmationButton"
              onClick={() => {
                this.filterPeople(this.state.userInput);
              }}
            >
              Click here to filter!
            </button>
            <span className="resultsBox filterStringRB">
              Filtered: {this.state.filteredArray}
            </span>
          </div>
        );
      }
}

export default FilterString;