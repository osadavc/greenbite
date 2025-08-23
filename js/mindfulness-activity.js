// Mindfulness page interactions

// Elements
const breathToggleBtn = document.querySelector(".mind__breath-toggle");
const breathCircle = document.querySelector(".mind__breath-circle");
const breathInstruction = document.querySelector(".mind__breath-instruction");

const timerTypeSelect = document.querySelector(".mind__timer-type");
const timerMinutesInput = document.querySelector(".mind__timer-minutes");
const timerDisplayEl = document.querySelector(".mind__timer-display");
const timerStatusEl = document.querySelector(".mind__timer-status");
const timerStartBtn = document.querySelector(".mind__timer-start");
const timerResetBtn = document.querySelector(".mind__timer-reset");

const soundButtons = document.querySelectorAll(".mind__sound-btn");
const playingWrap = document.querySelector(".mind__playing");
const playingNameEl = document.querySelector(".mind__playing-name");
const stopSoundBtn = document.querySelector(".mind__stop-sound");

const sessionsCountEls = document.querySelectorAll(".mind__sessions-count");

let breathingActive = false;
let breathingPhase = "inhale"; // inhale | hold | exhale
let breathingIntervalId = null;

let timerActive = false;
let timeLeft = 0;
let timerIntervalId = null;

let activeSound = null;
let audioEl = null;
let completedSessions = 0;

// Breathing
breathToggleBtn?.addEventListener("click", () => {
  breathingActive = !breathingActive;
  breathToggleBtn.textContent = breathingActive
    ? "Stop Breathing"
    : "Start Breathing";
  if (breathingActive) startBreathingCycle();
  else stopBreathingCycle();
});

const startBreathingCycle = () => {
  if (breathingIntervalId) clearInterval(breathingIntervalId);
  setBreathingPhase("inhale");
  breathingIntervalId = setInterval(() => {
    setBreathingPhase(
      breathingPhase === "inhale"
        ? "hold"
        : breathingPhase === "hold"
        ? "exhale"
        : "inhale"
    );
  }, 4000);
};

const stopBreathingCycle = () => {
  if (breathingIntervalId) clearInterval(breathingIntervalId);
  setBreathingPhase("exhale");
  if (breathInstruction) breathInstruction.textContent = "Ready…";
};

const setBreathingPhase = (phase) => {
  breathingPhase = phase;
  if (!breathCircle) return;
  breathCircle.classList.remove(
    "is-breathing--inhale",
    "is-breathing--hold",
    "is-breathing--exhale"
  );
  breathCircle.classList.add(`is-breathing--${phase}`);
  if (breathInstruction) {
    breathInstruction.textContent =
      phase === "inhale"
        ? "Breathe In…"
        : phase === "hold"
        ? "Hold…"
        : "Breathe Out…";
  }
};

// Meditation timer
timerTypeSelect?.addEventListener("change", (e) => {
  const type = e.target.value;
  if (type === "pomodoro") {
    timerMinutesInput.value = "25";
    timerMinutesInput.disabled = true;
  } else {
    timerMinutesInput.value = "5";
    timerMinutesInput.disabled = false;
  }
  resetTimer();
});

timerMinutesInput?.addEventListener("input", () => {
  if (timerTypeSelect?.value === "pomodoro") return;
  timerMinutesInput.value = Number.parseInt(timerMinutesInput?.value) || 5;
  updateTimerDisplay();
});

const updateTimerDisplay = () => {
  const minutes = Number.parseInt(timerMinutesInput?.value) || 5;
  timerDisplayEl.textContent =
    timeLeft > 0 ? formatTime(timeLeft) : `${minutes}:00`;
};

const startPauseTimer = () => {
  if (!timerActive) {
    const type = timerTypeSelect?.value || "meditation";
    let minutes = Number.parseInt(timerMinutesInput?.value) || 5;

    if (type === "pomodoro") minutes = 25;
    if (timeLeft <= 0) timeLeft = minutes * 60;
  }

  timerActive = !timerActive;
  timerStartBtn.textContent = timerActive ? "Pause" : "Start";
  timerStatusEl.textContent = timerActive
    ? "Session in progress…"
    : "Ready to start";

  if (timerIntervalId) clearInterval(timerIntervalId);
  timerIntervalId = setInterval(tickTimer, 1000);
};

const resetTimer = () => {
  timerActive = false;
  timeLeft = 0;

  timerStartBtn.textContent = "Start";
  timerStatusEl.textContent = "Ready to start";

  updateTimerDisplay();
  if (timerIntervalId) clearInterval(timerIntervalId);
};

const tickTimer = () => {
  if (!timerActive) return;

  if (timeLeft > 0) {
    timeLeft -= 1;
    updateTimerDisplay();
    return;
  }

  timerActive = false;
  timerStartBtn.textContent = "Start";
  timerStatusEl.textContent = "Session complete";
  completedSessions += 1;
  updateSessionsCount();
  localStorage.setItem("mindfulness-sessions", String(completedSessions));
};

// Ambient sounds

const playSound = (name) => {
  if (activeSound === name) {
    stopSound();
    return;
  }

  const src = nameToFile(name);
  if (!src) return;

  if (audioEl) stopSound();
  audioEl = new Audio(src);
  audioEl.loop = true;
  audioEl.volume = 0.6;
  audioEl.play().catch(() => {});
  activeSound = name;

  soundButtons.forEach((b) =>
    b.classList.toggle("is-active", b.getAttribute("data-sound") === name)
  );
  if (playingNameEl) playingNameEl.textContent = name;
  if (playingWrap) playingWrap.style.display = "block";
};

const stopSound = () => {
  activeSound = null;

  if (audioEl) {
    audioEl.pause();
    audioEl.currentTime = 0;
  }

  soundButtons.forEach((b) => b.classList.remove("is-active"));
  if (playingWrap) playingWrap.style.display = "none";
};

const updateSessionsCount = () => {
  sessionsCountEls.forEach(
    (el) => (el.textContent = String(completedSessions))
  );
};

const saved = localStorage.getItem("mindfulness-sessions");
if (saved) {
  const parsed = Number.parseInt(saved, 10);
  if (parsed > 0) completedSessions = parsed;

  updateSessionsCount();
}

timerStartBtn?.addEventListener("click", startPauseTimer);
timerResetBtn?.addEventListener("click", resetTimer);

const nameToFile = (name) => {
  switch (name) {
    case "Rain":
      return "/assets/audio/rain.mp3";
    case "Ocean":
      return "/assets/audio/ocean.mp3";
    case "Forest":
      return "/assets/audio/forest.mp3";
    case "Birds":
      return "/assets/audio/birds.mp3";
    case "Wind":
      return "/assets/audio/wind.mp3";
    case "Fire":
      return "/assets/audio/fire.mp3";
    default:
      return null;
  }
};

soundButtons.forEach((btn) =>
  btn.addEventListener("click", () => {
    const name = btn.getAttribute("data-sound");
    playSound(name);
  })
);

stopSoundBtn?.addEventListener("click", stopSound);

updateTimerDisplay();
updateSessionsCount();
