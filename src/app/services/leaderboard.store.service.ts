import { Injectable, inject, signal, computed, OnDestroy } from '@angular/core';
import { LeaderboardService } from './leaderboard.service';
import { QueryDocumentSnapshot } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeaderboardStoreService implements OnDestroy {
  private lbService = inject(LeaderboardService);
  private subscription?: Subscription;

  readonly pageSize = 10;
  
  currentPage = signal(1);
  totalPlayers = signal(0);
  players = signal<any[]>([]);
  isLoading = signal(false);

  currentUserUid = signal<string | null>(null);
  currentUserData = signal<any | null>(null);

  private cursors = new Map<number, QueryDocumentSnapshot | null>();

  totalPages = computed(() => Math.ceil(this.totalPlayers() / this.pageSize) || 1);

  showStickyUser = computed(() => {
    const me = this.currentUserData();
    const myUid = this.currentUserUid();
    const players = this.players();
    
    if (!me || !myUid || players.length === 0) return !!me;
    return !players.some(p => String(p.uid) === String(myUid));
  });

  constructor() {
    this.cursors.set(1, null);
    this.initTotalCount();
  }

  private initTotalCount() {
    this.lbService.getTotalPlayersCount().subscribe(count => this.totalPlayers.set(count));
  }

  async fetchAndSetCurrentUser(uid: string | null, userData: any | null) {
    if (!uid || !userData) {
      this.currentUserUid.set(null);
      this.currentUserData.set(null);
      return;
    }
    try {
      const realRank = await this.lbService.getUserRank(userData.highestScore, uid);
      this.currentUserUid.set(uid);
      this.currentUserData.set({ ...userData, rank: realRank });
    } catch (error) {
      this.currentUserUid.set(uid);
      this.currentUserData.set(userData);
    }
  }

  loadPage(page: number) {
    if (page < 1 || (page > this.totalPages() && this.totalPages() !== 0)) return;

    this.subscription?.unsubscribe();
    this.isLoading.set(true);

    const currentCursor = this.cursors.get(page) ?? null;

    this.subscription = this.lbService.getRankings(this.pageSize, currentCursor).subscribe({
      next: async (data) => {
        this.players.set(data);
        this.currentPage.set(page);

        if (data.length === this.pageSize) {
          const nextCursor = await this.lbService.getPageCursor(this.pageSize, currentCursor);
          if (nextCursor) {
            this.cursors.set(page + 1, nextCursor);
          }
        }

        this.isLoading.set(false);
      },
      error: () => this.isLoading.set(false)
    });
  }

  nextPage() {
    this.loadPage(this.currentPage() + 1);
  }

  prevPage() {
    this.loadPage(this.currentPage() - 1);
  }

  setCurrentUser(uid: string | null, data: any | null) {
    this.currentUserUid.set(uid);
    this.currentUserData.set(data);
  }

  ngOnDestroy() {
    this.subscription?.unsubscribe();
  }
}