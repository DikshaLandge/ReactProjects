import React from 'react'
import { Link } from 'react-router-dom'

const ExploreCard = ({ data }) => {
  return (
    <>
      { data.map(list => (
        <div key={ list.id }>
          <h4>Name: <Link to={`/explore/${list.name}`}>{list.name}</Link></h4>
        </div>
      ))}
    </>
  )
}

export default ExploreCard;