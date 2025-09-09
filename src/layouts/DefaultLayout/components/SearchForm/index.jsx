import styles from "./SearchForm.module.scss"

import PropTypes from "prop-types";
import clsx from "clsx";
import ResultList from "../../../components/Dropdown";
import { useEffect, useState } from "react";
import Dropdown from "../../../components/Dropdown";

//Fake data
const searchResult = [
    {
        id: 1,
        type: "KHÓA HỌC",
        title: "Lập Trình JavaScript Cơ Bản",
        resultUrl: "https://fullstack.edu.vn/courses/javascript-co-ban",
        imgUrl: "/src/assets/images/searches/js1.jpg"
    },
    {
        id: 2,
        type: "KHÓA HỌC",
        title: "Lập Trình JavaScript Nâng Cao",
        resultUrl: "https://fullstack.edu.vn/courses/javascript-nang-cao",
        imgUrl: "/src/assets/images/searches/jsnangcao.png"
    },
    {
        id: 3,
        type: "KHÓA HỌC",
        title: "JavaScript Pro",
        resultUrl: "https://fullstack.edu.vn/landing/javascript",
        imgUrl: "/src/assets/images/searches/jspro.png"
    },
    {
        id: 4,
        type: "BÀI VIẾT",
        title: "Không Nên Học JavaScript, Liệu Có Đúng Như Vậy",
        resultUrl: "https://fullstack.edu.vn/blog/khong-nen-hoc-javascript-lieu-co-dung-nhu-vay",
        imgUrl: "/src/assets/images/searches/js1.jpg"
    },
    {
        id: 5,
        type: "BÀI VIẾT",
        title: "Xử Lý Bất Đồng Bộ Trong Javascript - Phần 1",
        resultUrl: "https://fullstack.edu.vn/blog/xu-ly-bat-dong-bo-trong-javascript-phan-1",
        imgUrl: "/src/assets/images/searches/jsasync.png"
    },
    {
        id: 6,
        type: "BÀI VIẾT",
        title: "Chuyện Cũ Xưa: Nên dùng === hay == để so sánh trong Javascript?",
        resultUrl: "https://fullstack.edu.vn/blog/chuyen-cu-xua-nen-dung-hay-de-so-sanh-trong-javascript",
        imgUrl: "/src/assets/images/searches/jscompare.jpg"
    },
    {
        id: 7,
        type: "VIDEO",
        title: 'Giải thích các trường hợp "phi lý" trong Javascript',
        resultUrl: "https://www.youtube.com/watch?v=YFhyq-CMGtY",
        imgUrl: "/src/assets/images/searches/jsvidimg1.jpg"
    },
    {
        id: 8,
        type: "VIDEO",
        title: '"Học Xong" Javascript Có Giải Được "Code Thiếu Nhi"?',
        resultUrl: "https://www.youtube.com/watch?v=utF5vj7Ljuo",
        imgUrl: "/src/assets/images/searches/jscodethieunhi.jpg"
    },
    {
        id: 9,
        type: "VIDEO",
        title: "Fn.apply() method trong Javascript?",
        resultUrl: "https://www.youtube.com/watch?v=a4FjX4Z-9Rs",
        imgUrl: "/src/assets/images/searches/js_apply_method.jpg"
    }
]


function SearchForm({ placeholder }) {
    const [input, setInput] = useState("")
    const [courses, setCourses] = useState([])
    const [posts, setPosts] = useState([])
    const [videos, setVideos] = useState([])
    // const [isOpen, setIsOpen] = useState(false)

    useEffect(()=> {
        setCourses(searchResult.filter(item => item.type === 'KHÓA HỌC'))
        setPosts(searchResult.filter(item => item.type === 'BÀI VIẾT'))
        setVideos(searchResult.filter(item => item.type === 'VIDEO'))
    }, [])

    function handleInputChange(e) {
        setInput(e.target.value)
    }

    function handleClearSearch() {
        setInput("")
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.searchWrapper}>
                <div className={clsx("fa-solid", "fa-magnifying-glass", styles.searchIcon)}></div>
                <input
                    className={styles.searchInput}
                    placeholder={placeholder}
                    value={input}
                    onChange={handleInputChange}
                />
                <div 
                    className={styles.searchClearIcon}
                    onClick={handleClearSearch}
                >{!!input.length && <span>&times;</span>}</div>


                <div className={styles['searchResult-wrapper']}>
                    <div className={styles['searchResult-header']}>
                        <i className={clsx("fa-solid", "fa-magnifying-glass", styles['searchResult-icon'])}></i>
                        <p>{input.length !== 0 ? ` Kết quả cho '${input}'` : ""}</p>
                    </div>

                    <Dropdown
                        headingTitle={'KHÓA HỌC'}
                        listItems={courses}
                    />
                    <Dropdown
                        headingTitle={'BÀI VIẾT'}
                        listItems={posts}
                    />
                    <Dropdown
                        headingTitle={'VIDEO'}
                        listItems={videos}
                    />
                </div>
            </div>
        </div>
    )
}

SearchForm.PropTypes = {
    placeholder: PropTypes.string,

}

export default SearchForm;