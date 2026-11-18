/* ============================================================
   AYGÜN — charity site
   Vanilla JS: i18n, lightbox (with history API), copy-to-clipboard,
   scroll reveals, floating-button scroll behaviour.
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. TRANSLATIONS
     ---------------------------------------------------------- */
  const translations = {
  "az": {
    "pageTitle": "Məsuməyə dəstək",
    "heroHeadline": "Məsumənin dəstəyinizə ehtiyacı var",
    "heroText": "Məsumə və Fatimə 3 yaşlı əkiz bacılardır. Fatimə sağlam inkişaf edir, Məsumə isə həkim səhlənkarlığı nəticəsində doğuşdan serebral iflicdir. Onun müalicəsi yalnız davamlı reabilitasiya seansları ilə mümkündür — sizin dəstəyiniz onun ayağa qalxması üçün ümiddir.",
    "heroCta": "Dəstək ol",
    "heroCta2": "WhatsApp ilə əlaqə",
    "heroCta3": "Sənədlərə bax",
    "heroCta4": "Şəkillərə bax",
    "heroCta5": "Tibbi məlumat",
    "navStory": "Hekayə",
    "navGallery": "Şəkillər",
    "navDocs": "Sənədlər",
    "storyEyebrow": "Hekayə",
    "storyTitle": "Məsumənin hekayəsi",
    "storyP1": "Məsumə və Fatimə <strong>əkiz bacılardır</strong>. Həkim səhlənkarlığı və doğuş zamanı oksigen çatışmazlığı Fatiməni sağlam, Məsuməni isə <strong>doğuşdan serebral iflic</strong> etdi.",
    "storyP2": "Müalicəsi yalnız <strong>davamlı reabilitasiya</strong> ilə mümkündür. 2024-dən Bakıdakı <strong>Serebral İflic Akademiyasında</strong> müalicə alır. Seanslar dayansa, vəziyyəti ağırlaşacaq.",
    "storyP3": "Ailə <strong>kirayədə yaşayır</strong>, güclə dolanır. Buna baxmayaraq qızlarının müalicəsi üçün gecə-gündüz çalışırlar.",
    "storyP4": "Bir arzuları var: Məsumə də Fatimə kimi ayağa qalxsın, addım atsın. <strong>3₼, 5₼ — az deməyin.</strong> Hər qəpik bir ümiddir.",
    "medicalEyebrow": "Tibbi məlumat",
    "medicalTitle": "Tibbi vəziyyət və əlaqə",
    "diagnosisTitle": "Diaqnoz",
    "diagnosisText": "Uşaq serebral iflici — G80.0, spastik tetraparez (TSEK göndərişi ilə təsdiqlənib). Həkim səhlənkarlığı və doğuş zamanı oksigen çatışmazlığı nəticəsində. Əkiz bacısı Fatimə sağlamdır.",
    "supportTitle": "Müalicə",
    "supportText": "2024-cü ilin sentyabrından Bakıdakı Serebral İflic Akademiyasında (CP Academy) davamlı reabilitasiya alır. Seanslar dayansa, əzələləri yığılacaq, vəziyyəti ağırlaşacaq.",
    "contactTitle": "Ailə / Əlaqə",
    "patientLabel": "Xəstə",
    "patientName": "Cəfərli Məsumə Adəm qızı",
    "birthLabel": "Doğum tarixi",
    "motherLabel": "Ana",
    "motherName": "Cəfərova Nargilə",
    "addressLabel": "Ünvan",
    "addressText": "Bakı, Sabunçu rayonu, Bakıxanov qəsəbəsi",
    "phoneLabel": "Telefon",
    "galleryEyebrow": "Şəkillər",
    "galleryTitle": "Məsumənin dünyası",
    "docsEyebrow": "Şəffaflıq",
    "documentsTitle": "Hər söz sənədlə təsdiqlənir",
    "documentsCaption": "İnanmaq üçün sözümüzə yox, sənədlərə baxın.",
    "donationEyebrow": "İndi kömək et",
    "donationTitle": "Bank kartları",
    "donationSubtitle": "Hər kart Cəfərova Nargilə (Məsumənin anası) adınadır. Nömrəni kopyalayıb köçürmə edə bilərsiniz.",
    "step1Title": "Kartı seçin",
    "step2Title": "Nömrəni kopyalayın",
    "step3Title": "Köçürmə edin",
    "relSelf": "(Anası)",
    "copyBtn": "Kopyala",
    "copiedBtn": "Kopyalandı",
    "cardsBtn": "Kartlara bax",
    "footerNote": "Bu sayt Məsuməyə dəstək üçün ailəsi tərəfindən yaradılıb.",
    "scrollDown": "",
    "daysLeft": "{n} gün qalıb",
    "daysLeftOne": "Son gün"
  },
  "tr": {
    "pageTitle": "Məsumə'ye destek",
    "heroHeadline": "Məsumə desteğinize ihtiyaç duyuyor",
    "heroText": "Məsumə ve Fatimə 3 yaşında ikiz kardeşler. Fatimə sağlıklı gelişiyor, Məsumə ise doktor ihmali sonucu doğuştan serebral palsi (beyin felci) hastası. Tedavisi ancak sürekli rehabilitasyon seansları ile mümkün — desteğiniz onun ayağa kalkması için bir umut.",
    "heroCta": "Destek ol",
    "heroCta2": "WhatsApp ile iletişim",
    "heroCta3": "Belgelere bak",
    "heroCta4": "Fotoğraflara bak",
    "heroCta5": "Tıbbi bilgi",
    "navStory": "Hikâye",
    "navGallery": "Fotoğraflar",
    "navDocs": "Belgeler",
    "storyEyebrow": "Hikâye",
    "storyTitle": "Məsumə'nin hikâyesi",
    "storyP1": "Məsumə ve Fatimə <strong>ikiz kardeşler</strong>. Doktor ihmali ve doğumda oksijen yetersizliği Fatimə'yi sağlıklı, Məsumə'yi ise <strong>doğuştan serebral palsi</strong> hastası yaptı.",
    "storyP2": "Tedavisi ancak <strong>sürekli rehabilitasyon</strong> ile mümkün. 2024'ten beri Bakü'deki <strong>Serebral Palsi Akademisi'nde</strong> tedavi görüyor. Seanslar durursa durumu ağırlaşır.",
    "storyP3": "Aile <strong>kirada yaşıyor</strong>, zar zor geçiniyor. Buna rağmen kızlarının tedavisi için gece gündüz çalışıyorlar.",
    "storyP4": "Tek dilekleri var: Məsumə de Fatimə gibi ayağa kalksın, adım atsın. <strong>3₼, 5₼ — az demeyin.</strong> Her kuruş bir umuttur.",
    "medicalEyebrow": "Tıbbi bilgi",
    "medicalTitle": "Tıbbi durum ve iletişim",
    "diagnosisTitle": "Teşhis",
    "diagnosisText": "Çocuk serebral palsisi — G80.0, spastik tetraparezi (TSEK sevkiyle onaylanmış). Doktor ihmali ve doğum sırasındaki oksijen yetersizliği sonucu. İkiz kardeşi Fatimə sağlıklı.",
    "supportTitle": "Tedavi",
    "supportText": "2024 Eylül'ünden beri Bakü'deki Serebral Palsi Akademisi'nde (CP Academy) sürekli rehabilitasyon görüyor. Seanslar durursa kasları kasılacak, durumu ağırlaşacak.",
    "contactTitle": "Aile / İletişim",
    "patientLabel": "Hasta",
    "patientName": "Cəfərli Məsumə Adəm kızı",
    "birthLabel": "Doğum tarihi",
    "motherLabel": "Anne",
    "motherName": "Cəfərova Nargilə",
    "addressLabel": "Adres",
    "addressText": "Bakü, Sabunçu ilçesi, Bakıxanov kasabası",
    "phoneLabel": "Telefon",
    "galleryEyebrow": "Fotoğraflar",
    "galleryTitle": "Məsumə'nin dünyası",
    "docsEyebrow": "Şeffaflık",
    "documentsTitle": "Her söz belgeyle doğrulanır",
    "documentsCaption": "İnanmak için sözümüze değil, belgelere bakın.",
    "donationEyebrow": "Şimdi yardım et",
    "donationTitle": "Banka kartları",
    "donationSubtitle": "Her kart Cəfərova Nargilə (Məsumə'nin annesi) adınadır. Numarayı kopyalayıp havale yapabilirsiniz.",
    "step1Title": "Kartı seçin",
    "step2Title": "Numarayı kopyalayın",
    "step3Title": "Havale yapın",
    "relSelf": "(Annesi)",
    "copyBtn": "Kopyala",
    "copiedBtn": "Kopyalandı",
    "cardsBtn": "Kartlara bak",
    "footerNote": "Bu site Məsumə'ye destek için ailesi tarafından oluşturuldu.",
    "scrollDown": "",
    "daysLeft": "{n} gün kaldı",
    "daysLeftOne": "Son gün"
  },
  "ru": {
    "pageTitle": "Помощь Масуме",
    "heroHeadline": "Масуме нужна ваша поддержка",
    "heroText": "Масума и Фатима — трёхлетние сёстры-близнецы. Фатима развивается здоровой, а Масума из-за врачебной халатности с рождения страдает ДЦП. Её лечение возможно только при постоянных сеансах реабилитации — ваша поддержка это надежда на то, что она встанет на ноги.",
    "heroCta": "Поддержать",
    "heroCta2": "Связь через WhatsApp",
    "heroCta3": "Смотреть документы",
    "heroCta4": "Смотреть фото",
    "heroCta5": "Мед. информация",
    "navStory": "История",
    "navGallery": "Фото",
    "navDocs": "Документы",
    "storyEyebrow": "История",
    "storyTitle": "История Масумы",
    "storyP1": "Масума и Фатима — <strong>сёстры-близнецы</strong>. Врачебная халатность и нехватка кислорода при родах сделали Фатиму здоровой, а Масуму — <strong>с рождения больной ДЦП</strong>.",
    "storyP2": "Её лечение возможно только при <strong>постоянной реабилитации</strong>. С сентября 2024 года лечится в <strong>Академии церебрального паралича</strong> в Баку. Если сеансы прекратятся, состояние ухудшится.",
    "storyP3": "Семья <strong>живёт в съёмном жилье</strong>, едва сводит концы с концами. Несмотря на это, день и ночь трудятся ради лечения дочери.",
    "storyP4": "У них одна мечта: чтобы Масума, как Фатима, встала на ноги и сделала шаг. <strong>3₼, 5₼ — не говорите, что мало.</strong> Каждая копейка — это надежда.",
    "medicalEyebrow": "Мед. информация",
    "medicalTitle": "Состояние здоровья и контакты",
    "diagnosisTitle": "Диагноз",
    "diagnosisText": "Детский церебральный паралич — G80.0, спастический тетрапарез (подтверждён направлением ВТЭК). Вследствие врачебной халатности и нехватки кислорода при родах. Сестра-близнец Фатима здорова.",
    "supportTitle": "Лечение",
    "supportText": "С сентября 2024 года проходит постоянную реабилитацию в Академии церебрального паралича (CP Academy) в Баку. Если сеансы прекратятся, мышцы сведёт, состояние ухудшится.",
    "contactTitle": "Семья / Контакты",
    "patientLabel": "Пациент",
    "patientName": "Джафарли Масума Адам кызы",
    "birthLabel": "Дата рождения",
    "motherLabel": "Мать",
    "motherName": "Джафарова Наргиля",
    "addressLabel": "Адрес",
    "addressText": "Баку, Сабунчинский район, пос. Бакиханов",
    "phoneLabel": "Телефон",
    "galleryEyebrow": "Фотографии",
    "galleryTitle": "Мир Масумы",
    "docsEyebrow": "Прозрачность",
    "documentsTitle": "Каждое слово подтверждено документом",
    "documentsCaption": "Чтобы поверить, смотрите не на слова, а на документы.",
    "donationEyebrow": "Помочь сейчас",
    "donationTitle": "Банковские карты",
    "donationSubtitle": "Все карты оформлены на имя Джафаровой Наргили (мать Масумы). Вы можете скопировать номер и сделать перевод.",
    "step1Title": "Выберите карту",
    "step2Title": "Скопируйте номер",
    "step3Title": "Сделайте перевод",
    "relSelf": "(Мать)",
    "copyBtn": "Копировать",
    "copiedBtn": "Скопировано",
    "cardsBtn": "К картам",
    "footerNote": "Этот сайт создан семьёй для помощи Масуме.",
    "scrollDown": "",
    "daysLeft": "Осталось дней: {n}",
    "daysLeftOne": "Последний день"
  },
  "en": {
    "pageTitle": "Support Məsumə",
    "heroHeadline": "Məsumə needs your support",
    "heroText": "Məsumə and Fatimə are 3-year-old twin sisters. Fatimə is developing healthily, while Məsumə has cerebral palsy from birth due to medical negligence. Her treatment is only possible through continuous rehabilitation sessions — your support is hope for her to stand on her own feet.",
    "heroCta": "Donate",
    "heroCta2": "Contact on WhatsApp",
    "heroCta3": "View documents",
    "heroCta4": "View photos",
    "heroCta5": "Medical info",
    "navStory": "Story",
    "navGallery": "Photos",
    "navDocs": "Documents",
    "storyEyebrow": "Story",
    "storyTitle": "Məsumə's story",
    "storyP1": "Məsumə and Fatimə are <strong>twin sisters</strong>. Medical negligence and lack of oxygen at birth left Fatimə healthy but gave Məsumə <strong>cerebral palsy from birth</strong>.",
    "storyP2": "Her treatment is only possible with <strong>continuous rehabilitation</strong>. Since 2024 she has been treated at the <strong>Cerebral Palsy Academy</strong> in Baku. If sessions stop, her condition will worsen.",
    "storyP3": "The family <strong>lives in a rented home</strong> and barely gets by. Despite this, they work day and night for their daughter's treatment.",
    "storyP4": "They have one wish: that Məsumə, like Fatimə, will stand and take a step. <strong>3₼, 5₼ — don't say it's too little.</strong> Every penny is hope.",
    "medicalEyebrow": "Medical info",
    "medicalTitle": "Medical condition & contact",
    "diagnosisTitle": "Diagnosis",
    "diagnosisText": "Infantile cerebral palsy — G80.0, spastic tetraparesis (confirmed by the medical board referral). Due to medical negligence and lack of oxygen during birth. Her twin sister Fatimə is healthy.",
    "supportTitle": "Treatment",
    "supportText": "Since September 2024 she receives continuous rehabilitation at the Cerebral Palsy Academy (CP Academy) in Baku. If the sessions stop, her muscles will contract and her condition will worsen.",
    "contactTitle": "Family / Contact",
    "patientLabel": "Patient",
    "patientName": "Cəfərli Məsumə Adəm qizi",
    "birthLabel": "Date of birth",
    "motherLabel": "Mother",
    "motherName": "Cəfərova Nargilə",
    "addressLabel": "Address",
    "addressText": "Baku, Sabunchu district, Bakikhanov settlement",
    "phoneLabel": "Phone",
    "galleryEyebrow": "Photos",
    "galleryTitle": "Məsumə's world",
    "docsEyebrow": "Transparency",
    "documentsTitle": "Every word is backed by a document",
    "documentsCaption": "To believe, look not at our words but at the documents.",
    "donationEyebrow": "Help now",
    "donationTitle": "Bank cards",
    "donationSubtitle": "Every card is in the name of Cəfərova Nargilə (Məsumə's mother). You can copy the number and make a transfer.",
    "step1Title": "Choose a card",
    "step2Title": "Copy the number",
    "step3Title": "Make a transfer",
    "relSelf": "(Mother)",
    "copyBtn": "Copy",
    "copiedBtn": "Copied",
    "cardsBtn": "See cards",
    "footerNote": "This site was created by her family to support Məsumə.",
    "scrollDown": "",
    "daysLeft": "{n} days left",
    "daysLeftOne": "Last day"
  }
};

  /* ----------------------------------------------------------
     2. STATE
     ---------------------------------------------------------- */
  const STORAGE_KEY = 'mesume-lang';
  let currentLang = 'az';
  // Tracks whether a history entry was pushed for the lightbox.
  // Prevents history.back() from going further than the lightbox state.
  let lightboxHistoryPushed = false;

  /* ----------------------------------------------------------
     3. LANGUAGE
     ---------------------------------------------------------- */
  function applyLanguage(lang) {
    if (!translations[lang]) lang = 'az';
    currentLang = lang;

    const t = translations[lang];
    document.documentElement.lang = lang;
    document.title = t.pageTitle;

    // text nodes
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // html-allowed nodes (trust note has <strong>)
    document.querySelectorAll('[data-i18n-html]').forEach((el) => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // active language button
    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.classList.toggle('is-active', btn.dataset.lang === lang);
    });

    // Reset any copy button that happens to be mid-"Kopyalandı" so it reflects
    // the new language (we just rewrote its label via [data-i18n] above).

    renderDaysLeft();
  }

  /* ----------------------------------------------------------
     3b. DAYS LEFT badge (header) — reads window.PAID_UNTIL, set by
     the gate script at the top of index.html.
     ---------------------------------------------------------- */
  function renderDaysLeft() {
    const badge = document.getElementById('daysLeft');
    const text = document.getElementById('daysLeftText');
    if (!badge || !text || !window.PAID_UNTIL) return;

    const deadline = new Date(window.PAID_UNTIL + 'T23:59:59+04:00').getTime();
    if (isNaN(deadline)) return;

    // Whole days until the period ends; < 24h left counts as the last day.
    const days = Math.ceil((deadline - Date.now()) / 86400000);
    if (days < 1) { badge.hidden = true; return; }

    // Only the number shows; the wording goes to assistive tech and the tooltip.
    const t = translations[currentLang];
    const label = days === 1 ? t.daysLeftOne : t.daysLeft.replace('{n}', days);
    text.textContent = days;
    badge.setAttribute('aria-label', label);
    badge.setAttribute('title', label);

    badge.classList.toggle('is-urgent', days <= 3);
    badge.hidden = false;
  }

  function initLanguage() {
    let saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* private mode */ }
    applyLanguage(saved || 'az');

    document.querySelectorAll('.lang-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        applyLanguage(lang);
        try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignore */ }
      });
    });
  }

  /* ----------------------------------------------------------
     4. HEADER scroll effect + hero scroll-down indicator
     ---------------------------------------------------------- */
  function initScrollEffects() {
    const header = document.getElementById('siteHeader');
    const hero = document.getElementById('hero');
    const scrollIndicator = document.getElementById('scrollIndicator');

    function onScroll() {
      const y = window.scrollY || window.pageYOffset;
      header.classList.toggle('is-scrolled', y > 24);

      // Fade the indicator out once we've scrolled past ~40% of hero.
      if (hero && scrollIndicator) {
        const threshold = hero.offsetHeight * 0.4;
        scrollIndicator.classList.toggle('is-hidden', y > threshold);
      }
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ----------------------------------------------------------
     5. Reveal-on-scroll using IntersectionObserver
     ---------------------------------------------------------- */
  function initReveals() {
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ----------------------------------------------------------
     6. LIGHTBOX (with History API for back-button behaviour)
     ---------------------------------------------------------- */
  function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('lightboxClose');
    if (!lightbox || !lightboxImg) return;

    function openLightbox(src, alt) {
      lightboxImg.src = src;
      lightboxImg.alt = alt || '';
      lightbox.classList.add('is-open');
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('is-lightbox-open');

      // Push a history state ONLY on the first open in a series.
      // If the user clicks one thumb after another without closing,
      // we don't push extra states.
      if (!lightboxHistoryPushed) {
        history.pushState({ lightbox: true }, '');
        lightboxHistoryPushed = true;
      }
    }

    function closeLightbox(opts) {
      const fromPopstate = opts && opts.fromPopstate;
      if (!lightbox.classList.contains('is-open')) return;

      lightbox.classList.remove('is-open');
      lightbox.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('is-lightbox-open');
      // small delay to clear src after fade so it doesn't flash blank
      setTimeout(() => { lightboxImg.src = ''; }, 250);

      // If we closed manually (X button, backdrop, Escape), pop the state we pushed.
      // If close was triggered BY popstate, the browser already moved history back.
      if (lightboxHistoryPushed && !fromPopstate) {
        history.back();
      }
      lightboxHistoryPushed = false;
    }

    // Wire up every thumb (gallery photos AND documents) with prev/next nav.
    const thumbs = Array.from(document.querySelectorAll('[data-src]'));
    let current = 0;

    function showIndex(i) {
      current = (i + thumbs.length) % thumbs.length;
      const el = thumbs[current];
      const img = el.querySelector('img');
      openLightbox(el.getAttribute('data-src'), img ? img.alt : '');
    }

    thumbs.forEach((el, i) => {
      el.addEventListener('click', () => showIndex(i));
    });

    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); showIndex(current - 1); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); showIndex(current + 1); });

    document.addEventListener('keydown', (e) => {
      if (!lightbox.classList.contains('is-open')) return;
      if (e.key === 'ArrowLeft') showIndex(current - 1);
      if (e.key === 'ArrowRight') showIndex(current + 1);
    });

    closeBtn.addEventListener('click', () => closeLightbox());

    // click outside the image to close
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    // ESC to close
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('is-open')) {
        closeLightbox();
      }
    });

    // Hardware/browser BACK button -> just close lightbox, don't leave site
    window.addEventListener('popstate', () => {
      if (lightbox.classList.contains('is-open')) {
        closeLightbox({ fromPopstate: true });
      }
    });
  }

  /* ----------------------------------------------------------
     7. COPY-TO-CLIPBOARD on bank cards
     ---------------------------------------------------------- */
  function initCopyButtons() {
    const buttons = document.querySelectorAll('.copy-btn');

    async function copyText(text) {
      try {
        await navigator.clipboard.writeText(text);
        return true;
      } catch (_) {
        // fallback for older browsers / non-secure contexts
        try {
          const ta = document.createElement('textarea');
          ta.value = text;
          ta.setAttribute('readonly', '');
          ta.style.position = 'fixed';
          ta.style.opacity = '0';
          document.body.appendChild(ta);
          ta.select();
          const ok = document.execCommand('copy');
          document.body.removeChild(ta);
          return ok;
        } catch (e) {
          return false;
        }
      }
    }

    buttons.forEach((btn) => {
      btn.addEventListener('click', async () => {
        const number = btn.getAttribute('data-copy');
        const label = btn.querySelector('.copy-label');
        if (!number || !label) return;

        const ok = await copyText(number);
        if (!ok) return;

        // Swap label to "Kopyalandı" for ~2s, keeping i18n in sync.
        label.setAttribute('data-i18n', 'copiedBtn');
        label.textContent = translations[currentLang].copiedBtn;
        btn.classList.add('is-copied');

        clearTimeout(btn._copyTimer);
        btn._copyTimer = setTimeout(() => {
          label.setAttribute('data-i18n', 'copyBtn');
          label.textContent = translations[currentLang].copyBtn;
          btn.classList.remove('is-copied');
        }, 2000);
      });
    });
  }

  /* ----------------------------------------------------------
     8. Floating "Kartlara bax" button -> smooth scroll to donation
     ---------------------------------------------------------- */
  function initCardsButton() {
    const btn = document.getElementById('cardsBtn');
    const donation = document.getElementById('donation');
    if (!btn || !donation) return;

    btn.addEventListener('click', () => {
      // 'center' so the section sits comfortably in the viewport.
      donation.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  /* ----------------------------------------------------------
     INIT
     ---------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initScrollEffects();
    initReveals();
    initLightbox();
    initCopyButtons();
    initCardsButton();
  });
})();
