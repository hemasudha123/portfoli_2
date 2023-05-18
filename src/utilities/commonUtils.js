import Home from "../portfoliContainer/Home/Home";
import AboutMe from "../portfoliContainer/AboutMe/AboutMe";
import Testimonial from "../portfoliContainer/Testimonial/Testimonial";
import ContactMe from "../portfoliContainer/ContactMe/ContactMe";
import Resume from "../portfoliContainer/Resume/Resume";
export const TOTAL_SCREEN = [
    {
        screen_name: "Home",
        component: Home,
    },
    {
        screen_name: "AboutMe",
        component: AboutMe,
    },
    {
        screen_name: "Resume",
        component: Resume,
    },
    {
        screen_name: "Testimonial",
        component: Testimonial,
    },
    {
        screen_name: "ContactMe",
        component: ContactMe,
    },
];

export const GET_SCREEN_INDEX = (screen_name) => {
    if (!screen_name) return -1
    for (let i = 0; i < TOTAL_SCREEN.length; i++) {
        if (TOTAL_SCREEN[i].screen_name === screen_name) return i
    }
    return -1;
};