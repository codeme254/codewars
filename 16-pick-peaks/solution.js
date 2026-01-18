function isPeak(arr, index) {
  // return true if element at position index is peak
  // an element is peak if it is greater than the elements before and after it
  // the first and the last element are not considered to be peak
  // [1, 2, 2, 2] -> the first 2 is peak, the rest are not
  // [1, 2, 2, 3] -> no peak
  // [1, 2, 2, 1] -> the first 2 is peak
  // TODO: Catch with plateaus
  if (index === 0 || index >= arr.length) return false;

  const element = arr[index];
  const elementBefore = arr[index - 1];
  const elementAfter = arr[index + 1];

  if (elementBefore >= element || elementAfter > element) return false;

  // Check for plateaus
  for (let i = index + 1; i < arr.length; i++) {
    if (arr[i] > element) return false;
    if (arr[i] < element) return true;
  }
  return false;
}

function pickPeaks(arr) {
  const result = { pos: [], peaks: [] };
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i], isPeak(arr, i))
    if (isPeak(arr, i)) {
      result.pos.push(i);
      result.peaks.push(arr[i]);
    }
  }
  return result;
}

// describe("Sample tests", function() {
//   it("Tests", function() {
//     assert.deepEqual(pickPeaks([1,2,3,6,4,1,2,3,2,1]), {pos:[3,7], peaks:[6,3]});
//     assert.deepEqual(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,3]), {pos:[3,7], peaks:[6,3]});
//     assert.deepEqual(pickPeaks([3,2,3,6,4,1,2,3,2,1,2,2,2,1]), {pos:[3,7,10], peaks:[6,3,2]});
//     assert.deepEqual(pickPeaks([2,1,3,1,2,2,2,2,1]), {pos:[2,4], peaks:[3,2]});
//     assert.deepEqual(pickPeaks([2,1,3,1,2,2,2,2]), {pos:[2], peaks:[3]});
//     assert.deepEqual(pickPeaks([2,1,3,2,2,2,2,5,6]), {pos:[2], peaks:[3]});
//     assert.deepEqual(pickPeaks([2,1,3,2,2,2,2,1]), {pos:[2], peaks:[3]});
//     assert.deepEqual(pickPeaks([1,2,5,4,3,2,3,6,4,1,2,3,3,4,5,3,2,1,2,3,5,5,4,3]), {pos:[2,7,14,20], peaks:[5,6,5,5]});
//     assert.deepEqual(pickPeaks([]),{pos:[],peaks:[]});
//     assert.deepEqual(pickPeaks([1,1,1,1]),{pos:[],peaks:[]});
//   });
// });
