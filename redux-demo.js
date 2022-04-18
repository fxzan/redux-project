const redux = require("redux");

function counterReducer(state = { counter: 0 }, action) {
    if(action.type === "DECREMENT") return {counter: state.counter - 1}

    return {
        counter: state.counter + 1
    }
}

const store = redux.createStore(counterReducer);

function counterSubsriber() {
    const latestState = store.getState();
    console.log(latestState);
};


store.subscribe(counterSubsriber);

store.dispatch({ type: "INCREMENT" })
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });

store.dispatch({type: "DECREMENT"})