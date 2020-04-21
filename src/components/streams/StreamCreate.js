import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: "someValue",
    };
  }

  render() {
    return (
      <div>
        <h3>Create a stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  componentDidMount() {
    this.setState({
      someKey: "otherValue",
    });
  }
}

export default connect(null, {
  createStream,
})(StreamCreate);
