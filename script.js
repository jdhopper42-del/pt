const tutors = [
  {
    name: "JD Hopper",
    type: "Founder & All-Purpose Tutor",
    image: "assets/JD H.png",
    bio: [
      "Purpose Tutoring was founded by JD Hopper, a professional K-12 tutor and college admissions coach who, in addition to his tutoring practice, serves as a public speaking instructor at Charlotte Latin School, one of Charlotte's best private schools.",
      "JD graduated high school with a 4.0 unweighted GPA after completing 15 AP and dual enrollment courses and earning a 5 on every AP exam he took. That academic head start helped him graduate from UNC-Chapel Hill’s rigorous economics program in two years.",
      "JD tutors all subjects and specializes in math tutoring from early elementary through advanced calculus. His approach is centered on meeting students where they are and helping them understand the “why” behind what they’re doing, so math feels logical and empowering, not like a random set of rules to memorize.",
      "JD works with a large roster of students, but he continues to take on new clients as his schedule allows because his passion and mission is to help students thrive in school and in life."
    ]
  },
  {
    name: "Sara M.",
    type: "All-Purpose Tutor",
    image: "assets/Sara M.png",
    bio: [
      "Sara graduated cum laude from the University of North Carolina at Chapel Hill in just three years, earning a double major and a minor, and recently completed her Master of Science degree, graduating summa cum laude. Her strong academic background began early: she graduated high school as salutatorian, earned a 4.0 unweighted GPA, completed more than 10 AP courses, scored 4s and 5s on every AP exam, and earned a 1500 on the SAT.",
      "With over five years of private tutoring experience, Sara works with students from early elementary through the undergraduate level. She specializes in mathematics, from foundational numeracy through Algebra, Geometry, and beyond, as well as SAT/ACT preparation, writing, Spanish, and a range of humanities and social science subjects.",
      "Sara is especially passionate about math instruction and believes it should feel logical, creative, and empowering rather than intimidating. Her teaching philosophy centers on meeting students where they are, helping them understand the “why” behind their work, and building both conceptual mastery and independent problem-solving skills."
    ]
  },
  {
    name: "Barrett B.",
    type: "SAT & ACT Tutor",
    image: "assets/Barrett B.png",
    bio: [
      "Barrett holds a Master’s degree in Biostatistics from the University of Toronto, where he gained valuable experience as a teaching assistant for upper-level statistics courses. He also earned a Bachelor’s degree in Statistics from the University of North Carolina at Chapel Hill. In addition to his academic background, Barrett scored a 34 on the ACT, giving him firsthand insight into high-level test performance.",
      "With over two years of tutoring experience, Barrett specializes in SAT and ACT Math, Calculus, and Statistics. He has helped students raise their SAT scores from around 1000 to 1400 in just a few months, as well as guided high-performing students from the 1400s into the mid-1500s.",
      "His teaching philosophy centers on creating a space where students are not afraid to say “I don’t know.” He believes that confusion in math often stems from fear of being wrong, so in his sessions, he works slowly and intentionally through problems until each concept fully clicks. Barrett tailors his lessons to each student’s learning style, focusing on strong fundamentals, clear problem-solving strategies, and building lasting confidence."
    ]
  },
  {
    name: "Mikyla W.",
    type: "English & Writing Tutor",
    image: "assets/Mikyla W.png",
    bio: [
      "Mikyla is an award-winning English educator with an exceptional blend of classroom experience, academic achievement, and advanced communication training. A graduate of UNC-Chapel Hill with a degree in Media and Journalism and a minor in American Studies, she is now pursuing her master’s degree at Johns Hopkins University.",
      "Since 2022, Mikyla has taught 7th, 8th, and 9th grade English, building a reputation for strong instruction, thoughtful mentorship, and meaningful student growth. Her excellence in the classroom was recognized when she was named Teacher of the Year for the 2025 to 2026 school year.",
      "In addition to teaching, Mikyla also works part time writing secondary English Language Arts curriculum for Fort Worth ISD, giving her deep expertise in both instruction and curriculum design. She is an outstanding choice for students seeking high-level support in writing, reading comprehension, literary analysis, and overall academic communication."
    ]
  },
  {
    name: "Shawn A.",
    type: "Biology, Chemistry, & Earth Sciences Tutor",
    image: "assets/Shawn A.png",
    bio: [
      "Shawn studied Biology at Davidson College, where he served in multiple peer mentorship and leadership roles. After graduating, he worked as a full-time high school Earth and Environmental Science teacher in Charlotte-Mecklenburg Schools before later pursuing a career at Atrium Health.",
      "Shawn is especially strong in the natural sciences, including biology, environmental science, and chemistry, and he also works with students preparing for standardized tests such as the SAT and ACT. He completed advanced Spanish coursework at Universidad de Cádiz, which further developed his fluency and cultural understanding and helps him serve as a highly capable Spanish tutor in addition to his science and test prep work.",
      "Shawn excels at breaking down complex material and explaining it in a way that feels clear and manageable for students. His goal is not only to help students raise their grades, but also to give them the confidence to participate more in class and approach challenging material with curiosity instead of anxiety."
    ]
  },
  {
    name: "John B.",
    type: "Mandarin Chinese and Russian Languages Tutor",
    image: "assets/John B.png",
    bio: [
      "John is an exceptionally strong Mandarin Chinese and Russian languages tutor with rare depth in both language instruction and real-world translation. A fluent Russian speaker, he combines advanced fluency, formal translation training, and cross-cultural communication experience to help students build both accuracy and confidence.",
      "He has taught and tutored Russian and Mandarin Chinese in multiple settings, including serving as a Chinese Language and Culture Teaching Assistant and as a Chinese and Russian tutor at UNC Charlotte. In addition to his teaching experience, he has completed intensive Chinese study at UNC-Chapel Hill and earned a certificate in Translating Russian to English from UNC Charlotte, giving him an unusually well-rounded foundation in both language learning and language teaching.",
      "John’s background includes translation, proofreading, interpretation support, and work with advanced Russian grammar and conversation, which allows him to support students with both practical communication and high-level language mastery. He is an outstanding choice for students seeking serious support in Russian or Mandarin Chinese from a tutor with linguistic expertise and a proven ability to teach."
    ]
  },
  {
    name: "Thomas P.",
    type: "Writing Tutor & Essay Coach",
    image: "assets/Thomas P.png",
    bio: [
      "Thomas trained as a writing tutor at the Sweetland Writing Center at his alma mater, the University of Michigan. Since then, he has tutored student athletes in writing and economics and worked as a literacy tutor for children ages 5 to 7. By day, he runs a software engineering consultancy. Outside of work he writes and delivers speeches and blogs about technology, software, and culture. He believes that good writing is good thinking, and he loves helping students find their voice on the page.",
      "At the heart of his approach is a simple belief: every student has something worth saying. Thomas is passionate about helping students express themselves fully on the page, connect with their own voice, and bring the great ideas they already have inside them to the surface in a way that feels authentic, thoughtful, and compelling."
    ]
  }
];

const preloadImageSources = new Set([
  "assets/HD Purpose Tutoring Logo.png",
  "assets/JD-Hopper-tutoring-student.jpg",
  "assets/articles/the-human-advantage.webp",
  "assets/articles/teachers-are-irreplaceable.webp",
  "assets/articles/teaching-the-why.webp",
  "assets/articles/why-students-stop-caring.webp",
  "assets/Testimonials.png",
  "assets/Founding Story.png",
  "assets/Mission Statement.png",
  "assets/JD-Hopper.jpg",
  ...tutors.map((tutor) => tutor.image)
]);

preloadImageSources.forEach((source) => {
  const image = new Image();
  image.decoding = "async";
  image.src = source;
});

const modalCopy = {
  mission: {
    title: "The Mission of Purpose Tutoring",
    paragraphs: [
      "At Purpose Tutoring, our mission is to give students focused, one-on-one academic support that builds on the good work already happening in their classrooms.",
      "School can be demanding, even for bright and motivated students. With full schedules, rigorous courses, and more independent or online learning, it is normal for students to want extra time to slow down, ask questions, and practice with someone in their corner. We exist to create that kind of calm, structured space where each student can grow in both skill and confidence.",
      "We believe every student learns in a unique way, and that how you teach matters just as much as what you teach. Instead of following a rigid, one-size-fits-all curriculum, we start with questions. What is happening in school right now? Where does it feel confusing, stressful, or discouraging? What are the student’s goals, strengths, and frustrations? From there, we tailor sessions to that specific student, not to a generic profile.",
      "Our approach is highly prepared and deeply relational. Before sessions, your tutor may review assignments, tests, and class materials in advance so time together is focused and efficient. When needed, our team creates custom practice sets, step-by-step guides, and targeted review so students have something clear to return to between sessions. Over time, tutoring becomes less about “getting through the homework” and more about helping a real person grow in skill and self-belief.",
      "We are especially passionate about serving students who are capable and hardworking, yet feel like they could use a clearer path forward. These are the students who want to understand, not just memorize. They may be aiming for higher grades, stronger SAT or ACT scores, or a smoother path toward college admissions, but underneath all of that they want to feel capable and supported.",
      "Our mission is to come alongside students and families as a trusted partner, turning confusion into clarity and stress into a sense of steady progress. Session by session, relationship by relationship, we help students move forward with purpose in their classes, in their confidence, and in their future."
    ]
  },
  story: {
    title: "The Story of Purpose Tutoring",
    paragraphs: [
      "Purpose Tutoring started with a simple conviction: every student deserves a tutor who believes in them, challenges them, and helps them see what they are truly capable of.",
      "Our founder, JD Hopper, began tutoring because he kept seeing the same problem again and again. Bright, hardworking students were falling behind not because they were incapable, but because they needed more time, clearer explanations, and a calm space to ask questions without pressure. Too often, academic help felt generic. Students needed something personal.",
      "Purpose Tutoring was founded in <strong>Charlotte, NC</strong>, and it grew quickly because families were looking for a different kind of support: tutoring that is prepared, relational, and tailored to the individual student. As demand grew, Purpose Tutoring expanded into a team model so that students could be matched with tutors who fit their exact needs across math, science, English, writing, test prep, study skills, and college admissions.",
      "Today, we serve students nationwide through online tutoring, with in-person sessions available in Charlotte when scheduling and subject fit allow. No matter the location, our goal stays the same: to help students move from stress and confusion to clarity, confidence, and steady progress.",
      "If you are looking for tutoring that is both highly practical and deeply encouraging, you are in the right place."
    ]
  },
  testimonials: {
    title: "Testimonials",
    html: `
      <h3>Parents say:</h3>
      <blockquote>"Sara is one of the most thoughtful and effective tutors we've ever worked with. She combines deep academic knowledge with a genuine ability to connect with students, and she pushes them to reach higher while still making them feel supported. Our son's improvement in both grades and confidence has been remarkable."</blockquote>
      <blockquote>“JD Hopper is an exceptional tutor. My son fell a bit behind in math during the school year and JD spent the summer helping him catch up. Within just a few short months, he raised Henry’s confidence level and bridged the gaps so that we could all breathe easy for the first day of school. JD also helps him with his organizational skills and taught him the Cornell note-taking method. JD is not the first or even the second tutor or tutoring center we’ve engaged for this, but he is the first tutor to actually succeed.”</blockquote>
      <blockquote>"We've worked with several tutors over the years, and Sara stands out immediately. She has an incredible ability to explain concepts in a way that actually makes sense to students, and she's thoughtful about how each child learns. Our daughter's confidence and performance in math improved significantly after working with her."</blockquote>
      <blockquote>"Sara is the rare tutor who looks at the whole student, not just the assignment in front of them. She helped our daughter build organization systems, study strategies, and the confidence to advocate for herself at school. The academic improvement has been clear, but the long-term skills she's gained are even more valuable."</blockquote>
      <blockquote>"Sara has a gift for explaining things in a way that just clicks. Our son had struggled with math for years, and after working with her he not only improved his grades but started participating in class and tackling problems independently. We're incredibly grateful for the impact she's had."</blockquote>
      <h3>Students say:</h3>
      <blockquote>"Mikyla is one of the best tutors in the world. She helped me so much and made me the person who I am today. She is such a kindhearted, loving and overall outstanding soul. She taught me to never let anyone affect my character because of the way they feel about me. She taught me to keep going even when times are tough. She is one of the strongest most resilient people I know and I’m so thankful that I got to meet such a wonderful and beautiful person!!! I love her!!!"</blockquote>
      <blockquote>"Sara explains math in a way that actually makes sense. Before working with her, I would get stuck and not know where to start, but now I feel like I understand the steps and can solve problems all on my own. I used to feel really stressed before math tests, but now I feel much more confident and prepared. Sara made learning fun!"</blockquote>
      <blockquote>“JD has been very helpful with tutoring and paper writing for admission essays. In math, JD truly took his time to explain what is happening in the problem, rather than just giving advice on memorizing formulas. He guided me through logical grammar and encouraged me to dig deep so I could write to my best potential for my admission essay.”</blockquote>
      <blockquote>"Sara is really patient and never makes you feel bad for not understanding something right away. She always finds another way to explain it until it clicks. Working with Sara made me realize my strengths and made me much more confident academically. She was always so encouraging and she taught me so many skills that I'll remember forever."</blockquote>
      <blockquote>"Sara makes learning feel a lot less intimidating. She's encouraging and explains things in a way that makes hard topics feel manageable."</blockquote>
      <blockquote>"Sara helped me learn how to break down problems step by step instead of just guessing. I've started doing a lot better on my homework and tests because I actually understand what I'm doing."</blockquote>
    `
  }
};

const tutorStage = document.querySelector("#tutorStage");
const tutorDots = document.querySelector("#tutorDots");
let tutorIndex = 0;
let touchStartX = 0;
let touchStartY = 0;
let tutorSwipeLocked = false;

function renderTutor() {
  const tutor = tutors[tutorIndex];
  const previousIndex = (tutorIndex - 1 + tutors.length) % tutors.length;
  const nextIndex = (tutorIndex + 1) % tutors.length;
  const visibleTutors = [
    { tutor: tutors[previousIndex], className: "is-preview is-left", targetIndex: previousIndex },
    { tutor, className: "is-active", targetIndex: tutorIndex },
    { tutor: tutors[nextIndex], className: "is-preview is-right", targetIndex: nextIndex }
  ];
  tutorStage.innerHTML = `
    ${visibleTutors.map(({ tutor: visibleTutor, className, targetIndex }) => `
      <article class="tutor-card ${className}" tabindex="0" data-tutor-index="${targetIndex}" aria-label="${targetIndex === tutorIndex ? `Read bio for ${visibleTutor.name}` : `Show ${visibleTutor.name}`}">
        <div class="tutor-photo"><img src="${visibleTutor.image}" alt="${visibleTutor.name}, ${visibleTutor.type} at Purpose Tutoring" loading="eager"></div>
        <div class="tutor-copy">
          <h3>${visibleTutor.name}</h3>
          <p>${visibleTutor.type}</p>
          <button class="read-bio" type="button">${targetIndex === tutorIndex ? "Read Bio" : "View"}</button>
        </div>
      </article>
    `).join("")}
  `;

  const tutorCard = tutorStage.querySelector(".tutor-card.is-active");
  const openTutorBio = () => {
    openContentModal(`${tutor.name} | ${tutor.type}`, tutor.bio.map((paragraph) => `<p>${paragraph}</p>`).join(""));
  };

  tutorStage.querySelectorAll(".tutor-card.is-preview").forEach((card) => {
    const targetIndex = Number(card.dataset.tutorIndex);
    const showPreviewTutor = () => {
      tutorIndex = targetIndex;
      renderTutor();
    };
    card.addEventListener("click", showPreviewTutor);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        showPreviewTutor();
      }
    });
  });

  tutorCard.querySelector(".read-bio").addEventListener("click", (event) => {
    event.stopPropagation();
    openTutorBio();
  });
  tutorCard.addEventListener("click", openTutorBio);
  tutorCard.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openTutorBio();
    }
  });

  tutorDots.querySelectorAll("button").forEach((dot, index) => {
    dot.classList.toggle("active", index === tutorIndex);
    dot.setAttribute("aria-current", index === tutorIndex ? "true" : "false");
  });
}

function moveTutor(direction) {
  tutorIndex = (tutorIndex + direction + tutors.length) % tutors.length;
  renderTutor();
}

tutors.forEach((tutor, index) => {
  const dot = document.createElement("button");
  dot.type = "button";
  dot.setAttribute("aria-label", `Show ${tutor.name}`);
  dot.addEventListener("click", () => {
    tutorIndex = index;
    renderTutor();
  });
  tutorDots.appendChild(dot);
});

tutorStage.addEventListener("touchstart", (event) => {
  touchStartX = event.touches[0].screenX;
  touchStartY = event.touches[0].screenY;
  tutorSwipeLocked = false;
}, { passive: true });

tutorStage.addEventListener("touchmove", (event) => {
  const deltaX = event.touches[0].screenX - touchStartX;
  const deltaY = event.touches[0].screenY - touchStartY;

  if (!tutorSwipeLocked && Math.abs(deltaX) > 12 && Math.abs(deltaX) > Math.abs(deltaY) * 1.15) {
    tutorSwipeLocked = true;
  }

  if (tutorSwipeLocked) event.preventDefault();
}, { passive: false });

tutorStage.addEventListener("touchend", (event) => {
  const delta = event.changedTouches[0].screenX - touchStartX;
  const verticalDelta = event.changedTouches[0].screenY - touchStartY;
  if (Math.abs(delta) > 42 && Math.abs(delta) > Math.abs(verticalDelta) * 1.05) {
    moveTutor(delta > 0 ? -1 : 1);
  }
  tutorSwipeLocked = false;
}, { passive: true });
renderTutor();

const contentModal = document.querySelector("#contentModal");
const modalTitle = document.querySelector("#modalTitle");
const modalBody = document.querySelector("#modalBody");
const bookingModal = document.querySelector("#bookingModal");
const articlesModal = document.querySelector("#articlesModal");
const aboutModal = document.querySelector("#aboutModal");

function setModalState(modal, isOpen) {
  modal.classList.toggle("open", isOpen);
  modal.setAttribute("aria-hidden", isOpen ? "false" : "true");
  document.body.style.overflow = isOpen ? "hidden" : "";
}

function openContentModal(title, bodyHtml) {
  modalTitle.textContent = title;
  modalBody.innerHTML = bodyHtml;
  setModalState(contentModal, true);
}

document.querySelectorAll("[data-modal]").forEach((button) => {
  button.addEventListener("click", () => {
    const copy = modalCopy[button.dataset.modal];
    const html = copy.html || copy.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join("");
    openContentModal(copy.title, html);
  });
});

document.querySelectorAll("[data-close-modal]").forEach((item) => {
  item.addEventListener("click", () => setModalState(contentModal, false));
});

document.querySelectorAll("[data-open-booking]").forEach((button) => {
  button.addEventListener("click", () => setModalState(bookingModal, true));
});

document.querySelectorAll("[data-close-booking]").forEach((item) => {
  item.addEventListener("click", () => setModalState(bookingModal, false));
});

document.querySelectorAll("[data-open-articles]").forEach((button) => {
  button.addEventListener("click", () => setModalState(articlesModal, true));
});

document.querySelectorAll("[data-close-articles]").forEach((item) => {
  item.addEventListener("click", () => setModalState(articlesModal, false));
});

document.querySelectorAll("[data-open-about]").forEach((button) => {
  button.addEventListener("click", () => setModalState(aboutModal, true));
});

document.querySelectorAll("[data-close-about]").forEach((item) => {
  item.addEventListener("click", () => setModalState(aboutModal, false));
});

document.querySelectorAll("[data-open-testimonials]").forEach((button) => {
  button.addEventListener("click", () => window.PurposeTestimonials.open());
});

const siteShell = document.querySelector(".site-shell");
const sectionDown = document.querySelector(".section-down");
const heroPanel = document.querySelector(".hero-panel");
const heroStartCue = document.querySelector(".hero-start-cue");
const welcomePanel = document.querySelector(".welcome-panel");
const infoPanel = document.querySelector(".info-panel");
const floatingBook = document.querySelector(".floating-book");
const scrollTargets = [...document.querySelectorAll(".panel, .site-footer")];
let hasShownFloatingBook = false;
let hasActivatedBookAttention = false;
let heroCueTimer = null;

function startBookAttentionLoop() {
  floatingBook.classList.add("attention-loop");
}

function updateSectionDown() {
  const atBottom = siteShell.scrollTop + siteShell.clientHeight >= siteShell.scrollHeight - 8;
  sectionDown.classList.toggle("is-hidden", atBottom);
  if (siteShell.scrollTop >= welcomePanel.offsetTop - 24) {
    hasShownFloatingBook = true;
  }

  if (siteShell.scrollTop >= infoPanel.offsetTop - 24 && !hasActivatedBookAttention) {
    hasActivatedBookAttention = true;
    startBookAttentionLoop();
  }

  siteShell.classList.toggle("floating-book-visible", hasShownFloatingBook);
  siteShell.classList.toggle("floating-testimonials-visible", hasShownFloatingBook);
}

function scrollToNextSection() {
  siteShell.scrollTo({ top: welcomePanel.offsetTop, behavior: "smooth" });
}

function scheduleHeroCue() {
  if (heroCueTimer) window.clearTimeout(heroCueTimer);
  heroStartCue.classList.remove("visible");
  heroCueTimer = window.setTimeout(() => {
    if (siteShell.scrollTop < welcomePanel.offsetTop - 24) {
      heroStartCue.classList.add("visible");
    }
  }, 5300);
}

["pointerdown", "keydown", "wheel", "touchstart"].forEach((eventName) => {
  window.addEventListener(eventName, scheduleHeroCue, { passive: true });
});

heroPanel.addEventListener("click", (event) => {
  if (event.target.closest("button, a")) return;
  scrollToNextSection();
});

heroStartCue.addEventListener("click", (event) => {
  event.stopPropagation();
  scrollToNextSection();
});

sectionDown.addEventListener("click", () => {
  const currentTop = siteShell.scrollTop;
  const nextTarget = scrollTargets.find((target) => target.offsetTop > currentTop + 12);
  if (nextTarget) {
    siteShell.scrollTo({ top: nextTarget.offsetTop, behavior: "smooth" });
  }
});

siteShell.addEventListener("scroll", updateSectionDown, { passive: true });
window.addEventListener("resize", updateSectionDown);
updateSectionDown();
scheduleHeroCue();

const SECURE_FORM_ENDPOINT = "/";
const THANK_YOU_PAGE = "thank-you/index.html";

function initializeRequestForm(requestForm) {
  const dayInputs = [...requestForm.querySelectorAll('input[name="Days[]"]')];
  const tutorPreferenceInputs = [...requestForm.querySelectorAll('input[name="Tutor preference"]')];
  const tutorInMindField = requestForm.querySelector(".tutor-in-mind-field");
  const tutorInMindInput = tutorInMindField.querySelector("input");

  function updateTutorInMindField() {
    const hasTutorInMind = tutorPreferenceInputs.some((input) => input.checked && input.value === "I already have a tutor in mind.");
    tutorInMindField.hidden = !hasTutorInMind;
    tutorInMindInput.required = hasTutorInMind;
    if (!hasTutorInMind) tutorInMindInput.value = "";
  }

  function validateDays() {
    const hasDay = dayInputs.some((input) => input.checked);
    dayInputs[0].setCustomValidity(hasDay ? "" : "Please select at least one day.");
  }

  dayInputs.forEach((input) => input.addEventListener("change", validateDays));
  tutorPreferenceInputs.forEach((input) => input.addEventListener("change", updateTutorInMindField));
  requestForm.addEventListener("submit", async (event) => {
    validateDays();
    if (!requestForm.checkValidity()) {
      event.preventDefault();
      requestForm.reportValidity();
      return;
    }

    event.preventDefault();
    const submitButton = requestForm.querySelector(".submit-button");
    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    try {
      const formData = new FormData(requestForm);
      await fetch(SECURE_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });
      window.location.href = THANK_YOU_PAGE;
    } catch (error) {
      submitButton.disabled = false;
      submitButton.textContent = "Submit Request";
      alert("There was a problem submitting the form. Please try again.");
    }
  });

  updateTutorInMindField();
}

document.querySelectorAll("[data-contact-form]").forEach(initializeRequestForm);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setModalState(contentModal, false);
    setModalState(bookingModal, false);
    setModalState(articlesModal, false);
    setModalState(aboutModal, false);
    window.PurposeTestimonials.close();
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.25 });

document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));

const canvas = document.querySelector("#fireworks");
const ctx = canvas.getContext("2d");
let particles = [];
let fireworksDone = false;

function resizeCanvas() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(canvas.clientWidth * ratio);
  canvas.height = Math.floor(canvas.clientHeight * ratio);
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function burst(x, y, color) {
  for (let i = 0; i < 46; i += 1) {
    const angle = (Math.PI * 2 * i) / 46;
    const speed = 1.8 + Math.random() * 4.3;
    particles.push({
      x,
      y,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed,
      life: 72 + Math.random() * 28,
      age: 0,
      color
    });
  }
}

function animateFireworks() {
  ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
  particles.forEach((p) => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.018;
    p.age += 1;
    const alpha = Math.max(0, 1 - p.age / p.life);
    ctx.globalAlpha = alpha;
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, 2.1, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.globalAlpha = 1;
  particles = particles.filter((p) => p.age < p.life);
  if (particles.length || !fireworksDone) requestAnimationFrame(animateFireworks);
}

function startFireworks() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  resizeCanvas();
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  setTimeout(() => burst(width * 0.28, height * 0.28, "#f5b947"), 420);
  setTimeout(() => burst(width * 0.72, height * 0.25, "#ffffff"), 640);
  setTimeout(() => burst(width * 0.51, height * 0.18, "#62d3e7"), 860);
  setTimeout(() => {
    fireworksDone = true;
  }, 2400);
  animateFireworks();
}

window.addEventListener("resize", resizeCanvas);
startFireworks();
