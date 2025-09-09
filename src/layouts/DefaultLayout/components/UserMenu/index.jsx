import styles from "./UserMenu.module.scss";

import avatar from "../../../../assets/images/monkey1.jpg"

function UserMenu() {
    return (
        <div className={styles['userMenu-wrapper']}>
            <img className={styles['userMenu__img']} src={avatar} alt="" />
        </div>
    )
    
}

export default UserMenu;