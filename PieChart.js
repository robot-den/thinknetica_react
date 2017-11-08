class PieChart extends React.Component {
  componentDidMount() {
    const columns = this.prepareData(this.props)
    this.chart = c3.generate({
      bindto: ReactDOM.findDOMNode(this.refs.chart),
      data: {
        columns: columns,
        type: 'pie'
      }
    })
  }

  componentWillUnmount() {
    this.chart = this.chart.destroy();
  }

  componentWillReceiveProps(nextProps) {
    const columns = this.prepareData(nextProps);
    this.chart.load({columns: columns});
  }

  prepareData({ posts }) {
    let columns = [];
    _.forEach(
      posts,
      (post) => {
        columns.push([post.description, post.meta.count_of_likes])
      }
    );
    return columns;
  }

  render() {
    return(
      <div ref='chart' />
    )
  }
}
