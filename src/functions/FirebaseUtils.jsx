import { useState } from "react";
import { db } from "./Config";
import { 
    collection, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    query, 
    where, 
    doc, 
    onSnapshot 
} from "firebase/firestore";

export const FirebaseUtils = (collectionName) => {
    const [data, setData] = useState([]);
    const collectionRef = collection(db, collectionName);

    // Fetch all documents in the collection
    const get = async () => {
        try {
            const querySnapshot = await getDocs(collectionRef);
            const allData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setData(allData);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Fetch documents with filtering by key and value
    const getFiltered = async (key, value) => {
        try {
            const q = query(collectionRef, where(key, "==", value));
            const querySnapshot = await getDocs(q);
            const filteredData = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setData(filteredData);
        } catch (error) {
            console.error("Error fetching filtered data:", error);
        }
    };

    // Add a new document
    const add = async (newData) => {
        try {
            const docRef = await addDoc(collectionRef, newData);
            console.log("Document added with ID:", docRef.id);
            // Optionally, refresh data after adding
            get();
        } catch (error) {
            console.error("Error adding document:", error);
        }
    };

    // Update a document with a filter
    const update = async (filterKey, filterValue, updatedData) => {
        try {
            const q = query(collectionRef, where(filterKey, "==", filterValue));
            const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
                console.error("No matching document found for update.");
                return;
            }

            querySnapshot.forEach(async (docSnapshot) => {
                const docRef = doc(db, collectionName, docSnapshot.id);
                await updateDoc(docRef, updatedData);
                console.log("Document updated with ID:", docSnapshot.id);
            });
            // Optionally, refresh data after update
            get();
        } catch (error) {
            console.error("Error updating document:", error);
        }
    };

    // Delete a document with a filter
    const deleteDocByFilter = async (filterKey, filterValue) => {
        try {
            const q = query(collectionRef, where(filterKey, "==", filterValue));
            const querySnapshot = await getDocs(q);
            if (querySnapshot.empty) {
                console.error("No matching document found for deletion.");
                return;
            }

            querySnapshot.forEach(async (docSnapshot) => {
                const docRef = doc(db, collectionName, docSnapshot.id);
                await deleteDoc(docRef);
                console.log("Document deleted with ID:", docSnapshot.id);
            });
            // Optionally, refresh data after deletion
            get();
        } catch (error) {
            console.error("Error deleting document:", error);
        }
    };

    // Listen to changes in real-time
    const getSynch = () => {
        const unsubscribe = onSnapshot(collectionRef, (snapshot) => {
            const updatedData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setData(updatedData);
        }, (error) => {
            console.error("Error listening to changes:", error);
        });

        // Return the unsubscribe function to stop listening when needed
        return unsubscribe;
    };

    // Returning methods for use
    return {
        data,
        get,
        getFiltered,
        add,
        update,
        deleteDocByFilter,
        getSynch, // New real-time sync method
    };
};
