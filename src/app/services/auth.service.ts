import { Injectable, inject } from '@angular/core';
import { 
  Auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile,
  authState
} from '@angular/fire/auth';
import { 
  Firestore, 
  doc, 
  setDoc, 
  collection, 
  query, 
  where, 
  getDocs,
  serverTimestamp 
} from '@angular/fire/firestore';
import { shareReplay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);

  user$ = authState(this.auth).pipe(shareReplay(1));

  async signUp(email: string, pass: string, username: string) {
    const credential = await createUserWithEmailAndPassword(this.auth, email, pass);
    
    await updateProfile(credential.user, { displayName: username });

    const userDoc = doc(this.firestore, `users/${credential.user.uid}`);
    
    return setDoc(userDoc, {
      uid: credential.user.uid,
      username: username.toLowerCase().trim(), 
      usernameDisplay: username,               
      email: email.toLowerCase().trim(),
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