// Perfection IT Services — site behaviour
(function () {
  "use strict";

  // Build mailto links at runtime to keep the address off plain-text crawlers.
  document.querySelectorAll(".js-mailto").forEach(function (el) {
    var user = el.getAttribute("data-user");
    var domain = el.getAttribute("data-domain");
    if (user && domain) {
      el.setAttribute("href", "mailto:" + user + "@" + domain + "?subject=Consultation%20Request");
    }
  });

  // Mobile nav toggle
  var toggle = document.getElementById("navToggle");
  var menu = document.getElementById("navMenu");
  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    menu.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        menu.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Services dropdown
  document.querySelectorAll(".has-dropdown").forEach(function (item) {
    var btn = item.querySelector(".dropdown-toggle");
    if (!btn) return;
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var isOpen = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(isOpen));
    });
  });
  document.addEventListener("click", function (e) {
    document.querySelectorAll(".has-dropdown.open").forEach(function (item) {
      if (!item.contains(e.target)) {
        item.classList.remove("open");
        var btn = item.querySelector(".dropdown-toggle");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      document.querySelectorAll(".has-dropdown.open").forEach(function (item) {
        item.classList.remove("open");
        var btn = item.querySelector(".dropdown-toggle");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });
    }
  });
})();
