
function Footer() {
	const links = {
		"facebook" : "https://www.facebook.com/papys5etoiles",
		"youtube": "https://www.youtube.com/channel/UCxpFY1Rzs01NUtzbz3DFdZg",
		"tiktok": "https://www.tiktok.com/@papys_cinq_etoiles"
	};

	const openUrl = (link) =>{
		const newWindow = window.open(link, '_blank', 'noopener,noreferrer')
  		if (newWindow) newWindow.opener = null
	}

    return (
        <div className="footer">
			<a id="logo"><i className='bx bxs-bar-chart-alt-2' ></i>&nbsp;Papy&apos;s 5 Etoiles</a>
			<div className="social_handle">
				<i className='logos--youtube-icon' onClick={()=>openUrl(links.youtube)}></i>
				<i className='logos--facebook' onClick={()=>openUrl(links.facebook)}></i>
				<i className='logos--tiktok-icon' onClick={()=>openUrl(links.tiktok)}></i>
			</div>
		</div>
    )
}

export default Footer
