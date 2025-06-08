// === 작업 기억력 실험 전체 코드 (main_trials 포함) ===

const main_trials = [
  { sentence: "아무리 우리가 그에게 말해도, 그는 절대 변하지 않을 것이다.", plausible: true, letter: "ㅈ" },
  { sentence: "교수의 접시는 사실에 기반하지 않았기 때문에 잃어버렸다.", plausible: false, letter: "ㅁ" },
  { sentence: "가끔씩 나는 벽을 멍하게 헤엄치고 있는 나 자신을 발견한다.", plausible: false, letter: "ㅍ" },
  { sentence: "우리가 바다에서 1km의 잔디만큼 나갔을 때 육지가 보이지 않았다.", plausible: false, letter: "ㅅ" },
  { sentence: "그 힘든 시련 동안에도, 야구 선수들은 절대 희망을 잃지 않는 것처럼 보였다.", plausible: true, letter: "ㄴ" },
  { sentence: "진수는 고소공포증이 있어 비행기를 타는 것을 거절했다.", plausible: true, letter: "ㄹ" },
  { sentence: "어린 연필은 \"봐도 된다\"는 말을 들을 때까지 눈을 감고 있었다.", plausible: false, letter: "ㅂ" },
  { sentence: "웃는 사람들 대부분은 체중 조절에 신경을 쓴다.", plausible: false, letter: "ㅋ" },
  { sentence: "혜리는 쇼핑할 때 항상 가장 낮은 홍수를 찾는다.", plausible: false, letter: "ㅎ" },
  { sentence: "아침에 일어나서 내가 가장 먼저 하는 일은 개에게 밥을 주는 것이다.", plausible: true, letter: "ㅁ" },
  { sentence: "경기에서 소리를 지른 후, 나는 키 큰 목소리를 가질 것임을 알았다.", plausible: false, letter: "ㅅ" },
  { sentence: "예나는 새 쇼핑몰에 들러 몇 가지 물건을 사오라는 부탁을 받았다.", plausible: true, letter: "ㄹ" },
  { sentence: "추울 때, 엄마는 항상 내 머리에 모자를 씌워 주신다.", plausible: true, letter: "ㅋ" },
  { sentence: "모든 부모는 그들의 명단이 똑똑하게 자라기를 바란다.", plausible: false, letter: "ㅎ" },
  { sentence: "미나과 준수가 캐나다로 이사할 때, 그들의 소원은 큰 차고 세일을 열었다.", plausible: false, letter: "ㅂ" },
  { sentence: "가을에 나와 내 선물은 마당에서 함께 일하는 것을 좋아한다.", plausible: false, letter: "ㅍ" },
  { sentence: "어제 아침 교회에서, 누리의 딸은 끔찍한 자두를 만들었다.", plausible: false, letter: "ㄷ" },
  { sentence: "사슴은 사냥꾼을 알아차리지 못한 채, 사냥꾼의 사격 범위에 들어왔다.", plausible: true, letter: "ㅊ" },
  { sentence: "그것이 마지막 게임이었기 때문에 패배를 받아들이기가 어려웠다.", plausible: true, letter: "ㅌ" },
  { sentence: "아현이는 칼에 일찍 도착했기 때문에 주로 좋은 주차 자리를 얻는다.", plausible: false, letter: "ㅂ" },
  { sentence: "세형이가 그의 첫 번째 그릇에 가졌던 유일한 가구는 물침대였다.", plausible: false, letter: "ㅇ" },
  { sentence: "작년에 미진이는 복도에서 뛰었다는 이유로 벌을 받았다.", plausible: true, letter: "ㅍ" },
  { sentence: "거대한 구름이 아침 과자를 덮었고 비가 내리기 시작했다.", plausible: false, letter: "ㅌ" },
  { sentence: "한 번의 데이트 후, 나는 민지의 여동생이 내 이상형이 아니라는 것을 알았다.", plausible: true, letter: "ㅊ" },
  { sentence: "진수는 나무에서 떨어져 땅에 부딪혔을 때 팔이 부러졌다.", plausible: true, letter: "ㅎ" },
  { sentence: "대부분의 사람들은 월요일이 한 주의 최악의 막대기라고 동의한다.", plausible: false, letter: "ㄹ" },
  { sentence: "따뜻하고 화창한 오후에는 공원을 걷는 것을 좋아한다.", plausible: true, letter: "ㅍ" },
  { sentence: "그는 강한 의지로 모든 장애물을 극복하고 경주에서 우승했다.", plausible: true, letter: "ㄷ" },
  { sentence: "사람은 인종을 이유로 차별을 받아서는 안 된다.", plausible: true, letter: "ㅁ" },
  { sentence: "어머니는 항상 반짝이는 것은 예의가 아니라고 말씀하셨다.", plausible: false, letter: "ㅊ" },
  { sentence: "레몬 에이드 선수들은 3세트 중 2세트를 출전하기로 결정했다.", plausible: false, letter: "ㅌ" },
  { sentence: "아이를 키우는 것은 많은 먼지와 단호한 태도를 요구한다.", plausible: false, letter: "ㅎ" },
  { sentence: "모여 있던 사람들은 총소리를 듣고 돌아보았다.", plausible: true, letter: "ㅈ" },
  { sentence: "이 부러움 가지는 것을 끝내고 나면 집에 갈 것이다.", plausible: false, letter: "ㅅ" },
  { sentence: "수진이는 지갑을 열어 돈이 없다는 것을 발견했다.", plausible: true, letter: "ㅋ" },
  { sentence: "혜진이는 뒷마당에 정원을 원했지만, 식물을 키우기 부적절한 땅이었다.", plausible: true, letter: "ㄹ" },
  { sentence: "혜원이는 그가 아내가 있다는 것을 알게 된 후 빛과의 데이트를 그만뒀다.", plausible: false, letter: "ㅌ" },
  { sentence: "나는 학생들에게 \"너희가 주황색이라면 깜짝 선물을 받을 것이다\"라고 말했다.", plausible: false, letter: "ㅈ" },
  { sentence: "미나는 공부에 너무 지쳐서 책 한 페이지도 더 읽을 수 없었다.", plausible: true, letter: "ㅅ" },
  { sentence: "진규는 때로는 비꼬지만, 매우 상냥할 때도 있다.", plausible: true, letter: "ㄹ" },
  { sentence: "그녀는 그녀의 운동화에 멕시코행 비행기 요금을 물어볼 것이다.", plausible: false, letter: "ㄴ" },
  { sentence: "설탕은 자신이 이렇게 좋은 거래를 제공받는 것을 믿을 수 없었다.", plausible: false, letter: "ㄷ" }
];



const jsPsych = initJsPsych();


let timeline = [];
let recall_letters = [];

// 참가자 정보 입력 화면
timeline.push({
  type: jsPsychSurveyHtmlForm,
  preamble: `
    <h2 style="text-align:center">🧠 기억력 실험</h2>
    <p style="text-align:center">아래 정보를 입력하고 시작하세요.</p>
  `,
  html: `
    <p><label>👩‍🎓 학년: <strong>2학년</strong></label></p>
    <p><label>🏫 반:
      <select name="class" required>
        <option value="">-- 반을 선택하세요 --</option>
        <option value="1반">1반</option>
        <option value="2반">2반</option>
        <option value="3반">3반</option>
        <option value="4반">4반</option>
        <option value="5반">5반</option>
        <option value="6반">6반</option>
        <option value="7반">7반</option>
        <option value="8반">8반</option>
      </select>
    </label></p>
    <p><label>🔢 번호:
      <input name="number" type="number" required placeholder="예: 12">
    </label></p>
    <p><label>📝 이름:
      <input name="name" type="text" required placeholder="예: 홍길동">
    </label></p>
  `,
  button_label: '✅ 실험 시작',
  on_finish: function(data){
    const responses = data.response;
    jsPsych.data.addProperties({
      class: responses.class,
      number: responses.number,
      name: responses.name
    });
  }
});


// 안내화면
timeline.push({
  type: jsPsychHtmlButtonResponse,
  stimulus: `<h3>실험 안내</h3><p>제시되는 문장을 읽고 그 의미가 자연스러운지 판단한 후 <br> <strong>예(자연스러움)</strong> / <strong>아니오(자연스럽지 않음)</strong>를 <br> 빠르고 정확하게 선택하세요.<br>이후 화면에 나오는 자음을 기억하세요.<br>2~5개 세트가 끝나면 등장했던 자음을 순서대로 정확하게 떠올려 선택합니다.<br>먼저 연습 세트를 시작합니다.</p>`,
  choices: ['연습 시작']
});

// 연습 세트
const practice_blocks = [
  [
    { sentence: "의자가 방 구석에서 쉬면서 샌드위치를 먹었습니다.", plausible: false, letter: "ㄱ" },
    { sentence: "정원에 있는 꽃은 매년 봄마다 화사하게 피어나며 정원에 색을 더합니다.", plausible: true, letter: "ㅇ" }
  ],
  [
    { sentence: "고양이가 우아하게 창틀 위로 뛰어올랐습니다.", plausible: true, letter: "ㅎ" },
    { sentence: "시계가 테이블 위에서 해가 뜨는 동안 춤을 추며 즐거워했습니다.", plausible: false, letter: "ㄷ" },
    { sentence: "도서관 사서가 책꽂이에 있는 책들을 알파벳 순서로 정리했습니다.", plausible: true, letter: "ㄱ" }
  ]
];

const shuffled = jsPsych.randomization.shuffle(main_trials); // 전체 자극 셔플
const main_blocks = [];

let i = 0;
for (let set = 0; set < 3; set++) {
  // 하위 블록 크기 2,3,4,5를 무작위 순서로 섞기
  const block_sizes = jsPsych.randomization.shuffle([2, 3, 4, 5]);

  block_sizes.forEach(size => {
    const block = shuffled.slice(i, i + size);
    main_blocks.push(block);
    i += size;
  });
}


// 버튼 생성 recall 화면
function getRecallTrial(n, correct_letters) {
  return {
    type: jsPsychHtmlButtonResponse,
    stimulus: function () {
      let html = `<p>기억난 자음을 순서대로 누르세요.</p><div id='recall-display' data-max='${n}'></div>`;
      ['ㄱ','ㄴ','ㄷ','ㄹ','ㅁ','ㅂ','ㅅ','ㅇ','ㅈ','ㅊ','ㅋ','ㅌ','ㅍ','ㅎ', '모름'].forEach(l => {
        html += `<button onclick='addLetter("${l}")'>${l}</button>`;
      });
      html += `<button onclick='removeLetter()'>지우기</button>`;
      return html;
    },
    choices: ['제출'],
    on_finish: (data) => {
      const recalled_str = recall_letters.join('');
      const correct_str = correct_letters.join('');
      const acc = recalled_str === correct_str ? 1 : 0;

      data.trial_type = 'recall';
      data.recalled = recalled_str;
      data.correct = correct_str;
      data.accuracy = acc;
      data.recall_rt = data.rt;
      recall_letters = [];
    }
  };
}

// add/removeLetter 함수 전역 정의
window.addLetter = l => {
  const d = document.getElementById('recall-display');
  if (d.children.length < parseInt(d.dataset.max)) {
    const box = document.createElement('span');
    box.textContent = l;
    d.appendChild(box);
    recall_letters.push(l);
  }
};

window.removeLetter = () => {
  const d = document.getElementById('recall-display');
  if (d.lastChild) {
    d.removeChild(d.lastChild);
    recall_letters.pop();
  }
};

function addTrialsFromBlocks(blocks, phase) {
  blocks.forEach(block => {
    const correct_letters_block = [];
    block.forEach(trial => {
      timeline.push({
        type: jsPsychHtmlButtonResponse,
        stimulus: `<p>${trial.sentence}</p>`,
        choices: ['예(자연스러움)', '아니오(자연스럽지 않음)'],
        data: {
          phase,
          trial_type: 'judgment',
          correct: trial.plausible ? '예(자연스러움)' : '아니오(자연스럽지 않음)',
          letter: trial.letter
        },
        on_finish: (data) => {
          data.correct_response = data.correct;
          const correctIndex = data.correct === '예(자연스러움)' ? 0 : 1;
          data.accuracy = data.response == correctIndex ? 1 : 0;
        }
      });
      timeline.push({
        type: jsPsychHtmlKeyboardResponse,
        stimulus: `<p style='font-size: 48px;'>${trial.letter}</p>`,
        choices: 'NO_KEYS',
        trial_duration: 1000,
        data: { phase, trial_type: 'letter', letter: trial.letter },
        on_finish: () => {
          recall_letters.push(trial.letter);
          correct_letters_block.push(trial.letter);
        }
      });
    });
    timeline.push(getRecallTrial(block.length, correct_letters_block));
  });
}

addTrialsFromBlocks(practice_blocks, 'practice');
timeline.push({
  type: jsPsychHtmlButtonResponse,
  stimulus: '<h3>이제 본 실험을 시작합니다</h3>',
  choices: ['시작']
});
addTrialsFromBlocks(main_blocks, 'main');

timeline.push({
  type: jsPsychHtmlButtonResponse,
  stimulus: "<h2 style='text-align:center; color: green;'>🎉 실험이 끝났습니다.<br>참여해 주셔서 감사합니다!</h2><p style='text-align:center;'>아래 버튼을 눌러 제출을 완료하세요.</p>",
  choices: ['✅ 제출 완료'],
  on_finish: async () => {
    const allData = jsPsych.data.get().values();
    const formattedData = allData.map(trial => ({
      name: trial.name || '',
      class: trial.class || '',
      number: trial.number || '',
      phase: trial.phase || '',
      trial_type: trial.trial_type || '',
      sentence: trial.stimulus?.replace(/<[^>]*>?/gm, '') || '',
      plausible: trial.correct || '',
      response: trial.response || '',
      accuracy: trial.accuracy || '',
      letter: trial.letter || '',
      recalled: trial.recalled || '',
      correct: trial.correct || '',
      recall_rt: trial.recall_rt || ''
    }));

    try {
      await fetch("https://sheetdb.io/api/v1/agwdlifh2ffko", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: formattedData })
      });
      alert("제출 완료! 감사합니다.");
    } catch (e) {
      alert("제출 중 오류 발생: " + e.message);
    }
  }
});




jsPsych.run(timeline);
