import './App.css';
import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {regis} from './api/Reg'
const API = 'http://20.244.56.144/train/';

function App() {
    return (
        <div>
            <h1>Registration</h1>
            <regis/>
        </div>
    );
}

export default App;
