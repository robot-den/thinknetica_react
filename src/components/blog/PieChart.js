import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import c3 from 'c3';
import _ from 'lodash';


class PieChart extends React.Component {
  componentDidMount() {
    // don't know why, but we can't send this.props.posts to prepareData - got undefined inside method
    const columns = this.prepareData(this.props);
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        columns,
        type: 'pie'
      }
    });
  }

  componentWillUnmount() {
    this.chart = this.chart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    const columns = this.prepareData(nextProps);
    this.chart.load({columns});
  }

  prepareData(props) {
    const posts = props.posts;
    const columns = [];
    _.forEach(
      posts,
      (post) => {
        columns.push([post.description, post.meta.countOfLikes]);
      }
    );
    return columns;
  }

  render() {
    return (
      <div ref='chart' />
    );
  }
}

PieChart.defaultProps = {
  posts: []
};

PieChart.propTypes = {
  posts: PropTypes.array
};

export default PieChart;
