// Donations.jsx Model
import { useEffect } from "react";
import { FirebaseUtils } from "../functions/FirebaseUtils";

/**
 * Hook for managing donations with FirebaseUtils
 */
export const useDonationsManagement = () => {
  const { data, get, getFiltered, add, update, deleteDocByFilter, getSynch } = FirebaseUtils("donations");

  useEffect(() => {
    const unsubscribe = getSynch();
    return () => unsubscribe();
  }, [getSynch]);

  const addDonation = (donationData) => {
    add(donationData);
  };

  const fetchDonationsFiltered = (filter) => {
    getFiltered(filter.key, filter.value);
  };

  const updateDonation = (filter, donationData) => {
    update(filter.key, filter.value, donationData);
  };

  const deleteDonation = (filter) => {
    deleteDocByFilter(filter.key, filter.value);
  };

  return {
    data, get, addDonation, fetchDonationsFiltered, updateDonation, deleteDonation, getSynch,
  };
};
