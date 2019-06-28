import React from 'react';

class GifSearch extends React.Component {

	state = {
		searchTerm: ''
	}


handleOnChange = (e) => {

	this.setState ({ searchTerm: e.target.value })
		// console.log(this.state.searchTerm)
}

handleOnClick = () => {
	let phrase = this.state.searchTerm
	this.props.clicker(phrase)
}

	render() {

		return (
					<div>
					<input 
					value={this.state.searchTerm}
					onChange={this.handleOnChange}
					type="text"
					placeholder="Search for GIFs!"
					/>
					<button onClick={this.handleOnClick}> Search </button>

					</div>
			)
	}


}

export default GifSearch