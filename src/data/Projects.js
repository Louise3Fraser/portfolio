// assets:
import rg from "../assets/random-gallery/rg.mp4";
import rgImg from "../assets/random-gallery/rg-img.png";
import tenfingers from "../assets/writing/tenfingers.jpg";
import portrait from "../assets/art/portrait.png";
import ldc from "../assets/ldc/ldc.mp4";
import ldcImg from "../assets/ldc/ldccover.png";
import sketches from "../assets/art/sketches.png";
import solitaire from "../assets/solitaire/solitaire.mp4";
import solitaireCover from "../assets/solitaire/solitaire-cover.png";
import itellCover from "../assets/itell/itell-cover-lg.png";
import animation from "../assets/art/animation.mp4";
import stamps from "../assets/art/stamps.mp4";
import stickersr from "../assets/art/stickersrandom.mp4";
import food from "../assets/art/food-stickers.png";
import mmvid from "../assets/mm/mm-vid.mp4";
import mmcover from "../assets/mm/mm-cover.png";
import times from "../assets/art/times-square.png";
import moti from "../assets/moti/moti-cover.png";
import ixl from "../assets/ixl/ixl-cover.png";
import hl from "../assets/happyline/hl-cover.png";
import melbourne from "../assets/art/melbourne.png";
import travel from "../assets/art/iceland-travel-poster.png";
import campus from "../assets/art/unimelb-campus.png";

// components:
import RandomGallery from "../projects/RandomGallery";
import LittleDressCode from "../projects/LittleDressCode";
import Sketches from "../projects/Sketches";
import Solitaire from "../projects/Solitaire";
import TenFingers from "../projects/TenFingers";
import Itell from "../projects/Itell";
import Animation from "../projects/Animation";
import Stamps from "../projects/Stamps";
import StickersRandom from "../projects/StickersRandom";
import FoodStickers from "../projects/FoodStickers";
import MushroomMayhem from "../projects/MushroomMayhem";
import TimesSquare from "../projects/TimesSquare";
import Portrait from "../projects/Portrait";
import Moti from "../projects/Moti";
import IXL from "../projects/IXL";
import HappyLine from "../projects/HappyLine";
import Downtown from "../projects/Downtown";
import Iceland from "../projects/Iceland";
import Campus from "../projects/Campus";

export const projects = [
  {
    id: "rg",
    title: "Random Gallery",
    date: "2025",
    src: rg,
    type: "video",
    component: RandomGallery,
    desc: "full-stack react website",
    image: rgImg,
    category: "code",
    status: "new",
  },
  {
    id: "ldc",
    title: "LittleDressCode",
    date: "2025",
    src: ldc,
    type: "video",
    desc: "iOS mobile fashion app",
    component: LittleDressCode,
    category: "code",
    image: ldcImg,
  },
  {
    id: "itell",
    title: "iTELL",
    date: "2024",
    src: itellCover,
    type: "img",
    desc: "AI-powered platform",
    component: Itell,
    category: "code",
    image: itellCover,
  },

  {
    id: "solitaire",
    title: "Solitaire",
    date: "2024",
    src: solitaire,
    type: "video",
    desc: "full-stack web app",
    component: Solitaire,
    category: "code",
    image: solitaireCover,
  },

  {
    id: "moti",
    title: "Moti",
    date: "2024",
    src: moti,
    image: moti,
    type: "img",
    desc: "making meditation a habit",
    component: Moti,
    category: "design",
  },
  {
    id: "sketches",
    image: sketches,
    title: "Linework",
    date: "2023",
    src: sketches,
    type: "img",
    desc: "3 stages of art",
    component: Sketches,
    category: "art",
  },

  {
    id: "tenfingers",
    title: "Ten Fingers",
    date: "2025",
    src: tenfingers,
    image: tenfingers,
    type: "img",
    desc: "short story - horror",
    component: TenFingers,
    category: "writing",
    status: "wip",
  },

  {
    id: "mm",
    title: "Mushroom Mayhem",
    date: "2023",
    src: mmvid,
    image: mmcover,
    type: "video",
    desc: "2d platform Unity game",
    component: MushroomMayhem,
    category: "code",
  },
  {
    id: "travel-poster",
    title: "Iceland Poster",
    date: "2023",
    src: travel,
    image: travel,
    type: "img",
    desc: "created in Illustrator",
    component: Iceland,
    category: "art",
  },
  {
    id: "campus",
    title: "UniMelb Campus",
    date: "2024",
    src: campus,
    image: campus,
    type: "img",
    desc: "edited w/Photoshop",
    component: Campus,
    category: "art",
  },
  {
    id: "nyc",
    title: "Times Square",
    date: "2024",
    src: times,
    type: "img",
    desc: "edited w/photoshop",
    component: TimesSquare,
    category: "art",
  },
  {
    id: "animation",
    title: "Animation",
    date: "2025",
    src: animation,
    type: "video",
    desc: "made with aftereffects",
    component: Animation,
    category: "art",
  },
  {
    id: "ixl",
    title: "IXL Learning",
    date: "2025",
    src: ixl,
    image: ixl,
    type: "img",
    desc: "new assignment feature",
    component: IXL,
    category: "design",
  },
  {
    id: "happyline",
    title: "HappyLine",
    date: "2024",
    src: hl,
    image: hl,
    type: "img",
    desc: "fostering daily gratitude",
    component: HappyLine,
    category: "design",
  },

  {
    id: "stickersfood",
    title: "Food Stickers",
    date: "2021",
    src: food,
    type: "img",
    desc: "hand-drawn food stickers",
    component: FoodStickers,
    category: "art",
  },
  {
    id: "melbourne",
    title: "Downtown",
    date: "2024",
    src: melbourne,
    image: melbourne,
    type: "img",
    desc: "edited w/Photoshop",
    component: Downtown,
    category: "art",
  },
  {
    id: "stickersvarious",
    title: "Random Stickers",
    date: "2020",
    src: stickersr,
    type: "video",
    desc: "hand-drawn stickers",
    component: StickersRandom,
    category: "art",
  },

  ////
  {
    id: "stamps",
    title: "Procreate Stamps",
    date: "2020",
    src: stamps,
    type: "video",
    desc: "hand-drawn stamps",
    component: Stamps,
    category: "art",
  },

  {
    id: "portrait",
    title: "Portrait",
    date: "2024",
    src: portrait,
    image: portrait,
    type: "img",
    desc: "portrait practice",
    component: Portrait,
    category: "art",
  },
];
