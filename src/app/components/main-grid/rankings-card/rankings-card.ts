import { Component, inject, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHeader } from './card-header/card-header';
import { CardBody } from './card-body/card-body';
import { CardFooter } from './card-footer/card-footer';
import { LeaderboardStoreService } from '../../../services/leaderboard.store.service';
import { Auth, user } from '@angular/fire/auth';
import { Firestore, doc, onSnapshot } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-rankings-card',
  standalone: true,
  imports: [CommonModule, CardHeader, CardBody, CardFooter],
  templateUrl: './rankings-card.html',
  styleUrl: './rankings-card.css',
})
export class RankingsCard implements OnInit, OnDestroy {
  private store = inject(LeaderboardStoreService);
  private auth = inject(Auth);
  private firestore = inject(Firestore);
  
  private authSub?: Subscription;
  private userDocSub?: () => void;

  ngOnInit(): void {
    this.store.loadPage(1);

    this.authSub = user(this.auth).subscribe((firebaseUser) => {
      if (this.userDocSub) this.userDocSub();

      if (firebaseUser) {
        const userDocRef = doc(this.firestore, `users/${firebaseUser.uid}`);
        
        this.userDocSub = onSnapshot(userDocRef, (snapshot) => {
          if (snapshot.exists()) {
            this.store.fetchAndSetCurrentUser(firebaseUser.uid, snapshot.data());
          }
        });
      } else {
        this.store.fetchAndSetCurrentUser(null, null);
      }
    });
  }

  ngOnDestroy(): void {
    this.authSub?.unsubscribe();
    if (this.userDocSub) this.userDocSub();
  }
}