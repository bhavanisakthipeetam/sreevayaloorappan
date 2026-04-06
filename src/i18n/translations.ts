import type { Locale } from "./locales";

export type TranslationKey = keyof typeof en;

const en = {
  // Nav
  nav_home:      "Home",
  nav_history:   "History",
  nav_offerings: "Offerings",
  nav_visit:     "Plan Visit",

  // Notice
  notice: "Open once a month · Pooram Nakshatra · 8 AM – 12 PM",

  // Hero
  hero_kicker:   "Vayaloor · Kerala",
  hero_title:    "Sree Vayaloorappan Kshetram",
  hero_subtitle: "Sacred Abode of Sree Kiratha Sastha",
  hero_desc:     "Rooted in the ancient forest eras and steeped in the traditions of the Sangam period, the Kshetram stands as a beacon of divine grace — guarded by eight holy mountains and embracing all devotees as the universal Kula Deivam.",
  hero_cta1:     "Explore History",
  hero_cta2:     "View Offerings",

  // Intro
  intro_label:   "The Sacred Presence",
  intro_heading: "Sree Vayaloorappan: A Kula Deivam For All",
  intro_body1:   "Here, Sree Kiratha Sastha is worshipped not merely as a deity, but as a universal family guardian who embraces all devotees with boundless compassion. Whether you seek spiritual peace, ancestral blessings, or protection from life's obstacles, Sree Vayaloorappan offers a sanctuary for the soul.",
  intro_body2:   "Rooted in the ancient Kaatalam (forest eras) and deeply intertwined with the spiritual traditions of the Sangam period, this Kshetram is where the ancient world of the divine hunter meets the devotion of every seeking heart.",
  intro_quote:   "\"He who guards the forest guards the soul — Sree Vayaloorappan, the eternal Kula Deivam.\"",

  // Deities section
  deities_label:   "Divine Presence",
  deities_heading: "The Sacred Assembly",
  deities_sub:     "Alongside the supreme presence of Sree Kiratha Sastha, the temple complex is blessed by powerful Upadevatas who form the sacred assembly.",
  deity_1_name:    "Sree Kiratha Sastha",
  deity_1_role:    "Presiding Deity",
  deity_1_desc:    "The divine hunter and guardian of the ancient forests — the fierce, protective radiance of Seyyon of Sangam antiquity.",
  deity_2_name:    "Shankarodathamma",
  deity_2_role:    "Bhadrakali",
  deity_2_desc:    "The fierce and protective mother goddess, deeply connected to the historic Shankarodath Kovilakam.",
  deity_3_name:    "Sree Bala Ganapathi",
  deity_3_role:    "Obstacle Remover",
  deity_3_desc:    "The remover of obstacles, blessing devotees with auspicious beginnings and divine grace.",
  deity_4_name:    "Nagamma",
  deity_4_role:    "Naga Devatas",
  deity_4_desc:    "The divine serpent deities offering protection, prosperity, and the wisdom of the earth.",
  deity_5_name:    "Gulikan",
  deity_5_role:    "Guardian Spirit",
  deity_5_desc:    "The guardian spirit ensuring spiritual balance and warding off negative energies.",

  // Mountains
  hills_label:   "Eight Sacred Hills",
  hills_heading: "Guarded by Nature's Divinity",
  hills_body:    "Sree Vayaloorappan Kshetram is a natural spiritual fortress. The temple's immense cosmic energy is anchored and protected by eight majestic mountain peaks across all eight directions.",

  // Offerings
  offerings_label:   "Sacred Rituals",
  offerings_heading: "Offerings & Pariharams",
  offerings_desc:    "Devotees come to seek profound spiritual healing and relief from life's deepest karmic hurdles through specific, time-honored rituals.",
  off_1_name:  "Kula Deiva Shanthi",
  off_1_sub:   "Ancestral Pacification",
  off_1_body:  "For families facing unexplained hardships or those who have lost connection with their ancestral roots. Sree Vayaloorappan acts as a universal bridge, restoring familial harmony and ancestral blessings.",
  off_2_name:  "Sani Dosha Nivarthi",
  off_2_sub:   "Relief from Saturn's Influence",
  off_2_body:  "For individuals undergoing challenging periods of Lord Shani. Rituals here shield against harsh karmic impacts, granting endurance and eventual relief.",
  off_3_name:  "Chatru Dosa Nivarthi",
  off_3_sub:   "Protection from Enmity",
  off_3_body:  "Invokes the supreme commanding energy of the Lord of the Kaatalam to vanquish deceit and neutralize ill intentions directed at the devotee.",
  off_4_name:  "Nava Graha Dosha Shanti",
  off_4_sub:   "Planetary Harmony",
  off_4_body:  "Harmonizes the energies of all nine celestial bodies within the highly energized, mountain-guarded geography of Vayaloor.",

  // History page
  history_label:    "Sacred Origins",
  history_heading:  "The Antiquity of Sree Vayaloorappan",
  history_desc:     "Stretching back to primordial times, the spiritual presence at Vayaloor is intertwined with the ancient traditions of the Sangam period.",
  seyyon_heading:   "Seyyon · Sree Kiratha Sastha",
  seyyon_body:      "In ancient Sangam literature, the presiding deity of the mountainous landscape is Seyyon. At Vayaloor, this fierce, protective, and radiant energy manifests as Sree Kiratha Sastha — the divine hunter and guardian of the forests.",
  kottravai_heading:"Kottravai · Shankarodathamma",
  kottravai_body:   "By His side stands the formidable Kottravai, the ancient Goddess of victory, valor, and the wilderness. Here, She is worshipped as Shankarodathamma, the sovereign mother who fiercely protects her children.",

  // Visit page
  visit_label:      "Pilgrimage",
  visit_heading:    "Plan Your Visit",
  visit_desc:       "A pilgrimage to Sree Vayaloorappan Kshetram is a journey into profound spiritual tranquility.",
  darshan_heading:  "Darshan & Open Days",
  darshan_body:     "To preserve the ancient sanctity and immense spiritual power of the Kshetram, the temple is strictly open only once a month — exclusively on the Pooram Nakshatra of every Malayalam month.",
  darshan_time:     "8:00 AM to 12:00 PM",
  contact_heading:  "Contact & Bookings",
  contact_body:     "It is highly recommended to book offerings well in advance.",
  reach_heading:    "How to Reach",
  reach_air:        "Coimbatore International Airport (~60 km, 1.5 hr)",
  reach_train:      "Coimbatore Junction (~1.5 hrs) · Palakkad Junction (~2 hrs)",
  reach_address:    "Sree Vayaloorappan Kiratha Sastha Temple, Vayaloor, Kerala",
  upcoming_heading: "Upcoming Pooram Dates",

  // CTAs
  cta_book:       "Book an Offering",
  cta_call:       "Call / WhatsApp",
  cta_directions: "Get Directions",
  cta_history:    "Full Sacred Geography →",

  // Footer
  footer_desc:     "The sacred abode of Sree Kiratha Sastha, guarded by eight holy mountains in Vayaloor, Kerala.",
  footer_links:    "Quick Links",
  footer_info:     "Temple Info",
  footer_open:     "Pooram Nakshatra · Monthly",
  footer_timings:  "8:00 AM – 12:00 PM",
  footer_copy:     "Sree Vayaloorappan Kshetram · All Rights Reserved",
};

const ta: Partial<typeof en> = {
  nav_home:      "முகப்பு",
  nav_history:   "வரலாறு",
  nav_offerings: "பூஜைகள்",
  nav_visit:     "வருகை திட்டம்",
  notice:        "மாதத்தில் ஒருமுறை · பூர நட்சத்திரம் · காலை 8 – 12",
  hero_kicker:   "வாயலூர் · கேரளா",
  hero_title:    "ஸ்ரீ வாயலூரப்பன் க்ஷேத்திரம்",
  hero_subtitle: "ஸ்ரீ கிரிராத சாஸ்தாவின் புனித வாசஸ்தலம்",
  hero_desc:     "பண்டைய காட்டாளம் காலத்திலிருந்து சங்க இலக்கியத்துடன் பிணைந்த இக்கோவில், எட்டு புனித மலைகளால் சூழப்பட்டு அனைவருக்கும் குல தெய்வமாக விளங்குகிறது.",
  hero_cta1:     "வரலாறு காண",
  hero_cta2:     "பூஜைகள் காண",
  deities_label:   "தெய்வீக உலகம்",
  deities_heading: "திருக்கோட்டம்",
  hills_heading: "இயற்கையின் தெய்வீக பாதுகாப்பு",
  offerings_heading: "காணிக்கைகள் & பரிகாரங்கள்",
  visit_heading: "வருகையை திட்டமிடுங்கள்",
  footer_copy:   "ஸ்ரீ வாயலூரப்பன் க்ஷேத்திரம் · அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை",
};

const ml: Partial<typeof en> = {
  nav_home:      "ഹോം",
  nav_history:   "ചരിത്രം",
  nav_offerings: "വഴിപാടുകൾ",
  nav_visit:     "സന്ദർശനം",
  notice:        "മാസത്തിലൊരിക്കൽ · പൂരം നക്ഷത്രം · 8 AM – 12 PM",
  hero_kicker:   "വായലൂർ · കേരളം",
  hero_title:    "ശ്രീ വായലൂരപ്പൻ ക്ഷേത്രം",
  hero_subtitle: "ശ്രീ കിരാത ശാസ്താവിന്റെ തിരുനടൻ",
  hero_desc:     "പ്രാചീന കാടാളം കാലഘട്ടത്തിൽ നിന്നും സംഘ കാലത്തിന്റെ പാരമ്പര്യങ്ങളുമായി ബന്ധപ്പെട്ട, എട്ടു പർവ്വതങ്ങളാൽ സംരക്ഷിക്കപ്പെടുന്ന ഈ ക്ഷേത്രം സകലർക്കും കുലദൈവമായി വിളങ്ങുന്നു.",
  hero_cta1:     "ചരിത്രം കാണുക",
  hero_cta2:     "വഴിപാടുകൾ",
  offerings_heading: "വഴിപാടുകളും പരിഹാരങ്ങളും",
  visit_heading: "സന്ദർശനം ആസൂത്രണം ചെയ്യുക",
  footer_copy:   "ശ്രീ വായലൂരപ്പൻ ക്ഷേത്രം · എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം",
};

const hi: Partial<typeof en> = {
  nav_home:      "होम",
  nav_history:   "इतिहास",
  nav_offerings: "पूजा-अर्चना",
  nav_visit:     "यात्रा योजना",
  notice:        "माह में एक बार · पूरम नक्षत्र · 8 बजे – 12 बजे",
  hero_kicker:   "वायलूर · केरल",
  hero_title:    "श्री वायलूरप्पन क्षेत्रम्",
  hero_subtitle: "श्री किराथ शास्ता का पवित्र धाम",
  hero_desc:     "प्राचीन संगम युग की परंपराओं में निहित, आठ पवित्र पर्वतों से घिरा यह मंदिर सभी के लिए कुल देवता के रूप में विराजमान है।",
  hero_cta1:     "इतिहास देखें",
  hero_cta2:     "पूजा देखें",
  offerings_heading: "अर्पण और परिहार",
  visit_heading: "यात्रा की योजना बनाएं",
  footer_copy:   "श्री वायलूरप्पन क्षेत्रम् · सर्वाधिकार सुरक्षित",
};

const te: Partial<typeof en> = {
  nav_home:      "హోమ్",
  nav_history:   "చరిత్ర",
  nav_offerings: "పూజలు",
  nav_visit:     "సందర్శన ప్రణాళిక",
  notice:        "నెలలో ఒకసారి · పూరం నక్షత్రం · ఉ. 8 – 12",
  hero_kicker:   "వాయలూర్ · కేరళ",
  hero_title:    "శ్రీ వాయలూరప్పన్ క్షేత్రం",
  hero_subtitle: "శ్రీ కిరాత శాస్తా యొక్క పవిత్ర నివాసం",
  hero_desc:     "పురాతన సంగం సంప్రదాయాలలో వేళ్ళూనుకున్న, ఎనిమిది పవిత్ర పర్వతాలచే సంరక్షించబడే ఈ ఆలయం అందరికీ కుల దైవంగా అనుగ్రహిస్తుంది.",
  hero_cta1:     "చరిత్ర చూడు",
  hero_cta2:     "పూజలు చూడు",
  offerings_heading: "అర్పణలు & పరిహారాలు",
  visit_heading: "సందర్శన ప్రణాళిక",
  footer_copy:   "శ్రీ వాయలూరప్పన్ క్షేత్రం · అన్ని హక్కులు నిల్వ",
};

const kn: Partial<typeof en> = {
  nav_home:      "ಮನೆ",
  nav_history:   "ಇತಿಹಾಸ",
  nav_offerings: "ಪೂಜೆಗಳು",
  nav_visit:     "ಭೇಟಿ ಯೋಜನೆ",
  notice:        "ತಿಂಗಳಿಗೊಮ್ಮೆ · ಪೂರಂ ನಕ್ಷತ್ರ · ಬೆ. 8 – 12",
  hero_kicker:   "ವಾಯಲೂರ್ · ಕೇರಳ",
  hero_title:    "ಶ್ರೀ ವಾಯಲೂರಪ್ಪನ್ ಕ್ಷೇತ್ರ",
  hero_subtitle: "ಶ್ರೀ ಕಿರಾತ ಶಾಸ್ತಾ ದೇವರ ಪವಿತ್ರ ನೆಲೆ",
  hero_desc:     "ಪ್ರಾಚೀನ ಸಂಗಮ ಸಂಪ್ರದಾಯಗಳಲ್ಲಿ ಬೇರೂರಿದ, ಎಂಟು ಪವಿತ್ರ ಪರ್ವತಗಳಿಂದ ರಕ್ಷಿಸಲ್ಪಡುವ ಈ ದೇವಸ್ಥಾನ ಎಲ್ಲರಿಗೂ ಕುಲ ದೇವರಾಗಿದೆ.",
  hero_cta1:     "ಇತಿಹಾಸ ನೋಡಿ",
  hero_cta2:     "ಪೂಜೆಗಳು ನೋಡಿ",
  offerings_heading: "ಅರ್ಪಣೆಗಳು ಮತ್ತು ಪರಿಹಾರಗಳು",
  visit_heading: "ಭೇಟಿ ಯೋಜನೆ",
  footer_copy:   "ಶ್ರೀ ವಾಯಲೂರಪ್ಪನ್ ಕ್ಷೇತ್ರ · ಎಲ್ಲಾ ಹಕ್ಕುಗಳನ್ನು ಕಾಯ್ದಿರಿಸಲಾಗಿದೆ",
};

const all: Record<Locale, typeof en> = {
  en,
  ta: { ...en, ...ta },
  ml: { ...en, ...ml },
  hi: { ...en, ...hi },
  te: { ...en, ...te },
  kn: { ...en, ...kn },
};

export function t(key: TranslationKey, locale?: string): string {
  const lang = (locale ?? "en") as Locale;
  return all[lang]?.[key] ?? all["en"][key] ?? key;
}

export function getTranslations(locale?: string) {
  const lang = (locale ?? "en") as Locale;
  return all[lang] ?? all["en"];
}
