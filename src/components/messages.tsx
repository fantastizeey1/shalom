import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Messages() {
  const testimonials = [
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
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Happy Birthday to one of the most sweetest and beautiful soul I know! Thinking about the days we spent together at FGGC brings back so many beautiful memories. You made those times so special with your infectious laughter, your kind heart, and the way you always knew how to light up a room. Life was so much more fun with you around, and I’ll always treasure those moments we shared—full of joy, laughter, and friendship. I feel so blessed to know you and call you my friend. Mummy Nky ❤! You deserve nothing but the very best today and always. Love you so much!",
      name: "Ogechi",
      src: "/Ogechi.svg",
    },
    // {
    //   quote:
    //     "We want to felicitate with our own, our sweet daughter Shallybaby💕 on this auspicious day that the Lord has made… we wish her more wins & may lines continue to fall in pleasant places for her as she ages gracefully in good health & prosperity 🙏. God bless you & we love 💕 you very much.",
    //   name: "Mum and David",
    //   src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   quote:
    //     "We want to felicitate with our own, our sweet daughter Shallybaby💕 on this auspicious day that the Lord has made… we wish her more wins & may lines continue to fall in pleasant places for her as she ages gracefully in good health & prosperity 🙏. God bless you & we love 💕 you very much.",
    //   name: "Mum and David",
    //   src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
    // {
    //   quote:
    //     "We want to felicitate with our own, our sweet daughter Shallybaby💕 on this auspicious day that the Lord has made… we wish her more wins & may lines continue to fall in pleasant places for her as she ages gracefully in good health & prosperity 🙏. God bless you & we love 💕 you very much.",
    //   name: "Mum and David",
    //   src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // },
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
  ];

  return (
    <section>
      <AnimatedTestimonials testimonials={testimonials} autoplay />
    </section>
  );
}
