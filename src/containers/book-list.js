import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((bookitem) => {
			return (
				<li 
					key={bookitem.title} 
					onClick={() => this.props.selectBook(bookitem)}
					className="list-group-item">
					{bookitem.title}>
				</li>
			);
		});
	}

	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state) {
	// Whatever is returned will show up as props inside of BookList
	return {
		books: state.books
	};
}

// Anything returned from this function will end up as props on the BookList container
// We need this so we can call this.props.selectBook above, and kickstart the
// action >> reducer >> state change process
function mapDispatchToProps(dispatch) {
	// Whenever selectBook is called, the result should be passed to all of our reducers
	return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// Promote Booklist from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);