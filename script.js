const translations = {
  en: {
    name: 'Nagina Yadav',
    party: 'Nepali Congress',
    navIntroduction: 'Introduction',
    navTimeline: 'Time Line',
    navJourney: 'Journey',
    navInterviews: 'Interviews',
    navContact: 'Contact',
    hello: 'Hello, I am',
    candidate: 'Joint General Secretary Candidate for the 15th Nepali Congress General Convention.',
    quota: 'Madeshi Quota',
    role: '',
    nepalMark: 'Nepal',
    section1: '01',
    section2: '02',
    section3: '03',
    section4: '04',
    timelineTitle: 'Time Line in Nepali Congress',
    introduction: 'Introduction',
    profileTitle: 'A public journey<br>with purpose.',
    profileText: 'Central Committee Member of the Nepali Congress, Nagina Yadav brings a sustained record of public and parliamentary service. With an MPhil in Economics from Tribhuvan University, her journey includes party leadership, representation in the House of Representatives, and engagement in parliamentary committees.',
    education: 'Education',
    educationValue: 'Masters of Philosophy in Economics - TU',
    timelineHeading: 'The road<br>to today.',
    date1: '2053',
    date2: '2067',
    date3: '2078',
    date4: '2079',
    date5: '2083',
    timeline1: 'Nevisang',
    timeline2: '12th Maha Adhiveshan - Maha samiti sadhasya',
    timeline3: '14th Maha Adhiveshan - Nirwachit Kendriya Sadasya',
    timeline4: 'Pratinidhisawa Sadshya',
    timeline5: 'Bisesh Maha Adhiveshan - Nirwachit Kendriya Sadasya',
    journey: 'Journey as Member of Parliament',
    parliamentHeading: 'Member of<br>Parliament.',
    committee1: 'Karya bewasta Paramarsh (Sadshya)',
    committee2: 'Kanun Samiti (whip)',
    representation: 'Representation of Nepal in:',
    germany: 'Germany',
    fredrich: 'Fredrick Noman',
    uae: 'United Arab Emirates',
    pakistan: 'Pakistan',
    interviews: 'Interviews',
    interviewsHeading: 'Listen to the<br>conversation.',
    youtube: 'For more visit my Youtube Cannel',
    contact: 'Contact',
    email: 'Email'
  },
  ne: {
    name: 'नागिना यादव',
    party: 'नेपाली कांग्रेस',
    navIntroduction: 'परिचय',
    navTimeline: 'समयरेखा',
    navJourney: 'संसदीय यात्रा',
    navInterviews: 'अन्तर्वार्ता',
    navContact: 'सम्पर्क',
    hello: 'नमस्कार, म',
    candidate: 'नेपाली कांग्रेसको १५औँ महाधिवेशनमा सह-महामन्त्री उम्मेदवार।',
    quota: 'मधेसी कोटा',
    role: '',
    nepalMark: 'नेपाल',
    section1: '०१',
    section2: '०२',
    section3: '०३',
    section4: '०४',
    timelineTitle: 'नेपाली कांग्रेसमा समयरेखा',
    introduction: 'परिचय',
    profileTitle: 'सार्वजनिक जीवनको<br>यात्रा।',
    profileText: 'नेपाली कांग्रेसकी केन्द्रीय समिति सदस्य नागिना यादवको सार्वजनिक तथा संसदीय सेवामा निरन्तर योगदान रहेको छ। त्रिभुवन विश्वविद्यालयबाट अर्थशास्त्रमा एमफिल गरेकी उहाँको यात्रा पार्टी नेतृत्व, प्रतिनिधिसभा सदस्यता र संसदीय समितिहरूमा संलग्नतासँग जोडिएको छ।',
    education: 'शिक्षा',
    educationValue: 'अर्थशास्त्रमा एमफिल - त्रि.वि.',
    timelineHeading: 'आजसम्मको<br>यात्रा।',
    date1: '२०५३',
    date2: '२०६७',
    date3: '२०७८',
    date4: '२०७९',
    date5: '२०८३',
    timeline1: 'नेविसंघ',
    timeline2: '१२औँ महाधिवेशन - महासमिति सदस्य',
    timeline3: '१४औँ महाधिवेशन - निर्वाचित केन्द्रीय सदस्य',
    timeline4: 'प्रतिनिधिसभा सदस्य',
    timeline5: 'विशेष महाधिवेशन - निर्वाचित केन्द्रीय सदस्य',
    journey: 'सांसदको रूपमा यात्रा',
    parliamentHeading: 'संसदीय<br>यात्रा।',
    committee1: 'व्यवस्था परामर्श (सदस्य)',
    committee2: 'कानुन समिति (सचेतक)',
    representation: 'नेपालको प्रतिनिधित्व:',
    germany: 'जर्मनी',
    fredrich: 'फ्रेडरिक नोमन',
    uae: 'संयुक्त अरब इमिरेट्स',
    pakistan: 'पाकिस्तान',
    interviews: 'अन्तर्वार्ता',
    interviewsHeading: 'संवाद<br>सुन्नुहोस्।',
    youtube: 'थपका लागि मेरो युट्युब च्यानल हेर्नुहोस्',
    contact: 'सम्पर्क',
    email: 'इमेल'
  }
};

const nav = document.querySelector('[data-nav]');
const menu = document.querySelector('[data-menu]');
const languageButtons = [...document.querySelectorAll('[data-language]')];

function setLanguage(language) {
  const words = translations[language];
  document.documentElement.lang = language;
  document.body.classList.toggle('ne', language === 'ne');
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const value = words[element.dataset.i18n];
    if (value !== undefined) element.innerHTML = value;
  });
  languageButtons.forEach((button) => {
    const active = button.dataset.language === language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

languageButtons.forEach((button) => {
  button.addEventListener('click', () => setLanguage(button.dataset.language));
});

setLanguage('ne');

menu.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(
  (entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  }),
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const lightbox = document.querySelector('[data-lightbox]');
const lightboxImage = document.querySelector('[data-lightbox-image]');

function openImage(trigger) {
  lightboxImage.src = trigger.dataset.lightboxSrc;
  lightboxImage.alt = trigger.dataset.lightboxAlt;
  lightbox.showModal();
}

document.querySelectorAll('[data-lightbox-src]').forEach((trigger) => {
  trigger.addEventListener('click', () => openImage(trigger));
  trigger.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openImage(trigger);
    }
  });
});

document.querySelector('[data-lightbox-close]').addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) lightbox.close();
});
