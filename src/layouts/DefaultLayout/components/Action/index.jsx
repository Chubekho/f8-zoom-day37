import MyCourses from "../MyCourses";
import Notification from "../Notification";
import UserMenu from "../UserMenu";
import styles from "./Action.module.scss";



function Action() {
    return (
        <div className={styles.wrapper}>
            <MyCourses name="Khóa học của tôi"/>
            <Notification/>
            <UserMenu/>
        </div>
    )
    
}

export default Action;