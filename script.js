(function () {
  "use strict";

  // English strings; German is the default and is read from the HTML itself.
  var EN = {
    skip: "Skip to content",
    navAbout: "About",
    navProject: "Projects",
    navExperience: "Experience",
    navSkills: "Skills",
    navContact: "Contact",
    tagline: 'Computer Science student at TU Hamburg <span class="sep">|</span> <span class="focus">Python · Data · AI automation</span>',
    lead: "Looking for a working student position (Werkstudent) in Hamburg – available now, up to 16&nbsp;hours/week.",
    btnContact: "Contact",
    btnCv: "CV (PDF)",
    aboutKicker: "About me",
    aboutTitle: "Data. Automation. AI.",
    aboutText: "I have been studying Computer Science (B.Sc.) at Hamburg University of Technology (TUHH) since October 2024 and am in my 3rd semester of the programme. I am particularly interested in data, automation and artificial intelligence. As a student tutor, I explain technical topics in a way that makes them easy to understand.",
    tile1: "B.Sc. Computer Science since 10/2024",
    tile2Big: "3rd",
    tile2: "semester of the programme",
    tile3Big: "16&nbsp;h",
    tile3: "per week – available now",
    langsText: "German (C1) · English (fluent) · Persian (native)",
    projectsTitle: "Projects",
    projectSection: "Featured project",
    projectTitle: "AI agent workflow for automating job applications (with Claude)",
    projectP1: "A daily AI agent workflow built with Claude: it searches job portals, checks for duplicates via Gmail, generates tailored PDF applications with Python (reportlab), drafts emails and pre-fills application forms.",
    projectP2: "I defined the process, rules and quality checks myself – including a manual approval step before anything is sent and a SHA-256 check of uploaded files.",
    pipelineCaption: "Pipeline overview",
    step1: "Job search",
    step2: "Check that the posting is still live",
    step3: "Duplicate check via Gmail",
    step4: "PDF generation",
    step5: "Email / form preparation",
    step6: "Approval &amp; checks",
    tagAutomation: "Automation",
    heatmapCaption: "Real program output (bilinear interpolation) on synthetic sample data",
    heatmapTitle: "Heatmap Generator in C",
    heatmapContext: "Re-implementation 2026 · originally a team project (3&nbsp;people), TU Hamburg, course Procedural Programming, winter 2024/25",
    heatmapP1: "Command-line tool that turns 3D measurement data (x, y, z) from CSV files – e.g. depth profiles of the Elbe riverbed – into BMP heatmaps",
    heatmapP2: "Custom output resolution with interpolation of intermediate points (linear and nearest neighbour); 10-level colour scale from dark blue via green to red",
    heatmapP3: "Built with structs, pointers, dynamic memory management and file I/O; presented to the tutor and other groups",
    heatmapP4: "Independent re-implementation with tests, Makefile and memory checks (Valgrind/ASan)",
    legendLabel: "Colour scale",
    legendLow: "low",
    legendHigh: "high",
    dashboardCaption: "Screenshot of the live dashboard (as of 3 November 2026)",
    dashboardTitle: "Hamburg Working-Student Job Market Dashboard",
    dashboardContext: "Personal data project · 2026",
    dashboardP1: "Python pipeline that collects working-student postings daily from the German Federal Employment Agency’s API, then cleans, deduplicates and strips contact data.",
    dashboardP2: "SQLite storage; metrics from 10 standalone SQL queries using CTEs; skill detection with a transparent 35-skill YAML keyword dictionary.",
    dashboardP3: "Bilingual interactive Plotly dashboard on GitHub Pages, automated with GitHub Actions; 86 pytest tests and an automated privacy check.",
    tagCleaning: "Data Cleaning",
    tagViz: "Data Visualization",
    dashboardBtn: "View dashboard",
    experienceKicker: "Experience",
    experienceTitle: "Explaining, organising, taking responsibility.",
    badgeNow: "Current",
    job1Title: "Student Tutor",
    job1Text: "Leading weekly exercise sessions in English for the course “DAS”: opening quiz, problem sets, moderating student presentations and explaining solutions. Completed the TUHH tutor training, including a teaching simulation.",
    job2Title: "Front Office Manager Assistant &amp; Receptionist",
    job2Text: "Daily contact with international guests, shift work, cash systems and payment reconciliation. Promoted to Front Office Manager Assistant after 7&nbsp;months.",
    job3Title: "Service Staff (service &amp; logistics)",
    eduPeriod: "since 10/2024",
    eduDegree: "B.Sc. Computer Science",
    eduOrg: "Hamburg University of Technology (TUHH)",
    coursesTitle: "Current courses",
    c1: "Algorithms and Data Structures",
    c2: "Functional Programming (Haskell)",
    c3: "Numerical Mathematics",
    skillsKicker: "Education &amp; skills",
    skillsTitle: "The tools I work with.",
    skillsProg: "Programming",
    skillsData: "Data &amp; tools",
    skillsAi: "AI &amp; agents",
    aiText: "I don’t just use AI agents, I build them: my own agent workflows with Claude, skills that teach the AI new tasks, and automations with clear rules and human approval.",
    ai1Title: "Using &amp; building AI agents",
    ai1Text: "Designing multi-step agent workflows that research on their own, create documents and check the results.",
    ai2Title: "Creating skills for AI",
    ai2Text: "Writing reusable skills that teach an AI agent processes, rules and quality standards.",
    ai3Title: "Automating with AI",
    ai3Text: "Handing recurring work to AI – with checks such as manual approval and SHA-256 file verification.",
    aiNote: "This website, too, was built together with an AI agent (Claude Code) – from implementation to publishing.",
    contactTitle: "Contact",
    availability: "Available now, up to 16&nbsp;hours per week – flexible on all weekdays for IT work.",
    privacyTitle: "Privacy",
    privacyText:
      "<h3>Controller</h3>" +
      "<p>Ruzbeh Navabi, Hamburg. Contact via email (see above).</p>" +
      "<h3>Hosting</h3>" +
      "<p>This website is served by GitHub Pages (GitHub Inc., USA). When you visit it, GitHub processes technically necessary access data such as your IP address in order to deliver and secure the site. The legal basis is Art.&nbsp;6(1)(f) GDPR (legitimate interest in a secure, working website). Details: <a href=\"https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement\" rel=\"noopener\">GitHub Privacy Statement</a>.</p>" +
      "<h3>No cookies, no tracking</h3>" +
      "<p>This website sets no cookies and uses no analytics or tracking services. Your language choice (DE/EN) is stored only locally in your browser and is never transmitted.</p>" +
      "<h3>Contact by email</h3>" +
      "<p>If you email me, I use your details only to reply to your message.</p>" +
      "<h3>Your rights</h3>" +
      "<p>You have the right to access, rectification, erasure, restriction of processing and objection, as well as the right to lodge a complaint with a data protection supervisory authority, e.g. the Hamburg Commissioner for Data Protection and Freedom of Information.</p>"
  };
  var EN_ARIA = {
    navLabel: "Main navigation",
    langLabel: "Language",
    techLabel: "Technologies",
    legendAria: "10 colour levels from dark blue (low) via green to red (high)"
  };
  var EN_ALT = {
    photoAlt: "Portrait of Ruzbeh Navabi in front of Hamburg City Hall",
    heatmapAlt: "Heatmap of a synthetic riverbed depth profile with colour levels from dark blue via green to red",
    dashboardAlt: "Dashboard screenshot: key figures and bar chart of the 15 most requested skills"
  };
  var EN_META = {
    title: "Ruzbeh Navabi – Computer Science Student (TUHH)",
    description: "Ruzbeh Navabi, Computer Science student at Hamburg University of Technology (TUHH). Python, data and AI automation. Looking for a working student position in Hamburg."
  };

  var STORAGE_KEY = "lang";
  var textNodes = document.querySelectorAll("[data-i18n]");
  var ariaNodes = document.querySelectorAll("[data-i18n-aria]");
  var metaDesc = document.querySelector('meta[name="description"]');

  // Remember the German originals so switching back needs no second dictionary.
  var DE = {};
  var DE_ARIA = {};
  textNodes.forEach(function (el) { DE[el.dataset.i18n] = el.innerHTML; });
  ariaNodes.forEach(function (el) { DE_ARIA[el.dataset.i18nAria] = el.getAttribute("aria-label"); });
  var DE_META = { title: document.title, description: metaDesc ? metaDesc.content : "" };
  var hrefNodes = document.querySelectorAll("[data-href-en]");
  hrefNodes.forEach(function (el) { el.dataset.hrefDe = el.getAttribute("href"); });
  var altNodes = document.querySelectorAll("[data-i18n-alt]");
  var DE_ALT = {};
  altNodes.forEach(function (el) { DE_ALT[el.dataset.i18nAlt] = el.alt; });

  function apply(lang) {
    var strings = lang === "en" ? EN : DE;
    var aria = lang === "en" ? EN_ARIA : DE_ARIA;
    var meta = lang === "en" ? EN_META : DE_META;

    textNodes.forEach(function (el) {
      var value = strings[el.dataset.i18n];
      if (value !== undefined) el.innerHTML = value;
    });
    ariaNodes.forEach(function (el) {
      var value = aria[el.dataset.i18nAria];
      if (value !== undefined) el.setAttribute("aria-label", value);
    });
    hrefNodes.forEach(function (el) {
      el.setAttribute("href", lang === "en" ? el.dataset.hrefEn : el.dataset.hrefDe);
    });
    altNodes.forEach(function (el) {
      el.alt = (lang === "en" ? EN_ALT : DE_ALT)[el.dataset.i18nAlt];
    });
    document.documentElement.lang = lang;
    document.title = meta.title;
    if (metaDesc) metaDesc.content = meta.description;

    document.querySelectorAll(".lang-switch button").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
    });
  }

  function readStored() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function store(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* storage unavailable */ }
  }

  document.querySelectorAll(".lang-switch button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      apply(btn.dataset.lang);
      store(btn.dataset.lang);
    });
  });

  if (readStored() === "en") apply("en");

  // Assemble the email address at runtime so it is not in the HTML as plain text.
  document.querySelectorAll(".js-mail").forEach(function (el) {
    var address = el.dataset.user + "@" + el.dataset.domain;
    el.href = "mailto:" + address;
    el.textContent = address;
  });

  // Fade sections in as they scroll into view.
  var revealNodes = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealNodes.forEach(function (el) { el.classList.add("is-visible"); });
    return;
  }
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
  revealNodes.forEach(function (el) { observer.observe(el); });
})();
