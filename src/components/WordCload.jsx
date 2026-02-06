// "use client";

// import React from "react";
// import Wordcloud from "@visx/wordcloud/lib/Wordcloud";

// const words = [
//     { text: "Python", value: 10 },
//     { text: "JavaScript", value: 10 },
//     { text: "React.js", value: 9 },
//     { text: "PostgreSQL", value: 9 },
//     { text: "MongoDB", value: 9 },
//     { text: "TypeScript", value: 8 },
//     { text: "Flask", value: 8 },
//     { text: "SQL", value: 7 },
//     { text: "HTML", value: 6 },
//     { text: "CSS", value: 6 },
//     { text: "FastAPI", value: 5 },
//     { text: "RestAPI", value: 5 },
//     { text: "Next.js", value: 5 },
//     { text: "Node.js", value: 4 },
//     { text: "GraphQL", value: 4 },
//     { text: "Git", value: 3 },
//     { text: "GitHub", value: 3 },
//     { text: "CI/CD", value: 3 },
//     { text: "AI", value: 6 },
//     { text: "ML", value: 2 },
//     { text: "NLP", value: 2 },
//     { text: "Jira", value: 2 },
//     { text: "Agile", value: 2 },
//     { text: "MySQL", value: 2 },
//     { text: "Vitest", value: 2 },
//     { text: "Jenkins", value: 2 },
//     { text: "Docker", value: 2 },
//     { text: "Kubernetes", value: 2 },
//     { text: "AWS", value: 2 },

// ];

// const width = 600;
// const height = 400;

// const WordCloud = () => {
//     return (
//         <svg width={width} height={height}>
//             <Wordcloud
//                 words={words}
//                 width={width}
//                 height={height}
//                 font="Impact"
//                 fontSize={(word) => 10 + word.value * 5}
//                 spiral="archimedean"
//                 rotate={0} // 👈 NO rotation bugs
//                 padding={2}
//                 random={() => 0.5} // deterministic layout
//             >
//                 {(cloudWords) =>
//                     cloudWords.map((w, i) => (
//                         <text
//                             key={i}
//                             fontSize={w.size}
//                             fontFamily={w.font}
//                             fill="#333"
//                             textAnchor="middle"
//                             transform={`translate(${w.x}, ${w.y}) rotate(${w.rotate})`}
//                         >
//                             {w.text}
//                         </text>
//                     ))
//                 }
//             </Wordcloud>
//         </svg>
//     );
// };

// export default WordCloud;
