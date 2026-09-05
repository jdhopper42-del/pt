(() => {
  const script = document.currentScript;
  const assetBase = script?.dataset.assetBase || "assets/";

  const testimonialGroups = [
    {
      name: "JD Hopper",
      image: "JD H.png",
      imageClass: "jd-testimonial-photo",
      testimonials: [
        { by: "Owen", quote: "“I wouldn’t have passed my math class if it wasn’t for JD. He explains things so well in a way that actually makes sense to me.”" },
        { by: "Adrian", quote: "“Classroom settings are so tough for me because teachers can’t give me the one-on-one attention that I need. I feel like almost all the real learning I get comes from JD. When he and I do the ACT together, he does such a good job of approaching things in a hands-on way and it becomes so much easier to remember it because of the way he taught it. He has also built up my confidence so much making me realize how good I am at visualizing things and thinking outside the box!”" },
        { by: "Maya", quote: "“JD helped my son pass his entrance exam for an advanced math class! He is thrilled! We will definitely be using him again next year!”" },
        { by: "Ryan", quote: "“Our fourth grader was in danger of failing math. JD understood the stakes and answered the call! After giving him some information, he used his expertise to create a very detailed and encouraging strategy. His recap texts after each session were so detailed and helpful. She is now on pace to pass her class! He is the best!”" },
        { by: "Kelly", quote: "“Our daughter has historically hated tutoring, but she loves working with JD! She looks forward to her sessions and always learns so much. I can’t believe someone like him exists!”" },
        { by: "Priya", quote: "“JD tutors history to my daughter, and he is so passionate and articulate. He’s an incredible storyteller. JD is a very intelligent young man with the best energy, and I recommend him to anyone”" },
        { by: "Susan", quote: "“I am so grateful for JD. He helps my son with Math 1, and he has a way of connecting with him that completely amazes me. I can’t motivate him to do anything, but somehow JD does so with ease. His grades have improved tremendously, and it’s all thanks to JD!”" },
        { by: "Ethan", quote: "“JD does group sessions for the ACT with me and my friends. He makes it so fun, and I always learn a lot!”" },
        { by: "Dana", quote: "“JD Hopper is an exceptional tutor. My son fell a bit behind in math during the school year and JD spent the summer helping him catch up. Within just a few short months, he raised Henry’s confidence level and bridged the gaps so that we could all breathe easy for the first day of school. JD also helps him with his organizational skills and taught him the Cornell note-taking method. JD is not the first or even the second tutor or tutoring center we’ve engaged for this, but he is the first tutor to actually succeed.”" },
        { by: "Griffin", quote: "“JD has been very helpful with tutoring and paper writing for admission essays. In math, JD truly took his time to explain what is happening in the problem, rather than just giving advice on memorizing formulas. He guided me through logical grammar and encouraged me to dig deep so I could write to my best potential for my admission essay.”" }
      ]
    },
    {
      name: "Sara M.",
      image: "Sara M.png",
      testimonials: [
        { quote: "\"Sara is one of the most thoughtful and effective tutors we've ever worked with. She combines deep academic knowledge with a genuine ability to connect with students, and she pushes them to reach higher while still making them feel supported. Our son's improvement in both grades and confidence has been remarkable.\"" },
        { quote: "\"We've worked with several tutors over the years, and Sara stands out immediately. She has an incredible ability to explain concepts in a way that actually makes sense to students, and she's thoughtful about how each child learns. Our daughter's confidence and performance in math improved significantly after working with her.\"" },
        { quote: "\"Sara is the rare tutor who looks at the whole student, not just the assignment in front of them. She helped our daughter build organization systems, study strategies, and the confidence to advocate for herself at school. The academic improvement has been clear, but the long-term skills she's gained are even more valuable.\"" },
        { quote: "\"Sara has a gift for explaining things in a way that just clicks. Our son had struggled with math for years, and after working with her he not only improved his grades but started participating in class and tackling problems independently. We're incredibly grateful for the impact she's had.\"" },
        { quote: "\"Sara explains math in a way that actually makes sense. Before working with her, I would get stuck and not know where to start, but now I feel like I understand the steps and can solve problems all on my own. I used to feel really stressed before math tests, but now I feel much more confident and prepared. Sara made learning fun!\"" },
        { quote: "\"Sara is really patient and never makes you feel bad for not understanding something right away. She always finds another way to explain it until it clicks. Working with Sara made me realize my strengths and made me much more confident academically. She was always so encouraging and she taught me so many skills that I'll remember forever.\"" },
        { quote: "\"Sara makes learning feel a lot less intimidating. She's encouraging and explains things in a way that makes hard topics feel manageable.\"" },
        { quote: "\"Sara helped me learn how to break down problems step by step instead of just guessing. I've started doing a lot better on my homework and tests because I actually understand what I'm doing.\"" }
      ]
    },
    {
      name: "Mikyla",
      image: "Mikyla W.png",
      testimonials: [
        { quote: "\"Mikyla is one of the best tutors in the world. She helped me so much and made me the person who I am today. She is such a kindhearted, loving and overall outstanding soul. She taught me to never let anyone affect my character because of the way they feel about me. She taught me to keep going even when times are tough. She is one of the strongest most resilient people I know and I’m so thankful that I got to meet such a wonderful and beautiful person!!! I love her!!!\"" }
      ]
    },
    {
      name: "Barrett",
      image: "Barrett B.png",
      testimonials: [
        { quote: "“Barrett tutors Calculus BC for my daughter. Every lesson is so helpful—he is a wonderful and intelligent tutor. My daughter always learns so much with him”" }
      ]
    }
  ];

  testimonialGroups.forEach((group) => {
    const image = new Image();
    image.decoding = "async";
    image.src = `${assetBase}${encodeURI(group.image)}`;
  });

  function escapeHtml(value) {
    return value.replace(/[&<>"']/g, (char) => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "\"": "&quot;",
      "'": "&#039;"
    }[char]));
  }

  function revealVisibleTestimonials(container) {
    const scrollRoot = container.closest(".modal-card");
    const rootRect = scrollRoot
      ? scrollRoot.getBoundingClientRect()
      : { top: 0, bottom: window.innerHeight || document.documentElement.clientHeight };

    container.querySelectorAll(".testimonial-reveal").forEach((section) => {
      const sectionRect = section.getBoundingClientRect();
      if (sectionRect.top < rootRect.bottom - 40 && sectionRect.bottom > rootRect.top + 40) {
        section.classList.add("visible");
      }
    });
  }

  function renderTestimonials(container) {
    container.innerHTML = `
      <nav class="testimonial-toc" aria-label="Testimonials by tutor">
        ${testimonialGroups.map((group) => `<a href="#testimonials-${group.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}">${escapeHtml(group.name.replace(" Hopper", "").replace(" M.", ""))}</a>`).join("")}
      </nav>
      <div class="testimonial-stack">
        ${testimonialGroups.map((group, groupIndex) => {
          const sectionId = `testimonials-${group.name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`;
          return `
          <section class="testimonial-section testimonial-reveal ${groupIndex === 0 ? "visible" : ""}" id="${sectionId}">
            <div class="testimonial-tutor">
              <img class="${group.imageClass || ""}" src="${assetBase}${encodeURI(group.image)}" alt="${escapeHtml(group.name)} tutor at Purpose Tutoring" loading="eager">
              <h2>${escapeHtml(group.name)} Testimonials</h2>
            </div>
            <div class="testimonial-quotes">
              ${group.testimonials.map((testimonial, index) => `
                <blockquote class="quote-card" style="--quote-index: ${index};">
                  <span>${escapeHtml(testimonial.quote)}</span>
                </blockquote>
              `).join("")}
            </div>
          </section>
        `;
        }).join("")}
      </div>
    `;

    const scrollRoot = container.closest(".modal-card");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    }, { root: scrollRoot || null, threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    container.querySelectorAll(".testimonial-reveal").forEach((section) => observer.observe(section));
    revealVisibleTestimonials(container);
    (scrollRoot || window).addEventListener("scroll", () => revealVisibleTestimonials(container), { passive: true });
    window.addEventListener("resize", () => revealVisibleTestimonials(container));
    container.querySelectorAll(".testimonial-toc a").forEach((link) => {
      link.addEventListener("click", (event) => {
        const target = container.querySelector(link.getAttribute("href"));
        if (!target) return;
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
  }

  function ensureTestimonialsModal() {
    let modal = document.querySelector("#testimonialsModal");
    if (modal) return modal;

    document.body.insertAdjacentHTML("beforeend", `
      <div class="modal testimonials-modal" id="testimonialsModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="testimonialsModalTitle">
        <div class="modal-backdrop" data-close-testimonials></div>
        <div class="modal-card testimonials-card" role="document">
          <button class="modal-close" data-close-testimonials aria-label="Close">
            <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg>
          </button>
          <h2 id="testimonialsModalTitle">Client Testimonials</h2>
          <div class="testimonials-mount"></div>
        </div>
      </div>
    `);

    modal = document.querySelector("#testimonialsModal");
    renderTestimonials(modal.querySelector(".testimonials-mount"));
    modal.querySelectorAll("[data-close-testimonials]").forEach((item) => {
      item.addEventListener("click", () => window.PurposeTestimonials.setModal(false));
    });
    return modal;
  }

  function setModal(isOpen) {
    const modal = ensureTestimonialsModal();
    modal.classList.toggle("open", isOpen);
    modal.setAttribute("aria-hidden", isOpen ? "false" : "true");
    document.body.style.overflow = isOpen ? "hidden" : "";
    if (isOpen) {
      modal.querySelector(".modal-card").scrollTop = 0;
      window.setTimeout(() => revealVisibleTestimonials(modal.querySelector(".testimonials-mount")), 60);
    }
  }

  window.PurposeTestimonials = {
    render: renderTestimonials,
    open: () => setModal(true),
    close: () => setModal(false),
    setModal,
    groups: testimonialGroups
  };
})();
