"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";

import {
    BookOpenCheck,
    CreditCardIcon,
    House,
    LogOutIcon,
    Menu,
    SettingsIcon,
    ShieldUser,
    UserIcon,
} from "lucide-react"


import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";
import { CardSpotlight } from "@/components/ui/card-spotlight";

export default function Project2Page() {
    const courses = useMemo(
        () => [
            {
                id: 1,
                title: "Nuovo Espresso 1",
                price: 49,
                modules: 13,
                wideicon: "https://creativityqf.b-cdn.net/extra/wide-ns1.jpg",
                icon: "https://creativityqf.b-cdn.net/extra/ns1.png",
                lessons: 45,
            },
            {
                id: 2,
                title: "Nuovo Espresso 2",
                price: 59,
                modules: 15,
                wideicon: "https://creativityqf.b-cdn.net/extra/wide-ns2.jpg",
                icon: "https://creativityqf.b-cdn.net/extra/ns2.png",
                lessons: 52,
            },
            {
                id: 3,
                title: "Nuovo Espresso 3",
                price: 69,
                modules: 18,
                wideicon: "https://creativityqf.b-cdn.net/extra/wide-ns3.jpg",
                icon: "https://creativityqf.b-cdn.net/extra/ns3.jfif",
                lessons: 65,
            },
            {
                id: 4,
                title: "Nuovo Espresso 4",
                price: 79,
                modules: 20,
                wideicon: "https://creativityqf.b-cdn.net/extra/wide-ns4.jpg",
                icon: "https://creativityqf.b-cdn.net/extra/ns4.jfif",
                lessons: 72,
            },
            {
                id: 5,
                title: "Nuovo Espresso 5",
                price: 64,
                modules: 14,
                wideicon: "https://creativityqf.b-cdn.net/extra/wide-ns5.jpg",
                icon: "https://creativityqf.b-cdn.net/extra/ns5.png",
                lessons: 48,
            },
            {
                id: 6,
                title: "Nuovo Espresso 6",
                price: 74,
                modules: 16,
                wideicon: "https://creativityqf.b-cdn.net/extra/wide-ns6.jpg",
                icon: "https://creativityqf.b-cdn.net/extra/ns6.jfif",
                lessons: 58,
            },
        ],
        []
    );


    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

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

        const exists = enrolledCourses.find((c) => c.id === currentCourse.id);

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
                (i >= moduleNames.length ? ` (${Math.floor(i / moduleNames.length) + 1})` : ""),
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
            lessons[i % lessons.length] + (i >= lessons.length ? ` (${Math.floor(i / lessons.length) + 1})` : "")
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
        const confirmed = window.confirm(`Delete ${email}?`);

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
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="flex justify-between items-center py-4">
                        <div className="cursor-pointer" onClick={goHome}>
                            <Image src="https://creativityqf.b-cdn.net/extra/logo.png" width={80} height={80} alt="Logo" />
                        </div>
                        <div className="hidden sm:block flex flex-wrap gap-2">
                            <Button variant="ghost" onClick={goHome}>
                                Home
                            </Button>
                            <Button variant="ghost" onClick={() => showPage("dashboard")}>
                                My Courses
                            </Button>
                            <Button variant="ghost" onClick={() => showPage("admin")}>
                                Admin
                            </Button>
                            {!currentUser ? (
                                <Button onClick={() => showPage("auth")}>Login</Button>
                            ) : (
                                <Button variant="destructive" onClick={logout}>
                                    Logout
                                </Button>
                            )}
                        </div>

                        {/* mobile mode */}
                        <div className="md:hidden">
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Menu />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                    <DropdownMenuItem onClick={goHome}>
                                        <House />
                                        Home
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => showPage("dashboard")}>
                                        <BookOpenCheck />
                                        My Courses
                                    </DropdownMenuItem>
                                    <DropdownMenuItem onClick={() => showPage("admin")}>
                                        <ShieldUser />
                                        Admin Dashboard
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator />
                                    {!currentUser ? (
                                        <DropdownMenuItem variant="destructive" onClick={() => showPage("auth")}>
                                            <LogOutIcon />
                                            Login
                                        </DropdownMenuItem>
                                    ) : (
                                        <DropdownMenuItem variant="destructive" onClick={logout}>
                                            <LogOutIcon />
                                            Log out
                                        </DropdownMenuItem>
                                    )}

                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>



            </header>

            {/* Home Page */}
            {currentPage === "home" && (
                <>
                    <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-emerald-50/30 py-10 lg:py-20">
                        {/* Subtle Background Decorative Elements */}
                        <div className="absolute top-0 left-1/4 -z-10 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl"></div>
                        <div className="absolute bottom-10 right-1/4 -z-10 h-96 w-96 rounded-full bg-emerald-200/20 blur-3xl"></div>

                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="grid items-center gap-12 lg:grid-cols-12">

                                {/* Left Column: Content */}
                                <div className="text-center lg:col-span-7 lg:text-left">
                                    {/* Floating Badge */}
                                    {/* <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-sm font-medium text-emerald-800">
                                        <span className="flex h-2 w-2 rounded-full bg-emerald-500"></span>
                                        Speak like a local from day one
                                    </span> */}

                                    {/* Main Headline */}
                                    <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
                                        <span className="text-green-500">Master Italian.</span> <br />
                                        Live the <span className="bg-gradient-to-r from-red-600 to-red-300 bg-clip-text text-transparent">Dolce Vita.</span>
                                    </h1>

                                    {/* Subtitle */}
                                    <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto lg:mx-0">
                                        Master conversational Italian at your own pace with bite-sized, on-demand video
                                        lessons designed for real life.
                                    </p>

                                    {/* CTAs */}
                                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                                        <a href="#" className="w-full sm:w-auto rounded-xl bg-green-500 px-8 py-4 text-center text-md font-semibold text-white shadow-lg shadow-orange-600/30 hover:bg-orange-500 hover:shadow-orange-500/40 transition-all duration-200">
                                            Start Free Lesson
                                        </a>
                                        <a href="#" className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-8 py-4 text-center text-md font-semibold text-slate-700 hover:bg-slate-50 transition-all duration-200">
                                            <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 0 1 0 .656l-5.603 3.113a.375.375 0 0 1-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112Z" />
                                            </svg>
                                            See How It Works
                                        </a>
                                    </div>

                                    {/* Trust / Social Proof */}
                                    {/* <div className="mt-10 border-t border-slate-200 pt-8">
                                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                                            <div className="flex -space-x-2">
                                                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="User" />
                                                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="User" />
                                                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80" alt="User" />
                                            </div>
                                            <div>
                                                <p className="font-medium text-slate-800">Join over 15,000+ students</p>
                                                <p className="text-xs">Rating 4.9/5 from independent reviews</p>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>

                                {/* Right Column: Visual Component */}
                                <div className="relative lg:col-span-5 flex justify-center">
                                    <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white p-3 shadow-xl shadow-slate-200/80 ring-1 ring-slate-100">

                                        {/* Interactive Phrase Overlay */}
                                        <div className="mt-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                            <div className="flex items-start gap-3">
                                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white font-bold text-xl shadow-md">
                                                    🇮🇹
                                                </div>
                                                <div>
                                                    <p className="font-bold text-slate-800 text-lg italic">"Buongiorno! Un caffè, per favore."</p>
                                                    <p className="text-sm text-slate-500 mt-0.5">Good morning! A coffee, please.</p>
                                                </div>
                                                <button className="ml-auto rounded-full p-2 bg-white shadow-sm hover:bg-slate-100 text-slate-600 transition-colors">
                                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>





                    <section className="py-28">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Courses</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {courses.map((course) => (
                                    <Card
                                        key={course.id}
                                        className="cursor-pointer hover:shadow-lg transition-shadow"
                                        onClick={() => viewCourseDetail(course.id)}
                                    >
                                        <img
                                            src={course.icon}
                                            className="w-full h-48 object-cover rounded-t-lg"
                                            alt={course.title}
                                        />
                                        <CardContent className="p-4">
                                            <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                                            <p className="text-gray-600 mb-2">
                                                {course.modules} modules • {course.lessons} lessons
                                            </p>
                                            <div className="text-2xl font-bold text-[#185fa5] mb-4">€{course.price}</div>
                                            <Button className="w-full bg-green-500">View Course</Button>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>
                </>
            )}

            {/* Course Detail Page */}
            {currentPage === "course-detail" && (
                <>
                    <div className="pt-12">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <h1 className="text-3xl md:text-4xl font-bold mb-4">{currentCourse.title}</h1>
                            <div className="flex flex-wrap gap-4 text-sm">
                                <span>👤 By Arash Azmi</span>
                                <span>📚 {currentCourse.modules} Modules</span>
                                <span>⏱️ {currentCourse.lessons} lessons</span>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <img
                            src={currentCourse.wideicon}
                            className="w-full rounded-xl mb-8"
                            alt={currentCourse.title}
                        />

                        <div className="flex flex-col lg:flex-row gap-8">
                            <div className="flex-1">
                                <div className="bg-white rounded-lg border p-6 mb-6">
                                    <h2 className="text-2xl font-semibold mb-4">About This Course</h2>
                                    <p className="text-gray-600">
                                        NUOVO Espresso 1 is the first of six volumes of the NUOVO Espresso Italian
                                        course for foreigners.
                                    </p>
                                </div>

                                <div className="bg-white rounded-lg border p-6">
                                    <h2 className="text-2xl font-semibold mb-4">Course Structure</h2>
                                    <div className="space-y-3">
                                        {courseModules.map((module, idx) => (
                                            <div
                                                key={idx}
                                                className="p-4 bg-gray-50 border-l-4 border-[#185fa5] rounded"
                                            >
                                                <h4 className="font-semibold">
                                                    Module {idx + 1}: {module.name}
                                                </h4>
                                                <p className="text-sm text-gray-600">{module.lessons} lessons</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-80">
                                <div className="bg-white rounded-lg border p-6 sticky top-24">
                                    <h3 className="text-xl font-semibold mb-4">Enroll Now</h3>
                                    <div className="text-4xl font-bold text-[#185fa5] mb-6">
                                        €{currentCourse.price}
                                    </div>
                                    <Button className="w-full mb-3" onClick={enrollCourse}>
                                        Enroll in Course
                                    </Button>
                                    <Button variant="outline" className="w-full" onClick={goHome}>
                                        Browse More
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}

            {/* Auth Page */}
            {currentPage === "auth" && (
                <div className="min-h-[70vh] flex items-center justify-center px-4 py-12">
                    <Card className="w-full max-w-md">
                        <CardContent className="p-6">
                            <h2 className="text-2xl font-bold text-center mb-2">Create Your Account</h2>
                            <p className="text-center text-gray-600 mb-6">
                                Join thousands of students learning from ArashAzmi
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <Label htmlFor="email">Email Address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={authForm.email}
                                        onChange={(e) => setAuthForm({ ...authForm, email: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="name">Full Name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        value={authForm.name}
                                        onChange={(e) => setAuthForm({ ...authForm, name: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={authForm.password}
                                        onChange={(e) => setAuthForm({ ...authForm, password: e.target.value })}
                                    />
                                </div>

                                <Button className="w-full" onClick={register}>
                                    Create Account
                                </Button>

                                <div className="text-center text-sm">
                                    Already have an account?{" "}
                                    <button onClick={login} className="text-[#185fa5] hover:underline">
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            )}

            {/* Dashboard Page */}
            {currentPage === "dashboard" && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold">Welcome back, {currentUser?.name} 👋</h1>
                        <p className="text-gray-600">Continue learning and achieve your goals</p>
                    </div>

                    <h2 className="text-2xl font-semibold mb-4">My Enrolled Courses</h2>

                    {enrolledCourses.length === 0 ? (
                        <Card className="text-center py-12">
                            <CardContent>
                                <p className="text-gray-600 mb-4">No courses enrolled yet</p>
                                <Button onClick={goHome}>Browse Courses</Button>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="space-y-4">
                            {enrolledCourses.map((enrollment) => {
                                const course = courses.find((c) => c.id === enrollment.id);
                                return (
                                    <Card
                                        key={course.id}
                                        className="cursor-pointer hover:shadow-md transition-shadow"
                                        onClick={() => goToPlayer(course.id)}
                                    >
                                        <CardContent className="p-4 flex flex-col sm:flex-row gap-4 items-center">
                                            <img
                                                src={course.icon}
                                                className="w-32 h-24 object-cover rounded"
                                                alt={course.title}
                                            />
                                            <div className="flex-1 w-full">
                                                <h3 className="text-lg font-semibold mb-2">{course.title}</h3>
                                                <Progress value={enrollment.progress} className="h-2" />
                                                <div className="text-sm text-gray-600 mt-1">{enrollment.progress}% complete</div>
                                            </div>
                                            <Button variant="outline" className="w-full sm:w-auto">
                                                Continue Learning
                                            </Button>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    )}
                </div>
            )}

            {/* Player Page */}
            {currentPage === "player" && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="relative bg-black rounded-xl mb-8">
                        <div className="aspect-video">
                            <iframe
                                className="w-full h-full rounded-xl"
                                src="https://kinescope.io/embed/nXAooZjpj5dEYrT1nddnyR"
                                allow="autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white p-3 rounded-lg text-sm">
                            <div className="font-semibold">Protected Content</div>
                            <div>{currentUser?.email || "user@email.com"}</div>
                            <div>192.168.1.100</div>
                            <div>{watermarkTime}</div>
                        </div>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 mb-8">
                        <h2 className="text-2xl font-semibold mb-2">Lesson 2: Variables & Data Types</h2>
                        <div className="text-gray-600 mb-4">Module 1: {currentCourse.title}</div>
                        <p className="text-gray-700 mb-4">
                            Learn variables, types, structures, and modern patterns.
                        </p>
                        <div className="flex gap-3">
                            <Button onClick={markLessonComplete}>Mark as Complete</Button>
                            <Button variant="outline" onClick={() => showPage("dashboard")}>
                                Back to Dashboard
                            </Button>
                        </div>
                    </div>

                    <div className="bg-white rounded-lg border">
                        <h2 className="text-xl font-semibold p-4 border-b">Course Structure</h2>
                        {generateModules(8).map((module, idx) => (
                            <div key={idx} className="border-b last:border-b-0">
                                <div
                                    className="flex justify-between items-center p-4 cursor-pointer hover:bg-gray-50"
                                    onClick={() => toggleModule(idx)}
                                >
                                    <h3 className="font-medium">
                                        Module {idx + 1}: {module.name}
                                    </h3>
                                    <span>{expandedModules.includes(idx) ? "▲" : "▼"}</span>
                                </div>

                                {expandedModules.includes(idx) && (
                                    <div className="border-t">
                                        {generateLessons(module.lessons).map((lesson, lidx) => {
                                            const isActive = activeLesson.moduleIdx === idx && activeLesson.lessonIdx === lidx;
                                            return (
                                                <div
                                                    key={lidx}
                                                    className={`flex items-start gap-3 p-4 cursor-pointer hover:bg-blue-50 ${isActive ? "bg-blue-50" : ""
                                                        }`}
                                                    onClick={() => selectLesson(idx, lidx)}
                                                >
                                                    <span className="text-green-600">{lidx < 2 ? "✓" : "○"}</span>
                                                    <div>
                                                        <h4 className="font-medium">
                                                            Lesson {lidx + 1}: {lesson}
                                                        </h4>
                                                        <p className="text-sm text-gray-600">Duration: 12 minutes</p>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Admin Page */}
            {currentPage === "admin" && (
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="flex justify-between items-center mb-6">
                        <div>
                            <h2 className="text-3xl font-bold">Admin Dashboard</h2>
                            <p className="text-gray-600">Manage courses, users, and enrollments</p>
                        </div>
                        <Badge className="bg-[#185fa5]">ADMIN</Badge>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <Card>
                            <CardContent className="p-6">
                                <div className="text-gray-600 mb-2">Total Users</div>
                                <div className="text-3xl font-bold text-[#185fa5]">42</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <div className="text-gray-600 mb-2">Revenue</div>
                                <div className="text-3xl font-bold text-[#185fa5]">€3,950</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className="p-6">
                                <div className="text-gray-600 mb-2">Enrollments</div>
                                <div className="text-3xl font-bold text-[#185fa5]">87</div>
                            </CardContent>
                        </Card>
                    </div>

                    <Card className="mb-8">
                        <CardContent className="p-6">
                            <h2 className="text-xl font-semibold mb-4">Quick Enroll User</h2>
                            {successVisible && (
                                <div className="bg-green-50 text-green-700 p-3 rounded-lg mb-4">
                                    ✓ User enrolled successfully!
                                </div>
                            )}
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                                <div>
                                    <Label>Select User</Label>
                                    <Select
                                        value={adminEnroll.user}
                                        onValueChange={(value) => setAdminEnroll({ ...adminEnroll, user: value })}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Choose user..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="john@example.com">john@example.com</SelectItem>
                                            <SelectItem value="jane@example.com">jane@example.com</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label>Select Course</Label>
                                    <Select
                                        value={adminEnroll.course}
                                        onValueChange={(value) => setAdminEnroll({ ...adminEnroll, course: value })}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Choose course..." />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {courses.map((course) => (
                                                <SelectItem key={course.id} value={course.id.toString()}>
                                                    {course.title} - €{course.price}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label>Bank Transfer Ref</Label>
                                    <Input
                                        type="text"
                                        value={adminEnroll.transferRef}
                                        onChange={(e) => setAdminEnroll({ ...adminEnroll, transferRef: e.target.value })}
                                    />
                                </div>

                                <div className="flex items-end">
                                    <Button onClick={adminEnrollUser}>Enroll</Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="mb-8">
                        <CardContent className="p-6">
                            <h2 className="text-xl font-semibold mb-4">All Users</h2>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Courses</TableHead>
                                        <TableHead>Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>john@example.com</TableCell>
                                        <TableCell>
                                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                                                Active
                                            </Badge>
                                        </TableCell>
                                        <TableCell>Nuovo Espresso 1</TableCell>
                                        <TableCell>
                                            <div className="flex gap-2">
                                                <Button variant="outline" size="sm" onClick={() => editUser("john@example.com")}>
                                                    Edit
                                                </Button>
                                                <Button variant="destructive" size="sm" onClick={() => deleteUser("john@example.com")}>
                                                    Delete
                                                </Button>
                                            </div>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>jane@example.com</TableCell>
                                        <TableCell>
                                            <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
                                                Pending
                                            </Badge>
                                        </TableCell>
                                        <TableCell>None</TableCell>
                                        <TableCell>
                                            <Button size="sm" onClick={() => quickEnroll("jane@example.com")}>
                                                Quick Enroll
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <h2 className="text-xl font-semibold mb-4">Email Notifications Log</h2>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Email Type</TableHead>
                                        <TableHead>Recipient</TableHead>
                                        <TableHead>Status</TableHead>
                                        <TableHead>Action</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    <TableRow>
                                        <TableCell>Welcome Email</TableCell>
                                        <TableCell>john@example.com</TableCell>
                                        <TableCell>
                                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                                                Sent
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="outline" size="sm" onClick={() => resendEmail("john@example.com", "welcome")}>
                                                Resend
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                    <TableRow>
                                        <TableCell>Announcement</TableCell>
                                        <TableCell>all-users@list</TableCell>
                                        <TableCell>
                                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                                                Sent
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <Button variant="outline" size="sm" onClick={() => viewEmail("announcement")}>
                                                View
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>
            )}
        </>
    );
}
