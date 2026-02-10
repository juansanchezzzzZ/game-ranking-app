import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private _isPlaying = signal<boolean>(false);
  private _currentScore = signal<number>(0);

  public isPlaying = this._isPlaying.asReadonly();
  public currentScore = this._currentScore.asReadonly();

  constructor() {
    this.setupMessageListener();
  }

  startGame() {
    this._currentScore.set(0);
    this._isPlaying.set(true);
  }

  stopGame() {
    this._isPlaying.set(false);
  }

  setScore(points: number) {
    this._currentScore.set(points);
  }

  private setupMessageListener() {
    window.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'GAME_OVER') {
        this.setScore(event.data.score);
      }
    });
  }
}