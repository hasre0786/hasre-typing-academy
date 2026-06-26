/**
 * Typing practice content.
 *
 * Curated sample levels are defined first (EASY_SAMPLE, NORMAL_SAMPLE, etc.).
 * The remaining slots up to each category's totalLevels are auto-generated
 * from category-specific sentence pools so every one of the 300 levels has
 * real, meaningful text (no "coming soon" placeholders).
 *
 * To improve a level, just add or replace an entry in the *_SAMPLE arrays —
 * curated entries always win over generated ones with the same number.
 */

import type { CategoryKey } from "./categories";
import { CATEGORIES } from "./categories";

export interface Level {
  number: number;
  title: string;
  text: string;
}

/* ----------------------------- CURATED SAMPLES ---------------------------- */

const EASY_SAMPLE: Level[] = [
  {
    number: 1,
    title: "Home Row Practice",
    text: `asdf jkl; asdf jkl; sad lad fad gas has jak lad sad ask flask glass dad had a sad day a lad had a glass a sad lad had a flask a glass had a sad ask a dad had a fad sad lad had a glass a flask had a glass a dad had a sad ask a lad had a flask a glass had a sad day a sad lad had a glass a flask had a sad ask a dad had a glass a lad had a flask a glass had a sad day a dad had a fad a lad had a sad ask a flask had a glass a glass had a sad ask a dad had a glass a lad had a flask a glass had a sad day a lad had a flask a glass had a sad ask a dad had a fad a lad had a glass a flask had a sad ask a dad had a glass a lad had a flask`,
  },
  {
    number: 2,
    title: "Small Words",
    text: `the cat and the dog play all day in the sun a boy and a girl run to the park they see a big tree and a small bird the bird can sing and fly a man walks by with his cap on his head a kid eats an apple and a red pear they all sit on the soft grass mom calls them home for lunch they eat hot rice and warm dal the food is good and they say thank you the sun goes down and the sky turns red the kids go to bed they read a short book and then sleep tight tomorrow they will play in the rain and jump in the cool water the day was long but full of joy and love every small thing matters in life so smile a lot and help your friends and family every day with a happy face and a kind word for all`,
  },
  {
    number: 3,
    title: "Simple Sentences",
    text: `My name is Ravi. I live in a small village in Bihar. I go to school every day with my friends. We learn many new things in our class. Our teacher is kind and helpful. I like to read books and write stories. After school I help my mother in the kitchen. My father works in the field. We grow rice, wheat and many vegetables. In the evening we sit together and talk. We share our day with each other. I also love to play cricket in the open ground. My best friend is Amit. He runs very fast. On Sunday we go to the market with our parents. We buy fresh fruits and sweets. Life in the village is simple but full of joy. I want to study hard and become a good person. I will work for my family and my country. Hard work and honesty are the keys to success in life.`,
  },
  {
    number: 4,
    title: "My Family",
    text: `My family is small but full of love. There are six members in my family. My grandfather is the oldest. He tells us many old stories every night. My grandmother cooks the best food in the whole village. My father is a farmer and he works hard from morning to evening. My mother takes care of the home and helps my father in the field. I have one younger sister. Her name is Anjali. She is in class three. We play together and study together. We help each other in our homework. On Sundays we all sit and watch television. We also visit our uncle and aunt in the next village. They have two sons who are my best friends. We climb trees, swim in the pond and run in the fields. My family is the most important thing in my life. They give me love, food and good values every day of my life.`,
  },
  {
    number: 5,
    title: "My School",
    text: `My school is the best place in our village. It has a big playground and many tall trees. The building is painted blue and white. There are ten rooms and a small library. I study in class six. My class has thirty students. We have six periods every day. I like English and Maths the most. Our teachers are very kind. They teach us with love and care. During the lunch break we play kabaddi and kho kho. We also share our tiffin with friends. The school bell rings at four in the evening. After that we go home. On Republic Day and Independence Day we have special events. We sing the national song and hoist the flag. Sweets are given to all students. I am proud of my school. It gives me knowledge, friends and many happy memories that will stay with me for the rest of my life forever.`,
  },
  {
    number: 6,
    title: "Friends",
    text: `Good friends are a gift from God. I have many friends in my village and school. A true friend always stands by your side in good times and bad times. My best friend is Suman. We have been friends since class one. We go to school together every morning. We share our books, pencils and lunch. When I am sad she makes me smile. When I am happy she shares my joy. We help each other in studies. We solve maths problems together and read stories aloud. On weekends we play in the fields and ride our bicycles. We also visit the temple with our families. A friend teaches us many things in life. A friend teaches us trust honesty and kindness. We must choose our friends with care. A good friend will guide us on the right path. A bad friend can lead us to wrong things in life so always be careful.`,
  },
  {
    number: 7,
    title: "Village Life",
    text: `Life in a village is simple and peaceful. The air is fresh and clean. The fields are green and wide. Birds sing in the morning and the sun rises slowly behind the hills. People wake up early and start their work. Farmers go to the fields with their bullocks. Women cook food and look after the children. Children walk to school in groups. The village has a small temple, a pond and a big banyan tree. In the evening, old people sit under the tree and tell stories of the past. The night is quiet and you can see many stars in the sky. There is no noise of cars or factories. People know each other and help in times of need. Life is not always easy. There are problems of water, roads and electricity. But the love and unity of village people make life beautiful and very meaningful for everyone living there.`,
  },
  {
    number: 8,
    title: "Animals Around Us",
    text: `Animals are an important part of our life. We see many animals in our village. Cows and buffaloes give us milk. We use this milk to make curd, butter and ghee. Bullocks help the farmers to plough the fields. Goats and sheep give us wool and meat. Hens give us eggs. Dogs guard our homes at night. Cats catch the mice that eat our grain. In the jungle near our village we can hear the call of birds and the chatter of monkeys. Sometimes we see deer and rabbits in the early morning. We must love and care for all animals. They cannot speak but they feel pain and joy just like us. We should give them clean water and food. We should not beat or hurt them. A kind heart loves every living being on this earth. By caring for animals we also care for our nature and our own future on this planet.`,
  },
  {
    number: 9,
    title: "Daily Routine",
    text: `A good routine makes life easy and successful. I wake up at five in the morning. After brushing my teeth I drink a glass of warm water. Then I go for a short walk in the fields. The fresh morning air gives me energy for the whole day. After the walk I do yoga and exercise for thirty minutes. Then I take a bath and offer prayers. My mother gives me a healthy breakfast. After that I sit and study for two hours before going to school. School time is from ten to four. After coming back I play with my friends for one hour. In the evening I help my mother in small house work. I do my homework before dinner. After dinner I read a story book or watch a good show with my family. I go to bed by ten. A simple routine gives peace, health and happiness to our life every single day.`,
  },
  {
    number: 10,
    title: "My Hobby",
    text: `Everyone should have a hobby. A hobby keeps our mind fresh and happy. My hobby is reading books. I read story books, history books and books about great people. Books are like good friends. They never leave us alone. They give us knowledge and joy. I have read books about Mahatma Gandhi, Dr. APJ Abdul Kalam and many freedom fighters. Their lives teach me how to be a better person. I also love to write small stories and poems in my notebook. Sometimes I read them to my mother and she is very happy. Another hobby of mine is gardening. I have planted roses, marigold and tulsi in front of my house. I water them every morning. They make my home beautiful. A hobby is not a waste of time. It builds our character and skill. I will keep reading and writing for the rest of my life and share my joy with others.`,
  },
];

const NORMAL_SAMPLE: Level[] = [
  {
    number: 1,
    title: "Computer Basics",
    text: `A computer is an electronic machine that follows the instructions given by a user. It accepts data, processes it and gives us a useful result called output. The main parts of a computer are the monitor, keyboard, mouse, CPU and printer. The CPU is called the brain of the computer because it does all the thinking and calculation work. The keyboard is used to type letters, numbers and symbols. The mouse is used to point and click on items shown on the screen. The monitor shows the work we do. Today computers are used in almost every field. They are used in schools, banks, hospitals, shops and railway stations. Students use computers to learn new subjects and to do their projects. Doctors use computers to keep patient records. With the help of the internet, a computer can connect us to people and information from any corner of the world in just a few seconds.`,
  },
  {
    number: 2,
    title: "The Internet",
    text: `The internet is a global network that connects millions of computers and mobile phones across the world. It has changed the way we live, learn and work. With the help of the internet we can send emails, watch videos, read news and study online. Students from small villages can now learn from the best teachers without leaving their home. Farmers can check the weather and the market price of crops on their phones. Shopkeepers can sell their goods to customers in any city. The internet has also brought us social media where we can share our thoughts and photos with our friends and family. However we must use the internet wisely. We should not share our personal information with strangers. We should not believe everything we read online. We should also take breaks from screens to protect our eyes and health. Used carefully, the internet is a powerful friend for every student today.`,
  },
  {
    number: 3,
    title: "Digital India",
    text: `Digital India is a great mission started by the Government of India in 2015. The main aim of this mission is to make the country digitally strong and to bring all government services to the common people through the internet. Under Digital India many useful services have been launched. People can now book train tickets, pay their bills, file taxes and apply for jobs from home. Aadhaar card has made identity proof simple and reliable. Apps like UPI and BHIM have made digital payment fast and safe. Even small shopkeepers in villages now accept payments through QR codes. Online education portals like Diksha and Swayam help students learn for free. Telemedicine services connect rural patients with city doctors. Digital India is also creating new jobs in the field of software, data and artificial intelligence. Every student should learn digital skills today to become a strong part of this growing digital future of our country.`,
  },
  {
    number: 4,
    title: "Save the Environment",
    text: `Our environment is the home of all living beings. It includes the air, water, land, plants and animals around us. In recent years our environment has been badly damaged by pollution and the cutting of trees. Smoke from factories and vehicles makes the air unhealthy. Plastic waste is filling our rivers and oceans. Many animals and birds are losing their homes because of deforestation. We must act now to save our planet. Every person can help in small ways. We should plant more trees and protect the ones we have. We should use less plastic and carry cloth bags when we go to the market. We should save water by closing the tap when not in use. We should also save electricity by switching off lights and fans when we leave a room. Our schools should teach students to love and protect nature. A clean environment is the right of every child and every future generation.`,
  },
  {
    number: 5,
    title: "Importance of Books",
    text: `Books are the best friends of a student. A good book is a treasure of knowledge and wisdom. Books open the door to new ideas, new places and new people. From a small storybook a child learns moral values like honesty, courage and kindness. From history books we learn about great leaders and the lessons of the past. From science books we learn how the world around us works. Books also improve our language and our power of imagination. A person who reads good books regularly speaks well and writes well. In today's world of mobile phones and television many students have stopped reading books. This is a big loss for them. We should make a habit of reading for at least thirty minutes every day. We should visit our school library often. A reading mind is a thinking mind, and a thinking mind builds a bright and successful future.`,
  },
  {
    number: 6,
    title: "Road Safety",
    text: `Road accidents are one of the biggest causes of death in our country today. Many of these accidents happen because people do not follow simple traffic rules. As students we must learn road safety from an early age. Always walk on the footpath. If there is no footpath, walk on the right side of the road facing the traffic. Cross the road only at the zebra crossing and look right, left and right again before stepping out. Never use your mobile phone while crossing the road. If you ride a bicycle, use a bell and reflectors. Two-wheeler riders must always wear a helmet and car drivers must wear a seat belt. Never drive too fast and never drink and drive. Follow the traffic lights at all times. Red means stop and green means go. Road safety is in our own hands. A few seconds of care can save a precious human life every single day on our roads.`,
  },
  {
    number: 7,
    title: "Science in Daily Life",
    text: `Science is everywhere around us. From the moment we wake up to the time we go to bed, we use the gifts of science. The alarm clock that wakes us up, the toothbrush we use, the gas stove on which our food is cooked, the fan that gives us cool air and the bulb that lights our room are all gifts of science. The mobile phone that connects us with our friends and the bus that takes us to school work on the laws of science. In hospitals, science saves millions of lives every year through medicines, X-rays and surgeries. In farming, new seeds and tools have helped farmers grow more food. Science has also helped us reach the moon and study distant stars. However we must use science for good purposes only. The same science can also create weapons that destroy lives. The future of science depends on the values of the people who use it today.`,
  },
  {
    number: 8,
    title: "Value of Time",
    text: `Time is the most precious thing in our life. Once a moment is gone, it can never come back. Money lost can be earned again but time lost is lost forever. Students who understand the value of time make great progress in their studies. They follow a daily timetable and complete their work on time. They do not waste hours in watching television or playing video games. A wise student gives proper time to studies, play, family and rest. Even great leaders like Mahatma Gandhi and Dr. Kalam followed strict routines and used every minute of their day. Lazy people who waste their time repent later when they fail in life. Time waits for no one. The early years of life are the best time to build good habits and learn new skills. Respect time and time will respect you. Use every day wisely and you will surely reach the goal of your dreams.`,
  },
];

const HARD_SAMPLE: Level[] = [
  {
    number: 1,
    title: "Technology & AI",
    text: `Technology has reshaped the 21st century in ways our grandparents could not have imagined. From 4G phones to 5G networks, from cloud storage to quantum computers, the pace of change is breathtaking. Artificial Intelligence (AI) is now at the heart of this revolution. AI helps doctors detect cancer in X-rays, helps farmers predict rainfall, and helps banks block fraud within milliseconds. Voice assistants like Alexa, Siri and Google Assistant answer our questions 24/7. Self-driving cars, drones for delivery, and robots in factories are no longer science fiction; they are real. However, with great power comes great responsibility. AI can be misused for deepfakes, surveillance and spreading fake news. As students of Bihar, we must learn coding, data science and ethics together. The world of 2030 will belong to those who can use technology, not those who only watch it. Are you ready to be part of this exciting future? Start learning today!`,
  },
  {
    number: 2,
    title: "Cyber Awareness",
    text: `Every time we use the internet, we leave behind a digital footprint. Hackers and cyber criminals try to misuse this data to steal money and identity. In India alone, more than 1,50,000 cyber crime cases were reported in 2023. The most common attacks are phishing emails, fake OTP calls, and false KYC messages. Never share your bank OTP, ATM PIN or UPI password with anyone, not even with your friends. Use strong passwords like "BiharRocks@2026" instead of simple ones like "12345". Always check the website address; secure sites begin with "https://". Do not click on unknown links sent by SMS or WhatsApp. Keep your mobile and laptop updated with the latest software. If you become a victim, immediately call the National Cyber Helpline at 1930 or report at cybercrime.gov.in. Cyber awareness is the new self-defense. Every student must learn it; every parent must teach it; every village must talk about it today.`,
  },
  {
    number: 3,
    title: "Bihar: Land of History",
    text: `Bihar is one of the oldest civilizations in the world. The name "Bihar" comes from "vihara", meaning a Buddhist monastery. It was in Bodh Gaya, under a peepal tree, that Prince Siddhartha attained enlightenment and became the Buddha around 528 BCE. Vaishali was the first republic of the world, where decisions were taken by an elected assembly. The Mauryan Empire, founded by Chandragupta Maurya in 322 BCE and made glorious by Emperor Ashoka, ruled most of the Indian subcontinent from Pataliputra (modern Patna). Nalanda University, built in the 5th century, hosted over 10,000 students from China, Korea, Tibet and beyond — a true global university 1,500 years before the modern ones. Bihar also gave India great leaders like Dr. Rajendra Prasad, our first President, and Jayaprakash Narayan, the architect of "Total Revolution". As proud sons and daughters of Bihar, we must protect this heritage and write a glorious future chapter.`,
  },
  {
    number: 4,
    title: "Career Guidance",
    text: `Choosing a career is one of the most important decisions in life. It should be based on three things: your interest, your ability, and the demand in the job market. After Class 10, students can choose Science, Commerce or Arts. Science (PCM) opens doors to engineering, computer science and architecture. Science (PCB) leads to medical, pharmacy and biotechnology. Commerce is the path to CA, CS, banking and business. Arts offers careers in law, civil services, journalism, design and teaching. In today's world, new careers are emerging every year: data analyst, digital marketer, ethical hacker, UX designer, drone pilot, and even YouTuber. Government jobs through SSC, Banking, Railway and UPSC remain very popular. Skill-based courses from NSDC, Skill India and PMKVY help rural students earn while they learn. Do not run after a career just because your friend chose it. Talk to teachers, read about real professionals, and choose a path where you can give your 100%.`,
  },
  {
    number: 5,
    title: "Digital Payments",
    text: `India is the world leader in digital payments today. In 2023, UPI processed more than 100 billion transactions worth over 180 lakh crore rupees. From a chai shop in Patna to a sweet stall in Gaya, you can pay just by scanning a QR code. The main systems are UPI (BHIM, Google Pay, PhonePe, Paytm), Net Banking, debit/credit cards, and mobile wallets. Digital payments are fast, safe, and create a record for tax purposes. They also help small shopkeepers become part of the formal economy. However, users must stay alert. Never approve a "collect request" from an unknown number; that is how people lose their savings. Set a daily transaction limit on your UPI app. Enable SMS alerts on your bank account. Never share your UPI PIN over a call, even if the caller claims to be from your bank. Digital India is a gift; let us use it wisely and teach our parents how to use it too.`,
  },
];

const ADVANCE_SAMPLE: Level[] = [
  {
    number: 1,
    title: "Artificial Intelligence",
    text: `Artificial Intelligence, commonly known as AI, is the branch of computer science that deals with the creation of machines capable of performing tasks that would normally require human intelligence. These tasks include learning from experience, understanding natural language, recognizing images, making decisions, and even creating art. The field of AI was officially born at the Dartmouth Conference in 1956, but its real explosion has happened in the last decade due to three factors: enormous datasets, powerful GPUs, and breakthroughs in deep learning. Today, AI powers the recommendation engines of Netflix and YouTube, the voice of Google Assistant, the translation of Google Translate, the navigation of Ola and Uber, and the medical scans of leading hospitals. In agriculture, AI-powered drones can predict crop disease before the human eye can see it. In education, adaptive learning platforms can teach each child at his or her own pace. The launch of ChatGPT in November 2022 brought generative AI into every home. Within two months it had crossed 100 million users, the fastest adoption of any technology in human history. However, AI also raises serious questions about privacy, bias, job loss and the misuse of deepfakes. The Indian government has launched the IndiaAI Mission with a budget of over 10,000 crore rupees to build sovereign AI capabilities. As students, we must not fear AI; instead, we must learn to work with it. Tomorrow's leaders will be those who can combine human empathy with the unmatched speed and scale of artificial intelligence in every field of life.`,
  },
  {
    number: 2,
    title: "Cyber Security",
    text: `Cyber security is the practice of protecting computers, networks, programs and data from digital attacks, unauthorized access and damage. In an age where almost every aspect of our personal, financial and professional life is connected to the internet, cyber security has become as important as physical security. The global cost of cyber crime is expected to cross 10 trillion US dollars by 2025, making it one of the largest illegal economies in the world. India faces more than 18 lakh cyber attacks every day, ranging from simple phishing emails to sophisticated ransomware that can shut down hospitals and banks. The three pillars of cyber security are confidentiality, integrity and availability, often called the CIA triad. To protect ourselves we must use strong unique passwords for every account, enable two-factor authentication, keep our software updated, avoid public Wi-Fi for banking, and back up important data regularly. Organizations must invest in firewalls, intrusion detection systems, employee training and incident response plans. Ethical hackers, also known as white hats, play a crucial role by finding weaknesses before criminals can exploit them. Indian institutes like IIT Kanpur, IIIT Delhi and the Indian Cyber Crime Coordination Centre (I4C) are doing pioneering work. For young students in Bihar and across rural India, a career in cyber security is a golden opportunity, with starting salaries of 6 to 12 lakh per year and global demand for skilled professionals. Learning Python, networking basics, and ethical hacking through platforms like TryHackMe and HackTheBox can open the door to a bright and meaningful future.`,
  },
  {
    number: 3,
    title: "Leadership in the Modern World",
    text: `Leadership is not a title; it is a behavior. A true leader is one who inspires others to become the best version of themselves. In the modern world, leadership has evolved far beyond the old command-and-control model. Today's leaders, whether in business, government, sports or social work, are expected to be empathetic, transparent, data-driven and lifelong learners. The pandemic of 2020 showed the world that the best leaders are those who can make difficult decisions with limited information while keeping the well-being of their people at heart. Leaders like Sundar Pichai of Google, Indra Nooyi formerly of PepsiCo, and Satya Nadella of Microsoft have shown that humility and curiosity are more powerful than ego and aggression. In India, we are blessed with the legacy of great leaders like Mahatma Gandhi, who led the nation to freedom without firing a single bullet, Sardar Patel, who united 565 princely states into one country, and Dr. APJ Abdul Kalam, who taught us to dream big and work hard. Modern leadership requires four core skills: vision to see the future, communication to share that vision, courage to take tough calls, and integrity to stay true to one's values under pressure. Leadership can be learned at any age. A class monitor, a village panchayat member, a startup founder and a country's prime minister all face the same fundamental challenge: how to bring out the best in the people who follow them. As young students of Bihar, you can start practicing leadership today by helping a classmate, organizing a clean-up drive, or simply by setting a good example through your own daily conduct and discipline.`,
  },
];

/* --------------------------- TOPIC SENTENCE POOLS ------------------------- */

const EASY_TOPICS: { title: string; pool: string[] }[] = [
  {
    title: "My Village",
    pool: [
      "I live in a small village in Bihar.",
      "Our village is green and full of trees.",
      "The fields around my home are wide and open.",
      "Farmers go to the field early in the morning.",
      "Children walk to school in small groups.",
      "There is a small pond near our house.",
      "Birds sing in the morning and the air is fresh.",
      "We have a small temple in the centre of the village.",
      "In the evening the sky turns red and orange.",
      "People sit and talk under the big banyan tree.",
      "Our village has a small market on Sunday.",
      "Old people tell us stories of the past.",
      "Boys play cricket in the open ground.",
      "Girls play kho kho and skip with a long rope.",
      "Life in the village is calm and full of love.",
    ],
  },
  {
    title: "My Mother",
    pool: [
      "My mother is the most loving person in my life.",
      "She wakes up before sunrise every day.",
      "She cooks fresh food for the whole family.",
      "My mother helps me in my homework.",
      "She tells me good stories at night.",
      "Her hands are soft and her words are kind.",
      "She takes care of all of us with a big smile.",
      "When I am sick she sits beside my bed.",
      "She teaches me to be honest and brave.",
      "My mother loves my father very much.",
      "She works hard but never complains.",
      "I want to make my mother proud one day.",
      "I will study hard and take care of her.",
      "A mother is a true friend and a great teacher.",
      "I love my mother more than anyone in the world.",
    ],
  },
  {
    title: "Going to School",
    pool: [
      "I go to school every day with my friends.",
      "We wear a clean blue uniform.",
      "Our school bag has books, pens and a water bottle.",
      "The school bell rings at ten in the morning.",
      "We stand in a line for the morning prayer.",
      "Our teachers are kind and patient.",
      "We learn English, Hindi, Maths and Science.",
      "I like the drawing class the most.",
      "During break we play in the ground.",
      "We share our tiffin with our best friends.",
      "The library has many story books.",
      "We sing the national song with pride.",
      "School ends at four in the evening.",
      "I do my homework before dinner.",
      "School gives me knowledge and joy every day.",
    ],
  },
  {
    title: "Fruits and Food",
    pool: [
      "Fresh fruits are very good for our health.",
      "Mango is the king of fruits in summer.",
      "Banana gives us instant energy.",
      "Apple a day keeps the doctor away.",
      "We eat rice, dal and roti every day.",
      "My mother cooks tasty sabzi with fresh vegetables.",
      "Milk and curd make our bones strong.",
      "We must drink eight glasses of water every day.",
      "Junk food is not good for our body.",
      "We should eat at the right time.",
      "Wash your hands before eating any food.",
      "Eat slowly and chew your food well.",
      "Green vegetables give us iron and vitamins.",
      "A good diet keeps us happy and active.",
      "Healthy food is the secret of a healthy life.",
    ],
  },
  {
    title: "Festivals of India",
    pool: [
      "India is a land of many festivals.",
      "Diwali is the festival of lights and joy.",
      "We clean our home and light many diyas.",
      "Holi is the festival of colours.",
      "We play with red, pink and green colours.",
      "Eid is a big festival for our Muslim friends.",
      "Christmas is celebrated by Christians in December.",
      "On Chhath we offer prayers to the rising sun.",
      "Children wait for sweets and new clothes.",
      "We wear new clothes and visit our relatives.",
      "Mother makes special food on every festival.",
      "We share gifts and warm wishes with friends.",
      "Festivals teach us love, unity and peace.",
      "All festivals bring families closer together.",
      "Every festival fills our home with happiness.",
    ],
  },
  {
    title: "Playing Games",
    pool: [
      "Playing games keeps us happy and healthy.",
      "I love to play cricket with my friends.",
      "Kabaddi is a famous game in our village.",
      "Football is fast and full of energy.",
      "Girls love to play badminton in the evening.",
      "Games teach us teamwork and patience.",
      "We learn to win and lose with a smile.",
      "Sports also help us to grow strong.",
      "Every school must have a playground.",
      "Daily exercise is as important as study.",
      "Yoga gives peace to the mind and body.",
      "Indoor games like chess sharpen the brain.",
      "Carrom is fun to play with the family.",
      "A good player is also a good student.",
      "Play hard, study hard and dream big.",
    ],
  },
];

const NORMAL_TOPICS: { title: string; pool: string[] }[] = [
  {
    title: "Computers in Education",
    pool: [
      "Computers have changed the way students learn today.",
      "Online classes brought the best teachers to every home.",
      "A laptop is a small library, a teacher and a notebook in one.",
      "Free websites like Khan Academy teach maths and science to all.",
      "YouTube has lakhs of videos to explain any topic clearly.",
      "Government portals like Diksha and Swayam offer free courses.",
      "Students from villages can now compete with city students.",
      "Typing and computer skills are needed for almost every job.",
      "Coding teaches us how to think step by step.",
      "Every school should have a clean and working computer lab.",
      "Teachers must learn new tools to teach the new generation.",
      "Online tests give quick results and clear feedback.",
      "Parents should encourage children to use computers wisely.",
      "Screen time must be limited to protect the eyes.",
      "Used well, a computer is the best friend of a curious student.",
    ],
  },
  {
    title: "The Power of Internet",
    pool: [
      "The internet connects billions of people across the world.",
      "Information that once took days is now available in seconds.",
      "Email and chat apps keep families in touch every day.",
      "Online shopping brings the market to our doorstep.",
      "Farmers check weather and mandi rates on their phone.",
      "Students take admission and pay fees online.",
      "Doctors give advice through video calls in small towns.",
      "Banking has become simple and safe with the internet.",
      "News from any country reaches us in real time.",
      "Social media gives every person a voice.",
      "We must check facts before sharing any news.",
      "Strong passwords protect us from online thieves.",
      "Children should use the internet only with their parents nearby.",
      "Too much screen time can harm sleep and eyes.",
      "The internet is a great tool when used with care.",
    ],
  },
  {
    title: "Save Water Save Life",
    pool: [
      "Water is the most precious gift of nature.",
      "Only three percent of the world's water is fresh.",
      "Many villages in Bihar still face a shortage of clean water.",
      "We must close the tap while brushing our teeth.",
      "A leaking tap can waste hundreds of litres in one month.",
      "Rainwater harvesting can refill our wells and ponds.",
      "Farmers should use drip irrigation to save water.",
      "Factories must clean dirty water before sending it to rivers.",
      "Plastic waste pollutes our rivers and oceans.",
      "Holy rivers like the Ganga and Yamuna need our help.",
      "Schools should teach children to use water wisely.",
      "Every drop of water counts for the future.",
      "Cleaning lakes and ponds is the duty of every citizen.",
      "Without water there is no farming and no life.",
      "Save water today so our children can drink tomorrow.",
    ],
  },
  {
    title: "Healthy Lifestyle",
    pool: [
      "Health is the real wealth of life.",
      "Wake up early and breathe the fresh morning air.",
      "Daily exercise keeps our body and mind strong.",
      "Yoga and meditation give peace to the mind.",
      "Eat seasonal fruits and green vegetables.",
      "Drink at least eight glasses of clean water every day.",
      "Junk food and cold drinks harm our body.",
      "Sleep for seven to eight hours every night.",
      "A short walk after dinner helps in good digestion.",
      "Wash your hands before every meal.",
      "Brush your teeth twice a day.",
      "Spend time with family to keep the mind happy.",
      "Read good books to keep the brain sharp.",
      "Avoid mobile phones one hour before sleep.",
      "Good habits today build a strong life tomorrow.",
    ],
  },
  {
    title: "Importance of Education",
    pool: [
      "Education is the most powerful weapon to change the world.",
      "An educated mind is free from fear and superstition.",
      "Every child has the right to a good school.",
      "Education opens the door to better jobs and a better life.",
      "Girls' education is the foundation of a strong nation.",
      "Free schemes by the government help poor children study.",
      "Mid-day meals make sure no child studies on an empty stomach.",
      "Scholarships help bright students reach big universities.",
      "Skill courses help us earn money along with our degree.",
      "A teacher is the second parent of every student.",
      "Books, libraries and the internet are great teachers.",
      "We must respect our teachers and our school.",
      "Learning never ends; it goes on for a lifetime.",
      "Education builds character along with knowledge.",
      "A literate Bihar will be a strong and proud Bihar.",
    ],
  },
  {
    title: "Pollution Problem",
    pool: [
      "Pollution is one of the biggest problems of our time.",
      "Smoke from cars and factories makes the air unhealthy.",
      "Plastic bags are filling our drains and rivers.",
      "Loud horns and music cause noise pollution.",
      "Pesticides in farms pollute our soil and food.",
      "Polluted water spreads many serious diseases.",
      "Cutting trees makes pollution even worse.",
      "We must plant more trees in our village and town.",
      "Cycle and public transport reduce air pollution.",
      "Use a cloth bag instead of a plastic bag.",
      "Separate dry and wet waste at home.",
      "Schools can run clean campus drives every month.",
      "Children must teach their parents about pollution.",
      "A clean city is a healthy and happy city.",
      "Together we can save our earth from pollution.",
    ],
  },
];

const HARD_TOPICS: { title: string; pool: string[] }[] = [
  {
    title: "5G & Future Networks",
    pool: [
      "5G networks are 10 times faster than 4G and have very low delay.",
      "India crossed 4,00,000 5G sites in less than 18 months — a world record.",
      "Smart factories, remote surgery and self-driving cars all depend on 5G.",
      "By 2030, 6G will offer speeds of 1 terabit per second.",
      "AI + 5G + IoT (Internet of Things) will create true smart cities.",
      "Farmers will use 5G sensors in fields to save water and increase yield.",
      "Telemedicine in rural Bihar can save lives during medical emergencies.",
      "However, 5G also raises concerns about privacy, energy and e-waste.",
      "We need 'Make in India' chipsets to reduce dependence on imports.",
      "Companies like Jio, Airtel and Vi are leading the 5G rollout.",
      "Engineers, technicians and tower workers — all are in huge demand.",
      "Cyber security on 5G is a non-negotiable priority.",
      "Spectrum auctions help the government earn thousands of crores.",
      "Faster networks mean cheaper data and better video calls.",
      "Are you ready to build the apps of the 5G generation?",
    ],
  },
  {
    title: "Indian Space Mission",
    pool: [
      "ISRO is one of the top 6 space agencies in the world.",
      "Chandrayaan-3 made India the first country to land near the lunar south pole, on 23 August 2023.",
      "The Mangalyaan mission in 2014 reached Mars in the very first attempt.",
      "Aditya-L1 is India's first solar observatory, launched in September 2023.",
      "Gaganyaan will send Indian astronauts (Vyomanauts) to space by 2025–26.",
      "Our PSLV and GSLV rockets launch satellites for over 30 countries.",
      "Space technology gives us GPS, weather forecast and TV signals.",
      "Indian satellites help fishermen, farmers and disaster managers.",
      "Private companies like Skyroot and Agnikul are India's new SpaceX.",
      "ISRO works on a budget that is just 5% of NASA's — proof of frugal engineering.",
      "Schools should run 'Space Clubs' to inspire the next generation.",
      "Dr. APJ Abdul Kalam called space the 'next frontier' for India.",
      "Students from Bihar can join ISRO through GATE and IIST exams.",
      "Space data helps the army, navy and air force in real time.",
      "The sky is no longer the limit; the universe is!",
    ],
  },
  {
    title: "Startup India",
    pool: [
      "India is the 3rd largest startup ecosystem in the world.",
      "Over 1,15,000 startups are now registered with DPIIT (2024 data).",
      "More than 110 unicorns (companies worth $1 billion+) have been born in India.",
      "Flipkart, Zomato, Paytm, Ola, BYJU'S — all began as small startups.",
      "The Startup India scheme of 2016 changed the rules of the game.",
      "Tier-2 and Tier-3 cities like Patna, Bhagalpur and Gaya are now joining the wave.",
      "Funding comes from angel investors, venture capital and government schemes.",
      "Stand-Up India loans help women and SC/ST entrepreneurs start a business.",
      "Atal Innovation Mission has set up 10,000+ tinkering labs in schools.",
      "Failure is not the opposite of success; it is part of it.",
      "Every successful founder failed many times before winning big.",
      "A great startup solves a real problem of real people.",
      "Build, measure, learn — repeat. That is the startup formula.",
      "You don't need a fancy degree; you need passion and grit.",
      "Why not start your own startup from your own village?",
    ],
  },
  {
    title: "Indian Economy 2025",
    pool: [
      "India is the 5th largest economy in the world, with a GDP of $4 trillion+.",
      "By 2027, India is expected to overtake Germany and Japan.",
      "Services sector contributes nearly 55% to the national GDP.",
      "Agriculture still employs more than 45% of India's workforce.",
      "GST (Goods and Services Tax) unified the country's tax system in 2017.",
      "UPI alone processes more transactions than all cards combined.",
      "PLI (Production-Linked Incentive) schemes are boosting Indian manufacturing.",
      "iPhones are now 'Assembled in India' and even exported to the US.",
      "Renewable energy is growing fast — 500 GW target by 2030.",
      "Bullet trains, Vande Bharat and metro networks are reshaping mobility.",
      "Foreign Direct Investment crossed $70 billion in 2023.",
      "Inflation and unemployment remain key challenges.",
      "MSMEs (Micro, Small & Medium Enterprises) are the backbone of the economy.",
      "Skill India is training crores of youth for tomorrow's jobs.",
      "A self-reliant India (Atmanirbhar Bharat) is the goal of every citizen.",
    ],
  },
  {
    title: "Climate Change",
    pool: [
      "Climate change is the biggest threat to our planet today.",
      "Global temperatures have risen 1.1°C since 1880.",
      "Glaciers in the Himalayas are melting faster than ever.",
      "Erratic monsoons hurt farmers in Bihar, UP and West Bengal.",
      "Floods in 2023 affected over 3 crore Indians.",
      "Heatwaves cross 50°C in many parts of north India.",
      "Burning of coal, oil and gas is the main cause.",
      "Deforestation and cattle farming also add greenhouse gases.",
      "The Paris Agreement (2015) set a 1.5°C limit — we are close to crossing it.",
      "India targets Net Zero emissions by 2070.",
      "Solar, wind and EVs are part of the solution.",
      "Switch off lights, fans and ACs when not needed.",
      "Plant a tree on every birthday — a small but powerful step.",
      "Choose cycle or walking for short distances.",
      "Save the Earth; we have no Planet B.",
    ],
  },
  {
    title: "Smart Farming",
    pool: [
      "Indian agriculture is undergoing a digital revolution.",
      "Apps like Kisan Suvidha, eNAM and AgriMarket help farmers daily.",
      "Drones spray pesticides in minutes instead of hours.",
      "Soil sensors tell exactly how much water and fertilizer is needed.",
      "AI models predict pest attacks 7–14 days in advance.",
      "Drip irrigation saves up to 60% water compared to flood irrigation.",
      "PM-KISAN gives ₹6,000 per year directly to farmer bank accounts.",
      "Kisan Credit Card offers cheap loans without long paperwork.",
      "FPOs (Farmer Producer Organizations) help small farmers sell better.",
      "Cold chains reduce crop wastage from 30% to less than 10%.",
      "Organic farming is a growing export market.",
      "Bihar's makhana and litchi have got GI tags — protecting their identity.",
      "Skill courses train rural youth in agri-tech and dairy management.",
      "Tomorrow's farmer will hold a tablet along with a tractor.",
      "Smart farming = more income + less effort + healthy food.",
    ],
  },
];

const ADVANCE_TOPICS: { title: string; pool: string[] }[] = [
  {
    title: "Machine Learning Revolution",
    pool: [
      "Machine Learning is the engine that drives modern Artificial Intelligence and has fundamentally reshaped industries across the globe.",
      "Unlike traditional programming, where humans write explicit rules, ML systems learn patterns directly from large volumes of data.",
      "The three primary paradigms — supervised, unsupervised and reinforcement learning — each solve a different class of real-world problems.",
      "Deep neural networks, inspired loosely by the human brain, now power applications from speech recognition to medical imaging.",
      "Frameworks such as TensorFlow, PyTorch and JAX have democratized access to state-of-the-art research.",
      "Indian companies and research labs contribute heavily to open-source ML through papers, datasets and pre-trained models.",
      "Successful ML projects depend more on clean, well-labelled data than on the choice of a fancy algorithm.",
      "Model evaluation must go beyond accuracy and include fairness, robustness and explainability.",
      "Production ML requires careful attention to data drift, monitoring, versioning and continuous retraining pipelines.",
      "MLOps practices ensure that experiments in notebooks become reliable services serving millions of users.",
      "Edge ML brings intelligence to smartphones, smartwatches and IoT devices without sending data to the cloud.",
      "Generative models — GANs, diffusion models and large language models — have opened entirely new creative frontiers.",
      "Responsible AI principles must guide every product decision from data collection to model deployment.",
      "Career paths range from research scientist and ML engineer to data analyst and AI product manager.",
      "Students who master mathematics, programming and curiosity will lead the next decade of innovation.",
    ],
  },
  {
    title: "Personal Finance",
    pool: [
      "Personal finance is the foundation of long-term independence, dignity and freedom in modern life.",
      "Budgeting is the simple but powerful habit of telling every rupee where it must go before the month begins.",
      "The 50-30-20 rule suggests spending 50% on needs, 30% on wants and saving or investing the remaining 20%.",
      "An emergency fund covering six months of expenses protects a family from sudden medical or job-related shocks.",
      "Compound interest is the eighth wonder of the world; small monthly investments grow into massive wealth over decades.",
      "Mutual funds, particularly SIPs in index funds, are an excellent starting point for new investors.",
      "Equity rewards patience while debt instruments provide stability and predictability of returns.",
      "Term insurance offers high coverage at extremely low premiums and is the cheapest protection a young earner can buy.",
      "Health insurance is no longer optional in a country where medical inflation crosses fourteen percent every year.",
      "Avoid the temptation of EMI traps for depreciating assets such as the latest smartphones or expensive vehicles.",
      "Credit cards are powerful tools when paid in full each month and dangerous weapons when not.",
      "Tax planning under sections like 80C, 80D and the new tax regime should be done in April, not in March.",
      "Retirement planning must start with the very first salary; the cost of delay is enormous.",
      "Financial literacy should be taught in every school and discussed openly in every Indian family.",
      "Wealth is not how much you earn; it is how much you keep and grow over a lifetime of disciplined choices.",
    ],
  },
  {
    title: "Public Speaking Mastery",
    pool: [
      "Public speaking is consistently ranked as the most valuable yet most feared skill in the professional world.",
      "Every great leader in history — from Mahatma Gandhi to Barack Obama — was first a great communicator.",
      "Effective speech begins with deep clarity about the audience, the purpose and the single message to be remembered.",
      "Storytelling is the oldest and still the most powerful technique to make ideas memorable and emotional.",
      "Body language, eye contact and tone contribute more than the actual words in face-to-face communication.",
      "The first sixty seconds of any talk decide whether the audience will listen or quietly check their phones.",
      "Practice is non-negotiable; even legendary speakers rehearse important talks more than fifty times.",
      "Recording yourself on a phone and reviewing the playback is the fastest path to visible improvement.",
      "Pauses are not weakness; they give the audience time to absorb and the speaker time to think.",
      "Avoid filler words such as 'um', 'like' and 'actually' by deliberately replacing them with silent pauses.",
      "Knowing your subject ten times deeper than what you will share builds genuine, unshakeable confidence.",
      "Engage the audience through questions, polls, short anecdotes and concrete examples from daily life.",
      "Visual aids should support the speaker, not replace the speaker; slides full of text are a disaster.",
      "Toastmasters clubs and online platforms offer a safe space to practise and receive structured feedback.",
      "A student in a small village who masters public speaking can one day stand on the biggest global stage.",
    ],
  },
  {
    title: "Sustainable Future",
    pool: [
      "Sustainability is no longer a luxury; it is the survival strategy of our generation and the next.",
      "The United Nations Sustainable Development Goals provide a clear seventeen-point roadmap for global progress.",
      "Renewable energy — solar, wind, hydro and green hydrogen — is now cheaper than fossil fuels in most markets.",
      "India has crossed 200 gigawatts of installed renewable capacity and aims for 500 gigawatts by 2030.",
      "Electric vehicles, supported by the FAME-II scheme, are reshaping the entire transportation industry.",
      "Circular economy thinking treats waste as a resource and designs products for reuse, repair and recycling.",
      "Sustainable agriculture, organic farming and natural pesticides protect both soil and human health.",
      "Buildings that use rainwater harvesting, solar panels and natural ventilation can cut energy bills by half.",
      "Each household can reduce its carbon footprint by composting, conserving water and saying no to single-use plastic.",
      "Green jobs in solar installation, EV maintenance and waste management offer millions of new careers.",
      "Corporate ESG (Environmental, Social, Governance) reporting is now a serious factor for global investors.",
      "Climate-resilient infrastructure protects vulnerable populations from floods, cyclones and heatwaves.",
      "Schools, colleges and universities must place sustainability at the heart of every curriculum.",
      "Children today are the loudest, clearest and most credible voice for urgent climate action.",
      "A sustainable future is built one mindful choice at a time, by every person, every day, everywhere.",
    ],
  },
  {
    title: "Self Development",
    pool: [
      "Self development is the lifelong project of becoming a better version of yourself, one small habit at a time.",
      "Reading at least twenty pages of a good book every single day will transform your mind within one year.",
      "Journaling for ten minutes each morning brings clarity, gratitude and a clear plan for the day ahead.",
      "Physical exercise is non-negotiable; a strong body is the foundation of a strong, focused mind.",
      "Sleep is not a luxury; it is the time when the brain consolidates learning and the body fully repairs itself.",
      "The company you keep determines the conversations you have, and conversations shape your future destiny.",
      "Set goals that are specific, measurable, ambitious yet realistic, and clearly time-bound.",
      "Break every large goal into the smallest possible daily action that takes less than fifteen minutes.",
      "Learn to say a firm 'no' to anything that does not bring you closer to your most important goals.",
      "Failure is not the opposite of success; it is the price of admission to extraordinary achievement.",
      "Develop a growth mindset by treating every challenge as a chance to learn rather than a threat to your ego.",
      "Money, fame and applause are by-products; character, knowledge and relationships are the true assets.",
      "Practise gratitude daily; what we appreciate appreciates in our life over the long run.",
      "Volunteer for a cause larger than yourself; meaning is found in service, not in selfishness.",
      "Wake up every day with the firm intention to be one percent better than the person you were yesterday.",
    ],
  },
];

/* ------------------------------- GENERATOR -------------------------------- */

// deterministic pseudo-random based on a level number, so generated text
// is stable across renders/builds.
function mulberry32(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function buildText(pool: string[], targetWords: number, seed: number): string {
  const rnd = mulberry32(seed);
  // Fisher–Yates shuffle a copy of the pool, then keep adding shuffled blocks
  // until we hit the target word count.
  const shuffle = (arr: string[]) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const sentences: string[] = [];
  let words = 0;
  while (words < targetWords) {
    for (const s of shuffle(pool)) {
      sentences.push(s);
      words += s.split(/\s+/).length;
      if (words >= targetWords) break;
    }
  }
  return sentences.join(" ");
}

function generate(
  category: CategoryKey,
  topics: { title: string; pool: string[] }[],
  curated: Level[],
): Level[] {
  const total = CATEGORIES.find((c) => c.key === category)!.totalLevels;
  const target = CATEGORIES.find((c) => c.key === category)!.wordsPerLevel;
  const curatedMap = new Map(curated.map((l) => [l.number, l]));

  const out: Level[] = [];
  for (let n = 1; n <= total; n++) {
    const existing = curatedMap.get(n);
    if (existing) {
      out.push(existing);
      continue;
    }
    const topic = topics[(n - 1) % topics.length];
    // vary part number so titles like "My Village — Part 2" appear later
    const round = Math.floor((n - 1) / topics.length) + 1;
    const title = round === 1 ? topic.title : `${topic.title} — Part ${round}`;
    const seed = (category.charCodeAt(0) * 1000 + n) >>> 0;
    out.push({
      number: n,
      title,
      text: buildText(topic.pool, target, seed),
    });
  }
  return out;
}

/* ------------------------------- EXPORTS ---------------------------------- */

const LEVELS: Record<CategoryKey, Level[]> = {
  easy: generate("easy", EASY_TOPICS, EASY_SAMPLE),
  normal: generate("normal", NORMAL_TOPICS, NORMAL_SAMPLE),
  hard: generate("hard", HARD_TOPICS, HARD_SAMPLE),
  advance: generate("advance", ADVANCE_TOPICS, ADVANCE_SAMPLE),
};

export const getLevels = (key: CategoryKey): Level[] => LEVELS[key] ?? [];

export const getLevel = (key: CategoryKey, number: number): Level | undefined =>
  getLevels(key).find((l) => l.number === number);
