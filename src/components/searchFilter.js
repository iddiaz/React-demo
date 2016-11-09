import React, { Component, PropTypes } from 'react'

class SearchFilter extends Component {
  constructor (...args) {
    super(...args)

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit (e) {
    e.preventDefault()
    this.props.onFilter({
      text: this.input.value
    })
  }

  handleChange (e) {
    this.props.onFilter({
      text: this.input.value
    })
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <form onSubmit={this.handleSubmit}>
            <div className='input-field col s12'>
              <input onChange={this.handleChange}  ref={(node) => this.input = node} id='search' type='search' value={this.props.filter} required />
              <label htmlFor='search'><i className='material-icons'>search</i></label>
              <i className='material-icons'>close</i>
            </div>
          </form>
        </div>
      </nav>
    )
  }
}

SearchFilter.propTypes = {
  onFilter: PropTypes.func
}

export default SearchFilter

