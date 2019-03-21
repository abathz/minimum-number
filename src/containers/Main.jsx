import React, { Component } from 'react'
import Input from '../components/Input'

class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: '',
      result: '',
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

  serializeValue() {
    let arr = []
    let rupiahFraction = [100000, 50000, 20000, 10000, 5000, 1000, 500, 100, 50]
    let regex = /([a-zA-Z\ ]*)(\d*[\,\ \.]\d*|\d+)([a-zA-Z]+|\,\d*|\d*)/g
    let resultRegex = regex.exec(this.state.value)

    if (resultRegex === null || resultRegex[2].search(/[\,\ ]/g) > 0 || resultRegex[3] === 'rp') {
      return 'Input invalid!'
    } else {
      let rupiah = Number(resultRegex[2].replace(/\./g, ''))
      for (let i = 0; i < rupiahFraction.length; i++) {
        if (rupiah >= rupiahFraction[i]) {
          let fraction = rupiah / rupiahFraction[i];
          rupiah = rupiah % rupiahFraction[i]
          arr.push({ fraction: rupiahFraction[i], total: Math.floor(fraction) })
        }
      }
    }

    return arr
  }

  renderListFraction () {
    let objectOfFraction = this.serializeValue()
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
        <Input type='text' onChange={this.onInputChange} onKeyPress={this.onEnterPress} />
        {this.state.showResult && this.renderListFraction()}
      </>
    )
  }
}

export default Main
