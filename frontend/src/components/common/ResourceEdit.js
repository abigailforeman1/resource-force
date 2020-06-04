import React from 'react'
import { resourceGetEdit, resourceEdit, getCategories } from '../../lib/api'

import Auth from '../../lib/auth'
import ResourceForm from '../common/ResourceForm'

class ResourceEdit extends React.Component {
  state = {
    data: {
      title: '',
      original_author: '',
      origin: '',
      year_of_creation: '',
      image: '',
      link: '',
      description: '',
      owner: {},
      categories: []
    },
    categoriesOnly: [],
    categoriesNames: []
  }

  async componentDidMount () {
    try {
      const resourceId = this.props.match.params.id
      const res = await resourceGetEdit(resourceId)
      const response = await getCategories()
      const names = response.data.map(category => category.name)
      // console.log((names.indexOf('Book')) + 1)
      this.setState({ data: res.data, categoriesOnly: response.data, categoriesNames: names })
    } catch (err) {
      this.props.history.push('./error')
    }
  }

  handleChange = e => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
    const data = { ...this.state.data, [e.target.name]: value }
    this.setState({ data })
  }

  handleSubmit = async e => {
    e.preventDefault()
    try {
      const resourceId = this.props.match.params.id
      const res = await resourceEdit(resourceId, { ...this.state.data }, {
          headers: { Authorization: `Bearer ${Auth.getToken()}` }
        }
      )
      this.props.history.push(`/resources/${resourceId}`)
    } catch (err) {
      console.log(err)
      this.props.history.push('./error')
    }
  }

  handleMultiChange = (selected, metaAction) => {
    const dropSelected = selected ? selected.map(item => item.value) : []
    
    const dropSelectedIndex = [this.state.categoriesNames.indexOf(dropSelected.toString()) + 1]
    console.log(dropSelectedIndex)
    // const data = { ...this.state.data, [metaAction.name]: (...dropSelectedIndex) }
    // console.log(data)
    // this.setState({ data })
  }

  render () {
    // {this.state.categories.map(category => {
    //   console.log(category.name)
    // })}

    return (
      <>
        <h1>Edit your resource</h1>

        <ResourceForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          data={this.state.data}
          categoriesOnly={this.state.categoriesOnly}
          categoriesNames={this.state.categoriesNames}
          handleMultiChange={this.handleMultiChange}
        />

      </>
    )
  }
}

export default ResourceEdit
