# TruthCheck app

This folder turns the TruthCheck website into an app people can install on their phone. It opens
the live checker at https://newscheckerai1234.streamlit.app full screen, with its own icon and no
browser bar.

## 1. Put it online (GitHub Pages, free)

1. On github.com, click **New repository**. Name it `truthcheck-app`, set it to **Public**, and
   click **Create repository**.
2. On the new repository's page, click **uploading an existing file**.
3. Drag in everything from this folder: `index.html`, `manifest.webmanifest`, `sw.js`,
   `offline.html`, `favicon.png`, `README.md`, and the whole `icons` folder. Click
   **Commit changes**.
4. Go to **Settings → Pages**. Under **Branch**, choose `main` and `/ (root)`, then click **Save**.
5. After about a minute, the page shows your app's address, like
   `https://YOUR-USERNAME.github.io/truthcheck-app/`.

## 2. Install it on a phone

- **Android (Chrome):** open the address, tap **⋮**, then **Install app** (or **Add to Home screen**).
- **iPhone (Safari):** open the address, tap **Share**, then **Add to Home Screen**.

TruthCheck then appears with its green check icon and opens full screen.

## 3. Optional: an Android .apk file

1. Go to https://www.pwabuilder.com and paste your app's address.
2. Click **Package for stores**, then **Android**, then **Download**.
3. The download includes an `.apk` you can send to Android phones. Publishing on the Play Store
   needs a Google Play developer account ($25, one time).

## Good to know

- The app needs the internet; the checking happens online.
- If nobody has used the website for a while, Streamlit puts it to sleep. The app then shows
  "Yes, get this app back up!": tap it and wait about a minute.
- To change the address the app opens, edit the `src=` line in `index.html`.
