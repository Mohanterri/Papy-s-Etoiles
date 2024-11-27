import models from '../paterns/Paterns'; // Le fichier contenant les patterns
import './Form.css'

/**
 * Génère un formulaire HTML basé sur un modèle donné.
 * @param {string} modelKey - La clé du modèle (ex. "purchase", "album").
 * @returns {HTMLElement} - Un élément <form> prêt à être intégré dans le DOM.
 */
function generateForm(modelKey) {
    const model = models[modelKey]; // Récupérer le modèle correspondant
    if (!model) {
        console.error(`Modèle "${modelKey}" non trouvé.`);
        return null;
    }

    // Crée le formulaire
    const form = document.createElement('form');
    form.setAttribute('id', `${modelKey}-form`);
    form.setAttribute('method', 'post');
    form.setAttribute('action', '#'); // Ajouter une action spécifique si nécessaire

    // Générer les champs
    for (const [key, value] of Object.entries(model)) {
        const fieldWrapper = document.createElement('div');
        fieldWrapper.setAttribute('class', 'form-group');

        // Label
        const label = document.createElement('label');
        label.setAttribute('for', key);
        label.textContent = key;

        // Champ d'entrée
        let input;
        if (value === 'string') {
            input = document.createElement('input');
            input.setAttribute('type', 'text');
        } else if (value === 'timestamp') {
            input = document.createElement('input');
            input.setAttribute('type', 'datetime-local');
        } else if (value === 'url') {
            input = document.createElement('input');
            input.setAttribute('type', 'url');
        } else if (value === 'number' || value === 0) {
            input = document.createElement('input');
            input.setAttribute('type', 'number');
        } else {
            input = document.createElement('input');
            input.setAttribute('type', 'text');
        }

        input.setAttribute('id', key);
        input.setAttribute('name', key);
        input.setAttribute('required', 'true');

        // Ajout au wrapper
        fieldWrapper.appendChild(label);
        fieldWrapper.appendChild(input);
        form.appendChild(fieldWrapper);
    }

    // Bouton de soumission
    const submitButton = document.createElement('button');
    submitButton.setAttribute('type', 'submit');
    submitButton.textContent = 'Soumettre';
    form.appendChild(submitButton);

    return form;
}

// Exemple d'utilisation
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('form-container'); // Un conteneur existant dans le HTML
    const form = generateForm('purchase'); // Génère un formulaire pour le modèle "purchase"
    if (form) {
        container.appendChild(form);
    }
});
