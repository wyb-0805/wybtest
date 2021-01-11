//传入元素id,返回指定id元素
function $id(id) {
    return document.getElementById(id)
}

//获取滚动的距离{top:"",left:""}

function getScroll() {
    if (window.pageYOffset) {
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        }
    } else if (document.documentElement.scrollLeft) {
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        }
    } else {
        return {
            top: document.body.scrollTop,
            left: document.body.scrollLeft
        }
    }
}