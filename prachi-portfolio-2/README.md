# Prachi . G — Personal Portfolio Website

A fully responsive personal portfolio website for **Prachi G**, Backend Developer and CS Student at Pacific States University, Los Angeles.

**Theme:** Dusty / Baby Pink + Black  
**Fonts:** Cormorant Garamond (headings) + DM Sans (body)  
**Stack:** Pure HTML5, CSS3, Vanilla JavaScript — zero dependencies, no build tools needed.

---

## 📁 Project Structure

```
prachi-portfolio/
│
├── index.html                  ← Main HTML (all sections)
│
├── assets/
│   ├── css/
│   │   └── style.css           ← All styles, theme, responsive rules
│   ├── js/
│   │   └── main.js             ← Animations, nav, skill bars, form
│   └── images/
│       └── PLACE_IMAGES_HERE.txt
│
└── README.md                   ← This file
```

---

## 🌐 Sections Included

| Section         | Description                                          |
|----------------|------------------------------------------------------|
| **Home / Hero** | Name, role, tagline, CTA buttons, intro bio         |
| **About**       | Bio paragraphs + info cards (location, email, etc.) |
| **Expertise**   | 6 cards covering key skill areas                    |
| **Skills**      | Animated progress bars + technology tag cloud       |
| **Experience**  | Timeline of 3 internship roles with details         |
| **Projects**    | 3 project cards with stack badges + GitHub links    |
| **Education**   | PSU degree card with course tags                    |
| **Certifications** | 3 Oracle / Unisoft credentials                  |
| **Contact**     | Form (name, email, subject, message) + info panel   |
| **Footer**      | Brand, copyright, quick nav links                   |

---

## 🚀 Deploying to GitHub Pages

### Step 1 — Create a GitHub Repository

1. Sign in at [github.com](https://github.com)
2. Click **"+"** → **"New repository"**
3. Repository name: `prachi-portfolio` *(or `yourusername.github.io` for a root URL)*
4. Set to **Public**
5. Click **"Create repository"**

---

### Step 2 — Upload Your Files

**Option A — Browser upload (simplest):**

1. Open your new repository page on GitHub
2. Click **"Add file"** → **"Upload files"**
3. Drag and drop **all files and folders** from inside `prachi-portfolio/`
   - `index.html`
   - `assets/` folder (with all subfolders)
   - `README.md`
4. Write a commit message, e.g. `Initial portfolio upload`
5. Click **"Commit changes"**

**Option B — Git (recommended):**

```bash
# Navigate into the project folder
cd prachi-portfolio

# Initialise git
git init
git add .
git commit -m "Initial portfolio upload"

# Set branch and push
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/prachi-portfolio.git
git push -u origin main
```

---

### Step 3 — Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** (top menu bar)
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Branch"**, select `main` and folder `/ (root)`
5. Click **Save**
6. Wait 1–3 minutes, then your site will be live at:

```
https://YOUR_USERNAME.github.io/prachi-portfolio/
```

---

## ✏️ How to Customise

### Update personal info
Open `index.html` and search/replace:
- `P26150@psu.edu` → your real email
- `Los Angeles, California` → your location
- `Pacific States University` → your university

### Change the colour theme
Open `assets/css/style.css` and edit the `:root` block at the very top:

```css
:root {
  --pink-accent: #c07068;   /* Main accent/highlight colour */
  --pink-mid:    #dfa89f;   /* Progress bars, dots */
  --ink:         #1a1214;   /* Main text colour */
  /* etc. */
}
```

### Add a profile photo
1. Save your photo as `assets/images/profile.jpg`
2. In `index.html`, inside `.hero-content`, add:
```html
<img src="assets/images/profile.jpg" alt="Prachi G" class="hero-photo" />
```
3. Style it in `style.css`:
```css
.hero-photo {
  width: 160px; height: 160px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--pink-mid);
  margin-bottom: 1.5rem;
}
```

### Update GitHub project links
Search for `href="#"` inside the project cards in `index.html` and replace `#` with your actual GitHub repository URLs.

### Add more projects
Copy a `.project-card` block inside the `#projects` section and update the content:
```html
<div class="project-card reveal">
  <div class="proj-top">
    <div class="proj-icon">💡</div>
    <span class="proj-status">In Progress</span>
  </div>
  <h3 class="proj-title">Your Project Title</h3>
  <p class="proj-desc">Short description of what the project does.</p>
  <div class="proj-stack">
    <span>Java</span><span>Spring</span><span>MySQL</span>
  </div>
  <a href="https://github.com/..." class="proj-link">View on GitHub</a>
</div>
```

---

## ⚙️ Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Markup      | HTML5 (semantic elements)           |
| Styling     | CSS3 (variables, grid, flexbox)     |
| Scripting   | Vanilla JavaScript ES6+             |
| Fonts       | Google Fonts (no build step)        |
| Hosting     | GitHub Pages (free static hosting)  |

---

## ✅ Features Checklist

- [x] Fully responsive — mobile, tablet, desktop
- [x] Sticky navbar with active link highlighting on scroll
- [x] Mobile hamburger menu with animation
- [x] Scroll-reveal animations (IntersectionObserver)
- [x] Animated skill progress bars
- [x] Contact form with input validation
- [x] SEO meta tags (description, keywords, Open Graph)
- [x] Smooth scrolling (CSS + JS fallback)
- [x] Zero external dependencies — no npm, no build tools
- [x] GitHub Pages ready out of the box

---

## 📄 License

Built for personal portfolio use. Free to adapt for your own portfolio.
