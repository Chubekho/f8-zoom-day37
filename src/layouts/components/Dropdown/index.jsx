import styles from "./Dropdown.module.scss"

import PropTypes from "prop-types";

function Dropdown({
    headingTitle,
    moreText = "Xem thêm",
    children,
}) {
    return (
        <div className={styles['dropDown-wrapper']}>
            <div className={styles['dropDown-heading']}>
                <h5 className={styles['dropDown-heading__title']}>{headingTitle}</h5>
                <a className={styles['dropDown-heading__seeMore']} href="">{moreText}</a>
            </div>
            {children}
        </div>
    )
}

Dropdown.PropTypes = {
    children: PropTypes.node.isRequired,
    headingTitle: PropTypes.string.isRequired,
    moreText: PropTypes.string,
}

export default Dropdown;
