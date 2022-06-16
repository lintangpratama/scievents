import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  query,
  addDoc,
  deleteDoc,
  updateDoc,
  getDocs,
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
          id: doc.id
        }
        let data = doc.data();
        data = { ...id, ...data }
        response.push(data);
      });
      return response;
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
  update(id, data) {
      
  }
  // delete(id) {
  //     return db.doc(id).delete();
  // }
}

export default DataService;
