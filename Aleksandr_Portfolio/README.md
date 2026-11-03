# Aleksandr Hovsepyan — Cybersecurity Portfolio (Recruiter Edition)

A streamlined, mobile-friendly static portfolio for a First Class Honours Digital Forensics and Cyber Security graduate.

## What's changed

- Graduate-focused introduction: no outdated "final year student" language, incomplete credits or semester-grade sliders.
- Five carefully chosen projects shown directly on the page, with short descriptions and tangible outcomes.
- Skills grouped by area so recruiters can scan them quickly.
- Concise education, CTF result and training highlights.
- Direct working email, LinkedIn, GitHub and downloadable CV links.
- Simplified mobile-friendly navigation. No external JavaScript libraries or build step.

## Files

- `index.html` — all site content
- `style.css` — appearance and responsive layout
- `script.js` — small mobile-navigation handler and automatic footer year
- `assets/Aleksandr_Hovsepyan_CV.pdf` — PDF converted from the supplied CV

## Preview

Open `index.html` in a browser. For local testing that mimics hosting, run:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Publish

For GitHub Pages, put these files at your repo root and publish from the root directory. For Netlify or similar hosting, deploy the whole folder as a static site. Keep the `assets/` folder beside the HTML file.

## Editing

For project text, edit the project cards in `index.html`. For colours and spacing, edit the variables near the top of `style.css`. Update the PDF in `assets/` if your CV changes.

## Before publishing

- **Verify the phishing-detection evaluation figures.** The uploaded CV reports F1 0.946 and an approximately 1% false-positive-rate operating point, while the old portfolio's project data reports F1 0.918. This update uses the newer CV figures.
- Check the CV remains current and that its phone number is intended to be public in a downloadable file.
- Consider adding links to specific public GitHub repositories when they are ready. No repository links were fabricated.

Source material used: the previously supplied portfolio HTML/CSS/JS/README and the accompanying CV.
