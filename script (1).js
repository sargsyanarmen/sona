/* ═══════════════════════════════════════════════════
   ARMEN & SONA — script.js
   Edit only the DATA SECTION below to personalize
═══════════════════════════════════════════════════ */

/* ╔═══════════════════════════════════════════════╗
   ║           ★  EDITABLE DATA  ★                ║
   ╚═══════════════════════════════════════════════╝ */

const bgMusicData = {
  title: "Our Song ♪",
  youtubeId: "7maJOI3QMu0", // EDIT: YouTube video ID
  audioFile: ""              // OR: "assets/music/background.mp3"
};

const timelineData = [
  {
    date: "April 7, 2024",
    title: "The Day It All Began",
    text: "The moment I first saw you, something shifted. Like the world quietly rearranged itself to make room for what we were about to become.",
    image: "" // e.g. "assets/photos/timeline/day1.jpg"
  },
  {
    date: "April 2024",
    title: "Our First Walk Together",
    text: "We walked for hours and didn't notice the time. I talked about everything and nothing, and I realized I wanted every day to feel exactly like this.",
    image: ""
  },
  {
    date: "Summer 2024",
    title: "The Summer That Changed Everything",
    text: "Long evenings, lazy afternoons, coffee that went cold because we were too busy laughing. I started measuring time by moments with you.",
    image: ""
  },
  {
    date: "Autumn 2024",
    title: "When I Knew For Certain",
    text: "There was one quiet evening when I looked over at you and thought — this is it. This is the person I want beside me for all the hard and beautiful things.",
    image: ""
  },
  {
    date: "April 7, 2025",
    title: "One Year of Us",
    text: "A whole year of choosing each other, growing together, and building something I am endlessly proud of. Here is to every year that follows.",
    image: ""
  }
];

const placesData = [
  {
    name: "Republic Square",
    lat: 40.1776, lng: 44.5126,
    date: "April 2024",
    description: "The heart of Yerevan — and somehow, also the heart of where our story began.",
    memory: "We stood here on a cool evening watching the dancing fountains, and I reached for your hand for the first time.",
    image: "", emoji: "✦"
  },
  {
    name: "Cascade Complex",
    lat: 40.1885, lng: 44.5098,
    date: "May 2024",
    description: "We climbed every step together, laughing at the top.",
    memory: "By the time we reached the top we were out of breath — from the stairs and from laughing. The view from up there was beautiful, but I was looking at you.",
    image: "", emoji: "✦"
  },
  {
    name: "Lovers' Park",
    lat: 40.1831, lng: 44.5112,
    date: "June 2024",
    description: "Our favorite evening spot.",
    memory: "We found our bench here. Second one on the left path. We sat there for two hours just watching the world and talking about our dreams.",
    image: "", emoji: "♥"
  },
  {
    name: "Vernissage Market",
    lat: 40.1790, lng: 44.5164,
    date: "July 2024",
    description: "You picked out something small and carried it home like treasure.",
    memory: "You spent ten minutes negotiating the price of a tiny vintage frame, won, and were so proud. I've never loved you more.",
    image: "", emoji: "✦"
  },
  {
    name: "Our First Café",
    lat: 40.1814, lng: 44.5140,
    date: "April 2024",
    description: "Where we had our first real conversation.",
    memory: "The coffee was too strong and the music was too loud, but neither of us noticed. We talked for three hours and it felt like minutes.",
    image: "", emoji: "☕"
  },
  {
    name: "Tsitsernakaberd",
    lat: 40.2003, lng: 44.4844,
    date: "August 2024",
    description: "We visited together and walked quietly for a long time.",
    memory: "Some places ask you to be still together, and this was one of them. I felt close to you in a different, deeper way that day.",
    image: "", emoji: "✦"
  }
];

const galleryData = [
  { src: "", caption: "Our first photo together", date: "April 2024", category: "us" },
  { src: "", caption: "A Sunday afternoon", date: "May 2024", category: "moments" },
  { src: "", caption: "The Cascade, late evening", date: "May 2024", category: "places" },
  { src: "", caption: "Golden hour", date: "June 2024", category: "us" },
  { src: "", caption: "Laughing about something", date: "July 2024", category: "moments" },
  { src: "", caption: "Our anniversary dinner", date: "April 2025", category: "special" },
  { src: "", caption: "A quiet morning", date: "August 2024", category: "moments" },
  { src: "", caption: "Summer evening walk", date: "Summer 2024", category: "places" }
];

const videosData = [
  {
    title: "Our First Video",
    date: "April 2024",
    description: "A little clip I've watched more times than I'd admit.",
    type: "youtube", src: "S3rdEQ0M7n4", thumbnail: ""
  },
  {
    title: "A Moment Worth Keeping",
    date: "Summer 2024",
    description: "Some moments are too good not to record.",
    type: "youtube", src: "", thumbnail: ""
  },
  {
    title: "Our Little Adventures",
    date: "Autumn 2024",
    description: "Snippets of the life we're building together.",
    type: "youtube", src: "", thumbnail: ""
  }
];

const songsData = [
  { title: "Our Song", artist: "The one that plays in my head when I think of you", note: "Our first dance", youtubeId: "S3rdEQ0M7n4", tag: "Our Song ♥" },
  { title: "The One Playing When We Met", artist: "Add artist name here", note: "", youtubeId: "", tag: "" },
  { title: "The Song From That Night", artist: "Add artist name here", note: "Late night", youtubeId: "", tag: "" },
  { title: "Our Late Night Song", artist: "Add artist name here", note: "", youtubeId: "", tag: "" },
  { title: "The One That Makes Me Think of You", artist: "Add artist name here", note: "Still does", youtubeId: "", tag: "" }
];

const lettersData = [
  {
    label: "Open When",
    title: "Open When You Miss Me",
    to: "My dearest Sona,",
    body: `If you're reading this, it means I'm not next to you right now — and I want you to know that wherever I am, part of me is always with you.\n\nYou have this way of making every ordinary moment feel like something I want to remember forever. The way you laugh. The way you say my name. The way you make me feel like the best version of myself just by being near me.\n\nI miss you when we're apart. But I also carry you with me everywhere I go.\n\nCome back to me soon, my love.`,
    from: "Always yours, Armen ♥", emoji: "💌"
  },
  {
    label: "A Little Letter",
    title: "For the Person Who Changed Everything",
    to: "For Sona,",
    body: `Before you, I didn't know what it felt like to have someone who truly sees you.\n\nYou see my flaws and choose me anyway. You hear what I'm not saying. You make space for me exactly as I am, and somehow, that makes me want to be better.\n\nI don't take that lightly. I don't take you lightly.\n\nThank you for being mine.`,
    from: "With all my love, Armen", emoji: "✉️"
  },
  {
    label: "A Poem",
    title: "A Poem For You",
    to: "",
    body: `In every quiet room I enter,\nyou are somehow already there —\nin the light on the wall,\nin the warmth of my favorite chair.\n\nYou live in the spaces between things.\nIn the pause before a song begins.\nIn the golden hour before evening.\nIn every moment that simply wins.\n\nI didn't know love could be this soft,\nthis steady, this sure and true —\nbut then again, I hadn't yet learned\nwhat it meant to be loved by you.`,
    from: "— Written for Sona", emoji: "🌸"
  },
  {
    label: "For My Favorite Person",
    title: "Things I Never Say Out Loud",
    to: "Sona,",
    body: `There are things I think about you that I never quite manage to say.\n\nLike how I notice everything. The little sounds you make when you're thinking. The way you get quiet right before you say something important. How you look when you're completely unaware anyone is watching.\n\nI am always watching. And always thinking — how did I get this lucky?\n\nYou are, without question, my favorite person in the world.`,
    from: "Yours entirely, Armen ♥", emoji: "🌹"
  }
];

const reasonsData = [
  { number: "01", icon: "✨", title: "The Way You See the World", text: "You find beauty in the smallest things — a good coffee, a funny cloud, a cat on a window ledge. You make the ordinary feel magical." },
  { number: "02", icon: "💬", title: "The Way You Listen", text: "You don't just hear me. You actually listen. You remember things I said months ago. You make me feel like what I say truly matters." },
  { number: "03", icon: "😂", title: "Your Laugh", text: "Your genuine laugh — the one you can't control — is the best sound in the world. I am always trying to be the reason you laugh like that." },
  { number: "04", icon: "🌙", title: "How You Make Me Calm", text: "When things feel too loud and too much, being near you is like stepping into a quiet room. You are my calm." },
  { number: "05", icon: "💪", title: "How Brave You Are", text: "You face things head-on. You push through. You're stronger than you give yourself credit for, and I am endlessly proud of you." },
  { number: "06", icon: "🌸", title: "Everything You Don't See in Yourself", text: "The kindness you show without thinking. The way you care for people. You have no idea how remarkable you are, and I love being the one who gets to remind you." }
];

const dreamsData = [
  { icon: "✈️", tag: "Travel", title: "A Trip We've Always Talked About", text: "We keep saying \"one day\" — I want to make it a date. Pick the city. I'll book the tickets." },
  { icon: "🏡", tag: "Home", title: "Our Own Little Space", text: "A place that's entirely ours. Books on the shelves, a good kitchen, mornings that belong only to us." },
  { icon: "🌊", tag: "Adventure", title: "Somewhere by the Sea", text: "Sun, saltwater, and nowhere we need to be. Just the two of us and a horizon that never ends." },
  { icon: "🎂", tag: "Forever", title: "Growing Old Together", text: "I want to celebrate every anniversary, every birthday, every ordinary Tuesday — for as long as we both shall live." }
];

/* ╔═══════════════════════════════════════════════╗
   ║              SITE LOGIC BELOW                ║
   ╚═══════════════════════════════════════════════╝ */

/* ── CUSTOM CURSOR ──────────────────────────────── */
const cursor     = document.getElementById('cursor');
const cursorRing = document.getElementById('cursor-ring');
let cursorX = 0, cursorY = 0, ringX = 0, ringY = 0;
if (cursor && cursorRing) {
  document.addEventListener('mousemove', e => { cursorX = e.clientX; cursorY = e.clientY; cursor.style.left = cursorX + 'px'; cursor.style.top  = cursorY + 'px'; });
  (function animRing() {
    ringX += (cursorX - ringX) * 0.14;
    ringY += (cursorY - ringY) * 0.14;
    cursorRing.style.left = ringX + 'px';
    cursorRing.style.top  = ringY + 'px';
    requestAnimationFrame(animRing);
  })();
}

/* ── LOADING ────────────────────────────────────── */
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loading-screen').classList.add('hidden'), 1800);
});

/* ── NAVBAR ─────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('backToTop').classList.toggle('show', window.scrollY > 400);
});
document.getElementById('menuToggle').addEventListener('click', () => document.getElementById('mobileNav').classList.add('open'));
document.getElementById('mobileNavClose').addEventListener('click', () => document.getElementById('mobileNav').classList.remove('open'));
document.querySelectorAll('.mobile-nav a').forEach(a => a.addEventListener('click', () => document.getElementById('mobileNav').classList.remove('open')));
document.getElementById('backToTop').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ── PETAL CANVAS ───────────────────────────────── */
(function initPetals() {
  const canvas = document.getElementById('petalCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let petals = [];
  let W, H;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  function randomPetal() {
    return {
      x: Math.random() * W,
      y: -20 - Math.random() * 100,
      size: Math.random() * 10 + 5,
      speed: Math.random() * 1.2 + 0.5,
      drift: (Math.random() - 0.5) * 0.8,
      angle: Math.random() * Math.PI * 2,
      spin:  (Math.random() - 0.5) * 0.04,
      alpha: Math.random() * 0.45 + 0.15,
      color: Math.random() > 0.5 ? '#f0c4cc' : (Math.random() > 0.5 ? '#e8a8b4' : '#f2e4d0')
    };
  }

  for (let i = 0; i < 28; i++) {
    const p = randomPetal();
    p.y = Math.random() * H; // start spread across screen
    petals.push(p);
  }

  function drawPetal(p) {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle);
    ctx.globalAlpha = p.alpha;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.ellipse(0, 0, p.size, p.size * 0.55, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    petals.forEach(p => {
      p.y += p.speed;
      p.x += p.drift + Math.sin(p.y * 0.012) * 0.4;
      p.angle += p.spin;
      if (p.y > H + 20) Object.assign(p, randomPetal());
      drawPetal(p);
    });
    requestAnimationFrame(loop);
  }
  loop();
})();

/* ── SCROLL REVEAL ──────────────────────────────── */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1, rootMargin: '0px 0px -36px 0px' });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

/* ── TIMELINE ───────────────────────────────────── */
(function buildTimeline() {
  const c = document.getElementById('timelineContainer');
  timelineData.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'tl-item';
    div.style.transitionDelay = `${i * 0.08}s`;
    const imgHtml = item.image
      ? `<div class="tl-img"><img src="${item.image}" alt="${item.title}" loading="lazy" /></div>`
      : `<div class="tl-img"><div class="tl-img-ph">🌸</div></div>`;
    div.innerHTML = `
      <div class="tl-node"><div class="tl-dot"></div></div>
      <div class="tl-card">
        <p class="tl-date">${item.date}</p>
        <h3 class="tl-name">${item.title}</h3>
        <p class="tl-text">${item.text}</p>
        ${imgHtml}
      </div>`;
    c.appendChild(div);
  });
  document.querySelectorAll('.tl-item').forEach(el => revealObs.observe(el));
})();

/* ── MAP ────────────────────────────────────────── */
(function buildMap() {
  const map = L.map('memory-map', { center: [40.187, 44.515], zoom: 14, scrollWheelZoom: false });
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '©OpenStreetMap ©CartoDB', subdomains: 'abcd', maxZoom: 19
  }).addTo(map);

  function makeIcon(emoji) {
    return L.divIcon({
      className: '',
      html: `<div class="pin-icon"><div class="pin-icon-inner">${emoji || '♥'}</div></div>`,
      iconSize: [26, 26], iconAnchor: [13, 26], popupAnchor: [0, -30]
    });
  }

  placesData.forEach(place => {
    const imgHtml = place.image
      ? `<img src="${place.image}" alt="${place.name}" style="width:100%;height:100%;object-fit:cover;" />`
      : `<span style="font-size:2rem;">${place.emoji || '♥'}</span>`;
    const popup = `
      <div>
        <div class="popup-img-wrap">${imgHtml}</div>
        <div class="popup-body-inner">
          <p class="popup-date-tag">${place.date}</p>
          <p class="popup-place-name">${place.name}</p>
          <p class="popup-place-desc">${place.description}</p>
          <button class="popup-open-btn" onclick="openPlaceModal(${JSON.stringify(place).replace(/"/g,'&quot;')})">Read the memory →</button>
        </div>
      </div>`;
    L.marker([place.lat, place.lng], { icon: makeIcon(place.emoji) })
      .addTo(map).bindPopup(popup, { className: 'memory-popup', maxWidth: 230 });
  });
})();

window.openPlaceModal = function(place) {
  const heroEl = document.getElementById('placeModalHero');
  if (place.image) {
    heroEl.innerHTML = `<img src="${place.image}" alt="${place.name}" />`;
  } else {
    heroEl.innerHTML = `<div class="place-modal-hero-ph">${place.emoji || '♥'}</div>`;
  }
  document.getElementById('placeModalDate').textContent = place.date;
  document.getElementById('placeModalName').textContent = place.name;
  document.getElementById('placeModalDesc').textContent = place.description;
  document.getElementById('placeModalMemory').textContent = place.memory;
  openModal('place-modal');
};

/* ── GALLERY ────────────────────────────────────── */
let currentGalleryIndex = 0;
let filteredGallery = [...galleryData];

(function buildGallery() {
  const cats = ['all', ...new Set(galleryData.map(g => g.category))];
  const filtersEl = document.getElementById('galleryFilters');
  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-pill' + (cat === 'all' ? ' active' : '');
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-pill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filteredGallery = cat === 'all' ? [...galleryData] : galleryData.filter(g => g.category === cat);
      renderGallery(filteredGallery);
    });
    filtersEl.appendChild(btn);
  });
  renderGallery(galleryData);
})();

function renderGallery(items) {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  items.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'masonry-item';
    if (item.src) {
      div.innerHTML = `
        <img src="${item.src}" alt="${item.caption}" loading="lazy" />
        <div class="masonry-overlay">
          <div class="masonry-caption">
            <p class="masonry-caption-date">${item.date}</p>
            <p class="masonry-caption-text">${item.caption}</p>
          </div>
        </div>`;
    } else {
      div.innerHTML = `
        <div class="photo-placeholder">
          <div class="photo-ph-icon">📷</div>
          <p class="photo-ph-text">${item.caption}</p>
        </div>`;
    }
    div.addEventListener('click', () => { currentGalleryIndex = i; openLightbox(item); });
    grid.appendChild(div);
  });
}

function openLightbox(item) {
  const img = document.getElementById('lbImg');
  if (item.src) { img.src = item.src; img.alt = item.caption; img.style.display = ''; }
  else img.style.display = 'none';
  document.getElementById('lbCaption').textContent = item.caption + (item.date ? ` — ${item.date}` : '');
  openModal('lightbox-modal');
}
document.getElementById('lbNext').addEventListener('click', () => {
  currentGalleryIndex = (currentGalleryIndex + 1) % filteredGallery.length;
  openLightbox(filteredGallery[currentGalleryIndex]);
});
document.getElementById('lbPrev').addEventListener('click', () => {
  currentGalleryIndex = (currentGalleryIndex - 1 + filteredGallery.length) % filteredGallery.length;
  openLightbox(filteredGallery[currentGalleryIndex]);
});

/* ── VIDEOS ─────────────────────────────────────── */
(function buildVideos() {
  const grid = document.getElementById('videosGrid');
  videosData.forEach((v, i) => {
    const div = document.createElement('div');
    div.className = 'video-card reveal';
    div.style.transitionDelay = `${i * 0.1}s`;
    let thumb = '';
    if (v.thumbnail) thumb = `<img src="${v.thumbnail}" alt="${v.title}" />`;
    else if (v.type === 'youtube' && v.src) thumb = `<img src="https://img.youtube.com/vi/${v.src}/hqdefault.jpg" alt="${v.title}" />`;
    else thumb = `<div class="video-thumb-ph">🎬</div>`;
    div.innerHTML = `
      <div class="video-thumb-wrap">
        ${thumb}
        <div class="video-play-ring">
          <div class="video-play-circle">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </div>
      <div class="video-card-info">
        <p class="video-date-tag">${v.date}</p>
        <h3 class="video-title">${v.title}</h3>
        <p class="video-desc">${v.description}</p>
      </div>`;
    div.addEventListener('click', () => openVideoModal(v));
    grid.appendChild(div);
    revealObs.observe(div);
  });
})();

function openVideoModal(v) {
  const wrap = document.getElementById('videoEmbedWrap');
  document.getElementById('videoModalLabel').textContent = v.title;
  wrap.innerHTML = '';
  if (v.type === 'youtube' && v.src) {
    wrap.innerHTML = `<iframe src="https://www.youtube.com/embed/${v.src}?autoplay=1&rel=0" allow="autoplay;encrypted-media" allowfullscreen></iframe>`;
  } else if (v.type === 'file' && v.src) {
    wrap.innerHTML = `<video src="${v.src}" controls autoplay style="width:100%;border-radius:24px 24px 0 0;"></video>`;
  } else {
    wrap.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:280px;color:rgba(240,196,204,.4);font-family:'Cormorant Garamond',serif;font-style:italic;font-size:1rem;">Video coming soon ♥</div>`;
  }
  openModal('video-modal');
}

/* ── LETTERS ────────────────────────────────────── */
(function buildLetters() {
  const grid = document.getElementById('lettersGrid');
  lettersData.forEach((letter, i) => {
    const div = document.createElement('div');
    div.className = 'letter-envelope reveal';
    div.style.transitionDelay = `${i * 0.08}s`;
    div.innerHTML = `
      <div class="letter-seal">${letter.emoji}</div>
      <p class="letter-label">${letter.label}</p>
      <h3 class="letter-title">${letter.title}</h3>
      <p class="letter-open-hint">tap to open</p>`;
    div.addEventListener('click', () => {
      document.getElementById('letterModalSeal').textContent = letter.emoji;
      document.getElementById('letterModalTo').textContent = letter.to;
      document.getElementById('letterModalTitle').textContent = letter.title;
      document.getElementById('letterModalText').textContent = letter.body;
      document.getElementById('letterModalFrom').textContent = letter.from;
      openModal('letter-modal');
    });
    grid.appendChild(div);
    revealObs.observe(div);
  });
})();

/* ── SONGS ──────────────────────────────────────── */
let currentSong = null;
let ytPlayer = null, bgYtPlayer = null, ytReady = false;

(function loadYT() {
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);
})();

window.onYouTubeIframeAPIReady = function() {
  ytReady = true;
  // Song player
  const d1 = document.createElement('div');
  d1.id = 'yt-song-ph'; d1.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;';
  document.body.appendChild(d1);
  ytPlayer = new YT.Player('yt-song-ph', {
    height:'1', width:'1', videoId:'',
    playerVars: { autoplay:0, controls:0, playsinline:1 },
    events: { onStateChange: e => { if (e.data === YT.PlayerState.ENDED) stopSong(); } }
  });
  // BG player
  const d2 = document.createElement('div');
  d2.id = 'yt-bg-ph'; d2.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;';
  document.body.appendChild(d2);
  bgYtPlayer = new YT.Player('yt-bg-ph', {
    height:'1', width:'1', videoId:'',
    playerVars: { autoplay:0, controls:0, playsinline:1, loop:1 }
  });
};

(function buildSongs() {
  const list = document.getElementById('songsList');
  songsData.forEach((song, i) => {
    const div = document.createElement('div');
    div.className = 'song-row reveal';
    div.dataset.index = i;
    div.style.transitionDelay = `${i * 0.06}s`;
    div.innerHTML = `
      <span class="song-idx">${String(i+1).padStart(2,'0')}</span>
      <button class="song-play-icon" aria-label="Play ${song.title}">▶</button>
      <div class="song-meta">
        <p class="song-name">${song.title}</p>
        <p class="song-artist-name">${song.artist}</p>
      </div>
      ${song.note ? `<span class="song-note-text">${song.note}</span>` : ''}
      ${song.tag  ? `<span class="song-tag-pill">${song.tag}</span>` : ''}
      <div class="wave-bars">
        <div class="wave-bar"></div><div class="wave-bar"></div>
        <div class="wave-bar"></div><div class="wave-bar"></div>
      </div>`;
    div.addEventListener('click', () => {
      if (currentSong === i) { stopSong(); return; }
      stopSong();
      currentSong = i;
      div.classList.add('playing');
      div.querySelector('.song-play-icon').textContent = '⏸';
      if (song.youtubeId && ytReady && ytPlayer) {
        ytPlayer.loadVideoById(song.youtubeId);
        ytPlayer.playVideo();
      }
    });
    list.appendChild(div);
    revealObs.observe(div);
  });
})();

function stopSong() {
  if (currentSong !== null) {
    const row = document.querySelector(`.song-row[data-index="${currentSong}"]`);
    if (row) { row.classList.remove('playing'); row.querySelector('.song-play-icon').textContent = '▶'; }
  }
  currentSong = null;
  if (ytPlayer && ytReady) { try { ytPlayer.stopVideo(); } catch(e) {} }
}

/* ── BG MUSIC ───────────────────────────────────── */
let bgPlaying = false;
document.getElementById('bgMusicLabel').textContent = bgMusicData.title;
document.getElementById('bgMusicToggle').addEventListener('click', () => {
  bgPlaying = !bgPlaying;
  const btn = document.getElementById('bgMusicToggle');
  btn.textContent = bgPlaying ? '⏸' : '♪';
  if (bgPlaying) {
    if (bgMusicData.audioFile) {
      const a = document.getElementById('bgAudio');
      a.src = bgMusicData.audioFile; a.play().catch(() => {});
    } else if (bgMusicData.youtubeId && bgYtPlayer && ytReady) {
      try { bgYtPlayer.loadVideoById({ videoId: bgMusicData.youtubeId }); bgYtPlayer.setVolume(28); bgYtPlayer.playVideo(); } catch(e) {}
    }
  } else {
    const a = document.getElementById('bgAudio'); a.pause();
    if (bgYtPlayer && ytReady) { try { bgYtPlayer.pauseVideo(); } catch(e) {} }
  }
});

/* ── REASONS ────────────────────────────────────── */
(function buildReasons() {
  const grid = document.getElementById('reasonsGrid');
  reasonsData.forEach((r, i) => {
    const div = document.createElement('div');
    div.className = 'reason-card';
    div.style.transitionDelay = `${i * 0.1}s`;
    div.innerHTML = `
      <div class="reason-num">${r.number}</div>
      <div class="reason-emoji">${r.icon}</div>
      <h3 class="reason-name">${r.title}</h3>
      <p class="reason-body">${r.text}</p>`;
    grid.appendChild(div);
    revealObs.observe(div);
  });
})();

/* ── DREAMS ─────────────────────────────────────── */
(function buildDreams() {
  const grid = document.getElementById('dreamsGrid');
  dreamsData.forEach((d, i) => {
    const div = document.createElement('div');
    div.className = 'dream-card reveal';
    div.style.transitionDelay = `${i * 0.1}s`;
    div.innerHTML = `
      <div class="dream-card-top">
        <div class="dream-emoji">${d.icon}</div>
        <span class="dream-tag-pill">${d.tag}</span>
      </div>
      <div class="dream-card-body">
        <h3 class="dream-name">${d.title}</h3>
        <p class="dream-body">${d.text}</p>
      </div>`;
    grid.appendChild(div);
    revealObs.observe(div);
  });
})();

/* ── MODALS ─────────────────────────────────────── */
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
  if (id === 'video-modal') document.getElementById('videoEmbedWrap').innerHTML = '';
}
document.querySelectorAll('.close-btn').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.dataset.modal));
});
document.querySelectorAll('.overlay').forEach(ov => {
  ov.addEventListener('click', e => { if (e.target === ov) closeModal(ov.id); });
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.querySelectorAll('.overlay.open').forEach(m => closeModal(m.id));
  if (e.key === 'ArrowRight' && document.getElementById('lightbox-modal').classList.contains('open')) document.getElementById('lbNext').click();
  if (e.key === 'ArrowLeft'  && document.getElementById('lightbox-modal').classList.contains('open')) document.getElementById('lbPrev').click();
});
