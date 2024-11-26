// Partners.jsx Model
import { useEffect } from "react";
import { FirebaseUtils } from "../functions/FirebaseUtils";

/**
 * Hook for managing partners with FirebaseUtils
 */
export const usePartnersManagement = () => {
  const { data, get, getFiltered, add, update, deleteDocByFilter, getSynch } = FirebaseUtils("partners");

  useEffect(() => {
    const unsubscribe = getSynch();
    return () => unsubscribe();
  }, [getSynch]);

  const addPartner = (partnerData) => {
    add(partnerData);
  };

  const fetchPartnersFiltered = (filter) => {
    getFiltered(filter.key, filter.value);
  };

  const updatePartner = (filter, partnerData) => {
    update(filter.key, filter.value, partnerData);
  };

  const deletePartner = (filter) => {
    deleteDocByFilter(filter.key, filter.value);
  };

  return {
    data, get, addPartner, fetchPartnersFiltered, updatePartner, deletePartner, getSynch,
  };
};
