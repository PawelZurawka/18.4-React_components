var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'Film o czarodzieju',
    img: 'https://i.postimg.cc/ncrf9730/Harry-Potter.jpg' 
  },
  {
    id: 2,
    title: 'Król lew',
    desc: 'Film o królu sawanny',
    img: 'https://i.postimg.cc/Pxy0PrZg/KrolLew.jpg'
  },
  {
    id: 3,
    title: 'Pulp Fiction',
    desc: 'Film o wielu wątkach',
    img: 'https://i.postimg.cc/Wbhx1V4y/Pulp-Fiction.jpg'
  },
  {
    id: 4,
    title: 'Śmierć w Wenecji',
    desc: 'Film o facecie w łódce',
    img: 'https://i.postimg.cc/yYttJGg8/Smiercw-Wenecji.jpg'
  }
];

var Movie = React.createClass({
	propTypes: {
		movie: React.PropTypes.object.isRequired,
	},

	render: function() {
		return (
			React.createElement('li', {key: this.props.movie.id},
			  React.createElement(MovieTitle, {title: this.props.movie.title}),
			  React.createElement(MovieDescription, {desc: this.props.movie.desc}),
			  React.createElement(MovieImage, {img: this.props.movie.img})
			)
		);
  }
});

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
    );
  },
});

var MovieDescription = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
    );
  },
});

var MoviesList = React.createClass({
  render: function() {
    return (React.createElement('ul', {}, moviesElements));
  }
});

var MovieImage = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('img', {src: this.props.img})
    );
  },
});

var moviesElements = movies.map(function(movie){
  return React.createElement(Movie, {key: movie.id, movie: movie});
});

var element = React.createElement('div', {},
  React.createElement('h1', {}, 'Lista Filmów'),
  React.createElement(MoviesList, {})
);

ReactDOM.render(element, document.getElementById('app'));