
import PropTypes from "prop-types";
import styles from "./Wrapper.module.scss"
import clsx from "clsx";

function Wrapper({
    children,
    boxShadow = false,
    animation = false,
    border = false,
    className,
}) {

    const classNames = clsx(className, styles.wrapper, {
        [styles.boxShadow]: boxShadow,
        [styles.animation]: animation,
        [styles.border]: border,
    })

    return (
        <div className={clsx(classNames)}>
            <div className={styles['wrapper-content']}>
                {children}
            </div>
        </div>
    )
}

Wrapper.PropTypes = {
    children: PropTypes.node.isRequired,
    boxShadow: PropTypes.bool,
    animation: PropTypes.bool,
    border: PropTypes.bool,
}

export default Wrapper;