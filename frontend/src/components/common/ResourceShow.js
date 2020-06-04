import React from 'react'
import { Link } from 'react-router-dom'

import { getSingleResource } from '../../lib/api'

class ResourceShow extends React.Component {
  state = {
    resource: null
  }

  async componentDidMount () {
    try {
      const resourceId = this.props.match.params.id
      const res = await getSingleResource(resourceId)
      console.log(res.data)
      this.setState({ resource: res.data })
    } catch (err) {
      this.props.history.push('./error')
    }
  }

  render () {
    const resource = this.state.resource
    const resourceId = this.props.match.params.id
    if (!this.state.resource) return null
    return (
      <>
        <h1>show page</h1>

        <h1>{resource.title}</h1>

        {resource.categories.map(category => {
          return (
            <div key={category.id}>
              <h1>{category.name}</h1>
            </div>
          )
        })}

        <p>{resource.origin}</p>
        <p>{resource.original_author}</p>
        <p>{resource.year_of_creation}</p>
        <p>{resource.description}</p>
        <a href={resource.link} target='_blank' rel="noopener noreferrer">Link to resource</a>
        <img className="resource-show-image" src={resource.image} alt={resource.name} />

        {resource.comments.map(comment => {
          return (
            <div key={comment.id}>
              <p>Comment: {comment.text}</p>
              <p>Owner: {comment.owner.username}</p>
              <p>Rating /5: {comment.rating}</p>
              <p>Created: {comment.created_at}</p>
            </div>
          )
        })}

        <p>This was posted by: {resource.owner.username}</p>

        <Link to={`/resources/${resourceId}/edit`}><button>edit</button></Link>
      </>
    )
  }
}

export default ResourceShow
