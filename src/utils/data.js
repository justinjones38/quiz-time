import fish from "../assets/fish.jpeg";
import mouse from "../assets/mouse.jpeg";
import orca from "../assets/orca.jpeg";
import beagle from "../assets/beagle.jpeg";
import elephant from "../assets/elephant.jpeg";
import goldenRetriever from "../assets/golden_retriever.jpeg";
import labrador from "../assets/labrador.jpeg";
import rabbit from "../assets/rabbit.jpeg";
import rottweiler from "../assets/rottweiler.jpeg";
import lion from "../assets/lion.jpeg";

export const data = {
  quizType: [
    { text: "Image Based", camelCase: "imageBased" },
    { text: "Text Based", camelCase: "textBased" },
  ],
  categories: [
    { text: "Music", camelCase: "music", apiName: "music" },
    {
      text: "Sport and Leisure",
      camelCase: "sportAndLeisure",
      apiName: "sport_and_leisure",
    },
    {
      text: "Film and TV",
      camelCase: "filmAndTV",
      apiName: "film_and_tv",
    },
    {
      text: "Arts and Literature",
      camelCase: "artsAndLiterature",
      apiName: "arts_and_literature",
    },
    {
      text: "History",
      camelCase: "history",
      apiName: "history",
    },
    {
      text: "Society and Culture",
      camelCase: "societyAndCulture",
      apiName: "society_and_culture",
    },
    {
      text: "Science",
      camelCase: "science",
      apiName: "science",
    },
    {
      text: "Geography",
      camelCase: "geography",
      apiName: "geography",
    },
    {
      text: "Food and Drink",
      camelCase: "foodAndDrink",
      apiName: "food_and_drink",
    },
    {
      text: "General Knowledge",
      camelCase: "generalKnowledge",
      apiName: "general_knowledge",
    },
  ],
  difficulties: [
    {
      text: "Easy",
      camelCase: "easy",
      apiName: "easy",
    },
    {
      text: "Medium",
      camelCase: "medium",
      apiName: "medium",
    },
    {
      text: "Hard",
      camelCase: "hard",
      apiName: "hard",
    },
  ],
};

export const imageQuestions = [
  {
    category: "science",
    correctAnswer: "fish",
    difficulty: "easy",
    id: "userAdded1",
    isNiche: false,
    question: { text: "What animal is this" },
    img: fish,
    altText: `an orange water-dwelling vertebrate animal, swimming in the ocean, breathe 
              through gills and typically has fins.`
  },
  {
    category: "science",
    correctAnswer: "orca",
    difficulty: "hard",
    id: "userAdded2",
    isNiche: false,
    question: { text: "What animal is this" },
    img: orca,
    altText: `the largest member of the oceanic dolphin family, jumping out of a body of water.`
  },
  {
    category: "science",
    correctAnswer: "mouse",
    difficulty: "easy",
    id: "userAdded3",
    isNiche: false,
    question: { text: "What animal is this" },
    img: mouse,
    altText: `a small rodent staring at the camera`
  },
  {
    category: "science",
    correctAnswer: "beagle",
    difficulty: "medium",
    id: "userAdded4",
    isNiche: false,
    question: { text: "What breed dog is this?" },
    img: beagle,
    altText: `breed of small, sturdy hound dog characterized by short legs, staring upwards at the camera
    long drooping ears, and a smooth coat typically featuring black, brown, and white markings. `
  },
  {
    category: "science",
    correctAnswer: "elephant",
    difficulty: "easy",
    id: "userAdded5",
    isNiche: false,
    question: { text: "What animal is this" },
    img: elephant,
    altText: `the largest living land mammal, walking in the open field on brownish grass`
  },
  {
    category: "science",
    correctAnswer: "lion",
    difficulty: "easy",
    id: "userAdded6",
    isNiche: false,
    question: { text: "What animal is this" },
    img: lion,
    altText: `a large, predatory wildcat, sitting and looking around`
  },
  {
    category: "science",
    correctAnswer: "rottweiler",
    difficulty: "medium",
    id: "userAdded7",
    isNiche: false,
    question: { text: "What breed dog is this?" },
    img: rottweiler,
    altText: `a large, powerful breed of working dog, staring at the camera`
  },
  {
    category: "science",
    correctAnswer: "golden retriever",
    difficulty: "medium",
    id: "userAdded8",
    isNiche: false,
    question: { text: "What breed dog is this?" },
    img: goldenRetriever,
    altText: `popular, large breed of dog originally bred to retrieve waterfowl, staring happily 
              at the camera with their tongue wagging.`
  },
  {
    category: "science",
    correctAnswer: "labrador",
    difficulty: "hard",
    id: "userAdded9",
    isNiche: false,
    question: { text: "What breed dog is this?" },
    img: labrador,
    altText: `one of the most popular and friendly dog breeds in the world, staring happily 
              at the camera with their tongue wagging`
  },
  {
    category: "science",
    correctAnswer: "rabbit",
    difficulty: "easy",
    id: "userAdded10",
    isNiche: false,
    question: { text: "What animal is this" },
    img: rabbit,
    altText: `small, furry mammals of the family Leporidae, staring at the carmera in the woods.`
  },
];
