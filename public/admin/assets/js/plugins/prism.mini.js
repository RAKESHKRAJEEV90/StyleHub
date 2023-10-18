/* PrismJS 1.23.0
https://prismjs.com/download.html#themes=prism-okaidia&languages=markup+css+clike+javascript */
var _self =
        'undefined' != typeof window
            ? window
            : 'undefined' != typeof WorkerGlobalScope &&
              self instanceof WorkerGlobalScope
            ? self
            : {},
    Prism = (function (u) {
        var c = /\blang(?:uage)?-([\w-]+)\b/i,
            n = 0,
            e = {},
            M = {
                manual: u.Prism && u.Prism.manual,
                disableWorkerMessageHandler:
                    u.Prism && u.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function e(n) {
                        return n instanceof W
                            ? new W(n.type, e(n.content), n.alias)
                            : Array.isArray(n)
                            ? n.map(e)
                            : n
                                  .replace(/&/g, '&amp;')
                                  .replace(/</g, '&lt;')
                                  .replace(/\u00a0/g, ' ')
                    },
                    type: function (e) {
                        return Object.prototype.toString.call(e).slice(8, -1)
                    },
                    objId: function (e) {
                        return (
                            e.__id ||
                                Object.defineProperty(e, '__id', {
                                    value: ++n,
                                }),
                            e.__id
                        )
                    },
                    clone: function t(e, r) {
                        var a, n
                        switch (((r = r || {}), M.util.type(e))) {
                            case 'Object':
                                if (((n = M.util.objId(e)), r[n])) return r[n]
                                for (var i in ((a = {}), (r[n] = a), e))
                                    e.hasOwnProperty(i) && (a[i] = t(e[i], r))
                                return a
                            case 'Array':
                                return (
                                    (n = M.util.objId(e)),
                                    r[n]
                                        ? r[n]
                                        : ((a = []),
                                          (r[n] = a),
                                          e.forEach(function (e, n) {
                                              a[n] = t(e, r)
                                          }),
                                          a)
                                )
                            default:
                                return e
                        }
                    },
                    getLanguage: function (e) {
                        for (; e && !c.test(e.className); ) e = e.parentElement
                        return e
                            ? (e.className.match(c) || [
                                  ,
                                  'none',
                              ])[1].toLowerCase()
                            : 'none'
                    },
                    currentScript: function () {
                        if ('undefined' == typeof document) return null
                        if ('currentScript' in document)
                            return document.currentScript
                        try {
                            throw new Error()
                        } catch (e) {
                            var n = (/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(
                                e.stack
                            ) || [])[1]
                            if (n) {
                                var t = document.getElementsByTagName('script')
                                for (var r in t) if (t[r].src == n) return t[r]
                            }
                            return null
                        }
                    },
                    isActive: function (e, n, t) {
                        for (var r = 'no-' + n; e; ) {
                            var a = e.classList
                            if (a.contains(n)) return !0
                            if (a.contains(r)) return !1
                            e = e.parentElement
                        }
                        return !!t
                    },
                },
                languages: {
                    plain: e,
                    plaintext: e,
                    text: e,
                    txt: e,
                    extend: function (e, n) {
                        var t = M.util.clone(M.languages[e])
                        for (var r in n) t[r] = n[r]
                        return t
                    },
                    insertBefore: function (t, e, n, r) {
                        var a = (r = r || M.languages)[t],
                            i = {}
                        for (var l in a)
                            if (a.hasOwnProperty(l)) {
                                if (l == e)
                                    for (var o in n)
                                        n.hasOwnProperty(o) && (i[o] = n[o])
                                n.hasOwnProperty(l) || (i[l] = a[l])
                            }
                        var s = r[t]
                        return (
                            (r[t] = i),
                            M.languages.DFS(M.languages, function (e, n) {
                                n === s && e != t && (this[e] = i)
                            }),
                            i
                        )
                    },
                    DFS: function e(n, t, r, a) {
                        a = a || {}
                        var i = M.util.objId
                        for (var l in n)
                            if (n.hasOwnProperty(l)) {
                                t.call(n, l, n[l], r || l)
                                var o = n[l],
                                    s = M.util.type(o)
                                'Object' !== s || a[i(o)]
                                    ? 'Array' !== s ||
                                      a[i(o)] ||
                                      ((a[i(o)] = !0), e(o, t, l, a))
                                    : ((a[i(o)] = !0), e(o, t, null, a))
                            }
                    },
                },
                plugins: {},
                highlightAll: function (e, n) {
                    M.highlightAllUnder(document, e, n)
                },
                highlightAllUnder: function (e, n, t) {
                    var r = {
                        callback: t,
                        container: e,
                        selector:
                            'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code',
                    }
                    M.hooks.run('before-highlightall', r),
                        (r.elements = Array.prototype.slice.apply(
                            r.container.querySelectorAll(r.selector)
                        )),
                        M.hooks.run('before-all-elements-highlight', r)
                    for (var a, i = 0; (a = r.elements[i++]); )
                        M.highlightElement(a, !0 === n, r.callback)
                },
                highlightElement: function (e, n, t) {
                    var r = M.util.getLanguage(e),
                        a = M.languages[r]
                    e.className =
                        e.className.replace(c, '').replace(/\s+/g, ' ') +
                        ' language-' +
                        r
                    var i = e.parentElement
                    i &&
                        'pre' === i.nodeName.toLowerCase() &&
                        (i.className =
                            i.className.replace(c, '').replace(/\s+/g, ' ') +
                            ' language-' +
                            r)
                    var l = {
                        element: e,
                        language: r,
                        grammar: a,
                        code: e.textContent,
                    }
                    function o(e) {
                        ;(l.highlightedCode = e),
                            M.hooks.run('before-insert', l),
                            (l.element.innerHTML = l.highlightedCode),
                            M.hooks.run('after-highlight', l),
                            M.hooks.run('complete', l),
                            t && t.call(l.element)
                    }
                    if (
                        (M.hooks.run('before-sanity-check', l),
                        (i = l.element.parentElement) &&
                            'pre' === i.nodeName.toLowerCase() &&
                            !i.hasAttribute('tabindex') &&
                            i.setAttribute('tabindex', '0'),
                        !l.code)
                    )
                        return (
                            M.hooks.run('complete', l),
                            void (t && t.call(l.element))
                        )
                    if ((M.hooks.run('before-highlight', l), l.grammar))
                        if (n && u.Worker) {
                            var s = new Worker(M.filename)
                            ;(s.onmessage = function (e) {
                                o(e.data)
                            }),
                                s.postMessage(
                                    JSON.stringify({
                                        language: l.language,
                                        code: l.code,
                                        immediateClose: !0,
                                    })
                                )
                        } else o(M.highlight(l.code, l.grammar, l.language))
                    else o(M.util.encode(l.code))
                },
                highlight: function (e, n, t) {
                    var r = { code: e, grammar: n, language: t }
                    return (
                        M.hooks.run('before-tokenize', r),
                        (r.tokens = M.tokenize(r.code, r.grammar)),
                        M.hooks.run('after-tokenize', r),
                        W.stringify(M.util.encode(r.tokens), r.language)
                    )
                },
                tokenize: function (e, n) {
                    var t = n.rest
                    if (t) {
                        for (var r in t) n[r] = t[r]
                        delete n.rest
                    }
                    var a = new i()
                    return (
                        I(a, a.head, e),
                        (function e(n, t, r, a, i, l) {
                            for (var o in r)
                                if (r.hasOwnProperty(o) && r[o]) {
                                    var s = r[o]
                                    s = Array.isArray(s) ? s : [s]
                                    for (var u = 0; u < s.length; ++u) {
                                        if (l && l.cause == o + ',' + u) return
                                        var c = s[u],
                                            g = c.inside,
                                            f = !!c.lookbehind,
                                            h = !!c.greedy,
                                            d = c.alias
                                        if (h && !c.pattern.global) {
                                            var p = c.pattern
                                                .toString()
                                                .match(/[imsuy]*$/)[0]
                                            c.pattern = RegExp(
                                                c.pattern.source,
                                                p + 'g'
                                            )
                                        }
                                        for (
                                            var v = c.pattern || c,
                                                m = a.next,
                                                y = i;
                                            m !== t.tail &&
                                            !(l && y >= l.reach);
                                            y += m.value.length, m = m.next
                                        ) {
                                            var b = m.value
                                            if (t.length > n.length) return
                                            if (!(b instanceof W)) {
                                                var k,
                                                    x = 1
                                                if (h) {
                                                    if (!(k = z(v, y, n, f)))
                                                        break
                                                    var w = k.index,
                                                        A =
                                                            k.index +
                                                            k[0].length,
                                                        P = y
                                                    for (
                                                        P += m.value.length;
                                                        P <= w;

                                                    )
                                                        (m = m.next),
                                                            (P +=
                                                                m.value.length)
                                                    if (
                                                        ((P -= m.value.length),
                                                        (y = P),
                                                        m.value instanceof W)
                                                    )
                                                        continue
                                                    for (
                                                        var E = m;
                                                        E !== t.tail &&
                                                        (P < A ||
                                                            'string' ==
                                                                typeof E.value);
                                                        E = E.next
                                                    )
                                                        x++,
                                                            (P +=
                                                                E.value.length)
                                                    x--,
                                                        (b = n.slice(y, P)),
                                                        (k.index -= y)
                                                } else if (!(k = z(v, 0, b, f)))
                                                    continue
                                                var w = k.index,
                                                    S = k[0],
                                                    O = b.slice(0, w),
                                                    L = b.slice(w + S.length),
                                                    N = y + b.length
                                                l &&
                                                    N > l.reach &&
                                                    (l.reach = N)
                                                var j = m.prev
                                                O &&
                                                    ((j = I(t, j, O)),
                                                    (y += O.length)),
                                                    q(t, j, x)
                                                var C = new W(
                                                    o,
                                                    g ? M.tokenize(S, g) : S,
                                                    d,
                                                    S
                                                )
                                                if (
                                                    ((m = I(t, j, C)),
                                                    L && I(t, m, L),
                                                    1 < x)
                                                ) {
                                                    var _ = {
                                                        cause: o + ',' + u,
                                                        reach: N,
                                                    }
                                                    e(n, t, r, m.prev, y, _),
                                                        l &&
                                                            _.reach > l.reach &&
                                                            (l.reach = _.reach)
                                                }
                                            }
                                        }
                                    }
                                }
                        })(e, a, n, a.head, 0),
                        (function (e) {
                            var n = [],
                                t = e.head.next
                            for (; t !== e.tail; ) n.push(t.value), (t = t.next)
                            return n
                        })(a)
                    )
                },
                hooks: {
                    all: {},
                    add: function (e, n) {
                        var t = M.hooks.all
                        ;(t[e] = t[e] || []), t[e].push(n)
                    },
                    run: function (e, n) {
                        var t = M.hooks.all[e]
                        if (t && t.length)
                            for (var r, a = 0; (r = t[a++]); ) r(n)
                    },
                },
                Token: W,
            }
        function W(e, n, t, r) {
            ;(this.type = e),
                (this.content = n),
                (this.alias = t),
                (this.length = 0 | (r || '').length)
        }
        function z(e, n, t, r) {
            e.lastIndex = n
            var a = e.exec(t)
            if (a && r && a[1]) {
                var i = a[1].length
                ;(a.index += i), (a[0] = a[0].slice(i))
            }
            return a
        }
        function i() {
            var e = { value: null, prev: null, next: null },
                n = { value: null, prev: e, next: null }
            ;(e.next = n), (this.head = e), (this.tail = n), (this.length = 0)
        }
        function I(e, n, t) {
            var r = n.next,
                a = { value: t, prev: n, next: r }
            return (n.next = a), (r.prev = a), e.length++, a
        }
        function q(e, n, t) {
            for (var r = n.next, a = 0; a < t && r !== e.tail; a++) r = r.next
            ;((n.next = r).prev = n), (e.length -= a)
        }
        if (
            ((u.Prism = M),
            (W.stringify = function n(e, t) {
                if ('string' == typeof e) return e
                if (Array.isArray(e)) {
                    var r = ''
                    return (
                        e.forEach(function (e) {
                            r += n(e, t)
                        }),
                        r
                    )
                }
                var a = {
                        type: e.type,
                        content: n(e.content, t),
                        tag: 'span',
                        classes: ['token', e.type],
                        attributes: {},
                        language: t,
                    },
                    i = e.alias
                i &&
                    (Array.isArray(i)
                        ? Array.prototype.push.apply(a.classes, i)
                        : a.classes.push(i)),
                    M.hooks.run('wrap', a)
                var l = ''
                for (var o in a.attributes)
                    l +=
                        ' ' +
                        o +
                        '="' +
                        (a.attributes[o] || '').replace(/"/g, '&quot;') +
                        '"'
                return (
                    '<' +
                    a.tag +
                    ' class="' +
                    a.classes.join(' ') +
                    '"' +
                    l +
                    '>' +
                    a.content +
                    '</' +
                    a.tag +
                    '>'
                )
            }),
            !u.document)
        )
            return (
                u.addEventListener &&
                    (M.disableWorkerMessageHandler ||
                        u.addEventListener(
                            'message',
                            function (e) {
                                var n = JSON.parse(e.data),
                                    t = n.language,
                                    r = n.code,
                                    a = n.immediateClose
                                u.postMessage(
                                    M.highlight(r, M.languages[t], t)
                                ),
                                    a && u.close()
                            },
                            !1
                        )),
                M
            )
        var t = M.util.currentScript()
        function r() {
            M.manual || M.highlightAll()
        }
        if (
            (t &&
                ((M.filename = t.src),
                t.hasAttribute('data-manual') && (M.manual = !0)),
            !M.manual)
        ) {
            var a = document.readyState
            'loading' === a || ('interactive' === a && t && t.defer)
                ? document.addEventListener('DOMContentLoaded', r)
                : window.requestAnimationFrame
                ? window.requestAnimationFrame(r)
                : window.setTimeout(r, 16)
        }
        return M
    })(_self)
'undefined' != typeof module && module.exports && (module.exports = Prism),
    'undefined' != typeof global && (global.Prism = Prism)
;(Prism.languages.markup = {
    comment: /<!--[\s\S]*?-->/,
    prolog: /<\?[\s\S]+?\?>/,
    doctype: {
        pattern:
            /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
            'internal-subset': {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
            },
            string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
            punctuation: /^<!|>$|[[\]]/,
            'doctype-tag': /^DOCTYPE/,
            name: /[^\s<>'"]+/,
        },
    },
    cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
    tag: {
        pattern:
            /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
            },
            'special-attr': [],
            'attr-value': {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    punctuation: [
                        { pattern: /^=/, alias: 'attr-equals' },
                        /"|'/,
                    ],
                },
            },
            punctuation: /\/?>/,
            'attr-name': {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
            },
        },
    },
    entity: [
        { pattern: /&[\da-z]{1,8};/i, alias: 'named-entity' },
        /&#x?[\da-f]{1,8};/i,
    ],
}),
    (Prism.languages.markup.tag.inside['attr-value'].inside.entity =
        Prism.languages.markup.entity),
    (Prism.languages.markup.doctype.inside['internal-subset'].inside =
        Prism.languages.markup),
    Prism.hooks.add('wrap', function (a) {
        'entity' === a.type &&
            (a.attributes.title = a.content.replace(/&amp;/, '&'))
    }),
    Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
        value: function (a, e) {
            var s = {}
            ;(s['language-' + e] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: Prism.languages[e],
            }),
                (s.cdata = /^<!\[CDATA\[|\]\]>$/i)
            var t = {
                'included-cdata': {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: s,
                },
            }
            t['language-' + e] = {
                pattern: /[\s\S]+/,
                inside: Prism.languages[e],
            }
            var n = {}
            ;(n[a] = {
                pattern: RegExp(
                    '(<__[^>]*>)(?:<!\\[CDATA\\[(?:[^\\]]|\\](?!\\]>))*\\]\\]>|(?!<!\\[CDATA\\[)[^])*?(?=</__>)'.replace(
                        /__/g,
                        function () {
                            return a
                        }
                    ),
                    'i'
                ),
                lookbehind: !0,
                greedy: !0,
                inside: t,
            }),
                Prism.languages.insertBefore('markup', 'cdata', n)
        },
    }),
    Object.defineProperty(Prism.languages.markup.tag, 'addAttribute', {
        value: function (a, e) {
            Prism.languages.markup.tag.inside['special-attr'].push({
                pattern: RegExp(
                    '(^|["\'\\s])(?:' +
                        a +
                        ')\\s*=\\s*(?:"[^"]*"|\'[^\']*\'|[^\\s\'">=]+(?=[\\s>]))',
                    'i'
                ),
                lookbehind: !0,
                inside: {
                    'attr-name': /^[^\s=]+/,
                    'attr-value': {
                        pattern: /=[\s\S]+/,
                        inside: {
                            value: {
                                pattern:
                                    /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                                lookbehind: !0,
                                alias: [e, 'language-' + e],
                                inside: Prism.languages[e],
                            },
                            punctuation: [
                                { pattern: /^=/, alias: 'attr-equals' },
                                /"|'/,
                            ],
                        },
                    },
                },
            })
        },
    }),
    (Prism.languages.html = Prism.languages.markup),
    (Prism.languages.mathml = Prism.languages.markup),
    (Prism.languages.svg = Prism.languages.markup),
    (Prism.languages.xml = Prism.languages.extend('markup', {})),
    (Prism.languages.ssml = Prism.languages.xml),
    (Prism.languages.atom = Prism.languages.xml),
    (Prism.languages.rss = Prism.languages.xml)
!(function (s) {
    var e =
        /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/
    ;(s.languages.css = {
        comment: /\/\*[\s\S]*?\*\//,
        atrule: {
            pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
            inside: {
                rule: /^@[\w-]+/,
                'selector-function-argument': {
                    pattern:
                        /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                    lookbehind: !0,
                    alias: 'selector',
                },
                keyword: {
                    pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                    lookbehind: !0,
                },
            },
        },
        url: {
            pattern: RegExp(
                '\\burl\\((?:' +
                    e.source +
                    '|(?:[^\\\\\r\n()"\']|\\\\[^])*)\\)',
                'i'
            ),
            greedy: !0,
            inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp('^' + e.source + '$'), alias: 'url' },
            },
        },
        selector: {
            pattern: RegExp(
                '(^|[{}\\s])[^{}\\s](?:[^{};"\'\\s]|\\s+(?![\\s{])|' +
                    e.source +
                    ')*(?=\\s*\\{)'
            ),
            lookbehind: !0,
        },
        string: { pattern: e, greedy: !0 },
        property: {
            pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            lookbehind: !0,
        },
        important: /!important\b/i,
        function: {
            pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
            lookbehind: !0,
        },
        punctuation: /[(){};:,]/,
    }),
        (s.languages.css.atrule.inside.rest = s.languages.css)
    var t = s.languages.markup
    t && (t.tag.addInlined('style', 'css'), t.tag.addAttribute('style', 'css'))
})(Prism)
Prism.languages.clike = {
    comment: [
        {
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0,
            greedy: !0,
        },
        { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
    ],
    string: {
        pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
        greedy: !0,
    },
    'class-name': {
        pattern:
            /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
        lookbehind: !0,
        inside: { punctuation: /[.\\]/ },
    },
    keyword:
        /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
    boolean: /\b(?:true|false)\b/,
    function: /\b\w+(?=\()/,
    number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
    operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
    punctuation: /[{}[\];(),.:]/,
}
;(Prism.languages.javascript = Prism.languages.extend('clike', {
    'class-name': [
        Prism.languages.clike['class-name'],
        {
            pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
            lookbehind: !0,
        },
    ],
    keyword: [
        { pattern: /((?:^|})\s*)catch\b/, lookbehind: !0 },
        {
            pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0,
        },
    ],
    function:
        /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
    number: /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
    operator:
        /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
})),
    (Prism.languages.javascript['class-name'][0].pattern =
        /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
    Prism.languages.insertBefore('javascript', 'keyword', {
        regex: {
            pattern:
                /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
                'regex-source': {
                    pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                    lookbehind: !0,
                    alias: 'language-regex',
                    inside: Prism.languages.regex,
                },
                'regex-delimiter': /^\/|\/$/,
                'regex-flags': /^[a-z]+$/,
            },
        },
        'function-variable': {
            pattern:
                /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: 'function',
        },
        parameter: [
            {
                pattern:
                    /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
                lookbehind: !0,
                inside: Prism.languages.javascript,
            },
            {
                pattern:
                    /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
                lookbehind: !0,
                inside: Prism.languages.javascript,
            },
            {
                pattern:
                    /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
                lookbehind: !0,
                inside: Prism.languages.javascript,
            },
            {
                pattern:
                    /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
                lookbehind: !0,
                inside: Prism.languages.javascript,
            },
        ],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
    }),
    Prism.languages.insertBefore('javascript', 'string', {
        hashbang: { pattern: /^#!.*/, greedy: !0, alias: 'comment' },
        'template-string': {
            pattern:
                /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
            greedy: !0,
            inside: {
                'template-punctuation': { pattern: /^`|`$/, alias: 'string' },
                interpolation: {
                    pattern:
                        /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                    lookbehind: !0,
                    inside: {
                        'interpolation-punctuation': {
                            pattern: /^\${|}$/,
                            alias: 'punctuation',
                        },
                        rest: Prism.languages.javascript,
                    },
                },
                string: /[\s\S]+/,
            },
        },
    }),
    Prism.languages.markup &&
        (Prism.languages.markup.tag.addInlined('script', 'javascript'),
        Prism.languages.markup.tag.addAttribute(
            'on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)',
            'javascript'
        )),
    (Prism.languages.js = Prism.languages.javascript)
