import React, { Component } from 'react'
import Input from '../components/Input'
import { serializeValue } from '../utils'

class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: '',
      showResult: false
    }
  }

  onInputChange = (e) => {
    let valueLowerCase = e.target.value.toLowerCase()
    this.setState({
      value: valueLowerCase,
      showResult: false
    })
  }

  onEnterPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({ showResult: true })
    }
  }

  renderListFraction () {
    let objectOfFraction = serializeValue(this.state.value)
    if (typeof objectOfFraction === 'string') {
      return <h3 className='result'>{objectOfFraction}</h3>
    } else {
      return (
        <ul className='result'>
          {objectOfFraction.map(data => {
            return <li key={data.fraction}>{data.total} x Rp{data.fraction} </li>
          }) }
        </ul>
      )
    }
    
  }

  render () {
    return (
      <>
        <div className='header'>
          <h2>Tokopedia Coding Test</h2>
          <p>Calculate minimun number of rupiahs</p>
        </div>
        <label htmlFor='rupiah'>Input value:</label>
        <Input type='text' id='rupiah' onChange={this.onInputChange} onKeyPress={this.onEnterPress} />
        {this.state.showResult && this.renderListFraction()}
      </>
    )
  }
}

export default Main
