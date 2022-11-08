// **Question-13**
// *tayyor*
// # 1: Yuqoridagi hammat testlar (jami 460)
'use strick';
// Array of Object;
const quiz = [
  {
    en: 'afraid',
    pron: '[əˈfreid] adj.',
    desc: 'When someone is afraid, they feel fear.',
    exam: 'The woman was <strong>afraid </strong>of what she saw.',
    vi: '',
    image: '1001.jpg',
    sound: '1001.mp3',
    bookNumber: 1,
    id: 1001,
    uz: "qo'rqmoq",
    uzOptions: ["qo'rqmoq", 'hurmat', 'reja', "mashg'ul bo'lmoq"],
    enOptions: ['afraid', 'maybe', 'peace', 'risk'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'agree',
    pron: '[əˈɡriː] v.',
    desc: 'To agree is to say “yes” or to think the same way.',
    exam: 'A: The food is very good in that restaurant. B: I <strong>agree </strong>with you.',
    vi: '',
    image: '1002.jpg',
    sound: '1002.mp3',
    bookNumber: 1,
    id: 1002,
    uz: "rozi bo'lmoq",
    uzOptions: ["rozi bo'lmoq", 'bir qator  tur', 'tarqalmoq', 'irq'],
    enOptions: ['agree', 'imagine', 'manage', 'appear'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'angry',
    pron: '[ˈæŋɡrɪ] adj.',
    desc: 'When someone is angry, they may want to speak loudly or fight.',
    exam: 'She didn&rsquo;t do her homework, so her father is <strong>angry</strong>.',
    vi: '',
    image: '1003.jpg',
    sound: '1003.mp3',
    bookNumber: 1,
    id: 1003,
    uz: 'jahlda',
    uzOptions: ['jahlda', 'prezident', 'talab', 'hayratlanmoq'],
    enOptions: ['angry', 'require', 'response', 'chemical'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'arrive',
    pron: '[əˈraɪv] v.',
    desc: 'To arrive is to get to or reach some place.',
    exam: 'The bus always <strong>arrives </strong>at the corner of my street at 4:00.',
    vi: '',
    image: '1004.jpg',
    sound: '1004.mp3',
    bookNumber: 1,
    id: 1004,
    uz: 'yetib kelmoq',
    uzOptions: ['yetib kelmoq', 'haqiqiy', 'yashamoq', 'jismoniy'],
    enOptions: ['arrive', 'scene', 'require', 'offer'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'attack',
    pron: '[əˈtæk] v.',
    desc: 'To attack is to try to fight or to hurt.',
    exam: 'The man with the sword <strong>attacked </strong>the other man first.',
    vi: '',
    image: '1005.jpg',
    sound: '1005.mp3',
    bookNumber: 1,
    id: 1005,
    uz: 'hujum qilmoq',
    uzOptions: ['hujum qilmoq', "ko'rinish", 'shuning uchun', "to'lqin"],
    enOptions: ['attack', 'tradition', 'identify', 'professional'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'bottom',
    pron: '[ˈbɒtəm] n.',
    desc: 'The bottom is the lowest part.',
    exam: 'The <strong>bottom </strong>of my shoe has a hole in it.',
    vi: '',
    image: '1006.jpg',
    sound: '1006.mp3',
    bookNumber: 1,
    id: 1006,
    uz: 'tagi  osti',
    uzOptions: ['tagi  osti', 'jadval', 'uchmoq', 'alohida'],
    enOptions: ['bottom', 'owe', 'risk', 'fix'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'clever',
    pron: '[ˈklɛv ər] adj.',
    desc: 'When someone is clever, they can solve a hard puzzle or problem.',
    exam: 'The <strong>clever </strong>boy thought of a good idea.',
    vi: '',
    image: '1007.jpg',
    sound: '1007.mp3',
    bookNumber: 1,
    id: 1007,
    uz: 'aqlli',
    uzOptions: ['aqlli', 'xodimlar', 'shaxsiyat', 'takidlamoq'],
    enOptions: ['clever', 'silly', 'accept', 'instruct'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'cruel',
    pron: '[ˈkruːəl] adj.',
    desc: 'When someone is cruel, they do bad things to hurt others.',
    exam: 'The <strong>cruel </strong>man yelled at his sister.',
    vi: '',
    image: '1008.jpg',
    sound: '1008.mp3',
    bookNumber: 1,
    id: 1008,
    uz: 'shafqatsiz',
    uzOptions: [
      'shafqatsiz',
      "erishmoq  ega bo'lmoq",
      'oldini olmoq',
      "do'kon  saqlamoq",
    ],
    enOptions: ['cruel', 'angry', 'attention', 'false'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'finally',
    pron: '[ˈfaɪnəlɪ] adv.',
    desc: 'If something happens finally, it happens after a longtime or at the end.',
    exam: 'He <strong>finally </strong>crossed the finish line after five hours of running.',
    vi: '',
    image: '1009.jpg',
    sound: '1009.mp3',
    bookNumber: 1,
    id: 1009,
    uz: 'nihoyat',
    uzOptions: ['nihoyat', "do'kon  saqlamoq", 'standart', "o'rganmoq"],
    enOptions: ['finally', 'dead', 'contribute', 'forest'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'hide',
    pron: '[haɪd] v.',
    desc: 'To hide is to try not to let others see you.',
    exam: 'The other children will <strong>hide </strong>while you count to 100.',
    vi: '',
    image: '1010.jpg',
    sound: '1010.mp3',
    bookNumber: 1,
    id: 1010,
    uz: 'yashirmoq',
    uzOptions: ['yashirmoq', 'azoblanmoq', 'payqamoq', 'akademiya'],
    enOptions: ['hide', 'prove', 'complex', 'field'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'hunt',
    pron: '[hʌnt] v.',
    desc: 'To hunt is to look for or search for an animal to kill.',
    exam: 'Long ago, people <strong>hunted </strong>with bows and arrows.',
    vi: '',
    image: '1011.jpg',
    sound: '1011.mp3',
    bookNumber: 1,
    id: 1011,
    uz: 'ovlamoq',
    uzOptions: ['ovlamoq', 'yaxshi', 'qadam', "bo'lim"],
    enOptions: ['hunt', 'pound', 'request', 'wise'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'lot',
    pron: '[lɒt] n.',
    desc: 'A lot means a large number or amount of people, animals, things, etc.',
    exam: 'There are a <strong>lot </strong>of apples in the basket.',
    vi: '',
    image: '1012.jpg',
    sound: '1012.mp3',
    bookNumber: 1,
    id: 1012,
    uz: "ko'p",
    uzOptions: ["ko'p", 'lahza', 'katta', 'tanlov'],
    enOptions: ['lot', 'laboratory', 'throw', 'pleasant'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'middle',
    pron: '[mɪdl] n.',
    desc: 'The middle of something is the center or halfway point.',
    exam: 'The Canadian flag has a maple leaf in the <strong>middle </strong>of it.',
    vi: '',
    image: '1013.jpg',
    sound: '1013.mp3',
    bookNumber: 1,
    id: 1013,
    uz: "o'rta",
    uzOptions: ["o'rta", 'tajriba', 'jiddiy', 'sayohat'],
    enOptions: ['middle', 'garbage', 'effect', 'essential'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'moment',
    pron: '[ˈmoʊmənt] n.',
    desc: 'A moment is a second or a very short time.',
    exam: 'I was only a few <strong>moments </strong>late for the meeting.',
    vi: '',
    image: '1014.jpg',
    sound: '1014.mp3',
    bookNumber: 1,
    id: 1014,
    uz: 'lahza',
    uzOptions: ['lahza', 'xato', 'maslahat', 'maqsad'],
    enOptions: ['moment', 'message', 'list', 'conversation'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'pleased',
    pron: '[pli:zd] adj.',
    desc: 'When someone is pleased, they are happy.',
    exam: 'She was <strong>pleased </strong>with the phone call she received.',
    vi: '',
    image: '1015.jpg',
    sound: '1015.mp3',
    bookNumber: 1,
    id: 1015,
    uz: 'mamnun',
    uzOptions: ['mamnun', "o'ziga xos", 'halollik', 'butun'],
    enOptions: ['pleased', 'marry', 'situated', 'purchase'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'promise',
    pron: '[ˈprɒmɪs] v.',
    desc: 'To promise is to say you will do something for sure.',
    exam: 'He <strong>promised </strong>to return my key by tomorrow.',
    vi: '',
    image: '1016.jpg',
    sound: '1016.mp3',
    bookNumber: 1,
    id: 1016,
    uz: "va'da bermoq",
    uzOptions: ["va'da bermoq", 'ozod qilmoq', 'davr', 'tagi  osti'],
    enOptions: ['promise', 'empty', 'ghost', 'ghost'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'reply',
    pron: '[rɪˈplaɪ] v.',
    desc: 'To reply is to give an answer or say back to someone.',
    exam: 'She asked him what time his meeting was. He <strong>replied</strong>, &ldquo;at three.&rdquo;',
    vi: '',
    image: '1017.jpg',
    sound: '1017.mp3',
    bookNumber: 1,
    id: 1017,
    uz: 'javob bermoq',
    uzOptions: ['javob bermoq', 'katta', 'operatsiya', 'farq'],
    enOptions: ['reply', 'chart', 'either', 'escape'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'safe',
    pron: '[seɪf] adj.',
    desc: 'When a person is safe, they are not in danger.',
    exam: 'Put on your seat belt in the car to be <strong>safe</strong>.',
    vi: '',
    image: '1018.jpg',
    sound: '1018.mp3',
    bookNumber: 1,
    id: 1018,
    uz: 'xavfsiz',
    uzOptions: ['xavfsiz', 'hid', 'tuzatmoq', 'yetib kelmoq'],
    enOptions: ['safe', 'print', 'reward', 'support'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'trick',
    pron: '[trɪk] n.',
    desc: 'A trick is something you do to fool another person.',
    exam: 'His card <strong>trick </strong>really surprised us.',
    vi: '',
    image: '1019.jpg',
    sound: '1019.mp3',
    bookNumber: 1,
    id: 1019,
    uz: 'hiyla',
    uzOptions: ['hiyla', 'ozod qilmoq', 'kapitan', 'ovoz'],
    enOptions: ['trick', 'treat', 'characteristic', 'error'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'well',
    pron: '[wɛl] adv.',
    desc: 'You use well to say that something was done in a good way.',
    exam: 'The couple can dance quite <strong>well</strong>.',
    vi: '',
    image: '1020.jpg',
    sound: '1020.mp3',
    bookNumber: 1,
    id: 1020,
    uz: 'yaxshi',
    uzOptions: ['yaxshi', 'bezovta qilmoq', "bo'lmoq", 'endi  qaytib'],
    enOptions: ['well', 'behavior', 'indicate', 'tour'],
    answerIndex: 0,
    unitNumber: 1,
    quizNumber: 1,
  },
  {
    en: 'adventure',
    pron: '[ədˈventʃər] n.',
    desc: 'An adventure is a fun or exciting thing that you do.',
    exam: 'Riding in the rough water was an <strong>adventure</strong>.',
    vi: '',
    image: '1021.jpg',
    sound: '1021.mp3',
    bookNumber: 1,
    id: 1021,
    uz: 'sarguzasht',
    uzOptions: ['sarguzasht', 'dalillar', 'asosiy', 'tashlab ketmoq'],
    enOptions: ['adventure', 'property', 'since', 'conclusion'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'approach',
    pron: '[əˈproʊtʃ] v.',
    desc: 'To approach something means to move close to it.',
    exam: 'The boy <strong>approached </strong>his school.',
    vi: '',
    image: '1022.jpg',
    sound: '1022.mp3',
    bookNumber: 1,
    id: 1022,
    uz: 'yaqinlashmoq',
    uzOptions: ['yaqinlashmoq', 'tushunmoq', 'graflik', 'asbob'],
    enOptions: ['approach', 'century', 'laboratory', 'advise'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'carefully',
    pron: '[kɛərfəli] adv.',
    desc: 'Carefully means with great attention, especially to detail or safety.',
    exam: 'The baby <strong>carefully </strong>climbed down the stairs.',
    vi: '',
    image: '1023.jpg',
    sound: '1023.mp3',
    bookNumber: 1,
    id: 1023,
    uz: 'ehtiyotkorlik bilan',
    uzOptions: ['ehtiyotkorlik bilan', 'katta', 'uyquda', 'mahalliy'],
    enOptions: ['carefully', 'journey', 'expert', 'behind'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'chemical',
    pron: '[ˈkɛmɪkəl] n.',
    desc: 'A chemical is something that scientists use in chemistry.',
    exam: 'The scientist mixed the <strong>chemicals</strong>.',
    vi: '',
    image: '1024.jpg',
    sound: '1024.mp3',
    bookNumber: 1,
    id: 1024,
    uz: 'kimyoviy',
    uzOptions: ['kimyoviy', 'xulosa', "g'alati", 'axborot bermoq'],
    enOptions: ['chemical', 'method', 'frequently', 'pattern'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'create',
    pron: '[kriˈeit] v.',
    desc: 'To create means to make something new.',
    exam: 'She <strong>created </strong>an igloo from blocks of snow.',
    vi: '',
    image: '1025.jpg',
    sound: '1025.mp3',
    bookNumber: 1,
    id: 1025,
    uz: 'yaratmoq',
    uzOptions: ['yaratmoq', "o'rgimchak to'ri", 'mavsum', "uyg'otmoq"],
    enOptions: ['create', 'officer', 'result', 'mean'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'evil',
    pron: '[ˈiːvəl] adj.',
    desc: 'Evil describes something or someone bad or cruel, not good.',
    exam: 'The <strong>evil </strong>figure scared us all.',
    vi: '',
    image: '1026.jpg',
    sound: '1026.mp3',
    bookNumber: 1,
    id: 1026,
    uz: 'yomonlik',
    uzOptions: ['yomonlik', 'yangi', 'solishtirmoq', 'baho'],
    enOptions: ['evil', 'climb', 'unite', 'compare'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'experiment',
    pron: '[ikˈsperəmənt] n.',
    desc: 'An experiment is a test that you do to see what will happen.',
    exam: 'The student did an <strong>experiment </strong>in science class.',
    vi: '',
    image: '1027.jpg',
    sound: '1027.mp3',
    bookNumber: 1,
    id: 1027,
    uz: 'tajriba',
    uzOptions: ['tajriba', 'keyinchalik', 'bosim', 'diqqat markazi'],
    enOptions: ['experiment', 'technology', 'specific', 'celebrate'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'kill',
    pron: '[kil] v.',
    desc: 'To kill someone or something is to make them die.',
    exam: 'I <strong>killed </strong>the fly with a fly swatter.',
    vi: '',
    image: '1028.jpg',
    sound: '1028.mp3',
    bookNumber: 1,
    id: 1028,
    uz: "o'ldirmoq",
    uzOptions: ["o'ldirmoq", 'olomon', 'shaxsiyat', "rozi bo'lmoq"],
    enOptions: ['kill', 'officer', 'personality', 'chart'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'laboratory',
    pron: '[ˈlӕbrəto:ri] n.',
    desc: 'A laboratory is a room where a scientist works.',
    exam: 'My mother works in a <strong>laboratory</strong>.',
    vi: '',
    image: '1029.jpg',
    sound: '1029.mp3',
    bookNumber: 1,
    id: 1029,
    uz: 'laboratoriya',
    uzOptions: ['laboratoriya', 'shovqin', 'kulmoq', "o'rta"],
    enOptions: ['laboratory', 'equal', 'voice', 'waste'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'laugh',
    pron: '[læf] n.',
    desc: 'Laugh is the sound made when someone is happy or a funny thing occurs.',
    exam: 'The sound of their <strong>laugh </strong>filled the room.',
    vi: '',
    image: '1030.jpg',
    sound: '1030.mp3',
    bookNumber: 1,
    id: 1030,
    uz: 'kulmoq',
    uzOptions: ['kulmoq', 'kuymoq', 'biroz  ancha', 'dalillar'],
    enOptions: ['laugh', 'drop', 'divide', 'planet'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'loud',
    pron: '[laʊd] adj.',
    desc: 'If a sound is loud, it is strong and very easy to hear.',
    exam: 'The man&rsquo;s voice was so <strong>loud </strong>that we all could hear him.',
    vi: '',
    image: '1031.jpg',
    sound: '1031.mp3',
    bookNumber: 1,
    id: 1031,
    uz: 'baland ovozda',
    uzOptions: ['baland ovozda', 'oshirmoq', 'xavf', 'buyum'],
    enOptions: ['loud', 'safety', 'prepare', 'roll'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'nervous',
    pron: '[ˈnɜr vəs] adj.',
    desc: 'When a person is nervous, they think something bad will happen.',
    exam: 'The boy became <strong>nervous </strong>when he heard the news.',
    vi: '',
    image: '1032.jpg',
    sound: '1032.mp3',
    bookNumber: 1,
    id: 1032,
    uz: 'asabiy',
    uzOptions: ['asabiy', 'shovqin', 'taklif qilmoq', 'xorijiy'],
    enOptions: ['nervous', 'progress', 'plate', 'middle'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'noise',
    pron: '[nɔɪz] n.',
    desc: 'A noise is an unpleasant sound.',
    exam: 'The crying baby made a loud <strong>noise</strong>.',
    vi: '',
    image: '1033.jpg',
    sound: '1033.mp3',
    bookNumber: 1,
    id: 1033,
    uz: 'shovqin',
    uzOptions: ['shovqin', 'saqlamoq', 'mijoz', 'asabiy'],
    enOptions: ['noise', 'anymore', 'though', 'task'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'project',
    pron: '[ˈprodʒekt] n.',
    desc: 'A project is a type of work that you do for school ora job.',
    exam: 'His afternoon work <strong>project </strong>was to paint the room green.',
    vi: '',
    image: '1034.jpg',
    sound: '1034.mp3',
    bookNumber: 1,
    id: 1034,
    uz: 'loyiha',
    uzOptions: ['loyiha', 'hukm  baho', 'jumboq', 'afzallik'],
    enOptions: ['project', 'perform', 'aware', 'argue'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'scare',
    pron: '[skɛər] v.',
    desc: 'To scare someone is to make them feel afraid.',
    exam: 'My uncle was <strong>scared </strong>by what he saw in the room.',
    vi: '',
    image: '1035.jpg',
    sound: '1035.mp3',
    bookNumber: 1,
    id: 1035,
    uz: "qo'rqitmoq",
    uzOptions: ["qo'rqitmoq", 'tomoshabin', 'graflik', 'ochlik'],
    enOptions: ['scare', 'along', 'enter', 'mental'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'secret',
    pron: '[ˈsiːkrɪt] n.',
    desc: 'A secret is something that you do not tell other people.',
    exam: 'The two boys were sharing a <strong>secret</strong>.',
    vi: '',
    image: '1036.jpg',
    sound: '1036.mp3',
    bookNumber: 1,
    id: 1036,
    uz: 'sir',
    uzOptions: ['sir', 'kulmoq', 'sarguzasht', 'ovlamoq'],
    enOptions: ['secret', 'hidden', 'ghost', 'concert'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'shout',
    pron: '[ʃaʊt] v.',
    desc: 'To shout is to say something loudly.',
    exam: 'My boss <strong>shouted </strong>at me because I was late for work.',
    vi: '',
    image: '1037.jpg',
    sound: '1037.mp3',
    bookNumber: 1,
    id: 1037,
    uz: 'baqirmoq',
    uzOptions: ['baqirmoq', 'yaratmoq', "qo'rquv", 'namoyish qilmoq'],
    enOptions: ['shout', 'hidden', 'master', 'discover'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'smell',
    pron: '[smel] v.',
    desc: 'To smell something means to use your nose to sense it.',
    exam: 'The two friends <strong>smelled </strong>the flower.',
    vi: '',
    image: '1038.jpg',
    sound: '1038.mp3',
    bookNumber: 1,
    id: 1038,
    uz: 'hid',
    uzOptions: ['hid', 'sovrin', 'axlat', 'belgi'],
    enOptions: ['smell', 'error', 'already', 'rare'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'terrible',
    pron: '[ˈtɛrəbəl] adj.',
    desc: 'If something is terrible, it is very bad.',
    exam: 'The way he treated his classmate was <strong>terrible</strong>.',
    vi: '',
    image: '1039.jpg',
    sound: '1039.mp3',
    bookNumber: 1,
    id: 1039,
    uz: "qo'rqinchli",
    uzOptions: ["qo'rqinchli", "rag'batlantirmoq", 'xarajat', "ko'rmoq"],
    enOptions: ['terrible', 'purchase', 'well', 'frank'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'worse',
    pron: '[wɜrs] adj.',
    desc: 'If something is worse, it is of poorer quality than another thing.',
    exam: 'Business was <strong>worse </strong>this month than last month.',
    vi: '',
    image: '1040.jpg',
    sound: '1040.mp3',
    bookNumber: 1,
    id: 1040,
    uz: 'yomonroq',
    uzOptions: ['yomonroq', "o'zini tutmoq", 'qiymat', 'sehrli'],
    enOptions: ['worse', 'therefore', 'support', 'adventure'],
    answerIndex: 0,
    unitNumber: 2,
    quizNumber: 1,
  },
  {
    en: 'alien',
    pron: '[ˈeɪljən] n.',
    desc: 'An alien is a creature from a different world.',
    exam: 'The <strong>alien </strong>came in peace.',
    vi: '',
    image: '1041.jpg',
    sound: '1041.mp3',
    bookNumber: 1,
    id: 1041,
    uz: 'begona',
    uzOptions: ['begona', 'nazariya', 'xorijiy', 'professor'],
    enOptions: ['alien', 'tear', 'staff', 'laboratory'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
  {
    en: 'among',
    pron: '[əˈmʌŋ] prep.',
    desc: 'If you are among certain things, they are all around you.',
    exam: 'There was a red apple <strong>among </strong>the green ones.',
    vi: '',
    image: '1042.jpg',
    sound: '1042.mp3',
    bookNumber: 1,
    id: 1042,
    uz: 'orasida',
    uzOptions: ['orasida', 'dumalamoq', "to'lqin", 'orasida'],
    enOptions: ['among', 'opportunity', 'quality', 'common'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
  {
    en: 'chart',
    pron: '[tʃɑ:rt] n.',
    desc: 'A chart is a list of information.',
    exam: 'We used a <strong>chart </strong>to see how we had improved.',
    vi: '',
    image: '1043.jpg',
    sound: '1043.mp3',
    bookNumber: 1,
    id: 1043,
    uz: 'grafik  jadval',
    uzOptions: ['grafik  jadval', "o't", "ro'yxat", "bo'lmoq"],
    enOptions: ['chart', 'method', 'climb', 'observe'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
  {
    en: 'cloud',
    pron: '[klaʊd] n.',
    desc: 'A cloud is a group of water drops in the sky.',
    exam: 'The sky was filled with white <strong>clouds</strong>.',
    vi: '',
    image: '1044.jpg',
    sound: '1044.mp3',
    bookNumber: 1,
    id: 1044,
    uz: 'bulut',
    uzOptions: ['bulut', 'mashhur', 'allaqachon', "qo'llab-quvvatlamoq"],
    enOptions: ['cloud', 'select', 'anymore', 'carefully'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
  {
    en: 'comprehend',
    pron: '[ˌkɒmprɪˈhɛnd] v.',
    desc: 'To comprehend something is to understand it.',
    exam: 'Henry could not <strong>comprehend </strong>the message.',
    vi: '',
    image: '1045.jpg',
    sound: '1045.mp3',
    bookNumber: 1,
    id: 1045,
    uz: 'tushunmoq',
    uzOptions: ['tushunmoq', 'shoir', 'boqmoq', 'foyda'],
    enOptions: ['comprehend', 'gather', 'certain', 'advance'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
  {
    en: 'describe',
    pron: '[dɪˈskraɪb] v.',
    desc: 'To describe is to say or write what someone or something is like.',
    exam: 'They <strong>described </strong>their tree as colorful with gold ribbon and a star.',
    vi: '',
    image: '1046.jpg',
    sound: '1046.mp3',
    bookNumber: 1,
    id: 1046,
    uz: "ta'riflamoq",
    uzOptions: ["ta'riflamoq", "tegishli bo'lmoq", 'ozod qilmoq', 'asramoq'],
    enOptions: ['describe', 'burn', 'evil', 'ahead'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
  {
    en: 'ever',
    pron: '[ˈɛvər] adv.',
    desc: 'Ever means at any time.',
    exam: 'Going skiing last winter was the most fun I&rsquo;ve <strong>ever </strong>had.',
    vi: '',
    image: '1047.jpg',
    sound: '1047.mp3',
    bookNumber: 1,
    id: 1047,
    uz: "qachon bo'lsa ham",
    uzOptions: ["qachon bo'lsa ham", 'yaxshi', 'funt  qoqmoq', 'yomonlik'],
    enOptions: ['ever', 'experience', 'several', 'dictionary'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
  {
    en: 'fail',
    pron: '[feɪl] v.',
    desc: 'To fail means you do not succeed in what you try to do.',
    exam: 'Since he <strong>failed </strong>to get the job, he was sad.',
    vi: '',
    image: '1048.jpg',
    sound: '1048.mp3',
    bookNumber: 1,
    id: 1048,
    uz: 'muvaffaqiyatsizlikka uchramoq',
    uzOptions: [
      'muvaffaqiyatsizlikka uchramoq',
      'mahalliy',
      'bekor qilmoq',
      'chiqindi',
    ],
    enOptions: ['fail', 'characteristic', 'ground', 'else'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
  {
    en: 'friendly',
    pron: '[ˈfrɛndlɪ] adj.',
    desc: 'Friendly is behaving in a pleasant, kind way toward someone.',
    exam: 'The <strong>friendly </strong>animals came up to the girl.',
    vi: '',
    image: '1049.jpg',
    sound: '1049.mp3',
    bookNumber: 1,
    id: 1049,
    uz: "do'stona",
    uzOptions: ["do'stona", 'zavod', "sovg'a", 'yomon'],
    enOptions: ['friendly', 'course', 'outline', 'meal'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
  {
    en: 'grade',
    pron: '[ɡreɪd] n.',
    desc: 'A grade is a score or mark given to someone’s work.',
    exam: 'I managed to get good <strong>grades </strong>on my report card.',
    vi: '',
    image: '1050.jpg',
    sound: '1050.mp3',
    bookNumber: 1,
    id: 1050,
    uz: 'baho',
    uzOptions: ['baho', "to'g'ri", 'uy hayvoni', 'professional'],
    enOptions: ['grade', 'predict', 'mental', 'rather'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
  {
    en: 'instead',
    pron: '[inˈsted] adv.',
    desc: 'Instead means in place of.',
    exam: 'He ate the carrot <strong>instead </strong>of the ice cream.',
    vi: '',
    image: '1051.jpg',
    sound: '1051.mp3',
    bookNumber: 1,
    id: 1051,
    uz: "o'rniga",
    uzOptions: ["o'rniga", 'tashvishlanmoq', "e'lon qilmoq", 'davomida'],
    enOptions: ['instead', 'escape', 'destroy', 'spend'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
  {
    en: 'library',
    pron: '[ˈlaibrəri] n.',
    desc: 'A library is a place where you go to read books.',
    exam: 'The <strong>library </strong>at school is full of books.',
    vi: '',
    image: '1052.jpg',
    sound: '1052.mp3',
    bookNumber: 1,
    id: 1052,
    uz: 'kutubxona',
    uzOptions: ['kutubxona', "yolg'on gapirmoq", 'uch', 'tavsiya qilmoq'],
    enOptions: ['library', 'article', 'spend', 'trip'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
  {
    en: 'planet',
    pron: '[ˈplænət] n.',
    desc: 'A planet is a large round thing in space.',
    exam: 'Saturn is the <strong>planet </strong>with the ring around it.',
    vi: '',
    image: '1053.jpg',
    sound: '1053.mp3',
    bookNumber: 1,
    id: 1053,
    uz: 'sayyora',
    uzOptions: ['sayyora', 'muntazam', "noto'g'ri", 'mulk'],
    enOptions: ['planet', 'within', 'concert', 'feature'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
  {
    en: 'report',
    pron: '[rɪˈpɔrt] n.',
    desc: 'A report is something students write for school.',
    exam: 'Karen had trouble writing her <strong>report</strong>.',
    vi: '',
    image: '1054.jpg',
    sound: '1054.mp3',
    bookNumber: 1,
    id: 1054,
    uz: 'hisobot',
    uzOptions: ['hisobot', 'ijtimoiy', 'imkoniyat', 'faraz qilmoq'],
    enOptions: ['report', 'spot', 'beach', 'universe'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
  {
    en: 'several',
    pron: '[ˈsɛvərəl] adj.',
    desc: 'Several is more than two but not many.',
    exam: 'He had to read <strong>several </strong>books for class.',
    vi: '',
    image: '1055.jpg',
    sound: '1055.mp3',
    bookNumber: 1,
    id: 1055,
    uz: 'bir nechta',
    uzOptions: ['bir nechta', 'jazolamoq', 'oldini olmoq', 'sokin'],
    enOptions: ['several', 'audience', 'speech', 'hidden'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
  {
    en: 'solve',
    pron: '[sɒlv] v.',
    desc: 'To solve something is to find an answer to it.',
    exam: 'All the students could easily <strong>solve </strong>the math problem.',
    vi: '',
    image: '1056.jpg',
    sound: '1056.mp3',
    bookNumber: 1,
    id: 1056,
    uz: 'hal qilmoq',
    uzOptions: ['hal qilmoq', 'ochlik', 'ko`rsatmoq', "o'yin"],
    enOptions: ['solve', 'idiom', 'cruel', 'view'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
  {
    en: 'suddenly',
    pron: '[ˈsʌd(ə)nli] adv.',
    desc: 'If something happens suddenly, it happens quickly and unexpectedly.',
    exam: 'I was <strong>suddenly </strong>surprised by the cake my friends brought me.',
    vi: '',
    image: '1057.jpg',
    sound: '1057.mp3',
    bookNumber: 1,
    id: 1057,
    uz: "to'satdan",
    uzOptions: ["to'satdan", 'javob', 'rad qilmoq', "qachon bo'lsa ham"],
    enOptions: ['suddenly', 'several', 'trip', 'treat'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
  {
    en: 'suppose',
    pron: '[səˈpəʊz] v.',
    desc: 'To suppose is to guess.',
    exam: 'I <strong>suppose </strong>I should go home now.',
    vi: '',
    image: '1058.jpg',
    sound: '1058.mp3',
    bookNumber: 1,
    id: 1058,
    uz: 'faraz qilmoq',
    uzOptions: ['faraz qilmoq', 'jahlda', 'jiddiy', "bo'lmoq"],
    enOptions: ['suppose', 'judgment', 'drop', 'project'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
  {
    en: 'universe',
    pron: '[ˈjuːnɪvəːs] n.',
    desc: 'The universe is the known or supposed objects in space.',
    exam: 'The <strong>universe </strong>is so large that it cannot be measured.',
    vi: '',
    image: '1059.jpg',
    sound: '1059.mp3',
    bookNumber: 1,
    id: 1059,
    uz: 'olam',
    uzOptions: ['olam', "og'riq", 'texnologiya', 'bir nechta'],
    enOptions: ['universe', 'safe', 'tip', 'discover'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
  {
    en: 'view',
    pron: '[vjuː] v.',
    desc: 'To view is to look at something.',
    exam: 'Michael likes to <strong>view </strong>himself in the mirror.',
    vi: '',
    image: '1060.jpg',
    sound: '1060.mp3',
    bookNumber: 1,
    id: 1060,
    uz: "ko'rinish",
    uzOptions: ["ko'rinish", "do'kon  saqlamoq", 'jazolamoq', 'javob bermoq'],
    enOptions: ['view', 'expect', 'mystery', 'ground'],
    answerIndex: 0,
    unitNumber: 3,
    quizNumber: 1,
  },
];
console.log(quiz.length); // 55
console.log(quiz.length); // 55

// === in gitBash: ====
// node js/question13.js
