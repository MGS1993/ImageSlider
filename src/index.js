import "./styles.css";
import "./dropDown";
import { 
  createNav,
} from './navBar';

import {
  rightArrow,
  leftArrow,
  showDisplayToRight,
  showDisplayToLeft,
  showDisplayOnLoad,
  setAutoScroll,
} from "./slideShow";

createNav();
showDisplayOnLoad();
rightArrow.addEventListener("click", showDisplayToRight);
leftArrow.addEventListener("click", showDisplayToLeft);
setAutoScroll();
