import React from "react";

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = { term: "" };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    // TODO: Make sure we call
    // callback from parent component
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form" action="">
          <div className="field">
            <label htmlFor="input">Search Video</label>
            <input
              placeholder="Search!"
              value={this.state.term}
              id="input"
              type="text"
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
