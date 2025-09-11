import { Link } from "react-router";
import Dropdown from "../../../components/Dropdown";
import Wrapper from "../../../components/Wrapper";
import styles from "./MyCourses.module.scss"

import PropTypes from "prop-types";

const courses = [
    {
        id: 1,
        title: "Fullstack Web",
        courseUrl: "https://zoom.fullstack.edu.vn/",
        courseImg: "/src/assets/images/courses/jspro.png",
        status: true,
        lastStudied: "2025-09-02T09:00:00Z",
        progress: 47
    },
    {
        id: 2,
        title: "Xây Dựng Website Với ReactJS",
        courseUrl: "https://fullstack.edu.vn/learning/reactjs",
        courseImg: "/src/assets/images/courses/reactjs.png",
        status: true,
        lastStudied: "2024-12-15T18:30:00Z",
        progress: 80
    },
    {
        id: 3,
        title: "Lập Trình JavaScript Nâng Cao",
        courseUrl: "https://fullstack.edu.vn/learning/javascript-nang-cao",
        courseImg: "/src/assets/images/courses/jsadvance.png",
        status: false,
        lastStudied: null,
        progress: 0,
    },
]

function MyCourses({ name }) {
    const tempCourse = courses[1]

    const formatLastStudiedTime = (lastStudied) => {
        const now = new Date();
        const past = new Date(lastStudied);

        const diffMs = now - past;
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
        const diffMonths = Math.floor(diffDays / 30);
        const diffYears = Math.floor(diffDays / 365);

        if (diffHours < 24) {
            return `Học cách đây ${diffHours} tiếng trước`;
        } else if (diffDays < 30) {
            return `Học cách đây ${diffDays} ngày trước`;
        } else if (diffMonths < 12) {
            return `Học cách đây ${diffMonths} tháng trước`;
        } else {
            return `Học cách đây ${diffYears} năm trước`;
        }
    };

    return (
        <div className={styles['myCourse-wrapper']}>
            <button className={styles['myCourse-btn']}>{name}</button>
            <Wrapper className={styles['myCourse-list__wrapper']} boxShadow animation>
                <Dropdown headingTitle="Khóa học của tôi" moreText="Xem tất cả" headerFixed>
                    {
                        <Link to={tempCourse.courseUrl} className={styles['myCourse-item']}>
                            <img
                                className={styles['myCourse-item__img']}
                                src={tempCourse.courseImg}
                            />
                            <div className={styles['myCourse-item__info']}>
                                <h3 className={styles['myCourse-item__title']}>{tempCourse.title}</h3>
                                <p className={styles['myCourse-item__last-studied']}>
                                    {formatLastStudiedTime(tempCourse.lastStudied)}
                                </p>
                                <div className={styles['myCourse-item__progress']}>
                                    <div
                                        className={styles['myCourse-item__progress-bar']}
                                        style={{ width: `${tempCourse.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        </Link>
                    }
                     {
                        <Link to={tempCourse.courseUrl} className={styles['myCourse-item']}>
                            <img
                                className={styles['myCourse-item__img']}
                                src={tempCourse.courseImg}
                            />
                            <div className={styles['myCourse-item__info']}>
                                <h3 className={styles['myCourse-item__title']}>{tempCourse.title}</h3>
                                <p className={styles['myCourse-item__last-studied']}>
                                    {formatLastStudiedTime(tempCourse.lastStudied)}
                                </p>
                                <div className={styles['myCourse-item__progress']}>
                                    <div
                                        className={styles['myCourse-item__progress-bar']}
                                        style={{ width: `${tempCourse.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        </Link>
                    }
                     {
                        <Link to={tempCourse.courseUrl} className={styles['myCourse-item']}>
                            <img
                                className={styles['myCourse-item__img']}
                                src={tempCourse.courseImg}
                            />
                            <div className={styles['myCourse-item__info']}>
                                <h3 className={styles['myCourse-item__title']}>{tempCourse.title}</h3>
                                <p className={styles['myCourse-item__last-studied']}>
                                    {formatLastStudiedTime(tempCourse.lastStudied)}
                                </p>
                                <div className={styles['myCourse-item__progress']}>
                                    <div
                                        className={styles['myCourse-item__progress-bar']}
                                        style={{ width: `${tempCourse.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        </Link>
                    }
                     {
                        <Link to={tempCourse.courseUrl} className={styles['myCourse-item']}>
                            <img
                                className={styles['myCourse-item__img']}
                                src={tempCourse.courseImg}
                            />
                            <div className={styles['myCourse-item__info']}>
                                <h3 className={styles['myCourse-item__title']}>{tempCourse.title}</h3>
                                <p className={styles['myCourse-item__last-studied']}>
                                    {formatLastStudiedTime(tempCourse.lastStudied)}
                                </p>
                                <div className={styles['myCourse-item__progress']}>
                                    <div
                                        className={styles['myCourse-item__progress-bar']}
                                        style={{ width: `${tempCourse.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        </Link>
                    }
                     {
                        <Link to={tempCourse.courseUrl} className={styles['myCourse-item']}>
                            <img
                                className={styles['myCourse-item__img']}
                                src={tempCourse.courseImg}
                            />
                            <div className={styles['myCourse-item__info']}>
                                <h3 className={styles['myCourse-item__title']}>{tempCourse.title}</h3>
                                <p className={styles['myCourse-item__last-studied']}>
                                    {formatLastStudiedTime(tempCourse.lastStudied)}
                                </p>
                                <div className={styles['myCourse-item__progress']}>
                                    <div
                                        className={styles['myCourse-item__progress-bar']}
                                        style={{ width: `${tempCourse.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        </Link>
                    }
                     {
                        <Link to={tempCourse.courseUrl} className={styles['myCourse-item']}>
                            <img
                                className={styles['myCourse-item__img']}
                                src={tempCourse.courseImg}
                            />
                            <div className={styles['myCourse-item__info']}>
                                <h3 className={styles['myCourse-item__title']}>{tempCourse.title}</h3>
                                <p className={styles['myCourse-item__last-studied']}>
                                    {formatLastStudiedTime(tempCourse.lastStudied)}
                                </p>
                                <div className={styles['myCourse-item__progress']}>
                                    <div
                                        className={styles['myCourse-item__progress-bar']}
                                        style={{ width: `${tempCourse.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        </Link>
                    }
                     {
                        <Link to={tempCourse.courseUrl} className={styles['myCourse-item']}>
                            <img
                                className={styles['myCourse-item__img']}
                                src={tempCourse.courseImg}
                            />
                            <div className={styles['myCourse-item__info']}>
                                <h3 className={styles['myCourse-item__title']}>{tempCourse.title}</h3>
                                <p className={styles['myCourse-item__last-studied']}>
                                    {formatLastStudiedTime(tempCourse.lastStudied)}
                                </p>
                                <div className={styles['myCourse-item__progress']}>
                                    <div
                                        className={styles['myCourse-item__progress-bar']}
                                        style={{ width: `${tempCourse.progress}%` }}
                                    ></div>
                                </div>
                            </div>
                        </Link>
                    }

                </Dropdown>
            </Wrapper>
        </div>
    )
}

MyCourses.PropTypes = {
    name: PropTypes.string,

}

export default MyCourses;