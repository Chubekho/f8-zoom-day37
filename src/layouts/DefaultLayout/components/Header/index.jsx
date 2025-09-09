import styles from "./Header.module.scss";

//Components
import AppLogo from "../AppLogo";
import SearchForm from "../SearchForm";
import Action from "../Action";

function Header() {
    return (
        <div className={styles.wrapper}>
            <AppLogo 
                title="Học Lập Trình Để Đi Làm"
            />
            <SearchForm
                placeholder="Tìm kiếm khóa học, bài viết, video, ..."
            />
            <Action/>
        </div>
    )
}

export default Header;