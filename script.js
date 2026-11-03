(function () {
  "use strict";

  // English strings; German is the default and is read from the HTML itself.
  var EN = {
    skip: "Skip to content",
    navAbout: "About",
    navProject: "Project",
    navExperience: "Experience",
    navContact: "Contact",
    tagline: 'Computer Science student at TU Hamburg <span class="sep">|</span> <span class="focus">Python · Data · AI automation</span>',
    lead: "Looking for a working student position (Werkstudent) in Hamburg – available now, up to 16&nbsp;hours/week.",
    btnContact: "Contact",
    btnCv: "CV (PDF)",
    aboutTitle: "About me",
    aboutText: "I have been studying Computer Science (B.Sc.) at Hamburg University of Technology (TUHH) since October 2024 and am in my 3rd semester of the programme. I am particularly interested in data, automation and artificial intelligence. As a student tutor, I explain technical topics in a way that makes them easy to understand.",
    langsTitle: "Languages",
    langsText: "German (C1) · English (fluent) · Persian (native)",
    locationTitle: "Location",
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
    experienceTitle: "Experience",
    job1Title: "Student Tutor",
    job1Text: "Leading weekly exercise sessions in English for the course “DAS”: opening quiz, problem sets, moderating student presentations and explaining solutions. Completed the TUHH tutor training, including a teaching simulation.",
    job2Title: "Front Office Manager Assistant &amp; Receptionist",
    job2Text: "Daily contact with international guests, shift work, cash systems and payment reconciliation. Promoted to Front Office Manager Assistant after 7&nbsp;months.",
    job3Title: "Service Staff (service &amp; logistics)",
    educationTitle: "Education",
    eduPeriod: "since 10/2024",
    eduDegree: "B.Sc. Computer Science",
    eduOrg: "Hamburg University of Technology (TUHH)",
    coursesTitle: "Current courses",
    c1: "Algorithms and Data Structures",
    c2: "Functional Programming (Haskell)",
    c3: "Numerical Mathematics",
    skillsTitle: "Skills",
    skillsProg: "Programming",
    skillsData: "Data &amp; tools",
    skillsAi: "AI tools",
    contactTitle: "Contact",
    availability: "Available now, up to 16&nbsp;hours per week – flexible on all weekdays for IT work.",
    emailLabel: "Email",
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
    techLabel: "Technologies"
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
})();
