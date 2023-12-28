"use client";
"use strict";
exports.__esModule = true;
var live_badge_1 = require("@/components/live-badge");
var button_1 = require("@/components/ui/button");
var user_avater_1 = require("@/components/user-avater");
var utils_1 = require("@/lib/utils");
var useSidebar_1 = require("@/store/useSidebar");
var link_1 = require("next/link");
var navigation_1 = require("next/navigation");
var UserItem = function (_a) {
    var imgUrl = _a.imgUrl, username = _a.username, isLive = _a.isLive;
    var pathname = navigation_1.usePathname();
    var collapsed = useSidebar_1.useSidebar(function (state) { return state; }).collapsed;
    var href = "/" + username;
    var isActive = pathname === href;
    return (React.createElement(button_1.Button, { asChild: true, variant: "ghost", className: utils_1.cn("w-full h-12", collapsed ? "justify-center" : "justify-start", isActive && "bg-accent") },
        React.createElement(link_1["default"], { href: href },
            React.createElement("div", { className: utils_1.cn("flex items-center w-full gap-x-4", collapsed && "justify-center") },
                React.createElement(user_avater_1["default"], { imgUrl: imgUrl, username: username, isLive: isLive, showBedge: true }),
                !collapsed && React.createElement("p", { className: "truncate" }, username),
                !collapsed && isLive && React.createElement(live_badge_1["default"], { clasname: "ml-auto" })))));
};
exports["default"] = UserItem;
