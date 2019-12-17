export function getWinner({ cnt_a, cnt_b }) {
  if (cnt_a >= 5 && cnt_b >= 5) {
    return "무승부입니다";
  } else if (cnt_a >= 5) {
    return "A가 이겼습니다.";
  } else if (cnt_b >= 5) {
    return "B가 이겼습니다.";
  } else {
    return null;
  }
}

export function randomGenerator() {
  const arr = [];
  const tmp = [];
  for (let i = 1; i <= 25; i++) {
    tmp.push(i);
  }
  while (tmp.length > 0) {
    arr.push(...tmp.splice(Math.floor(Math.random() * tmp.length), 1));
  }
  return arr.map(elem => {
    return {
      num: elem,
      isClicked: false
    };
  });
}

export function makeStartStage() {
  console.log("stages beforeStartStage");
  const arr = [];
  for (let i = 0; i < 25; i++) {
    arr.push({
      num: " ",
      isClicked: false
    });
  }
  return arr;
}

export function beforeStartState() {
  return {
    A: makeStartStage(),
    B: makeStartStage(),
    cnt_a: 0,
    cnt_b: 0
  };
}

export function setClicked(n, arr) {
  const result = arr.map(elem => {
    if (elem.num === n) {
      return {
        ...elem,
        isClicked: true
      };
    } else {
      return elem;
    }
  });
  return result;
}

export function countBingo(arr) {
  let cnt = 0;

  // 가로
  for (let i = 0; i < arr.length; i += 5) {
    let bng = true;
    for (let j = i; j < i + 5; j++) {
      if (!arr[j].isClicked) bng = false;
    }
    if (bng) cnt++;
  }

  // 세로
  for (let i = 0; i < 5; i++) {
    let bng = true;
    for (let j = i; j < arr.length; j += 5) {
      if (!arr[j].isClicked) bng = false;
    }
    if (bng) cnt++;
  }

  // 대각선
  let crossBng = true;
  for (let i = 0; i < arr.length; i += 6) {
    if (!arr[i].isClicked) crossBng = false;
  }
  if (crossBng) cnt++;

  crossBng = true;
  for (let i = 4; i < arr.length - 4; i += 4) {
    if (!arr[i].isClicked) crossBng = false;
  }
  if (crossBng) cnt++;

  return cnt;
}
