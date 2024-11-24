
const MidPart = () => {
    return (
		<div className="mid_part">
            <img src="/img.jpg" alt="" />

			<div className="description">
				<p id="A_name">Persévérance</p>
				<p>La voie de la jeunesse</p>
				<div className="author_desc">
				   <p></p>
				</div>
                 <div className="buttons">
                   <button><i className='bx bx-play'></i></button>
				   <button><i className='bx bxs-like' ></i></button>
				   <button><i className='bx bx-share-alt'></i></button>
				   <button><i className='bx bx-bookmark-alt'></i></button>
                 </div>
				<button id="bay_album"><i className='bx bxs-cart-add'></i> Acheter</button>
			</div>
			
		</div>
    )
}

export default MidPart