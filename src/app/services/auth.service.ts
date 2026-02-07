import { Injectable, inject } from '@angular/core';
import { 
  Auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  updateProfile,
  fetchSignInMethodsForEmail,
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

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth = inject(Auth);
  private firestore = inject(Firestore);

  user$ = authState(this.auth);

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

  logout() {
    return signOut(this.auth);
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

  async checkIfEmailExists(email: string): Promise<boolean> {
    if (!email || !email.includes('@')) return false;
    
    try {
      const methods = await fetchSignInMethodsForEmail(this.auth, email);
      return methods.length > 0;
    } catch (error) {
      return false; 
    }
  }
}