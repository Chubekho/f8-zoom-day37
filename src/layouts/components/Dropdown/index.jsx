import styles from "./Dropdown.module.scss"

import PropTypes from "prop-types";

function Dropdown({
    headingTitle,
    moreText = "Xem thêm",
    listItems,
}) {
    return (
        <div className={styles.dropDown}>
            <div className={styles['dropDown-heading']}>
                <h5 className={styles['dropDown-heading__title']}>{headingTitle}</h5>
                <a className={styles['dropDown-heading__seeMore']} href="">{moreText}</a>
            </div>
            {listItems.map(item =>
                <a key={item.id} className={styles['dropDown-item']} href={item.resultUrl} target="_blank">
                    <img className={styles['dropDown-item--img']} src={`${item.imgUrl}`} />
                    <span className={styles['dropDown-item--title']}>{item.title}</span>
                </a>
            )}
        </div>
    )
}

Dropdown.PropTypes = {
    headingTitle: PropTypes.string.isRequired,
    moreText: PropTypes.string,
    listItems: PropTypes.array,
}

export default Dropdown;