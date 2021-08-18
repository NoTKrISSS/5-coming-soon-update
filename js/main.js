import { ProgressBars } from "./components/progress-bar/ProgressBars.js";
import { progressBarData } from "./components/data/progressBarData.js";
import { Socials } from "./components/socials/Socials.js";
import { socialsData } from "./components/data/socialsData.js";

new ProgressBars(".left-column", progressBarData);
new Socials("footer .socials", socialsData);
