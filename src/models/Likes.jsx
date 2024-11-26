// Likes.jsx Model
import { useEffect } from "react";
import { FirebaseUtils } from "../functions/FirebaseUtils";

/**
 * Hook for managing likes with FirebaseUtils
 */
export const useLikesManagement = () => {
  const { data, get, getFiltered, add, update, deleteDocByFilter, getSynch } = FirebaseUtils("likes");

  useEffect(() => {
    const unsubscribe = getSynch();
    return () => unsubscribe();
  }, [getSynch]);

  const addLike = (likeData) => {
    add(likeData);
  };

  const fetchLikesFiltered = (filter) => {
    getFiltered(filter.key, filter.value);
  };

  const updateLike = (filter, likeData) => {
    update(filter.key, filter.value, likeData);
  };

  const deleteLike = (filter) => {
    deleteDocByFilter(filter.key, filter.value);
  };

  return {
    data, get, addLike, fetchLikesFiltered, updateLike, deleteLike, getSynch,
  };
};
