import { Injectable, inject } from '@angular/core';
import { 
  Firestore, 
  collection, 
  query, 
  orderBy, 
  limit, 
  collectionData,
  getCountFromServer,
  startAfter,
  QueryConstraint,
  where,
  QueryDocumentSnapshot,
  getDocs,
  or,
  and
} from '@angular/fire/firestore';
import { Observable, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeaderboardService {
  private firestore = inject(Firestore);
  private readonly collectionName = 'users';

  getTotalPlayersCount(): Observable<number> {
    const usersRef = collection(this.firestore, this.collectionName);
    return from(getCountFromServer(usersRef)).pipe(
      map(snapshot => snapshot.data().count)
    );
  }

  async getUserRank(score: number, uid: string): Promise<number> {
    const usersRef = collection(this.firestore, this.collectionName);
    
    const q = query(
      usersRef,
      or(
        where('highestScore', '>', score),
        and(
          where('highestScore', '==', score),
          where('__name__', '<', uid)
        )
      )
    );

    const snapshot = await getCountFromServer(q);
    return snapshot.data().count + 1;
  }

  getRankings(pageSize: number, lastDoc: QueryDocumentSnapshot | null = null): Observable<any[]> {
    const usersRef = collection(this.firestore, this.collectionName);
    const constraints: QueryConstraint[] = [
      orderBy('highestScore', 'desc'),
      orderBy('__name__', 'asc'),
      limit(pageSize)
    ];

    if (lastDoc) {
      constraints.push(startAfter(lastDoc));
    }

    const q = query(usersRef, ...constraints);
    return collectionData(q, { idField: 'uid' }) as Observable<any[]>;
  }

  async getPageCursor(pageSize: number, lastDoc: QueryDocumentSnapshot | null = null): Promise<QueryDocumentSnapshot | null> {
    const usersRef = collection(this.firestore, this.collectionName);
    const constraints: QueryConstraint[] = [
      orderBy('highestScore', 'desc'),
      orderBy('__name__', 'asc'),
      limit(pageSize)
    ];

    if (lastDoc) {
      constraints.push(startAfter(lastDoc));
    }

    const q = query(usersRef, ...constraints);
    const snapshot = await getDocs(q);
    return snapshot.docs[snapshot.docs.length - 1] || null;
  }
}