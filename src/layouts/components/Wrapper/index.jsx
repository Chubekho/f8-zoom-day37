
import PropTypes from "prop-types";
import styles from "./Wrapper.module.scss"
import clsx from "clsx";

function Wrapper(
//     {
//     children,
//     boxShadow = false,
//     animation = false,
//     style
// }
) {
    return (
        <div className={clsx(styles.wrapper)}>


        </div>
    )
}

Wrapper.PropTypes = {
    children: PropTypes.node.isRequired,
}

export default Wrapper;