import React, { Component } from "react";
import List from "./components/List";
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="container">
                    <h1 className="display-4 text-center mb-4">Shopping List</h1>
                    <List />
                </div>
            </div>
        );
    }
}

export default App;
 