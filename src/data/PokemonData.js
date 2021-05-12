import cosmogImg from "../assets/images/cosmog.png";
import corsolaImg from "../assets/images/corsola.png";
import bewearImg from "../assets/images/bewear.png";

import archenImg from "../assets/images/archen.png";
import archeopsImg from "../assets/images/archeops.png";
import trubbishImg from "../assets/images/trubbish.png";
import garbodorImg from "../assets/images/garbodor.png";
import zoruaImg from "../assets/images/zorua.png";
import zoroarkImg from "../assets/images/zoroark.png";
import mincinnoImg from "../assets/images/mincinno.png";
import cinccinoImg from "../assets/images/cinccino.png";
import gothitaImg from "../assets/images/gothita.png";

export const pokemonTypes = {
  normal: { color: "#212121", bgColor: "#A4ACAF" },
  psychic: { color: "#FFFFFF", bgColor: "#F366B9" },
  dark: { color: "#FFFFFF", bgColor: "#707070" },
  poison: { color: "#F0E3F3", bgColor: "#B97FC9" },
  flying: { color: "#4F4E4E", bgColor: "#BDB9B8" },
  rock: { color: "#FAF9F3", bgColor: "#A38C21" },
  fighting: { color: "#FFFFFF", bgColor: "#D56723" },
};

export const sliderData = [
  {
    number: "#789",
    name: "Cosmog",
    kanji: "コスモッグ",
    types: ["psychic"],
    img: `${cosmogImg}`,
    bgColor: "#EEEC7F",
  },
  {
    number: "#864",
    name: "Corsola",
    kanji: "サニーゴ",
    types: ["dark"],
    img: `${corsolaImg}`,
    bgColor: "#8F8F90",
  },
  {
    number: "#760",
    name: "Bewear",
    kanji: "キテルグマ",
    types: ["normal", "fighting"],
    img: `${bewearImg}`,
    bgColor: "#EDA5B3",
  },
];

export const pokemonList = [
  {
    name: "Archen",
    types: ["rock", "flying"],
    img: `${archenImg}`,
  },
  {
    name: "Archeops",
    types: ["rock", "flying"],
    img: `${archeopsImg}`,
  },
  {
    name: "Trubbish",
    types: ["poison"],
    img: `${trubbishImg}`,
  },
  {
    name: "Garbodor",
    types: ["poison"],
    img: `${garbodorImg}`,
  },
  {
    name: "Zorua",
    types: ["dark"],
    img: `${zoruaImg}`,
  },
  {
    name: "Zoroark",
    types: ["dark"],
    img: `${zoroarkImg}`,
  },
  {
    name: "Mincinno",
    types: ["normal"],
    img: `${mincinnoImg}`,
  },
  {
    name: "Cinccino",
    types: ["normal"],
    img: `${cinccinoImg}`,
  },
  {
    name: "Gothita",
    types: ["psychic"],
    img: `${gothitaImg}`,
  },
];
