// Albums.jsx Model
import { useEffect } from "react";
import { FirebaseUtils } from "../functions/FirebaseUtils";

/**
 * Hook for managing albums with FirebaseUtils
 */
export const useAlbumsManagement = () => {
  const { data, get, getFiltered, add, update, deleteDocByFilter, getSynch } = FirebaseUtils("albums");

  useEffect(() => {
    const unsubscribe = getSynch();
    return () => unsubscribe();
  }, [getSynch]);

  const addAlbum = (albumData) => {
    add(albumData);
  };

  const fetchAlbumsFiltered = (filter) => {
    getFiltered(filter.key, filter.value);
  };

  const updateAlbum = (filter, albumData) => {
    update(filter.key, filter.value, albumData);
  };

  const deleteAlbum = (filter) => {
    deleteDocByFilter(filter.key, filter.value);
  };

  return {
    data, get, addAlbum, fetchAlbumsFiltered, updateAlbum, deleteAlbum, getSynch,
  };
};
