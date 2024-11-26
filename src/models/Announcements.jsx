// Announcements.jsx Model
import { useEffect } from "react";
import { FirebaseUtils } from "../functions/FirebaseUtils";

/**
 * Hook for managing announcements with FirebaseUtils
 */
export const useAnnouncementsManagement = () => {
  const { data, get, getFiltered, add, update, deleteDocByFilter, getSynch } = FirebaseUtils("announcements");

  useEffect(() => {
    const unsubscribe = getSynch();
    return () => unsubscribe();
  }, [getSynch]);

  const addAnnouncement = (announcementData) => {
    add(announcementData);
  };

  const fetchAnnouncementsFiltered = (filter) => {
    getFiltered(filter.key, filter.value);
  };

  const updateAnnouncement = (filter, announcementData) => {
    update(filter.key, filter.value, announcementData);
  };

  const deleteAnnouncement = (filter) => {
    deleteDocByFilter(filter.key, filter.value);
  };

  return {
    data, get, addAnnouncement, fetchAnnouncementsFiltered, updateAnnouncement, deleteAnnouncement, getSynch,
  };
};
