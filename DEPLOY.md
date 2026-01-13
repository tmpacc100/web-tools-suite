# Deployment Instructions - GitHub Pages

To get your public URL for AdSense (e.g., `https://your-name.github.io/web-tools-suite/`), follow these steps.

## Step 1: Create Repository on GitHub
1. Log in to [GitHub.com](https://github.com/).
2. Click the **(+)** icon in the top right and select **New repository**.
3. Repository name: `web-tools-suite`
4. Visibility: **Public**
5. **Do not** check "Add a README" or .gitignore (we already have them).
6. Click **Create repository**.

## Step 2: Push Your Code
Copy the **URL** of your new repository (it looks like `https://github.com/USERNAME/web-tools-suite.git`).

Run the following commands in your terminal (replace `URL_HERE` with your actual URL):

```powershell
git remote add origin URL_HERE
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages
1. Go to your repository's **Settings** tab.
2. Click **Pages** in the left sidebar.
3. Under **Build and deployment** > **Source**, select `Deploy from a branch`.
4. Under **Branch**, select `main` and folder `/ (root)`.
5. Click **Save**.

## Step 4: Get Your URL
Wait about 1-2 minutes. Refresh the Pages settings page.
You will see a bar at the top saying:
> "Your site is live at **https://username.github.io/web-tools-suite/**"

**Copy this URL** and use it for your AdSense application!
