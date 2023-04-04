import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: 'AIzaSyCkuiEK2QXGEimR4IeUmfv_CZzG7NSeEhE',
  authDomain: 'tiktok---jornada-376e4.firebaseapp.com',
  projectId: 'tiktok---jornada-376e4',
  storageBucket: 'tiktok---jornada-376e4.appspot.com',
  messagingSenderId: '439718604071',
  appId: '1:439718604071:web:715a7aafb7c7048a2e4d02',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
