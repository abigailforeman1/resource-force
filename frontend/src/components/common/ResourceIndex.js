import React from 'react'
import { Link } from 'react-router-dom'
import { getResources } from '../../lib/api'

class ResourceIndex extends React.Component {
  state = {
    resources: []
  }

  async componentDidMount () {
    try {
      const res = await getResources()
      console.log(res.data)
      this.setState({ resources: res.data })
    } catch (err) {
      this.props.history.push('./error')
    }
  }

  render () {
    const resources = this.state.resources
    if (!this.state.resources) return null
    return (
      <>
        <h1>resources index</h1>

        <div>
          {resources.map(resource => {
            return (
              <div className="resource-show-card" key={resource.id}>
              <Link to={`/resources/${resource.id}`} style={{ textDecoration: 'none' }}>
                  <h1 className="resource-show-title">{resource.title}</h1>
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
                  <img className="resource-show-image" src={resource.image} alt={resource.name} />

                  <hr />
              </Link>
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default ResourceIndex
