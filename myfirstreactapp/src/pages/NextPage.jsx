import '../App.css';
import React from 'react';
import {
    Link
} from "react-router-dom";



export default function Page() {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Welcome to New Page !
                </p>
                <Link to="/">
                    <button>Go Back</button>
                </Link>
            </header>
        </div>
    );
}