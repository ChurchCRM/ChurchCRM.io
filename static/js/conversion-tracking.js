/**
 * Conversion-funnel click tracking (GA4 via the existing gtag.js snippet in
 * layouts/partials/head.html — no new analytics platform is loaded here).
 *
 * Classifies clicks on existing links by URL pattern and sends a GA4 event.
 * No CTA markup, href, or page behavior is changed: this only listens.
 *
 * Event names and parameters are documented in
 * .agents/skills/analytics/references/conversion-events.md — keep that file
 * in sync with the classify() rules below.
 *
 * These events measure that a link was clicked, not what happened after —
 * see the "Attribution" section of that doc before adding anything that
 * implies a confirmed install, demo session, or docs read.
 */
(function () {
  "use strict";

  function classify(href) {
    if (!href) return null;

    if (/\/demo\.html(?:[?#]|$)/.test(href)) {
      return { event: "demo_click" };
    }
    if (/\/install\.html(?:[?#]|$)/.test(href)) {
      return { event: "install_click" };
    }
    if (/\/church-management-software\/?(?:[?#]|$)/.test(href)) {
      return { event: "learn_click", params: { learn_type: "product_page" } };
    }
    if (/#features$/.test(href)) {
      return { event: "learn_click", params: { learn_type: "features_anchor" } };
    }
    if (/^https?:\/\/docs\.churchcrm\.io/.test(href)) {
      return { event: "docs_click" };
    }
    if (/^https?:\/\/github\.com\/ChurchCRM\/CRM\/releases/.test(href)) {
      return { event: "github_release_click" };
    }
    if (/^https?:\/\/github\.com\/ChurchCRM\/CRM(?:\/|$)/.test(href)) {
      return { event: "github_click" };
    }
    return null;
  }

  function ctaLocation(link) {
    var explicit = link.getAttribute("data-ga-location");
    if (explicit) return explicit;
    if (link.closest("nav")) return "navbar";
    if (link.closest("footer")) return "footer";
    return "page_content";
  }

  document.addEventListener(
    "click",
    function (event) {
      var link = event.target.closest("a[href]");
      if (!link) return;

      var match = classify(link.getAttribute("href"));
      if (!match) return;

      if (typeof window.gtag !== "function") return;

      var params = {
        link_url: link.href,
        link_text: (link.textContent || "").trim().slice(0, 100),
        cta_location: ctaLocation(link),
        page_path: window.location.pathname,
      };
      if (match.params) {
        for (var key in match.params) {
          if (Object.prototype.hasOwnProperty.call(match.params, key)) {
            params[key] = match.params[key];
          }
        }
      }

      window.gtag("event", match.event, params);
    },
    true
  );
})();
