import React, { Component } from 'react';
import './Converter.css'

export default class Converter extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            currencyA_value: "",
            currencyB_value: 0,
        }

        this.converter = this.converter.bind(this);
    }

    converter(){
        let apiKey = '1cbdacf6b3f12298dac3';
        let from_to = `${this.props.currencyA}_${this.props.currencyB}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${from_to}&compact=ultra&apiKey=${apiKey}`;

        fetch(url)
        .then(res => {
            return res.json();
        })
        .then(json => {
            let change = json[from_to];
            let currencyB_value = (parseFloat(this.state.currencyA_value) * change).toFixed(2);
            this.setState({currencyB_value});
            console.log(this.state);
        })
    }
    
    render() {
        return (
            <div className="converter">
                <h2>{this.props.currencyA} para {this.props.currencyB}</h2>
                <input type="text" onChange={e => this.setState({currencyA_value:e.target.value})}/>
                <input id="button" type="button" value="Converter" onClick={this.converter}/>
                <h2>{this.state.currencyB_value}</h2>
            </div>
        )
    }
}