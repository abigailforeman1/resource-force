import React from 'react'
import Select from 'react-select'

const ResourceForm = ({
  data,
  categoriesOnly,
  categoriesNames,
  handleChange,
  handleSubmit,
  handleMultiChange
}) => {

    const categoryOptions =
    categoriesNames.map(item => {
      return (
        { value: item, label: item }
      )
    })

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Title</h1>
        <input
          placeholder='Title'
          name='title'
          onChange={handleChange}
          value={data.title}
        />

        <h1>Origin</h1>
        <input
          placeholder='Origin'
          name='origin'
          onChange={handleChange}
          value={data.origin}
        />

        <h1>Original Author</h1>
        <input
          placeholder='Original Author'
          name='original_author'
          onChange={handleChange}
          value={data.original_author}
        />

        <h1>Year Of Creation</h1>
        <input
          placeholder='Year Of Creation'
          name='year_of_creation'
          onChange={handleChange}
          value={data.year_of_creation}
        />

        <h1>Description</h1>
        <input
          placeholder='Description'
          name='description'
          onChange={handleChange}
          value={data.description}
        />

        <h1>Link</h1>
        <input
          placeholder='Link'
          name='link'
          onChange={handleChange}
          value={data.link}
        />

        <h1>Image</h1>
        <input
          placeholder='Image'
          name='image'
          onChange={handleChange}
          value={data.image}
        />

        {/* we want to have a list of all the category names and check if the category name of this resource is included in the list of all categories */}

        <h1>Categories</h1>
        <Select
          options={categoryOptions}
          isMulti
          name='categories'
          value={categoryOptions.filter(category => data.categories.includes(category.value) )}
          onChange={handleMultiChange}
        />

        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default ResourceForm
