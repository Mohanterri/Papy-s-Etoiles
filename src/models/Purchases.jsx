// Purchases.jsx Model
import { useEffect } from "react";
import { FirebaseUtils } from "../functions/FirebaseUtils";

/**
 * Hook for managing purchases with FirebaseUtils
 */
export const usePurchasesManagement = () => {
  const { data, get, getFiltered, add, update, deleteDocByFilter, getSynch } = FirebaseUtils("purchases");

  useEffect(() => {
    const unsubscribe = getSynch();
    return () => unsubscribe();
  }, [getSynch]);

  const addPurchase = (purchaseData) => {
    add(purchaseData);
  };

  const fetchPurchasesFiltered = (filter) => {
    getFiltered(filter.key, filter.value);
  };

  const updatePurchase = (filter, purchaseData) => {
    update(filter.key, filter.value, purchaseData);
  };

  const deletePurchase = (filter) => {
    deleteDocByFilter(filter.key, filter.value);
  };

  return {
    data, get, addPurchase, fetchPurchasesFiltered, updatePurchase, deletePurchase, getSynch,
  };
};
