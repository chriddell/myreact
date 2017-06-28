import React, { Component } from 'react';
import ReactDOM from 'react-dom';

/**

Tutorials from: http://buildwithreact.com/tutorial/

**/

const styles = {

	container: {
		margin: '20px 0',
		overflow: 'hidden'
	},

	board: {
		base: {
			float: 'left',
			fontSize: '24px',
			fontFamily: 'HelveticaNeue, Helvetica, Arial',
			fontWeight: 700,
			marginRight: '20px',
			padding: '20px',
			border: '5px solid #ccc'
		},

		selected: {
			border: '5px solid #3BA8AA'
		}
	}
}

/** Tutorial 5. State **/

var Board = React.createClass({

	render: function() {

		var className = 'board';

		if ( this.props.selected ) {
			className += ' selected';
		}

		return (
			<div style={ ( this.props.selected ) ? Object.assign( {}, styles.board.base, styles.board.selected ) : styles.board.base }>
				{ this.props.index + 1 }
			</div>
		);
	}
});

var BoardSwitcher = React.createClass({

	getInitialState: function() {

		return {
			// Start off by selecting the first board
			selectedIndex: 0
		}
	},

	onToggleClick: function( evt ) {
		// Here's the meat of the problem. Notice how
		// can use this.props here (and anywhere else in
		// the component). 
		//
		// When this is called, React updates the state
		// and updates the UI to reflect the new render
		// output
		this.setState({

			selectedIndex: ( this.state.selectedIndex + 1 ) % this.props.numBoards
		})
	},

	render: function() {

		var boards = [];

		for ( var ii = 0; ii < this.props.numBoards; ii++ ) {

			// We can compare to state here so we're no longer
			// always selecting the first board
			var isSelected = ii === this.state.selectedIndex;

			boards.push(
				<Board index={ ii } selected={ isSelected } key={ ii } />
			)
		}

		return (

			<div>
				<div style={ styles.container }>{ boards }</div>
				<button onClick={ this.onToggleClick }>Toggle</button>
			</div>
		);
	}

});

const root = document.querySelector('#root');
ReactDOM.render( <BoardSwitcher numBoards={ 5 } />, root );

/** Tutorial 4. Events

class ChildComponent extends React.Component {

	render(){

		return (
			<div>
				<div className="prompt">Add a click handler to this button so that when clicked, performMagic is called in the parent component.</div>
				<button onClick={ this.props.onMagicClick }>Do Magic</button>
			</div>
		)
	}
}

class ParentComponent extends React.Component {

	performMagic() {

		alert('Taadah!');
	}

	render() {

		return (
			<div>
				<ChildComponent onMagicClick={ this.performMagic } />
			</div>
		)
	}
}

ReactDOM.render(
	<ParentComponent />,
	document.getElementById('root')
);

**/

/** Tutorial 3. Components

function VacancySign( props ) {
	return <p>{ props.hasvacancy ? '' : 'No' } Vacancy</p>
}

ReactDOM.render(
	<VacancySign hasvacancy={false} />,
	document.getElementById('root')
);

**/


