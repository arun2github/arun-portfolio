(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/CodeRainBackground.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const CodeRainBackground = ({ className = '', trailColor = 'rgba(13, 17, 23, 0.1)', textColor = '#33C6A8', fontSize = 16, characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>[]{}/?$#@!%^&*()-_=+|', animationFPS = 30 })=>{
    _s();
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animationFrameId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastTimeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const interval = 1000 / animationFPS;
    const draw = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CodeRainBackground.useCallback[draw]": (ctx, canvas, columns, drops)=>{
            ctx.fillStyle = trailColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = textColor;
            ctx.font = `${fontSize}px monospace`;
            for(let i = 0; i < columns.length; i++){
                const text = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);
                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0; // Reset drop to top randomly
                }
                drops[i]++;
            }
        }
    }["CodeRainBackground.useCallback[draw]"], [
        trailColor,
        textColor,
        fontSize,
        characters
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CodeRainBackground.useEffect": ()=>{
            const canvas = canvasRef.current;
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            if (!ctx) return;
            let columnsCount;
            let drops;
            const setup = {
                "CodeRainBackground.useEffect.setup": ()=>{
                    canvas.width = window.innerWidth;
                    canvas.height = window.innerHeight;
                    columnsCount = Math.floor(canvas.width / fontSize);
                    drops = [];
                    for(let x = 0; x < columnsCount; x++){
                        drops[x] = 1 + Math.floor(Math.random() * (canvas.height / fontSize));
                    }
                }
            }["CodeRainBackground.useEffect.setup"];
            setup(); // Initial setup
            lastTimeRef.current = 0; // Reset last time on setup
            const render = {
                "CodeRainBackground.useEffect.render": (timestamp)=>{
                    animationFrameId.current = requestAnimationFrame(render);
                    if (timestamp - lastTimeRef.current < interval) {
                        return; // Skip frame if interval not met
                    }
                    lastTimeRef.current = timestamp - (timestamp - lastTimeRef.current) % interval; // Adjust lastTime
                    draw(ctx, canvas, drops, drops);
                }
            }["CodeRainBackground.useEffect.render"];
            animationFrameId.current = requestAnimationFrame(render);
            const handleResize = {
                "CodeRainBackground.useEffect.handleResize": ()=>{
                    if (animationFrameId.current) {
                        cancelAnimationFrame(animationFrameId.current);
                    }
                    setup(); // Re-setup on resize
                    lastTimeRef.current = 0; // Reset last time on resize
                    animationFrameId.current = requestAnimationFrame(render); // Restart render loop
                }
            }["CodeRainBackground.useEffect.handleResize"];
            window.addEventListener('resize', handleResize);
            return ({
                "CodeRainBackground.useEffect": ()=>{
                    if (animationFrameId.current) {
                        cancelAnimationFrame(animationFrameId.current);
                    }
                    window.removeEventListener('resize', handleResize);
                }
            })["CodeRainBackground.useEffect"];
        }
    }["CodeRainBackground.useEffect"], [
        draw,
        fontSize,
        interval
    ]); // Add interval to dependencies
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: `absolute inset-0 w-full h-full z-0 ${className}`
    }, void 0, false, {
        fileName: "[project]/src/components/CodeRainBackground.tsx",
        lineNumber: 99,
        columnNumber: 10
    }, this);
};
_s(CodeRainBackground, "3wPk6C0DsXrKPNFZzW3hUpqurxY=");
_c = CodeRainBackground;
const __TURBOPACK__default__export__ = CodeRainBackground;
var _c;
__turbopack_context__.k.register(_c, "CodeRainBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Hero.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodeRainBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/CodeRainBackground.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
'use client';
;
;
;
const Hero = ()=>{
    const headline = "Hello, I'm Arun";
    const tagline = "Creative Frontend Developer | Modern & Intuitive Web Experiences";
    const devCharacters = "const function async await => {} [] () : Widget build StatelessWidget StatefulWidget Future<void> " + "import export default class interface type new return if else for while true false null undefined " + "React.FC useState useEffect useRef useCallback useMemo useContext useReducer <div/> <span/> <p/> " + "NextPage GetServerSideProps GetStaticProps App Router API Route Middleware Edge Functions " + "TailwindCSS @apply theme extend plugins JIT AOT Flutter Dart Material Cupertino BLoC Provider Riverpod " + "setState build(BuildContext context) Scaffold AppBar Text Center Column Row Stack Padding Image.asset " + "010101011100101010111101010101010000111101010101010101<λ> ()=> γ Σ α β ƒ π ∞ ≠ ≤ ≥ ≈ Δ";
    // Placeholder URLs - replace with your actual links
    const socialLinks = {
        linkedin: "https://www.linkedin.com/in/imarunjnv/",
        instagram: "https://www.instagram.com/infamous_fluky?igsh=MWQ4MTUzbjFibTM2MA==",
        github: "https://github.com/arun2github"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "hero",
        className: "relative h-screen flex flex-col items-center justify-center overflow-hidden text-white bg-[#1A1D24]" // New dark background
        ,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$CodeRainBackground$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                textColor: "#535C91" // Updated CodeRainBackground text color
                ,
                trailColor: "rgba(26, 29, 36, 0.1)" // Trail color based on new bg, slightly more opaque for subtlety
                ,
                fontSize: 15,
                characters: devCharacters,
                animationFPS: 20
            }, void 0, false, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-20 flex flex-col items-center text-center p-4 sm:p-8 max-w-4xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 animate-fadeInUp delay-100 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold",
                        children: (()=>{
                            const nameToStyle = "Arun";
                            const nameIndex = headline.indexOf(nameToStyle);
                            if (nameIndex === -1) {
                                return headline.split("").map((char, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "inline-block char-animate",
                                        style: {
                                            animationDelay: `${index * 0.05}s`
                                        },
                                        children: char === ' ' ? '\u00A0' : char
                                    }, index, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 55,
                                        columnNumber: 17
                                    }, this));
                            }
                            const elements = [];
                            // Part before the name
                            for(let i = 0; i < nameIndex; i++){
                                elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block char-animate",
                                    style: {
                                        animationDelay: `${i * 0.05}s`
                                    },
                                    children: headline[i] === ' ' ? '\u00A0' : headline[i]
                                }, `before-${i}`, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 69,
                                    columnNumber: 17
                                }, this));
                            }
                            // Styled name part
                            elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block",
                                children: nameToStyle.split("").map((nameChar, nameCharIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "char-animate bg-clip-text text-transparent bg-gradient-to-r from-violet-200 via-fuchsia-300 to-indigo-300 drop-shadow-lg",
                                        style: {
                                            animationDelay: `${(nameIndex + nameCharIndex) * 0.05}s`
                                        },
                                        children: nameChar
                                    }, `name-${nameCharIndex}`, false, {
                                        fileName: "[project]/src/components/Hero.tsx",
                                        lineNumber: 83,
                                        columnNumber: 19
                                    }, this))
                            }, "namePart", false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 81,
                                columnNumber: 15
                            }, this));
                            // Part after the name
                            for(let i = nameIndex + nameToStyle.length; i < headline.length; i++){
                                elements.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "inline-block char-animate",
                                    style: {
                                        animationDelay: `${i * 0.05}s`
                                    },
                                    children: headline[i] === ' ' ? '\u00A0' : headline[i]
                                }, `after-${i}`, false, {
                                    fileName: "[project]/src/components/Hero.tsx",
                                    lineNumber: 97,
                                    columnNumber: 17
                                }, this));
                            }
                            return elements;
                        })()
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl sm:text-2xl md:text-3xl text-neutral-300 mb-10 animate-fadeInUp" // Brighter text for tagline
                        ,
                        style: {
                            animationDelay: `${headline.length * 0.05 + 0.4}s`
                        },
                        children: tagline
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#projects",
                        className: "group relative px-8 py-3 bg-[#535C91] text-white font-semibold rounded-lg text-lg    overflow-hidden shadow-lg transform transition-all duration-300    hover:shadow-2xl hover:scale-105    animate-fadeInUp",
                        style: {
                            animationDelay: `${headline.length * 0.05 + 0.9}s`
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "absolute inset-0 w-0 bg-[#7E8CE0] transition-all duration-[350ms] ease-out group-hover:w-full"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 123,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "relative group-hover:text-white transition-colors duration-300",
                                children: "View My Work"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Hero.tsx",
                                lineNumber: 124,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-8 right-8 z-30 flex space-x-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: socialLinks.linkedin,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-neutral-400 hover:text-white transition-colors duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"], {
                            size: 28
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 130,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: socialLinks.instagram,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-neutral-400 hover:text-white transition-colors duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                            size: 28
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 133,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: socialLinks.github,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-neutral-400 hover:text-white transition-colors duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"], {
                            size: 28
                        }, void 0, false, {
                            fileName: "[project]/src/components/Hero.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Hero.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Hero.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Hero.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
};
_c = Hero;
const __TURBOPACK__default__export__ = Hero;
var _c;
__turbopack_context__.k.register(_c, "Hero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "cn": (()=>cn)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/3d-card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CardBody": (()=>CardBody),
    "CardContainer": (()=>CardContainer),
    "CardItem": (()=>CardItem),
    "default": (()=>__TURBOPACK__default__export__),
    "useMouseEnter": (()=>useMouseEnter)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature();
"use client";
;
;
const MouseEnterContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const Card3D = ({ children, className = '', glareColor = 'rgba(255, 255, 255, 0.1)' })=>{
    _s();
    const cardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [rotateX, setRotateX] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [rotateY, setRotateY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [glarePosition, setGlarePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: -100,
        y: -100
    }); // Start glare off-screen
    const [isHovering, setIsHovering] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMouseMove = (e)=>{
        if (!cardRef.current) return;
        setIsHovering(true);
        const rect = cardRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        // Increased sensitivity for a more pronounced 3D effect
        const newRotateY = (x - centerX) / 16;
        const newRotateX = (centerY - y) / 16;
        setRotateX(newRotateX);
        setRotateY(newRotateY);
        setGlarePosition({
            x: x - rect.width / 2,
            y: y - rect.height / 2
        }); // Glare relative to card center
    };
    const handleMouseLeave = ()=>{
        setIsHovering(false);
        setRotateX(0);
        setRotateY(0);
        setGlarePosition({
            x: -200,
            y: -200
        }); // Move glare off-screen
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: cardRef,
        className: `transform-style-preserve-3d transition-transform duration-200 ease-out perspective-1200 relative overflow-hidden
                  bg-neutral-900/20 backdrop-blur-lg border border-white/10 shadow-2xl rounded-xl ${className}`,
        style: {
            transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${isHovering ? 1.015 : 1})`,
            transition: 'transform 0.2s ease-out, box-shadow 0.2s ease-out'
        },
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
        children: [
            children,
            isHovering && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-100",
                style: {
                    background: `radial-gradient(circle at calc(50% + ${glarePosition.x}px) calc(50% + ${glarePosition.y}px), ${glareColor} 0%, transparent 50%)`,
                    mixBlendMode: 'overlay'
                }
            }, void 0, false, {
                fileName: "[project]/src/components/ui/3d-card.tsx",
                lineNumber: 77,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/3d-card.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, this);
};
_s(Card3D, "AYptxKy8vpYYyMYyXks2bTxAFyo=");
_c = Card3D;
const __TURBOPACK__default__export__ = Card3D;
const CardContainer = ({ children, className, containerClassName })=>{
    _s1();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMouseEntered, setIsMouseEntered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleMouseMove = (e)=>{
        if (!containerRef.current) return;
        const { left, top, width, height } = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        containerRef.current.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };
    const handleMouseEnter = (e)=>{
        setIsMouseEntered(true);
        if (!containerRef.current) return;
    };
    const handleMouseLeave = (e)=>{
        if (!containerRef.current) return;
        setIsMouseEntered(false);
        containerRef.current.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(MouseEnterContext.Provider, {
        value: [
            isMouseEntered,
            setIsMouseEntered
        ],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("py-20 flex items-center justify-center", containerClassName),
            style: {
                perspective: "1000px"
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                onMouseEnter: handleMouseEnter,
                onMouseMove: handleMouseMove,
                onMouseLeave: handleMouseLeave,
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center justify-center relative transition-all duration-200 ease-linear", className),
                style: {
                    transformStyle: "preserve-3d"
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/ui/3d-card.tsx",
                lineNumber: 133,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/3d-card.tsx",
            lineNumber: 124,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui/3d-card.tsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
};
_s1(CardContainer, "tJah37jWw/4ti6WZSYSC6Ge0QMQ=");
_c1 = CardContainer;
const CardBody = ({ children, className })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("h-96 w-96 [transform-style:preserve-3d]  [&>*]:[transform-style:preserve-3d]", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/3d-card.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
};
_c2 = CardBody;
const CardItem = ({ as: Tag = "div", children, className, translateX = 0, translateY = 0, translateZ = 0, rotateX = 0, rotateY = 0, rotateZ = 0, ...rest })=>{
    _s2();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [isMouseEntered] = useMouseEnter();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CardItem.useEffect": ()=>{
            handleAnimations();
        }
    }["CardItem.useEffect"], [
        isMouseEntered
    ]);
    const handleAnimations = ()=>{
        if (!ref.current) return;
        if (isMouseEntered) {
            ref.current.style.transform = `translateX(${translateX}px) translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg)`;
        } else {
            ref.current.style.transform = `translateX(0px) translateY(0px) translateZ(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-fit transition duration-200 ease-linear", className),
        ...rest,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/3d-card.tsx",
        lineNumber: 212,
        columnNumber: 5
    }, this);
};
_s2(CardItem, "2Rf3PxvxkXo5GuCzd4bt6RXJ2ko=", false, function() {
    return [
        useMouseEnter
    ];
});
_c3 = CardItem;
const useMouseEnter = ()=>{
    _s3();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(MouseEnterContext);
    if (context === undefined) {
        throw new Error("useMouseEnter must be used within a MouseEnterProvider");
    }
    return context;
};
_s3(useMouseEnter, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "Card3D");
__turbopack_context__.k.register(_c1, "CardContainer");
__turbopack_context__.k.register(_c2, "CardBody");
__turbopack_context__.k.register(_c3, "CardItem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/portfolioData.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/data/portfolioData.ts
// --- INTERFACES ---
__turbopack_context__.s({
    "education": (()=>education),
    "experiences": (()=>experiences),
    "fonts": (()=>fonts),
    "profileData": (()=>profileData),
    "projects": (()=>projects),
    "services": (()=>services),
    "socialMediaLinks": (()=>socialMediaLinks),
    "technologies": (()=>technologies)
});
const profileData = {
    name: "I'm Arun Kumar,",
    helloTag: "Hi there,",
    welcomeTag: "Welcome to My Tech Haven",
    title1: "Mobile Application Developer",
    title2: "Web Developer",
    about: "I'm a passionate Flutter Developer with a background in web development and React over 3.5+ experience. I specialize in creating high-performing, cross-platform applications with a focus on clean, efficient code and seamless user experiences.",
    about2: "Active in open-source communities, I'm always learning and exploring emerging technologies. Outside of work, I enjoy music, reading, and experimenting with creative recipes.",
    profileIconUrl: "/images/profileImg.jpg",
    logoUrl: "/images/webLogo.svg",
    email: "arun.devfolio@gmail.com",
    // phone: "+123 456 7890", // Uncomment and add if you want to display phone
    // location: "City, Country", // Uncomment and add if you want to display location
    // Placeholder content for new detailed fields
    detailedIntro: "Beyond the titles and technologies, I see myself as a problem-solver at heart, driven by a curiosity to understand how things work and a desire to build solutions that make a tangible difference. My journey into tech was fueled by this very curiosity, and it continues to be the force behind my learning and growth.",
    codingJourney: "My coding adventure began with a fascination for how software could bring ideas to life. Starting with web fundamentals, I quickly found a passion for creating interactive user experiences. This led me to explore mobile development with Flutter, where I discovered the joy of building beautiful and performant cross-platform applications. Each project has been a stepping stone, teaching me not just new languages and frameworks, but also the importance of collaboration, perseverance, and user-centric design.",
    achievements: [
        "Successfully led the development and integration of 50+ micro-apps in the AU HUB mobile application.",
        "Key contributor to optimizing business workflows, resulting in measurable efficiency gains.",
        "Recognized for innovative solutions in projects like the Drishti 3D Dashboard and Sampark Lead Management.",
        "Received the 'Star Award' at AU Small Finance Bank for exceptional service and contributions to multiple key projects.",
        "Active participant and contributor to open-source projects related to Flutter and Dart."
    ],
    motivation: "My motivation stems from the challenge of solving complex problems and the satisfaction of seeing a well-crafted piece of software empower users. I'm driven by the constant evolution of technology and the endless opportunities to learn and create something new and impactful. The ability to collaborate with talented teams and contribute to meaningful projects is what keeps me energized.",
    philosophy: "I believe in writing clean, maintainable, and scalable code. For me, software development is as much an art as it is a science. A strong emphasis on user experience, coupled with robust technical architecture, is key to building successful products. Continuous learning and adapting to new paradigms are fundamental to staying relevant and effective in this dynamic field.",
    passionsOutsideCode: [
        "Exploring new genres of music and attending live concerts.",
        "Diving into captivating books, from tech biographies to fantasy novels.",
        "Experimenting with global cuisines and honing my culinary skills.",
        "Hiking and connecting with nature to recharge and find inspiration."
    ],
    openTo: [
        {
            text: "New Project Collaborations",
            icon: "Briefcase"
        },
        {
            text: "Freelance Opportunities",
            icon: "DollarSign"
        },
        {
            text: "Tech Chats & Brainstorming",
            icon: "MessageSquare"
        },
        {
            text: "Open Source Contributions",
            icon: "Github"
        }
    ],
    starAwardDetails: {
        imageUrl: "/images/starAward.jpg",
        title: "Star Award - Service Excellence",
        description: "Recognized by AU Small Finance Bank for outstanding contributions and dedication across multiple projects."
    },
    skillSet: [
        {
            name: "Flutter",
            level: 90,
            color: "bg-sky-500"
        },
        {
            name: "React",
            level: 85,
            color: "bg-cyan-500"
        },
        {
            name: "Next.js",
            level: 80,
            color: "bg-neutral-300"
        },
        {
            name: "Tailwind CSS",
            level: 95,
            color: "bg-teal-500"
        },
        {
            name: "HTML5",
            level: 98,
            color: "bg-orange-500"
        },
        {
            name: "CSS3",
            level: 95,
            color: "bg-blue-500"
        },
        {
            name: "Node.js",
            level: 70,
            color: "bg-green-500"
        },
        {
            name: "Generative AI",
            level: 65,
            color: "bg-purple-500"
        },
        {
            name: "Llama3",
            level: 60,
            color: "bg-pink-500"
        },
        {
            name: "LangGraph",
            level: 55,
            color: "bg-indigo-500"
        }
    ]
};
const services = [
    {
        title: "Web Developer",
        iconUrl: "/images/web.png"
    },
    {
        title: "Flutter Developer",
        iconUrl: "/images/mobile.png"
    },
    {
        title: "Backend Developer",
        iconUrl: "/images/backend.png"
    }
];
const technologies = [
    {
        name: "Flutter",
        iconUrl: "/images/flutter.jpg"
    },
    {
        name: "React JS",
        iconUrl: "/images/tech/react.svg"
    },
    {
        name: "TypeScript",
        iconUrl: "/images/tech/typescript.png"
    },
    {
        name: "Next",
        iconUrl: "/images/nextjs.png"
    },
    {
        name: "JavaScript",
        iconUrl: "/images/tech/js.svg"
    },
    // Uncomment if needed
    {
        name: "HTML 5",
        iconUrl: "/images/tech/html.svg"
    },
    {
        name: "CSS 3",
        iconUrl: "/images/tech/css.svg"
    },
    {
        name: "Ruby",
        iconUrl: "/images/tech/ruby.svg"
    },
    {
        name: "Ruby On Rails",
        iconUrl: "/images/tech/ror.png"
    },
    {
        name: "Redux Toolkit",
        iconUrl: "/images/tech/redux.svg"
    },
    {
        name: "Material UI",
        iconUrl: "/images/tech/MI.png"
    },
    {
        name: "Tailwind CSS",
        iconUrl: "/images/tech/tailwind.svg"
    },
    {
        name: "Node JS",
        iconUrl: "/images/tech/nodejs.svg"
    },
    {
        name: "SQL",
        iconUrl: "/images/tech/sql.png"
    },
    {
        name: "JWT",
        iconUrl: "/images/tech/jwt.png"
    },
    {
        name: "Git",
        iconUrl: "/images/tech/git.png"
    },
    {
        name: "Figma",
        iconUrl: "/images/tech/figma.png"
    },
    {
        name: "Dialog flow",
        iconUrl: "/images/tech/dialogflow.png"
    }
];
const experiences = [
    {
        title: "Flutter Developer | Front-end Developer",
        companyName: "AU Small Finance Bank",
        iconUrl: "/images/ausmall.jpg",
        iconBg: "#383E56",
        date: "Jun 2023 - Present",
        points: [
            "Developed and maintained the AU HUB mobile application using Flutter, integrating 50+ micro-apps.",
            "Optimized and automated multiple business verticals, reducing dependencies and improving workflow efficiency.",
            "Implemented GetX for state management, ensuring smooth UI interactions and improved performance.",
            "Led the development of micro-apps such as CrossSell, BC Attendance, and Branch Class Change.",
            "Designed and enhanced the Drishti 3D Dashboard for compliance monitoring, increasing data visibility for HODs & SPOCs.",
            "Developed the Sampark – Task & Lead Management web module for Relationship Managers (RMs) and Branch Officers (BOs) to track tasks and leads.",
            "Built an admin dashboard for centralized task assignments, lead management, and customer mappings.",
            "Integrated Exotel API into the Sampark app to enable direct calling, call logging, and recording for RMs, improving customer communication and audit trails.",
            "Implemented Zoom SDK integration within AU HUB for real-time video conferencing with features like call recording, playback, and Picture-in-Picture (PiP) floating window support on both Android and iOS.",
            "Deployed Sampark on internal MDM hosting for secure access and optimized UI/UX for improved user engagement.",
            "Awarded 'Star Award' for dedicated service and contributions across multiple impactful projects within the bank."
        ]
    },
    {
        title: "Freelance Web Developer",
        companyName: "Meghalaya Government | Tura Municipal Board",
        iconUrl: "/images/fincare.png",
        iconBg: "#E6DEDD",
        date: "Dec 2023 - Present",
        points: [
            "Developed the official website for the Tura Municipal Board using Flutter for a dynamic and scalable experience.",
            "Designed and implemented a structured approval workflow requiring two levels of verification for submitted forms.",
            "Integrated the SBI ePay payment gateway, enabling secure online transactions before final form submission.",
            "Optimized the web interface for seamless user experience and regulatory compliance."
        ]
    },
    {
        title: "React.js Developer",
        companyName: "Schrocken Inc.",
        iconUrl: "/images/company/schrocken.png",
        iconBg: "#383E56",
        date: "May 2022 - April 2023",
        points: [
            "Developed and maintained web applications using React.js and Material UI, enhancing user engagement.",
            "Implemented Redux for state management, improving application efficiency and scalability.",
            "Collaborated with backend and UX teams for seamless API integration and user experience design.",
            "Optimized web performance and responsiveness for cross-device compatibility."
        ]
    },
    {
        title: "Associate NodeJS Developer",
        companyName: "Celebal Technology",
        iconUrl: "/images/company/ct.jpg",
        iconBg: "#E6DEDD",
        date: "Sep 2021 - May 2022",
        points: [
            "Developed and maintained AI-powered chatbots using Node.js and Google Dialogflow.",
            "Integrated third-party APIs for enhanced chatbot functionalities and real-time data processing.",
            "Designed conversational flows for improved user interactions and engagement."
        ]
    }
];
const education = [
    {
        title: "B.Tech",
        collegeName: "Greater Noida Institute Of Technology",
        iconUrl: "/images/education/gniot.jpg",
        iconBg: "#383E56",
        date: "May 2015 - May 2019",
        branch: 'Computer Science Engineering',
        percentage: '69.2%'
    },
    {
        title: "Intermediate",
        collegeName: "Jawahar Navodaya Vidyalaya RangaReddy Hyderabad",
        iconUrl: "/images/education/JNV_Logo.jpg",
        iconBg: "#383E56",
        date: "May 2012 - May 2015",
        branch: 'Mathematics',
        percentage: '82.2%'
    },
    {
        title: "Matriculation",
        collegeName: "Jawahar Navodaya Vidyalaya Supaul Bihar",
        iconUrl: "/images/education/JNV_Logo.jpg",
        iconBg: "#383E56",
        date: "May 2010 - May 2012",
        branch: 'Mathematics',
        percentage: '84.6%'
    }
];
const projects = [
    {
        id: 'au-niyantaran',
        title: "Niyantaran",
        category: "Web",
        description: "Revamped Niyantran's front-end UI with complete redesign based on Figma prototypes. Built dynamic forms for role-based workflows, integrated draft management, and implemented responsive, user-friendly interfaces supporting complex rule configurations. Ensured seamless interaction with backend APIs for rule-driven request processing, role assignments, and real-time audit tracking.",
        shortDescription: "Redesigned Niyantran UI with rule-based dynamic workflows, role-driven forms, draft management, and responsive design.",
        introduction: "Modernized Niyantran's front-end to support flexible, rule-driven workflows while enhancing usability, responsiveness, and real-time process tracking.",
        problemStatement: "Existing static front-end lacked flexibility for dynamic roles, workflows, and draft management, creating rigid user experience and operational delays.",
        strugglesAndSolutions: "Implemented dynamic forms driven by backend rule configurations, built flexible UI components for sequential/parallel approvals, role-based filters, draft saving, and history visualization while ensuring full responsiveness and cross-browser compatibility.",
        designThinking: "Focused on clean, intuitive interfaces with Figma-based design implementation, quick access dashboards, modular request pages, and simplified user journeys to minimize errors.",
        approach: "Utilized modern front-end frameworks, component-based architecture, reusable UI modules, and API integrations to handle dynamic data, validations, role-based visibility, and real-time history logs.",
        developmentJourney: "Started with UI redesign and layout structuring, progressively built request creation forms, recommender/approver workflows, draft-save capabilities, and integrated complex backend APIs for rule-based validations.",
        conclusion: "Delivered a highly flexible, user-friendly, rule-driven front-end that supports business scalability while improving user productivity and minimizing process errors.",
        impact: "Enabled Commercial Banking teams to create, track, and process requests more efficiently with configurable workflows, transparent audit trails, and improved end-user satisfaction.",
        tags: [
            {
                name: "React",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "HTML",
                color: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)"
            },
            {
                name: "Tailwind CSS",
                color: "linear-gradient(90deg, #06beb6 0%, #48b1f3 100%)"
            },
            {
                name: "JavaScript",
                color: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)"
            }
        ],
        imageUrl: "/images/niyan_dashboard.PNG",
        galleryImages: [
            {
                url: "/images/niyan_forInfo.PNG",
                alt: "AU Hub Zoom Login"
            },
            {
                url: "/images/niyan_login.PNG",
                alt: "AU Hub Zoom Feature 1"
            },
            {
                url: "/images/niyan_myRequest.PNG",
                alt: "AU Hub Zoom Feature 2"
            },
            {
                url: "/images/niyan_newRequest.PNG",
                alt: "AU Hub Zoom Feature 3"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'au-hub-zoom',
        title: "AU HUB | Zoom Call Feature and Recording",
        category: "mobile",
        description: "Developed a Zoom Call feature module within the AU HUB application, enabling Business Correspondents (BCs) and employees to initiate, record, and playback Zoom video calls. The solution involved writing platform-specific code for Android and iOS using Zoom SDK integration. Key features include call recording, playback functionality, and Picture-in-Picture (PiP) mode for floating window support. Leveraging Flutter with GetX for state management, the module ensures seamless cross-platform experience. Utilized native integration for Zoom SDK, and packages like `flutter_zoom_sdk`, `flutter_pip`, and `video_player` for enhanced functionality.",
        shortDescription: "Integrated Zoom SDK into AU HUB for video calls with recording, playback, and PiP mode on iOS & Android.",
        introduction: "This project aimed to seamlessly integrate video conferencing capabilities into the existing AU HUB application, enhancing communication for BCs and employees.",
        problemStatement: "The primary challenge was to enable reliable video call functionality, including recording and easy playback, directly within the AU HUB ecosystem, which is used across diverse network conditions and devices. Ensuring a consistent user experience on both Android and iOS while managing SDK complexities was crucial.",
        strugglesAndSolutions: "Integrating the Zoom SDK required careful handling of native modules for both Android (Java/Kotlin) and iOS (Swift/Objective-C). Managing permissions, call states, and background processes for PiP mode presented significant hurdles. These were overcome by creating specific Flutter platform channels and robust error handling.",
        designThinking: "The design focused on intuitive user flows for initiating, joining, and managing calls. The PiP feature was designed to be non-intrusive, allowing users to multitask. Playback controls were kept simple and familiar.",
        approach: "A modular approach was taken, encapsulating Zoom functionalities within a dedicated Flutter service. GetX was used for reactive state management of call statuses and UI updates. Extensive testing was conducted on various devices and network scenarios.",
        developmentJourney: "The development started with a proof-of-concept for basic SDK integration. Iteratively, features like recording, PiP, and platform-specific optimizations were added. Regular feedback from a pilot user group helped refine the user experience.",
        conclusion: "The Zoom integration successfully provided a robust and user-friendly video communication tool within AU HUB, meeting the project's core objectives.",
        impact: "This feature significantly improved remote collaboration and support capabilities, reducing the need for external conferencing tools and streamlining communication workflows for thousands of users.",
        tags: [
            {
                name: "Flutter",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "GetX",
                color: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)"
            },
            {
                name: "Zoom SDK",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "PiP Mode",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/sam_assignTask.png",
        galleryImages: [
            {
                url: "/images/au_hub_login.jpg",
                alt: "AU Hub Zoom Login"
            },
            {
                url: "/images/au_hub_p1.jpg",
                alt: "AU Hub Zoom Feature 1"
            },
            {
                url: "/images/au_hub_p2.jpg",
                alt: "AU Hub Zoom Feature 2"
            },
            {
                url: "/images/au_hub_p3.jpg",
                alt: "AU Hub Zoom Feature 3"
            },
            {
                url: "/images/au_hub_vedio.jpg",
                alt: "AU Hub Zoom Video Playback"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'sampark-rm-app',
        title: "Relationship Manager App (Sampark)",
        category: "Mobile",
        description: "Sampark is a mobile application designed for Relationship Managers (RMs) and Branch Officers (BOs) to efficiently track and manage leads, customer interactions, and task assignments. Built using Flutter and GetX, the app enables seamless task updates, real-time customer engagement, and streamlined lead management. A key feature of the app is Exotel integration, allowing RMs to initiate calls directly from the app, with automatic call logging and recording for compliance and review purposes. The app operates securely within an internal MDM-hosted environment, ensuring restricted access and data privacy. Its intuitive UI and offline functionality significantly boost on-field productivity, making it a crucial tool for managing day-to-day operations.",
        shortDescription: "Flutter & GetX mobile app for RMs to manage leads & tasks, with Exotel call integration and recording.",
        introduction: "Briefly introduce the Sampark RM App project here.",
        problemStatement: "Describe the core problem Sampark RM App aimed to solve.",
        developmentJourney: "Share insights into the development process of Sampark RM App.",
        strugglesAndSolutions: "Detail any challenges faced and how they were overcome during Sampark RM App development.",
        designThinking: "Explain the design philosophy and process behind Sampark RM App.",
        approach: "Describe the technical approach and architecture for Sampark RM App.",
        conclusion: "Summarize the outcomes and learnings from the Sampark RM App project.",
        impact: "Explain the impact Sampark RM App had or is expected to have.",
        tags: [
            {
                name: "Flutter",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "GetX",
                color: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)"
            },
            {
                name: "Exotel",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Call Recording",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/samm_dashboard.jpg",
        galleryImages: [
            {
                url: "/images/samm_login.jpg",
                alt: "Sampark RM App Login"
            },
            {
                url: "/images/samm_dashboard.jpg",
                alt: "Sampark RM App Dashboard"
            },
            {
                url: "/images/sam_dashboard_drawer.jpg",
                alt: "Sampark RM App Dashboard"
            },
            {
                url: "/images/sam_pef.png",
                alt: "Sampark RM App Table View"
            },
            {
                url: "/images/sam_captureLead.jpg",
                alt: "Sampark RM App Table View"
            },
            {
                url: "/images/sam_assignTask.png",
                alt: "Sampark RM App Assign Task"
            },
            {
                url: "/images/sam_assignTask2.jpg",
                alt: "Sampark RM App Assign Task"
            },
            {
                url: "/images/sam_assignTask2.jpg",
                alt: "Sampark RM App Assign Task"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'tura-municipal-board-website',
        title: "Tura Municipal Board Website",
        category: "web",
        description: "The Tura Municipal Board website is a government portal developed using Flutter, designed to streamline form submissions and approvals. The platform features a multi-step approval system where user-submitted forms undergo two rounds of validation before final approval. If a payment is required, users can securely complete transactions via the integrated SBI ePay gateway before printing the approved form. The website enhances administrative efficiency by automating workflows and providing a user-friendly interface for citizens and government officials.",
        shortDescription: "Flutter-based government portal for Tura Municipal Board with form submission, multi-level approval, and SBI ePay integration.",
        introduction: "Briefly introduce the Tura Municipal Board Website project here.",
        problemStatement: "Describe the core problem Tura Municipal Board Website aimed to solve.",
        developmentJourney: "Share insights into the development process of Tura Municipal Board Website.",
        strugglesAndSolutions: "Detail any challenges faced and how they were overcome during Tura Municipal Board Website development.",
        designThinking: "Explain the design philosophy and process behind Tura Municipal Board Website.",
        approach: "Describe the technical approach and architecture for Tura Municipal Board Website.",
        conclusion: "Summarize the outcomes and learnings from the Tura Municipal Board Website project.",
        impact: "Explain the impact Tura Municipal Board Website had or is expected to have.",
        tags: [
            {
                name: "Flutter",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "SBI ePay",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Approval Workflow",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/tura_login.PNG",
        galleryImages: [
            {
                url: "/images/tura_login.PNG",
                alt: "Tura Website Login"
            },
            {
                url: "/images/tura_reg.PNG",
                alt: "Tura Website Registration"
            },
            {
                url: "/images/tura_home.PNG",
                alt: "Tura Website Home"
            },
            {
                url: "/images/tura_tura_about.PNG",
                alt: "Tura Website About"
            },
            {
                url: "/images/tura_tura_scheme.PNG",
                alt: "Tura Website Scheme"
            }
        ],
        sourceCodeLink: "https://turamunicipalboard.com/home",
        liveLink: "https://turamunicipalboard.com/home"
    },
    {
        id: 'sampark-rm-website',
        title: "Relationship Manager Website (Sampark)",
        category: "Web",
        description: "Sampark is a web module designed for Relationship Managers (RMs) and Branch Officers (BOs) to efficiently manage tasks, leads, and customer interactions. The platform allows the Central Team (Admins) to assign tasks, oversee lead management, and streamline customer mapping. Built using Flutter, the website provides an intuitive interface for RMs to track and engage with leads, enhancing operational efficiency. The system ensures seamless communication and data synchronization while offering a private and secure deployment on internal MDM hosting.",
        shortDescription: "Flutter web module for RMs/BOs to manage tasks & leads, with admin oversight for assignments.",
        introduction: "Briefly introduce the Sampark RM Website project here.",
        problemStatement: "Describe the core problem Sampark RM Website aimed to solve.",
        developmentJourney: "Share insights into the development process of Sampark RM Website.",
        strugglesAndSolutions: "Detail any challenges faced and how they were overcome during Sampark RM Website development.",
        designThinking: "Explain the design philosophy and process behind Sampark RM Website.",
        approach: "Describe the technical approach and architecture for Sampark RM Website.",
        conclusion: "Summarize the outcomes and learnings from the Sampark RM Website project.",
        impact: "Explain the impact Sampark RM Website had or is expected to have.",
        tags: [
            {
                name: "Flutter",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Task Management",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Lead Management",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/dashboard.PNG",
        galleryImages: [
            {
                url: "/images/loginImg.PNG",
                alt: "Sampark Web Login"
            },
            {
                url: "/images/dashboard.PNG",
                alt: "Sampark Web Dashboard"
            },
            {
                url: "/images/table.PNG",
                alt: "Sampark Web Table View"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'dhirst-website',
        title: "Dhirst Website",
        category: "web",
        description: "Developed the front-end for AU Compliance Actionable Tracker as per RBI regulatory guidelines, implementing dynamic workflows, multi-role management, real-time compliance tracking, and confidential instruction processing. Built complex UI components for Makers, HODs, SPOCs, FPRs, Checkers, and Observers with role-based access and dynamic Excel-based actionable uploads. Ensured audit trails, notifications, and escalations are fully integrated into the responsive design.",
        shortDescription: "Built dynamic UI for AU Compliance Tracker with role-based workflows, Excel uploads, audit trails, and notification system.",
        introduction: "The project aimed to build a centralized digital compliance tracking system for AU Small Finance Bank in alignment with RBI/2023-24/117 circular, eliminating manual Excel-based compliance tracking and improving transparency, auditability, and governance.",
        problemStatement: "The compliance team manually tracked regulatory obligations, leading to risks of data manipulation, regulatory penalties, and inefficient management across departments and regulators.",
        strugglesAndSolutions: "Built highly dynamic forms handling multiple user roles, confidential instruction flows, Excel file parsing for bulk actionables, and real-time notifications for each role. Complex workflows for deviations, approvals, and clarifications were mapped into front-end logic integrated with backend API flows.",
        designThinking: "Designed intuitive role-specific dashboards, responsive layouts for real-time actionable status, Excel-based bulk upload flows, and dynamic search/filtering mechanisms. Ensured compliance with AU's Figma design system while making the UI highly modular and scalable.",
        approach: "Developed reusable UI modules for each role type (Maker, Checker, HOD, SPOC, FPR, Observer). Integrated dynamic forms with backend APIs for uploading instructions, assigning roles, processing deviations, tracking closures, and full audit history visualizations. Implemented real-time bell notifications and scheduled email summaries.",
        developmentJourney: "Started with login, user management, role assignment screens, followed by confidential instruction creation, Excel import flows, role-wise dashboards, actionable processing screens, deviation workflows, and integrated notification modules.",
        conclusion: "Delivered a centralized, fully digital compliance management system enabling real-time tracking, reducing compliance gaps, and ensuring regulatory adherence with audit trails.",
        impact: "Enabled AU Small Finance Bank to meet RBI compliance mandates, reduced regulatory risks, improved transparency across departments, and provided centralized compliance visibility to senior management.",
        tags: [
            {
                name: "React",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Tailwind CSS",
                color: "linear-gradient(90deg, #06beb6 0%, #48b1f3 100%)"
            },
            {
                name: "JavaScript",
                color: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)"
            },
            {
                name: "HTML",
                color: "linear-gradient(90deg, #ff512f 0%, #dd2476 100%)"
            }
        ],
        imageUrl: "/images/dhristi_dashboard.PNG",
        galleryImages: [
            {
                url: "/images/dhiristi_edit.PNG",
                alt: "Sampark Web Login"
            },
            {
                url: "/images/dhiristi_editHistory.PNG",
                alt: "Sampark Web Dashboard"
            },
            {
                url: "/images/dhiristi_return.PNG",
                alt: "Sampark Web Table View"
            },
            {
                url: "/images/dhristi_createnew.PNG",
                alt: "Sampark Web Table View"
            },
            {
                url: "/images/dhristi_login.PNG",
                alt: "Sampark Web Table View"
            },
            {
                url: "/images/dhristi_return_id.PNG",
                alt: "Sampark Web Table View"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'fincareone-branch-change',
        title: "FincareOne | Branch Class Change",
        category: "mobile",
        description: "A comprehensive module within the FincareOne application that digitizes the process of requesting and approving branch and user class changes for employees. It provides a user-friendly interface for employees to submit requests with details like deputation branch and duration. Requests are routed through a two-level approval hierarchy pulled from HRMS. Reporting managers can review, approve, or reject requests through an intuitive interface with swipe gestures. Approved changes are automatically executed by a daily cron job, significantly reducing manual intervention from the IT team.",
        shortDescription: "Flutter module in FincareOne to automate Branch & User Class change requests with a two-level approval workflow based on HRMS hierarchy.",
        introduction: "This project was conceptualized to address the high volume of manual service tickets for branch and user class modifications. The objective was to build a self-service module within the FincareOne super-app, empowering employees to manage their own operational changes while providing a structured and secure approval framework for management.",
        problemStatement: "The IT Business-as-usual (BAU) team was inundated with service requests for branch and user class changes, accounting for 30-40% of their ticket volume. This manual process, which relied on approvals via email or other channels, was inefficient, prone to delays, and lacked a centralized audit trail. The bank needed an automated solution to offload this work from the IT team and place the approval authority directly with the relevant business managers.",
        developmentJourney: "The development process began by mapping out the two-level approval flow based on the HRMS structure. Following the Figma designs, we built distinct UIs for employees and managers using Flutter and GetX. Key features implemented include the request submission form with calendar controls for duration, the manager's approval dashboard with swipeable cards, and API integrations to fetch HRMS data. A significant part of the journey was setting up the daily cron job for executing approved requests and the logic for auto-reverting temporary branch changes.",
        strugglesAndSolutions: "A key challenge was integrating with the HRMS system to dynamically fetch the correct two-level reporting hierarchy for every employee. This was solved by creating a robust backend service that securely communicates with the HRMS database. Implementing the swipe-to-approve/reject functionality with confirmation dialogs required careful state management to ensure a smooth and intuitive user experience. Another challenge was ensuring the cron job was reliable and correctly handled various scenarios, like permanent vs. temporary changes, which was addressed through rigorous testing and scheduling logic.",
        designThinking: "The design, guided by the provided Figma link, focused on creating a clear and efficient user experience. For employees, the process of raising a request was simplified into a single form. For managers, the design prioritized quick decision-making through an 'at-a-glance' card view with employee details and swipe gestures for actions. The inclusion of a confirmation pop-up for rejections was a key design choice to prevent accidental decisions and capture necessary feedback, enhancing the overall usability and reliability of the workflow.",
        approach: "The solution was architected as a module within the Flutter-based FincareOne application. We implemented a role-based access system to differentiate between an employee's view and a manager's view. The business logic for the approval workflow and HRMS integration was handled by backend services. A daily cron job was scheduled on the server-side to process all approved requests in a batch, ensuring system changes are made in a controlled manner during off-peak hours. All data related to requests and approvals was stored in a dedicated database schema to maintain a clear audit trail.",
        conclusion: "The Branch and User Class Change module successfully automated a critical but repetitive administrative task. It provides a secure, auditable, and user-friendly platform that empowers employees and managers, while significantly reducing the burden on the IT team. The project demonstrated how thoughtful application design can streamline internal business processes and improve operational efficiency.",
        impact: "The module is projected to reduce IT service tickets related to branch and user class changes by 30-40%, freeing up the IT team to focus on more critical tasks. It enhances operational agility by speeding up the approval process for employee transfers and role changes. The system provides a transparent and accountable workflow, improving the experience for both employees and their managers.",
        tags: [
            {
                name: "Flutter",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "GetX",
                color: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)"
            },
            {
                name: "Workflow Automation",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "HRMS Integration",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/CrossSell.jpg",
        galleryImages: [
            {
                url: "/images/CrossSell.jpg",
                alt: "Branch Class Change Module"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'fincareone-crosssell',
        title: "FincareOne | CrossSell",
        category: "mobile",
        description: "The Cross-Sell v3.0 module is an advanced lead management system integrated within the Fincare One application. It empowers branch employees, including Branch Managers (BMs), Branch Operations Managers (BOMs), and Relationship Managers (RMs), to seamlessly manage the entire lead lifecycle. The module features role-based user flows for lead submission, assignment, and actioning. BMs/BOMs can assign leads from a central queue, while RMs can act on their assigned leads by calling customers and updating statuses. All employees can submit new leads through a dedicated form with product selection. The system is designed to enhance sales productivity, streamline lead tracking, and improve customer conversion rates through an intuitive, role-specific UI.",
        shortDescription: "A Flutter & GetX lead management module for bank employees to submit, assign, and act on sales leads, with role-based workflows for managers and executives.",
        introduction: "The FincareOne Cross-Sell project was initiated to overhaul the existing lead management process within the Fincare One super-app. The goal was to create a centralized, efficient, and user-friendly module that caters to the specific needs of different employee roles, from lead creation to conversion, ultimately boosting the bank's cross-selling capabilities.",
        problemStatement: "The previous lead management system was fragmented and lacked clear, role-based workflows. Branch Managers struggled with efficiently distributing leads to their teams, and Relationship Managers lacked a streamlined interface to act upon and track their assigned leads. There was no unified process for all employees to submit potential leads, leading to missed opportunities and inefficient tracking. The lack of a centralized system made it difficult to monitor lead status and measure conversion effectiveness across the branch network.",
        developmentJourney: "The development of Cross-Sell v3.0 was guided by detailed user stories and Figma designs. The process began with building the core UI components in Flutter, such as the dynamic lead card widgets and the new landing page. We implemented distinct user flows for BMs/BOMs and RMs, focusing on state management with GetX to handle queues like 'Yet to assign' and 'In Progress'. A key part of the journey was creating the lead submission form with client-side validation and integrating it with the existing 'Create Lead' backend API. The final phase involved linking all screens and ensuring smooth navigation as per the new design.",
        strugglesAndSolutions: "A primary challenge was implementing the role-based access control to display different UIs and functionalities for BMs, RMs, and other employees. This was solved by fetching the user's role upon login and using conditional rendering within the Flutter widgets. Another challenge was managing the state of leads across different queues ('Yet to assign', 'In Progress', 'Closed') efficiently. We leveraged GetX state management to create reactive data stores that updated the UI in real-time as leads were assigned, actioned, or created. Ensuring the form validations for lead submission were robust and user-friendly also required careful implementation of Flutter's form handling capabilities.",
        designThinking: "The design process was user-centric, driven by the detailed Figma mockups provided. The core philosophy was to simplify complex workflows into intuitive, role-specific interfaces. For Branch Managers, the design focused on providing a clear overview and quick assignment capabilities. For Relationship Managers, the focus was on enabling swift action on leads. The UI for lead submission was designed to be clean and straightforward, minimizing friction for all employees. The use of distinct tabs, clear call-to-action buttons, and structured lead cards was a direct result of design thinking aimed at improving user efficiency and satisfaction.",
        approach: "The module was developed using Flutter with GetX for state management, following a modular architecture within the main Fincare One application. We created reusable widgets for lead cards, which could be configured based on the user's role and the lead's status. The front-end logic was separated from the UI, with services dedicated to API interactions, such as creating new leads and updating their status. We adhered strictly to the provided Figma designs for UI implementation and ensured all new components were responsive and performed well on various devices.",
        conclusion: "The Cross-Sell v3.0 module successfully delivered a comprehensive lead management solution that streamlined operations for all branch employees. The project reinforced the importance of clear specifications and user-centric design in developing effective enterprise tools. Key takeaways include the power of role-based UI customization for improving user adoption and the efficiency of using a robust state management solution like GetX for handling complex, dynamic data flows in a mobile application.",
        impact: "The new module is expected to significantly improve the lead conversion rate by ensuring timely assignment and action on leads. It enhances accountability by providing clear visibility into lead statuses for all stakeholders. By empowering every employee to contribute to lead generation, the application widens the sales funnel. The streamlined workflows reduce administrative overhead for Branch Managers and allow Relationship Managers to focus more on customer interaction, ultimately driving business growth and improving overall sales performance.",
        tags: [
            {
                name: "Flutter",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "GetX",
                color: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)"
            },
            {
                name: "Lead Management",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "REST API",
                color: "linear-gradient(90deg, #f953c6 0%, #b91d73 100%)"
            }
        ],
        imageUrl: "/images/CrossSell.jpg",
        galleryImages: [
            {
                url: "/images/CrossSell.jpg",
                alt: "CrossSell Module"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: "mosymphony-cgt",
        title: "Mosymphony-CGT",
        category: "Web Application",
        shortDescription: "A comprehensive platform for managing Cell-Gene Therapy ecosystems, enabling secure collaboration between organizations, researchers, and healthcare providers.",
        description: "Mosymphony-CGT is an advanced web platform designed to facilitate and streamline Cell-Gene Therapy research and collaboration. The system implements a robust user management system with role-based access control, secure authentication, and comprehensive organization management capabilities.",
        imageUrl: "/images/cgt.png",
        galleryImages: [
            {
                url: "/images/cgt.png",
                alt: "Cell and Gene Therapy Project"
            },
            {
                url: "/images/cgt.png",
                alt: "User Management Interface"
            },
            {
                url: "/images/cgt.png",
                alt: "Organization Management View"
            }
        ],
        tags: [
            {
                name: "React",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Node.js",
                color: "linear-gradient(90deg, #43cea2 0%, #185a9d 100%)"
            },
            {
                name: "PostgreSQL",
                color: "linear-gradient(90deg, #1e3c72 0%, #2a5298 100%)"
            },
            {
                name: "JWT",
                color: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)"
            },
            {
                name: "REST API",
                color: "linear-gradient(90deg, #f953c6 0%, #b91d73 100%)"
            },
            {
                name: "Two-Factor Authentication",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Role-Based Access Control",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Organization Management",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        technologiesUsed: [
            "React.js",
            "Node.js",
            "PostgreSQL",
            "JWT Authentication",
            "RESTful APIs",
            "Two-Factor Authentication",
            "Role-Based Access Control",
            "Organization Management"
        ],
        liveLink: "#",
        sourceCodeLink: "#",
        introduction: "Mosymphony-CGT is a specialized platform designed to address the unique needs of Cell-Gene Therapy research and collaboration. The system provides a secure and efficient way for organizations, researchers, and healthcare providers to collaborate while maintaining strict data security and compliance requirements.",
        problemStatement: "The Cell-Gene Therapy field faces several challenges:\n\n1. Complex collaboration requirements between multiple organizations\n2. Need for secure data sharing and access control\n3. Difficulty in managing user roles and permissions across different organizations\n4. Lack of standardized processes for ecosystem management\n5. Security concerns in handling sensitive research data",
        developmentJourney: "The development journey involved several key phases:\n\n1. Initial Planning and Architecture Design\n   - Defined system requirements and architecture\n   - Designed database schema for user and organization management\n   - Planned API structure and authentication flow\n\n2. Core Development\n   - Implemented user registration and authentication system\n   - Developed organization management features\n   - Created role-based access control system\n   - Built two-factor authentication mechanism\n\n3. Security Implementation\n   - Implemented JWT-based authentication\n   - Added two-step verification process\n   - Developed secure password management\n   - Created secure API endpoints\n\n4. Testing and Optimization\n   - Conducted security testing\n   - Performed load testing\n   - Optimized database queries\n   - Enhanced user experience",
        strugglesAndSolutions: "Key challenges and their solutions:\n\n1. Complex User Management\n   - Implemented a flexible role-based system\n   - Created separate flows for different user types\n   - Developed comprehensive permission management\n\n2. Security Concerns\n   - Implemented two-factor authentication\n   - Added OTP verification system\n   - Created secure token management\n\n3. Organization Management\n   - Developed hierarchical organization structure\n   - Created flexible collaboration models\n   - Implemented organization-specific settings\n\n4. Data Security\n   - Implemented end-to-end encryption\n   - Created secure data sharing mechanisms\n   - Developed audit logging system",
        designThinking: "The design process focused on:\n\n1. User Experience\n   - Intuitive interface for complex operations\n   - Clear navigation structure\n   - Responsive design for all devices\n\n2. Security First\n   - Multiple authentication layers\n   - Secure data transmission\n   - Role-based access control\n\n3. Scalability\n   - Modular architecture\n   - Flexible organization structure\n   - Extensible API design",
        approach: "The development approach included:\n\n1. Agile Methodology\n   - Iterative development cycles\n   - Regular stakeholder feedback\n   - Continuous improvement\n\n2. Security-First Development\n   - Regular security audits\n   - Penetration testing\n   - Compliance verification\n\n3. User-Centered Design\n   - User research and feedback\n   - Usability testing\n   - Performance optimization",
        conclusion: "Mosymphony-CGT successfully addresses the complex needs of Cell-Gene Therapy research collaboration. The platform provides a secure, scalable, and user-friendly solution for managing research ecosystems, enabling effective collaboration while maintaining strict security standards.",
        impact: "The platform has made significant impact in the Cell-Gene Therapy field:\n\n1. Improved Collaboration\n   - Streamlined communication between organizations\n   - Enhanced data sharing capabilities\n   - Reduced administrative overhead\n\n2. Enhanced Security\n   - Reduced security incidents\n   - Improved compliance with regulations\n   - Better data protection\n\n3. Increased Efficiency\n   - Faster onboarding process\n   - Reduced manual work\n   - Better resource utilization"
    },
    {
        id: 'mosymphony-qem',
        title: "Mosymphony | Quality Event Module",
        category: "Web",
        description: "Mosymphony is a cutting-edge application designed to streamline contract manufacturing processes for enterprises in the pharmaceutical industry. The platform fosters transparency and communication between Pharma sponsors and CMOs, while the quality event module tracks and records every event and quality control to ensure accountability. By providing secure communication channels, reliable data sharing, and real-time updates, Mosymphony builds trust and guarantees smooth manufacturing and distribution processes.",
        shortDescription: "Application for pharma contract manufacturing, with a module for quality event tracking and sponsor-CMO communication.",
        introduction: "Briefly introduce the Mosymphony QEM project here.",
        problemStatement: "Describe the core problem Mosymphony QEM aimed to solve.",
        developmentJourney: "Share insights into the development process of Mosymphony QEM.",
        strugglesAndSolutions: "Detail any challenges faced and how they were overcome during Mosymphony QEM development.",
        designThinking: "Explain the design philosophy and process behind Mosymphony QEM.",
        approach: "Describe the technical approach and architecture for Mosymphony QEM.",
        conclusion: "Summarize the outcomes and learnings from the Mosymphony QEM project.",
        impact: "Explain the impact Mosymphony QEM had or is expected to have.",
        tags: [
            {
                name: "JavaScript",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "React",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Redux",
                color: "linear-gradient(90deg, #a770ef 0%, #f6d365 100%)"
            },
            {
                name: "Material UI",
                color: "linear-gradient(90deg, #2193b0 0%, #6dd5ed 100%)"
            },
            {
                name: "CSS",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/qem.png",
        galleryImages: [
            {
                url: "/images/qem.png",
                alt: "Mosymphony QEM"
            }
        ],
        sourceCodeLink: "#",
        liveLink: "#"
    },
    {
        id: 'netflix-clone',
        title: "Netflix Clone",
        category: "Web",
        description: "The Netflix Clone project is aimed at creating a replica of the popular streaming platform, Netflix, using React and GraphQL. The project will allow users to browse and watch movies and TV shows, just like on the original platform.",
        shortDescription: "A Netflix replica built with React and GraphQL for browsing and watching movies/TV shows.",
        introduction: "Briefly introduce the Netflix Clone project here.",
        problemStatement: "Describe the core problem Netflix Clone aimed to solve.",
        developmentJourney: "Share insights into the development process of Netflix Clone.",
        strugglesAndSolutions: "Detail any challenges faced and how they were overcome during Netflix Clone development.",
        designThinking: "Explain the design philosophy and process behind Netflix Clone.",
        approach: "Describe the technical approach and architecture for Netflix Clone.",
        conclusion: "Summarize the outcomes and learnings from the Netflix Clone project.",
        impact: "Explain the impact Netflix Clone had or is expected to have.",
        tags: [
            {
                name: "ReactJS",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "GraphQL API",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "DataStax AstraDB",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "Netlify",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/net.jpg",
        galleryImages: [
            {
                url: "/images/net.jpg",
                alt: "Netflix Clone"
            }
        ],
        sourceCodeLink: "https://github.com/arun2github/workshop-graphql-netflix",
        liveLink: "#"
    },
    {
        id: 'node-mailer-app',
        title: "Node Mailer Application",
        category: "web",
        description: "The project is aimed at building an application that enables users to send a large number of emails using Node.js and the nodemailer library. The application will allow users to compose and send personalized emails to a large number of recipients with ease.",
        shortDescription: "Application for sending bulk personalized emails using Node.js and Nodemailer.",
        introduction: "Briefly introduce the Node Mailer Application project here.",
        problemStatement: "Describe the core problem Node Mailer Application aimed to solve.",
        developmentJourney: "Share insights into the development process of Node Mailer Application.",
        strugglesAndSolutions: "Detail any challenges faced and how they were overcome during Node Mailer Application development.",
        designThinking: "Explain the design philosophy and process behind Node Mailer Application.",
        approach: "Describe the technical approach and architecture for Node Mailer Application.",
        conclusion: "Summarize the outcomes and learnings from the Node Mailer Application project.",
        impact: "Explain the impact Node Mailer Application had or is expected to have.",
        tags: [
            {
                name: "NodeJS",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "JavaScript",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            },
            {
                name: "SQL",
                color: "linear-gradient(90deg, #00c6ff 0%, #0072ff 100%)"
            }
        ],
        imageUrl: "/images/nodeM.png",
        galleryImages: [
            {
                url: "/images/nodeM.png",
                alt: "Node Mailer App"
            }
        ],
        sourceCodeLink: "https://github.com/arun2github/Nodemailer/tree/master",
        liveLink: "#"
    }
];
const socialMediaLinks = [
    {
        name: 'linkedin',
        iconUrl: "/images/ln.png",
        url: "https://www.linkedin.com/in/imarunjnv/"
    },
    {
        name: 'instagram',
        iconUrl: "/images/instagram.png",
        url: 'https://www.instagram.com/infamous_fluky/'
    },
    {
        name: 'facebook',
        iconUrl: "/images/facebook.png",
        url: 'https://www.facebook.com/arun.disambiguation?mibextid=ZbWKwL'
    },
    {
        name: 'github',
        iconUrl: "/images/github.png",
        url: 'https://github.com/arun2github'
    }
];
const fonts = {
    FONT_MONTSERRAT: "Montserrat",
    FONT_POPPINS: "Poppins"
}; // --- RAW ASSET PATHS (Informational, actual paths are now in the data objects above) ---
 // You will need to move these images into your /public folder
 // and update the paths in the data objects above if they differ.
 /*
Example:
CommonStyle.PROFILE_ICON = 'assets/images/profile.jpg'; becomes profileIconUrl: "/images/profile.jpg",
CommonStyle.css = 'assets/images/tech/css.svg'; becomes iconUrl: "/images/tech/css.svg",
*/ 
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/About.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$react$2d$scroll$2d$parallax$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/react-scroll-parallax/dist/react-scroll-parallax.esm.js [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$react$2d$scroll$2d$parallax$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/react-scroll-parallax/dist/react-scroll-parallax.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$3d$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/3d-card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolioData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/palette.js [app-client] (ecmascript) <export default as Palette>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/server.js [app-client] (ecmascript) <export default as Server>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
// Define a type for skill icons for better mapping
const skillIconMap = {
    flutter: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
        size: 18,
        className: "text-sky-400"
    }, void 0, false, {
        fileName: "[project]/src/components/About.tsx",
        lineNumber: 12,
        columnNumber: 12
    }, this),
    react: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
        size: 18,
        className: "text-cyan-400"
    }, void 0, false, {
        fileName: "[project]/src/components/About.tsx",
        lineNumber: 13,
        columnNumber: 10
    }, this),
    nextjs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
        size: 18,
        className: "text-neutral-400"
    }, void 0, false, {
        fileName: "[project]/src/components/About.tsx",
        lineNumber: 14,
        columnNumber: 11
    }, this),
    tailwindcss: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
        size: 18,
        className: "text-teal-400"
    }, void 0, false, {
        fileName: "[project]/src/components/About.tsx",
        lineNumber: 15,
        columnNumber: 16
    }, this),
    html5: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
        size: 18,
        className: "text-orange-400"
    }, void 0, false, {
        fileName: "[project]/src/components/About.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this),
    css3: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$palette$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Palette$3e$__["Palette"], {
        size: 18,
        className: "text-blue-400"
    }, void 0, false, {
        fileName: "[project]/src/components/About.tsx",
        lineNumber: 17,
        columnNumber: 9
    }, this),
    nodejs: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$server$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Server$3e$__["Server"], {
        size: 18,
        className: "text-green-400"
    }, void 0, false, {
        fileName: "[project]/src/components/About.tsx",
        lineNumber: 18,
        columnNumber: 11
    }, this),
    generativeai: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
        size: 18,
        className: "text-purple-400"
    }, void 0, false, {
        fileName: "[project]/src/components/About.tsx",
        lineNumber: 19,
        columnNumber: 17
    }, this),
    llama3: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
        size: 18,
        className: "text-pink-400"
    }, void 0, false, {
        fileName: "[project]/src/components/About.tsx",
        lineNumber: 20,
        columnNumber: 11
    }, this),
    langgraph: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
        size: 18,
        className: "text-indigo-400"
    }, void 0, false, {
        fileName: "[project]/src/components/About.tsx",
        lineNumber: 21,
        columnNumber: 14
    }, this),
    default: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"], {
        size: 18,
        className: "text-neutral-500"
    }, void 0, false, {
        fileName: "[project]/src/components/About.tsx",
        lineNumber: 22,
        columnNumber: 12
    }, this)
};
const About = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "about",
            className: "min-h-screen relative text-white overflow-hidden flex items-center justify-center py-16 md:py-20 bg-gradient-to-br from-[#1A1D24] via-[#212530] to-[#1A1D24]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$react$2d$scroll$2d$parallax$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ParallaxBanner"], {
                    style: {
                        position: 'absolute',
                        inset: 0,
                        zIndex: 0
                    },
                    className: "opacity-20 md:opacity-25",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$react$2d$scroll$2d$parallax$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ParallaxBannerLayer"], {
                        image: "/images/prImg.jpg",
                        speed: -5,
                        expanded: false
                    }, void 0, false, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 31,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute inset-0 z-[1] flex items-center justify-center pointer-events-none opacity-[0.03] md:opacity-[0.04]",
                    initial: {
                        scale: 0.9,
                        rotate: -5
                    },
                    animate: {
                        scale: [
                            1,
                            1.02,
                            1
                        ],
                        rotate: [
                            0,
                            2,
                            0
                        ]
                    },
                    transition: {
                        duration: 50,
                        repeat: Infinity,
                        repeatType: "mirror",
                        ease: "easeInOut"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                        size: "clamp(400px, 70vw, 900px)",
                        className: "text-neutral-800"
                    }, void 0, false, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 container mx-auto px-4 w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col lg:flex-row lg:space-x-12 items-center lg:items-stretch",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:w-5/12 flex flex-col justify-center items-center p-4 md:p-6 w-full mb-10 lg:mb-0",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$react$2d$scroll$2d$parallax$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Parallax"], {
                                    speed: 10,
                                    className: "w-full max-w-sm lg:max-w-md",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "bg-[#2D3748]/60 backdrop-blur-lg p-3 rounded-xl shadow-2xl border border-neutral-700/60 overflow-hidden",
                                        initial: {
                                            opacity: 0,
                                            scale: 0.8
                                        },
                                        whileInView: {
                                            opacity: 1,
                                            scale: 1
                                        },
                                        viewport: {
                                            once: true,
                                            amount: 0.3
                                        },
                                        transition: {
                                            duration: 0.7,
                                            ease: "easeOut"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/prImg.jpg",
                                            alt: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].name || "Profile Picture",
                                            className: "w-full h-auto object-cover rounded-lg"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About.tsx",
                                            lineNumber: 68,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/About.tsx",
                                        lineNumber: 60,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 59,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/About.tsx",
                                lineNumber: 58,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:w-7/12 flex flex-col justify-center p-6 md:p-8 rounded-2xl w-full bg-[#535C91]/90 backdrop-blur-sm shadow-xl",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$scroll$2d$parallax$2f$dist$2f$react$2d$scroll$2d$parallax$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Parallax"], {
                                    speed: -2,
                                    className: "w-full flex flex-col items-center md:items-start",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-4xl lg:text-5xl font-bold mb-2 text-neutral-100 text-shadow-lg text-center md:text-left",
                                            children: "About Me"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].helloTag && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xl lg:text-2xl text-neutral-200 mb-6 text-center md:text-left",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].helloTag,
                                                " ",
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/About.tsx",
                                            lineNumber: 87,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/about-details",
                                            className: "w-full mb-8 group relative",
                                            passHref: true,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$3d$2d$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                className: "p-6 md:p-8 bg-black/20 backdrop-blur-sm hover:bg-black/30 transition-colors duration-300 rounded-lg shadow-lg cursor-pointer",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg leading-relaxed text-neutral-100",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].about
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 21
                                                    }, this),
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].about2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg leading-relaxed text-neutral-100 mt-4",
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].about2
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-sm text-sky-400 italic mr-2",
                                                                children: "Learn more"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/About.tsx",
                                                                lineNumber: 102,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                size: 18,
                                                                className: "text-sky-400"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/About.tsx",
                                                                lineNumber: 103,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/About.tsx",
                                                        lineNumber: 101,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-sky-400 mt-4 italic group-hover:text-white transition-colors",
                                                        children: "Click to learn more about my journey..."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/About.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 22
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/About.tsx",
                                                lineNumber: 92,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About.tsx",
                                            lineNumber: 91,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/ARUN_RESUME.pdf",
                                            download: "Arun_Resume.pdf",
                                            className: "group relative inline-block px-8 py-3 bg-neutral-100 text-[#535C91] font-semibold rounded-lg text-lg    shadow-md transform transition-all duration-300    hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-neutral-300 focus:ring-opacity-50   mt-4 md:mt-0 self-center md:self-start",
                                            children: "Download Resume"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/About.tsx",
                                            lineNumber: 108,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/About.tsx",
                                    lineNumber: 82,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/About.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/About.tsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/About.tsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/About.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false);
};
_c = About;
const __TURBOPACK__default__export__ = About;
var _c;
__turbopack_context__.k.register(_c, "About");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/ui/NewProjectCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
;
;
const NewProjectCard = ({ project })=>{
    const isMobileApp = project.category?.toLowerCase().includes('mobile');
    const secondImage = project.galleryImages?.[0]?.url || project.imageUrl;
    if (isMobileApp) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group relative w-full max-w-sm mx-auto bg-gradient-to-br from-[#0F172A] to-[#1E293B] rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#7E8CE0]/30",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-[280px] h-[560px] mx-auto mb-6 perspective-1000",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-[#1A1D24] rounded-[3rem] border-[8px] border-[#2A2D35] shadow-2xl overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-[#1A1D24] rounded-b-2xl z-10"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                                    lineNumber: 22,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-full h-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            src: project.imageUrl,
                                            alt: project.title,
                                            layout: "fill",
                                            objectFit: "cover",
                                            className: "transition-transform duration-700 group-hover:scale-110"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                                            lineNumber: 26,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                                    lineNumber: 25,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform transition-transform duration-300 hover:scale-110",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/images/android.png",
                                                alt: "Get it on Google Play",
                                                width: 24,
                                                height: 24,
                                                className: "opacity-70 hover:opacity-100 transition-opacity"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                                                lineNumber: 39,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                                            lineNumber: 38,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center transform transition-transform duration-300 hover:scale-110",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/images/app-store.png",
                                                alt: "Download on App Store",
                                                width: 24,
                                                height: 24,
                                                className: "opacity-70 hover:opacity-100 transition-opacity"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                                                lineNumber: 48,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                                            lineNumber: 47,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                                    lineNumber: 37,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                            lineNumber: 20,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                        lineNumber: 19,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent",
                                children: project.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-slate-400 text-sm leading-relaxed line-clamp-2",
                                children: project.shortDescription
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                                lineNumber: 62,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2 mt-4",
                                children: project.tags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-4 py-1.5 text-xs font-semibold rounded-full shadow-md",
                                        style: {
                                            background: tag.color,
                                            color: "#fff",
                                            border: "none",
                                            minWidth: "80px",
                                            display: "inline-block",
                                            textAlign: "center",
                                            letterSpacing: "0.02em"
                                        },
                                        children: tag.name
                                    }, index, false, {
                                        fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                                lineNumber: 65,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/projects/${project.id}`,
                                className: "inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-[#7E8CE0] to-[#535C91] rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-[#7E8CE0]/30 hover:-translate-y-1 group/btn",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "View Details"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4 ml-2 transform transition-transform group-hover/btn:translate-x-1",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: 2,
                                            d: "M14 5l7 7m0 0l-7 7m7-7H3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                                            lineNumber: 90,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                                lineNumber: 84,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui/NewProjectCard.tsx",
            lineNumber: 16,
            columnNumber: 7
        }, this);
    }
    // Web Project Card
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group relative w-full max-w-sm mx-auto bg-[#1A1D24] rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#7E8CE0]/30",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[280px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: project.imageUrl,
                        alt: project.title,
                        layout: "fill",
                        objectFit: "cover",
                        className: "transition-transform duration-500 group-hover:scale-110"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 bg-gradient-to-b from-slate-800 to-slate-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-white mb-2",
                        children: project.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                        lineNumber: 113,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-slate-300 text-sm leading-relaxed",
                        children: project.shortDescription
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-2 mt-4",
                        children: project.tags.map((tag, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "px-4 py-1.5 text-xs font-semibold rounded-full shadow-md",
                                style: {
                                    background: tag.color,
                                    color: "#fff",
                                    border: "none",
                                    minWidth: "80px",
                                    display: "inline-block",
                                    textAlign: "center",
                                    letterSpacing: "0.02em"
                                },
                                children: tag.name
                            }, index, false, {
                                fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                                lineNumber: 119,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                        lineNumber: 117,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-4 flex justify-end",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            href: `/projects/${project.id}`,
                            className: "text-sm font-semibold text-[#7E8CE0] hover:text-white transition-colors duration-300",
                            children: "View Details →"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                            lineNumber: 137,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/NewProjectCard.tsx",
                lineNumber: 112,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/NewProjectCard.tsx",
        lineNumber: 101,
        columnNumber: 5
    }, this);
};
_c = NewProjectCard;
const __TURBOPACK__default__export__ = NewProjectCard;
var _c;
__turbopack_context__.k.register(_c, "NewProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Projects.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NewProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/NewProjectCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolioData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)"); // Import AnimatePresence
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const Projects = ()=>{
    _s();
    const [activeFilter, setActiveFilter] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('mobile');
    const filteredProjects = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "Projects.useMemo[filteredProjects]": ()=>{
            const filtered = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].filter({
                "Projects.useMemo[filteredProjects].filtered": (project)=>project.category && project.category.toLowerCase() === activeFilter
            }["Projects.useMemo[filteredProjects].filtered"]);
            return filtered.slice(0, 3);
        }
    }["Projects.useMemo[filteredProjects]"], [
        activeFilter
    ]);
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "projects",
            className: "py-16 md:py-24 bg-[#1A1D24] text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-4 text-neutral-100",
                    children: "My Creative Portfolio"
                }, void 0, false, {
                    fileName: "[project]/src/components/Projects.tsx",
                    lineNumber: 22,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-neutral-300",
                    children: "No projects to display at the moment. Please check back later!"
                }, void 0, false, {
                    fileName: "[project]/src/components/Projects.tsx",
                    lineNumber: 23,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Projects.tsx",
            lineNumber: 21,
            columnNumber: 7
        }, this);
    }
    // No changes to variants are needed for this fix, but let's keep them clean.
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        },
        // Optional: Add an exit animation for a smoother transition
        exit: {
            opacity: 0,
            y: -30,
            transition: {
                duration: 0.3
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "projects",
        className: "py-20 md:py-32 bg-gradient-to-br from-[#1A1D24] via-[#212530] to-[#1A1D24]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    initial: {
                        opacity: 0,
                        y: -30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.7,
                        ease: "circOut"
                    },
                    className: "text-5xl md:text-6xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7E8CE0] via-[#535C91] to-[#A0AEC0]",
                    children: "My Creative Portfolio"
                }, void 0, false, {
                    fileName: "[project]/src/components/Projects.tsx",
                    lineNumber: 60,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.2
                    },
                    className: "flex justify-center gap-4 mb-16 md:mb-20",
                    children: [
                        'mobile',
                        'web'
                    ].map((filter)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveFilter(filter),
                            className: `px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${activeFilter === filter ? 'bg-gradient-to-r from-[#7E8CE0] to-[#535C91] text-white shadow-lg shadow-[#7E8CE0]/30' : 'bg-white/10 text-white/70 hover:bg-white/20 hover:text-white'}`,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                initial: false,
                                animate: {
                                    scale: activeFilter === filter ? 1.1 : 1
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 300,
                                    damping: 15
                                },
                                className: "inline-block capitalize",
                                children: `${filter} Projects`
                            }, void 0, false, {
                                fileName: "[project]/src/components/Projects.tsx",
                                lineNumber: 83,
                                columnNumber: 15
                            }, this)
                        }, filter, false, {
                            fileName: "[project]/src/components/Projects.tsx",
                            lineNumber: 76,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Projects.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12",
                    variants: containerVariants,
                    initial: "hidden",
                    animate: "visible" // Use 'animate' instead of 'whileInView' for more direct control
                    ,
                    exit: "hidden" // Optional: for the whole container to fade out
                    ,
                    children: filteredProjects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: itemVariants,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$NewProjectCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                project: project
                            }, void 0, false, {
                                fileName: "[project]/src/components/Projects.tsx",
                                lineNumber: 106,
                                columnNumber: 17
                            }, this)
                        }, project.id || index, false, {
                            fileName: "[project]/src/components/Projects.tsx",
                            lineNumber: 105,
                            columnNumber: 15
                        }, this))
                }, activeFilter, false, {
                    fileName: "[project]/src/components/Projects.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"].length > 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "text-center mt-12 md:mt-16",
                    initial: {
                        opacity: 0,
                        y: 20
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.5,
                        delay: 0.5
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/projects",
                        passHref: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].button, {
                            className: "px-8 py-3 bg-gradient-to-r from-[#7E8CE0] to-[#535C91] text-white font-semibold rounded-lg shadow-lg hover:shadow-[#7E8CE0]/50 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7E8CE0] focus:ring-opacity-75",
                            whileHover: {
                                scale: 1.05,
                                boxShadow: "0px 0px 15px rgba(126, 140, 224, 0.6)"
                            },
                            whileTap: {
                                scale: 0.95
                            },
                            children: "View All Projects"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Projects.tsx",
                            lineNumber: 119,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Projects.tsx",
                        lineNumber: 118,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Projects.tsx",
                    lineNumber: 112,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Projects.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Projects.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
};
_s(Projects, "iDNTmCeYbBJcuBviMXrlt0b9Kik=");
_c = Projects;
const __TURBOPACK__default__export__ = Projects;
var _c;
__turbopack_context__.k.register(_c, "Projects");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Technologies.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolioData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layers.js [app-client] (ecmascript) <export default as Layers>"); // Fallback icon
'use client';
;
;
;
;
;
const TechCard = ({ tech, index })=>{
    const cardVariants = {
        hidden: {
            opacity: 0,
            scale: 0.8,
            y: 20
        },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.4,
                delay: index * 0.05,
                ease: 'easeOut'
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: cardVariants,
        className: "group flex flex-col items-center justify-center p-6 bg-[#2D3748]/40 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-[#535C91]/30    border border-transparent hover:border-[#535C91]/50 transition-all duration-300 transform hover:-translate-y-1 h-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-16 h-16 md:w-20 md:h-20 mb-4 transition-transform duration-300 group-hover:scale-110",
                children: tech.iconUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: tech.iconUrl,
                    alt: `${tech.name} icon`,
                    layout: "fill",
                    objectFit: "contain",
                    className: "drop-shadow-lg"
                }, void 0, false, {
                    fileName: "[project]/src/components/Technologies.tsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layers$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Layers$3e$__["Layers"], {
                    size: 48,
                    className: "text-neutral-400"
                }, void 0, false, {
                    fileName: "[project]/src/components/Technologies.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, this) // Fallback icon
            }, void 0, false, {
                fileName: "[project]/src/components/Technologies.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm md:text-md font-medium text-neutral-200 group-hover:text-[#7E8CE0] transition-colors duration-300 text-center",
                children: tech.name
            }, void 0, false, {
                fileName: "[project]/src/components/Technologies.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Technologies.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
};
_c = TechCard;
const Technologies = ()=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["technologies"] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["technologies"].length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "technologies",
            className: "py-16 md:py-24 bg-[#1A1D24] text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-4 text-neutral-100",
                    children: "Tech Stack"
                }, void 0, false, {
                    fileName: "[project]/src/components/Technologies.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-neutral-300",
                    children: "Technology details are not available at the moment."
                }, void 0, false, {
                    fileName: "[project]/src/components/Technologies.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Technologies.tsx",
            lineNumber: 49,
            columnNumber: 7
        }, this);
    }
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "technologies",
        className: "py-20 md:py-32 bg-gradient-to-b from-[#1A1D24] via-[#212530] to-[#1A1D24]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    initial: {
                        opacity: 0,
                        y: -30
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        amount: 0.2
                    },
                    transition: {
                        duration: 0.7,
                        ease: "circOut"
                    },
                    className: "text-5xl md:text-6xl font-extrabold mb-16 md:mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#A0AEC0] via-[#7E8CE0] to-[#535C91]",
                    children: "My Tech Arsenal"
                }, void 0, false, {
                    fileName: "[project]/src/components/Technologies.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8",
                    variants: containerVariants,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        amount: 0.1
                    },
                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["technologies"].map((tech, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TechCard, {
                            tech: tech,
                            index: index
                        }, tech.name, false, {
                            fileName: "[project]/src/components/Technologies.tsx",
                            lineNumber: 85,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Technologies.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Technologies.tsx",
            lineNumber: 66,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Technologies.tsx",
        lineNumber: 65,
        columnNumber: 5
    }, this);
};
_c1 = Technologies;
const __TURBOPACK__default__export__ = Technologies;
var _c, _c1;
__turbopack_context__.k.register(_c, "TechCard");
__turbopack_context__.k.register(_c1, "Technologies");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Contact.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/network.js [app-client] (ecmascript) <export default as Network>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolioData.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const socialIconMap = {
    linkedin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
    github: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
    instagram: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
    facebook: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
    twitter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"]
};
const openToIconMap = {
    briefcase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
    dollarsign: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
    messagesquare: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
    github: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
    usercheck: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"],
    Briefcase: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"],
    DollarSign: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
    MessageSquare: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
    Github: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"]
};
const ContactInfoItem = ({ icon, text, href })=>{
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "flex items-center group text-lg",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "mr-3 text-[#7E8CE0] group-hover:text-[#A0AEC0] transition-colors",
                children: icon
            }, void 0, false, {
                fileName: "[project]/src/components/Contact.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "text-neutral-200 group-hover:underline",
                children: text
            }, void 0, false, {
                fileName: "[project]/src/components/Contact.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Contact.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
    return href ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
        href: href,
        children: content
    }, void 0, false, {
        fileName: "[project]/src/components/Contact.tsx",
        lineNumber: 40,
        columnNumber: 17
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: content
    }, void 0, false, {
        fileName: "[project]/src/components/Contact.tsx",
        lineNumber: 40,
        columnNumber: 48
    }, this);
};
_c = ContactInfoItem;
const Contact = ()=>{
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [submissionStatus, setSubmissionStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        success: null,
        message: null
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleChange = (e)=>{
        const { name, value } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        setIsLoading(true);
        setSubmissionStatus({
            success: null,
            message: null
        });
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const result = await response.json();
            if (response.ok) {
                setSubmissionStatus({
                    success: true,
                    message: result.message || 'Message sent successfully!'
                });
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                }); // Reset form
            } else {
                setSubmissionStatus({
                    success: false,
                    message: result.error || 'Failed to send message. Please try again.'
                });
            }
        } catch (error) {
            console.error("Contact form submission error:", error);
            setSubmissionStatus({
                success: false,
                message: 'An unexpected error occurred. Please try again.'
            });
        }
        setIsLoading(false);
    };
    const sectionVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };
    // Variants for the 'openTo' list items
    const openToItemVariants = {
        hidden: {
            opacity: 0,
            x: -20
        },
        visible: (i)=>({
                opacity: 1,
                x: 0,
                transition: {
                    delay: i * 0.1 + 0.3,
                    duration: 0.4,
                    ease: "easeOut"
                }
            })
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "contact",
        className: "py-20 md:py-32 bg-gradient-to-br from-[#1A1D24] via-[#212530] to-[#1A1D24] text-neutral-100 overflow-hidden scroll-mt-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "absolute -top-1/4 -left-1/4 w-full h-full opacity-[0.03] pointer-events-none md:opacity-[0.05]",
                    initial: {
                        opacity: 0,
                        scale: 0.8,
                        rotate: -30
                    },
                    whileInView: {
                        opacity: [
                            0.03,
                            0.05,
                            0.03
                        ],
                        scale: 1,
                        rotate: 0
                    },
                    viewport: {
                        once: true,
                        amount: 0.1
                    },
                    transition: {
                        duration: 1.5,
                        ease: "circOut"
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$network$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Network$3e$__["Network"], {
                        size: "100%",
                        className: "text-[#535C91]"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Contact.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    initial: {
                        opacity: 0,
                        y: -40
                    },
                    whileInView: {
                        opacity: 1,
                        y: 0
                    },
                    viewport: {
                        once: true,
                        amount: 0.2
                    },
                    transition: {
                        duration: 0.7,
                        ease: "circOut"
                    },
                    className: "text-5xl md:text-6xl font-extrabold mb-16 md:mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7E8CE0] via-[#535C91] to-[#A0AEC0] relative z-10",
                    children: "Get In Touch"
                }, void 0, false, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 133,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    className: "grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 items-start relative z-10",
                    variants: sectionVariants,
                    initial: "hidden",
                    whileInView: "visible",
                    viewport: {
                        once: true,
                        amount: 0.1
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: itemVariants,
                            className: "md:col-span-2 space-y-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-3xl font-semibold text-[#A0AEC0] mb-4",
                                            children: "Let's Connect"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-neutral-300 leading-relaxed mb-8",
                                            children: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing. Feel free to reach out!"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 154,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-5 mb-10",
                                            children: [
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactInfoItem, {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                        size: 22
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Contact.tsx",
                                                        lineNumber: 159,
                                                        columnNumber: 42
                                                    }, void 0),
                                                    text: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].email,
                                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].email}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 159,
                                                    columnNumber: 19
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactInfoItem, {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                        size: 22
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Contact.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 42
                                                    }, void 0),
                                                    text: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].phone,
                                                    href: `tel:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].phone.replace(/\s/g, '')}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactInfoItem, {
                                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        size: 22
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Contact.tsx",
                                                        lineNumber: 165,
                                                        columnNumber: 42
                                                    }, void 0),
                                                    text: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].location
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 157,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Contact.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].openTo && __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].openTo.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-2xl font-medium text-[#A0AEC0] mb-5",
                                            children: "I'm Currently Open To:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 172,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "space-y-3",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].openTo.map((item, index)=>{
                                                const Icon = item.icon && openToIconMap[item.icon.toLowerCase()] ? openToIconMap[item.icon.toLowerCase()] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"];
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                    className: "flex items-center bg-[#2D3748]/30 p-3 rounded-md shadow-sm hover:bg-[#2D3748]/60 transition-colors duration-200",
                                                    custom: index,
                                                    variants: openToItemVariants,
                                                    initial: "hidden",
                                                    animate: "visible" // Trigger 'visible' variant
                                                    ,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            size: 20,
                                                            className: "mr-3 text-[#7E8CE0] flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 185,
                                                            columnNumber: 25
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-neutral-200 text-sm",
                                                            children: item.text
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 186,
                                                            columnNumber: 25
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 23
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 173,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Contact.tsx",
                                    lineNumber: 171,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "text-2xl font-medium text-[#A0AEC0] mt-10 mb-5",
                                            children: "Follow Me"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-4",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["socialMediaLinks"].map((link)=>{
                                                const IconComponent = socialIconMap[link.name.toLowerCase()];
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: link.url,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    "aria-label": link.name,
                                                    className: "p-2.5 bg-[#2D3748]/50 hover:bg-[#535C91] rounded-full text-neutral-300 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-md hover:shadow-lg",
                                                    children: [
                                                        IconComponent ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(IconComponent, {
                                                            size: 24
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 40
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: link.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Contact.tsx",
                                                            lineNumber: 208,
                                                            columnNumber: 70
                                                        }, this),
                                                        " "
                                                    ]
                                                }, link.name, true, {
                                                    fileName: "[project]/src/components/Contact.tsx",
                                                    lineNumber: 200,
                                                    columnNumber: 21
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Contact.tsx",
                                    lineNumber: 194,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Contact.tsx",
                            lineNumber: 151,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: itemVariants,
                            className: "md:col-span-3 bg-[#2D3748]/50 p-8 md:p-10 rounded-xl shadow-2xl hover:shadow-[#535C91]/40 transition-shadow duration-300",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleSubmit,
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "name",
                                                className: "block text-sm font-medium text-neutral-300 mb-1",
                                                children: "Full Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 220,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "name",
                                                id: "name",
                                                required: true,
                                                value: formData.name,
                                                onChange: handleChange,
                                                className: "w-full px-4 py-3 bg-[#1f1f38]/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#7E8CE0] focus:border-[#7E8CE0] outline-none transition-all duration-300 placeholder-neutral-500 text-neutral-100",
                                                placeholder: "Your Name"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 221,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "email",
                                                className: "block text-sm font-medium text-neutral-300 mb-1",
                                                children: "Email Address"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                name: "email",
                                                id: "email",
                                                required: true,
                                                value: formData.email,
                                                onChange: handleChange,
                                                className: "w-full px-4 py-3 bg-[#1f1f38]/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#7E8CE0] focus:border-[#7E8CE0] outline-none transition-all duration-300 placeholder-neutral-500 text-neutral-100",
                                                placeholder: "your.email@example.com"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 234,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 232,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "subject",
                                                className: "block text-sm font-medium text-neutral-300 mb-1",
                                                children: "Subject"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 246,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "text",
                                                name: "subject",
                                                id: "subject",
                                                required: true,
                                                value: formData.subject,
                                                onChange: handleChange,
                                                className: "w-full px-4 py-3 bg-[#1f1f38]/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#7E8CE0] focus:border-[#7E8CE0] outline-none transition-all duration-300 placeholder-neutral-500 text-neutral-100",
                                                placeholder: "What can I help you with?"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 247,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                htmlFor: "message",
                                                className: "block text-sm font-medium text-neutral-300 mb-1",
                                                children: "Message"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 259,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                name: "message",
                                                id: "message",
                                                rows: 5,
                                                required: true,
                                                value: formData.message,
                                                onChange: handleChange,
                                                className: "w-full px-4 py-3 bg-[#1f1f38]/50 border border-white/20 rounded-lg focus:ring-2 focus:ring-[#7E8CE0] focus:border-[#7E8CE0] outline-none transition-all duration-300 placeholder-neutral-500 text-neutral-100 resize-none",
                                                placeholder: "Your message..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/Contact.tsx",
                                                lineNumber: 260,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 258,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "submit",
                                            disabled: isLoading,
                                            className: "w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-[#535C91] to-[#7E8CE0] hover:from-[#7E8CE0] hover:to-[#535C91] text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed group",
                                            children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "animate-spin -ml-1 mr-3 h-5 w-5 text-white",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        fill: "none",
                                                        viewBox: "0 0 24 24",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                className: "opacity-25",
                                                                cx: "12",
                                                                cy: "12",
                                                                r: "10",
                                                                stroke: "currentColor",
                                                                strokeWidth: "4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Contact.tsx",
                                                                lineNumber: 280,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                className: "opacity-75",
                                                                fill: "currentColor",
                                                                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/Contact.tsx",
                                                                lineNumber: 281,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/Contact.tsx",
                                                        lineNumber: 279,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Sending..."
                                                ]
                                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    "Send Message",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                        size: 20,
                                                        className: "ml-2 transition-transform duration-300 group-hover:translate-x-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/Contact.tsx",
                                                        lineNumber: 288,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Contact.tsx",
                                            lineNumber: 272,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 271,
                                        columnNumber: 15
                                    }, this),
                                    submissionStatus.message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: `mt-4 text-sm text-center ${submissionStatus.success ? 'text-green-400' : 'text-red-400'}`,
                                        children: submissionStatus.message
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Contact.tsx",
                                        lineNumber: 294,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Contact.tsx",
                                lineNumber: 218,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/Contact.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Contact.tsx",
                    lineNumber: 143,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Contact.tsx",
            lineNumber: 121,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Contact.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this);
};
_s(Contact, "3+JiFBTuWF93iXofxsFiyaefnns=");
_c1 = Contact;
const __TURBOPACK__default__export__ = Contact;
var _c, _c1;
__turbopack_context__.k.register(_c, "ContactInfoItem");
__turbopack_context__.k.register(_c1, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/MobileFallback.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolioData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/linkedin.js [app-client] (ecmascript) <export default as Linkedin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/github.js [app-client] (ecmascript) <export default as Github>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/twitter.js [app-client] (ecmascript) <export default as Twitter>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-client] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
const socialIconMap = {
    linkedin: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$linkedin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Linkedin$3e$__["Linkedin"],
    github: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$github$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Github$3e$__["Github"],
    instagram: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
    facebook: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
    twitter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$twitter$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Twitter$3e$__["Twitter"]
};
const MobileFallback = ()=>{
    const simpleName = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].name.replace("I'm ", "").replace(",", "");
    const title1 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].title1 || 'Mobile Application Developer';
    const title2 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].title2 || 'Web Developer';
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };
    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 20
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-neutral-200 p-6 md:hidden overflow-hidden",
        variants: containerVariants,
        initial: "hidden",
        animate: "visible",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-20 right-10 opacity-20",
                animate: {
                    y: [
                        0,
                        -20,
                        0
                    ],
                    rotate: [
                        0,
                        360
                    ]
                },
                transition: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                    size: 40,
                    className: "text-indigo-400"
                }, void 0, false, {
                    fileName: "[project]/src/components/MobileFallback.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MobileFallback.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-40 left-10 opacity-10",
                animate: {
                    y: [
                        0,
                        20,
                        0
                    ],
                    scale: [
                        1,
                        1.2,
                        1
                    ]
                },
                transition: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                    size: 60,
                    className: "text-purple-400"
                }, void 0, false, {
                    fileName: "[project]/src/components/MobileFallback.tsx",
                    lineNumber: 70,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/MobileFallback.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "relative w-full max-w-md mx-auto z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: itemVariants,
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-6xl font-light mb-4 tracking-tight",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "block bg-clip-text text-transparent bg-gradient-to-r from-violet-200 via-fuchsia-300 to-indigo-300 drop-shadow-lg",
                                    children: simpleName
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MobileFallback.tsx",
                                    lineNumber: 81,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/MobileFallback.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        className: "text-xl text-indigo-200/90 font-light tracking-wider",
                                        animate: {
                                            opacity: [
                                                0.7,
                                                1,
                                                0.7
                                            ]
                                        },
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity
                                        },
                                        children: title1
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MobileFallback.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                                        className: "text-lg text-indigo-200/70 font-light tracking-wide mt-1",
                                        animate: {
                                            opacity: [
                                                0.5,
                                                0.8,
                                                0.5
                                            ]
                                        },
                                        transition: {
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: 1.5
                                        },
                                        children: [
                                            "& ",
                                            title2
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/MobileFallback.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/MobileFallback.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/MobileFallback.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: itemVariants,
                        className: "p-6 backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-xl mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute -top-10 -right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl",
                                    animate: {
                                        scale: [
                                            1,
                                            1.2,
                                            1
                                        ],
                                        opacity: [
                                            0.5,
                                            0.3,
                                            0.5
                                        ]
                                    },
                                    transition: {
                                        duration: 4,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MobileFallback.tsx",
                                    lineNumber: 109,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MobileFallback.tsx",
                                    lineNumber: 121,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute top-1/4 right-1/3 w-64 h-64 rounded-full",
                                    style: {
                                        background: "radial-gradient(circle, rgba(139,92,246,0.1) 0%, rgba(0,0,0,0) 70%)"
                                    },
                                    animate: {
                                        scale: [
                                            1,
                                            1.2,
                                            1
                                        ],
                                        opacity: [
                                            0.3,
                                            0.2,
                                            0.3
                                        ]
                                    },
                                    transition: {
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MobileFallback.tsx",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg font-light leading-relaxed mb-4 text-indigo-100 px-4 mt-4",
                                    children: "Experience the Full Journey"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MobileFallback.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-indigo-200/70 leading-relaxed px-4 mb-4",
                                    children: "This portfolio comes alive on desktop, where interactive elements and immersive designs await your exploration."
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MobileFallback.tsx",
                                    lineNumber: 141,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MobileFallback.tsx",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MobileFallback.tsx",
                        lineNumber: 104,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: itemVariants,
                        className: "flex justify-center mt-8 mb-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                            href: "/ARUN_RESUME.pdf" // Updated path to match the actual file
                            ,
                            download: true,
                            className: "group relative overflow-hidden px-8 py-3 rounded-full bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 backdrop-blur-sm hover:from-violet-500/30 hover:to-fuchsia-500/30 border border-white/10",
                            whileHover: {
                                scale: 1.05
                            },
                            whileTap: {
                                scale: 0.98
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    className: "absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10",
                                    animate: {
                                        x: [
                                            '-100%',
                                            '100%'
                                        ],
                                        opacity: [
                                            0.5,
                                            0.8,
                                            0.5
                                        ]
                                    },
                                    transition: {
                                        duration: 3,
                                        repeat: Infinity,
                                        ease: "linear"
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MobileFallback.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-light text-white group-hover:text-white/90",
                                            children: "Download Resume"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MobileFallback.tsx",
                                            lineNumber: 172,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].svg, {
                                            className: "w-4 h-4 text-white/70 group-hover:text-white",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2",
                                            animate: {
                                                y: [
                                                    0,
                                                    2,
                                                    0
                                                ]
                                            },
                                            transition: {
                                                duration: 2,
                                                repeat: Infinity
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/MobileFallback.tsx",
                                                lineNumber: 184,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MobileFallback.tsx",
                                            lineNumber: 175,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/MobileFallback.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MobileFallback.tsx",
                            lineNumber: 152,
                            columnNumber: 19
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MobileFallback.tsx",
                        lineNumber: 148,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: itemVariants,
                        className: "flex flex-wrap justify-center gap-4 mt-8",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["socialMediaLinks"].map((social)=>{
                            const Icon = socialIconMap[social.name.toLowerCase()];
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                                href: social.url,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "relative p-3.5 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md rounded-full text-indigo-200 hover:text-white transition-all duration-300 border border-white/10 hover:border-white/20 overflow-hidden",
                                whileHover: {
                                    scale: 1.15,
                                    transition: {
                                        duration: 0.2
                                    }
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        className: "absolute inset-0 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20",
                                        initial: {
                                            x: '-100%'
                                        },
                                        whileHover: {
                                            x: '100%'
                                        },
                                        transition: {
                                            duration: 0.6
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MobileFallback.tsx",
                                        lineNumber: 209,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            size: 22
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/MobileFallback.tsx",
                                            lineNumber: 216,
                                            columnNumber: 28
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/MobileFallback.tsx",
                                        lineNumber: 215,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, social.name, true, {
                                fileName: "[project]/src/components/MobileFallback.tsx",
                                lineNumber: 198,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/MobileFallback.tsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, this),
                    (__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].email || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].phone) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: itemVariants,
                        className: "mt-8 space-y-3",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].a, {
                            href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].email}`,
                            className: "flex items-center justify-center p-3 bg-white/5 backdrop-blur-md rounded-lg text-indigo-200 hover:text-white transition-all duration-300 border border-white/5 hover:border-white/20",
                            whileHover: {
                                y: -2
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                    size: 18,
                                    className: "mr-2 opacity-70"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MobileFallback.tsx",
                                    lineNumber: 235,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["profileData"].email
                                }, void 0, false, {
                                    fileName: "[project]/src/components/MobileFallback.tsx",
                                    lineNumber: 236,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/MobileFallback.tsx",
                            lineNumber: 230,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/MobileFallback.tsx",
                        lineNumber: 225,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MobileFallback.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                variants: itemVariants,
                className: "absolute bottom-6 text-center text-xs text-indigo-200/40",
                children: [
                    new Date().getFullYear(),
                    " • ",
                    simpleName
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/MobileFallback.tsx",
                lineNumber: 245,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/MobileFallback.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
};
_c = MobileFallback;
const __TURBOPACK__default__export__ = MobileFallback;
var _c;
__turbopack_context__.k.register(_c, "MobileFallback");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Experience.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolioData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const ExperienceCard = ({ experience, index })=>{
    const cardVariants = {
        hidden: {
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: index * 0.2
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "mb-12 flex group",
        variants: cardVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true,
            amount: 0.3
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `hidden md:flex flex-col items-center mr-6 ${index % 2 === 0 ? 'order-1' : 'order-3 ml-6'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "flex items-center justify-center w-12 h-12 rounded-full bg-[#2D3748] group-hover:bg-[#535C91] transition-all duration-300 border-4 border-[#1A1D24] shadow-lg",
                        style: {
                            backgroundColor: experience.iconBg || '#2D3748'
                        },
                        children: experience.iconUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: experience.iconUrl,
                            alt: `${experience.companyName} logo`,
                            width: 32,
                            height: 32,
                            className: "rounded-full object-contain p-1"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Experience.tsx",
                            lineNumber: 34,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                            size: 24,
                            className: "text-neutral-300 group-hover:text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Experience.tsx",
                            lineNumber: 36,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-1 flex-grow bg-gradient-to-b from-[#535C91] via-[#7E8CE0] to-transparent mt-2"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 39,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Experience.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `bg-[#2D3748]/50 p-6 rounded-lg shadow-xl hover:shadow-[#535C91]/40 transition-all duration-300 w-full md:w-auto flex-1 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-semibold text-[#A0AEC0] group-hover:text-[#7E8CE0] transition-colors duration-300",
                                children: experience.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 45,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm text-neutral-400 mt-1 sm:mt-0 bg-[#1A1D24]/70 px-3 py-1 rounded-full",
                                children: experience.date
                            }, void 0, false, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 48,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center text-neutral-300 mb-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                size: 16,
                                className: "mr-2 text-[#7E8CE0]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: experience.companyName
                            }, void 0, false, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 54,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "list-disc list-inside text-neutral-200 space-y-2 pl-1",
                        children: experience.points.map((point, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "text-sm leading-relaxed",
                                children: point
                            }, i, false, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 59,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Experience.tsx",
                        lineNumber: 57,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Experience.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Experience.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
};
_c = ExperienceCard;
const Experience = ()=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experiences"] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experiences"].length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "experience",
            className: "py-16 md:py-24 bg-gradient-to-br from-[#1A1D24] via-[#212530] to-[#1A1D24] text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-4 text-neutral-100",
                    children: "My Journey"
                }, void 0, false, {
                    fileName: "[project]/src/components/Experience.tsx",
                    lineNumber: 71,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-neutral-300",
                    children: "Experience details are not available at the moment."
                }, void 0, false, {
                    fileName: "[project]/src/components/Experience.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Experience.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "experience",
        className: "py-20 md:py-32 bg-gradient-to-br from-[#1A1D24] via-[#212530] to-[#1A1D24]",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                    initial: {
                        opacity: 0,
                        y: -30
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        duration: 0.7,
                        ease: "circOut"
                    },
                    className: "text-5xl md:text-6xl font-extrabold mb-16 md:mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#7E8CE0] via-[#535C91] to-[#A0AEC0]",
                    children: "My Professional Journey"
                }, void 0, false, {
                    fileName: "[project]/src/components/Experience.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-[#535C91]/50 via-[#7E8CE0]/50 to-transparent md:hidden"
                        }, void 0, false, {
                            fileName: "[project]/src/components/Experience.tsx",
                            lineNumber: 90,
                            columnNumber: 11
                        }, this),
                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["experiences"].map((exp, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ExperienceCard, {
                                experience: exp,
                                index: index
                            }, index, false, {
                                fileName: "[project]/src/components/Experience.tsx",
                                lineNumber: 93,
                                columnNumber: 13
                            }, this))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/Experience.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Experience.tsx",
            lineNumber: 79,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Experience.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
};
_c1 = Experience;
const __TURBOPACK__default__export__ = Experience;
var _c, _c1;
__turbopack_context__.k.register(_c, "ExperienceCard");
__turbopack_context__.k.register(_c1, "Experience");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Education.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/portfolioData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar-days.js [app-client] (ecmascript) <export default as CalendarDays>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
'use client';
;
;
;
;
;
const EducationCard = ({ entry, index })=>{
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.2
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        variants: cardVariants,
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true,
            amount: 0.3
        },
        className: "bg-[#2D3748]/40 p-6 rounded-xl shadow-lg hover:shadow-[#535C91]/30 transition-all duration-300 group flex flex-col sm:flex-row items-start space-x-0 sm:space-x-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-shrink-0 w-20 h-20 rounded-full flex items-center justify-center mb-4 sm:mb-0 border-4 border-[#1A1D24] shadow-md group-hover:scale-105 transition-transform duration-300",
                style: {
                    backgroundColor: entry.iconBg || '#535C91'
                },
                children: entry.iconUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: entry.iconUrl,
                    alt: `${entry.collegeName} logo`,
                    width: 48,
                    height: 48,
                    className: "rounded-full object-contain p-1"
                }, void 0, false, {
                    fileName: "[project]/src/components/Education.tsx",
                    lineNumber: 32,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                    size: 36,
                    className: "text-neutral-100"
                }, void 0, false, {
                    fileName: "[project]/src/components/Education.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Education.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-grow",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-xl font-semibold text-[#A0AEC0] group-hover:text-[#7E8CE0] transition-colors duration-300",
                                children: entry.title
                            }, void 0, false, {
                                fileName: "[project]/src/components/Education.tsx",
                                lineNumber: 39,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-neutral-400 mt-1 sm:mt-0 bg-[#1A1D24]/70 px-2 py-1 rounded-full flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2d$days$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarDays$3e$__["CalendarDays"], {
                                        size: 14,
                                        className: "mr-1.5"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Education.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    entry.date
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/Education.tsx",
                                lineNumber: 42,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Education.tsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-medium text-neutral-100 mb-1",
                        children: entry.collegeName
                    }, void 0, false, {
                        fileName: "[project]/src/components/Education.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    entry.branch && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-neutral-300 mb-1 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                size: 14,
                                className: "mr-2 text-[#7E8CE0]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Education.tsx",
                                lineNumber: 49,
                                columnNumber: 13
                            }, this),
                            " ",
                            entry.branch
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Education.tsx",
                        lineNumber: 48,
                        columnNumber: 11
                    }, this),
                    entry.percentage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-neutral-300 flex items-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                size: 14,
                                className: "mr-2 text-[#7E8CE0]"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Education.tsx",
                                lineNumber: 54,
                                columnNumber: 13
                            }, this),
                            " Score: ",
                            entry.percentage
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Education.tsx",
                        lineNumber: 53,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Education.tsx",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Education.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
};
_c = EducationCard;
const Education = ()=>{
    if (!__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["education"] || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["education"].length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            id: "education",
            className: "py-16 md:py-24 bg-[#1A1D24] text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-4xl md:text-5xl font-bold mb-4 text-neutral-100",
                    children: "My Education"
                }, void 0, false, {
                    fileName: "[project]/src/components/Education.tsx",
                    lineNumber: 66,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-neutral-300",
                    children: "Education details are not available at the moment."
                }, void 0, false, {
                    fileName: "[project]/src/components/Education.tsx",
                    lineNumber: 67,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Education.tsx",
            lineNumber: 65,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "education",
        className: "py-20 md:py-32 bg-[#1A1D24]",
        children: [
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "container mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h2, {
                        initial: {
                            opacity: 0,
                            y: -30
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.7,
                            ease: "circOut"
                        },
                        className: "text-5xl md:text-6xl font-extrabold mb-16 md:mb-20 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#A0AEC0] via-[#7E8CE0] to-[#535C91]",
                        children: "My Academic Background"
                    }, void 0, false, {
                        fileName: "[project]/src/components/Education.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$portfolioData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["education"].map((edu, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EducationCard, {
                                entry: edu,
                                index: index
                            }, index, false, {
                                fileName: "[project]/src/components/Education.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/components/Education.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Education.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/Education.tsx",
        lineNumber: 73,
        columnNumber: 5
    }, this);
};
_c1 = Education;
const __TURBOPACK__default__export__ = Education;
var _c, _c1;
__turbopack_context__.k.register(_c, "EducationCard");
__turbopack_context__.k.register(_c1, "Education");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_93bb1c65._.js.map