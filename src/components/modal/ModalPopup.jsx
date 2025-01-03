// ModalPopup.jsx
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from '@mui/material';

const ModalPopup = ( { mode, open, onClose, onSubmit } ) => {

  const [editedDocument, setEditedDocument] = useState({
    type: '',
    name: '',
    phone: '',
  });

  const handleSubmit = () => {
    onSubmit(editedDocument);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{mode === 'donation' ? 'Faire un don' : mode === 'Précommander' ? 'Précommander l\'album' : 'Achat de l\'album'}</DialogTitle>
      <DialogContent>
      <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={editedDocument.type}
            onChange={(e) => setEditedDocument({ ...editedDocument, type: e.target.value })}
          >
            <MenuItem value="usb">Clé USB</MenuItem>
            <MenuItem value="cd">Disque CD</MenuItem>
            <MenuItem value="cm">Carte mémoire</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Votre nome"
          value={editedDocument.name}
          onChange={(e) => setEditedDocument({ ...editedDocument, name: e.target.value })}
          fullWidth
        />
        <TextField
          label="Votre téléphone"
          value={editedDocument.phone}
          onChange={(e) => setEditedDocument({ ...editedDocument, phone: e.target.value })}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Annuler</Button>
        <Button onClick={handleSubmit} color="primary">Valider</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalPopup;
