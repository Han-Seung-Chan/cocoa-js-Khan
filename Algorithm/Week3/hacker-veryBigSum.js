const bigSum = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
function solution(sum) {
  const answer = sum.reduce((pre, cur) => {
    return (pre += cur);
  });
  return answer;
}

console.log(solution(bigSum));
