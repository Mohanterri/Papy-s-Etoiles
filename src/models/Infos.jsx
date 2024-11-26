// Infos.jsx Model
import { useEffect } from "react";
import { FirebaseUtils } from "../functions/FirebaseUtils";

/**
 * Hook for managing infos with FirebaseUtils
 */
export const useInfosManagement = () => {
  const { data, get, getFiltered, add, update, deleteDocByFilter, getSynch } = FirebaseUtils("infos");

  useEffect(() => {
    const unsubscribe = getSynch();
    return () => unsubscribe();
  }, [getSynch]);

  const addInfo = (infoData) => {
    add(infoData);
  };

  const fetchInfosFiltered = (filter) => {
    getFiltered(filter.key, filter.value);
  };

  const updateInfo = (filter, infoData) => {
    update(filter.key, filter.value, infoData);
  };

  const deleteInfo = (filter) => {
    deleteDocByFilter(filter.key, filter.value);
  };

  return {
    data, get, addInfo, fetchInfosFiltered, updateInfo, deleteInfo, getSynch,
  };
};
