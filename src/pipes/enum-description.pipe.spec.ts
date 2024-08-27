import { EnumDescriptionPipe } from './enum-description.pipe';
import { BookTypeEnum } from '../enums/book-type.enum';

describe('EnumDescriptionPipe', () => {
  let pipe: EnumDescriptionPipe;
  let mockTypes: { code: string; name: string }[];

  beforeEach(() => {
    pipe = new EnumDescriptionPipe();
    mockTypes = [
      { code: 'Programming', name: 'Programming' },
      { code: 'English', name: 'English' },
    ];
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return the correct name for a given code', () => {
    const result = pipe.transform('Programming', mockTypes);
    console.log('Test: should return the correct name for a given code');
    console.log('Input value: Programming');
    console.log('Mock types:', mockTypes);
    console.log('Result:', result);
    expect(result).toBe('Programming');
  });

  it('should return null for an unknown code', () => {
    const result = pipe.transform('unknown', mockTypes);
    console.log('Test: should return null for an unknown code');
    console.log('Input value: unknown');
    console.log('Mock types:', mockTypes);
    console.log('Result:', result);
    expect(result).toBeNull();
  });

  it('should return null for an empty code', () => {
    const result = pipe.transform('', mockTypes);
    console.log('Test: should return null for an empty code');
    console.log('Input value: ""');
    console.log('Mock types:', mockTypes);
    console.log('Result:', result);
    expect(result).toBeNull();
  });

  it('should return null for a null code', () => {
    const result = pipe.transform(null, mockTypes);
    console.log('Test: should return null for a null code');
    console.log('Input value: null');
    console.log('Mock types:', mockTypes);
    console.log('Result:', result);
    expect(result).toBeNull();
  });

  it('should return null for a valid code with an empty list of items', () => {
    const result = pipe.transform('Programming', []);
    console.log(
      'Test: should return null for a valid code with an empty list of items'
    );
    console.log('Input value: Programming');
    console.log('Mock types: []');
    console.log('Result:', result);
    expect(result).toBeNull();
  });
});
