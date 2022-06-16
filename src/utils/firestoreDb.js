import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  query,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
  getDocs,
  getDoc,
  where,
} from "firebase/firestore";
import firebaseConfig from "../../firebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

class DataService {
  async getAll() {
    try {
      const q = query(collection(db, "events"));

      const querySnapshot = await getDocs(q);
      const response = [];
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        const id = {
          id: doc.id,
        };
        let data = doc.data();
        data = { ...id, ...data };
        response.push(data);
      });
      return response;
    } catch (e) {
      alert(e);
    }
  }
  async getDataById(id) {
    try {
      const docRef = doc(db, "events", id);
      const response = await getDoc(docRef);
      console.log(response.data());
    } catch (e) {
      alert(e);
    }
  }
  async create(data) {
    try {
      const docRef = await addDoc(collection(db, "events"), data);
      console.log("Document written with ID: ", docRef.id);
      alert("Data input successfully");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  async update(id, data) {
    try {
      const docRef = doc(db, "events", id);
      const response = await updateDoc(docRef, data);
      return response;
    } catch (e) {
      alert(e);
    }
  }
  async delete(id) {
    try {
      const docRef = doc(db, "events", id);
      const response = await deleteDoc(docRef);
      return response;
    } catch (e) {
      alert(e);
    }
  }
}

export default DataService;
