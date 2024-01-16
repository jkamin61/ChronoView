import exercise from "../../public/icon-exercise.svg";
import play from "../../public/icon-play.svg";
import selfCare from "../../public/icon-self-care.svg";
import social from "../../public/icon-social.svg";
import study from "../../public/icon-study.svg";
import work from "../../public/icon-work.svg";

function imageSwitcher(title: string) {
    switch (title) {
        case "Work":
            return work;
        case "Play":
            return play;
        case "Study":
            return study;
        case "Exercise":
            return exercise;
        case "Social":
            return social;
        case "Self Care":
            return selfCare;
        default:
            return work;
    }
}

function bgColorSwitcher(title: string) {
    switch (title) {
        case "Work":
            return "bg-red-600";
        case "Play":
            return "bg-blue-600";
        case "Study":
            return "bg-yellow-600";
        case "Exercise":
            return "bg-green-600";
        case "Social":
            return "bg-purple-600";
        case "Self Care":
            return "bg-indigo-600";
        default:
            return "bg-red-600";
    }
}

export {bgColorSwitcher, imageSwitcher};