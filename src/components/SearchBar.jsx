import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { searchValue: '' };
  }

  render() {
    const { searchValue } = this.state;
    return (
      <div>
        <input
          value={searchValue}
          data-testid="query-input"
          onChange={(e) => this.setState({ searchValue: e.target.value })}
        />
        <p data-testid="home-initial-message">
          {searchValue.length === 0 && 'Digite algum termo de pesquisa ou escolha uma categoria.'}
        </p>
      </div>
    );
  }
}

export default SearchBar;
