import { Injectable, inject, signal } from '@angular/core';
import { Firestore, doc, updateDoc, increment } from '@angular/fire/firestore';
import { AuthService } from './auth.service'; 
import { firstValueFrom } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GameService {
  private firestore = inject(Firestore);
  private authService = inject(AuthService);

  private _isPlaying = signal(false);
  private _currentScore = signal(0);
  private _timerInterval: any;

  public isPlaying = this._isPlaying.asReadonly();
  public currentScore = this._currentScore.asReadonly();

  constructor() {
    this.setupMessageListener();
  }

  private setupMessageListener() {
    window.addEventListener('message', async (event) => {
      if (event.data?.type === 'GAME_OVER') {
        const finalScore = event.data.score;
        this._currentScore.set(finalScore);
        await this.handleScoreUpdate(finalScore);
      }
    });
  }

  private async handleScoreUpdate(newScore: number) {
    const user = await firstValueFrom(this.authService.userProfile$);
    if (!user) return;

    const userRef = doc(this.firestore, `users/${user.uid}`);
    
    if (newScore > (user.highestScore || 0)) {
      await updateDoc(userRef, { highestScore: newScore });
    }
  }

  private startTrackingTime() {
    this._timerInterval = setInterval(async () => {
      const user = await firstValueFrom(this.authService.userProfile$);
      if (user && this._isPlaying()) {
        const userRef = doc(this.firestore, `users/${user.uid}`);
        await updateDoc(userRef, {
          totalPlayTimeSec: increment(1)
        });
      }
    }, 1000);
  }

  private stopTrackingTime() {
    if (this._timerInterval) {
      clearInterval(this._timerInterval);
      this._timerInterval = null;
    }
  }

  startGame() {
    this._currentScore.set(0);
    this._isPlaying.set(true);
    this.startTrackingTime();
  }

  stopGame() {
    this._isPlaying.set(false);
    this.stopTrackingTime();
  }
}