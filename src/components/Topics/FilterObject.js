import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      unfilteredArray: [
        {
          name: "Jimmy Joe",
          title: "Hack0r",
          age: 12
        },
        {
          name: "Jeremy Schrader",
          age: 24,
          hairColor: "brown"
        },
        {
          name: "Carly Armstrong",
          title: "CEO"
        }
      ],
      filteredArray: [],
      userInput: ""
    }
  }

  filterPeople(str) {
    this.setState(
      {
        filteredArray: this.state.unfilteredArray.filter(val =>
          val.hasOwnProperty(str)
        )
      },
      () => console.log(this.state.filteredArray)
    );
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          Unfiltered: {JSON.stringify(this.state.unfilteredArray, null, 10)}
        </span>
        <input
          className="inputLine"
          onChange={e => {
            this.setState({ userInput: e.target.value });
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
        <span className="resultsBox filterObjectRB">
          Filtered Array: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}

export default FilterObject;
