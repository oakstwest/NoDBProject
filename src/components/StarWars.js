import React, { Component } from 'react'
import axios from 'axios'
class StarWars extends Component {
    constructor() {
        super()

        this.state = {
            char1: {},
            char2: {},
            char3: {},

        }
    }
    componentDidMount() {
        axios.get('https://swapi.co/api/people/1')
            .then(res => { this.setState({ char1: res.data }) }
            ).then(() => {
                axios.get('https://swapi.co/api/people/2')
                    .then(res => { this.setState({ char2: res.data }) }
                    )
                    .then(() => {
                        axios.get('https://swapi.co/api/people/3')
                            .then(res => { this.setState({ char3: res.data }) }
                            )

                    })
            })
    };

    render() {
        console.log(this.state)
        return (
            <div>
                <p>
                    {this.state.char1.name}
                    {this.state.char1.eye_color}
                    {this.state.char1.hair_color}
                </p>

                <p>
                    {this.state.char2.name}
                    {this.state.char2.eye_color}
                    {this.state.char2.hair_color}
                </p>

                <p>
                    {this.state.char3.name}
                    {this.state.char3.eye_color}
                    {this.state.char3.hair_color}
                </p>


            </div>

        )
    }
}


export default StarWars