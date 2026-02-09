import { Injectable, inject } from '@angular/core';
import { 
  Auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile,
  authState,
  user
} from '@angular/fire/auth';
import { 
  Firestore, 
  doc, 
  setDoc, 
  collection, 
  query, 
  where, 
  getDocs,
  serverTimestamp,
  docData 
} from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { shareReplay, switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);

  /**
   * Este observable es la clave. 
   * Escucha el estado de Auth y, si hay usuario, busca sus datos en Firestore.
   * Usamos shareReplay(1) para que todos los componentes compartan la misma suscripción.
   */
  userProfile$: Observable<any> = user(this.auth).pipe(
    switchMap((authUser) => {
      if (!authUser) {
        return of(null);
      }
      const userDocRef = doc(this.firestore, `users/${authUser.uid}`);
      return docData(userDocRef);
    }),
    shareReplay(1) 
  );

  // Mantengo user$ por compatibilidad, aunque userProfile$ es más completo
  user$ = authState(this.auth).pipe(shareReplay(1));

  async signUp(email: string, pass: string, username: string) {
    // 1. Crear el usuario en Firebase Auth
    const credential = await createUserWithEmailAndPassword(this.auth, email, pass);
    
    // 2. Generar avatar inicial
    const defaultAvatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${username}`;

    // 3. Actualizar perfil básico de Auth
    await updateProfile(credential.user, { 
      displayName: username,
      photoURL: defaultAvatar 
    });

    // 4. Crear el documento en Firestore con los campos solicitados
    const userDoc = doc(this.firestore, `users/${credential.user.uid}`);
    
    return setDoc(userDoc, {
      uid: credential.user.uid,
      username: username.toLowerCase().trim(), 
      usernameDisplay: username,               
      email: email.toLowerCase().trim(),
      avatarUrl: defaultAvatar,
      
      // Inicialización de estadísticas
      highestScore: 0,
      totalPlayTimeSec: 0,

      createdAt: serverTimestamp()             
    });
  }

  signIn(email: string, pass: string) {
    return signInWithEmailAndPassword(this.auth, email, pass);
  }

  async logout() {
    try {
      await signOut(this.auth);
    } catch (error) {
      console.error("Logout Error:", error);
    }
  }

  async checkIfUsernameExists(username: string): Promise<boolean> {
    if (!username || username.length < 3) return false;

    const usersRef = collection(this.firestore, 'users');
    const q = query(usersRef, where('username', '==', username.toLowerCase().trim()));
    
    try {
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.error("Error checking username availability:", error);
      return false;
    }
  }

  async checkIfEmailInFirestore(email: string): Promise<boolean> {
    if (!email || !email.includes('@')) return false;

    const usersRef = collection(this.firestore, 'users');
    const q = query(usersRef, where('email', '==', email.toLowerCase().trim()));
    
    try {
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.error("Error checking email in Firestore:", error);
      return false;
    }
  }
}