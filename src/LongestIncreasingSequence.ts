const getAllIncreasingSeqs = (numbers: number[]): number[][] => {
  let round = numbers.length;
  const seqs: number[][] = [];
  while (round > 0) {
    let max: number;
    let seq: number[] = [];
    const currentArr = numbers.slice(numbers.length - round);
    console.log(currentArr);
    currentArr.forEach(num => {
      if (max === undefined) {
        max = num;
        seq.push(num);
      } else {
        if (num > max) {
          max = num;
          seq.push(num);
        }
      }
    });
    seqs.push(seq);
    round -= 1;
  }
  return seqs;
};

const findLongestSeq = (seqs: number[][]): number[] => {
  let longest: number[] = [];

  seqs.forEach(seq => {
    if (seq.length > longest.length) {
      longest = seq;
    }
  });

  return longest;
};

export { getAllIncreasingSeqs, findLongestSeq };
