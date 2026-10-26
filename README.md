# Legacy UMI-Live website redirects

This GitHub Pages site keeps `https://branyang02.github.io/umi-live/` bookmarks working after the project moved to `https://umi-live.github.io/`.

Publish the root of the `main` branch. `umi-live/index.html` and `umi-live/hardware.html` serve the known pages; `404.html` handles other legacy paths. `redirect.js` preserves the path after `/umi-live`, the query string, and the fragment, and uses `location.replace` to avoid a back-button loop. Unrelated paths are not redirected.

The homepage and hardware guide include no-JavaScript redirects and visible fallback links. Other paths require JavaScript. These are browser redirects, not HTTP 301 responses. Embedded asset requests cannot be redirected by JavaScript; update image, video, and download references to the new origin directly.

This repository intentionally uses the personal account's Pages repository name rather than recreating `branyang02/umi-live`, preserving GitHub's automatic redirect for the transferred Git repository.
