import { EnumDescriptionPipe } from '../pipes/enum-description.pipe';

describe('EnumDescriptionPipe', () => {
  it('create an instance', () => {
    const pipe = new EnumDescriptionPipe();
    expect(pipe).toBeTruthy();
  });
});
