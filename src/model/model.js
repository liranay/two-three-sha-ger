import _ from "lodash";

export const LANGUAGE = {
  ENGLISH: "english",
  HEBREW: "hebrew",
  ARABIC: "arabic",
  GERMAN: "german",
};

export const posts = [
  {
    filename: "1.jpg",
    title: "Who is the villain? #23shager",
    tags: [
      "WarCrimes",
      "TheWestIsNext",
      "HamasisISIS",
      "Propagaza",
      "shieldren",
    ],
    category: "Popular"
  },
  {
    filename: "2.jpg",
    title: "Same Jihadist terror, different years.#23shager Credit: @EllaTravelsLove",
    tags: [
      "tError",
      "HamasisISIS",
      "TheWestIsNext",
      "CeasefireNOW",
      "Propagaza",
       "ellakenan",
      
    ],
    category: "Cultural and Religious Insights"
  },
  {
    filename: "3.jpg",
    title: "True shared values and who aims to disrupt them. #23shager",
    description:
      "People tear down the American flag, In pro-Israeli protests they raise the American flag high.",
    tags: [
      "Westurn",
      "Woke",
      "ProPalestineRally",
      "StandWithIsrael",
      "CeasefireNOW",
    ],
    category: "Cultural and Religious Insights"
  },
  {
    filename: "4.jpg",
    title: "This is not human. Right(s)?. #23shager",
    tags: ["HumanRights", "shieldren", "WarCrimes", "HamasisISIS", "Woke"],
    category:"Human Rights"
  },
  {
    filename: "5.jpg",
    title:
      "*After all hostages—men, women, and children—are immediately released and safely return to Israel. #23shager",
    description: "",
    tags: [
      "Hostages",
      "BringThemHomeNow",
      "CeasefireNOW",
      "StandWithIsrael",
      "shieldren",
      "ellakenan",
    ],
    category: "Influencers"
  },
  {
    filename: "6.jpg",
    title: "Is this your strategic shielding? #23shager",
    tags: ["shieldren", "WarCrimes", "HamasisISIS", "HumanRights", "Propagaza"],
    category: "Terrorism and Security"
  },
  {
    filename: "7.jpg",
    title: "How to avoid #Propagaza? #23shager Credit: @Kerenaz",
    tags: ["Propagaza", "Woke", "MediaBias", "TheWestIsNext", "CeasefireNOW", "KerenAzaria"],
    category: "Media and Public Perception"
  },
  {
    filename: "8.jpg",
    title:
      "Operational headquarters, weapons and technological equipment in the #MRI building at #ShifaHospital. #23shager",
    tags: [
      "ShifaTerrorHQ",
      "WarCrimes",
      "HamasisISIS",
      "HumanRights",
      "TheWestIsNext",
      "IDF spokesperson"
    ],
    category: "Terrorism and Security"
  },
  {
    filename: "9.jpg",
    title: "What does the Red Cross do for human rights? #23shager",
    description: "",
    tags: [
      "BringThemHomeNow",
      "Hostages",
      "CeasefireNOW",
      "shieldren",
      "StandWithIsrael",
    ],
    category: "Hostages, Victims & Survivors"
  },
  {
    filename: "10.jpg",
    title: "Am Israel Chai. #23shager",
    description: ``,
    tags: [
      "BringThemHomeNow",
      "Hostages",
      "TheWestIsNext",
      "Woke",
      "CeasefireNOW",
    ],
    category:"Hostages, Victims & Survivors"
  },
  {
    filename: "11.jpg",
    title: "No, Women, No cry. #23shager",
    tags: ["TheWestIsNext", "Hostages", "BringThemHomeNow", "WarCrimes", " Yana Yanuchka"],
    category: "Cultural and Religious Insights"
  },
  {
    filename: "12.jpg",
    title:
      "30 KIDS are hostages by HamasisISIS in Gaza, Can you find our little girl?. #23shager",
    description: "",
    tags: [
      "Hostages",
      "BringThemHomeNow",
      "WarCrimes",
      "HamasisISIS",
      "CeasefireNOW",
    ],
    category:"Hostages, Victims & Survivors"
  },
  {
    filename: "13.jpg",
    title: "CANCEL anyone who lift their head and supports terror. #23shager",
    tags: [
      "TheWestIsNext",
      "TerrorSplaining",
      "WarCrimes",
      "Propagaza",
      "CeasefireNOW",
    ],
    category: "Terrorism and Security"
  },
  {
    filename: "14.jpg",
    title: "Never Again, Again. #23shager",
    tags: [
      "AntiZionism",
      "Antisemitism",
      "WarCrimes",
      "HamasisISIS",
      "HumanRights",
    ],
    category:"Human Rights"
  },
  {
    filename: "15.jpg",
    title: "Is it human to use a human shield?. #23shager",
    tags: [
      "Shieldren",
      "HamasisISIS",
      "HumanRights",
      "WarCrimes",
      "CeasefireNOW",
    ],
    category:"Human Rights"
  },
  {
    filename: "16.jpg",
    title: "Save the world from HamasisISIS. #23shager",
    tags: [
      "Shieldren",
      "HamasisISIS",
      "WarCrimes",
      "CeasefireNOW",
      "TheWestIsNext",
    ],
    category: "Terrorism and Security"
  },
  {
    filename: "17.jpg",
    title: "You got confused, it is Rational Socialism not National Socialism!. #23shager",
    tags: ["Woke", "Propagaza", "HamasisISIS", "TheWestIsNext", "HumanRights"],
    category:"Human Rights"
  },
  {
    filename: "18.jpg",
    title: "Do you know what you are fighting for??. #23shager",
    tags: [
      "Shieldren",
      "HamasisISIS",
      "WarCrimes",
      "HumanRights",
      "CeasefireNOW",
    ],
    category: "Media and Public Perception"
  },
  {
    filename: "19.jpg",
    title: "Choose your club. #23shager Credit: @EllaTravelsLove",
    tags: ["HamasisISIS", "WarCrimes", "HumanRights", "ellakenan"],
    category: "Influencers"
  },
 
  {
    filename: "22.png",
    title: "Is it Illegal to Defend Myself? #23shager",
    tags: [ "HamasisISIS",
      "WarCrimes",
      "HumanRights",
      "CeasefireNOW"],
      category: "Media and Public Perception"
  },

  {
    filename: "23.png",
    title: "Does the Quran allow this atrocity? #23shager",
    tags: ["Islam", "Religion", "HamasisISIS", "WarCrimes",],
    category: "Cultural and Religious Insights"
  },

  {
    filename: "24.png",
    title: "FreePalestine = FreeVandalists. #23shager",
    tags: [ "Vandalists", "HamasisISIS", "WarCrimes"],
    category: "Terrorism and Security"
  },

  {
    filename: "25.png",
    title: "May Hell be with You. #23shager",
    tags: [ "WarCrimes", "Hostages"],
    category:"Hostages, Victims & Survivors"
  },

  

  {
    filename: "27.png",
    title: "#MeJew #23shager",
    tags: ["Jews", "Holocaust", "GazaLight", "MeJewMeToo"],
    category: "International Conflict"
  },

  {
    filename: "28.png",
    title: "You Know Nothing. #23shager",
    tags: ["HAMAS", "Woke", "Propagaza", "HamasisISIS", "TheWestIsNext", "HumanRights"],
    category: "International Conflict"
  },

  {
    filename: "29.png",
    title: "Your Child for Dinner? Why Not? #23shager",
    tags: ["WarCrimes", "Jews", "Holocaust"],
    category: "Terrorism and Security"
  },

  {
    filename: "30.png",
    title: "FREE PALESTINE? #23shager",
    tags: ["UsefullIdiots", "Woke", "Propagaza", "HamasisISIS", "TheWestIsNext", "HumanRights"],
    category: "Terrorism and Security"
  },
  {
    filename: "31.png",
    title: "Is Hamas Human? #23shager",
    tags: ["HamasisISIS", "FreeGazaFromHamas"],
    category: "Terrorism and Security"
  },


{
    filename: "32.png",
    title: "BRING THEM HOME ! #23shager",
    tags: ["RedCross", "StandWithUs"],
    category:"Hostages, Victims & Survivors"
  },


{
    filename: "33.png",
    title: "Shame on You Harvard #23shager",
    tags: ["University", "standwithisrael","StopAntisemitism"],
    category: "International Conflict"
  },


{
    filename: "34.png",
    title: "Nevr Again? #23shager",
    tags: ["HamasisISIS", "bringthemhome", "standwithisrael"],
    category: "International Conflict"
  },

{
    filename: "35.png",
    title: "They’re All the SAME #23shager",
    tags: ["HamasisISIS", "Nazism"],
    category: "Terrorism and Security"
  },


{
    filename: "36.png",
    title: "BRING THEM HOME, NOW !!! #23shager",
    tags: ["bringthemhome", "standwithisrael"],
    category:"Hostages, Victims & Survivors"
  },


{
    filename: "37.png",
    title: "Why is There a Time Limit Only When it Comes to Israel? #23shager",
    tags: ["standwithisrael", "bringthemhome"],
    category: "Media and Public Perception"
  },


{
    filename: "38.png",
    title: "I’M OK ? #23shager",
    tags: ["HamasisISIS", "InnocentWomen", "InnocentChildren"],
    category:"Hostages, Victims & Survivors"
  },


{
    filename: "40.png",
    title: "Oops..#23shager",
    tags: ["HamasisISIS","Hypocrisy"],
    category: "Media and Public Perception"
  },


{
    filename: "41.png",
    title: "Who is the Giving Tree?. #23shager",
    tags: ["HumanitarianCrisisLie", "HamasisISIS","Hypocrisy"],
    category: "Popular"
  },

{
    filename: "42.png",
    title: "World’s Twisted Point of View. #23shager",
    tags: ["HamasisISIS", "standwithisrael"],
    category: "Media and Public Perception"
  },
  {
    filename: "43.png",
    title: "We Are Not Going ANYWHERE. #23shager #StandWithIsrael #StandWithJews",
    tags: ["StandWithIsrael", "StandWithJews"],
    category: "Popular"
  },


{
    filename: "44.png",
    title: "Hummus Is Better. #23shager #StandWithIsrael #HamasIsCancer",
    tags: ["StandWithIsrael", "HamasIsCancer"],
    category: "Popular"
  },


{
    filename: "45.png",
    title: "Gen Z Wake Up! #23shager #StandWithIsrael #tError",
    tags: ["StandWithIsrael", "tError"],
    category: "Terrorism and Security"
  },


{
    filename: "46.png",
    title: "Stop This Hypocrisy. #23shager #StandWithIsrael #AntiZionism",
    tags: ["StandWithIsrael", "AntiZionism"],
    category: "Media and Public Perception"
  },


{
    filename: "47.png",
    title: "The New Nazi. #23shager #StandWithIsrael #Antisemitism Credit:TheShadow",
    tags: ["StandWithIsrael", "Antisemitism"],
    category: "International Conflict"
  },


{
    filename: "48.png",
    title: "The New Spice Girls. #23shager #StandWithIsrael #TheWestIsNext",
    tags: ["StandWithIsrael", "TheWestIsNext"],
    category: "Cultural and Religious Insights"
  },

{
    filename: "49.png",
    title: "Choose Your Shield. #23shager #StandWithIsrael #Shieldren #WarCrime",
    tags: ["StandWithIsrael", "Shieldren", "WarCrime"],
    category: "Terrorism and Security"
  }, 
{
    filename: "100.jpg",
    title: "UN secretary general, UNICEF and United Nations do not care about Israeli children. #23shager #WorldChildrensDay #standwithisrael Credit:@EllaTravelsLove",
    tags: ["WorldChildrensDay", "standwithisrael","ellakenan"],
    category: "Influencers"
  },

{
    filename: "101.jpg",
    title: "This children's day we call for the return of our children and all hostages. #23shager #WorldChildrensDay #standwithisrael #BringThemBack #BringThemBackHome #Hamasisisis Credit:@EllaTravelsLove",
    tags: ["BringThemBack", "BringThemBackHome", "Hamasisisis" ,"WorldChildrensDay", "standwithisrael","ellakenan" ],
  category: "Influencers"
},
{
    filename: "102.jpg",
    title: "Please take an immediate stance against Jihadi terrorist support on campus.. #23shager #standwithisrael #Hamasisisis Credit:@EllaTravelsLove",
    tags: ["Hamasisisis", "standwithisrael", "ellakenan" ],
    category: "Influencers"
  },
{
    filename: "103.jpg",
    title: "Gen Z in the US is really the biggest disappointment of all time. #23shager #standwithisrael #TheWestIsNext #Educateyourself Credit:@EllaTravelsLove",
    tags: ["TheWestIsNext","Educateyourself","ellakenan" ],
    category: "Influencers"
  },  
{
    filename: "104.jpg",
    title: "The New American Idol? #TheWestIsNext #Educateyourself #23shager #standwithisrael Credit:@EllaTravelsLove",
    tags: ["TheWestIsNext","Educateyourself","ellakenan" ],
    category: "Influencers"
  }, 
{
    filename: "105.jpg",
    title: "Did you ever question yourself why was it so easy to make you a useful idiot in the service of ISIS? #23shager #standwithisrael #HamasisISIS #Educateyourself Credit:@EllaTravelsLove",
    tags: ["TheWestIsNext","Educateyourself", "UsefullIdiots" ,"ellakenan" ],
    category: "Influencers"
  }, 
{
    filename: "106.jpg",
    title: "Imagine that Hamas-ISIS has infiltrated your village, murdered you friends, family and kidnapped you days before giving birth. #23shager #standwithisrael #HamasisISIS #WomanRights Credit:@EllaTravelsLove",
    tags: ["InnocentChildren", "bringthemhome", "WomanRights" ,"ellakenan" ],
    category: "Influencers"
  }, 
{
    filename: "107.jpg",
    title: "An Israeli woman, in the last weeks of her final trimester, was kidnapped to Gaza on October 7th and had to give birth while in captivity. #23shager #standwithisrael #HamasisISIS #WomanRights Credit:@EllaTravelsLove",
    tags: ["InnocentChildren", "bringthemhome", "WomanRights" ,"ellakenan" ],
    category: "Influencers"
  }, 
{
    filename: "108.jpg",
    title: "Roger Waters, WE know what happened. Hamas terrorists broke into our cities, butchered our citizens, raped our women, and took our children hostage. #23shager #standwithisrael  #HamasisISIS #Educateyourself  Credit:@EllaTravelsLove",
    tags: ["TheWestIsNext","Educateyourself", "UsefullIdiots" ,"ellakenan" ],
    category: "Influencers"
  }, 
{
    filename: "109.jpg",
    title: "Current state of higher education in the US. #standwithisrael #23shager #educateyourself #University Credit:@EllaTravelsLove",
    tags: ["University","Educateyourself", "UsefullIdiots" ,"ellakenan" ],
    category: "Influencers"
  },
{
    filename: "110.jpg",
    title: "This is how you look. #standwithisrael #hamasisisis #educateyourself #23shager #University Credit:@EllaTravelsLove",
    tags: ["University","Educateyourself", "UsefullIdiots" ,"ellakenan" ],
    category: "Influencers"
  },
 {
    filename: "111.jpg",
    title: "Imagine failing to understand the undeniable facts - It's Israel now, your home is next.Angelina I'm talking to you. #23shager @Angelina Jolie #thewestisnext #standwithisrael #freegazafromhamas Credit:@EllaTravelsLove",
    tags: ["standwithisrael","Educateyourself", "freegazafromhamas" ,"ellakenan" ],
    category: "Influencers"
  },
 {
    filename: "112.jpg",
    title: "Hamas is the sole cause of suffering both in Israel and in Gaza. #freepalestinefromhamas #humanrights #humanity #standwithisrael #23shager Credit:@EllaTravelsLove",
    tags: ["standwithisrael","Educateyourself", "humanrights", "freegazafromhamas" ,"ellakenan" ],
    category: "Influencers"
  },
{
    filename: "113.jpg",
    title: "Amongst the 241 people there are more than 30 babies and children, some without their parents! #23shager #bringthemhomenow #humanrights #humanity #standwithisrael #freegazafromhamas Credit:@EllaTravelsLove",
    tags: ["InnocentChildren", "bringthemhome", "humanrights","ellakenan" ],
    category: "Influencers"
  },
  {
    filename: "114.jpg",
    title: "There cannot be a humanitarian ceasefire withou their release. 9 months-year-old babies! 85-year-olds! Please share. #23shager#HamasisISIS #TheWestlsNext #BringThemBack #BringThemHomeNow #standwithisrael Credit:@EllaTravelsLove",
    tags: ["InnocentChildren", "bringthemhome", "humanrights","HamasisISIS","TheWestlsNext", "BringThemBack", "BringThemHomeNow", "standwithisrael", "ellakenan" ],
    category: "Influencers"
  },
  {
    filename: "83.jpg",
    title: "Ignoring the unprecedented, premeditated and extreme cruelty of the sexual violence committed by Hamas, means not only failing Israeli women but failing the ENTIRE international human rights system. #23shager #StandWithIsrael #WomenRights #MeJewMeToo Credit: @Tina Nordahl Nissim ",
    tags: ["StandWithIsrael", "WomenRights", "MeJewMeToo"],
    category:"Human Rights"
  },
{
    filename: "84.jpg",
    title: "#MeJewMeToo #23shager",
    tags: ["StandWithIsrael", "WomenRights", "MeJewMeToo"],
    category:"Human Rights"
    

  },
{
    filename: "85.jpg",
    title: "We fight to save our kids, Hamas uses their kids as human shields. #23shager#StandWithIsrael #CeaseFire Credit: @EllaTravelsLove ",
    tags: ["StandWithIsrael", "CeaseFire", "ellakenan"],
    category: "Influencers"
  },
  {
    filename: "400.jpg.jpg",
    title: "The IDF found a terrorist rocket in a little girl's bed Beit Hanoun. Another hectic abuse of civilians. Did we say human shield already? #23shager Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "shieldren", "WarCrimes", "YosephHaddad"],
    category: "Influencers"
  },


{
    filename: "401.jpg.jpg",
    title: "16 NOV - These were found on 3 terrorists from Hebron, making their way to kill jews in Jerusalem. Help us stop them now. #23shager Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "MeJewMeToo", "StopItNow", "YosephHaddad"],
    category: "Influencers"
  },


{
    filename: "402.jpg.jpg",
    title: "An injured Jewish hero is being treated by an Arab Muslim hero nurse. This is the real partnership the world should see! Jews and Arabs live in harmony and peace. This is the only way and this is what we want. #23shager Credit: @yosephhaddad",
    tags: ["HumanRights", "StandWithIsrael", "FreeGazaFromHamas", "YosephHaddad"],
    category: "Influencers"
  },


{
    filename: "403.jpg.jpg",
    title: "The German football club SV Werder Bremen support in Israel and the 250 (!!!!) israeli hostages. This is how all sports clubs around the world should act. Thank you for standing with Israel @werderbremen! #23shager Credit: @yosephhaddad",
    tags: ["Hostages", "BringThemHomeNow", "WarCrimes", "HumanRights", "YosephHaddad"],
    category: "Influencers"
  },


{
    filename: "404.jpg.jpg",
    title: "Who is the villain? #23shager Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "TheWestIsNext", "Propagaza", "YosephHaddad"],
    category: "Influencers"
  },


{
    filename: "405.jpg.jpg",
    title: "Hamas weapons were found in a Kindergarten in Gaza. We also want to stop the human shield and free Palestine from Hamas…#23shager Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "FreeGazaFromHamas", "shieldren", "YosephHaddad"],
    category: "Influencers"
  },


{
    filename: "406.jpg",
    title: "Violence creates more violence. Education to violence leads to more violence…#23shager Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "FreeGazaFromHamas", "violence", "YosephHaddad"],
    category: "Influencers"
  },


{
    filename: "800.jpg",
    title: "Is there still hope for peace? I really wish there is… Picture by: Emad Hajjaj (Jordan) #23shager",
    tags: ["StandWithIsrael", "PeaceInTheMiddleEast", "StopItNow"],
    category: "Social Activism and Support"
  },



{
    filename: "407.jpg",
    title: "Knowing in advance about the planned massacre and not doing anything to stop it is a war crime! Blood on your hands! You call yourself Journalists? Shame on you!#23shager Credit: @yosephhaddad",
    tags: ["StandWithIsrael", "WarCrimes", "HumanRights", "YosephHaddad"],
    category: "Influencers"
  },
  {
    filename: "201.png",
    title: "Israel Explained. #23shager Credit:@noatishby",
    tags: ["StandWithIsrael", "TheNewYorkTimes", "NoaTishby"],
    category: "Influencers"
  },


{
    filename: "202.png",
    title: "Kidnapped From Israel. #23shager Credit:@noatishby",
    tags: ["StandWithIsrael", "BringThemHomeNow","NoaTishby"],
    category: "Influencers"
  },


{
    filename: "203.png",
    title: "Bring Them Home. #23shager Credit:@noatishby",
    tags: ["StandWithIsrael", "BringThemBack","NoaTishby"],
    category: "Influencers"
  },


{
    filename: "204.png",
    title: "BBC fake it till you make it. #23shager Credit:@noatishby",
    tags: ["StandWithIsrael", "MediaBias","NoaTishby"],
    category: "Influencers"
  },


{
    filename: "205.png",
    title: "Anti-Zionism = Antisemitism. #23shager Credit:@noatishby",
    tags: ["StandWithIsrael", "StopAntisemitism","NoaTishby"],
    category: "Influencers"
  },


{
    filename: "206.png",
    title: "Antisemitic Students. #23shager Credit:@noatishby",
    tags: ["StandWithIsrael", "StopAntisemitism","NoaTishby"],
    category: "Influencers"
  },
{
    filename: "207.png",
    title: "Stop Antesimitism. #23shager Credit:@noatishby",
    tags: ["StandWithIsrael", "ProPalestineRally","NoaTishby" ],
    category: "Influencers"
  },
  {
    filename: "86.jpg",
    title: "Beautiful young lady @edenkhalifa in Tel Aviv standing up for her country Israel. Why do we never hear of Arabs like her? The media only showcases anti-Jew Arabs. #23shager #StandWithIsrael. Credit:@TimeToStandUpForIsrael",
    tags: ["StandWithIsrael", "TimeToStandUpForIsrael"],
    category: "Social Activism and Support"
  },
   {
    filename: "300.png",
    title: "Umm…absolutely not. #23shager #jewishhumor Credit:@jewbelong",
    tags: ["StandWithIsrael", "JewBelong", "JewishHumor"],
    category: "Social Activism and Support"
  },
  {
    filename: "301.png",
    title: "Having “the talk” about birds and bees was a breeze compared to dismantling antisemitic tropes picked up at college. #23shager #Truth #endjewhatred Credit:@jewbelong",
    tags: ["StandWithIsrael", "JewBelong", "EndJewHatred"],
    category: "Social Activism and Support"
  },
  {
    filename: "302.png",
    title: "Hate crimes = jail time.Choose midterms instead of prison terms. #23shager #Truth Credit:@jewbelong",
    tags: ["StandWithIsrael", "JewBelong", "University"],
    category: "Social Activism and Support"
  },
  {
    filename: "303.png",
    title: "Antisemitism is never an option. #23shager #endjewhatred  Credit:@jewbelong",
    tags: ["StandWithIsrael", "JewBelong", "University"],
    category: "Social Activism and Support"
  },
  {
    filename: "304.png",
    title: "We need you now more than ever. #23shager #endjewhatred #activism. Credit:@jewbelong",
    tags: ["StandWithIsrael", "JewBelong", "Activism", "EndJewHatred"],
    category: "Social Activism and Support"
  },
  {
    filename: "305.png",
    title: "“The silence continued. That’s when we all began to wonder if we were safe.” - @juliannamargulies for @usatoday Link in @jewbelong bio to entire article. #23shager Credit:@jewbelong",
    tags: ["StandWithIsrael", "JewBelong", "Activism", "EndJewHatred"],
    category: "Social Activism and Support"
  },
];
export const getTags = () => {
  const allTags = _.uniq(_.flatMap(posts.map((post) => post.tags)));
  return allTags;
};
