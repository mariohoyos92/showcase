import React, {Component} from 'react';

class EvenAndOdd extends Component {
    constructor(){
        super();
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }
    }

    arraySorter(str){
        let arr = str.split(",");
        let evenArr = [];
        let oddArr = [];

        for(let i = 0; i <arr.length; i++){
            arr[i] % 2 === 0 ? evenArr.push(arr[i]) : oddArr.push(arr[i]);
        }

        this.setState({ evenArray: evenArr, oddArray: oddArr});

    }
    render(){
        return(
            <div className= "puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>
                <input className= "inputLine" onChange= { (e) => { this.setState({userInput: e.target.value})} }></input>
                <button className= "confirmationButton" onClick= { () => { this.arraySorter(this.state.userInput) }  }>Click here to sort!</button>
                <span className="resultsBox">Evens:{ " " + this.state.evenArray.join(",")} </span>
                <span className="resultsBox">Odds:{ " " + this.state.oddArray.join(",") }</span>
            </div>    
        )
    }
}

export default EvenAndOdd;