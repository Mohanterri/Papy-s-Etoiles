import Partners from "./data/Partner"

function PopularCreator() {

	const openUrl = (link) =>{
		const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
  		if (newWindow) newWindow.opener = null
	}

    return (
		<>
			<div className="popular_creator">
			<p id="heading"><i className='bx bx-trophy' ></i>&nbsp;&nbsp;Partenaires et Colaborateurs</p>
				<div className="artists_list">
					{Partners.map((Partner) => (
						<div key={Partner.id} className="artist" onClick={()=>openUrl(Partner.link)}>
							<img src={Partner.img} alt={Partner.name} />
							<div className="artist_desc">
								<p>{Partner.name}</p>
							</div>
						</div>
					))};
				</div>
			</div>
		</>
    )
}

export default PopularCreator;
