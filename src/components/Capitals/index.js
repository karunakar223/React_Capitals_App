import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {isCapital: countryAndCapitalsList[0].id}

  onChangeOption = event => {
    this.setState({isCapital: event.target.value})
  }

  getCapital = () => {
    const {isCapital} = this.state
    const activeCountry = countryAndCapitalsList.find(
      eachItem => eachItem.id === isCapital,
    )
    return activeCountry.country
  }

  render() {
    const {isCapital} = this.state
    const capital = this.getCapital(isCapital)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="main-heading">Countries And Capitals</h1>
          <p className="country-list">
            <select
              className="select-container"
              value={isCapital}
              onChange={this.onChangeOption}
            >
              {countryAndCapitalsList.map(eachCountry => (
                <option value={eachCountry.id} key={eachCountry.id}>
                  {eachCountry.capitalDisplayText}
                </option>
              ))}
            </select>
            is capital of which country?
          </p>
          <p className="value">{capital}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
