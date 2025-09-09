import styles from "./AppLogo.module.scss"

import PropTypes from "prop-types";
import { Link } from "react-router";

import f8Icon from "../../../../assets/icons/f8-icon.png"

function AppLogo({ title }) {
    return (
        <div className={styles.wrapper}>
            <Link to="/">
                <img className={styles['logo-img']} src={f8Icon} alt="F8 Logo" />
            </Link>
            <Link to="/">
                <h3 className={styles['logo-title']}>{title}</h3>
            </Link>
        </div>
    )
}

AppLogo.PropTypes = {
    title: PropTypes.string,
}

export default AppLogo;