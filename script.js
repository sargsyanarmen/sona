/* ═══════════════════════════════════════════════════
   ROMANTIC LOVE STORY — script.js
   All data + all interactivity
   Edit the DATA SECTION below to personalize your site
═══════════════════════════════════════════════════ */

/* ╔═══════════════════════════════════════════════╗
   ║           ★  EDITABLE DATA  ★                ║
   ║  This is the only section you need to edit   ║
   ╚═══════════════════════════════════════════════╝ */

/* ─────────────────────────────────────────────────
   BACKGROUND MUSIC
   Replace youtubeId with your YouTube video ID
   OR set audioFile to a path like "assets/music/bg.mp3"
   ───────────────────────────────────────────────── */
const bgMusicData = {
  title: "Our Song ♪",
  // EDIT: YouTube video ID (the part after ?v= in the URL)
  youtubeId: "7maJOI3QMu0",
  // EDIT: OR use a local/hosted audio file
  audioFile: "" // e.g. "assets/music/background.mp3"
};

/* ─────────────────────────────────────────────────
   TIMELINE DATA
   Add or remove timeline entries here
   ───────────────────────────────────────────────── */
const timelineData = [
  {
    date: "April 7, 2024",
    title: "The Day It All Began",
    text: "The moment I first saw you, something shifted. Like the world quietly rearranged itself to make room for what we were about to become.",
    // EDIT: image path, e.g. "assets/photos/timeline/first-day.jpg" — or leave empty ""
    image: ""
  },
  {
    date: "April 2024",
    title: "Our First Walk Together",
    text: "We walked for hours and didn't notice the time. We talked about everything and nothing, and I realized I wanted every day to feel exactly like this.",
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
    text: "A whole year of choosing each other, growing together, and building something I'm endlessly proud of. Here's to every year that follows.",
    image: ""
  }
];

/* ─────────────────────────────────────────────────
   MAP / PLACES DATA
   Uses real Yerevan coordinates — edit freely
   Add as many places as you want
   ───────────────────────────────────────────────── */
const placesData = [
  {
    name: "Republic Square",
    lat: 40.1776,
    lng: 44.5126,
    date: "April 2024",
    description: "The heart of Yerevan — and somehow, also the heart of where our story began.",
    memory: "We stood here on a cool evening watching the dancing fountains, and I reached for your hand for the first time.",
    // EDIT: image path, e.g. "assets/photos/places/republic-square.jpg"
    image: "",
    emoji: "✦"
  },
  {
    name: "Cascade Complex",
    lat: 40.1885,
    lng: 44.5098,
    date: "May 2024",
    description: "We climbed every step together, laughing at the top.",
    memory: "By the time we reached the top we were out of breath — from the stairs and from laughing at absolutely nothing. The view from up there was beautiful, but I was looking at you.",
    image: "",
    emoji: "✦"
  },
  {
    name: "Lovers' Park",
    lat: 40.1831,
    lng: 44.5112,
    date: "June 2024",
    description: "Our favorite evening spot.",
    memory: "We found our bench here. Second one on the left path. We sat there for two hours just watching the world and talking about our dreams.",
    image: "",
    emoji: "♥"
  },
  {
    name: "Vernissage Market",
    lat: 40.1790,
    lng: 44.5164,
    date: "July 2024",
    description: "You picked out something small and carried it home like treasure.",
    memory: "You spent ten minutes negotiating the price of a tiny vintage frame, won, and were so proud. I've never loved you more.",
    image: "",
    emoji: "✦"
  },
  {
    name: "Our First Café",
    lat: 40.1814,
    lng: 44.5140,
    date: "April 2024",
    description: "Where we had our first real conversation.",
    memory: "The coffee was too strong and the music was too loud, but neither of us noticed. We talked for three hours and it felt like minutes.",
    image: "",
    emoji: "☕"
  },
  {
    name: "Tsitsernakaberd",
    lat: 40.2003,
    lng: 44.4844,
    date: "August 2024",
    description: "We visited together and walked quietly for a long time.",
    memory: "Some places ask you to be still together, and this was one of them. I felt close to you in a different, deeper way that day.",
    image: "",
    emoji: "✦"
  }
];

/* ─────────────────────────────────────────────────
   GALLERY DATA
   Add as many photos as you want
   For categories use: "us", "places", "moments", "special"
   ───────────────────────────────────────────────── */
const galleryData = [
  {
    // EDIT: Replace "" with your image path, e.g. "assets/photos/gallery/photo1.jpg"
    src: "",
    caption: "Our first photo together",
    date: "April 2024",
    category: "us"
  },
  {
    src: "",
    caption: "A Sunday afternoon",
    date: "May 2024",
    category: "moments"
  },
  {
    src: "",
    caption: "The Cascade, late evening",
    date: "May 2024",
    category: "places"
  },
  {
    src: "",
    caption: "Golden hour",
    date: "June 2024",
    category: "us"
  },
  {
    src: "",
    caption: "Laughing about something",
    date: "July 2024",
    category: "moments"
  },
  {
    src: "",
    caption: "Our anniversary dinner",
    date: "April 2025",
    category: "special"
  },
  {
    src: "",
    caption: "A quiet morning",
    date: "August 2024",
    category: "moments"
  },
  {
    src: "",
    caption: "Summer evening walk",
    date: "Summer 2024",
    category: "places"
  }
];

/* ─────────────────────────────────────────────────
   VIDEOS DATA
   Use local files (assets/videos/...) or YouTube IDs
   Set type: "youtube" or "file"
   ───────────────────────────────────────────────── */
const videosData = [
  {
    title: "Our First Video",
    date: "April 2024",
    description: "A little clip I've watched more times than I'd admit.",
    // EDIT: for YouTube: type: "youtube", src: "YOUTUBE_VIDEO_ID"
    // EDIT: for file: type: "file", src: "assets/videos/video1.mp4"
    type: "youtube",
    src: "S3rdEQ0M7n4",
    thumbnail: "" // Optional: "assets/photos/thumbs/thumb1.jpg"
  },
  {
    title: "A Moment Worth Keeping",
    date: "Summer 2024",
    description: "Some moments are too good not to record.",
    type: "youtube",
    src: "",
    thumbnail: ""
  },
  {
    title: "Our Little Adventures",
    date: "Autumn 2024",
    description: "Snippets of the life we're building together.",
    type: "youtube",
    src: "",
    thumbnail: ""
  }
];

/* ─────────────────────────────────────────────────
   SONGS DATA
   Add as many songs as you want
   Use YouTube IDs or leave src empty as placeholder
   ───────────────────────────────────────────────── */
const songsData = [
  {
    title: "Our Song",
    artist: "The one that plays in my head when I think of you",
    note: "Our first dance",
    youtubeId: "S3rdEQ0M7n4", // EDIT: YouTube video ID
    tag: "Our Song ♥"
  },
  {
    title: "The One Playing When We Met",
    artist: "Add artist name here",
    note: "",
    youtubeId: "", // EDIT
    tag: ""
  },
  {
    title: "The Song From That Night",
    artist: "Add artist name here",
    note: "Late night drives",
    youtubeId: "", // EDIT
    tag: ""
  },
  {
    title: "Our Late Night Song",
    artist: "Add artist name here",
    note: "",
    youtubeId: "", // EDIT
    tag: ""
  },
  {
    title: "The One That Makes Me Think of You",
    artist: "Add artist name here",
    note: "Still does",
    youtubeId: "", // EDIT
    tag: ""
  }
];

/* ─────────────────────────────────────────────────
   LETTERS DATA
   Edit the title, label, body, and from fields
   Use \n\n for paragraph breaks in the body
   ───────────────────────────────────────────────── */
const lettersData = [
  {
    label: "Open When",
    title: "Open When You Miss Me",
    to: "My dearest Sona,",
    body: `If you're reading this, it means I'm not next to you right now — and I want you to know that wherever I am, part of me is always with you.

You have this way of making every ordinary moment feel like something I want to remember forever. The way you laugh. The way you say my name. The way you make me feel like the best version of myself just by being near me.

I miss you when we're apart. But I also carry you with me everywhere I go.

Come back to me soon, my love.`,
    from: "Always yours, Armen ♥",
    emoji: "💌"
  },
  {
    label: "A Little Letter",
    title: "For the Person Who Changed Everything",
    to: "For Sona,",
    body: `Before you, I didn't know what it felt like to have someone who truly sees you.

You see my flaws and choose me anyway. You hear what I'm not saying. You make space for me exactly as I am, and somehow, that makes me want to be better.

I don't take that lightly. I don't take you lightly.

Thank you for being mine.`,
    from: "With all my love, Armen",
    emoji: "✉️"
  },
  {
    label: "A Poem",
    title: "A Poem For You",
    to: "",
    body: `In every quiet room I enter,\nyou are somehow already there —\nin the light on the wall,\nin the warmth of my favorite chair.

You live in the spaces between things.\nIn the pause before a song begins.\nIn the golden hour before evening.\nIn every moment that simply wins.

I didn't know love could be this soft,\nthis steady, this sure and true —\nbut then again, I hadn't yet learned\nwhat it meant to be loved by you.`,
    from: "— Written for Sona",
    emoji: "🌸"
  },
  {
    label: "For My Favorite Person",
    title: "Things I Never Say Out Loud",
    to: "Sona,",
    body: `There are things I think about you that I never quite manage to say.

Like how I notice everything. The little sounds you make when you're thinking. The way you get quiet right before you say something important. How you look when you're completely unaware anyone is watching.

I am always watching. And always thinking — how did I get this lucky?

You are, without question, my favorite person in the world.`,
    from: "Yours entirely, Armen ♥",
    emoji: "🌹"
  }
];

/* ─────────────────────────────────────────────────
   REASONS DATA (Why I Love You)
   Edit or add as many reasons as you want
   ───────────────────────────────────────────────── */
const reasonsData = [
  {
    number: "01",
    icon: "✨",
    title: "The Way You See the World",
    text: "You find beauty in the smallest things — a good coffee, a funny cloud, a cat on a window ledge. You make the ordinary feel magical."
  },
  {
    number: "02",
    icon: "💬",
    title: "The Way You Listen",
    text: "You don't just hear me. You actually listen. You remember things I said months ago. You make me feel like what I say truly matters."
  },
  {
    number: "03",
    icon: "😂",
    title: "Your Laugh",
    text: "Your genuine laugh — the one you can't control — is the best sound in the world. I am always trying to be the reason you laugh like that."
  },
  {
    number: "04",
    icon: "🌙",
    title: "How You Make Me Calm",
    text: "When things feel too loud and too much, being near you is like stepping into a quiet room. You are my calm."
  },
  {
    number: "05",
    icon: "💪",
    title: "How Brave You Are",
    text: "You face things head-on. You push through. You're stronger than you give yourself credit for, and I am endlessly proud of you."
  },
  {
    number: "06",
    icon: "🌸",
    title: "Everything You Don't See in Yourself",
    text: "The kindness you show without thinking. The way you care for people. You have no idea how remarkable you are, and I love being the one who gets to remind you."
  }
];

/* ─────────────────────────────────────────────────
   DREAMS DATA (Future / Bucket List)
   Edit or add your own dreams
   ───────────────────────────────────────────────── */
const dreamsData = [
  {
    icon: "✈️",
    tag: "Travel",
    title: "A Trip We've Always Talked About",
    text: "We keep saying \"one day\" — I want to make it a date. Pick the city. I'll book the tickets."
  },
  {
    icon: "🏡",
    tag: "Home",
    title: "Our Own Little Space",
    text: "A place that's entirely ours. Books on the shelves, a good kitchen, mornings that belong only to us."
  },
  {
    icon: "🌊",
    tag: "Adventure",
    title: "Somewhere by the Sea",
    text: "Sun, saltwater, and nowhere we need to be. Just the two of us and a horizon that never ends."
  },
  {
    icon: "🎂",
    tag: "Milestone",
    title: "Growing Old Together",
    text: "I want to celebrate every anniversary, every birthday, every ordinary Tuesday — for as long as we both shall live."
  }
];

/* ╔═══════════════════════════════════════════════╗
   ║         END OF EDITABLE DATA SECTION         ║
   ╚═══════════════════════════════════════════════╝ */


/* ═══════════════════════════════════════════════════
   LOADING SCREEN
═══════════════════════════════════════════════════ */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loading-screen').classList.add('hidden');
  }, 1800);
});


/* ═══════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 60);
  document.getElementById('backToTop').classList.toggle('visible', window.scrollY > 400);
});

document.getElementById('menuToggle').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.add('open');
});
document.getElementById('mobileNavClose').addEventListener('click', () => {
  document.getElementById('mobileNav').classList.remove('open');
});
document.querySelectorAll('.mobile-nav a').forEach(a => {
  a.addEventListener('click', () => document.getElementById('mobileNav').classList.remove('open'));
});

document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


/* ═══════════════════════════════════════════════════
   HERO PARTICLES
═══════════════════════════════════════════════════ */
(function createParticles() {
  const container = document.getElementById('heroParticles');
  const count = 30;
  for (let i = 0; i < count; i++) {
    const el = document.createElement('div');
    el.className = 'particle';
    const size = Math.random() * 5 + 2;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const dur = (Math.random() * 8 + 6) + 's';
    const delay = -(Math.random() * 10) + 's';
    const opacity = Math.random() * 0.25 + 0.08;
    const isHeart = Math.random() > 0.72;
    if (isHeart) {
      el.textContent = '♥';
      el.style.cssText = `
        position: absolute;
        left: ${x}%;
        top: ${y}%;
        font-size: ${size * 3}px;
        color: rgba(212,136,154,${opacity});
        --dur: ${dur};
        --delay: ${delay};
        --opacity: ${opacity};
      `;
    } else {
      el.style.cssText = `
        left: ${x}%;
        top: ${y}%;
        width: ${size}px;
        height: ${size}px;
        background: rgba(${Math.random() > 0.5 ? '242,196,206' : '201,169,110'},${opacity});
        --dur: ${dur};
        --delay: ${delay};
        --opacity: ${opacity};
      `;
    }
    container.appendChild(el);
  }
})();


/* ═══════════════════════════════════════════════════
   SCROLL ANIMATIONS
═══════════════════════════════════════════════════ */
const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, observerOptions);

document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));


/* ═══════════════════════════════════════════════════
   TIMELINE
═══════════════════════════════════════════════════ */
(function buildTimeline() {
  const container = document.getElementById('timelineContainer');
  timelineData.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'timeline-item';
    div.style.transitionDelay = `${i * 0.1}s`;
    div.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <p class="timeline-card-date">${item.date}</p>
        <h3 class="timeline-card-title">${item.title}</h3>
        <p class="timeline-card-text">${item.text}</p>
        ${item.image ? `<div class="timeline-card-img"><img src="${item.image}" alt="${item.title}" loading="lazy" /></div>` : ''}
      </div>
    `;
    container.appendChild(div);
  });
  // Observe
  document.querySelectorAll('.timeline-item').forEach(el => fadeObserver.observe(el));
})();


/* ═══════════════════════════════════════════════════
   MAP
═══════════════════════════════════════════════════ */
(function buildMap() {
  // Center on Yerevan
  const map = L.map('memory-map', {
    center: [40.1872, 44.5152],
    zoom: 14,
    zoomControl: true,
    scrollWheelZoom: false
  });

  // Romantic dark tile style
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '©OpenStreetMap, ©CartoDB',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  // Custom icon
  function makeIcon(emoji) {
    return L.divIcon({
      className: '',
      html: `<div class="custom-marker"><div class="custom-marker-inner">${emoji || '♥'}</div></div>`,
      iconSize: [32, 32],
      iconAnchor: [16, 32],
      popupAnchor: [0, -36]
    });
  }

  placesData.forEach((place) => {
    const imgHtml = place.image
      ? `<div class="popup-img"><img src="${place.image}" alt="${place.name}" /></div>`
      : `<div class="popup-img" style="background:linear-gradient(135deg,#f5e6d0,#fce8ec);display:flex;align-items:center;justify-content:center;font-size:2rem;">${place.emoji || '♥'}</div>`;

    const popupContent = `
      <div class="popup-inner">
        ${imgHtml}
        <div class="popup-body">
          <p class="popup-date">${place.date}</p>
          <h3 class="popup-name">${place.name}</h3>
          <p class="popup-desc">${place.description}</p>
          <button class="popup-btn" onclick="openPlaceModal(${JSON.stringify(place).replace(/"/g, '&quot;')})">Read the memory →</button>
        </div>
      </div>
    `;

    L.marker([place.lat, place.lng], { icon: makeIcon(place.emoji) })
      .addTo(map)
      .bindPopup(popupContent, { className: 'memory-popup', maxWidth: 240 });
  });
})();

// Place modal opener (global for popup onclick)
window.openPlaceModal = function(place) {
  const modal = document.getElementById('place-modal');
  const img = document.getElementById('placeModalImg');
  if (place.image) {
    img.src = place.image;
    img.alt = place.name;
    img.parentElement.style.display = '';
  } else {
    img.src = '';
    img.parentElement.style.background = `linear-gradient(135deg, #f5e6d0, #fce8ec)`;
    img.parentElement.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100%;font-size:4rem;">${place.emoji || '♥'}</div>`;
  }
  document.getElementById('placeModalDate').textContent = place.date;
  document.getElementById('placeModalName').textContent = place.name;
  document.getElementById('placeModalDesc').textContent = place.description;
  document.getElementById('placeModalMemory').textContent = place.memory;
  openModal('place-modal');
};


/* ═══════════════════════════════════════════════════
   GALLERY
═══════════════════════════════════════════════════ */
let currentGalleryIndex = 0;
let filteredGallery = [...galleryData];

(function buildGallery() {
  // Collect unique categories
  const cats = ['all', ...new Set(galleryData.map(g => g.category))];
  const filtersEl = document.getElementById('galleryFilters');
  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn fade-up' + (cat === 'all' ? ' active' : '');
    btn.textContent = cat.charAt(0).toUpperCase() + cat.slice(1);
    btn.dataset.cat = cat;
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterGallery(cat);
    });
    filtersEl.appendChild(btn);
    fadeObserver.observe(btn);
  });

  renderGallery(galleryData);
})();

function filterGallery(cat) {
  filteredGallery = cat === 'all' ? [...galleryData] : galleryData.filter(g => g.category === cat);
  renderGallery(filteredGallery);
}

function renderGallery(items) {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  items.forEach((item, i) => {
    const div = document.createElement('div');
    div.className = 'gallery-item fade-up';
    div.style.transitionDelay = `${(i % 8) * 0.06}s`;
    if (item.src) {
      div.innerHTML = `
        <img src="${item.src}" alt="${item.caption}" loading="lazy" />
        <div class="gallery-item-overlay">
          <div>
            <p class="gallery-item-date">${item.date}</p>
            <p class="gallery-item-caption">${item.caption}</p>
          </div>
        </div>
      `;
    } else {
      div.innerHTML = `
        <div class="gallery-placeholder">
          <div class="gallery-placeholder-icon">📷</div>
          <p class="gallery-placeholder-text">${item.caption}</p>
          <p class="gallery-placeholder-text" style="font-size:0.72rem;opacity:0.6;">${item.date}</p>
        </div>
      `;
    }
    div.addEventListener('click', () => {
      currentGalleryIndex = i;
      openLightbox(item, i);
    });
    grid.appendChild(div);
    fadeObserver.observe(div);
  });
}

function openLightbox(item, index) {
  const img = document.getElementById('lightboxImg');
  const cap = document.getElementById('lightboxCaption');
  if (item.src) {
    img.src = item.src;
    img.alt = item.caption;
    img.style.display = '';
  } else {
    img.src = '';
    img.style.display = 'none';
  }
  cap.textContent = item.caption + (item.date ? ` — ${item.date}` : '');
  openModal('lightbox-modal');
}

document.getElementById('lightboxNext').addEventListener('click', () => {
  currentGalleryIndex = (currentGalleryIndex + 1) % filteredGallery.length;
  openLightbox(filteredGallery[currentGalleryIndex], currentGalleryIndex);
});
document.getElementById('lightboxPrev').addEventListener('click', () => {
  currentGalleryIndex = (currentGalleryIndex - 1 + filteredGallery.length) % filteredGallery.length;
  openLightbox(filteredGallery[currentGalleryIndex], currentGalleryIndex);
});


/* ═══════════════════════════════════════════════════
   VIDEOS
═══════════════════════════════════════════════════ */
(function buildVideos() {
  const grid = document.getElementById('videosGrid');
  videosData.forEach((video, i) => {
    const div = document.createElement('div');
    div.className = 'video-card fade-up';
    div.style.transitionDelay = `${i * 0.1}s`;

    let thumbHtml;
    if (video.thumbnail) {
      thumbHtml = `<img src="${video.thumbnail}" alt="${video.title}" />`;
    } else if (video.type === 'youtube' && video.src) {
      thumbHtml = `<img src="https://img.youtube.com/vi/${video.src}/hqdefault.jpg" alt="${video.title}" />`;
    } else {
      thumbHtml = `<div class="video-thumb-placeholder">🎬</div>`;
    }

    div.innerHTML = `
      <div class="video-thumb">
        ${thumbHtml}
        <div class="video-play-btn">
          <div class="video-play-circle">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
          </div>
        </div>
      </div>
      <div class="video-card-body">
        <p class="video-card-date">${video.date}</p>
        <h3 class="video-card-title">${video.title}</h3>
        <p class="video-card-desc">${video.description}</p>
      </div>
    `;

    div.addEventListener('click', () => openVideoModal(video));
    grid.appendChild(div);
    fadeObserver.observe(div);
  });
})();

function openVideoModal(video) {
  const wrap = document.getElementById('videoEmbedWrap');
  document.getElementById('videoModalTitle').textContent = video.title;
  wrap.innerHTML = '';
  if (video.type === 'youtube' && video.src) {
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube.com/embed/${video.src}?autoplay=1&rel=0`;
    iframe.allow = 'autoplay; encrypted-media';
    iframe.allowFullscreen = true;
    wrap.appendChild(iframe);
  } else if (video.type === 'file' && video.src) {
    const v = document.createElement('video');
    v.src = video.src;
    v.controls = true;
    v.autoplay = true;
    v.style.cssText = 'width:100%;border-radius:16px 16px 0 0;';
    wrap.appendChild(v);
  } else {
    wrap.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:300px;color:rgba(252,232,236,0.4);font-family:var(--font-italic);font-style:italic;font-size:1rem;">Video coming soon ♥</div>`;
  }
  openModal('video-modal');
}


/* ═══════════════════════════════════════════════════
   LETTERS
═══════════════════════════════════════════════════ */
(function buildLetters() {
  const grid = document.getElementById('lettersGrid');
  lettersData.forEach((letter, i) => {
    const div = document.createElement('div');
    div.className = 'letter-card fade-up';
    div.style.transitionDelay = `${i * 0.08}s`;
    div.innerHTML = `
      <div class="letter-card-seal">${letter.emoji}</div>
      <p class="letter-card-label">${letter.label}</p>
      <h3 class="letter-card-title">${letter.title}</h3>
      <p class="letter-card-hint">tap to open</p>
    `;
    div.addEventListener('click', () => openLetterModal(letter));
    grid.appendChild(div);
    fadeObserver.observe(div);
  });
})();

function openLetterModal(letter) {
  document.getElementById('letterModalTo').textContent = letter.to;
  document.getElementById('letterModalTitle').textContent = letter.title;
  document.getElementById('letterModalBody').textContent = letter.body;
  document.getElementById('letterModalFrom').textContent = letter.from;
  openModal('letter-modal');
}


/* ═══════════════════════════════════════════════════
   SONGS / MUSIC
═══════════════════════════════════════════════════ */
let currentSong = null;
let ytPlayer = null;
let ytReady = false;

// Load YouTube IFrame API
(function loadYT() {
  if (!window.YT) {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.head.appendChild(tag);
  }
})();

window.onYouTubeIframeAPIReady = function() {
  ytReady = true;
  // Create hidden player
  const div = document.createElement('div');
  div.id = 'yt-player-hidden';
  div.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;';
  document.body.appendChild(div);
  ytPlayer = new YT.Player('yt-player-hidden', {
    height: '1', width: '1',
    videoId: '',
    playerVars: { autoplay: 0, controls: 0, playsinline: 1 },
    events: {
      onStateChange: (e) => {
        if (e.data === YT.PlayerState.ENDED) {
          stopCurrentSong();
        }
      }
    }
  });
};

(function buildSongs() {
  const list = document.getElementById('songsList');
  songsData.forEach((song, i) => {
    const div = document.createElement('div');
    div.className = 'song-item fade-up';
    div.style.transitionDelay = `${i * 0.06}s`;
    div.dataset.index = i;
    div.innerHTML = `
      <span class="song-num">${String(i + 1).padStart(2, '0')}</span>
      <button class="song-play-btn" aria-label="Play ${song.title}">▶</button>
      <div class="song-info">
        <p class="song-title">${song.title}</p>
        <p class="song-artist">${song.artist}</p>
      </div>
      ${song.note ? `<span class="song-note">${song.note}</span>` : ''}
      ${song.tag ? `<span class="song-note-tag">${song.tag}</span>` : ''}
      <div class="song-bars">
        <div class="song-bar"></div>
        <div class="song-bar"></div>
        <div class="song-bar"></div>
        <div class="song-bar"></div>
      </div>
    `;
    div.addEventListener('click', () => playSong(i, song));
    list.appendChild(div);
    fadeObserver.observe(div);
  });
})();

function playSong(index, song) {
  if (currentSong === index) {
    stopCurrentSong();
    return;
  }
  stopCurrentSong();
  currentSong = index;
  document.querySelectorAll('.song-item').forEach(el => el.classList.remove('playing'));
  const item = document.querySelector(`.song-item[data-index="${index}"]`);
  if (item) {
    item.classList.add('playing');
    item.querySelector('.song-play-btn').textContent = '⏸';
  }
  if (song.youtubeId && ytReady && ytPlayer) {
    ytPlayer.loadVideoById(song.youtubeId);
    ytPlayer.playVideo();
  }
}

function stopCurrentSong() {
  if (currentSong !== null) {
    const item = document.querySelector(`.song-item[data-index="${currentSong}"]`);
    if (item) {
      item.classList.remove('playing');
      item.querySelector('.song-play-btn').textContent = '▶';
    }
  }
  currentSong = null;
  if (ytPlayer && ytReady) {
    try { ytPlayer.stopVideo(); } catch(e) {}
  }
}


/* ═══════════════════════════════════════════════════
   BACKGROUND MUSIC
═══════════════════════════════════════════════════ */
let bgPlaying = false;
let bgYtPlayer = null;

document.getElementById('bgMusicTitle').textContent = bgMusicData.title;

window.onYouTubeIframeAPIReady = function() {
  ytReady = true;
  // Song player
  const div = document.createElement('div');
  div.id = 'yt-player-hidden';
  div.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;';
  document.body.appendChild(div);
  ytPlayer = new YT.Player('yt-player-hidden', {
    height: '1', width: '1', videoId: '',
    playerVars: { autoplay: 0, controls: 0, playsinline: 1 },
    events: { onStateChange: (e) => { if (e.data === YT.PlayerState.ENDED) stopCurrentSong(); } }
  });
  // BG player
  const div2 = document.createElement('div');
  div2.id = 'yt-bg-hidden';
  div2.style.cssText = 'position:fixed;top:-9999px;left:-9999px;width:1px;height:1px;';
  document.body.appendChild(div2);
  bgYtPlayer = new YT.Player('yt-bg-hidden', {
    height: '1', width: '1', videoId: '',
    playerVars: { autoplay: 0, controls: 0, playsinline: 1, loop: 1 }
  });
};

document.getElementById('bgMusicToggle').addEventListener('click', () => {
  bgPlaying = !bgPlaying;
  const playIcon  = document.querySelector('.music-icon--play');
  const pauseIcon = document.querySelector('.music-icon--pause');
  if (bgPlaying) {
    playIcon.classList.add('hidden');
    pauseIcon.classList.remove('hidden');
    if (bgMusicData.audioFile) {
      const audio = document.getElementById('bgAudio');
      audio.src = bgMusicData.audioFile;
      audio.play().catch(() => {});
    } else if (bgMusicData.youtubeId && bgYtPlayer && ytReady) {
      try {
        bgYtPlayer.loadVideoById({ videoId: bgMusicData.youtubeId, startSeconds: 0 });
        bgYtPlayer.setVolume(30);
        bgYtPlayer.playVideo();
      } catch(e) {}
    }
  } else {
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
    const audio = document.getElementById('bgAudio');
    audio.pause();
    if (bgYtPlayer && ytReady) { try { bgYtPlayer.pauseVideo(); } catch(e) {} }
  }
});


/* ═══════════════════════════════════════════════════
   REASONS
═══════════════════════════════════════════════════ */
(function buildReasons() {
  const grid = document.getElementById('reasonsGrid');
  reasonsData.forEach((r, i) => {
    const div = document.createElement('div');
    div.className = 'reason-card';
    div.style.transitionDelay = `${i * 0.1}s`;
    div.style.transform = i % 2 === 0 ? 'translateY(20px)' : 'translateY(20px)';
    div.innerHTML = `
      <div class="reason-number">${r.number}</div>
      <div class="reason-icon">${r.icon}</div>
      <h3 class="reason-title">${r.title}</h3>
      <p class="reason-text">${r.text}</p>
    `;
    grid.appendChild(div);
    fadeObserver.observe(div);
  });
})();


/* ═══════════════════════════════════════════════════
   DREAMS
═══════════════════════════════════════════════════ */
(function buildDreams() {
  const grid = document.getElementById('dreamsGrid');
  dreamsData.forEach((d, i) => {
    const div = document.createElement('div');
    div.className = 'dream-card fade-up';
    div.style.transitionDelay = `${i * 0.1}s`;
    div.innerHTML = `
      <div class="dream-card-top">
        <div class="dream-icon">${d.icon}</div>
        <span class="dream-tag">${d.tag}</span>
      </div>
      <div class="dream-card-body">
        <h3 class="dream-title">${d.title}</h3>
        <p class="dream-text">${d.text}</p>
      </div>
    `;
    grid.appendChild(div);
    fadeObserver.observe(div);
  });
})();


/* ═══════════════════════════════════════════════════
   MODAL SYSTEM
═══════════════════════════════════════════════════ */
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('open');
  document.body.style.overflow = '';
  // Stop video when closing
  if (id === 'video-modal') {
    document.getElementById('videoEmbedWrap').innerHTML = '';
  }
}

// Close buttons
document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.dataset.modal));
});

// Click outside to close
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal(overlay.id);
  });
});

// Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
  }
  if (e.key === 'ArrowRight' && document.getElementById('lightbox-modal').classList.contains('open')) {
    document.getElementById('lightboxNext').click();
  }
  if (e.key === 'ArrowLeft' && document.getElementById('lightbox-modal').classList.contains('open')) {
    document.getElementById('lightboxPrev').click();
  }
});
