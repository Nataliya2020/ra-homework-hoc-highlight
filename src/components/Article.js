import withViewCount from "../hoc/withViewCount";
import PropTypes from 'prop-types';

function Article(props) {
  return (
    <div className="item item-article">
      <h3><a href="https://google.com">{props.title}</a></h3>
      <p className="views">Прочтений: {props.views}</p>
    </div>
  )
}

const WrappedComponent = withViewCount(Article);

Article.propTypes = {
  title: PropTypes.string,
  views: PropTypes.number
}

Article.defaultProps = {
  title: '',
  views: 0
}

export default WrappedComponent;
