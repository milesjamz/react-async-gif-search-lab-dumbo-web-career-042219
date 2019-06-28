import React from 'react';
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends React.Component {

	state ={
		gifs: []
	}

handleOnClick = (phrase) => {
	fetch(`http://api.giphy.com/v1/gifs/search?q=${phrase}&api_key=dc6zaTOxFJmzC&rating=g`)
	.then(res => res.json())
	.then((parsedJson) => {
		// console.log(parsedJson.data)
		let firstThree = parsedJson.data.slice(0,3);
		this.setState ({ gifs: firstThree })
	})
}


	render() {

		return (
					<div>
					< GifSearch clicker={this.handleOnClick}/>

					< GifList myPropers={this.state.gifs} />

					</div>
			)
	}

}

export default GifListContainer