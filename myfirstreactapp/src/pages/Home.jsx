import React from 'react';
import '../App.css';
import {
    Link
} from "react-router-dom";

export default function Home() {
    return(
    <div className="App">
        <header className="App-header">
            <p>
                Hello World!
            </p>
            <Link to="/newPage">
                    <button>Next Page</button>
            </Link>
        </header>
    </div>
  );
}
