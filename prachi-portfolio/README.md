# Prachi . G — Personal Portfolio

A clean, modern personal portfolio website built with pure HTML, CSS, and JavaScript.  
Theme: Dusty pink & black · Fonts: Cormorant Garamond + DM Sans

---

## 📁 Project Structure

```
prachi-portfolio/
├── index.html              ← Main HTML file
├── assets/
│   ├── css/
│   │   └── style.css       ← All styles & responsive layout
│   ├── js/
│   │   └── main.js         ← Scroll animations, nav, form logic
│   └── images/             ← Place your profile/project images here
└── README.md
```

---

## 🚀 Deploying to GitHub Pages

### Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click **"New repository"**
3. Name it: `prachi-portfolio` (or `yourusername.github.io` for a root URL)
4. Set it to **Public**
5. Click **"Create repository"**

---

### Step 2 — Upload Your Files

**Option A — Upload via browser (easiest):**

1. Open your new repository
2. Click **"Add file" → "Upload files"**
3. Drag and drop the entire `prachi-portfolio/` folder contents
4. Write a commit message like `Initial portfolio upload`
5. Click **"Commit changes"**

**Option B — Using Git (recommended):**

```bash
# In your project folder
git init
git add .
git commit -m "Initial portfolio upload"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/prachi-portfolio.git
git push -u origin main
```

---

### Step 3 — Enable GitHub Pages

1. In your repository, go to **Settings** (top menu)
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Branch"**, select `main` and folder `/root`
4. Click **Save**
5. Wait 1–2 minutes, then visit:

```
https://YOUR_USERNAME.github.io/prachi-portfolio/
```

---

## ✏️ Customization Guide

### Update your info
Open `index.html` and search for:
- `"Your name"` → update name fields
- `P26150@psu.edu` → your real email
- Contact section chips → update location/university

### Change colors
Open `assets/css/style.css` and edit the `:root` variables at the top:
```css
:root {
  --pink-accent: #c07068;   /* Main accent color */
  --ink:         #1c1214;   /* Text color */
  /* etc. */
}
```

### Add a profile photo
1. Place your photo in `assets/images/` (e.g. `profile.jpg`)
2. In `index.html`, add inside `.hero-content`:
```html
<img src="assets/images/profile.jpg" alt="Prachi G" class="hero-photo" />
```
3. Style it in `style.css` as needed

### Add project cards
Copy this block inside the `#projects` section (create a new section if needed):
```html
<div class="cert-tile">
  <div class="cert-icon">💻</div>
  <div class="cert-name">Project Title</div>
  <div class="cert-issuer">Tech Stack · Year</div>
</div>
```

---

## 🌐 Tech Stack

| Layer      | Technology                     |
|------------|--------------------------------|
| Markup     | HTML5 (semantic)               |
| Styling    | CSS3 (variables, grid, flex)   |
| Behavior   | Vanilla JavaScript (ES6+)      |
| Fonts      | Google Fonts (no build step)   |
| Hosting    | GitHub Pages (free)            |

---

## 📌 Features

- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll navigation with active link highlighting
- ✅ Intersection Observer scroll-reveal animations
- ✅ Animated skill progress bars
- ✅ Mobile hamburger menu
- ✅ Contact form with basic validation
- ✅ SEO meta tags
- ✅ No dependencies / no build tools required

---

## 📄 License

This project is for personal portfolio use. Feel free to adapt it for your own portfolio.
