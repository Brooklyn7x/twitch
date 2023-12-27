"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var google_1 = require("next/font/google");
require("./globals.css");
var nextjs_1 = require("@clerk/nextjs");
var sonner_1 = require("sonner");
var inter = google_1.Inter({ subsets: ["latin"] });
exports.metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement(nextjs_1.ClerkProvider, null,
        React.createElement("html", { lang: "en" },
            React.createElement(sonner_1.Toaster, { theme: "light", position: "bottom-right" }),
            React.createElement("body", null, children))));
}
exports["default"] = RootLayout;