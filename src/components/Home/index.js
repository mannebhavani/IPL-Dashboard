// Write your code here
import Loader from 'react-loader-spinner'
import {Component} from 'react'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = {
    isLoading: true,
    teamList: [],
  }

  componentDidMount() {
    this.getResponse()
  }

  getResponse = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data
    console.log(data)
    const newList = teams.map(eachTeam => ({
      id: eachTeam.id,
      name: eachTeam.name,
      teamImageUrl: eachTeam.team_image_url,
    }))
    this.setState({teamList: newList, isLoading: false})
  }

  render() {
    const {isLoading, teamList} = this.state

    return (
      <>
        <div className="main-container">
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />
            </div>
          ) : (
            <>
              <div className="logo-container">
                <img
                  className="logo-image"
                  src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                  alt="ipl logo"
                />
                <h1 className="main-heading">IPL dashboard</h1>
              </div>
              <ul className="dash-list">
                {teamList.map(eachValue => (
                  <TeamCard key={eachValue.id} teamItem={eachValue} />
                ))}
              </ul>
            </>
          )}
        </div>
      </>
    )
  }
}
export default Home
