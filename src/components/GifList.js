import React from 'react';

class GifList extends React.Component {


  // componentDidUpdate() {
  // 	let justGifs = this.props.myPropers.map(gif => {
  // 	return gif.images.original.url
  // 	})
		// console.log(justGifs)
	 //  }


					// <li> <img src={justGifs[0]} alt="gif one"/> </li>
					// <li> <img src={justGifs[1]} alt="gif two"/> </li>
					// <li> <img src={justGifs[2]} alt="gif three"/> </li>

	render() {

  	let justGifs = this.props.myPropers.map(gif => {
  	return <li> <img src={gif.images.original.url} alt="yo" /> </li>
 	})
 	
	
		return (
					<div>
						<ul>
							{justGifs}
						</ul>
					</div>
			)
	}
}

export default GifList