// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const Teamcard = props => {
  const {teamItem} = props
  const {id, name, teamImageUrl} = teamItem

  return (
    <li className="list-item">
      <Link to={`/team-matches/${id}`} className="link">
        <img className="image-url" src={teamImageUrl} alt={`${name}`} />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default Teamcard
