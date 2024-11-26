// Messages.jsx Model
import { useEffect } from "react";
import { FirebaseUtils } from "../functions/FirebaseUtils";

/**
 * Hook for managing messages with FirebaseUtils
 */
export const useMessagesManagement = () => {
  const { data, get, getFiltered, add, update, deleteDocByFilter, getSynch } = FirebaseUtils("messages");

  useEffect(() => {
    const unsubscribe = getSynch();
    return () => unsubscribe();
  }, [getSynch]);

  const addMessage = (messageData) => {
    add(messageData);
  };

  const fetchMessagesFiltered = (filter) => {
    getFiltered(filter.key, filter.value);
  };

  const updateMessage = (filter, messageData) => {
    update(filter.key, filter.value, messageData);
  };

  const deleteMessage = (filter) => {
    deleteDocByFilter(filter.key, filter.value);
  };

  return {
    data, get, addMessage, fetchMessagesFiltered, updateMessage, deleteMessage, getSynch,
  };
};
