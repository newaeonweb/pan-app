import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  fit('create an instance', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});
