'use client';

import { useState, useMemo, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RotateCw, Search, Volume2, ArrowRightLeft } from 'lucide-react';
import VOCABULARY from './words';

const Page = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [difficultyFilter, setDifficultyFilter] = useState('All');
    const [isLanguageReversed, setIsLanguageReversed] = useState(false);
    const [hardWords, setHardWords] = useState(new Set());
    const [isClient, setIsClient] = useState(false);

    // Initialize from localStorage on mount
    useEffect(() => {
        setIsClient(true);
        try {
            const savedHardWords = localStorage.getItem('vocab_hard_words');
            if (savedHardWords) {
                setHardWords(new Set(JSON.parse(savedHardWords)));
            }
            const savedLanguageReversed = localStorage.getItem('vocab_language_reversed');
            if (savedLanguageReversed) {
                setIsLanguageReversed(JSON.parse(savedLanguageReversed));
            }
        } catch (error) {
            console.error('Error loading from localStorage:', error);
        }
    }, []);

    // Save hard words to localStorage whenever they change
    useEffect(() => {
        if (isClient) {
            try {
                localStorage.setItem('vocab_hard_words', JSON.stringify(Array.from(hardWords)));
            } catch (error) {
                console.error('Error saving to localStorage:', error);
            }
        }
    }, [hardWords, isClient]);

    // Save language preference to localStorage whenever it changes
    useEffect(() => {
        if (isClient) {
            try {
                localStorage.setItem('vocab_language_reversed', JSON.stringify(isLanguageReversed));
            } catch (error) {
                console.error('Error saving to localStorage:', error);
            }
        }
    }, [isLanguageReversed, isClient]);

    const categories = ['All', ...new Set(VOCABULARY.map((v) => v.category))];

    const filteredVocab = useMemo(() => {
        return VOCABULARY.filter((item) => {
            const matchesSearch =
                item.german.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.english.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory =
                selectedCategory === 'All' || item.category === selectedCategory;
            const matchesDifficulty =
                difficultyFilter === 'All' ||
                (difficultyFilter === 'Hard' && hardWords.has(item.id)) ||
                (difficultyFilter === 'Easy' && !hardWords.has(item.id));
            return matchesSearch && matchesCategory && matchesDifficulty;
        });
    }, [searchTerm, selectedCategory, difficultyFilter, hardWords]);

    const currentCard = filteredVocab[currentIndex];

    const handleNext = () => {
        setCurrentIndex((prev) =>
            prev + 1 < filteredVocab.length ? prev + 1 : 0
        );
        setIsFlipped(false);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) =>
            prev - 1 >= 0 ? prev - 1 : filteredVocab.length - 1
        );
        setIsFlipped(false);
    };

    const handleReset = () => {
        setCurrentIndex(0);
        setIsFlipped(false);
        setSearchTerm('');
        setSelectedCategory('All');
        setDifficultyFilter('All');
    };

    // Reset currentIndex when filteredVocab changes to prevent "No words found"
    useEffect(() => {
        if (currentIndex >= filteredVocab.length && filteredVocab.length > 0) {
            setCurrentIndex(0);
        }
    }, [filteredVocab, currentIndex]);

    const isCurrentCardHard = currentCard && hardWords.has(currentCard.id);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
            {/* Background decorative elements */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-3"></div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 pt-16 pb-12">
                {/* Controls */}
                <div className="space-y-4 mb-8">
                    {/* Top row: Search and Language Toggle */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {/* Search */}
                        <div className="md:col-span-2 relative">
                            <Search className="absolute left-4 top-3.5 h-5 w-5 text-slate-500" />
                            <input
                                type="text"
                                placeholder="Search words..."
                                value={searchTerm}
                                onChange={(e) => {
                                    setSearchTerm(e.target.value);
                                    setCurrentIndex(0);
                                    setIsFlipped(false);
                                }}
                                className="w-full pl-12 pr-4 py-3 bg-slate-700/40 border border-slate-600/60 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition"
                            />
                        </div>

                        {/* Language Direction Toggle */}
                        <button
                            onClick={() => setIsLanguageReversed(!isLanguageReversed)}
                            className={`px-4 py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 border ${isLanguageReversed
                                ? 'bg-cyan-500/20 border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/30'
                                : 'bg-slate-700/40 border-slate-600/60 text-slate-300 hover:bg-slate-600/40'
                                }`}
                            title="Toggle between German→English and English→German"
                        >
                            <ArrowRightLeft className="h-4 w-4" />
                            <span className="text-sm hidden sm:inline">
                                {isLanguageReversed ? 'EN→DE' : 'DE→EN'}
                            </span>
                        </button>
                    </div>

                    {/* Category Filter */}
                    <div className="space-y-2">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                            Category
                        </p>
                        <div className="flex gap-2 overflow-x-auto pb-2 scroll-smooth">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => {
                                        setSelectedCategory(cat);
                                        setCurrentIndex(0);
                                        setIsFlipped(false);
                                    }}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition whitespace-nowrap ${selectedCategory === cat
                                        ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                                        : 'bg-slate-700/40 text-slate-300 hover:bg-slate-600/40 border border-slate-600/40'
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Difficulty Filter */}
                    <div className="space-y-2">
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                            Difficulty
                        </p>
                        <div className="flex gap-2">
                            {['All', 'Easy', 'Hard'].map((level) => (
                                <button
                                    key={level}
                                    onClick={() => {
                                        setDifficultyFilter(level);
                                        setCurrentIndex(0);
                                        setIsFlipped(false);
                                    }}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition ${difficultyFilter === level
                                        ? level === 'Hard'
                                            ? 'bg-red-500/80 text-white shadow-lg shadow-red-500/50'
                                            : level === 'Easy'
                                                ? 'bg-green-500/80 text-white shadow-lg shadow-green-500/50'
                                                : 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                                        : 'bg-slate-700/40 text-slate-300 hover:bg-slate-600/40 border border-slate-600/40'
                                        }`}
                                >
                                    {level}
                                    {level !== 'All' && ` (${level === 'Hard'
                                        ? hardWords.size
                                        : VOCABULARY.length - hardWords.size
                                        })`}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Flashcard */}
                {isClient && filteredVocab.length > 0 ? (
                    <>
                        <div
                            onClick={() => setIsFlipped(!isFlipped)}
                            className="mb-8 cursor-pointer group perspective"
                        >
                            <div className="relative w-full aspect-video max-w-3xl mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-purple-600/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/50 border border-blue-500/20">
                                    {/* Easy/Hard Buttons */}
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (currentCard && hardWords.has(currentCard.id)) {
                                                    const newHardWords = new Set(hardWords);
                                                    newHardWords.delete(currentCard.id);
                                                    setHardWords(newHardWords);
                                                }
                                            }}
                                            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${!isCurrentCardHard
                                                ? 'bg-green-500/80 text-white shadow-lg shadow-green-500/50'
                                                : 'bg-green-500/30 text-green-200 hover:bg-green-500/50'
                                                }`}
                                            title="Mark as easy"
                                        >
                                            🟢 Easy
                                        </button>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                if (currentCard && !hardWords.has(currentCard.id)) {
                                                    const newHardWords = new Set(hardWords);
                                                    newHardWords.add(currentCard.id);
                                                    setHardWords(newHardWords);
                                                }
                                            }}
                                            className={`px-3 py-1.5 rounded-full text-xs font-semibold transition ${isCurrentCardHard
                                                ? 'bg-red-500/80 text-white shadow-lg shadow-red-500/50'
                                                : 'bg-red-500/30 text-red-200 hover:bg-red-500/50'
                                                }`}
                                            title="Mark as hard"
                                        >
                                            🔴 Hard
                                        </button>
                                    </div>

                                    {/* Front side */}
                                    {!isFlipped && (
                                        <div className="text-center animate-fadeIn">
                                            <p className="text-slate-200 text-sm font-medium mb-4 opacity-75">
                                                {isLanguageReversed ? 'English' : 'German'}
                                            </p>
                                            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
                                                {isLanguageReversed
                                                    ? currentCard?.english
                                                    : currentCard?.german}
                                            </h2>
                                            <p className="text-blue-100 text-sm opacity-75">
                                                Click to reveal {isLanguageReversed ? 'German' : 'English'}
                                            </p>
                                        </div>
                                    )}

                                    {/* Back side */}
                                    {isFlipped && (
                                        <div className="text-center animate-fadeIn">
                                            <p className="text-slate-200 text-sm font-medium mb-4 opacity-75">
                                                {isLanguageReversed ? 'German' : 'English'}
                                            </p>
                                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                                                {isLanguageReversed
                                                    ? currentCard?.german
                                                    : currentCard?.english}
                                            </h2>
                                            <p className="text-blue-100 text-sm opacity-75">
                                                Click to see {isLanguageReversed ? 'English' : 'German'}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        <style jsx>{`
              @keyframes fadeIn {
                from {
                  opacity: 0;
                  transform: scale(0.98);
                }
                to {
                  opacity: 1;
                  transform: scale(1);
                }
              }
              .animate-fadeIn {
                animation: fadeIn 0.4s ease-out;
              }
              .perspective {
                perspective: 1000px;
              }
            `}</style>

                        {/* Progress and Navigation */}
                        <div className="flex flex-col items-center gap-6">
                            {/* Progress indicator */}
                            <div className="w-full max-w-sm">
                                <div className="flex justify-between text-sm text-slate-400 mb-2">
                                    <span className="font-medium">Progress</span>
                                    <span className="font-mono text-blue-400">
                                        {currentIndex + 1} / {filteredVocab.length}
                                    </span>
                                </div>
                                <div className="w-full bg-slate-700/50 rounded-full h-2.5 overflow-hidden">
                                    <div
                                        className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 h-2.5 rounded-full transition-all duration-300"
                                        style={{
                                            width: `${((currentIndex + 1) / filteredVocab.length) * 100}%`,
                                        }}
                                    ></div>
                                </div>
                            </div>

                            {/* Navigation buttons */}
                            <div className="flex gap-4 items-center">
                                <button
                                    onClick={handlePrev}
                                    className="p-3 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition text-white border border-slate-600/40 hover:border-slate-500/60"
                                    aria-label="Previous card"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </button>

                                <button
                                    onClick={handleReset}
                                    className="px-6 py-3 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition text-white flex items-center gap-2 font-medium border border-slate-600/40 hover:border-slate-500/60"
                                >
                                    <RotateCw className="h-4 w-4" />
                                    Reset
                                </button>

                                <button
                                    onClick={handleNext}
                                    className="p-3 rounded-lg bg-slate-700/50 hover:bg-slate-600/50 transition text-white border border-slate-600/40 hover:border-slate-500/60"
                                    aria-label="Next card"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </button>
                            </div>

                            {/* Category badge */}
                            <div className="text-sm text-slate-400">
                                Category:{' '}
                                <span className="text-blue-300 font-medium">
                                    {currentCard?.category}
                                </span>
                                {isCurrentCardHard && (
                                    <span className="ml-3 text-red-300">
                                        • Marked as <span className="font-medium">Hard</span>
                                    </span>
                                )}
                            </div>
                        </div>
                    </>
                ) : !isClient ? (
                    <div className="text-center py-32">
                        <div className="animate-pulse">
                            <div className="h-64 bg-slate-700/50 rounded-2xl mb-8"></div>
                            <div className="space-y-3">
                                <div className="h-4 bg-slate-700/50 rounded w-32 mx-auto"></div>
                                <div className="h-4 bg-slate-700/50 rounded w-24 mx-auto"></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center py-32">
                        <div className="mb-6">
                            <div className="text-6xl mb-4">🔍</div>
                            <p className="text-slate-400 text-lg">
                                No words found matching your filters.
                            </p>
                        </div>
                        <button
                            onClick={handleReset}
                            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-lg text-white font-medium transition shadow-lg shadow-blue-500/30"
                        >
                            Reset All Filters
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;