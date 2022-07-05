import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCF372jF0GZmvaACGycfyc4ouDdwEMRhpM',
  authDomain: 'my-project-0722-5e3d4.firebaseapp.com',
  databaseURL: 'https://my-project-0722-5e3d4-default-rtdb.firebaseio.com',
  projectId: 'my-project-0722-5e3d4',
  storageBucket: 'my-project-0722-5e3d4.appspot.com',
  messagingSenderId: '603573659693',
  appId: '1:603573659693:web:e02b4bcb04c54888f1f0a4',
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);

const storage = getStorage(app);

export { app, firestore, storage };
