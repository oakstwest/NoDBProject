import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Fortune from './components/Fortune';
import Image from './components/Image';
import StarWars from './components/StarWars';
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

  //  // componentDidMount() {
  //     axios.get('/api/zoltar')
  //       .then(response => {
  //         console.log(response)
  //         this.setState({ zoltar: response.data })
  //       })
  //   }
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
    //     let mappedzoltar = this.state.zoltar.map((zoltar, i) => {
    //       return <div key={i}>{zoltar}</div>
    //     })
    // // 
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

        {/* <input name='getInput' onChange={e => this.handleChange(e)} />
        <input name='getInput' onChange={e => this.handleChange(e)} />
        <button onClick={() => this.getFortune}>Get your Fortune</button> */}
        <hr />
        {displayedFortune}
        <Image />
        <Image />
        <Image />
        <StarWars />
      </div>

    );

  };

};

export default App;
