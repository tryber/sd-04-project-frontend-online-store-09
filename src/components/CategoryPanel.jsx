import React, { Component } from 'react';
import * as api from '../services/api';

class CategoryPanel extends Component {
  constructor(props) {
    super(props);

    this.state = { categoryList: [] };
  }

  componentDidMount() {
    api.getCategories().then((categoryList) => this.setState({ categoryList }));
  }

  render() {
    const { categoryList } = this.state;
    const { selectedCategory } = this.props;
    return (
      <div>
        <p>Categorias: </p>
        {categoryList.map((line) => (
          <label key={line.id} htmlFor="input">
            <input
              type="radio"
              name="cat"
              value={line.id}
              data-testid="category"
              onChange={(e) => selectedCategory(e.target.value)}

            />
            {line.name}
            <br />
          </label>
        ))}
      </div>
    );
  }
}

export default CategoryPanel;
