const getMean = (array) =>
  array.reduce((acc, el) => acc + el, 0) / array.length;

// const testArr1 = [1, 2, 3, 4, 5];
// const testArr2 = [1, 2, 3, 4, 5, 6];
// const isEven = testArr2.length % 2 === 0;
// console.log(isEven);
// const oddListMedian = testArr1[Math.floor(testArr1.length / 2)];
// console.log(oddListMedian);
// const evenListMedian = getMean([testArr2[testArr2.length / 2 - 1],testArr2[testArr2.length / 2]]);
// console.log(evenListMedian);

const getMedian = (array) => {
  const sorted = array.toSorted((a, b) => a - b);
  const median =
    sorted.length % 2 === 0
      ? getMean([sorted[sorted.length / 2], sorted[sorted.length / 2 - 1]])
      : sorted[Math.floor(sorted.length / 2)];
  return median;
};

const getMode = (array) => {
  const counts = {};
  array.forEach((el) => {
    if (counts[el]) {
      counts[el] += 1;
    } else {
      counts[el] = 1;
    }
  });
  return counts;
};

// const numbersArr = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4];
// const counts = {};
// numbersArr.forEach((el) => {
//   if (counts[el]) {
//     counts[el] += 1;
//   } else {
//     counts[el] = 1;
//   }
// });
// console.log(numbersArr);

const calculate = () => {
  const value = document.querySelector("#numbers").value;
  const array = value.split(/,\s*/g);
  const numbers = array.map((el) => Number(el)).filter((el) => !isNaN(el));

  const mean = getMean(numbers);
  const median = getMedian(numbers);

  console.log(getMode(numbers));
  document.querySelector("#median").textContent = median;
  document.querySelector("#mean").textContent = mean;
};
