/**
 * ILANGATHIR TRUST — Central Configuration & Internationalization (i18n)
 * 
 * Instructions:
 * 1. Social links are defaultly `null`. When you add a URL (e.g. "https://instagram.com/yourhandle"),
 *    it will automatically display in the footer and top announcement bar!
 * 2. Contact details (email, phones, address, bank details) are also null-safe:
 *    Set to `null` to automatically hide, or provide a string to display.
 * 3. All English and Tamil text is managed here for easy updates across the entire site.
 */

const SITE_CONFIG = {
    // ─── Organization Identity ───
    name: {
        en: "Ilangathir Trust",
        ta: "இளங்கதிர் அறக்கட்டளை"
    },
    shortName: {
        en: "Ilangathir",
        ta: "இளங்கதிர்"
    },
    subTitle: {
        en: "Charitable Trust",
        ta: "அறக்கட்டளை"
    },
    tagline: {
        en: "Rather than folding both hands to pray to God, extend one hand to help — two hands will worship you as God…",
        ta: "இரு கரம் கூப்பி கடவுளை வணங்குவதை விட ஒரு கரம் நீட்டி உதவி செய் இரு கரம் உன்னை வணங்கும் கடவுளாக…"
    },
    missionSnippet: {
        en: "Dedicated to uplifting underprivileged communities in Kallupatti, Dindigul through compassion, education, healthcare, and sustainable welfare programs.",
        ta: "கல்லுப்பட்டி, திண்டுக்கல் பகுதியில் இரக்கம், கல்வி, மருத்துவம் மற்றும் நிலையான நலத்திட்டங்கள் மூலம் நலிவடைந்த மக்களை உயர்த்துவதற்கு அர்ப்பணிக்கப்பட்டது."
    },
    foundedDate: "2024-01-01",
    foundedYear: "2024",
    registrationNumber: "Reg. No: 12/2024 (Govt. of Tamil Nadu)",

    // ─── Contact Information (Null-safe: set to null to hide) ───
    address: {
        en: "Kallupatti, Dindigul - 624307, Tamil Nadu, India",
        ta: "கல்லுப்பட்டி, திண்டுக்கல் - 624307, தமிழ்நாடு, இந்தியா"
    },
    phones: {
        primary: "+91 98765 43210",
        secondary: null // Set to string like "+91 91234 56789" or null
    },
    email: "info@ilangathirtrust.org", // Set to string or null
    workingHours: {
        en: "Monday – Saturday: 9:00 AM – 6:00 PM",
        ta: "திங்கள் – சனி: காலை 9:00 – மாலை 6:00"
    },

    // ─── Social Media Links (Default: null) ───
    // When you enter a link here, the icon will automatically appear in the footer and top announcement bar!
    socialLinks: {
        facebook: null,     // e.g. "https://facebook.com/ilangathirtrust"
        instagram: null,    // e.g. "https://instagram.com/ilangathirtrust"
        whatsapp: null,     // e.g. "https://wa.me/919876543210"
        youtube: null,      // e.g. "https://youtube.com/@ilangathirtrust"
        twitter: null,      // e.g. "https://twitter.com/ilangathirtrust"
        linkedin: null      // e.g. "https://linkedin.com/company/ilangathirtrust"
    },

    // ─── Bank & Donation Details (Null-safe) ───
    bankDetails: {
        accountName: "Ilangathir Trust",
        accountNumber: "XXXX XXXX XXXX",
        ifscCode: "XXXX0000000",
        bankName: "State Bank of India",
        branch: "Dindigul Main Branch",
        accountType: "Current Account",
        upiId: "ilangathirtrust@upi",
        qrCodeImage: null // e.g. "assets/images/donation_qr.png" or null
    },

    // ─── Key Performance / Impact Statistics ───
    stats: {
        livesImpacted: 500,
        livesImpactedSuffix: "+",
        programsActive: 6,
        volunteers: 50,
        volunteersSuffix: "+",
        yearFounded: 2024
    },

    // ─── Navigation Link Keys ───
    navLinks: [
        { id: "home", key: "nav_home", href: "index.html" },
        { id: "about", key: "nav_about", href: "about.html" },
        { id: "services", key: "nav_services", href: "services.html" },
        { id: "gallery", key: "nav_gallery", href: "gallery.html" },
        { id: "contact", key: "nav_contact", href: "contact.html" }
    ]
};

// ─── Bilingual Internationalization (i18n) Dictionary ───
const I18N_CONTENT = {
    // Navigation & Global Header
    nav_home: { en: "Home", ta: "முகப்பு" },
    nav_about: { en: "About Us", ta: "எங்களைப் பற்றி" },
    nav_services: { en: "Services", ta: "சேவைகள்" },
    nav_gallery: { en: "Gallery", ta: "படத்தொகுப்பு" },
    nav_contact: { en: "Contact", ta: "தொடர்பு" },
    btn_donate: { en: "Donate Now", ta: "நன்கொடை" },
    btn_donate_long: { en: "Support Our Mission", ta: "நன்கொடை அளியுங்கள்" },
    nav_menu_label: { en: "Menu", ta: "பட்டி" },
    nav_close_menu: { en: "Close Menu", ta: "மூடுக" },
    reg_badge_text: { en: "Registered Non-Profit Trust", ta: "அரசு பதிவு பெற்ற அறக்கட்டளை" },
    top_announcement: { 
        en: "Serving humanity with transparency & love across Kallupatti & Dindigul.", 
        ta: "கல்லுப்பட்டி & திண்டுக்கல் பகுதியில் தூய அன்போடும் வெளிப்படைத்தன்மையோடும் சமூகப் பணி." 
    },

    // Language Toggles
    lang_toggle_short: { en: "தமிழ்", ta: "English" },
    lang_en: { en: "English", ta: "English" },
    lang_ta: { en: "தமிழ்", ta: "தமிழ்" },

    // Hero Section
    hero_badge: { en: "Dedicated to Public Welfare", ta: "மக்கள் நலனுக்கான அர்ப்பணிப்பு" },
    hero_title: {
        en: 'Empowering Lives,<br><span class="accent">Building Hope</span>',
        ta: 'வாழ்வை மேம்படுத்துவோம்,<br><span class="accent">நம்பிக்கையை விதைப்போம்</span>'
    },
    hero_subtitle: {
        en: "Ilangathir Trust stands as a beacon of kindness in Kallupatti, Dindigul — driving grassroots initiatives in nutrition, education, elderly support, and rural healthcare.",
        ta: "இளங்கதிர் அறக்கட்டளை, திண்டுக்கல் மாவட்டம் கல்லுப்பட்டியில் நலிவடைந்த மக்களுக்கு உணவு, கல்வி, முதியோர் பராமரிப்பு மற்றும் மருத்துவ உதவிகளை வழங்கி ஒரு நம்பிக்கை ஒளியாக செயல்படுகிறது."
    },
    hero_quote: {
        en: '"Rather than folding both hands to pray to God, extend one hand to help — two hands will worship you as God…"',
        ta: '"இரு கரம் கூப்பி கடவுளை வணங்குவதை விட ஒரு கரம் நீட்டி உதவி செய் இரு கரம் உன்னை வணங்கும் கடவுளாக…"'
    },
    btn_learn_more: { en: "Discover Our Story", ta: "எங்கள் வரலாறு" },
    btn_our_services: { en: "Explore Services", ta: "எங்கள் சேவைகள்" },
    btn_get_involved: { en: "Get Involved", ta: "இணைந்து செயல்படுங்கள்" },
    btn_volunteer_now: { en: "Become a Volunteer", ta: "தொண்டராக இணையுங்கள்" },
    btn_contact_us: { en: "Contact Us", ta: "தொடர்பு கொள்ளுங்கள்" },
    hero_pill_food: { en: "Wholesome Meals", ta: "அன்னதான சேவை" },
    hero_pill_edu: { en: "Student Scholarships", ta: "கல்வி ஆதரவு" },
    hero_pill_health: { en: "Free Medical Camps", ta: "இலவச மருத்துவ முகாம்கள்" },
    services_page_title: { en: "Our Services & Programs", ta: "எங்கள் சேவைகள் & திட்டங்கள்" },
    services_page_desc: {
        en: "Discover the impactful programs and initiatives through which we serve rural communities in Kallupatti, Dindigul.",
        ta: "கல்லுப்பட்டி, திண்டுக்கல் கிராமப்புற மக்களுக்கு நாங்கள் வழங்கும் சேவைகள் மற்றும் மக்கள் நலத்திட்டங்களைப் பற்றி அறியுங்கள்."
    },

    // Stats Bar
    stat_lives: { en: "Lives Impacted", ta: "பயனடைந்த குடும்பங்கள்" },
    stat_programs: { en: "Active Initiatives", ta: "செயலில் உள்ள திட்டங்கள்" },
    stat_volunteers: { en: "Heartfelt Volunteers", ta: "அர்ப்பணிப்புள்ள தொண்டர்கள்" },
    stat_years: { en: "Year Established", ta: "நிறுவப்பட்ட ஆண்டு" },

    // About Overview (Home Page)
    about_label: { en: "WHO WE ARE", ta: "நாங்கள் யார்" },
    about_title: {
        en: 'A Ray of Hope Rising in <span class="accent">Kallupatti</span>',
        ta: '<span class="accent">கல்லுப்பட்டியில்</span> உதிக்கும் நம்பிக்கைக் கதிர்'
    },
    about_p1: {
        en: 'Founded on January 1, 2024, Ilangathir Trust was established with a singular heartbeat: to serve the most vulnerable communities in and around Kallupatti, Dindigul district. The name "Ilangathir" reflects the gentle first rays of dawn — bringing radiant warmth, dignity, and renewed hope for a brighter tomorrow.',
        ta: 'இளங்கதிர் அறக்கட்டளை 2024 ஜனவரி 1 அன்று திண்டுக்கல் மாவட்டம் கல்லுப்பட்டி மற்றும் அதன் கிராமப்புற பகுதிகளில் உள்ள நலிவடைந்த மக்களுக்கு ஆதரவளிக்க தொடங்கப்பட்டது. "இளங்கதிர்" என்ற பெயர் விடியலின் முதல் கதிரைப் போன்றது — ஒளியையும், அரவணைப்பையும், புதிய தொடக்கத்திற்கான நம்பிக்கையையும் தருகிறது.'
    },
    about_p2: {
        en: 'We stand firmly on the conviction that true worship is service to humanity. Through disciplined community outreach, transparent stewardship, and passionate volunteerism, we work across nutrition, schooling, health camps, and elder protection.',
        ta: 'மனிதகுலத்திற்கு செய்யும் சேவையே உண்மையான இறை வழிபாடு என்பதில் நாங்கள் அசைக்க முடியாத நம்பிக்கை கொண்டுள்ளோம். உணவு வழங்கல், கல்வி உதவி, இலவச மருத்துவ முகாம்கள் மற்றும் முதியோர் ஆதரவு என பல துறைகளில் தன்னலமற்ற சேவையை மேற்கொண்டு வருகிறோம்.'
    },
    about_highlight: {
        en: '"Rather than folding both hands to pray to God, extend one hand to help — two hands will worship you as God…"',
        ta: '"இரு கரம் கூப்பி கடவுளை வணங்குவதை விட ஒரு கரம் நீட்டி உதவி செய் இரு கரம் உன்னை வணங்கும் கடவுளாக…"'
    },

    // Vision & Mission
    vm_label: { en: "OUR CORE PURPOSE", ta: "எங்கள் அடிப்படைக் குறிக்கோள்" },
    vm_title: { en: "Vision & Mission", ta: "தொலைநோக்கு மற்றும் நோக்கம்" },
    vision_title: { en: "Our Vision", ta: "எங்கள் தொலைநோக்கு" },
    vision_desc: {
        en: "To foster an equitable, compassionate society where no family suffers from hunger, no child drops out of school due to poverty, and every elderly soul lives with honor, safety, and joy.",
        ta: "பசியால் எவரும் வாடாத, வறுமையால் எந்தக் குழந்தையும் கல்வி வாய்ப்பை இழக்காத, முதியோர்கள் கண்ணியத்தோடும் மகிழ்ச்சியோடும் வாழக்கூடிய ஒரு சமத்துவமும் இரக்கமும் நிறைந்த சமூகத்தை உருவாக்குவது."
    },
    mission_title: { en: "Our Mission", ta: "எங்கள் நோக்கம்" },
    mission_desc: {
        en: "To identify real community hardships and deliver direct, sustainable solutions in basic nutrition, student scholarships, healthcare camps, and women empowerment with 100% operational transparency.",
        ta: "கிராமப்புற மக்களின் உண்மையான தேவைகளை நேரடியாகக் கண்டறிந்து, ஊட்டச்சத்து மிக்க உணவு, மாணவ உதவித்தொகை, சுகாதார முகாம்கள் மற்றும் பெண்கள் மேம்பாட்டுத் திட்டங்களை முழு வெளிப்படைத்தன்மையோடு செயல்படுத்துவது."
    },

    // Values Section
    values_label: { en: "GUIDING PILLARS", ta: "எங்களை வழிநடத்தும் நெறிகள்" },
    values_title: { en: "Values That Define Our Trust", ta: "எங்கள் அறக்கட்டளையின் விழுமியங்கள்" },
    val_compassion: { en: "Pure Compassion", ta: "தூய இரக்கம்" },
    val_compassion_d: {
        en: "Every initiative we launch is driven by genuine empathy and unconditional love for fellow human beings.",
        ta: "நாங்கள் செய்யும் ஒவ்வொரு செயலும் மனிதநேயத்துடனும் உள்ளார்ந்த அக்கறையுடனும் மேற்கொள்ளப்படுகிறது."
    },
    val_transparency: { en: "Open Transparency", ta: "முழு வெளிப்படைத்தன்மை" },
    val_transparency_d: {
        en: "We believe in uncompromising accountability; every rupee donated is documented and channeled directly to causes.",
        ta: "நன்கொடையாகப் பெறப்படும் ஒவ்வொரு ரூபாயும் உரியவர்களுக்கு முழுமையாகச் சென்று சேருவதை வெளிப்படையாகப் பேணுகிறோம்."
    },
    val_integrity: { en: "Unyielding Integrity", ta: "உறுதியான நேர்மை" },
    val_integrity_d: {
        en: "Honesty and ethical dedication are the cornerstone of all our governance and field efforts.",
        ta: "அறக்கட்டளையின் அனைத்துப் பணிகளிலும் உயர்ந்த நெறிமுறைகளையும் நேர்மையான நிர்வாகத்தையும் கடைப்பிடிக்கிறோம்."
    },
    val_community: { en: "Community Unity", ta: "சமூக ஒற்றுமை" },
    val_community_d: {
        en: "Real change happens when neighbors help neighbors; we actively mobilize local youth and village leadership.",
        ta: "மக்கள் ஒன்றிணைந்து செயல்படும்போதே நிரந்தர மாற்றம் ஏற்படும்; கிராமப்புற இளைஞர்களை நற்பணிகளில் இணைக்கிறோம்."
    },
    val_sustainability: { en: "Sustainable Impact", ta: "நிலையான தாக்கம்" },
    val_sustainability_d: {
        en: "We build programs that empower people to stand on their own feet, fostering self-reliance across generations.",
        ta: "தற்காலிக உதவிகளோடு மட்டுமல்லாமல், தலைமுறைகள் தாண்டி மக்கள் தன்னிறைவு பெறும் நிலையான திட்டங்களை உருவாக்குகிறோம்."
    },
    val_empowerment: { en: "Dignified Empowerment", ta: "கண்ணியமான அதிகாரமளித்தல்" },
    val_empowerment_d: {
        en: "We uplift marginalized families with dignity, vocational skills, and resources to script their own future.",
        ta: "நலிந்த குடும்பங்களை சுயமரியாதையுடனும் திறன் பயிற்சிகளுடனும் தங்கள் எதிர்காலத்தை தாங்களே வடிவமைக்க உதவுகிறோம்."
    },

    // Services Overview & Detail
    services_label: { en: "WHAT WE DO", ta: "நாங்கள் என்ன செய்கிறோம்" },
    services_title: { en: "Our Programs & Community Services", ta: "எங்கள் திட்டங்கள் & சமூக சேவைகள்" },
    services_desc: {
        en: "We focus on real-world interventions that solve immediate hardship while paving long-term avenues for dignity and progress.",
        ta: "கிராமப்புற மக்களின் உடனடித் தேவைகளைத் தீர்ப்பதோடு, நீண்டகால வளர்ச்சி மற்றும் கண்ணியமான வாழ்விற்கு வழிகோலும் திட்டங்களை முன்னெடுக்கிறோம்."
    },

    // Service 1: Food Distribution
    svc_food_title: { en: "Food Distribution & Nutrition", ta: "அன்னதானம் & ஊட்டச்சத்து வழங்கல்" },
    svc_food_sub: { en: "Nutritious Meals for Families", ta: "ஏழை எளிய மக்களுக்கு சத்தான உணவு" },
    svc_food_desc: {
        en: "No one in our community should sleep hungry. Our volunteers prepare and distribute fresh, wholesome meals to impoverished families, destitute individuals, and migrant laborers across Kallupatti and nearby hamlets.",
        ta: "எங்கள் கிராமப்புறப் பகுதிகளில் யாரும் பசியால் வாடக்கூடாது. ஆதரவற்றோர், தினக்கூலிகள் மற்றும் ஏழை குடும்பங்களுக்கு சுத்தமான மற்றும் சத்தான உணவுகளை எங்கள் தன்னார்வலர்கள் தயாரித்து வழங்கி வருகின்றனர்."
    },
    svc_food_item1: { en: "Scheduled nutritious meal drives for daily-wage households", ta: "ஏழை குடும்பங்களுக்கு தொடர்ச்சியான ஊட்டச்சத்து உணவு வழங்கல்" },
    svc_food_item2: { en: "Festival festive meal kits and grain distributions", ta: "பண்டிகை காலங்களில் மளிகைப் பொருட்கள் மற்றும் இனிப்புகள் வழங்கல்" },
    svc_food_item3: { en: "Emergency food relief during monsoon and severe crisis", ta: "இயற்கை பேரிடர் மற்றும் அவசர காலங்களில் உடனடி உணவு உதவி" },
    svc_food_item4: { en: "Supplementary health snacks for undernourished children", ta: "ஊட்டச்சத்து குறைபாடுள்ள குழந்தைகளுக்கு சத்துணவு ஆதரவு" },

    // Service 2: Education Support
    svc_edu_title: { en: "Education & Child Mentoring", ta: "கல்வி ஆதரவு & மாணவ வழிகாட்டுதல்" },
    svc_edu_sub: { en: "Scholarships & School Supplies", ta: "உதவித்தொகை & பள்ளி உபகரணங்கள்" },
    svc_edu_desc: {
        en: "Education breaks the cycle of poverty. We support ambitious students with school tuition fees, note books, uniforms, and after-school tutoring to ensure every talented child stays in school and thrives.",
        ta: "கல்வியே வறுமையை ஒழிக்கும் ஆற்றல்மிக்க கருவி. பொருளாதார வசதியற்ற மாணவ, மாணவிகளுக்கு பள்ளி கட்டணம், குறிப்பேடுகள், சீருடைகள் மற்றும் மாலை நேர சிறப்புப் பயிற்சிகளை வழங்கி அவர்களின் கனவுகளை நனவாக்குகிறோம்."
    },
    svc_edu_item1: { en: "Merit-and-need scholarships for school and college youth", ta: "தகுதியும் தேவையும் உள்ள மாணவர்களுக்கு உயர்கல்வி உதவித்தொகை" },
    svc_edu_item2: { en: "Free school bags, stationery, and textbook sets every academic year", ta: "ஆண்டுதோறும் இலவச நோட்டுப் புத்தகங்கள் மற்றும் எழுதுபொருட்கள்" },
    svc_edu_item3: { en: "Community evening study centers with volunteer tutors", ta: "கிராமப்புற மாணவர்களுக்கான மாலை நேர இலவச பயிற்சி மையங்கள்" },
    svc_edu_item4: { en: "Career counselling, computer literacy, and higher education guidance", ta: "உயர் கல்வி வழிகாட்டுதல் மற்றும் அடிப்படை கணினி பயிற்சி" },

    // Service 3: Health Camps
    svc_health_title: { en: "Rural Healthcare & Medical Camps", ta: "மருத்துவ முகாம்கள் & நலவாழ்வு" },
    svc_health_sub: { en: "Free Medical Screening & Care", ta: "இலவச மருத்துவ பரிசோதனை மற்றும் சிகிச்சை" },
    svc_health_desc: {
        en: "Quality healthcare should be accessible to all regardless of distance or income. In collaboration with compassionate doctors, we organize free health check-ups, diagnostic tests, and critical medicine supply for rural villages.",
        ta: "தரமான மருத்துவம் அனைவருக்கும் கிடைக்க வேண்டும். நல்மனம் கொண்ட மருத்துவர்கள் மற்றும் மருத்துவமனைகளுடன் இணைந்து இலவச பொது மருத்துவ முகாம்கள், கண் பரிசோதனை மற்றும் மருந்துகளை வழங்கி வருகிறோம்."
    },
    svc_health_item1: { en: "Comprehensive general health check-ups and diagnostic screening", ta: "முழு உடற்பரிசோதனை மற்றும் இரத்தப் பரிசோதனை முகாம்கள்" },
    svc_health_item2: { en: "Free eye check-up camps, spectacles distribution, and cataract assistance", ta: "இலவச கண் மருத்துவ முகாம்கள் மற்றும் மூக்குக் கண்ணாடி வழங்கல்" },
    svc_health_item3: { en: "Health, hygiene, and disease prevention awareness sessions", ta: "சுகாதாரம் மற்றும் நோய்த்தடுப்பு விழிப்புணர்வு கருத்தரங்குகள்" },
    svc_health_item4: { en: "Financial assistance for emergency surgeries and life-saving treatments", ta: "அவசர அறுவை சிகிச்சைகள் மற்றும் உயிர்காக்கும் மருந்துகளுக்கான உதவி" },

    // Service 4: Elderly Care
    svc_elderly_title: { en: "Elderly Care & Senior Welfare", ta: "முதியோர் பராமரிப்பு & ஆதரவு" },
    svc_elderly_sub: { en: "Dignity & Comfort for Elders", ta: "முதியோர்களுக்கான பாதுகாப்பும் கண்ணியமும்" },
    svc_elderly_desc: {
        en: "Our seniors spent their lives building society; they deserve safety, love, and respect in their golden years. We provide essential groceries, monthly medicines, warm blankets, and emotional companionship to abandoned elders.",
        ta: "வாழ்நாள் முழுவதும் உழைத்த முதியவர்கள் தங்களின் இறுதிக்காலத்தில் தனிமையிலோ ஆதரவற்றோ விடப்படக்கூடாது. ஆதரவற்ற முதியோர்களுக்கு மாதாந்திர உணவுப் பொருட்கள், மருந்துகள், போர்வைகள் மற்றும் அன்பான கவனிப்பை அளிக்கிறோம்."
    },
    svc_elderly_item1: { en: "Monthly nutrition & grocery packages for destitute seniors", ta: "ஆதரவற்ற முதியோர்களுக்கு மாதாந்திர மளிகைப் பொருட்கள் வழங்கல்" },
    svc_elderly_item2: { en: "Prescription medicine assistance for chronic illnesses", ta: "நீரிழிவு, இரத்த அழுத்தம் போன்ற நாள்பட்ட நோய்களுக்கான இலவச மருந்துகள்" },
    svc_elderly_item3: { en: "Regular volunteer visits and mental wellness companionship", ta: "தனிமையை போக்கும் தன்னார்வலர்களின் அன்பான களச் சந்திப்புகள்" },
    svc_elderly_item4: { en: "Mobility aids including walking sticks, spectacles, and basic care kits", ta: "ஊன்றுகோல்கள், நடைபயிற்சி உபகரணங்கள் மற்றும் பராமரிப்பு உதவிகள்" },

    // Service 5: Community Welfare
    svc_welfare_title: { en: "Community Welfare & Disaster Relief", ta: "சமூக நலன் & அவசர நிவாரணம்" },
    svc_welfare_sub: { en: "Relief, Cleanliness & Village Care", ta: "கிராம வளர்ச்சி மற்றும் பேரிடர் நிவாரணம்" },
    svc_welfare_desc: {
        en: "Strong villages create a strong nation. We initiate village sanitation campaigns, clothing drives, tree plantation for ecological balance, and swift relief during unexpected natural disasters.",
        ta: "வலுவான கிராமங்களே தேசத்தின் தூண்கள். கிராம தூய்மைப்பணிகள், ஆடை வழங்கல், மரக்கன்றுகள் நடுதல் மற்றும் எதிர்பாராத இயற்கை பேரிடர்களின் போது உடனடி நிவாரணப் பணிகளை திறம்பட செய்கிறோம்."
    },
    svc_welfare_item1: { en: "Clothing donation drives for children, daily laborers, and homeless elders", ta: "ஏழைகள் மற்றும் குழந்தைகளுக்கான புத்தாடை மற்றும் உடைகள் வழங்கல்" },
    svc_welfare_item2: { en: "Tree plantation drives and local water-conservation awareness", ta: "சுற்றுச்சூழல் பாதுகாப்பு மரக்கன்றுகள் நடுதல் & நீர்நிலை விழிப்புணர்வு" },
    svc_welfare_item3: { en: "Emergency disaster relief kits (tarpaulins, dry rations, first-aid)", ta: "புயல், வெள்ளம் போன்ற பேரிடர் காலங்களில் உடனடி நிவாரண உதவிகள்" },
    svc_welfare_item4: { en: "Celebration of festivals with underprivileged children to spread joy", ta: "ஏழைக் குழந்தைகளோடு தீபாவளி, பொங்கல் போன்ற பண்டிகைகளைக் கொண்டாடுதல்" },

    // Service 6: Women Empowerment
    svc_women_title: { en: "Women Empowerment & Skill Building", ta: "பெண்கள் முன்னேற்றம் & திறன் பயிற்சி" },
    svc_women_sub: { en: "Independence Through Skills", ta: "சுயதொழில் மூலம் பெண்கள் தன்னிறைவு" },
    svc_women_desc: {
        en: "When you empower a woman, you uplift an entire household. We conduct free tailoring classes, handicraft workshops, and financial literacy sessions to help rural women attain self-sufficiency and self-confidence.",
        ta: "ஒரு பெண்ணை மேம்படுத்துவது என்பது ஒரு முழுக் குடும்பத்தையும் உயர்த்துவதாகும். கிராமப்புற பெண்களுக்கு தையல் பயிற்சி, கைவினைப் பொருட்கள் தயாரிப்பு மற்றும் சேமிப்பு விழிப்புணர்வை வழங்கி பொருளாதார சுதந்திரம் பெற உதவுகிறோம்."
    },
    svc_women_item1: { en: "Free tailoring and garment stitching certificate workshops", ta: "இலவச தையல் பயிற்சி மற்றும் சான்றிதழ் வழங்கி தொழில் தொடங்குதல்" },
    svc_women_item2: { en: "Support for Self-Help Groups (SHG) and micro-enterprise development", ta: "சுயஉதவிக் குழுக்கள் அமைத்தல் மற்றும் சிறுதொழில் வழிகாட்டுதல்" },
    svc_women_item3: { en: "Financial literacy, bank account usage, and government scheme guidance", ta: "அரசு நலத்திட்டங்கள் மற்றும் வங்கி சேமிப்பு பற்றிய விழிப்புணர்வு" },
    svc_women_item4: { en: "Legal rights, mental health, and women wellbeing forums", ta: "பெண்களுக்கான சட்ட உரிமைகள் மற்றும் ஆரோக்கியம் குறித்த கலந்துரையாடல்" },

    // About Page Specific
    about_page_title: { en: "About Ilangathir Trust", ta: "இளங்கதிர் அறக்கட்டளை பற்றி" },
    about_page_desc: {
        en: "Discover our journey, foundational values, and the compassionate hearts working on the ground in Kallupatti, Dindigul.",
        ta: "எங்கள் அறக்கட்டளையின் தோற்றம், அடிப்படை விழுமியங்கள் மற்றும் களத்தில் உழைக்கும் தன்னார்வலர்களைப் பற்றி அறியுங்கள்."
    },
    story_label: { en: "OUR ORIGIN & JOURNEY", ta: "எங்கள் தொடக்கமும் பயணமும்" },
    story_title: { en: "How It All Began", ta: "இது எப்படி தொடங்கியது" },
    story_p1: {
        en: 'Ilangathir Trust was born out of deep empathy for the everyday struggles of underprivileged families in Kallupatti, Dindigul. On January 1, 2024, a small group of socially conscious citizens joined hands, resolved to make a tangible difference rather than being passive spectators.',
        ta: 'திண்டுக்கல் மாவட்டம் கல்லுப்பட்டி மற்றும் அதன் சுற்றுவட்டாரத்தில் உள்ள ஏழை மக்களின் அன்றாடத் துயரங்களைக் கண்ட சில இளைஞர்களும் சமூக ஆர்வலர்களும் ஒன்றிணைந்து 2024 ஜனவரி 1 அன்று இளங்கதிர் அறக்கட்டளையைத் தொடங்கினர்.'
    },
    story_p2: {
        en: 'From our very first meal packet handed to a hungry street vendor to setting up free study spaces for rural kids, the trust has earned the deep love and faith of the community. Every program is powered by local volunteerism, ensuring that every grain of food and rupee given creates direct, visible happiness.',
        ta: 'ஒரு சிறிய அன்னதானப் பணியாகத் தொடங்கிய எங்கள் பயணம், இன்று கிராமப்புற மாணவர்களின் கல்வி, முதியோர் நலம் மற்றும் மருத்துவ உதவிகள் என விரிவடைந்துள்ளது. மக்களின் அன்பும் நம்பிக்கையுமே எங்கள் உழைப்பின் மிகப்பெரிய உந்துசக்தி.'
    },
    story_pillars_title: { en: "Our Foundational Pillars", ta: "எங்கள் அடிப்படைக் கொள்கைகள்" },
    story_pillar1: { en: "Grassroots Focus: Direct assistance with zero bureaucratic overhead.", ta: "நேரடி உதவி: இடைத்தரகர்கள் இன்றி நலிந்தவர்களுக்கு உடனடி உதவி." },
    story_pillar2: { en: "Total Transparency: Every rupee accounts for tangible public impact.", ta: "முழுமையான நம்பகத்தன்மை: நன்கொடைகளுக்கு தகுந்த வெளிப்படையான பயன்பாடு." },
    story_pillar3: { en: "Community Ownership: Empowering locals to sustain long-term growth.", ta: "மக்களின் பங்கேற்பு: சமூகத்தை ஒன்றிணைத்து மேற்கொள்ளப்படும் கூட்டு முயற்சி." },

    // Milestones / Timeline
    timeline_label: { en: "JOURNEY & MILESTONES", ta: "மைல்கற்களும் முன்னேற்றமும்" },
    timeline_title: { en: "Our Key Milestones", ta: "எங்கள் முக்கிய மைல்கற்கள்" },
    tl1_date: { en: "January 2024", ta: "ஜனவரி 2024" },
    tl1_title: { en: "Official Foundation & Registration", ta: "அறக்கட்டளை தோற்றம் & பதிவு" },
    tl1_desc: {
        en: "Ilangathir Trust was officially registered under the Government of Tamil Nadu and commenced initial relief programs in Kallupatti.",
        ta: "இளங்கதிர் அறக்கட்டளை தமிழ்நாடு அரசின் கீழ் பதிவு செய்யப்பட்டு கல்லுப்பட்டியில் தனது முதல் நலத்திட்டங்களைத் தொடங்கியது."
    },
    tl2_date: { en: "March 2024", ta: "மார்ச் 2024" },
    tl2_title: { en: "Inaugural Community Nutrition Drive", ta: "முதல் அன்னதான சேவை" },
    tl2_desc: {
        en: "Distributed wholesome food kits and meals to 100+ low-income and destitute families across rural Kallupatti.",
        ta: "கல்லுப்பட்டி பகுதியில் உள்ள 100-க்கும் மேற்பட்ட ஏழை மற்றும் ஆதரவற்ற குடும்பங்களுக்கு உணவு மற்றும் மளிகைப் பொருட்கள் வழங்கப்பட்டது."
    },
    tl3_date: { en: "June 2024", ta: "ஜூன் 2024" },
    tl3_title: { en: "Student Education & Mentoring Drive", ta: "கல்வி உதவி & நோட்டுப் புத்தகங்கள்" },
    tl3_desc: {
        en: "Provided school bags, notebooks, and scholarship support to over 75 deserving students for the new academic year.",
        ta: "புதிய கல்வி ஆண்டையொட்டி 75-க்கும் மேற்பட்ட மாணவ, மாணவிகளுக்கு பள்ளிப் பைகள், நோட்டுப் புத்தகங்கள் மற்றும் கல்வி உதவித்தொகை வழங்கப்பட்டது."
    },
    tl4_date: { en: "2025 & Beyond", ta: "2025 மற்றும் எதிர்காலம்" },
    tl4_title: { en: "Expanding Rural Reach & Healthcare", ta: "விரிவான சேவை & சுகாதாரத் திட்டம்" },
    tl4_desc: {
        en: "Expanding free diagnostic medical camps, skill development for women, and setting up an elder companion program across Dindigul.",
        ta: "திண்டுக்கல் மாவட்டம் முழுவதும் இலவச மருத்துவ முகாம்கள், மகளிர் சுயதொழில் கூடங்கள் மற்றும் முதியோர் நலப்பணிகளை விரிவுபடுத்துதல்."
    },

    // Leadership Team
    team_label: { en: "OUR TRUSTEES & LEADERSHIP", ta: "நிர்வாகிகள் & வழிகாட்டிகள்" },
    team_title: { en: "The Dedicated Minds Behind Ilangathir", ta: "அறக்கட்டளையை வழிநடத்தும் தன்னலமற்ற நெஞ்சங்கள்" },
    team_role1: { en: "Managing Trustee / Founder", ta: "நிர்வாக அறங்காவலர் / நிறுவனர்" },
    team_role2: { en: "Trust Secretary", ta: "அறக்கட்டளை செயலாளர்" },
    team_role3: { en: "Treasurer & Finance", ta: "பொருளாளர் & நிதி நிர்வாகி" },
    team_desc: {
        en: "Our leadership board serves with voluntary dedication, ensuring that all resources are channeled directly to community betterment with utmost dignity.",
        ta: "எங்கள் நிர்வாகிகள் எந்தவித சுயலாபமும் இன்றி தன்னலமற்ற மக்கள் சேவையில் முழு ஈடுபாட்டுடன் செயல்பட்டு வருகின்றனர்."
    },

    // Gallery Page
    gallery_page_title: { en: "Visual Stories & Gallery", ta: "புகைப்படத் தொகுப்பு" },
    gallery_page_desc: {
        en: "Witness authentic glimpses of smiles, community solidarity, and tireless service on the ground.",
        ta: "களப்பணியின் போது மலர்ந்த புன்னகைகள், உதவிகள் மற்றும் மக்களின் மகிழ்ச்சியைக் காட்டும் புகைப்படங்கள்."
    },
    gallery_label: { en: "MOMENTS OF SERVICE", ta: "சேவையின் தருணங்கள்" },
    gallery_title: { en: "Capturing Hope in Action", ta: "சேவையின் அழகிய பதிவுகள்" },
    gallery_desc: {
        en: "Every photograph is a testament to the power of shared humanity and collective goodwill.",
        ta: "ஒவ்வொரு புகைப்படமும் மனிதநேயத்தின் உயர்வையும் பகிர்ந்தளிக்கும் அன்பையும் பறைசாற்றுகிறது."
    },
    filter_all: { en: "All Activities", ta: "அனைத்தும்" },
    filter_food: { en: "Food Distribution", ta: "அன்னதானம்" },
    filter_education: { en: "Education Aid", ta: "கல்விப் பணி" },
    filter_events: { en: "Special Events", ta: "நிகழ்வுகள்" },
    filter_community: { en: "Community Welfare", ta: "சமூக நலம்" },
    gallery_card_food1: { en: "Community Meal Distribution", ta: "சமூக உணவு வழங்கல்" },
    gallery_card_food2: { en: "Wholesome Nutrition Kits", ta: "சத்தான உணவுப் பொட்டலங்கள்" },
    gallery_card_edu1: { en: "Student School Kit Distribution", ta: "மாணவர்களுக்கான கல்விப் பொருட்கள்" },
    gallery_card_edu2: { en: "Youth Academic Mentoring", ta: "இளைஞர்களுக்கான கல்வி வழிகாட்டல்" },
    gallery_card_event1: { en: "Annual Trust Inauguration & Meet", ta: "அறக்கட்டளை தொடக்க விழா" },
    gallery_card_event2: { en: "Village Community Outreach Forum", ta: "கிராம மக்கள் நலக் கலந்தாய்வு" },
    gallery_card_welfare1: { en: "Winter Clothing & Blanket Drive", ta: "குளிர்கால ஆடை & போர்வை வழங்கல்" },
    gallery_card_welfare2: { en: "Rural Assistance & Elder Care", ta: "கிராமப்புற முதியோர் நலம்" },
    gallery_card_welfare3: { en: "Village Sanitation & Cleanliness", ta: "கிராம தூய்மைப் பணி" },

    // Contact Page & Forms
    contact_page_title: { en: "Connect With Us", ta: "எங்களை தொடர்பு கொள்ளுங்கள்" },
    contact_page_desc: {
        en: "Whether you wish to sponsor a program, volunteer your time, or seek assistance, our doors are always open.",
        ta: "நன்கொடை அளிக்கவோ, தொண்டராக இணையவோ அல்லது உதவி பெறவோ எங்களை எப்போது வேண்டுமானாலும் தொடர்பு கொள்ளலாம்."
    },
    contact_label: { en: "REACH OUT TODAY", ta: "உடனடி தொடர்பு" },
    contact_title: { en: "We Would Love to Hear From You", ta: "உங்களுடன் உரையாட விரும்புகிறோம்" },
    contact_desc: {
        en: "Join hands with Ilangathir Trust. Your simple encouragement or small support creates a lasting ripple of hope.",
        ta: "இளங்கதிர் அறக்கட்டளையோடு இணையுங்கள். உங்கள் சிறிய உதவியும் ஒரு ஏழை குடும்பத்தின் வாழ்வில் பெரும் வெளிச்சத்தை ஏற்றும்."
    },
    contact_address_title: { en: "Our Trust Office", ta: "எங்கள் அலுவலக முகவரி" },
    contact_phone_title: { en: "Call Directly", ta: "தொலைபேசி எண்" },
    contact_email_title: { en: "Email Inquiries", ta: "மின்னஞ்சல் முகவரி" },
    contact_hours_title: { en: "Office Hours", ta: "செயல்படும் நேரம்" },
    contact_hours_val: {
        en: "Monday – Saturday: 9:00 AM – 6:00 PM",
        ta: "திங்கள் – சனி: காலை 9:00 – மாலை 6:00"
    },
    site_address: {
        en: "Kallupatti, Dindigul - 624307, Tamil Nadu, India",
        ta: "கல்லுப்பட்டி, திண்டுக்கல் - 624307, தமிழ்நாடு, இந்தியா"
    },
    contact_reg_title: { en: "Legal Registration", ta: "அரசு பதிவு விவரம்" },

    // Donation & Bank Details
    bank_title: { en: "Bank Transfer Details (Donations)", ta: "நன்கொடைக்கான வங்கி விவரங்கள்" },
    bank_subtitle: { 
        en: "All donations are utilized directly for community food, student fees, and medical supplies.",
        ta: "அனைத்து நன்கொடைகளும் உணவு, கல்வி மற்றும் மருத்துவ உதவிகளுக்காக மட்டுமே முழுமையாகப் பயன்படுத்தப்படும்."
    },
    bank_acc_name: { en: "Account Name", ta: "கணக்கின் பெயர்" },
    bank_acc_num: { en: "Account Number", ta: "கணக்கு எண்" },
    bank_ifsc: { en: "IFSC Code", ta: "IFSC குறியீடு" },
    bank_name_label: { en: "Bank & Branch", ta: "வங்கி & கிளை" },
    bank_acc_type: { en: "Account Type", ta: "கணக்கின் வகை" },
    bank_upi_id: { en: "Direct UPI ID", ta: "UPI முகவரி" },
    btn_copy_upi: { en: "Copy UPI ID", ta: "UPI ஐ நகலெடுக்க" },
    upi_copied: { en: "UPI ID Copied to Clipboard!", ta: "UPI முகவரி நகலெடுக்கப்பட்டது!" },
    bank_note: {
        en: "After making a donation, kindly share a screenshot via WhatsApp or Email so we can send an official receipt and acknowledge your noble deed.",
        ta: "நன்கொடை செலுத்திய பின் அதன் விவரத்தை WhatsApp அல்லது மின்னஞ்சலில் பகிர்ந்தால், உரிய ரசீதை அனுப்பி வைக்க ஏதுவாக இருக்கும்."
    },

    // Interactive Form
    form_title: { en: "Send Us a Direct Message", ta: "செய்தி அனுப்புங்கள்" },
    form_name: { en: "Your Full Name", ta: "உங்கள் முழுப் பெயர்" },
    form_name_ph: { en: "e.g. Anand Kumar", ta: "எ.கா. ஆனந்த் குமார்" },
    form_phone: { en: "Phone Number", ta: "தொலைபேசி எண்" },
    form_phone_ph: { en: "+91 98765 XXXXX", ta: "+91 98765 XXXXX" },
    form_email: { en: "Email Address", ta: "மின்னஞ்சல் முகவரி" },
    form_email_ph: { en: "anand@example.com", ta: "anand@example.com" },
    form_subject: { en: "Subject / Purpose", ta: "பொருள் / காரணம்" },
    form_subject_ph: { en: "Volunteering, Donation or Inquiry", ta: "தன்னார்வம், நன்கொடை அல்லது உதவி" },
    form_message: { en: "Your Message", ta: "உங்கள் செய்தி" },
    form_message_ph: { en: "Please write your thoughts or how you would like to collaborate...", ta: "உங்கள் கருத்துக்கள் அல்லது நீங்கள் எவ்வாறு இணைந்து பணியாற்ற விரும்புகிறீர்கள் என்பதை எழுதுங்கள்..." },
    form_submit: { en: "Send Message", ta: "செய்தியை அனுப்பவும்" },
    form_submitting: { en: "Sending...", ta: "அனுப்பப்படுகிறது..." },
    form_success: { en: "Thank you! Your message has been sent successfully. We will reply shortly.", ta: "நன்றி! உங்கள் செய்தி வெற்றிகரமாக அனுப்பப்பட்டது. விரைவில் தொடர்பு கொள்கிறோம்." },

    // Call to Action (CTA Section)
    cta_title: {
        en: 'Be the Reason Someone <span class="accent">Smiles Today</span>',
        ta: 'ஒருவரின் முகத்தில் <span class="accent">புன்னகைக்கு நீங்களே காரணமாகுங்கள்</span>'
    },
    cta_desc: {
        en: "Your generous contribution, whether through financial donations, volunteering your valuable time, or sharing our mission with friends, directly changes lives.",
        ta: "நீங்கள் வழங்கும் சிறு நன்கொடையோ அல்லது செலவிடும் சிறிது நேரமோ, பல ஏழைக் குடும்பங்களின் வாழ்வில் நீடித்த வெளிச்சத்தை உருவாக்கும்."
    },

    // Footer
    footer_tagline: {
        en: "Ilangathir Trust is a registered non-profit organization dedicated to fostering human dignity through sustainable nutrition, education, and social welfare programs.",
        ta: "இளங்கதிர் அறக்கட்டளை, பசிப்பிணி நீக்கல், ஏழை மாணவர் கல்வி மற்றும் முதியோர் நலன் காக்கும் உயரிய நோக்கோடு செயல்படும் ஒரு பதிவு செய்யப்பட்ட அறக்கட்டளை."
    },
    footer_quick_links: { en: "Quick Navigation", ta: "விரைவு இணைப்புகள்" },
    footer_our_services: { en: "Our Service Verticals", ta: "எங்கள் சேவைகள்" },
    footer_contact_info: { en: "Trust Contact Info", ta: "தொடர்பு விவரங்கள்" },
    footer_transparency: { en: "100% Volunteer Driven & Transparent", ta: "100% தன்னார்வப் பணி & வெளிப்படையானது" },
    footer_copyright: {
        en: "© 2024–2026 Ilangathir Trust. All rights reserved. Registered Charitable Trust.",
        ta: "© 2024–2026 இளங்கதிர் அறக்கட்டளை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை."
    },

    // Quick Donation Drawer / Modal
    modal_donate_title: { en: "Support Ilangathir Trust", ta: "இளங்கதிர் அறக்கட்டளைக்கு நன்கொடை" },
    modal_donate_desc: {
        en: "Every rupee you give feeds a hungry elder or helps a rural student stay in school. Thank you for your kindness!",
        ta: "நீங்கள் தரும் ஒவ்வொரு ரூபாயும் ஒரு முதியவரின் பசியைப் போக்கவும், ஒரு ஏழை மாணவர் கல்வி பயிலவும் உதவுகிறது. நன்றி!"
    },
    modal_close: { en: "Close", ta: "மூடுக" }
};
