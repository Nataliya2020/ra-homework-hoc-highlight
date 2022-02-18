import Article from './Article';
import Video from './Video';
import PropTypes from 'prop-types';

function List(props) {
  return props.list.map(item => {

    switch (item.type) {
      case 'video':
        return (
          <Video key={item.id} {...item}/>
        );

      case 'article':
        return (
          <Article key={item.id} {...item}/>
        );

      default:
        return null;
    }
  });
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    type: PropTypes.string,
    id: PropTypes.string,
    url: PropTypes.string,
    views: PropTypes.number
  })),
}

List.defaultProps = {
  list: PropTypes.arrayOf(PropTypes.shape({
    type: '',
    id: '',
    url: '',
    views: 0
  }))
}

export default List;
