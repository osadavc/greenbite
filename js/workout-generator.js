const formEl = document.querySelector(".workout__form");
const bodyPartSelect = document.querySelector(".workout__select--bodypart");
const equipmentSelect = document.querySelector(".workout__select--equipment");
const submitBtn = document.querySelector(".workout__generate-btn");

const resultsContainer = document.querySelector(".workout__results");
const totalTimeEl = document.querySelector("#totalTime");
const exerciseListEl = document.querySelector("#exerciseList");
const timerDisplayEl = document.querySelector("#timerDisplay");
const currentExerciseNameEl = document.querySelector("#currentExerciseName");
const currentExerciseDescEl = document.querySelector("#currentExerciseDesc");
const exercisePositionEl = document.querySelector(".timer__position");
const startPauseBtn = document.querySelector(".timer__start");
const resetBtn = document.querySelector(".timer__reset");

let workoutPlansData = null;
let currentPlan = null;
let currentExerciseIndex = 0;
let timeLeftSeconds = 0;
let timerIntervalId = null;
let isActive = false;

const playBeep = () =>
  window.Tone &&
  (Tone.start(),
  new Tone.Synth().toDestination().triggerAttackRelease("C6", "16n"));

fetch("/assets/workout_plans.json")
  .then((r) => r.json())
  .then((data) => {
    workoutPlansData = data;

    Object.keys(data).forEach((bodyKey) => {
      const option = document.createElement("option");
      option.value = bodyKey;

      // to remove the hyphens and capitalize the first letter
      option.textContent = bodyKey
        .replace(/-/g, " ")
        .replace(/\b\w/g, (m) => m.toUpperCase());

      bodyPartSelect.appendChild(option);
    });
  });

bodyPartSelect.addEventListener("change", (e) => {
  const key = e.target.value;

  submitBtn.disabled = true;
  resultsContainer.style.display = "none";

  if (!key || !workoutPlansData) {
    equipmentSelect.innerHTML = '<option value="">Select equipment</option>';
    equipmentSelect.disabled = true;
    return;
  }

  buildEquipmentOptions(workoutPlansData[key]);
});

const buildEquipmentOptions = (equipmentMap) => {
  equipmentSelect.innerHTML = '<option value="">Select equipment</option>';

  Object.keys(equipmentMap).forEach((equipKey) => {
    const option = document.createElement("option");
    option.value = equipKey;

    option.textContent = equipKey
      .replace(/-/g, " ")
      .replace(/\b\w/g, (m) => m.toUpperCase());
    equipmentSelect.appendChild(option);
  });

  equipmentSelect.disabled = false;
};

formEl.addEventListener("submit", (e) => {
  e.preventDefault();

  const bodyKey = bodyPartSelect.value;
  const equipKey = equipmentSelect.value;

  if (!bodyKey || !equipKey) return;
  handleGenerate(bodyKey, equipKey);
});

const handleGenerate = (bodyKey, equipKey) => {
  const selected = workoutPlansData?.[bodyKey]?.[equipKey];
  if (!selected) return;

  currentPlan = {
    ...selected,
    totalTime: Number(selected.totalTime),
  };

  totalTimeEl.textContent = formatTime(currentPlan.totalTime);

  // making it visible
  resultsContainer.style.display = "grid";
  resetTimer();
};

const startStopTimer = () => {
  if (!currentPlan) return;
  isActive = !isActive;
  startPauseBtn.textContent = isActive ? "Pause" : "Start";

  if (timerIntervalId) clearInterval(timerIntervalId);
  timerIntervalId = setInterval(tick, 1000);
};

const tick = () => {
  if (!isActive) return;
  if (timeLeftSeconds > 0) {
    timeLeftSeconds -= 1;
    timerDisplayEl.textContent = formatTime(timeLeftSeconds);
    return;
  }

  if (currentPlan && currentExerciseIndex < currentPlan.exercises.length - 1) {
    currentExerciseIndex += 1;
    timeLeftSeconds = currentPlan.exercises[currentExerciseIndex].duration;
    renderTimer();
    updateExerciseList();
    playBeep();
  } else {
    isActive = false;
    startPauseBtn.textContent = "Start";
    playBeep();
    timerDisplayEl.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.1)" },
        { transform: "scale(1)" },
      ],
      { duration: 600 }
    );
  }
};

const updateExerciseList = () => {
  if (!currentPlan) {
    exerciseListEl.innerHTML = "";
    return;
  }

  exerciseListEl.innerHTML = "";
  currentPlan.exercises.forEach((exercise, idx) => {
    const item = document.createElement("div");
    item.className = `exercise__item${
      idx === currentExerciseIndex ? " exercise__item--active" : ""
    }`;

    const left = document.createElement("div");

    const name = document.createElement("div");
    name.textContent = exercise.name;
    name.style.fontWeight = "600";
    left.appendChild(name);

    const desc = document.createElement("div");
    desc.textContent = exercise.description;
    desc.style.color = "#666";
    desc.style.fontSize = "0.95rem";
    left.appendChild(desc);

    const meta = document.createElement("span");
    meta.className = "exercise__meta";
    meta.textContent = formatTime(exercise.duration);

    item.appendChild(left);
    item.appendChild(meta);
    exerciseListEl.appendChild(item);
  });
};

const renderTimer = () => {
  if (!currentPlan) return;
  timerDisplayEl.textContent = formatTime(timeLeftSeconds);

  const exercise = currentPlan.exercises[currentExerciseIndex];
  currentExerciseNameEl.textContent = exercise?.name || "—";
  currentExerciseDescEl.textContent = exercise?.description || "—";
  exercisePositionEl.textContent = `Exercise ${currentExerciseIndex + 1} of ${
    currentPlan.exercises.length
  }`;
};

const resetTimer = () => {
  if (!currentPlan) return;
  currentExerciseIndex = 0;
  timeLeftSeconds = currentPlan.exercises[0].duration;
  isActive = false;

  if (timerIntervalId) clearInterval(timerIntervalId);
  renderTimer();
  updateExerciseList();
  startPauseBtn.textContent = "Start";
};

equipmentSelect.addEventListener("change", () => {
  submitBtn.disabled = !(bodyPartSelect.value && equipmentSelect.value);
});

startPauseBtn.addEventListener("click", startStopTimer);
resetBtn.addEventListener("click", resetTimer);
