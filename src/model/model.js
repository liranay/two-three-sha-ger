import _ from "lodash";

export const LANGUAGE = {
  ENGLISH: "english",
  HEBREW: "hebrew",
  ARABIC: "arabic",
  GERMAN: "german",
};

export const posts = [
  {
    filename: "1.jpeg",
    title: "Who is the villain?",
    tags: [
      "WarCrimes",
      "TheWestIsNext",
      "HamasisISIS",
      "Propagaza",
      "shieldren",
    ],
  },
  {
    filename: "2.jpeg",
    title: "Same Jihadist terror, different years.",
    tags: [
      "tError",
      "HamasisISIS",
      "TheWestIsNext",
      "CeasefireNOW",
      "Propagaza",
    ],
  },
  {
    filename: "3.jpeg",
    title: "True shared values and who aims to disrupt them..",
    description:
      "People tear down the American flag, In pro-Israeli protests they raise the American flag high.",
    tags: [
      "Westurn",
      "Woke",
      "ProPalestineRally",
      "StandWithIsrael",
      "CeasefireNOW",
    ],
  },
  {
    filename: "4.jpg",
    title: "This is not human. Right(s)?.",
    tags: ["HumanRights", "shieldren", "WarCrimes", "HamasisISIS", "Woke"],
  },
  {
    filename: "5.jpg",
    title:
      "After all hostages—men, women, and children—are immediately released and safely return to Israel.",
    description: "",
    tags: [
      "Hostages",
      "BringThemHomeNow",
      "CeasefireNOW",
      "StandWithIsrael",
      "shieldren",
    ],
  },
  {
    filename: "6.jpg",
    title: "Is this your strategic shielding?",
    tags: ["shieldren", "WarCrimes", "HamasisISIS", "HumanRights", "Propagaza"],
  },
  {
    filename: "7.jpg",
    title: "How to avoid #Propagaza? Credit: @Kerenaz",
    tags: ["Propagaza", "Woke", "MediaBias", "TheWestIsNext", "CeasefireNOW"],
  },
  {
    filename: "8.jpg",
    title:
      "Israel Defense Forces spokesperson: operational headquarters, weapons and technological equipment in the #MRI building ‼️at #ShifaHospital",
    tags: [
      "ShifaTerrorHQ",
      "WarCrimes",
      "HamasisISIS",
      "HumanRights",
      "TheWestIsNext",
    ],
  },
  {
    filename: "9.jpg",
    title: "What does the Red Cross do for human rights?",
    description: "",
    tags: [
      "BringThemHomeNow",
      "Hostages",
      "CeasefireNOW",
      "shieldren",
      "StandWithIsrael",
    ],
  },
  {
    filename: "10.jpg",
    title: "Am Israel Chai",
    description: ``,
    tags: [
      "BringThemHomeNow",
      "Hostages",
      "TheWestIsNext",
      "Woke",
      "CeasefireNOW",
    ],
  },
  {
    filename: "11.jpg",
    title: "No, Women, No cry.",
    description: `This is YOU! if you don't WAKE UP!
  Don’t sell who you are to a religious death cult, #HamasisISIS
 
  There are 240 Israeli Civilians and other nationalities that are hostages in Gaza, 30 of them are kids. #bringthemhomenow #bringthemhome
 
  Credit: Yana Yanuchka`,
    tags: [
      "TheWestIsNext",
      "Hostages",
      "BringThemHomeNow",
      "HamasisISIS",
      "WarCrimes",
    ],
  },
  {
    filename: "12.jpg",
    title: "CANCEL anyone who lift their head and supports terror.",
    description: "",
    tags: [
      "TheWestIsNext",
      "TerrorSplaining",
      "WarCrimes",
      "Propagaza",
      "CeasefireNOW",
    ],
  },
  {
    filename: "13.jpg",
    title: "CANCEL anyone who lift their head and supports terror.",
    tags: [
      "TheWestIsNext",
      "TerrorSplaining",
      "WarCrimes",
      "Propagaza",
      "CeasefireNOW",
    ],
  },
  {
    filename: "14.jpg",
    title: "Never Again, Again",
    tags: [
      "AntiZionism",
      "Antisemitism",
      "WarCrimes",
      "HamasisISIS",
      "HumanRights",
    ],
  },
  {
    filename: "15.jpg",
    title: "Is it human to use a human shield?",
    tags: [
      "Shieldren",
      "HamasisISIS",
      "HumanRights",
      "WarCrimes",
      "CeasefireNOW",
    ],
  },
  {
    filename: "16.jpg",
    title: "Save the world from Hamas",
    tags: [
      "Shieldren",
      "HamasisISIS",
      "WarCrimes",
      "CeasefireNOW",
      "TheWestIsNext",
    ],
  },
  {
    filename: "17.jpg",
    title: "You got confused, it is Rational Socialism not National Socialism!",
    tags: ["Woke", "Propagaza", "HamasisISIS", "TheWestIsNext", "HumanRights"],
  },
  {
    filename: "18.jpg",
    title: "Do you know what you are fighting for??",
    tags: [
      "Shieldren",
      "HamasisISIS",
      "WarCrimes",
      "HumanRights",
      "CeasefireNOW",
    ],
  },
  {
    filename: "19.jpg",
    title: "Do you know what you are fighting for??",
    tags: [
      "Shieldren",
      "HamasisISIS",
      "WarCrimes",
      "HumanRights",
      "CeasefireNOW",
    ],
  },
  {
    filename: "20.jpg",
    title: "Food for thought.",
    tags: [
      "Shieldren",
      "HamasisISIS",
      "WarCrimes",
      "HumanRights",
      "CeasefireNOW",
    ],
  },
];
export const getTags = () => {
  const allTags = _.flatMap(posts.map((post) => post.tags));
  return allTags;
};
