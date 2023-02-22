import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './store/actions';
import { CountState } from './store/reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  constructor(private store: Store<CountState>) {
  }

  counter$: Observable<number> = this.store.select(appState => appState.value);

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}