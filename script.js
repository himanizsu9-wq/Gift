const reasons = [
  "Your smile brightens my day.",
  "You make me feel loved, even from miles away.",
  "You remember the little details about me.",
  "Your supportive nature.",
  "You laugh at my jokes, even the bad ones.",
  "Your patience.",
  "You always check on me.",
  "Your passion for your goals.",
  "The sound of your voice makes everything better.",
  "You make me feel safe, even over a call.",
  "You cheer me up when I am down.",
  "You inspire me to be a better person.",
  "Your thoughtful surprises.",
  "The way you say my name.",
  "You make time for me despite your busy schedule.",
  "Your goofy side.",
  "Your kindness to others.",
  "You talk about your dreams and include me in them.",
  "The way you look at me on video calls.",
  "You are not afraid to show vulnerability.",
  "Your honesty.",
  "The way you plan for our future.",
  "Your creativity.",
  "You are my biggest cheerleader.",
  "Your taste in music.",
  "You understand me without words.",
  "Your incredible sense of humor.",
  "You respect my opinions.",
  "Your random texts that make my day.",
  "You send me pictures of things that remind you of me.",
  "Your protective side.",
  "You stay up late just to talk to me.",
  "You encourage me to chase my dreams.",
  "Your loyalty.",
  "You prioritize our relationship.",
  "Your adventurous spirit.",
  "You always know the right thing to say.",
  "Your morning texts.",
  "Your late-night calls.",
  "You send me TikToks to make me laugh.",
  "You challenge me intellectually.",
  "Your warmth and affection.",
  "You love me for who I am.",
  "Your willingness to compromise.",
  "You always have my back.",
  "You make simple moments special.",
  "Your confidence in us.",
  "You share your favorite things with me.",
  "You are not afraid to be silly with me.",
  "Your hardworking nature.",
  "You make me feel like the luckiest person in the world.",
  "Your determination.",
  "You encourage me when I doubt myself.",
  "Your romantic gestures.",
  "You make me laugh until I cry.",
  "Your curiosity about the world.",
  "You love learning new things.",
  "Your thoughtfulness during special occasions.",
  "You make me feel special every day.",
  "You make everything feel less scary.",
  "You remind me that distance is temporary.",
  "Your understanding of my flaws.",
  "You accept my quirks.",
  "You celebrate my victories, big or small.",
  "Your voice notes that I replay a hundred times.",
  "You comfort me when I am sad.",
  "You are always up for a spontaneous plan.",
  "Your amazing cooking skills, and even the attempts.",
  "You make boring conversations fun.",
  "You remind me that I am not alone.",
  "Your resilience through challenges.",
  "You motivate me to be better.",
  "Your love for your family.",
  "You share your childhood stories with me.",
  "Your determination to make our relationship work.",
  "You make me laugh when I least expect it.",
  "You are always willing to listen.",
  "Your gentle touch, even when it is just virtual hugs.",
  "You include me in your world.",
  "Your optimism about our future together.",
  "You remember my favorite things.",
  "Your encouragement when I am nervous.",
  "You celebrate our anniversaries, even virtually.",
  "Your fascination with new ideas.",
  "You make me feel like a priority.",
  "You send me playlists that remind me of you.",
  "Your trust in me.",
  "You respect my independence.",
  "You keep our love exciting.",
  "Your cute nicknames for me.",
  "You make long-distance feel not so far.",
  "You value our relationship.",
  "Your hugs, even though I cannot wait for real ones.",
  "You talk about our future trips together.",
  "Your ability to adapt to any situation.",
  "You never let me feel forgotten.",
  "Your late-night I miss you messages.",
  "You share your life with me, no matter the distance.",
  "Your belief in us.",
  "You look out for my well-being.",
  "You are always curious about my day.",
  "Your sense of style.",
  "You light up my world.",
  "You reassure me when I feel insecure.",
  "You make small moments unforgettable.",
  "You love sharing your interests with me.",
  "Your contagious enthusiasm.",
  "You say I love you like you mean it.",
  "You love trying new things.",
  "You dream big and motivate me to do the same.",
  "Your interesting selfies.",
  "You make me laugh with your stories.",
  "You never fail to make me smile.",
  "Your goodnights before bed in French.",
  "You include me in your future goals.",
  "Your dedication to making me happy.",
  "You let me vent when I need to.",
  "You calm me down when I am stressed.",
  "You make every conversation meaningful.",
  "Your support through thick and thin.",
  "You celebrate our small milestones.",
  "Your love for the simple joys in life.",
  "You always try to find solutions with me.",
  "You appreciate the little things I do.",
  "You are my safe space.",
  "Your incredible work ethic.",
  "You are the first person I want to tell everything to.",
  "Your goofy dance moves.",
  "You make me feel like the only person in the world.",
  "You always find time for us.",
  "Your commitment to our love.",
  "You accept me as I am.",
  "Your sweet compliments.",
  "You make me feel secure in our relationship.",
  "You teach me new things.",
  "Your playful teasing.",
  "You are always looking for ways to grow together.",
  "Your silly jokes that only we understand.",
  "You make me feel like I am home.",
  "Your calming presence.",
  "You push me to be my best self.",
  "Your unique perspective on life.",
  "You make me believe in love.",
  "You love and respect me unconditionally.",
  "You remind me that I am worthy of love.",
  "Your passion for life.",
  "You make me feel cherished.",
  "You keep me grounded.",
  "Your thoughtful gifts.",
  "You celebrate my uniqueness.",
  "You make me excited for the future.",
  "Your positivity.",
  "You embrace my flaws.",
  "Your gentle words of encouragement.",
  "You bring out the best in me.",
  "You support my passions.",
  "Your sweet letters and messages.",
  "You talk about me with so much pride.",
  "You are always excited to share your day with me.",
  "Your patience when I am moody.",
  "You make me feel seen and heard.",
  "You bring joy to my life every day.",
  "Your adorable quirks.",
  "You make me feel like I belong.",
  "You never give up on us.",
  "Your unconditional love for me.",
  "You make the world feel smaller.",
  "You make me excited for the day we finally close the distance."
];

const defaultMovies = {
  watched: [
    { title: "La La Land", himani: "299292929292/10", william: "0/10" },
    { title: "500 Days of Summer", himani: "Zzz/10", william: "6/10" },
    { title: "Everything Everywhere All at Once", himani: "5/10", william: "6/10" },
    { title: "Deadpool 3", himani: "5.8/10", william: "5.8/10" },
    { title: "Tarot", himani: "4/10", william: "3/10" },
    { title: "Late Night with the Devil", himani: "8/10", william: "7.3/10" },
    { title: "Longlegs", himani: "4/10", william: "6ish/10" },
    { title: "Trapped", himani: "6/10", william: "7/10" },
    { title: "The Fault in Our Stars", himani: "8/10", william: "7.3/10" },
    { title: "The Gorge", himani: "8/10", william: "8.6/10" },
    { title: "The Batman 2022", himani: "7/10", william: "glaze/10" },
    { title: "Thunderbolts", himani: "3/10", william: "5.7432/10" },
    { title: "Barbarian", himani: "4/10", william: "" }
  ],
  want: [
    { title: "The Notebook" },
    { title: "The Place Beyond the Pines" },
    { title: "Waves" },
    { title: "Barbie" },
    { title: "Garfield" },
    { title: "Thousand Year Blood War" },
    { title: "It Ends with Us" },
    { title: "10 Things I Hate About You" }
  ]
};

const permanentPlutoPhotos = [
  "pluto-01.heic",
  "pluto-02.heic",
  "pluto-03.png",
  "pluto-04.png",
  "pluto-05.jpg",
  "pluto-06.heic",
  "pluto-07.heic",
  "pluto-08.heic",
  "pluto-09.heic",
  "pluto-10.heic",
  "pluto-11.heic",
  "pluto-12.heic",
  "pluto-13.heic",
  "pluto-14.heic",
  "pluto-15.heic",
  "pluto-16.heic",
  "pluto-17.heic",
  "pluto-18.heic",
  "pluto-19.heic",
  "pluto-20.heic",
  "pluto-21.heic",
  "pluto-22.heic",
  "pluto-23.heic",
  "pluto-24.heic",
  "pluto-25.heic",
  "pluto-26.heic",
  "pluto-27.heic",
  "pluto-28.heic",
  "pluto-29.heic",
  "pluto-30.heic",
  "pluto-31.heic",
  "pluto-32.heic",
  "pluto-33.heic",
  "pluto-34.heic",
  "pluto-35.heic",
  "pluto-36.heic",
  "pluto-37.heic",
  "pluto-38.heic",
  "pluto-39.heic",
  "pluto-40.heic",
  "pluto-41.heic",
  "pluto-42.heic",
  "pluto-43.heic",
  "pluto-44.heic",
  "pluto-45.heic",
  "pluto-46.heic",
  "pluto-47.heic",
  "pluto-48.heic",
  "pluto-49.heic",
  "pluto-50.heic",
  "pluto-51.heic",
  "pluto-52.heic"
].map((name, index) => ({
  name: `Pluto photo ${index + 1}`,
  src: `assets/pluto/${name}`,
  permanent: true
}));

const storageKey = "hw-anniversary-v1";
const photoKey = "hw-pluto-photos-v1";

let reasonIndex = 0;
let movies = loadMovies();
let plutoPhotos = loadPhotos();

const reasonCard = document.querySelector("#reason-card");
const reasonCount = document.querySelector("#reason-count");
const reasonText = document.querySelector("#reason-text");

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach((tab) => tab.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#${button.dataset.tab}`).classList.add("active");
  });
});

document.querySelector("#prev-reason").addEventListener("click", () => changeReason(-1));
document.querySelector("#next-reason").addEventListener("click", () => changeReason(1));
document.querySelector("#flip-reason").addEventListener("click", () => changeReason(1));
document.querySelector("#random-reason").addEventListener("click", () => {
  let next = Math.floor(Math.random() * reasons.length);
  if (next === reasonIndex) next = (next + 1) % reasons.length;
  setReason(next, true);
});

document.querySelector("#watched-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  movies.watched.unshift({
    title: form.get("title").trim(),
    himani: form.get("himani").trim(),
    william: form.get("william").trim()
  });
  event.currentTarget.reset();
  saveMovies();
  renderMovies();
});

document.querySelector("#want-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  movies.want.unshift({ title: form.get("title").trim() });
  event.currentTarget.reset();
  saveMovies();
  renderMovies();
});

document.querySelector("#pluto-upload").addEventListener("change", async (event) => {
  const files = Array.from(event.target.files || []);
  const photos = await Promise.all(files.map(readPhoto));
  plutoPhotos = [...photos, ...plutoPhotos].slice(0, 60);
  savePhotos();
  renderPhotos();
  event.target.value = "";
});

document.querySelector("#clear-pluto").addEventListener("click", () => {
  plutoPhotos = [];
  savePhotos();
  renderPhotos();
});

function setReason(index, animate = false) {
  reasonIndex = (index + reasons.length) % reasons.length;
  if (animate) {
    reasonCard.classList.remove("flipping");
    void reasonCard.offsetWidth;
    reasonCard.classList.add("flipping");
  }
  window.setTimeout(
    () => {
      reasonCount.textContent = `Reason ${reasonIndex + 1} of ${reasons.length}`;
      reasonText.textContent = reasons[reasonIndex];
    },
    animate ? 150 : 0
  );
}

function changeReason(direction) {
  setReason(reasonIndex + direction, true);
}

function loadMovies() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || structuredClone(defaultMovies);
  } catch {
    return structuredClone(defaultMovies);
  }
}

function saveMovies() {
  localStorage.setItem(storageKey, JSON.stringify(movies));
}

function renderMovies() {
  const watchedList = document.querySelector("#watched-list");
  const wantList = document.querySelector("#want-list");
  watchedList.innerHTML = movies.watched.map((movie, index) => watchedTemplate(movie, index)).join("");
  wantList.innerHTML = movies.want.map((movie, index) => wantTemplate(movie, index)).join("");
  document.querySelector("#watched-count").textContent = movies.watched.length;
  document.querySelector("#want-count").textContent = movies.want.length;

  watchedList.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      movies.watched.splice(Number(button.dataset.delete), 1);
      saveMovies();
      renderMovies();
    });
  });

  wantList.querySelectorAll("[data-delete]").forEach((button) => {
    button.addEventListener("click", () => {
      movies.want.splice(Number(button.dataset.delete), 1);
      saveMovies();
      renderMovies();
    });
  });
}

function watchedTemplate(movie, index) {
  return `
    <article class="movie-item">
      <div class="movie-title-row">
        <h4 class="movie-title">${escapeHtml(movie.title)}</h4>
        <button class="delete-button" type="button" aria-label="Delete ${escapeHtml(movie.title)}" data-delete="${index}">&times;</button>
      </div>
      <div class="ratings">
        <span>Himani: ${escapeHtml(movie.himani || "not rated yet")}</span>
        <span>William: ${escapeHtml(movie.william || "not rated yet")}</span>
      </div>
    </article>
  `;
}

function wantTemplate(movie, index) {
  return `
    <article class="movie-item">
      <div class="movie-title-row">
        <h4 class="movie-title">${escapeHtml(movie.title)}</h4>
        <button class="delete-button" type="button" aria-label="Delete ${escapeHtml(movie.title)}" data-delete="${index}">&times;</button>
      </div>
    </article>
  `;
}

function readPhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve({ name: file.name, src: reader.result });
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function loadPhotos() {
  try {
    return JSON.parse(localStorage.getItem(photoKey)) || [];
  } catch {
    return [];
  }
}

function savePhotos() {
  localStorage.setItem(photoKey, JSON.stringify(plutoPhotos));
}

function renderPhotos() {
  const grid = document.querySelector("#pluto-grid");
  const sortedPermanentPhotos = [...permanentPlutoPhotos].sort((a, b) => {
    const aIsHeic = a.src.toLowerCase().endsWith(".heic");
    const bIsHeic = b.src.toLowerCase().endsWith(".heic");
    return Number(aIsHeic) - Number(bIsHeic);
  });
  const allPhotos = [...plutoPhotos, ...sortedPermanentPhotos];
  if (!allPhotos.length) {
    grid.innerHTML = `
      <div class="empty-album">
        <div>
          <h3>Pluto's album is ready.</h3>
          <p>Waiting on the first Pluto picture.</p>
        </div>
      </div>
    `;
    return;
  }

  grid.innerHTML = allPhotos
    .map(
      (photo) => `
        <figure class="pluto-photo">
          <img src="${photo.src}" alt="${escapeHtml(photo.name || "Pluto photo")}" onerror="this.closest('.pluto-photo').classList.add('unsupported')" />
          <figcaption>${photo.permanent ? "Open on an Apple device if this HEIC does not preview here." : "Local photo"}</figcaption>
        </figure>
      `
    )
    .join("");
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

setReason(0);
renderMovies();
renderPhotos();
