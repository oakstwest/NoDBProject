import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Fortune from './components/Fortune';
import Image from './components/Image';
import Jokes from './components/Jokes';

class App extends Component {
  constructor() {
    super();
    this.state = {
      zoltar: [],
      zoltarInput: '',
      createInput: '',
      getInput: '',
      createFortuneInput: '',
      customFortune: [],

    }
    this.deleteFortune = this.deleteFortune.bind(this)


  }


  getFortune() {
    axios.get('/api/zoltar/${this.}')
  }

  deleteFortune(id) {
    console.log(id)
    axios.delete(`/api/zoltar/${id}`)
      .then((fortunes) => {
        this.setState({
          customFortune: fortunes.data
        })

      })
  }


  createFortune() {
    axios.post('/api/zoltar', { newFortune: this.state.createInput })
      .then(fortunes => {
        this.setState({
          customFortune: fortunes.data
        })
      })
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick() {
    axios.get(`/api/zoltar/${this.state.zoltarInput[0]}`)
      .then(response => {
        this.setState({
          zoltar: response.data
        })
      })
  }


  render() {

    let displayedFortune = this.state.customFortune.map((fortune, i) => {
      return (
        <Fortune fortune={fortune} onDelete={this.deleteFortune} id={i} />

      )
    })
    return (
      <div className="App">
        <input name='zoltarInput' value={this.state.input} onChange={e => this.handleChange(e)} />

        <button onClick={() => this.handleClick()}>Zoltar Speaks</button>

        <p>{this.state.zoltar}</p>
        <div className="zoltar" ></div>
        <hr />

        <input name='createInput' onChange={e => this.handleChange(e)} type="text" value={this.state.createInput} />

        <button onClick={() => this.createFortune()}>Create Your Fortune</button>
        <hr />

        <button onClick={() => this.deleteFortune()}>Delete This Misfortune </button>

        <hr />
        {displayedFortune}
        <Jokes />
        <Image />
        <Image />
        <Image />

      </div>

    );

  };

};

export default App;
