/* ============================================================
   ILANGATHIR TRUST — Shared JavaScript
   Navigation, translations, animations, and common utilities
   ============================================================ */

// ─── Site Configuration ───
const SITE = {
    name: { en: 'Ilangathir Trust', ta: 'இளங்கதிர் அறக்கட்டளை' },
    tagline: {
        en: 'Rather than folding both hands to pray to God, extend one hand to help — two hands will worship you as God…',
        ta: 'இரு கரம் கூப்பி கடவுளை வணங்குவதை விட ஒரு கரம் நீட்டி உதவி செய் இரு கரம் உன்னை வணங்கும் கடவுளாக…'
    },
    sub: { en: 'Charitable Trust', ta: 'அறக்கட்டளை' },
    founded: '2024-01-01',
    address: {
        en: 'Kallupatti, Dindigul - 624307, Tamil Nadu, India',
        ta: 'கல்லுப்பட்டி, திண்டுக்கல் - 624307, தமிழ்நாடு, இந்தியா'
    },
    phone1: '+91 XXXXX XXXXX',
    phone2: '+91 XXXXX XXXXX',
    email: 'info@ilangathirtrust.org',
    social: {
        facebook: '#',
        instagram: '#',
        whatsapp: '#',
        youtube: '#'
    }
};

// ─── Translations Dictionary ───
const i18n = {
    // Navigation
    nav_home: { en: 'Home', ta: 'முகப்பு' },
    nav_about: { en: 'About', ta: 'எங்களைப் பற்றி' },
    nav_services: { en: 'Services', ta: 'சேவைகள்' },
    nav_gallery: { en: 'Gallery', ta: 'படத்தொகுப்பு' },
    nav_contact: { en: 'Contact', ta: 'தொடர்பு' },
    btn_donate: { en: 'Donate Now', ta: 'நன்கொடை' },

    // Hero
    hero_title: {
        en: 'Empowering Lives,<br><span class="accent">Building Hope</span>',
        ta: 'வாழ்க்கையை மேம்படுத்துதல்,<br><span class="accent">நம்பிக்கையை உருவாக்குதல்</span>'
    },
    hero_subtitle: {
        en: 'Ilangathir Trust is dedicated to uplifting communities in Kallupatti, Dindigul through compassion, education, and sustainable welfare programs.',
        ta: 'இளங்கதிர் அறக்கட்டளை, கல்லுப்பட்டி, திண்டுக்கல் பகுதியில் இரக்கம், கல்வி மற்றும் நிலையான நலத்திட்டங்கள் மூலம் சமூகங்களை உயர்த்துவதற்கு அர்ப்பணிக்கப்பட்டுள்ளது.'
    },
    btn_learn_more: { en: 'Learn More', ta: 'மேலும் அறிய' },
    btn_our_services: { en: 'Our Services', ta: 'எங்கள் சேவைகள்' },
    btn_get_involved: { en: 'Get Involved', ta: 'இணையுங்கள்' },

    // Stats
    stat_lives: { en: 'Lives Impacted', ta: 'பயனடைந்தவர்கள்' },
    stat_programs: { en: 'Programs Active', ta: 'செயலில் உள்ள திட்டங்கள்' },
    stat_volunteers: { en: 'Volunteers', ta: 'தொண்டர்கள்' },
    stat_years: { en: 'Year Founded', ta: 'நிறுவப்பட்ட ஆண்டு' },

    // About
    about_label: { en: 'WHO WE ARE', ta: 'நாங்கள் யார்' },
    about_title: {
        en: 'A Beacon of Hope in <span class="accent">Kallupatti</span>',
        ta: '<span class="accent">கல்லுப்பட்டியில்</span> நம்பிக்கையின் ஒளிவிளக்கு'
    },
    about_p1: {
        en: 'Ilangathir Trust was established on January 1, 2024, with a profound mission to serve the underprivileged communities in and around Kallupatti, Dindigul district, Tamil Nadu. The name "Ilangathir" symbolizes the first ray of dawn — bringing light, warmth, and hope for a new beginning.',
        ta: 'இளங்கதிர் அறக்கட்டளை 2024 ஜனவரி 1 அன்று நிறுவப்பட்டது. கல்லுப்பட்டி, திண்டுக்கல் மாவட்டம் மற்றும் அதன் சுற்றுப்புற பகுதிகளில் உள்ள ஏழைகள் மற்றும் நலிவடைந்த சமூகங்களுக்கு சேவை செய்யும் ஆழமான நோக்கத்துடன் தொடங்கப்பட்டது. "இளங்கதிர்" என்ற பெயர் விடியலின் முதல் கதிரைக் குறிக்கிறது — ஒளியையும், அரவணைப்பையும், புதிய தொடக்கத்தையும் தரும் நம்பிக்கை.'
    },
    about_p2: {
        en: 'We believe that true worship lies not just in prayer, but in extending a helping hand to those in need. Our trust works across education, healthcare, food distribution, elderly care, and community empowerment.',
        ta: 'உண்மையான வழிபாடு என்பது வெறும் பிரார்த்தனையில் மட்டுமல்ல, தேவைப்படுவோருக்கு உதவிக்கரம் நீட்டுவதிலும் உள்ளது என்று நாங்கள் நம்புகிறோம். கல்வி, சுகாதாரம், உணவு வழங்கல், முதியோர் பராமரிப்பு மற்றும் சமூக மேம்பாடு ஆகிய துறைகளில் எங்கள் அறக்கட்டளை செயல்படுகிறது.'
    },
    about_highlight: {
        en: '"Rather than folding both hands to pray to God, extend one hand to help — two hands will worship you as God…"',
        ta: '"இரு கரம் கூப்பி கடவுளை வணங்குவதை விட ஒரு கரம் நீட்டி உதவி செய் இரு கரம் உன்னை வணங்கும் கடவுளாக…"'
    },

    // Vision / Mission
    vision_title: { en: 'Our Vision', ta: 'எங்கள் தொலைநோக்கு' },
    vision_desc: {
        en: 'To create a compassionate society where every individual, regardless of background, has access to basic needs, education, and opportunities for a dignified life.',
        ta: 'பின்னணி எதுவாக இருந்தாலும், ஒவ்வொரு நபரும் அடிப்படைத் தேவைகள், கல்வி மற்றும் கண்ணியமான வாழ்க்கைக்கான வாய்ப்புகளைப் பெறும் ஒரு இரக்கமுள்ள சமூகத்தை உருவாக்குவது.'
    },
    mission_title: { en: 'Our Mission', ta: 'எங்கள் நோக்கம்' },
    mission_desc: {
        en: 'To identify, support, and empower the most vulnerable communities through sustainable programs in education, healthcare, food security, and holistic community development.',
        ta: 'கல்வி, சுகாதாரம், உணவுப் பாதுகாப்பு மற்றும் முழுமையான சமூக மேம்பாடு ஆகிய துறைகளில் நிலையான திட்டங்கள் மூலம் மிகவும் பாதிக்கப்படக்கூடிய சமூகங்களைக் கண்டறிந்து, ஆதரிப்பதும், மேம்படுத்துவதும்.'
    },

    // Values
    values_label: { en: 'OUR VALUES', ta: 'எங்கள் மதிப்புகள்' },
    values_title: { en: 'What Drives Us', ta: 'எங்களை இயக்குவது' },
    val_compassion: { en: 'Compassion', ta: 'இரக்கம்' },
    val_compassion_d: {
        en: 'Every action we take is rooted in genuine empathy and care for those we serve.',
        ta: 'நாங்கள் செய்யும் ஒவ்வொரு செயலும் உண்மையான பச்சாதாபம் மற்றும் அக்கறையில் வேரூன்றியது.'
    },
    val_transparency: { en: 'Transparency', ta: 'வெளிப்படைத்தன்மை' },
    val_transparency_d: {
        en: 'We maintain complete openness in our operations, finances, and decision-making processes.',
        ta: 'எங்கள் செயல்பாடுகள், நிதி மற்றும் முடிவெடுக்கும் செயல்முறைகளில் முழுமையான வெளிப்படைத்தன்மையை பராமரிக்கிறோம்.'
    },
    val_integrity: { en: 'Integrity', ta: 'நேர்மை' },
    val_integrity_d: {
        en: 'We uphold the highest ethical standards in everything we do, earning trust through honest service.',
        ta: 'நாங்கள் செய்யும் எல்லாவற்றிலும் மிக உயர்ந்த நெறிமுறைத் தரங்களை நிலைநிறுத்துகிறோம்.'
    },
    val_community: { en: 'Community', ta: 'சமூகம்' },
    val_community_d: {
        en: 'We believe in the power of community-driven change and inclusive development for all.',
        ta: 'சமூகம் இயக்கும் மாற்றம் மற்றும் அனைவருக்கும் உள்ளடக்கிய வளர்ச்சியின் ஆற்றலை நாங்கள் நம்புகிறோம்.'
    },
    val_sustainability: { en: 'Sustainability', ta: 'நிலைத்தன்மை' },
    val_sustainability_d: {
        en: 'Our programs are designed for lasting impact, creating self-sufficient communities over time.',
        ta: 'எங்கள் திட்டங்கள் நீடித்த தாக்கத்திற்காக வடிவமைக்கப்பட்டுள்ளன.'
    },
    val_empowerment: { en: 'Empowerment', ta: 'அதிகாரமளித்தல்' },
    val_empowerment_d: {
        en: 'We enable individuals and families to become self-reliant through skill-building and support.',
        ta: 'திறன் வளர்ப்பு மற்றும் ஆதரவின் மூலம் தனிநபர்களையும் குடும்பங்களையும் தன்னிறைவு பெற உதவுகிறோம்.'
    },

    // Services
    services_label: { en: 'WHAT WE DO', ta: 'நாங்கள் என்ன செய்கிறோம்' },
    services_title: { en: 'Our Programs & Services', ta: 'எங்கள் திட்டங்கள் & சேவைகள்' },
    services_desc: {
        en: 'We operate across multiple verticals to provide holistic support to communities in need.',
        ta: 'தேவைப்படும் சமூகங்களுக்கு முழுமையான ஆதரவை வழங்க பல்வேறு துறைகளில் செயல்படுகிறோம்.'
    },

    svc_food_title: { en: 'Food Distribution', ta: 'உணவு வழங்கல்' },
    svc_food_desc: {
        en: 'Regular meal distribution programs ensuring no one in our community goes hungry. We provide nutritious meals to underprivileged families and individuals.',
        ta: 'எங்கள் சமூகத்தில் யாரும் பசியால் வாடக்கூடாது என்பதை உறுதி செய்யும் வழக்கமான உணவு வழங்கல் திட்டங்கள். ஏழை குடும்பங்களுக்கும் தனிநபர்களுக்கும் சத்தான உணவுகளை வழங்குகிறோம்.'
    },
    svc_edu_title: { en: 'Education Support', ta: 'கல்வி ஆதரவு' },
    svc_edu_desc: {
        en: 'Scholarships, school supplies, and educational mentoring for underprivileged children. Empowering the next generation through knowledge.',
        ta: 'ஏழை குழந்தைகளுக்கான உதவித்தொகைகள், பள்ளி பொருட்கள் மற்றும் கல்வி வழிகாட்டுதல். அறிவின் மூலம் அடுத்த தலைமுறையை மேம்படுத்துதல்.'
    },
    svc_health_title: { en: 'Health Camps', ta: 'மருத்துவ முகாம்கள்' },
    svc_health_desc: {
        en: 'Free medical check-ups, health awareness programs, and assistance for critical treatments in rural communities.',
        ta: 'கிராமப்புற சமூகங்களில் இலவச மருத்துவ பரிசோதனைகள், சுகாதார விழிப்புணர்வு திட்டங்கள் மற்றும் முக்கிய சிகிச்சைகளுக்கான உதவிகள்.'
    },
    svc_elderly_title: { en: 'Elderly Care', ta: 'முதியோர் பராமரிப்பு' },
    svc_elderly_desc: {
        en: 'Support and care for senior citizens who lack family support, ensuring they live with dignity and comfort.',
        ta: 'குடும்ப ஆதரவு இல்லாத மூத்த குடிமக்களுக்கு ஆதரவு மற்றும் பராமரிப்பு, அவர்கள் கண்ணியமாகவும் வசதியாகவும் வாழ்வதை உறுதி செய்தல்.'
    },
    svc_welfare_title: { en: 'Community Welfare', ta: 'சமூக நலன்' },
    svc_welfare_desc: {
        en: 'Clothing drives, emergency relief, festival celebrations, and community development initiatives for a stronger society.',
        ta: 'ஒரு வலிமையான சமூகத்திற்கான ஆடை வழங்கல், அவசர நிவாரணம், பண்டிகை கொண்டாட்டங்கள் மற்றும் சமூக மேம்பாட்டு முயற்சிகள்.'
    },
    svc_women_title: { en: 'Women Empowerment', ta: 'பெண்கள் மேம்பாடு' },
    svc_women_desc: {
        en: 'Skill development, self-help group support, and financial literacy programs for women to achieve independence.',
        ta: 'பெண்கள் சுதந்திரம் பெற திறன் மேம்பாடு, சுய உதவிக் குழு ஆதரவு மற்றும் நிதி எழுத்தறிவு திட்டங்கள்.'
    },

    // Gallery
    gallery_label: { en: 'OUR MOMENTS', ta: 'எங்கள் தருணங்கள்' },
    gallery_title: { en: 'Gallery', ta: 'படத்தொகுப்பு' },
    gallery_desc: {
        en: 'Capturing moments of compassion, service, and community togetherness.',
        ta: 'இரக்கம், சேவை மற்றும் சமூக ஒற்றுமையின் தருணங்களைப் படம்பிடிக்கிறோம்.'
    },
    filter_all: { en: 'All', ta: 'அனைத்தும்' },
    filter_food: { en: 'Food', ta: 'உணவு' },
    filter_education: { en: 'Education', ta: 'கல்வி' },
    filter_events: { en: 'Events', ta: 'நிகழ்வுகள்' },
    filter_community: { en: 'Community', ta: 'சமூகம்' },

    // Contact
    contact_label: { en: 'GET IN TOUCH', ta: 'தொடர்புகொள்ளுங்கள்' },
    contact_title: { en: 'Contact Us', ta: 'எங்களை தொடர்புகொள்ளுங்கள்' },
    contact_desc: {
        en: 'Have questions or want to get involved? We\'d love to hear from you.',
        ta: 'கேள்விகள் உள்ளதா அல்லது இணைய விரும்புகிறீர்களா? உங்களிடமிருந்து கேட்க விரும்புகிறோம்.'
    },
    contact_address_title: { en: 'Our Address', ta: 'எங்கள் முகவரி' },
    contact_phone_title: { en: 'Phone', ta: 'தொலைபேசி' },
    contact_email_title: { en: 'Email', ta: 'மின்னஞ்சல்' },
    contact_hours_title: { en: 'Working Hours', ta: 'செயல்படும் நேரம்' },
    contact_hours_val: {
        en: 'Monday – Saturday: 9:00 AM – 6:00 PM',
        ta: 'திங்கள் – சனி: காலை 9:00 – மாலை 6:00'
    },
    form_title: { en: 'Send a Message', ta: 'செய்தி அனுப்புங்கள்' },
    form_name: { en: 'Your Name', ta: 'உங்கள் பெயர்' },
    form_email: { en: 'Your Email', ta: 'உங்கள் மின்னஞ்சல்' },
    form_phone: { en: 'Phone Number', ta: 'தொலைபேசி எண்' },
    form_subject: { en: 'Subject', ta: 'பொருள்' },
    form_message: { en: 'Your Message', ta: 'உங்கள் செய்தி' },
    form_submit: { en: 'Send Message', ta: 'செய்தி அனுப்பு' },
    bank_title: { en: 'Bank Details for Donations', ta: 'நன்கொடைக்கான வங்கி விவரங்கள்' },

    // CTA
    cta_title: {
        en: 'Join Us in Making a Difference',
        ta: 'மாற்றத்தை ஏற்படுத்த எங்களுடன் இணையுங்கள்'
    },
    cta_desc: {
        en: 'Every contribution, whether time, money, or skills, helps us create lasting positive change in our community.',
        ta: 'ஒவ்வொரு பங்களிப்பும், நேரம், பணம் அல்லது திறன் எதுவாக இருந்தாலும், எங்கள் சமூகத்தில் நீடித்த நேர்மறையான மாற்றத்தை உருவாக்க உதவுகிறது.'
    },
    btn_volunteer: { en: 'Volunteer', ta: 'தொண்டு' },
    btn_contact_us: { en: 'Contact Us', ta: 'தொடர்பு' },

    // Footer
    footer_about: {
        en: 'Ilangathir Trust is a charitable organization dedicated to uplifting communities through compassion, education, and sustainable welfare programs since 2024.',
        ta: 'இளங்கதிர் அறக்கட்டளை 2024 முதல் இரக்கம், கல்வி மற்றும் நிலையான நலத்திட்டங்கள் மூலம் சமூகங்களை உயர்த்துவதற்கு அர்ப்பணிக்கப்பட்ட ஒரு அறக்கட்டளை.'
    },
    footer_quick_links: { en: 'Quick Links', ta: 'விரைவு இணைப்புகள்' },
    footer_our_services: { en: 'Our Services', ta: 'எங்கள் சேவைகள்' },
    footer_contact_info: { en: 'Contact Info', ta: 'தொடர்பு தகவல்' },
    footer_copyright: {
        en: '© 2024 Ilangathir Trust. All rights reserved.',
        ta: '© 2024 இளங்கதிர் அறக்கட்டளை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.'
    },

    // About page specific
    about_page_title: { en: 'About Us', ta: 'எங்களைப் பற்றி' },
    about_page_desc: {
        en: 'Learn about our journey, values, and the people behind Ilangathir Trust.',
        ta: 'எங்கள் பயணம், மதிப்புகள் மற்றும் இளங்கதிர் அறக்கட்டளையின் பின்னணியில் உள்ள நபர்களைப் பற்றி அறியுங்கள்.'
    },
    story_label: { en: 'OUR STORY', ta: 'எங்கள் கதை' },
    story_title: { en: 'How It All Began', ta: 'இது எப்படி தொடங்கியது' },
    story_p1: {
        en: 'Ilangathir Trust was born from a simple yet powerful vision — that every person deserves dignity, care, and the opportunity to thrive. Founded on January 1, 2024, in the heart of Kallupatti, Dindigul, the trust began as a small group of dedicated individuals who saw the struggles of their community and decided to act.',
        ta: 'இளங்கதிர் அறக்கட்டளை ஒரு எளிய ஆனால் சக்திவாய்ந்த தொலைநோக்கிலிருந்து பிறந்தது — ஒவ்வொரு நபரும் கண்ணியம், பராமரிப்பு மற்றும் வளர்ச்சிக்கான வாய்ப்பைப் பெற தகுதியானவர். 2024 ஜனவரி 1 அன்று, கல்லுப்பட்டி, திண்டுக்கல் நகரின் மையத்தில் நிறுவப்பட்ட இந்த அறக்கட்டளை, தங்கள் சமூகத்தின் போராட்டங்களைக் கண்ட ஒரு சிறிய குழுவினரால் தொடங்கப்பட்டது.'
    },
    story_p2: {
        en: 'From distributing meals to providing educational support, from organizing health camps to caring for the elderly, the trust rapidly grew to become a pillar of support for the underprivileged in the region.',
        ta: 'உணவு வழங்கல் முதல் கல்வி ஆதரவு வழங்குவது வரை, மருத்துவ முகாம்கள் நடத்துவது முதல் முதியோர் பராமரிப்பு வரை, இந்த அறக்கட்டளை விரைவாக வளர்ந்து பிராந்தியத்தில் உள்ள ஏழைகளுக்கு ஒரு ஆதரவுத் தூணாக மாறியது.'
    },
    timeline_label: { en: 'OUR JOURNEY', ta: 'எங்கள் பயணம்' },
    timeline_title: { en: 'Milestones', ta: 'மைல்கற்கள்' },

    // Timeline items
    tl1_date: { en: 'January 2024', ta: 'ஜனவரி 2024' },
    tl1_title: { en: 'Trust Founded', ta: 'அறக்கட்டளை நிறுவப்பட்டது' },
    tl1_desc: {
        en: 'Ilangathir Trust officially registered and began operations in Kallupatti, Dindigul.',
        ta: 'இளங்கதிர் அறக்கட்டளை அதிகாரப்பூர்வமாக பதிவு செய்யப்பட்டு கல்லுப்பட்டி, திண்டுக்கல்லில் செயல்படத் தொடங்கியது.'
    },
    tl2_date: { en: 'March 2024', ta: 'மார்ச் 2024' },
    tl2_title: { en: 'First Food Drive', ta: 'முதல் உணவு வழங்கல்' },
    tl2_desc: {
        en: 'Launched our inaugural food distribution program, serving 100+ families.',
        ta: 'எங்கள் முதல் உணவு வழங்கல் திட்டத்தைத் தொடங்கி, 100+ குடும்பங்களுக்கு உணவு வழங்கினோம்.'
    },
    tl3_date: { en: 'June 2024', ta: 'ஜூன் 2024' },
    tl3_title: { en: 'Education Initiative', ta: 'கல்வி முயற்சி' },
    tl3_desc: {
        en: 'Started providing school supplies and scholarships to underprivileged students.',
        ta: 'ஏழை மாணவர்களுக்கு பள்ளி பொருட்கள் மற்றும் உதவித்தொகைகள் வழங்கத் தொடங்கினோம்.'
    },
    tl4_date: { en: '2025 & Beyond', ta: '2025 மற்றும் அதற்கு அப்பால்' },
    tl4_title: { en: 'Growing Impact', ta: 'வளரும் தாக்கம்' },
    tl4_desc: {
        en: 'Expanding our programs to reach more communities and create sustainable change.',
        ta: 'மேலும் சமூகங்களை சென்றடையவும் நிலையான மாற்றத்தை உருவாக்கவும் எங்கள் திட்டங்களை விரிவுபடுத்துதல்.'
    },

    // Services page
    services_page_title: { en: 'Our Services', ta: 'எங்கள் சேவைகள்' },
    services_page_desc: {
        en: 'Discover the programs and initiatives through which we serve our community.',
        ta: 'எங்கள் சமூகத்திற்கு சேவை செய்யும் திட்டங்கள் மற்றும் முயற்சிகளைக் கண்டறியுங்கள்.'
    },

    // Gallery page
    gallery_page_title: { en: 'Photo Gallery', ta: 'படத்தொகுப்பு' },
    gallery_page_desc: {
        en: 'Moments captured during our events and community service activities.',
        ta: 'எங்கள் நிகழ்வுகள் மற்றும் சமூக சேவை நடவடிக்கைகளின் போது எடுக்கப்பட்ட தருணங்கள்.'
    },

    // Contact page
    contact_page_title: { en: 'Contact Us', ta: 'எங்களை தொடர்புகொள்ளுங்கள்' },
    contact_page_desc: {
        en: 'Reach out to us for volunteering, donations, or any inquiries.',
        ta: 'தொண்டு, நன்கொடை அல்லது ஏதேனும் விசாரணைகளுக்கு எங்களை தொடர்புகொள்ளுங்கள்.'
    },
};

// ─── Current Language ───
let currentLang = localStorage.getItem('ilangathir_lang') || 'en';

// ─── Get translated text ───
function t(key) {
    const entry = i18n[key];
    if (!entry) return key;
    return entry[currentLang] || entry.en || key;
}

// ─── Set Language ───
function setLang(lang) {
    currentLang = lang;
    localStorage.setItem('ilangathir_lang', lang);
    document.documentElement.lang = lang;

    // Update all [data-i18n] elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const val = t(key);
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
            el.placeholder = val;
        } else if (el.hasAttribute('data-i18n-html')) {
            el.innerHTML = val;
        } else {
            el.textContent = val;
        }
    });

    // Update lang toggle buttons
    document.querySelectorAll('.lang-toggle button, .drawer-lang-toggle button').forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-pressed', 'false');
    });
    document.querySelectorAll(`[data-lang="${lang}"]`).forEach(btn => {
        btn.classList.add('active');
        btn.setAttribute('aria-pressed', 'true');
    });
}

// ─── Inject Navigation ───
function injectNavbar(activePage) {
    const navHTML = `
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="top-bar-inner container-wide">
            <div class="top-contact-group">
                <a href="mailto:${SITE.email}"><i class="fa-solid fa-envelope"></i> ${SITE.email}</a>
                <span class="sep">|</span>
                <a href="tel:${SITE.phone1.replace(/\s/g, '')}"><i class="fa-solid fa-phone"></i> ${SITE.phone1}</a>
            </div>
            <div class="top-bar-right">
                <a href="contact.html"><i class="fa-solid fa-location-dot"></i> <span data-i18n="contact_address_title">${t('contact_address_title')}</span>: <span data-i18n="nav_contact">${t('nav_contact')}</span></a>
                <div class="top-social">
                    <a href="${SITE.social.facebook}" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="${SITE.social.instagram}" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    <a href="${SITE.social.whatsapp}" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="${SITE.social.youtube}" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </div>

    <!-- Navbar -->
    <nav class="navbar" id="navbar" aria-label="Main navigation">
        <div class="nav-inner container-wide">
            <a href="index.html" class="logo-group" aria-label="${SITE.name.en}">
                <div class="logo-ring">
                    <i class="fa-solid fa-hands-holding-child"></i>
                </div>
                <div class="logo-text">
                    <div class="name">${SITE.name.ta}</div>
                    <div class="sub">${SITE.name.en}</div>
                </div>
            </a>

            <div class="nav-links">
                <a href="index.html" class="${activePage === 'home' ? 'active' : ''}" data-i18n="nav_home">${t('nav_home')}</a>
                <a href="about.html" class="${activePage === 'about' ? 'active' : ''}" data-i18n="nav_about">${t('nav_about')}</a>
                <a href="services.html" class="${activePage === 'services' ? 'active' : ''}" data-i18n="nav_services">${t('nav_services')}</a>
                <a href="gallery.html" class="${activePage === 'gallery' ? 'active' : ''}" data-i18n="nav_gallery">${t('nav_gallery')}</a>
                <a href="contact.html" class="${activePage === 'contact' ? 'active' : ''}" data-i18n="nav_contact">${t('nav_contact')}</a>
            </div>

            <div class="nav-cta-group">
                <div class="lang-toggle">
                    <button data-lang="ta" onclick="setLang('ta')" aria-pressed="${currentLang === 'ta'}" class="${currentLang === 'ta' ? 'active' : ''}">த</button>
                    <button data-lang="en" onclick="setLang('en')" aria-pressed="${currentLang === 'en'}" class="${currentLang === 'en' ? 'active' : ''}">En</button>
                </div>
                <a href="contact.html" class="btn btn-amber" data-i18n="btn_donate">${t('btn_donate')}</a>
                <button class="mobile-menu-btn" onclick="openDrawer()" aria-label="Open menu" id="menuBtn">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    </nav>

    <!-- Mobile Drawer -->
    <div class="mobile-drawer-overlay" id="drawerOverlay" onclick="closeDrawer()">
        <div class="mobile-drawer" onclick="event.stopPropagation()">
            <button class="close-btn" onclick="closeDrawer()" aria-label="Close menu"><i class="fa-solid fa-xmark"></i></button>
            <div class="drawer-lang-toggle lang-toggle" style="margin-bottom:20px;">
                <button data-lang="ta" onclick="setLang('ta')" class="${currentLang === 'ta' ? 'active' : ''}">தமிழ்</button>
                <button data-lang="en" onclick="setLang('en')" class="${currentLang === 'en' ? 'active' : ''}">English</button>
            </div>
            <a href="index.html" class="menu-link" data-i18n="nav_home">${t('nav_home')}</a>
            <a href="about.html" class="menu-link" data-i18n="nav_about">${t('nav_about')}</a>
            <a href="services.html" class="menu-link" data-i18n="nav_services">${t('nav_services')}</a>
            <a href="gallery.html" class="menu-link" data-i18n="nav_gallery">${t('nav_gallery')}</a>
            <a href="contact.html" class="menu-link" data-i18n="nav_contact">${t('nav_contact')}</a>
            <div class="drawer-cta">
                <a href="contact.html" class="btn btn-amber" style="width:100%;text-align:center;" data-i18n="btn_donate">${t('btn_donate')}</a>
            </div>
        </div>
    </div>`;

    // Add custom translation for site name
    i18n.site_name = { en: SITE.name.en, ta: SITE.name.ta };
    i18n.site_sub = { en: SITE.sub.en, ta: SITE.sub.ta };

    const headerEl = document.getElementById('site-header');
    if (headerEl) headerEl.innerHTML = navHTML;
}

// ─── Inject Footer ───
function injectFooter() {
    const footerHTML = `
    <div class="container">
        <div class="footer-grid">
            <div class="footer-brand">
                <div class="footer-logo">
                    <div class="footer-logo-ring">
                        <i class="fa-solid fa-hands-holding-child"></i>
                    </div>
                    <div class="footer-logo-text">
                        <div class="name">${SITE.name.ta}</div>
                        <div class="sub">${SITE.name.en}</div>
                    </div>
                </div>
                <p data-i18n="footer_about">${t('footer_about')}</p>
                <div class="footer-social">
                    <a href="${SITE.social.facebook}" aria-label="Facebook"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="${SITE.social.instagram}" aria-label="Instagram"><i class="fa-brands fa-instagram"></i></a>
                    <a href="${SITE.social.whatsapp}" aria-label="WhatsApp"><i class="fa-brands fa-whatsapp"></i></a>
                    <a href="${SITE.social.youtube}" aria-label="YouTube"><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>

            <div class="footer-col">
                <h4 data-i18n="footer_quick_links">${t('footer_quick_links')}</h4>
                <ul>
                    <li><a href="index.html" data-i18n="nav_home">${t('nav_home')}</a></li>
                    <li><a href="about.html" data-i18n="nav_about">${t('nav_about')}</a></li>
                    <li><a href="services.html" data-i18n="nav_services">${t('nav_services')}</a></li>
                    <li><a href="gallery.html" data-i18n="nav_gallery">${t('nav_gallery')}</a></li>
                    <li><a href="contact.html" data-i18n="nav_contact">${t('nav_contact')}</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4 data-i18n="footer_our_services">${t('footer_our_services')}</h4>
                <ul>
                    <li><a href="services.html" data-i18n="svc_food_title">${t('svc_food_title')}</a></li>
                    <li><a href="services.html" data-i18n="svc_edu_title">${t('svc_edu_title')}</a></li>
                    <li><a href="services.html" data-i18n="svc_health_title">${t('svc_health_title')}</a></li>
                    <li><a href="services.html" data-i18n="svc_elderly_title">${t('svc_elderly_title')}</a></li>
                    <li><a href="services.html" data-i18n="svc_welfare_title">${t('svc_welfare_title')}</a></li>
                </ul>
            </div>

            <div class="footer-col">
                <h4 data-i18n="footer_contact_info">${t('footer_contact_info')}</h4>
                <div class="footer-contact-item">
                    <i class="fa-solid fa-location-dot"></i>
                    <p data-i18n="site_address">${currentLang === 'ta' ? SITE.address.ta : SITE.address.en}</p>
                </div>
                <div class="footer-contact-item">
                    <i class="fa-solid fa-phone"></i>
                    <p>${SITE.phone1}</p>
                </div>
                <div class="footer-contact-item">
                    <i class="fa-solid fa-envelope"></i>
                    <p>${SITE.email}</p>
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <span data-i18n="footer_copyright">${t('footer_copyright')}</span>
        </div>
    </div>`;

    i18n.site_address = { en: SITE.address.en, ta: SITE.address.ta };

    const footerEl = document.getElementById('site-footer');
    if (footerEl) footerEl.innerHTML = footerHTML;
}

// ─── Mobile Drawer ───
function openDrawer() {
    document.getElementById('drawerOverlay').classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeDrawer() {
    document.getElementById('drawerOverlay').classList.remove('open');
    document.body.style.overflow = '';
}

// ─── Navbar Scroll Effect ───
function initNavScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 60) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, { passive: true });
}

// ─── Scroll Reveal Animations ───
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (!reveals.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

// ─── Animated Counter ───
function animateCounters() {
    const counters = document.querySelectorAll('[data-count]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = el.getAttribute('data-count');
                const isNumber = !isNaN(target);

                if (isNumber) {
                    const num = parseInt(target);
                    const suffix = el.getAttribute('data-suffix') || '';
                    const prefix = el.getAttribute('data-prefix') || '';
                    let current = 0;
                    const step = Math.max(1, Math.floor(num / 60));
                    const timer = setInterval(() => {
                        current += step;
                        if (current >= num) {
                            current = num;
                            clearInterval(timer);
                        }
                        el.textContent = prefix + current.toLocaleString() + suffix;
                    }, 25);
                } else {
                    el.textContent = target;
                }

                observer.unobserve(el);
            }
        });
    }, { threshold: 0.3 });

    counters.forEach(el => observer.observe(el));
}

// ─── Lightbox ───
function openLightbox(src) {
    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if (!lb || !img) return;
    img.src = src;
    lb.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (!lb) return;
    lb.classList.remove('open');
    document.body.style.overflow = '';
}

// ─── Initialize ───
function initSite(activePage) {
    // Set language from storage
    document.documentElement.lang = currentLang;

    // Inject nav and footer
    injectNavbar(activePage);
    injectFooter();

    // Apply translations
    setLang(currentLang);

    // Init interactions
    initNavScroll();
    initScrollReveal();
    animateCounters();

    // Close lightbox on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
            closeDrawer();
        }
    });
}
