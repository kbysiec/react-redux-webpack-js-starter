import { CounterState } from '../home/components/counter/_duck/types';

export interface ApplicationState {
  readonly counter: CounterState;
}
