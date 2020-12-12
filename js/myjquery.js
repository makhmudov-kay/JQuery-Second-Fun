function $(selector) {
    let element;
    if (typeof selector == "string") {
        element = document.querySelectorAll(selector);
    } else if (selector instanceof HTMLElement) {
        element = [ selector ]
    } else {
        element = null
    }
    return new jQ(element)
}

function jQ(params) {
    this.element = params;
    this.on = function (event, callBackFun) {
        for (let i = 0; i < this.element.length; i++) {
            this.element[i].addEventListener(event, callBackFun) 
        }
        return this
    }
    this.html = function (html) {
        if (typeof html =="string" || typeof html == "number") {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].innerHTML = html;
            }
        }
        return this
    }
    this.css = function (styleName, value) {
        if (typeof styleName == "string" && (typeof value == "string" || typeof value == "number")) {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style = `${styleName}: ${value};`;
            }
        } else if (typeof styleName == "object" && styleName != null && !Array.isArray(styleName)) {
            for (let i = 0; i < this.element.length; i++) {
                for (const key in styleName) {
                    this.element[i].style[key] = styleName[key]
                }
            }
        }
        return this
    }
    this.toggleClass = function (className) {
        if (typeof className == "string") {
            for (let i = 0; i < this.element.length; i++) {
                if (this.element[i].classList.contains(className)) {
                    this.element[i].classList.remove(className)
                } else {
                    this.element[i].classList.add(className)
                }
            }
        }
        return this
    }
    this.addClass = function (className) {
        if (typeof className == "string") {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].classList.add(className)
            }
        }
        return this
    }
    this.removeClass = function (className) {
        if (typeof className == "string") {
            for (let i = 0; i < this.element.length; i++) {
                if (this.element[i].classList.contains(className)) {
                    this.element[i].classList.remove(className)
                }
            }
        }
        return this
    }
    this.width = function (widthNum) {
        if (typeof widthNum == "number") {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.width = widthNum + "px";
            }
        } else if (typeof widthNum == "string") {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.width = widthNum;
            }
        } else {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.width = this.element[0].style.width
            }
        }
        return this
    }
    this.height = function (heightNum) {
        if (typeof heightNum == "number") {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.height = heightNum + "px";
            }
        } else if (typeof heightNum == "string") {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.height = heightNum;
            }
        } else {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].style.height = this.element[0].style.height
            }
        }
        return this
    }
    this.hover = function (mouseoverFun, mouseoutFun) {
        if (typeof mouseoverFun == "function" && typeof mouseoutFun == "function") {
            this.on("mouseover", mouseoverFun);
            this.on("mouseout", mouseoutFun);
        }
        return this;
    }
    this.dblclick = function (callBackFun) {
        if (typeof callBackFun == "function") {
            this.on("dblclick", callBackFun);
        }
        return this
    }
    this.attr = function (attrName, value) {
        if (typeof attrName == "string" && (typeof value == "string" || typeof value == "number")) {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].setAttribute(attrName, value)
            }
        } else if (typeof attrName == "object" && attrName != null && !Array.isArray(attrName)) {
            for (let i = 0; i < this.element.length; i++) {
                for (const key in attrName) {
                    this.element[i].setAttribute(key, attrName[key])
                }
            }
        } else if (typeof attrName == "string" && value === undefined) {
            return this.element[0].getAttribute(attrName);
        }
        return this
    }
    this.removeAttr = function (attrName) {
        if (typeof attrName == "string") {
            for (let i = 0; i < this.element.length; i++) {
                this.element[i].removeAttribute(attrName)     
            }
        }
        return this
    }
    this.next =function () {
        this.element = [this.element[0].nextElementSibling]
        return this;
    }

    /* Вашим домашним заданием будет сделать несколько методов: 
    1)  Проверяет наличие класса у элемента. Возвращает истину или ложь.
    2)  Выполняет переданную функцию при наведении на элемент.
    3)  Возвращает предыдущий элемент.
    4)  Возвращает дочерний элемент. */

    this.contains = function (className) {
        if (typeof className == "string") {
            for (let i = 0; i < this.element.length; i++) {
                if (this.element[i].classList.contains(className)) {
                    console.log(true);
                } else {
                    console.log(false);
                }
            }
        }
        return this
    }
    this.mouseover = function (callBackFun) {
        for (let i = 0; i < this.element.length; i++) {
            this.element[i].addEventListener("mouseover", callBackFun)
        }
        return this
    } 
    this.prev = function () {
        this.element = [this.element[0].previousElementSibling]
        return this;
    }
    this.child = function () {
        for (let i = 0; i < this.element.length; i++) {
            this.element = this.element[i].children
        }
        return this
    }
}

