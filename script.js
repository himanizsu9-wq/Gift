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

const defaultTryItems = [
  {
    name: "Raising Cane's",
    type: "Restaurant",
    location: "",
    notes: "Chicken, sauce, and post-study damage."
  },
  {
    name: "Wingstop again with ranch fountain",
    type: "Restaurant",
    location: "",
    notes: "A redemption arc."
  },
  {
    name: "Bake together",
    type: "Recipe",
    location: "Home",
    notes: "Something chaotic and probably too sweet."
  },
  {
    name: "Cook together",
    type: "Recipe",
    location: "Home",
    notes: "Real dinner. Maybe."
  }
];

const defaultBucketItems = [
  "Go to Bora Bora",
  "Visit Antarctica once before it melts",
  "Visit Venice once before it sinks",
  "Have kids",
  "Disneyland/world",
  "Universal Studios",
  "Japan + Disneyworld && Universals",
  "South Korea",
  "Van life",
  "Camping",
  "Finger William's Bootyhole",
  "Road-trip",
  "Painting pottery",
  "Bake together",
  "Cook together",
  "Emirates first class flight",
  "Dubai + aquarium",
  "Singapore",
  "Italy",
  "Finally figure out which one is better, Seattle or Montreal? (Obv Seattle)",
  "Laser tag",
  "Paintball",
  "Airsoft",
  "Go to Game Awards once",
  "Otakucon",
  "Teach William how to surf",
  "Reach top 500",
  "Get married",
  "Cruise",
  "Go karting",
  "Snorkeling",
  "Have a cat and dog",
  "Matching tattoos",
  "Really really really really faded order 30 sliders 5 fries and 4 large cherry cokes each while watching Harold and Kumar",
  "Raising Cane's",
  "Popeyes",
  "Chipotle",
  "TRY Wingstop again with ranch fountain",
  "Have a crazy rich Asian wedding",
  "Move in with each other",
  "Watch the northern lights together, preferably out of the city",
  "Marry you",
  "Thailand",
  "Go to the dome (VEGAS)",
  "Georgia Aquarium",
  "Get an awkward wiener dog and a chaotic guinea pig?",
  "P......play... Subnautica",
  "Play RE9",
  "Go to a comedy show"
].map((text) => ({ text, done: false }));

const permanentPlutoPhotos = [
  "pluto-01.jpg",
  "pluto-02.jpg",
  "pluto-03.png",
  "pluto-04.png",
  "pluto-05.jpg",
  "pluto-06.jpg",
  "pluto-07.jpg",
  "pluto-08.jpg",
  "pluto-09.jpg",
  "pluto-10.jpg",
  "pluto-11.jpg",
  "pluto-12.jpg",
  "pluto-13.jpg",
  "pluto-14.jpg",
  "pluto-15.jpg",
  "pluto-16.jpg",
  "pluto-17.jpg",
  "pluto-18.jpg",
  "pluto-19.jpg",
  "pluto-20.jpg",
  "pluto-21.jpg",
  "pluto-22.jpg",
  "pluto-23.jpg",
  "pluto-24.jpg",
  "pluto-25.jpg",
  "pluto-26.jpg",
  "pluto-27.jpg",
  "pluto-28.jpg",
  "pluto-29.jpg",
  "pluto-30.jpg",
  "pluto-31.jpg",
  "pluto-32.jpg",
  "pluto-33.jpg",
  "pluto-34.jpg",
  "pluto-35.jpg",
  "pluto-36.jpg",
  "pluto-37.jpg",
  "pluto-38.jpg",
  "pluto-39.jpg",
  "pluto-40.jpg",
  "pluto-41.jpg",
  "pluto-42.jpg",
  "pluto-43.jpg",
  "pluto-44.jpg",
  "pluto-45.jpg",
  "pluto-46.jpg",
  "pluto-47.jpg",
  "pluto-48.jpg",
  "pluto-49.jpg",
  "pluto-50.jpg",
  "pluto-51.jpg",
  "pluto-52.jpg"
].map((name, index) => ({
  name: `Pluto photo ${index + 1}`,
  src: `assets/pluto/${name}`,
  permanent: true
}));

const storageKey = "hw-anniversary-v1";
const photoKey = "hw-pluto-photos-v1";
const tryKey = "hw-try-list-v1";
const bucketKey = "hw-bucket-list-v1";
const sharedStateId = "main";

let reasonIndex = 0;
let movies = loadMovies();
let plutoPhotos = loadPhotos();
let tryItems = loadTryItems();
let bucketItems = loadBucketItems();
let supabaseClient = null;
let syncTimer = null;
let remoteUpdatedAt = "";

const reasonCard = document.querySelector("#reason-card");
const reasonCount = document.querySelector("#reason-count");
const reasonText = document.querySelector("#reason-text");
const photoDialog = document.querySelector("#photo-dialog");
const photoDialogImage = document.querySelector("#photo-dialog-image");

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach((tab) => tab.classList.remove("active"));
    document.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#${button.dataset.tab}`).classList.add("active");
  });
});

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

document.querySelector("#try-form").addEventListener("submit", async (event) => {
  event.preventDefault();
  const formElement = event.currentTarget;
  const form = new FormData(formElement);
  const file = form.get("photo");
  const photo = file && file.size ? await readPhoto(file) : null;

  tryItems.unshift({
    name: form.get("name").trim(),
    type: form.get("type"),
    location: form.get("location").trim(),
    notes: form.get("notes").trim(),
    photo: photo ? photo.src : ""
  });

  formElement.reset();
  saveTryItems();
  renderTryItems();
});

document.querySelector("#bucket-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  bucketItems.unshift({ text: form.get("item").trim(), done: false });
  event.currentTarget.reset();
  saveBucketItems();
  renderBucketItems();
});

document.querySelector("#close-photo").addEventListener("click", () => photoDialog.close());
photoDialog.addEventListener("click", (event) => {
  if (event.target === photoDialog) photoDialog.close();
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
  syncState();
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

  watchedList.querySelectorAll("[data-rating-index]").forEach((input) => {
    input.addEventListener("change", () => {
      const movie = movies.watched[Number(input.dataset.ratingIndex)];
      movie[input.dataset.ratingPerson] = input.value.trim();
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
        <label>
          Himani
          <input type="text" value="${escapeHtml(movie.himani || "")}" placeholder="not rated yet" data-rating-index="${index}" data-rating-person="himani" />
        </label>
        <label>
          William
          <input type="text" value="${escapeHtml(movie.william || "")}" placeholder="not rated yet" data-rating-index="${index}" data-rating-person="william" />
        </label>
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
  syncState();
}

function loadTryItems() {
  try {
    return JSON.parse(localStorage.getItem(tryKey)) || structuredClone(defaultTryItems);
  } catch {
    return structuredClone(defaultTryItems);
  }
}

function saveTryItems() {
  localStorage.setItem(tryKey, JSON.stringify(tryItems));
  syncState();
}

function renderTryItems() {
  const groups = document.querySelector("#try-groups");
  const types = ["Restaurant", "Recipe", "Activity", "Dessert"];
  groups.innerHTML = types
    .map((type) => {
      const items = tryItems.filter((item) => item.type === type);
      return `
        <section class="try-group">
          <div class="column-head">
            <h3><span aria-hidden="true">${typeIcon(type)}</span> ${escapeHtml(type)}</h3>
            <span>${items.length}</span>
          </div>
          <div class="try-list">
            ${
              items.length
                ? items.map((item) => tryTemplate(item, tryItems.indexOf(item))).join("")
                : `<p class="empty-note">Nothing here yet.</p>`
            }
          </div>
        </section>
      `;
    })
    .join("");

  groups.querySelectorAll("[data-delete-try]").forEach((button) => {
    button.addEventListener("click", () => {
      tryItems.splice(Number(button.dataset.deleteTry), 1);
      saveTryItems();
      renderTryItems();
    });
  });

  groups.querySelectorAll("[data-toggle-try]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = tryItems[Number(button.dataset.toggleTry)];
      item.done = !item.done;
      saveTryItems();
      renderTryItems();
    });
  });
}

function tryTemplate(item, index) {
  return `
    <article class="try-card ${item.done ? "done" : ""}">
      ${item.photo ? `<img src="${item.photo}" alt="${escapeHtml(item.name)}" />` : ""}
      <div>
        <div class="movie-title-row">
          <button class="try-check" type="button" data-toggle-try="${index}" aria-pressed="${Boolean(item.done)}">
            <span class="checkmark">${item.done ? "✓" : ""}</span>
            <span class="movie-title">${escapeHtml(item.name)}</span>
          </button>
          <button class="delete-button" type="button" aria-label="Delete ${escapeHtml(item.name)}" data-delete-try="${index}">&times;</button>
        </div>
        ${item.location ? `<p class="detail-line">${escapeHtml(item.location)}</p>` : ""}
        ${item.notes ? `<p class="try-notes">${escapeHtml(item.notes)}</p>` : ""}
      </div>
    </article>
  `;
}

function typeIcon(type) {
  const icons = {
    Restaurant: "🍜",
    Recipe: "🥣",
    Activity: "🎟️",
    Dessert: "🍰"
  };
  return icons[type] || "✦";
}

function loadBucketItems() {
  try {
    return JSON.parse(localStorage.getItem(bucketKey)) || structuredClone(defaultBucketItems);
  } catch {
    return structuredClone(defaultBucketItems);
  }
}

function saveBucketItems() {
  localStorage.setItem(bucketKey, JSON.stringify(bucketItems));
  syncState();
}

function appState() {
  return {
    movies,
    plutoPhotos,
    tryItems,
    bucketItems
  };
}

function saveLocalState() {
  localStorage.setItem(storageKey, JSON.stringify(movies));
  localStorage.setItem(photoKey, JSON.stringify(plutoPhotos));
  localStorage.setItem(tryKey, JSON.stringify(tryItems));
  localStorage.setItem(bucketKey, JSON.stringify(bucketItems));
}

function applyState(data) {
  if (!data || typeof data !== "object") return;
  movies = data.movies || movies;
  plutoPhotos = data.plutoPhotos || plutoPhotos;
  tryItems = data.tryItems || tryItems;
  bucketItems = data.bucketItems || bucketItems;
  saveLocalState();
  renderMovies();
  renderPhotos();
  renderTryItems();
  renderBucketItems();
}

function setSyncStatus(message) {
  const status = document.querySelector("#sync-status");
  if (status) status.textContent = message;
}

function hasSupabaseConfig() {
  const config = window.GIFT_SUPABASE || {};
  return Boolean(config.url && config.anonKey && window.supabase);
}

async function initSharedSave() {
  if (!hasSupabaseConfig()) {
    setSyncStatus("Saved on this browser");
    return;
  }

  const { url, anonKey } = window.GIFT_SUPABASE;
  supabaseClient = window.supabase.createClient(url, anonKey);
  setSyncStatus("Connecting shared save...");

  try {
    const { data, error } = await supabaseClient
      .from("gift_state")
      .select("data, updated_at")
      .eq("id", sharedStateId)
      .maybeSingle();

    if (error) throw error;

    if (data && data.data) {
      remoteUpdatedAt = data.updated_at || "";
      applyState(data.data);
      setSyncStatus("Shared save connected");
    } else {
      await syncStateNow();
    }

    window.setInterval(fetchSharedState, 7000);
  } catch (error) {
    console.warn("Supabase sync unavailable:", error);
    setSyncStatus("Saved on this browser");
  }
}

function syncState() {
  saveLocalState();
  if (!supabaseClient) return;

  window.clearTimeout(syncTimer);
  syncTimer = window.setTimeout(syncStateNow, 450);
}

async function syncStateNow() {
  if (!supabaseClient) return;
  setSyncStatus("Saving...");

  try {
    const { error } = await supabaseClient
      .from("gift_state")
      .upsert({
        id: sharedStateId,
        data: appState(),
        updated_at: new Date().toISOString()
      });

    if (error) throw error;
    remoteUpdatedAt = new Date().toISOString();
    setSyncStatus("Shared save connected");
  } catch (error) {
    console.warn("Supabase save failed:", error);
    setSyncStatus("Saved on this browser");
  }
}

async function fetchSharedState() {
  if (!supabaseClient) return;

  try {
    const { data, error } = await supabaseClient
      .from("gift_state")
      .select("data, updated_at")
      .eq("id", sharedStateId)
      .maybeSingle();

    if (error) throw error;
    if (!data || !data.updated_at || data.updated_at <= remoteUpdatedAt) return;

    remoteUpdatedAt = data.updated_at;
    applyState(data.data);
    setSyncStatus("Shared save connected");
  } catch (error) {
    console.warn("Supabase refresh failed:", error);
  }
}

function renderBucketItems() {
  const list = document.querySelector("#bucket-list");
  list.innerHTML = bucketItems.map((item, index) => bucketTemplate(item, index)).join("");

  list.querySelectorAll("[data-toggle-bucket]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = bucketItems[Number(button.dataset.toggleBucket)];
      item.done = !item.done;
      saveBucketItems();
      renderBucketItems();
    });
  });

  list.querySelectorAll("[data-delete-bucket]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();
      bucketItems.splice(Number(button.dataset.deleteBucket), 1);
      saveBucketItems();
      renderBucketItems();
    });
  });
}

function bucketTemplate(item, index) {
  return `
    <article class="bucket-item ${item.done ? "done" : ""}">
      <button type="button" class="bucket-toggle" data-toggle-bucket="${index}" aria-pressed="${item.done}">
        <span class="checkmark">${item.done ? "✓" : ""}</span>
        <span>${escapeHtml(item.text)}</span>
      </button>
      <button class="delete-button" type="button" aria-label="Delete bucket item" data-delete-bucket="${index}">&times;</button>
    </article>
  `;
}

function renderPhotos() {
  const grid = document.querySelector("#pluto-grid");
  const allPhotos = [...plutoPhotos, ...permanentPlutoPhotos];
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
          <button class="photo-open" type="button" data-photo-src="${photo.src}" data-photo-name="${escapeHtml(photo.name || "Pluto photo")}">
            <img src="${photo.src}" alt="${escapeHtml(photo.name || "Pluto photo")}" />
          </button>
        </figure>
      `
    )
    .join("");

  grid.querySelectorAll("[data-photo-src]").forEach((button) => {
    button.addEventListener("click", () => {
      photoDialogImage.src = button.dataset.photoSrc;
      photoDialogImage.alt = button.dataset.photoName;
      photoDialog.showModal();
    });
  });
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
renderTryItems();
renderBucketItems();
initSharedSave();
