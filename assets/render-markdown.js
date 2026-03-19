async function renderMarkdownPage(config) {
  const container = document.getElementById("content");
  const title = document.getElementById("page-title");
  const subtitle = document.getElementById("page-subtitle");

  title.textContent = config.title;
  subtitle.textContent = config.subtitle;

  try {
    const response = await fetch(config.markdownPath, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const markdown = await response.text();
    container.innerHTML = marked.parse(markdown, {
      gfm: true,
      breaks: false,
      headerIds: true,
      mangle: false
    });

    if (window.MathJax && window.MathJax.typesetPromise) {
      await window.MathJax.typesetPromise([container]);
    }
  } catch (error) {
    container.innerHTML = `
      <p class="error">Could not load the Markdown source.</p>
      <p class="muted">Tried to open: <code>${config.markdownPath}</code></p>
      <p class="muted">Details: <code>${String(error.message || error)}</code></p>
    `;
  }
}
