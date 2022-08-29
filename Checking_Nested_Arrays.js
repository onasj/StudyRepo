// The Truth Counts
// Write a function, theTruthCounts, that accepts a multi-dimensional array of values as argument. theTruthCounts should return the count of all truthy values inside the multidimensional array.

// theTruthCounts([0, [true, ['yes']]]); // => 2

function theTruthCounts(arr){
  let counter = 0;
  for (let i = 0; i < arr.length; i++){
    let element = arr[i];
    if (Array.isArray(element)){
      counter += theTruthCounts(element);
    } else if (element) {
      counter += 1;
    }
  }
  return counter;
}

describe('theTruthCounts', () => {

  it('is a function', () => {
    expect(typeof theTruthCounts).toEqual('function');
  });

  it('returns a number', () => {
    let returnedValue = theTruthCounts([true, false]);
    expect(typeof returnedValue).toEqual('number');
  });

  it('returns the count of truthy values in a flat array', () => {
    let returnedValue = theTruthCounts([false, 'facts', undefined]);
    expect(returnedValue).toEqual(1);
  });

  it('returns the count of truthy values in a two-dimensional array', () => {
    let returnedValue = theTruthCounts([[0], [true], [10]]);
    expect(returnedValue).toEqual(2);
  });

  it('returns the count of truthy values in a multi-dimensional array', () => {
    let values = [1, ['true', [true, 0, 'you bet!', 20], true, null], undefined, ['yes', false, 0]];
    let returnedValue = theTruthCounts(values);
    expect(returnedValue).toEqual(7);
  });

});
