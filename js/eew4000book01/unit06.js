// **Question-13**
// *tayyor*
// # 1: Yuqoridagi hammat testlar (jami 460)
'use strick';
// Array of Object;
const quiz = [
  {
    en: 'academy',
    pron: '[əˈkadəmi] n.',
    desc: 'An academy is a special type of school.',
    exam: 'There are many courses taught at the <strong>academy </strong>that I go to.',
    vi: '',
    image: '1301.jpg',
    sound: '1301.mp3',
    bookNumber: 1,
    id: 1301,
    uz: 'akademiya',
    uzOptions: ['akademiya', "qo'shni", 'tartibga solmoq', 'xato'],
    enOptions: ['academy', 'reach', 'view', 'set'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'ancient',
    pron: '[ˈeɪnʃ(ə)nt] adj.',
    desc: 'If something is ancient, it is very old.',
    exam: 'I want to see the <strong>ancient </strong>buildings in Rome.',
    vi: '',
    image: '1302.jpg',
    sound: '1302.mp3',
    bookNumber: 1,
    id: 1302,
    uz: 'qadimiy',
    uzOptions: [
      'qadimiy',
      'ehtiyotkorlik bilan',
      'xabar',
      "to'g'ridan-to'g'ri",
    ],
    enOptions: ['ancient', 'product', 'well', 'actual'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'board',
    pron: '[bɔːd] n.',
    desc: 'A board is a flat piece of wood.',
    exam: 'The sign was made of a few wooden <strong>boards</strong>.',
    vi: '',
    image: '1303.jpg',
    sound: '1303.mp3',
    bookNumber: 1,
    id: 1303,
    uz: 'taxta',
    uzOptions: ['taxta', 'mos kelmoq', 'ashyo', 'yakka'],
    enOptions: ['board', 'amount', 'journey', 'meal'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'century',
    pron: '[ˈsɛntʃʊri] n.',
    desc: 'A century is one hundred years.',
    exam: 'Our company is celebrating a <strong>century </strong>of business in London.',
    vi: '',
    image: '1304.jpg',
    sound: '1304.mp3',
    bookNumber: 1,
    id: 1304,
    uz: 'asr',
    uzOptions: ['asr', "afzal ko'rmoq", "maqul ko'rmoq", 'belgi'],
    enOptions: ['century', 'level', 'idiom', 'purchase'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'clue',
    pron: '[kluː] n.',
    desc: 'A clue is a fact or object that helps solve a mystery or crime.',
    exam: 'The detective found some <strong>clues </strong>on the sidewalk.',
    vi: '',
    image: '1305.jpg',
    sound: '1305.mp3',
    bookNumber: 1,
    id: 1305,
    uz: 'qo`shimcha ma`lumot',
    uzOptions: ['qo`shimcha ma`lumot', 'davomida', 'uchmoq', 'yaqinlashmoq'],
    enOptions: ['clue', 'suppose', 'above', 'trouble'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'concert',
    pron: '[kənˈsəːt] n.',
    desc: 'A concert is an event where you listen to people play music.',
    exam: 'I enjoyed the <strong>concert </strong>last night. The band was very good.',
    vi: '',
    image: '1306.jpg',
    sound: '1306.mp3',
    bookNumber: 1,
    id: 1306,
    uz: 'kontsert',
    uzOptions: ['kontsert', 'mi yoki', 'tomonga', 'olam'],
    enOptions: ['concert', 'mean', 'instruct', 'length'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'county',
    pron: '[ˈkaʊnti] n.',
    desc: 'A county is the largest political division of a state in the US.',
    exam: 'He wanted to represent the citizens of his <strong>county</strong>.',
    vi: '',
    image: '1307.jpg',
    sound: '1307.mp3',
    bookNumber: 1,
    id: 1307,
    uz: 'graflik',
    uzOptions: ['graflik', 'chiqindi', 'hid', "tegishli bo'lmoq"],
    enOptions: ['county', 'match', 'effect', 'fortunate'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'dictionary',
    pron: '[ˈdɪkʃ(ə)n(ə)ri] n.',
    desc: 'A dictionary is a book that tells you what words mean.',
    exam: 'I use the <strong>dictionary </strong>to learn new words.',
    vi: '',
    image: '1308.jpg',
    sound: '1308.mp3',
    bookNumber: 1,
    id: 1308,
    uz: "lug'at",
    uzOptions: ["lug'at", 'laboratoriya', 'umumiy', "o'lik"],
    enOptions: ['dictionary', 'friendly', 'range', 'clever'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'exist',
    pron: '[ɪɡˈzɪst] v.',
    desc: 'To exist is to be real.',
    exam: 'Do you really think that unicorns ever <strong>existed</strong>?',
    vi: '',
    image: '1309.jpg',
    sound: '1309.mp3',
    bookNumber: 1,
    id: 1309,
    uz: 'mavjud',
    uzOptions: ['mavjud', 'qiymat', "ko'rish", 'xotira'],
    enOptions: ['exist', 'fright', 'likely', 'pound'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'flat',
    pron: '[flat] adj.',
    desc: 'Flat describes something that is level and smooth with no curved parts.',
    exam: 'My parents bought a new <strong>flat </strong>screen TV over the weekend.',
    vi: '',
    image: '1310.jpg',
    sound: '1310.mp3',
    bookNumber: 1,
    id: 1310,
    uz: 'tekis',
    uzOptions: ['tekis', "erishmoq  ega bo'lmoq", 'taraqqiyot', 'otmoq'],
    enOptions: ['flat', 'indicate', 'spend', 'protect'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'gentleman',
    pron: '[ˈdʒɛnt(ə)lmən] n.',
    desc: 'A gentleman is a nice man.',
    exam: 'My grandfather is a kind and helpful <strong>gentleman</strong>.',
    vi: '',
    image: '1311.jpg',
    sound: '1311.mp3',
    bookNumber: 1,
    id: 1311,
    uz: 'jentleman',
    uzOptions: ['jentleman', "ko'rmoq", 'hayron bo`lmoq', "ko'rinish"],
    enOptions: ['gentleman', 'product', 'exist', 'bottom'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'hidden',
    pron: '[ˈhɪdn] adj.',
    desc: 'Hidden means to be not easily noticed or too hard to find.',
    exam: 'The <strong>hidden </strong>camera recorded everything in the parking lot.',
    vi: '',
    image: '1312.jpg',
    sound: '1312.mp3',
    bookNumber: 1,
    id: 1312,
    uz: 'maxfiy',
    uzOptions: ['maxfiy', 'keng', 'qabul qilmoq', 'hech biri'],
    enOptions: ['hidden', 'actual', 'boring', 'arrive'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'maybe',
    pron: '[ˈmeɪbi] adv.',
    desc: 'Maybe is used to show that something is possible or may be true.',
    exam: 'If I focus hard enough, <strong>maybe </strong>I can come up with the right answer.',
    vi: '',
    image: '1313.jpg',
    sound: '1313.mp3',
    bookNumber: 1,
    id: 1313,
    uz: 'balki',
    uzOptions: ['balki', 'sokin', 'sehrli', "ega bo'lmoq"],
    enOptions: ['maybe', 'environment', 'doubt', 'moment'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'officer',
    pron: '[ˈɒfɪsə] n.',
    desc: 'An officer is a leader in the army.',
    exam: 'The soldiers followed the orders of the <strong>officer</strong>.',
    vi: '',
    image: '1314.jpg',
    sound: '1314.mp3',
    bookNumber: 1,
    id: 1314,
    uz: 'ofitser',
    uzOptions: ['ofitser', "ko'z yoshi  yirtmoq", 'arvoh', "ko'tarilmoq"],
    enOptions: ['officer', 'clerk', 'error', 'friendship'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'original',
    pron: '[əˈrɪdʒɪn(ə)l] adj.',
    desc: 'If something is original, it is the first one of that thing.',
    exam: 'This is the <strong>original </strong>painting of the Mona Lisa.',
    vi: '',
    image: '1315.jpg',
    sound: '1315.mp3',
    bookNumber: 1,
    id: 1315,
    uz: 'original',
    uzOptions: ['original', 'tez-tez', 'silkitmoq', 'dono'],
    enOptions: ['original', 'refuse', 'block', 'select'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'pound',
    pron: '[paʊnd] v.',
    desc: 'To pound something is to hit it many times with a lot of force.',
    exam: 'He <strong>pounded </strong>the nail with the hammer.',
    vi: '',
    image: '1316.jpg',
    sound: '1316.mp3',
    bookNumber: 1,
    id: 1316,
    uz: 'funt  qoqmoq',
    uzOptions: ['funt  qoqmoq', 'maydon', 'ozod qilmoq', "ko'p"],
    enOptions: ['pound', 'item', 'perhaps', 'hurt'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'process',
    pron: '[prəˈsɛs] n.',
    desc: 'A process is the steps to take to do something.',
    exam: 'Making a cake is a long <strong>process</strong>.',
    vi: '',
    image: '1317.jpg',
    sound: '1317.mp3',
    bookNumber: 1,
    id: 1317,
    uz: 'jarayon',
    uzOptions: ['jarayon', 'maqsad', 'graflik', 'asr'],
    enOptions: ['process', 'otherwise', 'share', 'barely'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'publish',
    pron: '[ˈpʌblɪʃ] v.',
    desc: 'To publish a book is to get it printed and ready to sell.',
    exam: 'That company <strong>publishes </strong>daily newspapers.',
    vi: '',
    image: '1318.jpg',
    sound: '1318.mp3',
    bookNumber: 1,
    id: 1318,
    uz: 'nashr etmoq',
    uzOptions: ['nashr etmoq', 'sarflamoq', 'hujum qilmoq', 'qaram bo`lmoq'],
    enOptions: ['publish', 'leave', 'reward', 'audience'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'theater',
    pron: '[ˈθɪətə] n.',
    desc: 'A theater is a building where you watch plays, shows, and movies.',
    exam: 'We went to the <strong>theater </strong>to see a play.',
    vi: '',
    image: '1319.jpg',
    sound: '1319.mp3',
    bookNumber: 1,
    id: 1319,
    uz: 'teatr',
    uzOptions: ['teatr', 'xizmatchi', "ma'no", 'alohida'],
    enOptions: ['theater', 'product', 'pleased', 'effect'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'wealth',
    pron: '[wɛlθ] n.',
    desc: 'Wealth is a large amount of money.',
    exam: 'One of the most important things to some people is <strong>wealth</strong>.',
    vi: '',
    image: '1320.jpg',
    sound: '1320.mp3',
    bookNumber: 1,
    id: 1320,
    uz: 'boylik',
    uzOptions: ['boylik', 'ochlik', 'ahamiyat', 'tomchi'],
    enOptions: ['wealth', 'season', 'actual', 'method'],
    answerIndex: 0,
    unitNumber: 16,
    quizNumber: 6,
  },
  {
    en: 'appreciate',
    pron: '[əˈpriːsɪeɪt] v.',
    desc: 'To appreciate something is to understand its good qualities.',
    exam: 'I can <strong>appreciate </strong>the lovely scenery.',
    vi: '',
    image: '1321.jpg',
    sound: '1321.mp3',
    bookNumber: 1,
    id: 1321,
    uz: 'qadrlamoq',
    uzOptions: ['qadrlamoq', 'nafas olmoq', 'oqim', "ko'lmak"],
    enOptions: ['appreciate', 'wealth', 'introduce', 'peace'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'available',
    pron: '[əˈveɪləb(ə)l] adj.',
    desc: 'If something is available, it means you can get it.',
    exam: 'There were many seats <strong>available </strong>in the room.',
    vi: '',
    image: '1322.jpg',
    sound: '1322.mp3',
    bookNumber: 1,
    id: 1322,
    uz: 'mavjud',
    uzOptions: ['mavjud', 'daraja', 'maxfiy', "an'ana"],
    enOptions: ['available', 'return', 'surface', 'remain'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'beat',
    pron: '[biːt] v.',
    desc: 'To beat someone means to do better than they do.',
    exam: 'I managed to <strong>beat </strong>everyone in the race.',
    vi: '',
    image: '1323.jpg',
    sound: '1323.mp3',
    bookNumber: 1,
    id: 1323,
    uz: 'urmoq',
    uzOptions: ['urmoq', 'masofa', 'jurnal', 'jismoniy'],
    enOptions: ['beat', 'middle', 'puddle', 'hunger'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'bright',
    pron: '[brʌɪt] adj.',
    desc: 'If something is bright, it shows a lot of light.',
    exam: 'The <strong>bright </strong>light from the explosion hurt my eyes.',
    vi: '',
    image: '1324.jpg',
    sound: '1324.mp3',
    bookNumber: 1,
    id: 1324,
    uz: 'yorqin',
    uzOptions: ['yorqin', 'hayratlantirmoq', 'qutb  asos', "o'rniga"],
    enOptions: ['bright', 'physical', 'driveway', 'trip'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'celebrate',
    pron: '[ˈsɛlɪbreɪt] v.',
    desc: 'To celebrate is to do something to show that an event is special.',
    exam: 'We all <strong>celebrated </strong>when we heard the great news.',
    vi: '',
    image: '1325.jpg',
    sound: '1325.mp3',
    bookNumber: 1,
    id: 1325,
    uz: 'nishonlamoq',
    uzOptions: ['nishonlamoq', 'talab qilmoq', 'munosabat', 'boy'],
    enOptions: ['celebrate', 'continue', 'amount', 'skill'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'determine',
    pron: '[dɪˈtəːmɪn] v.',
    desc: 'To determine means to choose or make a decision.',
    exam: 'He tried to <strong>determine </strong>which one to eat first.',
    vi: '',
    image: '1326.jpg',
    sound: '1326.mp3',
    bookNumber: 1,
    id: 1326,
    uz: 'aniqlamoq',
    uzOptions: ['aniqlamoq', 'qabul qilmoq', 'teng', 'safar'],
    enOptions: ['determine', 'speech', 'alone', 'scene'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'disappear',
    pron: '[dɪsəˈpɪə] v.',
    desc: 'To disappear means to go away or not be seen.',
    exam: 'The top of the building is <strong>disappearing </strong>in the clouds.',
    vi: '',
    image: '1327.jpg',
    sound: '1327.mp3',
    bookNumber: 1,
    id: 1327,
    uz: "yo'qolmoq",
    uzOptions: ["yo'qolmoq", "qo'rquv", 'oriq', 'bilim'],
    enOptions: ['disappear', 'force', 'introduce', 'prefer'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'else',
    pron: '[ɛls] adj.',
    desc: 'If you talk about something else, you talk about something different.',
    exam: 'I wanted a bike for my birthday, but I got something <strong>else</strong>.',
    vi: '',
    image: '1328.jpg',
    sound: '1328.mp3',
    bookNumber: 1,
    id: 1328,
    uz: 'yana boshqa',
    uzOptions: ['yana boshqa', 'xizmatchi', "va'da bermoq", 'yana boshqa'],
    enOptions: ['else', 'familiar', 'stage', 'evidence'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'fair',
    pron: '[fɛː] adj.',
    desc: 'Fair describes treating someone in a way that is reasonable or right.',
    exam: 'He sold me his car for a <strong>fair </strong>price.',
    vi: '',
    image: '1329.jpg',
    sound: '1329.mp3',
    bookNumber: 1,
    id: 1329,
    uz: 'adolatli',
    uzOptions: ['adolatli', 'tomoshabin', 'mijoz', 'ofitser'],
    enOptions: ['fair', 'chance', 'populate', 'serve'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'flow',
    pron: '[fləʊ] v.',
    desc: 'To flow is to move easily and continuously in one direction.',
    exam: 'The water <strong>flowed </strong>over the rocks and into the lake.',
    vi: '',
    image: '1330.jpg',
    sound: '1330.mp3',
    bookNumber: 1,
    id: 1330,
    uz: 'oqim',
    uzOptions: ['oqim', 'asosiy', "sodir bo'lmoq", 'xotira'],
    enOptions: ['flow', 'prove', 'effect', 'lack'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'forward',
    pron: '[ˈfɔːwəd] adv.',
    desc: 'If you move forward, you move in the direction in front of you.',
    exam: 'When he saw his mother, the baby crawled <strong>forward </strong>to her.',
    vi: '',
    image: '1331.jpg',
    sound: '1331.mp3',
    bookNumber: 1,
    id: 1331,
    uz: 'oldinga',
    uzOptions: ['oldinga', 'foyda', 'afzallik', 'uyquda'],
    enOptions: ['forward', 'reward', 'real', 'exercise'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'hill',
    pron: '[hɪl]',
    desc: 'A hill is a round area of land. It is higher than the land around it.',
    exam: 'The sun was rising above the green <strong>hills</strong>.',
    vi: '',
    image: '1332.jpg',
    sound: '1332.mp3',
    bookNumber: 1,
    id: 1332,
    uz: 'tepalik',
    uzOptions: ['tepalik', 'jarayon', 'suhbat', "yo'nalish  kurs"],
    enOptions: ['hill', 'raise', 'glad', 'finally'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'level',
    pron: '[ˈlɛv(ə)l] n.',
    desc: 'A level is a point on a scale that measures something.',
    exam: 'Please check the <strong>level </strong>of the temperature.',
    vi: '',
    image: '1333.jpg',
    sound: '1333.mp3',
    bookNumber: 1,
    id: 1333,
    uz: 'daraja',
    uzOptions: ['daraja', 'maxfiy', 'ishlab chiqarmoq', "to'lqin"],
    enOptions: ['level', 'celebrate', 'primary', 'advantage'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'lone',
    pron: '[ləʊn] adj.',
    desc: 'If someone or something is lone, they are the only one of that kind.',
    exam: 'A <strong>lone </strong>man walked along the street.',
    vi: '',
    image: '1334.jpg',
    sound: '1334.mp3',
    bookNumber: 1,
    id: 1334,
    uz: "yolg'iz",
    uzOptions: ["yolg'iz", 'ichida', 'adolatli', 'usta'],
    enOptions: ['lone', 'focus', 'description', 'hero'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'puddle',
    pron: '[ˈpʌd(ə)l] n.',
    desc: 'A puddle is a pool of liquid on the ground.',
    exam: 'When the ice melted, it formed a <strong>puddle</strong>.',
    vi: '',
    image: '1335.jpg',
    sound: '1335.mp3',
    bookNumber: 1,
    id: 1335,
    uz: "ko'lmak",
    uzOptions: ["ko'lmak", 'harakat', 'mashq qilmoq', 'zarur'],
    enOptions: ['puddle', 'event', 'mix', 'match'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'response',
    pron: '[rɪˈspɒns] n.',
    desc: 'A response is the answer to a question.',
    exam: 'He asked if I was sad. My <strong>response </strong>was &ldquo;No.&rdquo;',
    vi: '',
    image: '1336.jpg',
    sound: '1336.mp3',
    bookNumber: 1,
    id: 1336,
    uz: 'javob',
    uzOptions: ['javob', 'ijro etmoq', 'shaxs', 'afzallik'],
    enOptions: ['response', 'increase', 'inside', 'mix'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'season',
    pron: '[ˈsiːz(ə)n] n.',
    desc: 'A season is a time of the year: spring, summer, fall or winter.',
    exam: 'Fall is a warm <strong>season</strong>, while winter is very cold.',
    vi: '',
    image: '1337.jpg',
    sound: '1337.mp3',
    bookNumber: 1,
    id: 1337,
    uz: 'mavsum',
    uzOptions: ['mavsum', 'bulut', 'ovqat', 'haddan tashqari'],
    enOptions: ['season', 'boring', 'contain', 'angry'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'solution',
    pron: '[səˈluːʃ(ə)n] n.',
    desc: 'A solution is a way to solve a problem.',
    exam: 'There are many problems. We need <strong>solutions</strong>!',
    vi: '',
    image: '1338.jpg',
    sound: '1338.mp3',
    bookNumber: 1,
    id: 1338,
    uz: 'yechim',
    uzOptions: ['yechim', 'ichida', "a'zo", 'yangi'],
    enOptions: ['solution', 'opportunity', 'social', 'imagine'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'waste',
    pron: '[weɪst] v.',
    desc: 'To waste means to carelessly use something all up.',
    exam: 'Turn off the water so you don&rsquo;t <strong>waste </strong>it.',
    vi: '',
    image: '1339.jpg',
    sound: '1339.mp3',
    bookNumber: 1,
    id: 1339,
    uz: 'chiqindi',
    uzOptions: ['chiqindi', 'yuqorida', 'rad qilmoq', 'yashamoq'],
    enOptions: ['waste', 'evil', 'responsible', 'direct'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'whether',
    pron: '[ˈwɛðə] conj.',
    desc: 'You use whether when you must choose between two things.',
    exam: 'I could not decide <strong>whether </strong>to go left or right.',
    vi: '',
    image: '1340.jpg',
    sound: '1340.mp3',
    bookNumber: 1,
    id: 1340,
    uz: 'mi yoki',
    uzOptions: ['mi yoki', 'ekin', 'graflik', "to'g'ridan-to'g'ri"],
    enOptions: ['whether', 'visible', 'select', 'positive'],
    answerIndex: 0,
    unitNumber: 17,
    quizNumber: 6,
  },
  {
    en: 'argue',
    pron: '[ˈɑːɡjuː] v.',
    desc: 'To argue is to angrily speak to someone because you do not agree.',
    exam: 'We <strong>argued </strong>about where to go for dinner.',
    vi: '',
    image: '1341.jpg',
    sound: '1341.mp3',
    bookNumber: 1,
    id: 1341,
    uz: 'bahslashmoq',
    uzOptions: ['bahslashmoq', 'balki', 'sohil', 'darhol'],
    enOptions: ['argue', 'wild', 'speech', 'project'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
  {
    en: 'communicate',
    pron: '[kəˈmjuːnɪkeɪt] v.',
    desc: 'To communicate is to give information by talking, writing, etc.',
    exam: 'I <strong>communicated </strong>with Paul about his new ideas.',
    vi: '',
    image: '1342.jpg',
    sound: '1342.mp3',
    bookNumber: 1,
    id: 1342,
    uz: 'muloqot qilmoq',
    uzOptions: ['muloqot qilmoq', 'davom etmoq', 'aniqlash', "e'tiqod"],
    enOptions: ['communicate', 'damage', 'loud', 'plate'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
  {
    en: 'crowd',
    pron: '[kraʊd] n.',
    desc: 'A crowd is a large group of people.',
    exam: 'A large <strong>crowd </strong>had gathered on the street to see the accident.',
    vi: '',
    image: '1343.jpg',
    sound: '1343.mp3',
    bookNumber: 1,
    id: 1343,
    uz: 'olomon',
    uzOptions: ['olomon', 'nutq', 'yurist', 'turli'],
    enOptions: ['crowd', 'thief', 'apartment', 'coast'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
  {
    en: 'depend',
    pron: '[dɪˈpɛnd] v.',
    desc: 'To depend on someone or something is to need them.',
    exam: 'Children <strong>depend </strong>on their parents for many things.',
    vi: '',
    image: '1344.jpg',
    sound: '1344.mp3',
    bookNumber: 1,
    id: 1344,
    uz: 'qaram bo`lmoq',
    uzOptions: ['qaram bo`lmoq', 'kamchilik', 'ruxsat bermoq', "o't"],
    enOptions: ['depend', 'mental', 'equal', 'view'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
  {
    en: 'dish',
    pron: '[dɪʃ] n.',
    desc: 'A dish is a plate.',
    exam: 'She put a clean white <strong>dish </strong>on the table.',
    vi: '',
    image: '1345.jpg',
    sound: '1345.mp3',
    bookNumber: 1,
    id: 1345,
    uz: 'ovqat',
    uzOptions: ['ovqat', 'naqsh  tartib', 'maslahat', 'lahza'],
    enOptions: ['dish', 'evidence', 'however', 'cheer'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
  {
    en: 'empty',
    pron: '[ˈɛm(p)ti] adj.',
    desc: 'If something is empty, it does not have anything in it.',
    exam: 'My gas tank was almost <strong>empty</strong>, so I couldn&rsquo;t drive my car very long.',
    vi: '',
    image: '1346.jpg',
    sound: '1346.mp3',
    bookNumber: 1,
    id: 1346,
    uz: "bo'sh",
    uzOptions: ["bo'sh", 'joylashgan', 'atrof-muhit', 'qiymat'],
    enOptions: ['empty', 'list', 'terrible', 'roll'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
  {
    en: 'exact',
    pron: '[ɪɡˈzakt] adj.',
    desc: 'If something is exact, it is just the right amount.',
    exam: 'Please use the <strong>exact </strong>amount of sugar for the cake.',
    vi: '',
    image: '1347.jpg',
    sound: '1347.mp3',
    bookNumber: 1,
    id: 1347,
    uz: 'aniq',
    uzOptions: ['aniq', 'eslatmoq', 'qarzdor', "do'stlik"],
    enOptions: ['exact', 'level', 'remain', 'medicine'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
  {
    en: 'fresh',
    pron: '[frɛʃ] adj.',
    desc: 'If something is fresh, it is new.',
    exam: 'I just bought these oranges. They are very <strong>fresh</strong>.',
    vi: '',
    image: '1348.jpg',
    sound: '1348.mp3',
    bookNumber: 1,
    id: 1348,
    uz: 'yangi',
    uzOptions: ['yangi', 'butun', 'belgi', 'muvozanat'],
    enOptions: ['fresh', 'organize', 'face', 'plate'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
  {
    en: 'gather',
    pron: '[ˈɡaðə] v.',
    desc: 'To gather is to collect several things usually from different places.',
    exam: 'Sam <strong>gathered </strong>some flowers for his mother.',
    vi: '',
    image: '1349.jpg',
    sound: '1349.mp3',
    bookNumber: 1,
    id: 1349,
    uz: "to'plamoq",
    uzOptions: ["to'plamoq", 'tekis', 'odimlamoq', 'oldini olmoq  saqlanmoq'],
    enOptions: ['gather', 'assign', 'wealth', 'contrast'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
  {
    en: 'indicate',
    pron: '[ˈɪndɪkeɪt] v.',
    desc: 'To indicate means to show, point or make something clear.',
    exam: 'He pointed to his eyes to <strong>indicate </strong>where he had hurt himself.',
    vi: '',
    image: '1350.jpg',
    sound: '1350.mp3',
    bookNumber: 1,
    id: 1350,
    uz: 'ko`rsatmoq',
    uzOptions: ['ko`rsatmoq', "yo'q qilmoq", 'haqiqat', 'oldinga'],
    enOptions: ['indicate', 'technology', 'cancel', 'argue'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
  {
    en: 'item',
    pron: '[ˈʌɪtəm] n.',
    desc: 'An item is a thing that you buy or sell.',
    exam: 'I have many <strong>items </strong>for school in my bag.',
    vi: '',
    image: '1351.jpg',
    sound: '1351.mp3',
    bookNumber: 1,
    id: 1351,
    uz: 'buyum',
    uzOptions: ['buyum', 'otmoq', 'aniq', 'irq'],
    enOptions: ['item', 'recognize', 'huge', 'lot'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
  {
    en: 'offer',
    pron: '[ˈɒfə] v.',
    desc: 'To offer is to present someone with something.',
    exam: 'He <strong>offered </strong>me the keys to his car.',
    vi: '',
    image: '1352.jpg',
    sound: '1352.mp3',
    bookNumber: 1,
    id: 1352,
    uz: 'taklif qilmoq',
    uzOptions: ['taklif qilmoq', 'yashamoq', 'oddiy', 'zarar'],
    enOptions: ['offer', 'proper', 'request', 'period'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
  {
    en: 'price',
    pron: '[prʌɪs] n.',
    desc: 'The price of something is how much it costs.',
    exam: 'What is the <strong>price </strong>of this item?',
    vi: '',
    image: '1353.jpg',
    sound: '1353.mp3',
    bookNumber: 1,
    id: 1353,
    uz: 'narx',
    uzOptions: ['narx', "to'g'ri", "o't", 'mashq qilmoq'],
    enOptions: ['price', 'badly', 'experience', 'list'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
  {
    en: 'product',
    pron: '[ˈprɒdʌkt] n.',
    desc: 'A product is something that is made.',
    exam: 'My sister has many beauty <strong>products </strong>in her room.',
    vi: '',
    image: '1354.jpg',
    sound: '1354.mp3',
    bookNumber: 1,
    id: 1354,
    uz: 'mahsulot',
    uzOptions: ['mahsulot', 'axlat', 'ehtimol', 'nutq'],
    enOptions: ['product', 'different', 'season', 'athlete'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
  {
    en: 'property',
    pron: '[ˈprɒpəti] n.',
    desc: 'Property is something that someone owns.',
    exam: 'The house is now my <strong>property</strong>.',
    vi: '',
    image: '1355.jpg',
    sound: '1355.mp3',
    bookNumber: 1,
    id: 1355,
    uz: 'mulk',
    uzOptions: ['mulk', 'uyquda', 'oriq', "bo'lak"],
    enOptions: ['property', 'stroll', 'artist', 'visible'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
  {
    en: 'purchase',
    pron: '[ˈpəːtʃɪs] v.',
    desc: 'To purchase something is to buy it.',
    exam: 'I recently <strong>purchased </strong>a new car.',
    vi: '',
    image: '1356.jpg',
    sound: '1356.mp3',
    bookNumber: 1,
    id: 1356,
    uz: 'sotib olmoq',
    uzOptions: ['sotib olmoq', "maqul ko'rmoq", 'xorijiy', 'chunki'],
    enOptions: ['purchase', 'achieve', 'control', 'judge'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
  {
    en: 'recommend',
    pron: '[rɛkəˈmɛnd] v.',
    desc: 'To recommend something is to say that someone should do it.',
    exam: 'My doctor <strong>recommended </strong>that I get some exercise.',
    vi: '',
    image: '1357.jpg',
    sound: '1357.mp3',
    bookNumber: 1,
    id: 1357,
    uz: 'tavsiya qilmoq',
    uzOptions: ['tavsiya qilmoq', 'uchmoq', 'imkoniyat', 'xato'],
    enOptions: ['recommend', 'whole', 'concern', 'responsible'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
  {
    en: 'select',
    pron: '[sɪˈlɛkt] v.',
    desc: 'To select something is to choose it.',
    exam: 'I hope that I <strong>selected </strong>the right answers on the test.',
    vi: '',
    image: '1358.jpg',
    sound: '1358.mp3',
    bookNumber: 1,
    id: 1358,
    uz: 'tanlamoq',
    uzOptions: ['tanlamoq', 'farq', 'mustaqil', 'rohatlanmoq'],
    enOptions: ['select', 'wealth', 'original', 'fair'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
  {
    en: 'tool',
    pron: '[tuːl] n.',
    desc: 'A tool is something that helps you do a task.',
    exam: 'We used a <strong>tool </strong>to fix the window.',
    vi: '',
    image: '1359.jpg',
    sound: '1359.mp3',
    bookNumber: 1,
    id: 1359,
    uz: 'asbob',
    uzOptions: ['asbob', "ta'sir", "mag'rur", 'mos kelmoq'],
    enOptions: ['tool', 'suggest', 'compare', 'pain'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
  {
    en: 'treat',
    pron: '[triːt] v.',
    desc: 'To treat is to act in a certain way toward someone.',
    exam: 'The cats <strong>treated </strong>the mouse very nicely.',
    vi: '',
    image: '1360.jpg',
    sound: '1360.mp3',
    bookNumber: 1,
    id: 1360,
    uz: "davolamoq  munosabatda bo'lmoq",
    uzOptions: ["davolamoq  munosabatda bo'lmoq", 'orol', 'afzallik', 'hiyla'],
    enOptions: ['treat', 'trouble', 'realize', 'already'],
    answerIndex: 0,
    unitNumber: 18,
    quizNumber: 6,
  },
];

console.log(quiz.length); // 55
console.log(quiz.length); // 55

// === in gitBash: ====
// node js/question13.js
