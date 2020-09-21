import React from 'react';
import commentBox from 'commentbox.io';

class Commentbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      articleId: props.articleId,
    }
  }
  componentDidMount() {
    this.removeCommentBox = commentBox('5768853690777600-proj');
  }
  componentWillUnmount() {
    this.removeCommentBox();
  }

  render() {
    return (
      <div className="commentbox" id={this.state.articleId} />
    )
  }
}

export default Commentbox;