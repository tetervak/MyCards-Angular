import { CardFactory } from './card-factory';

describe('CardFactory', () => {
  it('should create an instance', () => {
    expect(new CardFactory()).toBeTruthy();
  });
});
