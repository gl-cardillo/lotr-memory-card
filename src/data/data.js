import frodo from "../img/frodo.jpg";
import aragorn from "../img/aragorn.jpeg";
import arwen from "../img/arwen.jpg";
import erlond from "../img/elrond.jpeg";
import galadriel from "../img/galadriel.webp";
import gandalf from "../img/gandalf.webp";
import gimli from "../img/gimli.webp";
import gollum from "../img/gollum.jpg";
import legolas from "../img/legolas.webp";
import sam from "../img/sam.webp";
import saruman from "../img/saruman.jpeg";
import sauron from "../img/sauron.webp";

function createImage(src, title) {
  let img = new Image();
  img.src = src;
  img.title = title;
  img.alt = title;
  return img
}

const characterArray = []

characterArray.push(createImage(frodo, "frodo"));
characterArray.push(createImage(aragorn, "Aragorn"));
characterArray.push(createImage(arwen, "Arwen"));
characterArray.push(createImage(erlond, "Elrond"));
characterArray.push(createImage(galadriel, "Galadriel"));
characterArray.push(createImage(gandalf, "Gandalf"));
characterArray.push(createImage(gimli, "Gimli"));
characterArray.push(createImage(gollum, "Gollum"));
characterArray.push(createImage(legolas, "Legolas"));
characterArray.push(createImage(sam, "Sam"));
characterArray.push(createImage(saruman, "Saruman"));
characterArray.push(createImage(sauron, "Sauron"));

export default characterArray;