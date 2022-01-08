import pebble from "../Assects/one.svg";
import cyber from '../Assects/cyber.png';
import sign from '../Assects/sign.jpg';
import cci from '../Assects/cci.jpg';
import covid from '../Assects/covid.jpg';
import remainder from'../Assects/rem.jpg';

const project = [
  {
    image: cyber,
    subHead: "NLP + ML Algorithms + Stremlit",
    title: "Multilingual Cyberbullying detection",
    description:
      "This work is currently based on Malayalam language and its transliteration to detect cyber-bullying based comments from social media. Tackled some of the problems like spell checking of Malayalam words, Feature extraction and reduction, Detecting Slang words and tailing words etc. Tested with various machine learning algorithms along with hyper-parameter tuning.",
  },
  {
    image: sign,
    subHead: "React-Native",
    title: "Sign Learn",
    description: "Building a Sign Learning application for deaf people under the initiative of Govt. of India.",
  },
  {
    image: covid,
    subHead: "ReactJS + Flask + MySQL",
    title: "Covid Vaccine Registration Dashboard",
    description: "Portal allows to determine the priority to get vaccinated based on certain algorithm. The user could know the priority number to get vaccinated.",
    link: "https://gitlab.com/paul.eliassojan/covid-vaccine-dashboard",
  },
  {
    image: remainder,
    subHead: "JSP + Bootstrap + HTML + MySQL",
    title: "Remainder Web App",
    description: "Web App to store personal informations.",
    link: "https://gitlab.com/paul.eliassojan/remainder-web-app-using-java",
  },
  {
    image: cci,
    subHead: "ReactJS",
    title: "CCI Web App",
    link: "https://cci-fisat.web.app",
  },
];

export default project;
