import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyChtn1kg8jerQFj6t1dEP1Pwy0a9s0hEgI",
  authDomain: "hearinghope-96349.firebaseapp.com",
  projectId: "hearinghope-96349",
  storageBucket: "hearinghope-96349.appspot.com",
  messagingSenderId: "243314305458",
  appId: "1:243314305458:web:2a3f79b072265c45b35cab",
  measurementId: "G-WVMMKVE0G7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phoneNumber, message } = req.body;

    // Store data in Firestore
    try {
      const docRef = await addDoc(collection(db, 'contactForms'), {
        name,
        email,
        phoneNumber,
        message,
      });
      console.log('Document written with ID: ', docRef.id);
      res.status(200).json({ message: 'Form submitted successfully!' });
    } catch (e) {
      console.error('Error adding document: ', e);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
