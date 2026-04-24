# Prachi . G — Personal Portfolio

A clean, responsive personal portfolio website built with HTML, CSS, and vanilla JavaScript.  
**Theme:** Dusty pink + black · **Fonts:** Playfair Display + DM Sans

---

## 📁 Project Structure

```
prachi-portfolio/
├── index.html        ← Main HTML file
├── css/
│   └── style.css     ← All styles
├── js/
│   └── main.js       ← Scroll animations, nav toggle, form
└── README.md
```

---

## 🚀 Deploy to GitHub Pages (Step-by-Step)

### Step 1 — Create a GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon → **New repository**
3. Name it: `prachi-portfolio` (or anything you like)
4. Set it to **Public**
5. Click **Create repository**

### Step 2 — Upload Your Files
**Option A — Via browser (easiest):**
1. On your new repo page, click **uploading an existing file**
2. Drag and drop ALL files and folders:
   - `index.html`
   - `css/` folder (with `style.css` inside)
   - `js/` folder (with `main.js` inside)
   - `README.md`
3. Click **Commit changes**

**Option B — Via Git (terminal):**
```bash
git init
git add .
git commit -m "Initial portfolio upload"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/prachi-portfolio.git
git push -u origin main
```

### Step 3 — Enable GitHub Pages
1. Go to your repo → **Settings** tab
2. Scroll down to **Pages** (left sidebar)
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**
5. Wait ~1–2 minutes, then your site will be live at:

```
https://YOUR_USERNAME.github.io/prachi-portfolio/
```

---

## ✏️ How to Update Content

- **Personal info, text** → edit `index.html`
- **Colors, fonts, spacing** → edit `css/style.css`
- **Animations, form behaviour** → edit `js/main.js`

After editing, just commit and push — GitHub Pages updates automatically.

---

## 🎨 Color Reference

| Variable         | Value     | Used for              |
|------------------|-----------|-----------------------|
| `--accent`       | `#c97070` | Links, highlights, bars |
| `--charcoal`     | `#2d1f1f` | Headings, nav         |
| `--pink-blush`   | `#fdf0f0` | Section backgrounds   |
| `--pink-mid`     | `#f2c4c4` | Borders, bars         |
| `--white`        | `#fffafa` | Page background       |

---

*Built for Prachi . G · Pacific States University · Los Angeles, CA*
