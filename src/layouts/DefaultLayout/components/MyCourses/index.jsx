import Dropdown from "../../../components/Dropdown";
import styles from "./MyCourses.module.scss"

import PropTypes from "prop-types";

// const courses = [
//     {
//         id: 1,
//         title: "Fullstack Web",
//         courseImg: "/src/assets/images/courses/jspro.png",
//         status: true,
//         lastStudied: 27,
//         progress: 47
//     },
//     {
//         id: 2,
//         title: "Xây Dựng Website Với ReactJS",
//         courseImg: "/src/assets/images/courses/reactjs.png",
//         status: true,
//         lastStudied: 864,
//         progress: 10
//     },
//     {
//         id: 3,
//         title: "Lập Trình JavaScript Nâng Cao",
//         courseImg: "/src/assets/images/courses/jsadvance.png",
//         status: false,
//         lastStudied: null,
//         progress: 0,
//     },
// ]

function MyCourses({ name }) {

    return (
        <div className={styles['myCourse-wrapper']}>
            <button className={styles['myCourse-btn']}>{name}</button>
            
        </div>
    )
}

MyCourses.PropTypes = {
    name: PropTypes.string,

}

export default MyCourses;