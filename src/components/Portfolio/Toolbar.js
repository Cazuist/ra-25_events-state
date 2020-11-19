import { Component } from 'react';
import PropTypes from 'prop-types';

export default class Toolbar extends Component {
  static propTypes = {
    filters: PropTypes.arrayOf(PropTypes.string),
    selected: PropTypes.string,
    onSelectFilter: PropTypes.func,
  }

  onSelectFilter = (evt) => {
    const clickedFilter = evt.currentTarget.textContent;
    this.props.onSelectFilter(clickedFilter);
  }

  render() {
    const { filters, selected } = this.props;
    
    return (
      <div className="toolbar-box">
        {filters.map((filter) => 
          <div
            key={filter}
            onClick={this.onSelectFilter}
            className={`filter-tab${filter === selected ? ' selected-tab' : ''}`}>
              {filter}
          </div>)}
      </div>             
    );
  }
}
