import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  render() {
    if (!this.props.stream) {
      return <h3>Loading</h3>;
    }

    const { title, description } = this.props.stream;
    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
}

const mapStateToPros = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
  };
};

export default connect(mapStateToPros, { fetchStream })(StreamShow);
