/*!
 * Circle Progress - v0.2.0 - 2020-08-22
 * https://tigrr.github.io/circle-progress/
 * Copyright (c) Tigran Sargsyan
 * Licensed MIT
 */

'use strict'
function ownKeys(e, t) {
    var r,
        n = Object.keys(e)
    return (
        Object.getOwnPropertySymbols &&
            ((r = Object.getOwnPropertySymbols(e)),
            t &&
                (r = r.filter(function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })),
            n.push.apply(n, r)),
        n
    )
}
function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {}
        t % 2
            ? ownKeys(Object(r), !0).forEach(function (t) {
                  _defineProperty(e, t, r[t])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
            : ownKeys(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                      e,
                      t,
                      Object.getOwnPropertyDescriptor(r, t)
                  )
              })
    }
    return e
}
function _defineProperty(t, e, r) {
    return (
        e in t
            ? Object.defineProperty(t, e, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (t[e] = r),
        t
    )
}
function _classCallCheck(t, e) {
    if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function')
}
function _defineProperties(t, e) {
    for (var r = 0; r < e.length; r++) {
        var n = e[r]
        ;(n.enumerable = n.enumerable || !1),
            (n.configurable = !0),
            'value' in n && (n.writable = !0),
            Object.defineProperty(t, n.key, n)
    }
}
function _createClass(t, e, r) {
    return (
        e && _defineProperties(t.prototype, e), r && _defineProperties(t, r), t
    )
}
function _typeof(t) {
    return (_typeof =
        'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                  return typeof t
              }
            : function (t) {
                  return t &&
                      'function' == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? 'symbol'
                      : typeof t
              })(t)
}
!(function (t, e) {
    'function' == typeof define && define.amd
        ? define([], e)
        : 'object' ===
              ('undefined' == typeof module ? 'undefined' : _typeof(module)) &&
          module.exports
        ? (module.exports = e())
        : (t.CircleProgress = e())
})('undefined' != typeof self ? self : void 0, function () {
    !(function () {
        try {
            if (
                'undefined' == typeof SVGElement ||
                Boolean(SVGElement.prototype.innerHTML)
            )
                return
        } catch (t) {
            return
        }
        function r(t) {
            switch (t.nodeType) {
                case 1:
                    return (function (t) {
                        var e = ''
                        ;(e += '<' + t.tagName),
                            t.hasAttributes() &&
                                [].forEach.call(t.attributes, function (t) {
                                    e += ' ' + t.name + '="' + t.value + '"'
                                })
                        ;(e += '>'),
                            t.hasChildNodes() &&
                                [].forEach.call(t.childNodes, function (t) {
                                    e += r(t)
                                })
                        return (e += '</' + t.tagName + '>')
                    })(t)
                case 3:
                    return t.textContent
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;')
                case 8:
                    return '\x3c!--' + t.nodeValue + '--\x3e'
            }
        }
        Object.defineProperty(SVGElement.prototype, 'innerHTML', {
            get: function () {
                var e = ''
                return (
                    [].forEach.call(this.childNodes, function (t) {
                        e += r(t)
                    }),
                    e
                )
            },
            set: function (t) {
                for (; this.firstChild; ) this.removeChild(this.firstChild)
                try {
                    var e = new DOMParser()
                    e.async = !1
                    var r =
                            "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>" +
                            t +
                            '</svg>',
                        n = e.parseFromString(r, 'text/xml').documentElement
                    ;[].forEach.call(
                        n.childNodes,
                        function (t) {
                            this.appendChild(
                                this.ownerDocument.importNode(t, !0)
                            )
                        }.bind(this)
                    )
                } catch (t) {
                    throw new Error('Error parsing markup string')
                }
            },
        }),
            Object.defineProperty(SVGElement.prototype, 'innerSVG', {
                get: function () {
                    return this.innerHTML
                },
                set: function (t) {
                    this.innerHTML = t
                },
            })
    })()
    function u(t, n, i, a, s) {
        var o,
            h = 'string' == typeof t ? u.easings[t] : t
        requestAnimationFrame(function t(e) {
            ;(e -= o = o || e), (e = Math.min(e, a))
            var r = h(e, n, i, a)
            s(r), e < a ? requestAnimationFrame(t) : s(n + i)
        })
    }
    var t,
        s,
        a,
        o,
        l,
        e,
        i =
            ((t = function (t, e, r, n) {
                var i, a
                if (
                    ((n = n || document),
                    (a = Object.create(s)),
                    'string' == typeof t && (t = n.querySelector(t)),
                    t)
                )
                    return (
                        (i = n.createElementNS(
                            'http://www.w3.org/2000/svg',
                            'svg'
                        )).setAttribute('version', '1.1'),
                        e && i.setAttribute('width', e),
                        r && i.setAttribute('height', r),
                        e &&
                            r &&
                            i.setAttribute('viewBox', '0 0 ' + e + ' ' + r),
                        t.appendChild(i),
                        (a.svg = i),
                        a
                    )
            }),
            (s = {
                element: function (t, e, r, n) {
                    var i = a(this, t, e, n)
                    return r && (i.el.innerHTML = r), i
                },
            }),
            (a = function (t, e, r, n, i) {
                var a
                return (
                    (i = i || document),
                    ((a = Object.create(o)).el = i.createElementNS(
                        'http://www.w3.org/2000/svg',
                        e
                    )),
                    a.attr(r),
                    (n ? n.el || n : t.svg).appendChild(a.el),
                    a
                )
            }),
            (o = {
                attr: function (t, e) {
                    if (void 0 === t) return this
                    if ('object' !== _typeof(t))
                        return void 0 === e
                            ? this.el.getAttributeNS(null, t)
                            : (this.el.setAttribute(t, e), this)
                    for (var r in t) this.attr(r, t[r])
                    return this
                },
                content: function (t) {
                    return (this.el.innerHTML = t), this
                },
            }),
            t)
    return (
        (u.easings = {
            linear: function (t, e, r, n) {
                return (r * t) / n + e
            },
            easeInQuad: function (t, e, r, n) {
                return r * (t /= n) * t + e
            },
            easeOutQuad: function (t, e, r, n) {
                return -r * (t /= n) * (t - 2) + e
            },
            easeInOutQuad: function (t, e, r, n) {
                return (t /= n / 2) < 1
                    ? (r / 2) * t * t + e
                    : (-r / 2) * (--t * (t - 2) - 1) + e
            },
            easeInCubic: function (t, e, r, n) {
                return r * (t /= n) * t * t + e
            },
            easeOutCubic: function (t, e, r, n) {
                return (t /= n), r * (--t * t * t + 1) + e
            },
            easeInOutCubic: function (t, e, r, n) {
                return (t /= n / 2) < 1
                    ? (r / 2) * t * t * t + e
                    : (r / 2) * ((t -= 2) * t * t + 2) + e
            },
            easeInQuart: function (t, e, r, n) {
                return r * (t /= n) * t * t * t + e
            },
            easeOutQuart: function (t, e, r, n) {
                return (t /= n), -r * (--t * t * t * t - 1) + e
            },
            easeInOutQuart: function (t, e, r, n) {
                return (t /= n / 2) < 1
                    ? (r / 2) * t * t * t * t + e
                    : (-r / 2) * ((t -= 2) * t * t * t - 2) + e
            },
            easeInQuint: function (t, e, r, n) {
                return r * (t /= n) * t * t * t * t + e
            },
            easeOutQuint: function (t, e, r, n) {
                return (t /= n), r * (--t * t * t * t * t + 1) + e
            },
            easeInOutQuint: function (t, e, r, n) {
                return (t /= n / 2) < 1
                    ? (r / 2) * t * t * t * t * t + e
                    : (r / 2) * ((t -= 2) * t * t * t * t + 2) + e
            },
            easeInSine: function (t, e, r, n) {
                return -r * Math.cos((t / n) * (Math.PI / 2)) + r + e
            },
            easeOutSine: function (t, e, r, n) {
                return r * Math.sin((t / n) * (Math.PI / 2)) + e
            },
            easeInOutSine: function (t, e, r, n) {
                return (-r / 2) * (Math.cos((Math.PI * t) / n) - 1) + e
            },
            easeInExpo: function (t, e, r, n) {
                return r * Math.pow(2, 10 * (t / n - 1)) + e
            },
            easeOutExpo: function (t, e, r, n) {
                return r * (1 - Math.pow(2, (-10 * t) / n)) + e
            },
            easeInOutExpo: function (t, e, r, n) {
                return (t /= n / 2) < 1
                    ? (r / 2) * Math.pow(2, 10 * (t - 1)) + e
                    : (t--, (r / 2) * (2 - Math.pow(2, -10 * t)) + e)
            },
            easeInCirc: function (t, e, r, n) {
                return (t /= n), -r * (Math.sqrt(1 - t * t) - 1) + e
            },
            easeOutCirc: function (t, e, r, n) {
                return (t /= n), t--, r * Math.sqrt(1 - t * t) + e
            },
            easeInOutCirc: function (t, e, r, n) {
                return (t /= n / 2) < 1
                    ? (-r / 2) * (Math.sqrt(1 - t * t) - 1) + e
                    : ((t -= 2), (r / 2) * (Math.sqrt(1 - t * t) + 1) + e)
            },
        }),
        (l = {
            polarToCartesian: function (t, e) {
                return {
                    x: t * Math.cos((e * Math.PI) / 180),
                    y: t * Math.sin((e * Math.PI) / 180),
                }
            },
        }),
        ((e = (function () {
            function a(t) {
                var e,
                    r =
                        1 < arguments.length && void 0 !== arguments[1]
                            ? arguments[1]
                            : {},
                    n =
                        2 < arguments.length && void 0 !== arguments[2]
                            ? arguments[2]
                            : document
                if (
                    (_classCallCheck(this, a),
                    'string' == typeof t && (t = n.querySelector(t)),
                    !t)
                )
                    throw new Error(
                        'CircleProgress: you must pass the container element as the first argument'
                    )
                if (t.circleProgress) return t.circleProgress
                ;((t.circleProgress = this).doc = n),
                    t.setAttribute('role', 'progressbar'),
                    (this.el = t),
                    (r = _objectSpread(_objectSpread({}, a.defaults), r)),
                    Object.defineProperty(this, '_attrs', {
                        value: {},
                        enumerable: !1,
                    }),
                    (e = 'valueOnCircle' === r.textFormat ? 16 : 8),
                    (this.graph = { paper: i(t, 100, 100), angle: 0 }),
                    this.graph.paper.svg.setAttribute(
                        'class',
                        'circle-progress'
                    ),
                    (this.graph.circle = this.graph.paper
                        .element('circle')
                        .attr({
                            class: 'circle-progress-circle',
                            cx: 50,
                            cy: 50,
                            r: 50 - e / 2,
                            fill: 'none',
                            stroke: '#ddd',
                            'stroke-width': e,
                        })),
                    (this.graph.sector = this.graph.paper
                        .element('path')
                        .attr({
                            d: a._makeSectorPath(50, 50, 50 - e / 2, 0, 0),
                            class: 'circle-progress-value',
                            fill: 'none',
                            stroke: '#00E699',
                            'stroke-width': e,
                        })),
                    (this.graph.text = this.graph.paper.element('text', {
                        class: 'circle-progress-text',
                        x: 50,
                        y: 50,
                        font: '16px Arial, sans-serif',
                        'text-anchor': 'middle',
                        fill: '#999',
                    })),
                    this._initText(),
                    this.attr(
                        [
                            'indeterminateText',
                            'textFormat',
                            'startAngle',
                            'clockwise',
                            'animation',
                            'animationDuration',
                            'constrain',
                            'min',
                            'max',
                            'value',
                        ]
                            .filter(function (t) {
                                return t in r
                            })
                            .map(function (t) {
                                return [t, r[t]]
                            })
                    )
            }
            return (
                _createClass(a, [
                    {
                        key: 'value',
                        get: function () {
                            return this._attrs.value
                        },
                        set: function (t) {
                            this.attr('value', t)
                        },
                    },
                    {
                        key: 'min',
                        get: function () {
                            return this._attrs.min
                        },
                        set: function (t) {
                            this.attr('min', t)
                        },
                    },
                    {
                        key: 'max',
                        get: function () {
                            return this._attrs.max
                        },
                        set: function (t) {
                            this.attr('max', t)
                        },
                    },
                    {
                        key: 'startAngle',
                        get: function () {
                            return this._attrs.startAngle
                        },
                        set: function (t) {
                            this.attr('startAngle', t)
                        },
                    },
                    {
                        key: 'clockwise',
                        get: function () {
                            return this._attrs.clockwise
                        },
                        set: function (t) {
                            this.attr('clockwise', t)
                        },
                    },
                    {
                        key: 'constrain',
                        get: function () {
                            return this._attrs.constrain
                        },
                        set: function (t) {
                            this.attr('constrain', t)
                        },
                    },
                    {
                        key: 'indeterminateText',
                        get: function () {
                            return this._attrs.indeterminateText
                        },
                        set: function (t) {
                            this.attr('indeterminateText', t)
                        },
                    },
                    {
                        key: 'textFormat',
                        get: function () {
                            return this._attrs.textFormat
                        },
                        set: function (t) {
                            this.attr('textFormat', t)
                        },
                    },
                    {
                        key: 'animation',
                        get: function () {
                            return this._attrs.animation
                        },
                        set: function (t) {
                            this.attr('animation', t)
                        },
                    },
                    {
                        key: 'animationDuration',
                        get: function () {
                            return this._attrs.animationDuration
                        },
                        set: function (t) {
                            this.attr('animationDuration', t)
                        },
                    },
                ]),
                _createClass(
                    a,
                    [
                        {
                            key: 'attr',
                            value: function (e, t) {
                                var r = this
                                if ('string' == typeof e)
                                    return 1 === arguments.length
                                        ? this._attrs[e]
                                        : (this._set(arguments[0], t),
                                          this._updateGraph(),
                                          this)
                                if ('object' !== _typeof(e))
                                    throw new TypeError(
                                        'Wrong argument passed to attr. Expected object, got "'.concat(
                                            _typeof(e),
                                            '"'
                                        )
                                    )
                                return (
                                    Array.isArray(e) ||
                                        (e = Object.keys(e).map(function (t) {
                                            return [t, e[t]]
                                        })),
                                    e.forEach(function (t) {
                                        return r._set(t[0], t[1])
                                    }),
                                    this._updateGraph(),
                                    this
                                )
                            },
                        },
                        {
                            key: '_set',
                            value: function (t, e) {
                                var r,
                                    n = {
                                        value: 'aria-valuenow',
                                        min: 'aria-valuemin',
                                        max: 'aria-valuemax',
                                    }
                                if (void 0 === (e = this._formatValue(t, e)))
                                    throw new TypeError(
                                        'Failed to set the '.concat(
                                            t,
                                            ' property on CircleProgress: The provided value is non-finite.'
                                        )
                                    )
                                this._attrs[t] !== e &&
                                    (('min' === t && e >= this.max) ||
                                        ('max' === t && e <= this.min) ||
                                        ('value' === t &&
                                            void 0 !== e &&
                                            this.constrain &&
                                            (null != this.min &&
                                                e < this.min &&
                                                (e = this.min),
                                            null != this.max &&
                                                e > this.max &&
                                                (e = this.max)),
                                        (this._attrs[t] = e),
                                        t in n &&
                                            (void 0 !== e
                                                ? this.el.setAttribute(n[t], e)
                                                : this.el.removeAttribute(
                                                      n[t]
                                                  )),
                                        -1 !==
                                            ['min', 'max', 'constrain'].indexOf(
                                                t
                                            ) &&
                                            (this.value > this.max ||
                                                this.value < this.min) &&
                                            (this.value = Math.min(
                                                this.max,
                                                Math.max(this.min, this.value)
                                            )),
                                        'textFormat' === t &&
                                            (this._initText(),
                                            (r =
                                                'valueOnCircle' === e ? 16 : 8),
                                            this.graph.sector.attr(
                                                'stroke-width',
                                                r
                                            ),
                                            this.graph.circle.attr(
                                                'stroke-width',
                                                r
                                            ))))
                            },
                        },
                        {
                            key: '_formatValue',
                            value: function (t, e) {
                                switch (t) {
                                    case 'value':
                                    case 'min':
                                    case 'max':
                                        ;(e = parseFloat(e)),
                                            isFinite(e) || (e = void 0)
                                        break
                                    case 'startAngle':
                                        ;(e = parseFloat(e)),
                                            (e = isFinite(e)
                                                ? Math.max(0, Math.min(360, e))
                                                : void 0)
                                        break
                                    case 'clockwise':
                                    case 'constrain':
                                        e = !!e
                                        break
                                    case 'indeterminateText':
                                        e = '' + e
                                        break
                                    case 'textFormat':
                                        if (
                                            'function' != typeof e &&
                                            -1 ===
                                                [
                                                    'valueOnCircle',
                                                    'horizontal',
                                                    'vertical',
                                                    'percent',
                                                    'value',
                                                    'none',
                                                ].indexOf(e)
                                        )
                                            throw new Error(
                                                'Failed to set the "textFormat" property on CircleProgress: the provided value "'.concat(
                                                    e,
                                                    '" is not a legal textFormat identifier.'
                                                )
                                            )
                                        break
                                    case 'animation':
                                        if (
                                            'string' != typeof e &&
                                            'function' != typeof e
                                        )
                                            throw new TypeError(
                                                'Failed to set "animation" property on CircleProgress: the value must be either string or function, '.concat(
                                                    _typeof(e),
                                                    ' passed.'
                                                )
                                            )
                                        if (
                                            'string' == typeof e &&
                                            'none' !== e &&
                                            !u.easings[e]
                                        )
                                            throw new Error(
                                                'Failed to set "animation" on CircleProgress: the provided value '.concat(
                                                    e,
                                                    ' is not a legal easing function name.'
                                                )
                                            )
                                }
                                return e
                            },
                        },
                        {
                            key: '_valToAngle',
                            value: function () {
                                var t
                                return this._isIndeterminate()
                                    ? 0
                                    : 0 === this.max
                                    ? this.value
                                        ? 360
                                        : 0
                                    : ((t =
                                          ((this.value - this.min) / this.max) *
                                          360),
                                      Math.min(360, Math.max(0, t)))
                            },
                        },
                        {
                            key: '_isIndeterminate',
                            value: function () {
                                return !(
                                    'number' == typeof this.value &&
                                    'number' == typeof this.max &&
                                    'number' == typeof this.min
                                )
                            },
                        },
                        {
                            key: '_positionValueText',
                            value: function (t) {
                                var e = l.polarToCartesian(this._getRadius(), t)
                                this.graph.textVal.attr({
                                    x: 50 + e.x,
                                    y: 50 + e.y,
                                })
                            },
                        },
                        {
                            key: '_initText',
                            value: function () {
                                switch (
                                    (this.graph.text.content(''),
                                    this.textFormat)
                                ) {
                                    case 'valueOnCircle':
                                        ;(this.graph.textVal =
                                            this.graph.paper.element(
                                                'tspan',
                                                {
                                                    x: 0,
                                                    y: 0,
                                                    class: 'circle-progress-text-value',
                                                    'font-size': '12',
                                                    fill:
                                                        'valueOnCircle' ===
                                                        this.textFormat
                                                            ? '#fff'
                                                            : '#888',
                                                },
                                                '',
                                                this.graph.text
                                            )),
                                            (this.graph.textMax =
                                                this.graph.paper.element(
                                                    'tspan',
                                                    {
                                                        x: 50,
                                                        y: 50,
                                                        class: 'circle-progress-text-max',
                                                        'font-size': '22',
                                                        'font-weight': 'bold',
                                                        fill: '#ddd',
                                                    },
                                                    '',
                                                    this.graph.text
                                                )),
                                            this.graph.text.el.hasAttribute(
                                                'dominant-baseline'
                                            ) ||
                                                this.graph.textMax.attr(
                                                    'dy',
                                                    '0.4em'
                                                )
                                        break
                                    case 'horizontal':
                                        ;(this.graph.textVal =
                                            this.graph.paper.element(
                                                'tspan',
                                                {
                                                    class: 'circle-progress-text-value',
                                                },
                                                '',
                                                this.graph.text
                                            )),
                                            (this.graph.textSeparator =
                                                this.graph.paper.element(
                                                    'tspan',
                                                    {
                                                        class: 'circle-progress-text-separator',
                                                    },
                                                    '/',
                                                    this.graph.text
                                                )),
                                            (this.graph.textMax =
                                                this.graph.paper.element(
                                                    'tspan',
                                                    {
                                                        class: 'circle-progress-text-max',
                                                    },
                                                    '',
                                                    this.graph.text
                                                ))
                                        break
                                    case 'vertical':
                                        this.graph.text.el.hasAttribute(
                                            'dominant-baseline'
                                        ) &&
                                            this.graph.text.attr(
                                                'dominant-baseline',
                                                'text-after-edge'
                                            ),
                                            (this.graph.textVal =
                                                this.graph.paper.element(
                                                    'tspan',
                                                    {
                                                        class: 'circle-progress-text-value',
                                                        x: 50,
                                                        dy: '-0.2em',
                                                    },
                                                    '',
                                                    this.graph.text
                                                )),
                                            (this.graph.textSeparator =
                                                this.graph.paper.element(
                                                    'tspan',
                                                    {
                                                        class: 'circle-progress-text-separator',
                                                        x: 50,
                                                        dy: '0.1em',
                                                        'font-family':
                                                            'Arial, sans-serif',
                                                    },
                                                    '___',
                                                    this.graph.text
                                                )),
                                            (this.graph.textMax =
                                                this.graph.paper.element(
                                                    'tspan',
                                                    {
                                                        class: 'circle-progress-text-max',
                                                        x: 50,
                                                        dy: '1.2em',
                                                    },
                                                    '',
                                                    this.graph.text
                                                ))
                                }
                                'vertical' !== this.textFormat &&
                                    (this.graph.text.el.hasAttribute(
                                        'dominant-baseline'
                                    )
                                        ? this.graph.text.attr(
                                              'dominant-baseline',
                                              'central'
                                          )
                                        : this.graph.text.attr('dy', '0.4em'))
                            },
                        },
                        {
                            key: '_updateGraph',
                            value: function () {
                                var t,
                                    e,
                                    r,
                                    n = this,
                                    i = this.startAngle - 90
                                this._isIndeterminate()
                                    ? 'valueOnCircle' === this.textFormat &&
                                      this._positionValueText(i)
                                    : ((t = this._valToAngle(this.value)),
                                      (e = this._getRadius()),
                                      (r = this.clockwise),
                                      this.graph.circle.attr('r', e),
                                      'none' !== this.animation &&
                                      t !== this.graph.angle
                                          ? u(
                                                this.animation,
                                                this.graph.angle,
                                                t - this.graph.angle,
                                                this.animationDuration,
                                                function (t) {
                                                    n.graph.sector.attr(
                                                        'd',
                                                        a._makeSectorPath(
                                                            50,
                                                            50,
                                                            e,
                                                            i,
                                                            t,
                                                            r
                                                        )
                                                    )
                                                }
                                            )
                                          : this.graph.sector.attr(
                                                'd',
                                                a._makeSectorPath(
                                                    50,
                                                    50,
                                                    e,
                                                    i,
                                                    t,
                                                    r
                                                )
                                            ),
                                      (this.graph.angle = t),
                                      'valueOnCircle' === this.textFormat &&
                                          this._positionValueText(
                                              (2 * i + t) / 2
                                          )),
                                    'function' == typeof this.textFormat
                                        ? this.graph.text.content(
                                              this.textFormat(
                                                  this.value,
                                                  this.max
                                              )
                                          )
                                        : 'value' === this.textFormat
                                        ? (this.graph.text.el.textContent =
                                              void 0 !== this.value
                                                  ? this.value
                                                  : this.indeterminateText)
                                        : 'percent' === this.textFormat
                                        ? (this.graph.text.el.textContent =
                                              (void 0 !== this.value &&
                                              null != this.max
                                                  ? Math.round(
                                                        (this.value /
                                                            this.max) *
                                                            100
                                                    )
                                                  : this.indeterminateText) +
                                              '%')
                                        : 'none' === this.textFormat
                                        ? (this.graph.text.el.textContent = '')
                                        : ((this.graph.textVal.el.textContent =
                                              void 0 !== this.value
                                                  ? this.value
                                                  : this.indeterminateText),
                                          (this.graph.textMax.el.textContent =
                                              void 0 !== this.max
                                                  ? this.max
                                                  : this.indeterminateText))
                            },
                        },
                        {
                            key: '_getRadius',
                            value: function () {
                                return (
                                    50 -
                                    Math.max(
                                        parseFloat(
                                            this.doc.defaultView.getComputedStyle(
                                                this.graph.circle.el,
                                                null
                                            )['stroke-width']
                                        ),
                                        parseFloat(
                                            this.doc.defaultView.getComputedStyle(
                                                this.graph.sector.el,
                                                null
                                            )['stroke-width']
                                        )
                                    ) /
                                        2
                                )
                            },
                        },
                    ],
                    [
                        {
                            key: '_makeSectorPath',
                            value: function (t, e, r, n, i, a) {
                                0 < i && i < 0.3
                                    ? (i = 0)
                                    : 359.999 < i && (i = 359.999)
                                var s = n + i * (2 * (a = !!a) - 1),
                                    o = l.polarToCartesian(r, n),
                                    h = l.polarToCartesian(r, s),
                                    u = t + o.x,
                                    c = t + h.x
                                return [
                                    'M',
                                    u,
                                    e + o.y,
                                    'A',
                                    r,
                                    r,
                                    0,
                                    +(180 < i),
                                    +a,
                                    c,
                                    e + h.y,
                                ].join(' ')
                            },
                        },
                    ]
                ),
                a
            )
        })()).defaults = {
            startAngle: 0,
            min: 0,
            max: 1,
            constrain: !0,
            indeterminateText: '?',
            clockwise: !0,
            textFormat: 'horizontal',
            animation: 'easeInOutCubic',
            animationDuration: 600,
        }),
        e
    )
})
