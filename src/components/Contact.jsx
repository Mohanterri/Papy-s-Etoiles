
function Contact() {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <p id="heading"><i className='mingcute--contacts-fill' ></i>&nbsp;&nbsp;Contact et informations</p>
                <div className="row">
                    <div className="col contact-info">
                        <h3>Nos Informations</h3>
                        <ul>
                        <li><strong>Adresse:</strong> 123 Rue Exemple, Ville, Pays</li>
                        <li><strong>Email:</strong> contact@exemple.com</li>
                        <li><strong>Téléphone:</strong> +123 456 789</li>
                        </ul>
                    </div>

                    <div className="col contact-form">
                        <h3>Envoyez-nous un message</h3>
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