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

  var isUserInteractingWithSidebar = false;
  var userInteractionTimeout = null;

  function scrollSidebarToActive() {
    if (isUserInteractingWithSidebar) return;
    var current = document.querySelector("#mdbook-sidebar .current-header");
    var scrollbox = document.querySelector("mdbook-sidebar-scrollbox");
    if (!current || !scrollbox) return;

    var itemRect = current.getBoundingClientRect();
    var boxRect = scrollbox.getBoundingClientRect();

    var isComfortablyVisible =
      itemRect.top >= boxRect.top + 70 &&
      itemRect.bottom <= boxRect.bottom - 70;

    if (!isComfortablyVisible) {
      var relativeTop = itemRect.top - boxRect.top + scrollbox.scrollTop;
      var targetTop = relativeTop - (boxRect.height / 2) + (itemRect.height / 2);
      scrollbox.scrollTo({
        top: Math.max(0, targetTop),
        behavior: "smooth"
      });
    }
  }

  function setupSidebarScrollSync() {
    var scrollbox = document.querySelector("mdbook-sidebar-scrollbox");
    if (scrollbox) {
      scrollbox.addEventListener("mouseenter", function () {
        isUserInteractingWithSidebar = true;
        clearTimeout(userInteractionTimeout);
      });

      scrollbox.addEventListener("mouseleave", function () {
        userInteractionTimeout = setTimeout(function () {
          isUserInteractingWithSidebar = false;
        }, 1200);
      });

      scrollbox.addEventListener("wheel", function () {
        isUserInteractingWithSidebar = true;
        clearTimeout(userInteractionTimeout);
        userInteractionTimeout = setTimeout(function () {
          isUserInteractingWithSidebar = false;
        }, 2000);
      }, { passive: true });

      scrollbox.addEventListener("touchstart", function () {
        isUserInteractingWithSidebar = true;
        clearTimeout(userInteractionTimeout);
      }, { passive: true });

      scrollbox.addEventListener("touchend", function () {
        userInteractionTimeout = setTimeout(function () {
          isUserInteractingWithSidebar = false;
        }, 1500);
      });
    }

    var sidebar = document.getElementById("mdbook-sidebar");
    if (sidebar) {
      var observer = new MutationObserver(function (mutations) {
        for (var i = 0; i < mutations.length; i++) {
          var m = mutations[i];
          if (m.attributeName === "class" && m.target.classList.contains("current-header")) {
            scrollSidebarToActive();
            break;
          }
        }
      });

      observer.observe(sidebar, {
        attributes: true,
        attributeFilter: ["class"],
        subtree: true
      });
    }

    var ticking = false;
    window.addEventListener("scroll", function () {
      if (!ticking) {
        window.requestAnimationFrame(function () {
          scrollSidebarToActive();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    setTimeout(scrollSidebarToActive, 300);
  }

  function setupNightModeToggle() {
    var btn = document.getElementById("mdbook-theme-toggle");
    if (!btn) return;

    var moonSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    var sunSvg = '<svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>';

    var newBtn = btn.cloneNode(true);
    btn.parentNode.replaceChild(newBtn, btn);

    function updateThemeUI() {
      var isDark = document.documentElement.classList.contains("theme-dark");
      newBtn.innerHTML = '<span class="fa-svg">' + (isDark ? sunSvg : moonSvg) + '</span>';
      newBtn.title = isDark ? "تغییر به حالت روز (روشن)" : "مطالعه در شب (حالت تیره)";
      newBtn.setAttribute("aria-label", newBtn.title);
    }

    newBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      e.preventDefault();
      var isDark = document.documentElement.classList.toggle("theme-dark");
      try {
        localStorage.setItem("iml-fa-dark-theme", isDark ? "dark" : "light");
      } catch (err) {}
      updateThemeUI();
    });

    updateThemeUI();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      injectSidebarAvatar();
      setupCoverDrop();
      markTranslatorNotes();
      setupSidebarScrollSync();
      setupNightModeToggle();
    });
  } else {
    injectSidebarAvatar();
    setupCoverDrop();
    markTranslatorNotes();
    setupSidebarScrollSync();
    setupNightModeToggle();
  }
})();
