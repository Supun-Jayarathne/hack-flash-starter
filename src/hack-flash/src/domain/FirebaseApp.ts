// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { FuelRequest } from "./FuelRequest";
import { Vehicle } from "./Vehicle";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1rnLZ4DCLqXKfAJPrwWnMCCZAerTqxXM",
  authDomain: "bistechack.firebaseapp.com",
  projectId: "bistechack",
  storageBucket: "bistechack.appspot.com",
  messagingSenderId: "688222406466",
  appId: "1:688222406466:web:c60a131f6532f19a65aadb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function registerVehicle(vehicle: Vehicle) {
  // Add a new document in collection "vehicles"
  const docRef = await addDoc(collection(db, "vehicle"), vehicle);
  return docRef;
}

export async function findVehicle(licensePlate: string) {
  // Add a new document in collection "vehicles"

  const q = query(
    collection(db, "vehicle"),
    where("licensePlate", "==", licensePlate)
  );

  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs[0]?.data() as Vehicle;

  console.log(data);

  return data;
}

export async function addFuelRecord(fuel: FuelRequest) {
  // Add a new document in collection "fuelRequest"
  const docRef = await addDoc(collection(db, "fuelRequest"), fuel);
  return docRef;
}

export async function findUsedFuel(licensePlate: string) {
  // Add a new document in collection "fuelRequest"

  const q = query(
    collection(db, "fuelRequest"),
    where("licensePlate", "==", licensePlate)
  );

  const querySnapshot = await getDocs(q);

  const data = querySnapshot.docs[0]?.data() as FuelRequest;

  console.log('fuelRequest querySnapshot',querySnapshot);

  return data;
}

export async function deleteAllVehicles() {
  const q = query(collection(db, "vehicle"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((document) =>
    deleteDoc(doc(db, "vehicle", document.id))
  );
}

export async function deleteAllRequests() {
  const q = query(collection(db, "fuelRequest"));

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((document) =>
    deleteDoc(doc(db, "fuelRequest", document.id))
  );
}
