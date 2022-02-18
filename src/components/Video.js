import withViewCount from "../hoc/withViewCount";
import PropTypes from 'prop-types';

function Video(props) {
  return (
    <div className="item item-video">
      <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title={props.url}/>
      <p className="views">Просмотров: {props.views}</p>
    </div>
  )
}

const WrappedComponent = withViewCount(Video);

Video.propTypes = {
  url: PropTypes.string,
  views: PropTypes.number
}

Video.defaultProps = {
  url: '',
  views: 0
}

export default WrappedComponent;
