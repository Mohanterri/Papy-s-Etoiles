
const comments = [
	{
	  id: 1,
	  user: "karl rock",
	  content:
		"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has",
	  social: ["facebook", "twitter"],
	},
	{
	  id: 2,
	  user: "jane doe",
	  content:
		"Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
	  social: ["facebook", "twitter"],
	},
	{
	  id: 3,
	  user: "john smith",
	  content:
		"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
	  social: ["facebook", "twitter"],
	},
	{
		id: 1,
		user: "karl rock",
		content:
		  "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has",
		social: ["facebook", "twitter"],
	  },
	  {
		id: 2,
		user: "jane doe",
		content:
		  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries, but also the leap into electronic typesetting.",
		social: ["facebook", "twitter"],
	  },
	  {
		id: 3,
		user: "john smith",
		content:
		  "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.",
		social: ["facebook", "twitter"],
	  },
];

function UserComments() {
    return (
        <div className="user_comments" id="user_comments">
			<p id="heading"><i className='bx bx-comment-detail'></i>&nbsp;&nbsp;Commentaires</p>
            <div className="comments">

			{comments.map((comment) => (
				<div key={comment.id} className="comment">
					<div id="user_p">
						<p><i className='bx bx-user' ></i>&nbsp;&nbsp;{comment.user}</p>
						<p></p>
					</div>
					<div id="user_c">
						<p>{comment.content}</p>
						<div id="social">
							{comment.social.includes("facebook") && (
								<a href="#">
									<i className="bx bxl-facebook-circle"></i>
								</a>
								)}
								{comment.social.includes("twitter") && (
								<a href="#">
									<i className="bx bxl-twitter"></i>
								</a>
							)}
						</div>
					</div>
				</div>
			))}
            </div>
		</div>
    )
}

export default UserComments