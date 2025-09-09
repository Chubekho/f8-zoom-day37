import styles from "./MyCourses.module.scss"

import PropTypes from "prop-types";

function MyCourses({name="Cái gì đó của tôi:D"}) {

    return (
        <div>
            <button className={styles['myCourse__btn']}>{name}</button>
        </div>
    )
}

MyCourses.PropTypes = {
    name: PropTypes.string,

}

export default MyCourses;