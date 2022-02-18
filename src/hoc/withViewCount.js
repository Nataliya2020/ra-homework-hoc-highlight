import React from 'react';
import New from '../components/New';
import Popular from '../components/Popular';
import PropTypes from 'prop-types';

function withViewCount(Component) {
  class ViewCount extends React.Component {
    render() {
      if (this.props.views < 100) {
        return (
          <New>
            <Component {...this.props}/>
          </New>
        )
      } else if (this.props.views > 1000) {
        return (
          <Popular>
            <Component {...this.props}/>
          </Popular>
        )
      } else {
        return null;
      }
    }
  }

  ViewCount.propTypes = {
    views: PropTypes.number
  }

  ViewCount.defaultProps = {
    views: 0
  }
  return (ViewCount);
}

withViewCount.PropTypes = {
  Component: PropTypes.func
}

withViewCount.defaultProps = {
  Component: () => {
  }
}

export default withViewCount;
