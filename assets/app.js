(function () {
  "use strict";
  var CV = window.CV;
  if (!CV) return;

  var I18N = {
    en: {
      "nav.about": "About", "nav.news": "News", "nav.publications": "Publications",
      "nav.experience": "Experience", "nav.teaching": "Teaching", "nav.talks": "Talks",
      "nav.projects": "Projects", "nav.grants": "Grants",
      "h.interests": "Research interests", "h.education": "Education",
      "p.pubnote": "First-author unless noted. Papers under review are not listed.",
      "t.date": "Date", "t.event": "Event", "t.host": "Host",
      "t.period": "Period", "t.project": "Project", "t.funder": "Funder", "t.amount": "Amount (KRW, thousands)",
      "f.updated": "Last updated", "btn.cv": "CV (PDF)", "btn.email": "Email", "btn.github": "GitHub",
      "btn.scholar": "Google Scholar", "btn.linkedin": "LinkedIn", "btn.orcid": "ORCID",
      "more.show": "Show all news", "more.hide": "Show less",
      "type.conference": "Conference", "type.workshop": "Workshop", "type.journal": "Journal", "type.preprint": "Preprint",
      "link.pdf": "PDF", "link.code": "Code", "link.doi": "DOI", "link.slides": "Slides", "link.video": "Video",
    },
    ko: {
      "nav.about": "소개", "nav.news": "소식", "nav.publications": "논문",
      "nav.experience": "경력", "nav.teaching": "강의", "nav.talks": "연사·특강",
      "nav.projects": "사업·개발 실적", "nav.grants": "연구·용역 과제",
      "h.interests": "연구 관심 분야", "h.education": "학력",
      "p.pubnote": "별도 표기가 없으면 제1저자. 심사 중인 논문은 기재하지 않음.",
      "t.date": "시기", "t.event": "행사 / 강의", "t.host": "주최",
      "t.period": "기간", "t.project": "과제명", "t.funder": "지원기관", "t.amount": "연구비 (천원)",
      "f.updated": "최종 수정", "btn.cv": "이력서 (PDF)", "btn.email": "이메일", "btn.github": "GitHub",
      "btn.scholar": "Google Scholar", "btn.linkedin": "LinkedIn", "btn.orcid": "ORCID",
      "more.show": "전체 소식 보기", "more.hide": "접기",
      "type.conference": "학회", "type.workshop": "워크샵", "type.journal": "저널", "type.preprint": "프리프린트",
      "link.pdf": "PDF", "link.code": "코드", "link.doi": "DOI", "link.slides": "슬라이드", "link.video": "영상",
    },
  };

  var ICONS = {
    email: '<svg viewBox="0 0 24 24"><path d="M2 5h20v14H2z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M2 6l10 7 10-7" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
    github: '<svg viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>',
    scholar: '<svg viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.9V17h2V9L12 3zm0 14.5L5 13.6V17l7 4 7-4v-3.4l-7 3.9z"/></svg>',
    cv: '<svg viewBox="0 0 24 24"><path d="M6 2h9l5 5v15H6z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M9 12h8M9 16h8M9 8h3" stroke="currentColor" stroke-width="2"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24"><path d="M4 3a2 2 0 110 4 2 2 0 010-4zM2 9h4v12H2zM9 9h4v2c.6-1 2-2.3 4-2.3 4 0 5 2.6 5 6V21h-4v-5.5c0-1.5 0-3.3-2-3.3s-2.3 1.5-2.3 3.2V21H9z"/></svg>',
    orcid: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M8 7.5v9M12 7.5v9h3a4.5 4.5 0 000-9z" fill="none" stroke="currentColor" stroke-width="2"/></svg>',
  };

  var lang = "en"; // 기본 영어 고정. 토글 또는 ?lang=ko 로 국문
  try { var stored = localStorage.getItem("lang"); if (stored === "ko" || stored === "en") lang = stored; } catch (e) {}
  var q = /[?&]lang=(en|ko)\b/.exec(location.search); if (q) lang = q[1];

  function t(key) { return (I18N[lang] && I18N[lang][key]) || I18N.en[key] || key; }
  function L(v) {
    if (v == null) return "";
    if (typeof v === "string") return v;
    return v[lang] || v.en || v.ko || "";
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function el(id) { return document.getElementById(id); }
  function isMe(name) {
    var me = [L(CV.meta.name), CV.meta.name.en, CV.meta.name.ko].filter(Boolean);
    return me.some(function (m) { return m && name.replace(/\s+/g, "").toLowerCase() === m.replace(/\s+/g, "").toLowerCase(); });
  }

  function renderMeta() {
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-bind]").forEach(function (n) { n.textContent = L(CV.meta[n.getAttribute("data-bind")]); });
    document.querySelectorAll("[data-i18n]").forEach(function (n) { n.textContent = t(n.getAttribute("data-i18n")); });
    document.title = L(CV.meta.name);
    var p = el("portrait");
    if (CV.meta.photo) { p.src = CV.meta.photo; p.hidden = false; } else { p.hidden = true; }

    var links = [];
    if (CV.meta.cvPdf) links.push({ href: CV.meta.cvPdf, icon: "cv", label: t("btn.cv") });
    if (CV.meta.email) links.push({ href: "mailto:" + CV.meta.email, icon: "email", label: CV.meta.email });
    if (CV.meta.github) links.push({ href: CV.meta.github, icon: "github", label: t("btn.github") });
    if (CV.meta.scholar) links.push({ href: CV.meta.scholar, icon: "scholar", label: t("btn.scholar") });
    if (CV.meta.linkedin) links.push({ href: CV.meta.linkedin, icon: "linkedin", label: t("btn.linkedin") });
    if (CV.meta.orcid) links.push({ href: CV.meta.orcid, icon: "orcid", label: t("btn.orcid") });
    el("hero-links").innerHTML = links.map(function (l) {
      var ext = /^https?:/.test(l.href) ? ' target="_blank" rel="noopener"' : "";
      return '<a href="' + esc(l.href) + '"' + ext + ">" + ICONS[l.icon] + "<span>" + esc(l.label) + "</span></a>";
    }).join("");

    var fm = el("footer-mail");
    fm.href = "mailto:" + CV.meta.email; fm.textContent = CV.meta.email;
    el("year").textContent = new Date().getFullYear();
    el("updated").textContent = document.lastModified ? new Date(document.lastModified).toISOString().slice(0, 10) : "";
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", b.getAttribute("data-lang") === lang ? "true" : "false");
    });
  }

  function renderAbout() {
    var paras = CV.about[lang] || CV.about.en || [];
    el("about-text").innerHTML = paras.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    el("interests").innerHTML = (CV.interests || []).map(function (i) { return "<li>" + esc(L(i)) + "</li>"; }).join("");
  }

  var NEWS_LIMIT = 5, newsExpanded = false;
  function renderNews() {
    var items = CV.news || [];
    var shown = newsExpanded ? items : items.slice(0, NEWS_LIMIT);
    el("news-list").innerHTML = shown.map(function (n) {
      return "<li><time>" + esc(n.date) + "</time><span>" + esc(L(n)) + "</span></li>";
    }).join("");
    var btn = el("news-more");
    btn.hidden = items.length <= NEWS_LIMIT;
    btn.textContent = newsExpanded ? t("more.hide") : t("more.show");
  }

  function renderPubs() {
    var pubs = (CV.publications || []).slice();
    var total = pubs.length;
    el("pub-list").innerHTML = pubs.map(function (p, i) {
      var authors = (p.authors || []).map(function (a) {
        return isMe(a) ? '<span class="me">' + esc(a) + "</span>" : esc(a);
      }).join(", ");
      var meta = [];
      if (p.type) meta.push('<span class="badge type">' + esc(t("type." + p.type)) + "</span>");
      if (L(p.note)) meta.push('<span class="badge">' + esc(L(p.note)) + "</span>");
      Object.keys(p.links || {}).forEach(function (k) {
        if (p.links[k]) meta.push('<a href="' + esc(p.links[k]) + '" target="_blank" rel="noopener">' + esc(t("link." + k)) + "</a>");
      });
      return '<li data-n="' + (total - i) + '">' +
        '<p class="pub-title">' + esc(p.title) + "</p>" +
        '<p class="pub-authors">' + authors + "</p>" +
        '<p class="pub-venue">' + esc(L(p.venue)) + (p.year ? ", " + esc(p.year) : "") + "</p>" +
        (meta.length ? '<div class="pub-meta">' + meta.join("") + "</div>" : "") +
        "</li>";
    }).join("");
  }

  function renderTimeline(id, items) {
    el(id).innerHTML = (items || []).map(function (x) {
      var period = lang === "ko" ? (x.period || "").replace(/present/i, "현재") : (x.period || "");
      return '<div class="tl"><div class="period">' + esc(period) + "</div><div>" +
        '<div class="org">' + esc(L(x.org)) + "</div>" +
        '<p class="role">' + esc(L(x.role)) + "</p>" +
        (L(x.desc) ? '<p class="desc">' + esc(L(x.desc)) + "</p>" : "") +
        "</div></div>";
    }).join("");
  }

  function renderTalks() {
    el("talks-table").tBodies[0].innerHTML = (CV.talks || []).map(function (x) {
      return '<tr><td class="date">' + esc(x.date) + "</td><td>" + esc(L(x.title)) + "</td><td>" + esc(L(x.host)) + "</td></tr>";
    }).join("");
  }

  function renderProjects() {
    el("project-list").innerHTML = (CV.projects || []).map(function (p) {
      return '<div class="card"><h3>' + esc(L(p.name)) + "</h3>" +
        '<div class="period">' + esc(p.period || "") + "</div>" +
        "<p>" + esc(L(p.desc)) + "</p>" +
        (p.link ? '<a class="card-link" href="' + esc(p.link) + '" target="_blank" rel="noopener">' + esc(p.link.replace(/^https?:\/\//, "")) + "</a>" : "") +
        "</div>";
    }).join("");
  }

  function renderGrants() {
    el("grants-table").tBodies[0].innerHTML = (CV.grants || []).map(function (g) {
      var amt = typeof g.amount === "number" ? g.amount.toLocaleString() : esc(g.amount || "");
      return '<tr><td class="date">' + esc(g.period) + "</td><td>" + esc(L(g.title)) + "</td><td>" + esc(L(g.funder)) + '</td><td class="num">' + amt + "</td></tr>";
    }).join("");
    el("grants-note").textContent = L(CV.grantsNote);
  }

  function renderAll() {
    renderMeta(); renderAbout(); renderNews(); renderPubs();
    renderTimeline("experience-list", CV.experience);
    renderTimeline("education-list", CV.education);
    renderTimeline("teaching-list", CV.teaching);
    renderTalks(); renderProjects(); renderGrants();
  }

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      lang = b.getAttribute("data-lang");
      try { localStorage.setItem("lang", lang); } catch (e) {}
      renderAll();
    });
  });
  el("news-more").addEventListener("click", function () { newsExpanded = !newsExpanded; renderNews(); });

  renderAll();
})();
