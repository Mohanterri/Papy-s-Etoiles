
function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <p id="heading"><i className='mingcute--contacts-fill' ></i>&nbsp;&nbsp;Contact et informations</p>
                <div className="row">
                    <div className="col contact-info">
                        <h1>Nos Informations</h1>
                        <br></br>
                        <ul>
                            <li><strong>Adresse:</strong> Plateau, Garoua, Cameroun</li>
                            <li><strong>Email:</strong> lkkhteammusik@gmail.com</li>
                            <li><strong>Téléphone:</strong> (+237) 698 852 201 / 652 707 581</li>
                        </ul>
                    </div>

                    <div className="col contact-form">
                        <h1>Envoyez-nous un message</h1>
                        <br></br>
                        <form action="#" method="post">
                            <label htmlFor="name">Nom:</label>
                            <input type="text" id="name" name="name" placeholder="Votre nom" required />

                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Votre email" required />

                            <label htmlFor="message">Message:</label>
                            <textarea id="message" name="message" rows="4" placeholder="Votre message" required></textarea>

                            <button type="submit">Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact