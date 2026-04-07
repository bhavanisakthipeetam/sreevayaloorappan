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
  // Nav
  nav_home:      "ഹോം",
  nav_history:   "ചരിത്രം",
  nav_offerings: "വഴിപാടുകൾ",
  nav_visit:     "സന്ദർശനം",

  // Notice
  notice: "മാസത്തിലൊരിക്കൽ · പൂരം നക്ഷത്രം · രാവിലെ 8 – ഉച്ചയ്ക്ക് 12",

  // Hero
  hero_kicker:   "വായലൂർ · കേരളം",
  hero_title:    "ശ്രീ വായലൂരപ്പൻ ക്ഷേത്രം",
  hero_subtitle: "ശ്രീ കിരാത ശാസ്താവിന്റെ തിരുനടൻ",
  hero_desc:     "പ്രാചീന കാടാളം കാലഘട്ടത്തിൽ നിന്നും സംഘ കാലത്തിന്റെ പാരമ്പര്യങ്ങളുമായി ആഴത്തിൽ ഇഴചേർന്ന, എട്ടു പർവ്വതങ്ങളാൽ സംരക്ഷിക്കപ്പെടുന്ന ഈ ക്ഷേത്രം ദൈവിക അനുഗ്രഹത്തിന്റെ ഒരു ദീപ്തി കേന്ദ്രമായി — സകലർക്കും കുലദൈവമായി — വിളങ്ങുന്നു.",
  hero_cta1:     "ചരിത്രം കാണുക",
  hero_cta2:     "വഴിപാടുകൾ കാണുക",

  // Intro
  intro_label:   "പരിശുദ്ധ സാന്നിദ്ധ്യം",
  intro_heading: "ശ്രീ വായലൂരപ്പൻ: എല്ലാവർക്കും ഒരു കുലദൈവം",
  intro_body1:   "ഇവിടെ ശ്രീ കിരാത ശാസ്താവ് ഒരു ദേവൻ മാത്രമായല്ല, അനന്തമായ കരുണയോടെ എല്ലാ ഭക്തരെയും ആലിംഗനം ചെയ്യുന്ന സർവ്വ കുടുംബ രക്ഷകനായി ആരാധിക്കപ്പെടുന്നു. ആത്മ ശാന്തി, പിതൃ അനുഗ്രഹം, അല്ലെങ്കിൽ ജീവിതത്തിലെ തടസ്സങ്ങളിൽ നിന്നുള്ള സംരക്ഷണം — ഏതായാലും ശ്രീ വായലൂരപ്പൻ ആത്മാവിന്ന് ഒരു അഭയം നൽകുന്നു.",
  intro_body2:   "പ്രാചീന കാടാളത്തിൽ (കാട്ടുകാലം) വേരൂന്നി, സംഘ കാലത്തിന്റെ ആദ്ധ്യാത്മിക പാരമ്പര്യങ്ങളുമായി ആഴത്തിൽ ഇഴചേർന്ന ഈ ക്ഷേത്രം, ദൈവിക വേടന്റെ പ്രാചീന ലോകവും ഓരോ അന്വേഷിക്കുന്ന ഹൃദയത്തിന്റെ ഭക്തിയും ഒന്നു ചേരുന്ന ഇടമാണ്.",
  intro_quote:   "\"കാടിനെ കാക്കുന്നവൻ ആത്മാവിനെ കാക്കുന്നു — ശ്രീ വായലൂരപ്പൻ, ശാശ്വത കുലദൈവം.\"",

  // Deities
  deities_label:   "ദൈവിക സാന്നിദ്ധ്യം",
  deities_heading: "പരിശുദ്ധ ദേവ സദസ്സ്",
  deities_sub:     "ശ്രീ കിരാത ശാസ്താവിന്റെ പ്രധാന സാന്നിദ്ധ്യത്തോടൊപ്പം, ക്ഷേത്ര പ്രദേശം ശക്തിശാലിയായ ഉപദേവതകളാൽ അനുഗ്രഹിക്കപ്പെടുന്നു.",
  deity_1_name:    "ശ്രീ കിരാത ശാസ്താവ്",
  deity_1_role:    "പ്രധാന പ്രതിഷ്ഠ",
  deity_1_desc:    "പ്രാചീന വനങ്ങളുടെ ദൈവിക വേടനും രക്ഷകനും — സംഘ കാലത്തിലെ സേയ്യോന്റെ ഉഗ്ര, സംരക്ഷണ ശോഭ.",
  deity_2_name:    "ശങ്കരോദഥ അമ്മ",
  deity_2_role:    "ഭദ്രകാളി",
  deity_2_desc:    "ഐതിഹാസികമായ ശങ്കരോദഥ് കൊവിലകവുമായി ആഴത്തിൽ ബന്ധപ്പെട്ട ഉഗ്ര-സംരക്ഷണ മാതൃദേവി.",
  deity_3_name:    "ശ്രീ ബാല ഗണപതി",
  deity_3_role:    "വിഘ്ന നാശൻ",
  deity_3_desc:    "ഭക്തർക്ക് ശുഭ ആരംഭങ്ങളും ദൈവിക അനുഗ്രഹവും നൽകി വിഘ്നങ്ങളെ നശിപ്പിക്കുന്നവൻ.",
  deity_4_name:    "നാഗമ്മ",
  deity_4_role:    "നാഗ ദേവതകൾ",
  deity_4_desc:    "സംരക്ഷണം, സമൃദ്ധി, ഭൂമിയുടെ ജ്ഞാനം എന്നിവ പ്രദാനം ചെയ്യുന്ന ദൈവിക നാഗ ദേവതകൾ.",
  deity_5_name:    "ഗുളികൻ",
  deity_5_role:    "രക്ഷക ആത്മാവ്",
  deity_5_desc:    "ആദ്ധ്യാത്മിക സന്തുലനം ഉറപ്പാക്കുകയും നെഗറ്റീവ് ഊർജ്ജങ്ങളെ അകറ്റുകയും ചെയ്യുന്ന രക്ഷക ആത്മാവ്.",

  // Mountains
  hills_label:   "എട്ടു പർവ്വതങ്ങൾ",
  hills_heading: "പ്രകൃതിയുടെ ദൈവിക കാവൽ",
  hills_body:    "ശ്രീ വായലൂരപ്പൻ ക്ഷേത്രം ഒരു പ്രകൃതി ആദ്ധ്യാത്മിക കോട്ടയാണ്. ക്ഷേത്രത്തിന്റെ അഗാധമായ പ്രാപഞ്ചിക ഊർജ്ജം, എട്ട് ദിക്കുകളിലും സ്ഥിതി ചെയ്യുന്ന എട്ടു മഹത്തായ ശൈലശൃംഗങ്ങളാൽ ഉറപ്പിക്കപ്പെടുകയും സംരക്ഷിക്കപ്പെടുകയും ചെയ്യുന്നു.",

  // Offerings
  offerings_label:   "പരിശുദ്ധ കർമ്മങ്ങൾ",
  offerings_heading: "വഴിപാടുകളും പരിഹാരങ്ങളും",
  offerings_desc:    "ഭക്തർ ജീവിതത്തിലെ ആഴമേറിയ കാർമ്മിക തടസ്സങ്ങൾക്ക് ആദ്ധ്യാത്മിക ശമനവും ആശ്വാസവും തേടി ഇവിടെ വരുന്നു.",
  off_1_name:  "കുലദൈവ ശാന്തി",
  off_1_sub:   "പൂർവ്വ പിതൃ സമാധാനം",
  off_1_body:  "കുടുംബ ഐക്യം നഷ്ടപ്പെട്ടവർക്കും പൂർവ്വ പിതൃ അനുഗ്രഹം തേടുന്നവർക്കും — ശ്രീ വായലൂരപ്പൻ ഒരു സർവ്വ സേതുവായി, കുടുംബ ഐക്യവും പൂർവ്വ പിതൃ അനുഗ്രഹവും പുനഃസ്ഥാപിക്കുന്നു.",
  off_2_name:  "ശനി ദോഷ നിവൃത്തി",
  off_2_sub:   "ശനി ദോഷ ശമനം",
  off_2_body:  "ശ്രീ ശനിയുടെ ദോഷ കാലഘട്ടം അനുഭവിക്കുന്നവർക്ക് — ഇവിടെയുള്ള ആരാധന കഠിന കാർമ്മിക ഫലങ്ങളിൽ നിന്നു ശീലം നൽകി ആത്യന്തികമായ ആശ്വാസം പ്രദാനം ചെയ്യുന്നു.",
  off_3_name:  "ശത്രു ദോഷ നിവൃത്തി",
  off_3_sub:   "ശത്രു ദോഷ സംരക്ഷണം",
  off_3_body:  "കാടാളത്തിന്റെ ദേവന്റെ പ്രബലമായ നിയന്ത്രണ ഊർജ്ജത്തെ ആവാഹിക്കുന്നു — ഭക്തനെ ഉദ്ദേശിക്കുന്ന ദ്രോഹ ദുർബ്ബലതകൾ ഇല്ലാതാക്കാൻ.",
  off_4_name:  "നവഗ്രഹ ദോഷ ശാന്തി",
  off_4_sub:   "ഗ്രഹ ദോഷ ശമനം",
  off_4_body:  "വായലൂരിന്റെ ഉന്നത ഊർജ്ജ, ശൈല-ഗൃഹ ഭൂമിശാസ്ത്രത്തിനുള്ളിൽ ഒൻപത് ഗ്രഹങ്ങളുടെ ഊർജ്ജം ഉൾക്കൊള്ളിക്കുകയും ജന്മ ചാർട്ടിലെ ഗ്രഹ ദോഷങ്ങൾ ഹോമത്തിലൂടെ ശമിപ്പിക്കുകയും ചെയ്യുന്നു.",

  // History
  history_label:     "ദൈവിക ഉദ്ഭവം",
  history_heading:   "ശ്രീ വായലൂരപ്പന്റെ പ്രാചീനത",
  history_desc:      "ആദിമ കാലഘട്ടം മുതൽ, സംഘ കാലത്തിന്റെ ആദ്ധ്യാത്മിക പാരമ്പര്യങ്ങളുമായി ഇഴചേർന്ന്, വായലൂരിലെ ദൈവിക സാന്നിദ്ധ്യം നിലകൊള്ളുന്നു.",
  seyyon_heading:    "സേയ്യോൻ · ശ്രീ കിരാത ശാസ്താവ്",
  seyyon_body:       "പ്രാചീന സംഘ ഇലക്കിയത്തിൽ, മലനാടിന്റെ അദ്ധ്യക്ഷ ദേവൻ സേയ്യോനാണ്. വായലൂരിൽ ഈ ഉഗ്ര, സംരക്ഷണ, ശോഭമാർന്ന ഊർജ്ജം ശ്രീ കിരാത ശാസ്താവായി — ദൈവിക വേടനും വന പ്രകൃതി കാവലാളിയും — ആവിർഭവിക്കുന്നു.",
  kottravai_heading: "കൊറ്റ്രവൈ · ശങ്കരോദഥ അമ്മ",
  kottravai_body:    "അദ്ദേഹത്തിനൊപ്പം, ജയം, വീരത്വം, കാടലങ്ങൾ എന്നിവയുടെ പ്രാചീന ദേവി കൊറ്റ്രവൈ നിലകൊള്ളുന്നു. ഇവിടെ ഈ ദേവി ശങ്കരോദഥ അമ്മ ആയി ആരാധിക്കപ്പെടുന്നു — തന്റെ മക്കളെ ഉഗ്രമായി കാക്കുന്ന ദേവ മാതാ.",

  // Visit
  visit_label:      "തീർഥയാത്ര",
  visit_heading:    "സന്ദർശനം ആസൂത്രണം ചെയ്യുക",
  visit_desc:       "ശ്രീ വായലൂരപ്പൻ ക്ഷേത്രത്തിലെ തീർഥാടനം ആഴമേറിയ ആദ്ധ്യാത്മിക ശാന്തിയിലേക്കുള്ള ഒരു യാത്രയാണ്.",
  darshan_heading:  "ദർശനം & ദർശന ദിനങ്ങൾ",
  darshan_body:     "ക്ഷേത്രത്തിന്റെ പ്രാചീന പരിശുദ്ധതയും വലിയ ആദ്ധ്യാത്മിക ശക്തിയും സംരക്ഷിക്കാൻ, ക്ഷേത്രം കർശനമായി മാസത്തിലൊരിക്കൽ മാത്രം — ഓരോ മലയാള മാസത്തിലെ പൂരം നക്ഷത്ര ദിവസം — തുറക്കുന്നു.",
  darshan_time:     "രാവിലെ 8:00 മുതൽ ഉച്ചയ്ക്ക് 12:00 വരെ",
  contact_heading:  "ബന്ധപ്പെടൽ & ബുക്കിംഗ്",
  contact_body:     "വഴിപാടുകൾ മുൻകൂട്ടി ബുക്ക് ചെയ്യുന്നത് ഉചിതമാണ്.",
  reach_heading:    "എത്തിച്ചേരുന്ന വഴി",
  reach_air:        "കോയമ്പത്തൂർ അന്തർദേശീയ വിമാനത്താവളം (~60 കി.മി, 1.5 മണിക്കൂർ)",
  reach_train:      "കോയമ്പത്തൂർ ജംഗ്ഷൻ (~1.5 മണിക്കൂർ) · പാലക്കാട് ജംഗ്ഷൻ (~2 മണിക്കൂർ)",
  reach_address:    "ശ്രീ വായലൂരപ്പൻ കിരാത ശാസ്താ ക്ഷേത്രം, വായലൂർ, കേരളം",
  upcoming_heading: "വരാനിരിക്കുന്ന പൂരം തിയ്യതികൾ",

  // CTAs
  cta_book:       "വഴിപാട് ബുക്ക് ചെയ്യുക",
  cta_call:       "വിളിക്കുക / WhatsApp",
  cta_directions: "ദിശ ലഭ്യമാക്കുക",
  cta_history:    "പൂർണ്ണ ദൈവിക ഭൂമിശാസ്ത്രം →",

  // Footer
  footer_desc:    "ശ്രീ കിരാത ശാസ്താവിന്റെ പരിശുദ്ധ വാസസ്ഥാനം, കേരളത്തിലെ വായലൂരിൽ എട്ടു പർവ്വതങ്ങളാൽ കാക്കപ്പെടുന്നത്.",
  footer_links:   "ദ്രുത ലിങ്കുകൾ",
  footer_info:    "ക്ഷേത്ര വിവരങ്ങൾ",
  footer_open:    "പൂരം നക്ഷത്രം · മാസത്തിലൊരിക്കൽ",
  footer_timings: "8:00 AM – 12:00 PM",
  footer_copy:    "ശ്രീ വായലൂരപ്പൻ ക്ഷേത്രം · എല്ലാ അവകാശങ്ങളും നിക്ഷിപ്തം",
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
