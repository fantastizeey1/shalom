import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Messages() {
  const testimonials = [
    {
      quote:
        "This birthday, i would have loved to present a bowI of palm-oil stew with plenty assorted Meat but since this is a surprise message, I wish you abundant happiness and love. May all your dreams turn into reality and may lady luck visit your home today. May you be gifted with life’s biggest joys and never-ending bliss. After all, you yourself are a gift to earth, so you deserve the best. Happy birthday. Happy birthday to one of the sweetest person I’ve ever known. Happy Birthday SHALOM. ",
      name: "Paul",
      src: "/Paul.svg",
    },
    {
      quote:
        "As your uncle I’ve seen you grow and I’m proud of what you have become. Happy Birthday to an amazing niece! May today and every day be filled with every blessing and grace. You make the world more beautiful just by being in it. Life’s what you make it, and I want to make yours as wonderful as possible. I hope you get everything you wish for in the year ahead. Happy birthday, my darling niece, I love you!",
      name: "Mark Owi",
      src: "/Owi.svg",
    },
    {
      quote:
        "Mummy: I wish you many more years, long life, prosperity and I pray that God grant you all your heart desires. Scolo: I wish you many more years,more knowledge,more wisdom, More of the good things that life has to offer and Amen to your secret prayers , I pray you continue to grow from glory to more glory  HBD sis. Adebo: I wish you a car 🤣😂",
      name: "Aunty Faith, Scolo & Adebo",
      src: "/Faith.svg",
    },
    {
      quote:
        "We want to felicitate with our own, our sweet daughter Shallybaby💕 on this auspicious day that the Lord has made… we wish her more wins & may lines continue to fall in pleasant places for her as she ages gracefully in good health & prosperity 🙏. God bless you & we love 💕 you very much.",
      name: "Mum and David",
      src: "/mum.svg",
    },
    {
      quote:
        "See who Is 27 My dearest Ochanya The best gift Kwasu gave me Despite our differences I’m more than grateful to have you as a friend Knowing you are always in my corner despite the distance You complimented me so well back then and even till now You are soaring already and I know you are definitely soaring higher in this new year of yours I’m so grateful for the gift of you Cheers to Friendship forever my love🥂",
      name: "Blessing",
      src: "/Blessing.svg",
    },
    {
      quote:
        "Happy Birthday to someone truly extraordinary! Here’s to celebrating you, the love you share so freely, the kindness you extend effortlessly, and the happiness that I hope surrounds you today and all the days that follow. Remember, you are cherished beyond measure and your uniqueness adds so much value to the lives of those fortunate enough to call you a friend. You are deeply valued, and I hope this year brings you everything your heart desires.",
      name: "Sam",
      src: "sam.svg",
    },
    {
      quote:
        "Happy Birthday to one of the most sweetest and beautiful soul I know! Thinking about the days we spent together at FGGC brings back so many beautiful memories. You made those times so special with your infectious laughter, your kind heart, and the way you always knew how to light up a room. Life was so much more fun with you around, and I’ll always treasure those moments we shared—full of joy, laughter, and friendship. I feel so blessed to know you and call you my friend. Mummy Nky ❤! You deserve nothing but the very best today and always. Love you so much!",
      name: "Ogechi",
      src: "/Ogechi.svg",
    },
    {
      quote:
        "My dearest human pillow It's your birthday today and I'm grateful to have you not just as my sister but my friend also. Your heart is golden and your smile I love and I'm happy that the universe made me blessed by gifting you to me. Elohi my idoma queen that made me fall in love with listening to idoma songs and I can even speak small 😂 It's your day and just like you add flavour to people lives I pray that good things bombard you daily. I love you so much my sister and thank you for always supporting me with my many imaginations❤",
      name: "Marvellous",
      src: "/Marvellous.svg",
    },
    {
      quote:
        "Happy birthday my first daughter. Knowing you is loving you fr! You’ve been amazing and genuine right from the very first day. You light up every room with your happiness and I pray you never lose your smile. May God bless and keep you. Cheers to a year filled with laughter, love, joy and unforgettable memories. ILYSM❤",
      name: "Elisha",
      src: "/Elisha.svg",
    },
    {
      quote:
        "Dear Shalom, Happy Birthday to an incredible soul! From the moment we met at FGGC Gusau, I knew you were someone special. Your genuine love, your kind heart, and your unwavering faith in God make you the kind of friend everyone should have in their corner. On your special day, I wish you nothing but the best. May you always attract good things, and may God continue to bless and increase you in every aspect of your life. I love you, and I’m so grateful for your friendship. Here’s to many more amazing years ahead.",
      name: "Lois",
      src: "/Lois.svg",
    },
    {
      quote:
        "Happy birthday Shalom More wealth to your bags👑 More blessings from God✨ More meat to your breast😩so i can place my head when i want to cry about man You are the sweetest soul. I havent known you long but your presence can be soothing🌺 Keep being the wonderful ray of sunshine that you are sweetums🍫🥰",
      name: "Chisom",

      src: "/Chisom.svg",
    },
    {
      quote: "Happy birthday my lovely daughter, with love Dad ❤",
      name: "Dad",

      src: "/Dad.svg",
    },
    {
      quote:
        "Happy Birthday My Dearest Shalom! Thinking of the time we spent living together briefly always brings a smile to my face. Those memories remind me how lucky I was to have shared that chapter of my life with someone as amazing as you. I hope your day is filled with laughter, love, and everything that makes you happiest. Wishing you all the best in the year ahead, you truly deserve it. Have a fantastic birthday babe",
      name: "Bimbo",

      src: "/Bimbo.svg",
    },
    {
      quote:
        "Hey Shalom or sugar as we popular know 😂 First, girlllllllll I love how you carry your church and how it’s helping you journey through live!!! Shalom, you are warm and kind. I pray that this new year unlocks a deeper relationship with God. I pray that the women he desires you to be becomes more clearer and you are always in his perfect will. I pray that you continue to impact lives and your store shall overflow. With love,",
      name: "Loveth Kewe",

      src: "/LovethKewe.svg",
    },
    {
      quote:
        "Happy birthday to my sister , my friend, my gisting partner! I want to use this medium to tell you that are a special girl, a rare gem with a special heart. Although the fact that you still disturb me can't be disputed but with you there's no dull moment. Our journey together as siblings has been a wonderful experience ,we have shared moments of sadness and happiness. Thank you for supporting me in your own capacity. May this birthday open doors of opportunities for you and may you marry a good man",
      name: "Esther",

      src: "/Esther.svg",
    },
    {
      quote:
        "Happy Birthday Seductress. I hope your day is as cheerful as your mine and your blessings be as large as your…. Your heart. You deserve all the good things of life cos you’re one of the kindest and sweetest souls I know. Love you loads ♥",
      name: "Blaise",

      src: "/Blaise.svg",
    },
    {
      quote:
        "Happy birthday my sugar! All of my words won’t fit into this compilation but I bet that this sentence will encompass it accurately. Till the wheels fall off and when we are old and grey ❤, I love you and I know this new year will usher you into greatness! Keep shining and don’t lose your childlikeness ever!",
      name: "Diamanté",

      src: "/Diamanté.svg",
    },
    {
      quote:
        "Hey, annoying ass big head with the biggest heart (pun intended). I hope when you read this, that you're filled with joy, as you should, because if anybody should get it, it's you. Happy birthday, boo. Even though I'm the best thing to happen to you, I pray a lot better things for you as you continue to age gracefully.",
      name: "Solomon",

      src: "/Solomon.svg",
    },
    {
      quote:
        "Shalom is an awesome friend,She has proven to be someone I can count on anytime any day! I love and miss the relationship She had with my baby Freya🤭🤭 she used to be my baby's best friend back then in school 😂😂 Happy birthday Shalom Omo Mark. I wish you the good things of life and I pray God grants your heart desires. 😍",
      name: "Bimpe",

      src: "/Bimpe.svg",
    },
    {
      quote:
        "Happy Birthday, Shalom!, I haven’t known you for long, but it’s already so clear how smart, hardworking, and dedicated you are to your craft. I love how deeply you love God and His people—it truly shines through everything you do. I’m so excited for the amazing things ahead of you as you chase your dreams in UI/UX design. I pray you achieve all your goals and more. Keep being you—you’re truly a blessing. Cheers to more wins, more growth, and more grace this new year! 🎉",
      name: "Precious A",

      src: "/Precious A.svg",
    },
    {
      quote:
        "Happy Birthday, You are a sweet little thing even tho we both know you are not Little, You are a special and great friend, we had great times together and I will never let go of those special moments I want to pray to God to hear your deep prayers and answer them, so you'd be forever grateful of how far you've come, Hearty Cheers to you Shalom, Koray Cares ❤",
      name: "Demola Koray",

      src: "/Demola Koray.svg",
    },
    {
      quote:
        "Hi Shalom! happy birthday! 🥳 You’re an awesome person with a good heart. Over the years I’ve known you, you’ve never shied away from being present in the lives of those close to you. I hope you find people who will always be there for you same way you are for your friends! Happy birthday my guy! Cheers!",
      name: "Heritage",

      src: "/Heritage.svg",
    },
    {
      quote:
        "To the one who’s ready to welcome anyone with open arms, never lets me starve and is always present, Happy Birthday Ekum🎉❤🎈. Thank you for all the memories we share and the right plugs you have😂. Thank you for making this adulthood bearable for me with your presence it in. The lord bless you, keep you, prospers you and satisfies you on all sides. Have the best birthday ever!",
      name: "Ayo Khorey",

      src: "/Ayo Khorey.svg",
    },
    {
      quote:
        "Happy birthday to someone who belongs in the hall of fame! You are aspirational, inspirational, and so full of wisdom. I have only the utmost respect for a person as great as you. I'm sending my very best wishes your way today. You have your own busy life but always come through for others. You’re a woman of substance and presence, wise, open and kind hearted. May your special day this year bring you everything you want and more, as you truly deserve the best to come your way Favour of the Lord shall speak for you in every ramifications, GOD BLESSINGS Shall radiate you in all endeavors Deariee",
      name: "Dami Dee",

      src: "/Dami Dee.svg",
    },
    {
      quote:
        "Happy Birthday SHA baby, thank you for your generosity and beautiful heart, you’re a sweet girl and I don’t regret you being my friend. When we met, I knew that you’d always be a part of my life. I admire your fun personality and your love for Christ ♥ You’re kind, you’re down to earth and you never hesitate to always say the truth and I love you so much for that. I wish you all the good things of life, I pray that all your heart desires come to pass IJN. May God give you peace on your special day and the years ahead, may be give you abundance of blessings today and always. Have a fantastic birthday SHA baby love you now and always my girl.",
      name: "Fife",

      src: "/Fife.svg",
    },
    {
      quote:
        "Happy birthday sis🎊 Thank you for being the loving, caring, funny and prayerful soul you are. I wish you long life in good health and wealth and I pray your heart desires as you enter a new chapter shall all be granted in Jesus name. Have a lot of fun, I love you❤",
      name: "Samzkhid",

      src: "/Samzkhid.svg",
    },
    {
      quote:
        "Happy Birthday to you my friend ❤! I’ve been thinking about what to say, and honestly, no words can fully capture how much you mean to me. Those past 11 months when we weren’t talking were some of the hardest, I missed you so much. I missed your laugh, your energy, your wisdom, and the way you’ve always made life feel brighter. Now that we’ve reconciled, a piece of me has returned. You’re one of my safe spaces. On your special day, I want you to know how much I love you and how grateful I am for you. I hope this year brings you all the joy, love, and peace you deserve and I promise to never take your presence in my life for granted. Thank you for being and forgiving me.",
      name: "Tennyson Chelsea",

      src: "/Chelsea.svg",
    },
    {
      quote:
        "Happy Birthday dear Shalom, Today I celebrate you, your dreams and all the beautiful things that make you unique. May this new year usher in endless joy, good health and great opportunities. I wish you a day FILLED WITH LOVE, laughter and all the things that make you the happiest person. Have a fantastic day cause you deserve nothing less!",
      name: "Funmilade",

      src: "/Funmilade.svg",
    },
    {
      quote:
        "Shally baby, you have such a good heart and I can tell that you are an open book with genuine intentions. Happy birthday sweetheart ❤ I wish you all the love, laughter, and all the good things that make you happy!",
      name: "Slimzy",

      src: "/Slimzy.svg",
    },
    {
      quote:
        "Yoooo…. Shalom Mark. Happy happy birthday to one of most intelligent woman I know, a good cook, a coded OG, a woman that would say things the way it is, Omoo I have lost my epistle touch🥲,  All I’m trying to say is I really appreciate your friendship and I pray God continues to bless and keep you… Add more sense Shalom Mark 🌚, Happy Birthday Dear 🥳🍾",
      name: "Tjosh",

      src: "/tjosh.svg",
    },
    {
      quote:
        "I just wanted to take this beautiful moment to tell you how much you mean to me. You’ve been my confidant and my supportive gee for years. You're not just a friend, you're a piece of my heart. Through thick and thin, you've always been there with a smile and a listening ear. I cherish every moment we share, and I'm so grateful to have you in my life. Thank you for always being there for me no matter what . Your kindness and your strength and also the ability to keep smiling will never cease in your life . Happy birthday Shally , God bless everything you do dearie. Have a good year ahead .",
      name: "Seyi",

      src: "/seyi.svg",
    },
  ];

  return (
    <section id="Messages">
      <AnimatedTestimonials testimonials={testimonials} autoplay />
    </section>
  );
}
