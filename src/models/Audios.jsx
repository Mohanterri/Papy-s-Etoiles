// Audios.jsx Model
import { useEffect } from "react";
import { FirebaseUtils } from "../functions/FirebaseUtils";

/**
 * Hook for managing audios with FirebaseUtils
 */
export const useAudiosManagement = () => {
  const { data, get, getFiltered, add, update, deleteDocByFilter, getSynch } = FirebaseUtils("audios");

  useEffect(() => {
    const unsubscribe = getSynch();
    return () => unsubscribe();
  }, [getSynch]);

  /**
   * Add a new audio
   * @param {Object} audioData - The data of the audio to add
   */
  const addAudio = (audioData) => {
    add(audioData);
  };

  /**
   * Fetch audios based on a filter
   * @param {Object} filter - The filter object with { key, value }
   */
  const fetchAudiosFiltered = (filter) => {
    getFiltered(filter.key, filter.value);
  };

  /**
   * Update an audio's data based on a filter
   * @param {Object} filter - The filter object with { key, value }
   * @param {Object} audioData - The updated audio data
   */
  const updateAudio = (filter, audioData) => {
    update(filter.key, filter.value, audioData);
  };

  /**
   * Delete an audio based on a filter
   * @param {Object} filter - The filter object with { key, value }
   */
  const deleteAudio = (filter) => {
    deleteDocByFilter(filter.key, filter.value);
  };

  return {
    data, 
    get,           // List of audios fetched from Firebase
    addAudio,      // Function to add a new audio
    fetchAudiosFiltered, // Function to fetch filtered audios
    updateAudio,   // Function to update an audio's data
    deleteAudio,   // Function to delete an audio
    getSynch
  };
};
