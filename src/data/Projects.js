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
import reveal from "../assets/reveal/reveal.mp4";
import revealImg from "../assets/reveal/reveal.png";

// components:
import RandomGallery from "../projects/code/RandomGallery";
import LittleDressCode from "../projects/code/LittleDressCode";
import Sketches from "../projects/art/Sketches";
import Solitaire from "../projects/code/Solitaire";
import TenFingers from "../projects/writing/TenFingers";
import Itell from "../projects/code/Itell";
import Animation from "../projects/art/Animation";
import Stamps from "../projects/art/Stamps";
import StickersRandom from "../projects/art/StickersRandom";
import FoodStickers from "../projects/art/FoodStickers";
import MushroomMayhem from "../projects/code/MushroomMayhem";
import TimesSquare from "../projects/art/TimesSquare";
import Portrait from "../projects/art/Portrait";
import Moti from "../projects/design/Moti";
import IXL from "../projects/design/IXL";
import HappyLine from "../projects/design/HappyLine";
import Downtown from "../projects/art/Downtown";
import Iceland from "../projects/art/Iceland";
import Campus from "../projects/art/Campus";
import GS from "../projects/code/GameStudio";
import Reveal from "../projects/code/Reveal";

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
    clickable: true,
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
    clickable: true,
  },
  {
    id: "reveal",
    title: "Reveal effect",
    date: "2025",
    src: reveal,
    type: "video",
    component: Reveal,
    desc: "canvas 2D rendering",
    image: revealImg,
    category: "code",
    status: "new",
    clickable: true,
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
    clickable: true,
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
    clickable: true,
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
    clickable: true,
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
    clickable: true,
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
    clickable: true,
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
    clickable: true,
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
    clickable: true,
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
    clickable: true,
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
    clickable: true,
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
    clickable: true,
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
    clickable: true,
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
    clickable: true,
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
    clickable: true,
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
    clickable: true,
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
    clickable: true,
  },

  {
    id: "stamps",
    title: "Procreate Stamps",
    date: "2020",
    src: stamps,
    type: "video",
    desc: "hand-drawn stamps",
    component: Stamps,
    category: "art",
    clickable: true,
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
    clickable: true,
  },
  {
    id: "gamestudio",
    title: "GameStudio",
    date: "2025",
    // src: portrait,
    // image: portrait,
    type: "img",
    desc: "react + typescript",
    component: GS,
    category: "code",
    clickable: false,
    status: "wip",
  },
];
