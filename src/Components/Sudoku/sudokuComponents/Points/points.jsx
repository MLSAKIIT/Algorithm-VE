import React from "react";
import { Component } from "react";
import {pnt} from './pointsjs';
import './points.css';

export default class Points extends Component
{
    componentDidMount(){
        pnt();
    }
    render(){
        return(
            <div class="sudoku-count">0</div>  
        );
    }
}