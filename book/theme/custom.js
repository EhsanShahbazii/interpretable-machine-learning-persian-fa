(function () {
  const AVATAR_URL = "https://github.com/maryammahmoudi1993.png";
  const GITHUB_URL = "https://github.com/maryammahmoudi1993";
  const STORAGE_KEY = "iml-fa-avatar";

  function injectSidebarAvatar() {
    const sidebar = document.querySelector(".sidebar-scrollbox");
    if (!sidebar) return;
    if (document.querySelector(".sidebar-header")) return;

    const saved = localStorage.getItem(STORAGE_KEY);
    const src = saved || AVATAR_URL;

    const header = document.createElement("div");
    header.className = "sidebar-header";
    header.innerHTML =
      '<img class="sidebar-avatar" src="' + src + '" alt="مریم محمودی">' +
      '<span class="sidebar-name">مریم محمودی</span>' +
      '<a class="sidebar-github" href="' + GITHUB_URL + '" target="_blank">' + GITHUB_URL.replace("https://", "") + '</a>';

    sidebar.prepend(header);
  }

  function setupCoverDrop() {
    const circle = document.getElementById("avatarCircle");
    if (!circle) return;

    const img = circle.querySelector("img");
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      img.src = saved;
      circle.classList.add("has-image");
    }

    circle.addEventListener("click", function () {
      const input = document.createElement("input");
      input.type = "file";
      input.accept = "image/*";
      input.addEventListener("change", function (e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function (ev) {
          const data = ev.target.result;
          img.src = data;
          circle.classList.add("has-image");
          localStorage.setItem(STORAGE_KEY, data);
          updateSidebarAvatar(data);
        };
        reader.readAsDataURL(file);
      });
      input.click();
    });

    circle.addEventListener("dragover", function (e) {
      e.preventDefault();
      circle.classList.add("dragover");
    });

    circle.addEventListener("dragleave", function () {
      circle.classList.remove("dragover");
    });

    circle.addEventListener("drop", function (e) {
      e.preventDefault();
      circle.classList.remove("dragover");
      const file = e.dataTransfer.files[0];
      if (!file || !file.type.startsWith("image/")) return;
      const reader = new FileReader();
      reader.onload = function (ev) {
        const data = ev.target.result;
        img.src = data;
        circle.classList.add("has-image");
        localStorage.setItem(STORAGE_KEY, data);
        updateSidebarAvatar(data);
      };
      reader.readAsDataURL(file);
    });
  }

  function updateSidebarAvatar(src) {
    const avatar = document.querySelector(".sidebar-avatar");
    if (avatar) avatar.src = src;
  }

  var TRANSLATOR_MARKERS = ["توضیح مترجم", "برای درک بهتر", "مثال مترجم"];

  function markTranslatorNotes() {
    var blockquotes = document.querySelectorAll(".content blockquote");
    blockquotes.forEach(function (bq) {
      var text = bq.textContent || "";
      var isTranslatorNote = TRANSLATOR_MARKERS.some(function (marker) {
        return text.indexOf(marker) !== -1;
      });
      if (isTranslatorNote) {
        bq.classList.add("translator-note");
      }
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      injectSidebarAvatar();
      setupCoverDrop();
      markTranslatorNotes();
    });
  } else {
    injectSidebarAvatar();
    setupCoverDrop();
    markTranslatorNotes();
  }
})();
