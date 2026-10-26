(() => {
  const prefix = '/umi-live';
  const { pathname, search, hash } = window.location;
  if (pathname !== prefix && !pathname.startsWith(`${prefix}/`)) return;

  // Set pathname separately so even paths beginning with // stay on our host.
  const destination = new URL('https://umi-live.github.io/');
  destination.pathname = pathname.slice(prefix.length) || '/';
  destination.search = search;
  destination.hash = hash;

  const link = document.getElementById('destination');
  if (link) link.href = destination.href;
  window.location.replace(destination.href);
})();
