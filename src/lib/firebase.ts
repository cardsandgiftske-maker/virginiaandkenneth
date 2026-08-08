import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore, collection, addDoc, serverTimestamp, getDocs, doc, updateDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import defaultFirebaseConfig from '../../firebase-applet-config.json';

const metaEnv = (import.meta as any).env || {};

// Use VITE_ environment variables if provided, otherwise fallback to project config
const firebaseConfig = {
  apiKey: metaEnv.VITE_FIREBASE_API_KEY || defaultFirebaseConfig.apiKey,
  authDomain: metaEnv.VITE_FIREBASE_AUTH_DOMAIN || defaultFirebaseConfig.authDomain,
  projectId: metaEnv.VITE_FIREBASE_PROJECT_ID || defaultFirebaseConfig.projectId,
  storageBucket: metaEnv.VITE_FIREBASE_STORAGE_BUCKET || defaultFirebaseConfig.storageBucket,
  messagingSenderId: metaEnv.VITE_FIREBASE_MESSAGING_SENDER_ID || defaultFirebaseConfig.messagingSenderId,
  appId: metaEnv.VITE_FIREBASE_APP_ID || defaultFirebaseConfig.appId,
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);

const databaseId = metaEnv.VITE_FIREBASE_DATABASE_ID || defaultFirebaseConfig.firestoreDatabaseId || '(default)';

export const db = getFirestore(app, databaseId);

export interface RsvpData {
  fullName: string;
  phone: string;
  email?: string;
  attending: 'yes' | 'no';
  guestCount: number;
  dietary?: string;
  message?: string;
  createdAt?: any;
}

export async function submitRsvpToFirestore(data: RsvpData) {
  const rsvpsRef = collection(db, 'rsvps');
  const docRef = await addDoc(rsvpsRef, {
    ...data,
    createdAt: serverTimestamp(),
  });
  return docRef.id;
}

export async function getAllRsvpsFromFirestore(): Promise<Array<RsvpData & { id: string }>> {
  try {
    const rsvpsRef = collection(db, 'rsvps');
    const q = query(rsvpsRef, orderBy('createdAt', 'desc'));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
      id: doc.id,
      ...(doc.data() as RsvpData)
    }));
  } catch (error) {
    console.warn('Could not fetch RSVPs:', error);
    return [];
  }
}

export async function getRecentRsvpsFromFirestore(maxCount = 10): Promise<Array<RsvpData & { id: string }>> {
  const all = await getAllRsvpsFromFirestore();
  return all.slice(0, maxCount);
}

export async function updateRsvpInFirestore(id: string, updatedData: Partial<RsvpData>) {
  const docRef = doc(db, 'rsvps', id);
  await updateDoc(docRef, updatedData);
}

export async function deleteRsvpFromFirestore(id: string) {
  const docRef = doc(db, 'rsvps', id);
  await deleteDoc(docRef);
}

