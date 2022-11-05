import Movies from "./components/Movies";
import yjhds from "./assests/yjhd3.jpg";
import rk from "./assests/rk.webp";
import znmd from "./assests/znmd.jpg";
import kat from "./assests/kat.webp";

function App() {
  const data = {
    title: ["Yeh Jawani Hein Deewani", "Zindagi Na Milegi Dobara"],
    director: ["Ayan Mukherji", "Zoya Akhtar"],
    Year: ["2013", "2011"],
    duration: ["160 min", "153 min"],
    description: [
      "A story of the exhilarating and terrifying journey of four characters as they navigate through their youth.",
      "The story follows three childhood friends, Arjun, Kabir, and Imran, who reunite for a three-week road trip",
    ],
    poster: [yjhds, znmd],
    genre: ["Romantic Comedy, Romance", ["Comedy, Drama"]],
    backgroundImage: [rk, kat],

    backgroundShadow: ["#1B0804", "#0A1512"],
  };

  return (
    <div>
      <Movies
        title={data.title[0]}
        director={data.director[0]}
        Year={data.Year[0]}
        duration={data.duration[0]}
        description={data.description[0]}
        poster={data.poster[0]}
        genre={data.genre[0]}
        backgroundImage={data.backgroundImage[0]}
        backgroundShadow={data.backgroundShadow[0]}
      />

      <Movies
        title={data.title[1]}
        director={data.director[1]}
        Year={data.Year[1]}
        duration={data.duration[1]}
        description={data.description[1]}
        poster={data.poster[1]}
        genre={data.genre[1]}
        backgroundImage={data.backgroundImage[1]}
        backgroundShadow={data.backgroundShadow[1]}
      />
    </div>
  );
}

export default App;
