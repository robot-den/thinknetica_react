import React from 'react';
import ReactDOM from 'react-dom';
import c3 from 'c3';
import _ from 'lodash';


class PieChart extends React.Component {
  componentDidMount() {
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

  prepareData({ posts }) {
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

export default PieChart;
