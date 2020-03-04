import React, { useState, useMsgError } from "react";
import Btn from "./Button/myButton.js";
import "./App.css";

let App = () => {

//Object Operator  
  const [number, setNumber] = useState(0)
  const [msgError, setMsgError] = useState("Error")

  const increment = () => {
    console.log(number,'<======')
    if (number >= 0) {

      let newNum = number + 1;
      setNumber(newNum);
      setMsgError('');
      
    } 
  };

  const decrement = () => {
    if(number > 0){
      let newNum = number - 1
      setNumber(newNum);
    }else{
      setMsgError('Batas');
    }
  };

  return (
    <div className="App">
      <div style={{ margin: "0 auto", width: "50px", height: "50px" }}>
        {number}
      </div>
      <Btn crB="btn btn-lg btn-info" updateNum={increment} sign="+" />
      <Btn crB="btn btn-lg btn-danger" updateNum={decrement} sign="-" />
      <div>{msgError}</div>
    </div>
  );

  //Hook spreed operator
  // const [state, setState] = useState({
  //   number : 0,
  //   msgError : 'error',
  //   rErrorCom : false
  // })

  
  // const increment = () => {
  //   console.log(state.number,'<======')
  //   if (state.number >= 0) {

  //     let newNum = state.number + 1;
  //     setState({
  //       ...state, 
  //       number : newNum, 
  //       rErrorCom : false,
  //       msgError : ''
  //     });
      
  //   } 
  // };

  // const decrement = () => {
  //   if(state.number > 0){
  //     let newNum = state.number - 1
  //     setState({
  //        ...state,
  //        number : newNum,

  //     });
  //   }else{
  //     setState({
  //       ...state,
  //       number : state.number,
  //       rErrorCom : true,
  //       msgError : state.msgError
  //     });
      
  //   }
  // };

  // return (
  //   <div className="App">
  //     <div style={{ margin: "0 auto", width: "50px", height: "50px" }}>
  //       {state.number}
  //     </div>
  //     <Btn crB="btn btn-lg btn-info" updateNum={increment} sign="+" />
  //     <Btn crB="btn btn-lg btn-danger" updateNum={decrement} sign="-" />
  //     <div>{state.msgError}</div>
  //     {/* {
  //             this.state.number < 0 ? <div>{this.state.messageRes}</div> : null
  //           } */}
  //   </div>
  // );
};

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       number: 0,
//       messageRes:""
//     };
//   }

//   increment = () => {

//     if (this.state.number >= 0) {
//       this.setState({
//         number: this.state.number + 1,
//         messageRes: ""
//       });
//     }else if(this.state.number == 0) {
//       // <div>{this.state.messageRes}</div>
//       this.setState({
//         number: this.state.number,
//         messageRes: "Batas Pengurangan Angka"
//       });
//    }

//   };

//   decrement = () => {
//     if (this.state.number > 0) {
//       this.setState({
//         number: this.state.number - 1,
//         messageRes: ""
//       });
//     }else if(this.state.number == 0) {
//       // <div>{this.state.messageRes}</div>
//       this.setState({
//         number: this.state.number,
//         messageRes: "Batas Pengurangan Angka"
//       });
//    }
//   };
//   render() {
//     return (
//       <div className="App">
//         <div style={{ margin:"0 auto",width: "50px", height: "50px" }}>{this.state.number}</div>
//         <Btn crB={"btn-info"} updateNum={this.increment} sign="+" />
//         <Btn  crB={"btn-info"} updateNum={this.decrement} sign="-" />
//         <div>{this.state.messageRes}</div>
//         {/* {
//           this.state.number < 0 ? <div>{this.state.messageRes}</div> : null
//         } */}
//       </div>
//     );
//   }
// }

export default App;
