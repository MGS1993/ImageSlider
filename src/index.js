import "./styles.css";
import { createNav } from './navBar';
import {
  rightArrow,
  leftArrow,
  showDisplayToRight,
  showDisplayToLeft,
  showDisplayOnLoad,
} from "./functionality";

createNav();
showDisplayOnLoad();
rightArrow.addEventListener("click", showDisplayToRight);
leftArrow.addEventListener("click", showDisplayToLeft);
