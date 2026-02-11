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

  userProfile$: Observable<any> = user(this.auth).pipe(
    switchMap((authUser) => {
      if (!authUser) return of(null);
      const userDocRef = doc(this.firestore, `users/${authUser.uid}`);
      return docData(userDocRef);
    }),
    shareReplay(1) 
  );

  user$ = authState(this.auth).pipe(shareReplay(1));

  async signUp(email: string, pass: string, username: string) {
    const credential = await createUserWithEmailAndPassword(this.auth, email, pass);
    const defaultAvatar = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${username}`;

    await updateProfile(credential.user, { 
      displayName: username,
      photoURL: defaultAvatar 
    });

    const userDoc = doc(this.firestore, `users/${credential.user.uid}`);
    
    return setDoc(userDoc, {
      uid: credential.user.uid,
      username: username.toLowerCase().trim(), 
      usernameDisplay: username,               
      email: email.toLowerCase().trim(),
      avatarUrl: defaultAvatar,
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
      return false;
    }
  }
}