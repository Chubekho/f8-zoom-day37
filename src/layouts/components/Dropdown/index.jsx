import clsx from "clsx";
import styles from "./Dropdown.module.scss"

import PropTypes from "prop-types";

function Dropdown({
    headerFixed = false,
    headingTitle,
    moreText = "Xem thêm",
    children,
    // className,
    href,
}) {

    return (
        <div className={styles['dropDown-wrapper']}>
            <div className={clsx({
                [styles.headerFixed]: headerFixed
            })}>
                <div className={styles['dropDown-heading']}>
                    <h5 className={styles['dropDown-heading__title']}>{headingTitle}</h5>
                    <a className={styles['dropDown-heading__seeMore']} href={href}>{moreText}</a>
                </div>
            </div>
            <div className={styles['dropDown-content']}>
                {children}
            </div>
        </div>
    )
}

Dropdown.PropTypes = {
    children: PropTypes.node.isRequired,
    headingTitle: PropTypes.string.isRequired,
    moreText: PropTypes.string,
    href: PropTypes.string,
    headerFixed: PropTypes.bool,
}

export default Dropdown;
