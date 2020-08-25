import "./styles.css";
import "./navBar";
import {
  rightArrow,
  leftArrow,
  showDisplayToRight,
  showDisplayToLeft,
  showDisplayOnLoad,
} from "./functionality";

showDisplayOnLoad();
rightArrow.addEventListener("click", showDisplayToRight);
leftArrow.addEventListener("click", showDisplayToLeft);
