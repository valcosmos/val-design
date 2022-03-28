import React, { useState } from 'react';
import { Button } from './components/Button/button';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/menuItem';
import SubMenu from './components/Menu/subMenu';
import Icon from './components/Icon/icon';
import Transition from './components/Transition/transition';
library.add(fas);
function App() {
    var _a = useState(false), show = _a[0], setShow = _a[1];
    return (React.createElement("div", null,
        React.createElement("header", { className: "App-header" },
            React.createElement("div", null,
                React.createElement(Icon, { icon: "check" })),
            React.createElement(Menu, { defaultIndex: '0', defaultOpenSubMenus: ['2'] },
                React.createElement(MenuItem, null, "cool link1"),
                React.createElement(MenuItem, { disabled: true }, "cool link2"),
                React.createElement(SubMenu, { title: "dropdown" },
                    React.createElement(MenuItem, null, "dropdown1"),
                    React.createElement(MenuItem, null, "dropdown2"),
                    React.createElement(MenuItem, null, "dropdown3")),
                React.createElement(MenuItem, null, "cool link3")),
            React.createElement("div", { className: "btns" },
                React.createElement(Button, null, "Hello"),
                React.createElement(Button, { disabled: true }, "disabled Button"),
                React.createElement(Button, { btnType: "primary", size: "large" }, "Hello"),
                React.createElement(Button, { btnType: "danger", size: "small" }, "Hello"),
                React.createElement(Button, { btnType: "link", size: "small", href: "https://valzt.cn", target: "_blank" }, "valzt.cn"),
                React.createElement(Button, { btnType: "link", disabled: true, size: "small", href: "https://valzt.cn" }, "valzt.cn"))),
        React.createElement(Button, { size: "large", onClick: function () {
                setShow(!show);
            } }, "Toggle"),
        React.createElement(Transition, { in: show, timeout: 300, animation: "zoom-in-left", wrapper: true },
            React.createElement("p", null, "aaaaaaaaaaaaaaaaaa"),
            React.createElement("p", null, "aaaaaaaaaaaaaaaaaa"),
            React.createElement("p", null, "aaaaaaaaaaaaaaaaaa"),
            React.createElement("p", null, "aaaaaaaaaaaaaaaaaa"),
            React.createElement("p", null, "aaaaaaaaaaaaaaaaaa"),
            React.createElement("p", null, "aaaaaaaaaaaaaaaaaa"),
            React.createElement("p", null, "aaaaaaaaaaaaaaaaaa"),
            React.createElement("p", null, "aaaaaaaaaaaaaaaaaa"),
            React.createElement("p", null, "aaaaaaaaaaaaaaaaaa"))));
}
export default App;
