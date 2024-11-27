const purchase = {
    userId: "string",           // ID de l'utilisateur ayant effectué l'achat
    albumId: "string",          // ID de l'album ou de l'article acheté
    purchaseDate: "timestamp",  // Date et heure de l'achat
    amount: 0,                  // Montant de l'achat
    paymentStatus: "string",    // Status de paiement: 'pending', 'completed', etc.
    paymentMethod: "string",    // Mode de paiement: 'credit card', 'paypal', etc.
};

const album = {
    title: "string",           // Titre de l'album
    description: "string",     // Description de l'album
    artistId: "string",        // ID de l'artiste
    coverImage: "url",         // Lien vers l'image de couverture
    releaseDate: "timestamp",  // Date de sortie
    price: 0,                  // Prix de l'album
    genre: "string",           // Genre musical
};

const ad = {
    title: "string",          // Titre de l'annonce
    description: "string",    // Contenu de l'annonce
    image: "url",             // Image associée
    targetAudience: "string", // Public ciblé
    startDate: "timestamp",   // Date de début
    endDate: "timestamp",     // Date de fin
    link: "url",              // Lien vers plus d'informations ou d'action
};

const audio = {
    title: "string",          // Titre de l'audio
    albumId: "string",        // ID de l'album (ou null si audio indépendant)
    artistId: "string",       // ID de l'artiste
    duration: 0,              // Durée en secondes
    fileUrl: "url",           // Lien vers le fichier audio
    releaseDate: "timestamp", // Date de sortie
    genre: "string",          // Genre musical
};

const comment = {
    userId: "string",         // ID de l'utilisateur ayant commenté
    targetId: "string",       // ID de l'album/audio/article commenté
    content: "string",        // Texte du commentaire
    datePosted: "timestamp",  // Date de publication
    likes: 0,                 // Nombre de likes sur le commentaire
};

const donation = {
    userId: "string",         // ID de l'utilisateur ayant fait le don
    amount: 0,                // Montant du don
    date: "timestamp",        // Date du don
    message: "string",        // Message personnel avec le don
};

const info = {
    title: "string",          // Titre de l'information
    content: "string",        // Contenu détaillé
    image: "url",             // Image associée
    category: "string",       // Catégorie de l'information
    datePosted: "timestamp",  // Date de publication
};


const like = {
    userId: "string",          // ID de l'utilisateur ayant liké
    targetId: "string",        // ID de l'objet (album/audio/commentaire/etc.) liké
    date: "timestamp",         // Date du like
};

const message = {
    senderId: "string",       // ID de l'expéditeur
    receiverId: "string",     // ID du destinataire
    content: "string",        // Texte du message
    dateSent: "timestamp",    // Date d'envoi
    status: "string",         // Status: 'sent', 'delivered', 'read'
};


const partner = {
    name: "string",           // Nom du partenaire
    description: "string",    // Description ou rôle du partenaire
    logo: "url",              // Lien vers le logo
    website: "url",           // Lien vers le site web
    startDate: "timestamp",   // Date de début de partenariat
};

export default { purchase, album, ad, audio, comment, donation, info, like, message, partner };