import styles from "./Notification.module.scss";

import clsx from "clsx";

function Notification() {
    return (
        <div>
            <div className={styles['notification-button']}>
                <i className={clsx("fa-solid", "fa-bell", styles['notification-icon'])}></i>
                <div className={styles.notifyCount}>7</div>
            </div>
        </div >
    )
}

export default Notification;