const articleScript = document.currentScript;
const thankYouPage = articleScript?.dataset.thankYou || "../../thank-you/index.html";

document.querySelectorAll("[data-share-article]").forEach((button) => {
  button.addEventListener("click", async () => {
    const shareData = {
      title: document.title,
      text: document.querySelector("meta[name='description']")?.content || document.title,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (error) {
        if (error.name === "AbortError") return;
      }
    }

    if (navigator.clipboard) {
      await navigator.clipboard.writeText(window.location.href);
    }
    const status = document.querySelector(".share-status");
    if (status) status.textContent = "Article link copied.";
  });
});

const bookingButtons = [...document.querySelectorAll("[data-open-booking]")];
const testimonialButtons = [...document.querySelectorAll("[data-open-testimonials]")];
const floatingBook = document.querySelector(".floating-book");
let hasActivatedBookAttention = false;

function startBookAttentionLoop() {
  if (!floatingBook) return;
  floatingBook.classList.add("attention-loop");
}

testimonialButtons.forEach((button) => {
  button.addEventListener("click", () => window.PurposeTestimonials.open());
});

if (floatingBook) {
  const activateBookAttention = () => {
    if (hasActivatedBookAttention) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const progress = (scrollTop + viewportHeight) / scrollHeight;
    if (progress >= 0.75) {
      hasActivatedBookAttention = true;
      startBookAttentionLoop();
    }
  };
  window.addEventListener("scroll", activateBookAttention, { passive: true });
  window.addEventListener("resize", activateBookAttention);
  activateBookAttention();
}

if (bookingButtons.length) {
  document.body.insertAdjacentHTML("beforeend", `
    <div class="modal" id="bookingModal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="bookingModalTitle">
      <div class="modal-backdrop" data-close-booking></div>
      <div class="modal-card booking-card" role="document">
        <button class="modal-close" data-close-booking aria-label="Close">
          <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"></path></svg>
        </button>
        <h2 id="bookingModalTitle">Tutoring Request Form</h2>
        <form name="tutoring-request" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="${thankYouPage}" class="request-form secure-contact-form" data-contact-form>
          <input type="hidden" name="form-name" value="tutoring-request">
          <p class="hidden-field">
            <label>Do not fill this out if you are human: <input name="bot-field"></label>
          </p>

          <fieldset>
            <legend>Would you like us to match you with the tutor who best fits your needs, or do you already know which tutor you want to work with? <span>(required)</span></legend>
            <label class="choice"><input type="radio" name="Tutor preference" value="Match me based on my preferences." required> Match me based on my preferences.</label>
            <label class="choice"><input type="radio" name="Tutor preference" value="I already have a tutor in mind."> I already have a tutor in mind.</label>
          </fieldset>

          <label class="field full tutor-in-mind-field" hidden>
            Which tutor do you want to work with?
            <input type="text" name="Tutor in mind">
          </label>

          <label class="field full">
            What are you looking for tutoring or support in? <span>(required)</span>
            <input type="text" name="Tutoring or support needed" required>
          </label>

          <label class="field full">
            Please share anything you would like us to know about your student's needs, goals, or learning preferences.
            <textarea name="Student needs goals or learning preferences" rows="4"></textarea>
          </label>

          <fieldset>
            <legend>Which days of the week work well for tutoring? <span>(required)</span></legend>
            <div class="day-grid">
              <label><input type="checkbox" name="Days[]" value="Monday"> Monday</label>
              <label><input type="checkbox" name="Days[]" value="Tuesday"> Tuesday</label>
              <label><input type="checkbox" name="Days[]" value="Wednesday"> Wednesday</label>
              <label><input type="checkbox" name="Days[]" value="Thursday"> Thursday</label>
              <label><input type="checkbox" name="Days[]" value="Friday"> Friday</label>
              <label><input type="checkbox" name="Days[]" value="Saturday"> Saturday</label>
              <label><input type="checkbox" name="Days[]" value="Sunday"> Sunday</label>
            </div>
          </fieldset>

          <h3>Personal Info</h3>
          <div class="form-grid">
            <label class="field">
              First Name <span>(required)</span>
              <input type="text" name="First Name" required autocomplete="given-name">
            </label>
            <label class="field">
              Last Name <span>(required)</span>
              <input type="text" name="Last Name" required autocomplete="family-name">
            </label>
            <label class="field full">
              Student(s) Name &amp; Grade <span>(required)</span>
              <input type="text" name="Student(s) Name & Grade" required>
            </label>
            <label class="field">
              Email <span>(required)</span>
              <input type="email" name="Email" required autocomplete="email">
            </label>
            <label class="field">
              Phone <span>(required)</span>
              <input type="tel" name="Phone" required autocomplete="tel">
            </label>
          </div>
          <button class="submit-button" type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  `);

  const bookingModal = document.querySelector("#bookingModal");
  const requestForm = document.querySelector("[data-contact-form]");
  const dayInputs = [...document.querySelectorAll('input[name="Days[]"]')];
  const tutorPreferenceInputs = [...document.querySelectorAll('input[name="Tutor preference"]')];
  const tutorInMindField = document.querySelector(".tutor-in-mind-field");
  const tutorInMindInput = tutorInMindField.querySelector("input");

  function setBookingModalState(isOpen) {
    bookingModal.classList.toggle("open", isOpen);
    bookingModal.setAttribute("aria-hidden", isOpen ? "false" : "true");
    document.body.style.overflow = isOpen ? "hidden" : "";
  }

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

  bookingButtons.forEach((button) => {
    button.addEventListener("click", () => setBookingModalState(true));
  });

  document.querySelectorAll("[data-close-booking]").forEach((item) => {
    item.addEventListener("click", () => setBookingModalState(false));
  });

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
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });
      window.location.href = thankYouPage;
    } catch (error) {
      submitButton.disabled = false;
      submitButton.textContent = "Submit Request";
      alert("There was a problem submitting the form. Please try again.");
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setBookingModalState(false);
      window.PurposeTestimonials.close();
    }
  });

  updateTutorInMindField();
}
