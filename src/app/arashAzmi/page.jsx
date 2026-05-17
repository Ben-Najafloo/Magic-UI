"use client";

import { useEffect, useMemo, useState } from "react";
import "./style.css";
import Image from "next/image";

export default function Project2Page() {
    const courses = useMemo(
        () => [
            {
                id: 1,
                title: "Nuovo Espresso 1",
                price: 49,
                modules: 13,
                wideicon: "/ax/wide-ns1.jpg",
                icon: "/ax/ns1.PNG",
                lessons: 45,
            },
            {
                id: 2,
                title: "Nuovo Espresso 2",
                price: 59,
                modules: 15,
                wideicon: "/ax/wide-ns2.jpg",
                icon: "/ax/ns2.PNG",
                lessons: 52,
            },
            {
                id: 3,
                title: "Nuovo Espresso 3",
                price: 69,
                modules: 18,
                wideicon: "/ax/wide-ns3.jpg",
                icon: "/ax/ns3.jfif",
                lessons: 65,
            },
            {
                id: 4,
                title: "Nuovo Espresso 4",
                price: 79,
                modules: 20,
                wideicon: "/ax/wide-ns4.jpg",
                icon: "/ax/ns4.jfif",
                lessons: 72,
            },
            {
                id: 5,
                title: "Nuovo Espresso 5",
                price: 64,
                modules: 14,
                wideicon: "/ax/wide-ns5.jpg",
                icon: "/ax/ns5.PNG",
                lessons: 48,
            },
            {
                id: 6,
                title: "Nuovo Espresso 6",
                price: 74,
                modules: 16,
                wideicon: "/ax/wide-ns6.jpg",
                icon: "/ax/ns6.jfif",
                lessons: 58,
            },
        ],
        []
    );

    const [currentPage, setCurrentPage] = useState("home");
    const [currentUser, setCurrentUser] = useState(null);
    const [enrolledCourses, setEnrolledCourses] = useState([]);
    const [currentCourse, setCurrentCourse] = useState(courses[0]);
    const [expandedModules, setExpandedModules] = useState([0]);
    const [activeLesson, setActiveLesson] = useState({
        moduleIdx: 0,
        lessonIdx: 1,
    });
    const [watermarkTime, setWatermarkTime] = useState("");
    const [successVisible, setSuccessVisible] = useState(false);

    const [authForm, setAuthForm] = useState({
        email: "",
        name: "",
        password: "",
    });

    const [adminEnroll, setAdminEnroll] = useState({
        user: "",
        course: "",
        transferRef: "",
    });

    useEffect(() => {
        const updateTime = () => {
            setWatermarkTime(new Date().toLocaleTimeString());
        };

        updateTime();

        const interval = setInterval(updateTime, 1000);

        return () => clearInterval(interval);
    }, []);

    const showPage = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const goHome = () => {
        setCurrentPage("home");
    };

    const viewCourseDetail = (courseId) => {
        const course = courses.find((c) => c.id === courseId);

        if (!course) return;

        setCurrentCourse(course);
        setCurrentPage("course-detail");
    };

    const register = () => {
        const { email, name, password } = authForm;

        if (!email || !name || !password) {
            alert("Please fill in all fields");
            return;
        }

        setCurrentUser({
            email,
            name,
            password,
        });

        alert(`Welcome ${name}!`);

        showPage("dashboard");
    };

    const login = () => {
        const { email, password } = authForm;

        if (!email || !password) {
            alert("Please enter email and password");
            return;
        }

        const username = email.split("@")[0];

        setCurrentUser({
            email,
            password,
            name: username,
        });

        alert(`Welcome back ${username}!`);

        showPage("dashboard");
    };

    const logout = () => {
        setCurrentUser(null);
        setEnrolledCourses([]);
        alert("Logged out");
        goHome();
    };

    const enrollCourse = () => {
        if (!currentUser) {
            alert("Please login first");
            showPage("auth");
            return;
        }

        const exists = enrolledCourses.find(
            (c) => c.id === currentCourse.id
        );

        if (exists) {
            alert("Already enrolled in this course");
            return;
        }

        setEnrolledCourses((prev) => [
            ...prev,
            {
                id: currentCourse.id,
                progress: 0,
                enrolled: new Date(),
            },
        ]);

        alert(`✓ Successfully enrolled in ${currentCourse.title}!`);

        showPage("dashboard");
    };

    const goToPlayer = (courseId) => {
        const course = courses.find((c) => c.id === courseId);

        if (!course) return;

        setCurrentCourse(course);
        showPage("player");
    };

    const markLessonComplete = () => {
        setEnrolledCourses((prev) =>
            prev.map((item) => {
                if (item.id === currentCourse.id) {
                    return {
                        ...item,
                        progress: Math.min(item.progress + 5, 100),
                    };
                }

                return item;
            })
        );

        alert("Lesson marked as complete");
    };

    const generateModules = (count) => {
        const moduleNames = [
            "Introduction",
            "Fundamentals",
            "Core Concepts",
            "Advanced Topics",
            "Best Practices",
            "Projects",
            "Optimization",
            "Real-world Applications",
            "Troubleshooting",
            "Mastery",
            "Extensions",
            "Capstone",
        ];

        return Array.from({ length: count }, (_, i) => ({
            name:
                moduleNames[i % moduleNames.length] +
                (i >= moduleNames.length
                    ? ` (${Math.floor(i / moduleNames.length) + 1})`
                    : ""),
            lessons: Math.floor(Math.random() * 6) + 3,
        }));
    };

    const generateLessons = (count) => {
        const lessons = [
            "Getting Started",
            "Variables & Data Types",
            "Control Flow",
            "Functions & Methods",
            "Object-Oriented Programming",
            "Error Handling",
            "Working with APIs",
            "Optimization Techniques",
            "Testing & Debugging",
        ];

        return Array.from({ length: count }, (_, i) =>
            lessons[i % lessons.length] +
            (i >= lessons.length
                ? ` (${Math.floor(i / lessons.length) + 1})`
                : "")
        );
    };

    const toggleModule = (idx) => {
        setExpandedModules((prev) => {
            if (prev.includes(idx)) {
                return prev.filter((i) => i !== idx);
            }

            return [...prev, idx];
        });
    };

    const selectLesson = (moduleIdx, lessonIdx) => {
        setActiveLesson({ moduleIdx, lessonIdx });
    };

    const adminEnrollUser = () => {
        const { user, course, transferRef } = adminEnroll;

        if (!user || !course || !transferRef) {
            alert("Please fill in all fields");
            return;
        }

        setSuccessVisible(true);

        setTimeout(() => {
            setSuccessVisible(false);
        }, 3000);

        setAdminEnroll({
            user: "",
            course: "",
            transferRef: "",
        });
    };

    const quickEnroll = (email) => {
        setAdminEnroll((prev) => ({
            ...prev,
            user: email,
        }));

        alert(`Quick enroll for ${email}`);
    };

    const editUser = (email) => {
        alert(`Edit user: ${email}`);
    };

    const deleteUser = (email) => {
        const confirmed = window.confirm(
            `Delete ${email}?`
        );

        if (confirmed) {
            alert(`${email} deleted`);
        }
    };

    const resendEmail = (email, type) => {
        alert(`${type} email resent to ${email}`);
    };

    const viewEmail = (type) => {
        alert(`Viewing ${type} template`);
    };

    const courseModules = generateModules(currentCourse.modules);

    return (
        <>
            <div className="header">
                <div className="container">
                    <div className="header-content">
                        <div className="logo" onClick={goHome}>
                            <Image src='/ax/logo.PNG' width={80} height={80} />
                        </div>


                        <div className="nav-links">
                            <button onClick={goHome}>Home</button>

                            <button
                                onClick={() => showPage("dashboard")}
                            >
                                My Courses
                            </button>

                            <button
                                onClick={() => showPage("admin")}
                            >
                                Admin
                            </button>

                            {!currentUser ? (
                                <button
                                    onClick={() => showPage("auth")}
                                >
                                    Login
                                </button>
                            ) : (
                                <button
                                    className="btn btn-logout"
                                    onClick={logout}
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {currentPage === "home" && (
                <>
                    <div className="hero">
                        <div className="container">
                            <h1>Speak Italian Like You Live There</h1>

                            <p>
                                Master conversational Italian at your own pace with bite-sized, on-demand video lessons designed for real life.
                            </p>

                            <button
                                className="btn btn-primary"
                                onClick={() => showPage("auth")}
                            >
                                Get Started
                            </button>
                        </div>
                    </div>

                    <div className="container featured-section">
                        <h2 className="section-title">
                            Featured Courses
                        </h2>

                        <div className="course-grid">
                            {courses.map((course) => (
                                <div
                                    className="course-card"
                                    key={course.id}
                                    onClick={() =>
                                        viewCourseDetail(course.id)
                                    }
                                >
                                    <img
                                        src={course.icon}
                                        className="course-card-img"
                                        alt={course.title}
                                    />

                                    <div className="course-card-content">
                                        <h3>{course.title}</h3>

                                        <p>
                                            {course.modules} modules •{
                                                " "
                                            }
                                            {course.lessons} lessons
                                        </p>

                                        <div className="course-card-price">
                                            €{course.price}
                                        </div>

                                        <button className="btn btn-primary">
                                            View Course
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}

            {currentPage === "course-detail" && (
                <>
                    <div className="course-detail-hero">
                        <div className="container">
                            <div className="course-detail-header">
                                <h1>{currentCourse.title}</h1>

                                <div className="course-detail-meta">
                                    <span>👤 By Arash Azmi</span>
                                    <span>
                                        📚 {currentCourse.modules} Modules
                                    </span>
                                    <span>
                                        ⏱️ {currentCourse.lessons} lessons
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container detail-container">
                        <img
                            src={currentCourse.wideicon}
                            className="course-detail-img"
                            alt={currentCourse.title}
                        />

                        <div className="course-content-wrapper">
                            <div>
                                <div className="course-description">
                                    <h2>About This Course</h2>

                                    <p>
                                        NUOVO Espresso 1 is the first of
                                        six volumes of the NUOVO Espresso
                                        Italian course for foreigners.
                                    </p>
                                </div>

                                <div className="course-modules">
                                    <h2>Course Structure</h2>

                                    {courseModules.map((module, idx) => (
                                        <div
                                            className="module-item"
                                            key={idx}
                                        >
                                            <h4>
                                                Module {idx + 1}: {module.name}
                                            </h4>

                                            <p>
                                                {module.lessons} lessons
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="course-sidebar">
                                <h3>Enroll Now</h3>

                                <div className="course-price-display">
                                    €{currentCourse.price}
                                </div>

                                <button
                                    className="btn btn-primary"
                                    onClick={enrollCourse}
                                >
                                    Enroll in Course
                                </button>

                                <button
                                    className="btn btn-secondary"
                                    onClick={goHome}
                                >
                                    Browse More
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {currentPage === "auth" && (
                <div className="auth-container">
                    <div className="auth-form">
                        <h2>Create Your Account</h2>

                        <p>
                            Join thousands of students learning
                            from ArashAzmi
                        </p>

                        <div className="form-group">
                            <label>Email Address</label>

                            <input
                                type="email"
                                value={authForm.email}
                                onChange={(e) =>
                                    setAuthForm({
                                        ...authForm,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="form-group">
                            <label>Full Name</label>

                            <input
                                type="text"
                                value={authForm.name}
                                onChange={(e) =>
                                    setAuthForm({
                                        ...authForm,
                                        name: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <div className="form-group">
                            <label>Password</label>

                            <input
                                type="password"
                                value={authForm.password}
                                onChange={(e) =>
                                    setAuthForm({
                                        ...authForm,
                                        password: e.target.value,
                                    })
                                }
                            />
                        </div>

                        <button
                            className="btn btn-primary full-btn"
                            onClick={register}
                        >
                            Create Account
                        </button>

                        <div className="auth-link">
                            Already have an account?

                            <span onClick={login}> Sign In</span>
                        </div>
                    </div>
                </div>
            )}

            {currentPage === "dashboard" && (
                <div className="container dashboard-page">
                    <div className="dashboard-header">
                        <h1>
                            Welcome back, {currentUser?.name} 👋
                        </h1>

                        <p>
                            Continue learning and achieve your
                            goals
                        </p>
                    </div>

                    <div className="dashboard-content">
                        <h2>My Enrolled Courses</h2>

                        {enrolledCourses.length === 0 ? (
                            <div className="empty-state">
                                <p>No courses enrolled yet</p>

                                <button
                                    className="btn btn-primary"
                                    onClick={goHome}
                                >
                                    Browse Courses
                                </button>
                            </div>
                        ) : (
                            enrolledCourses.map((enrollment) => {
                                const course = courses.find(
                                    (c) => c.id === enrollment.id
                                );

                                return (
                                    <div
                                        className="course-enrollment-card"
                                        key={course.id}
                                        onClick={() =>
                                            goToPlayer(course.id)
                                        }
                                    >
                                        <img
                                            src={course.icon}
                                            className="enrollment-thumb"
                                            alt={course.title}
                                        />

                                        <div className="enrollment-info">
                                            <h3>{course.title}</h3>

                                            <div className="progress-bar">
                                                <div
                                                    className="progress-fill"
                                                    style={{
                                                        width: `${enrollment.progress}%`,
                                                    }}
                                                />
                                            </div>

                                            <div className="progress-text">
                                                {enrollment.progress}% complete
                                            </div>
                                        </div>

                                        <div className="enrollment-action">
                                            <button className="btn btn-primary btn-sm">
                                                Continue Learning
                                            </button>
                                        </div>
                                    </div>
                                );
                            })
                        )}
                    </div>
                </div>
            )}

            {currentPage === "player" && (
                <div className="container player-page">
                    <div className="player-container">
                        <div className="video-player">
                            <div style={{ width: "100%", margin: "0 auto" }}>
                                {/* <div className="video-player-icon">
                                    ▶
                                </div>

                                <div className="video-player-text">
                                    Kinescope Video Player
                                </div>

                                <div className="video-player-subtext">
                                    Secure DRM Protected Stream
                                </div> */}
                                <div><iframe
                                    style={{ width: "100%", height: "500px", border: 0 }}
                                    src="https://kinescope.io/embed/nXAooZjpj5dEYrT1nddnyR"
                                    allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;" frameBorder="0" allowFullscreen></iframe></div>
                            </div>

                            <div className="watermark-overlay">
                                <div className="watermark-title">
                                    Protected Content
                                </div>

                                <div className="watermark-item">
                                    {currentUser?.email ||
                                        "user@email.com"}
                                </div>

                                <div className="watermark-item">
                                    192.168.1.100
                                </div>

                                <div className="watermark-item">
                                    {watermarkTime}
                                </div>
                            </div>
                        </div>

                        <div className="lesson-detail">
                            <h2>
                                Lesson 2: Variables & Data Types
                            </h2>

                            <div className="lesson-meta">
                                Module 1: {currentCourse.title}
                            </div>

                            <div className="lesson-description">
                                Learn variables, types, structures,
                                and modern patterns.
                            </div>

                            <div className="lesson-actions">
                                <button
                                    className="btn btn-primary"
                                    onClick={markLessonComplete}
                                >
                                    Mark as Complete
                                </button>

                                <button
                                    className="btn btn-secondary"
                                    onClick={() =>
                                        showPage("dashboard")
                                    }
                                >
                                    Back to Dashboard
                                </button>
                            </div>
                        </div>

                        <div className="course-structure">
                            <h2>Course Structure</h2>

                            {generateModules(8).map(
                                (module, idx) => (
                                    <div
                                        className="structure-module"
                                        key={idx}
                                    >
                                        <div
                                            className="module-header"
                                            onClick={() =>
                                                toggleModule(idx)
                                            }
                                        >
                                            <h3>
                                                Module {idx + 1}: {module.name}
                                            </h3>

                                            <span className="module-toggle">
                                                {expandedModules.includes(idx)
                                                    ? "▲"
                                                    : "▼"}
                                            </span>
                                        </div>

                                        {expandedModules.includes(idx) && (
                                            <div className="module-lessons expanded">
                                                {generateLessons(
                                                    module.lessons
                                                ).map((lesson, lidx) => {
                                                    const isActive =
                                                        activeLesson.moduleIdx ===
                                                        idx &&
                                                        activeLesson.lessonIdx ===
                                                        lidx;

                                                    return (
                                                        <div
                                                            key={lidx}
                                                            className={`lesson-item ${isActive
                                                                ? "active"
                                                                : ""
                                                                }`}
                                                            onClick={() =>
                                                                selectLesson(idx, lidx)
                                                            }
                                                        >
                                                            <span className="lesson-status">
                                                                {lidx < 2
                                                                    ? "✓"
                                                                    : "○"}
                                                            </span>

                                                            <div className="lesson-info">
                                                                <h4>
                                                                    Lesson {lidx + 1}: {lesson}
                                                                </h4>

                                                                <p>
                                                                    Duration: 12 minutes
                                                                </p>
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            )}

            {currentPage === "admin" && (
                <div className="container admin-page">
                    <div className="admin-header-section">
                        <div>
                            <h2>Admin Dashboard</h2>

                            <p>
                                Manage courses, users, and
                                enrollments
                            </p>
                        </div>

                        <div className="admin-badge">
                            ADMIN
                        </div>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-card-label">
                                Total Users
                            </div>

                            <div className="stat-card-value">
                                42
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-card-label">
                                Revenue
                            </div>

                            <div className="stat-card-value">
                                €3,950
                            </div>
                        </div>

                        <div className="stat-card">
                            <div className="stat-card-label">
                                Enrollments
                            </div>

                            <div className="stat-card-value">
                                87
                            </div>
                        </div>
                    </div>

                    <div className="admin-section">
                        <h2>Quick Enroll User</h2>

                        <div
                            className={`success-message ${successVisible ? "show" : ""
                                }`}
                        >
                            ✓ User enrolled successfully!
                        </div>

                        <div className="enroll-form">
                            <div className="form-group">
                                <label>Select User</label>

                                <select
                                    value={adminEnroll.user}
                                    onChange={(e) =>
                                        setAdminEnroll({
                                            ...adminEnroll,
                                            user: e.target.value,
                                        })
                                    }
                                >
                                    <option value="">
                                        Choose user...
                                    </option>

                                    <option value="john@example.com">
                                        john@example.com
                                    </option>

                                    <option value="jane@example.com">
                                        jane@example.com
                                    </option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Select Course</label>

                                <select
                                    value={adminEnroll.course}
                                    onChange={(e) =>
                                        setAdminEnroll({
                                            ...adminEnroll,
                                            course: e.target.value,
                                        })
                                    }
                                >
                                    <option value="">
                                        Choose course...
                                    </option>

                                    {courses.map((course) => (
                                        <option
                                            key={course.id}
                                            value={course.id}
                                        >
                                            {course.title} - €
                                            {course.price}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Bank Transfer Ref</label>

                                <input
                                    type="text"
                                    value={adminEnroll.transferRef}
                                    onChange={(e) =>
                                        setAdminEnroll({
                                            ...adminEnroll,
                                            transferRef: e.target.value,
                                        })
                                    }
                                />
                            </div>

                            <button
                                className="btn btn-primary"
                                onClick={adminEnrollUser}
                            >
                                Enroll
                            </button>
                        </div>
                    </div>

                    <div className="admin-section">
                        <h2>All Users</h2>

                        <table>
                            <thead>
                                <tr>
                                    <th>Email</th>
                                    <th>Status</th>
                                    <th>Courses</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>john@example.com</td>

                                    <td>
                                        <span className="badge badge-success">
                                            Active
                                        </span>
                                    </td>

                                    <td>Nuovo Espresso 1</td>

                                    <td>
                                        <div className="action-buttons">
                                            <button
                                                className="btn btn-secondary btn-sm"
                                                onClick={() =>
                                                    editUser(
                                                        "john@example.com"
                                                    )
                                                }
                                            >
                                                Edit
                                            </button>

                                            <button
                                                className="btn btn-sm danger-btn"
                                                onClick={() =>
                                                    deleteUser(
                                                        "john@example.com"
                                                    )
                                                }
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>jane@example.com</td>

                                    <td>
                                        <span className="badge badge-pending">
                                            Pending
                                        </span>
                                    </td>

                                    <td>None</td>

                                    <td>
                                        <button
                                            className="btn btn-primary btn-sm"
                                            onClick={() =>
                                                quickEnroll(
                                                    "jane@example.com"
                                                )
                                            }
                                        >
                                            Quick Enroll
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="admin-section">
                        <h2>Email Notifications Log</h2>

                        <table>
                            <thead>
                                <tr>
                                    <th>Email Type</th>
                                    <th>Recipient</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>Welcome Email</td>
                                    <td>john@example.com</td>

                                    <td>
                                        <span className="badge badge-success">
                                            Sent
                                        </span>
                                    </td>

                                    <td>
                                        <button
                                            className="btn btn-secondary btn-sm"
                                            onClick={() =>
                                                resendEmail(
                                                    "john@example.com",
                                                    "welcome"
                                                )
                                            }
                                        >
                                            Resend
                                        </button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>Announcement</td>
                                    <td>all-users@list</td>

                                    <td>
                                        <span className="badge badge-success">
                                            Sent
                                        </span>
                                    </td>

                                    <td>
                                        <button
                                            className="btn btn-secondary btn-sm"
                                            onClick={() =>
                                                viewEmail("announcement")
                                            }
                                        >
                                            View
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </>
    );
}
