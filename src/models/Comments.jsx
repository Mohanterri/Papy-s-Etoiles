// Comments.jsx Model
import { useEffect } from "react";
import { FirebaseUtils } from "../functions/FirebaseUtils";

/**
 * Hook for managing comments with FirebaseUtils
 */
export const useCommentsManagement = () => {
  const { data, get, getFiltered, add, update, deleteDocByFilter, getSynch } = FirebaseUtils("comments");

  useEffect(() => {
    const unsubscribe = getSynch();
    return () => unsubscribe();
  }, [getSynch]);

  const addComment = (commentData) => {
    add(commentData);
  };

  const fetchCommentsFiltered = (filter) => {
    getFiltered(filter.key, filter.value);
  };

  const updateComment = (filter, commentData) => {
    update(filter.key, filter.value, commentData);
  };

  const deleteComment = (filter) => {
    deleteDocByFilter(filter.key, filter.value);
  };

  return {
    data, get, addComment, fetchCommentsFiltered, updateComment, deleteComment, getSynch,
  };
};
