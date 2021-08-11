
// const ACTIONS = {
//   INCREMENT: "increment",
//   DECREMENT: "decrement"
// }

// function reducer(state, action) {
//   if (action.type === ACTIONS.INCREMENT) {
//     return { count: state.count + 1 }
    
//   } else if (action.type === ACTIONS.DECREMENT) {
//     return { count: state.count - 1 }
//   } else {
//     return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, {count: 0});

//   function incrementCount() {
//     dispatch({ type: "increment" });
//   }
  
//   function decrementCount() {
//     dispatch({ type: "decrement" });
//   }

//   return (
//     <div style={{display: "flex", padding: "100px"}}>
//     <button onClick={decrementCount}>-</button>
//     <p>{state.count}</p>
//     <button onClick={incrementCount}>+</button>

//     </div>
//   );
// }