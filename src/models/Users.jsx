// User.jsx Model
import { useEffect } from "react";
import { FirebaseUtils } from "../functions/FirebaseUtils";

/**
 * Hook for managing users with FirebaseUtils
 */
export const useUserManagement = () => {
  // Destructure FirebaseUtils methods for "users" collection
  const { data, get, getFiltered, add, update, deleteDocByFilter, getSynch } = FirebaseUtils("users");

  useEffect(() => {
    const unsubscribe = getSynch();
    return () => unsubscribe(); // Stop listening on unmount
  }, [getSynch]);

  /**
   * Add a new user
   * @param {Object} userData - The data of the user to add
   */
  const addUser = (userData) => {
    add(userData);
  };

  /**
   * Fetch users based on a filter
   * @param {Object} filter - The filter object with { key, value }
   */
  const fetchUsersFiltered = (filter) => {
    getFiltered(filter.key, filter.value);
  };

  /**
   * Update a user's data based on a filter
   * @param {Object} filter - The filter object with { key, value }
   * @param {Object} userData - The updated user data
   */
  const updateUser = (filter, userData) => {
    update(filter.key, filter.value, userData);
  };

  /**
   * Delete a user based on a filter
   * @param {Object} filter - The filter object with { key, value }
   */
  const deleteUser = (filter) => {
    deleteDocByFilter(filter.key, filter.value);
  };

  return {
    data,
    get,           // List of users fetched from Firebase
    addUser,        // Function to add a new user
    fetchUsersFiltered, // Function to fetch filtered users
    updateUser,     // Function to update a user's data
    deleteUser,     // Function to delete a user
    getSynch
  };
};

