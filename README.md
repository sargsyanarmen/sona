# Armen & Sona — Love Story Website

## Setup

1. Copy the entire folder to your computer or GitHub repo
2. Open `index.html` in a browser to preview

## How to Personalize

All editable content is at the **top of `script.js`** in the DATA SECTION.

### Key things to change:

**Names & Date** — search for "Armen" and "Sona" in `index.html`

**Photos** — Put photos in `assets/photos/gallery/` and update `galleryData` in `script.js`
```js
{ src: "assets/photos/gallery/photo1.jpg", caption: "Our first photo", date: "April 2024", category: "us" }
```

**Map Pins** — Edit `placesData` in `script.js`, add photo paths, adjust coordinates

**Timeline** — Edit `timelineData` in `script.js`

**Songs** — Add YouTube video IDs to `songsData`

**Background Music** — Set `youtubeId` in `bgMusicData` at top of `script.js`

**Letters** — Edit the `body` text in `lettersData`

**Why I Love You** — Edit `reasonsData`

**Future Dreams** — Edit `dreamsData`

## Folder Structure
```
/index.html
/style.css
/script.js
/assets/
  photos/
    gallery/     ← your couple photos go here
    timeline/    ← photos for timeline events
    places/      ← photos for map pins
    thumbs/      ← video thumbnail images
  videos/        ← local video files (.mp4)
  music/         ← local audio files (.mp3)
```

## Deploying to GitHub Pages
1. Push this folder to your GitHub repo
2. Go to Settings → Pages → Deploy from branch → main / root
3. Your site will be live at `https://yourusername.github.io/reponame`
