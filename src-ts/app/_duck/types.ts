import { CounterState } from '../home/components/counter/_duck/types';
import { BooksState } from '../books/_duck/types';

export interface ApplicationState {
  readonly counter: CounterState;
  readonly books: BooksState;
}
