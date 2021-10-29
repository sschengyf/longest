import { getAllIncreasingSeqs, findLongestSeq } from './LongestIncreasingSequence';

describe('Longest Increasing Sequence', () => {
  test('#getAllIncreasingSeqs', () => {
    expect(getAllIncreasingSeqs([6, 3, 5, 2, 7])).toEqual([[6, 7], [3, 5, 7], [5, 7], [2, 7], [7]]);
  });

  test('#findLongestSeq', () => {
    expect(findLongestSeq([[6, 7], [3, 5, 7], [5, 7], [2, 7], [7]])).toEqual([3, 5, 7]);
  });
});
