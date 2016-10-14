mapUrlTxt = '/web/entries/maplocation?TXT={0}';
mapUrlPoint = '/web/entries/maplocation?W={0}&J={1}';
mapUrlGeocoder = 'http://mo.amap.com/?q={0},{1}';
ipURL = 'http://www.ip.cn/index.php?ip=';
testUser = 'test@jsform.com';
currencys = {
    yen: '¥ ',
    dollars: '$ ',
    pounds: '£ ',
    euros: '€ '
};
Date.defAbbrDayNames = [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六'
];
Date.defDayNames = [
    '日',
    '一',
    '二',
    '三',
    '四',
    '五',
    '六'
];
Date.defMonthNames = [
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月'
];
Date.defAbbrMonthNames = [
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九',
    '十',
    '十一',
    '十二'
];
Date.fromString = function (q) {
    var l = 'yyyy-mm-dd';
    var n = new Date('01/01/1970');
    if (q == '') {
        return n
    }
    q = q.toLowerCase();
    var k = '';
    var b = [
    ];
    var a = /(dd?d?|mm?m?|yy?yy?)+([^(m|d|y)])?/g;
    var g;
    while ((g = a.exec(l)) != null) {
        switch (g[1]) {
            case 'd':
            case 'dd':
            case 'm':
            case 'mm':
            case 'yy':
            case 'yyyy':
                k += '(\\d+\\d?\\d?\\d?)+';
                b.push(g[1].substr(0, 1));
                break;
            case 'mmm':
                k += '([a-z]{3})';
                b.push('M');
                break
        }
        if (g[2]) {
            k += g[2]
    }
}
var h = new RegExp(k);
var p = q.match(h);
for (var e = 0; e < b.length; e++) {
    var m = p[e + 1];
    switch (b[e]) {
        case 'd':
            n.setDate(m);
            break;
        case 'm':
            n.setMonth(Number(m) - 1);
            break;
        case 'M':
            for (var c = 0; c < Date.abbrMonthNames.length; c++) {
                if (Date.abbrMonthNames[c].toLowerCase() == m) {
                    break
                }
            }
            n.setMonth(c);
            break;
        case 'y':
            n.setYear(m);
            break
    }
}
return n
};
if (!this.JSON) {
this.JSON = {
}
}(function () {
function k(a) {
    return a < 10 ? '0' + a : a
}
function n(a) {
    o.lastIndex = 0;
    return o.test(a) ? '"' + a.replace(o, function (c) {
        var d = q[c];
        return typeof d === 'string' ? d : '\\u' + ('0000' + c.charCodeAt(0).toString(16)).slice( - 4)
    }) + '"' : '"' + a + '"'
}
function l(a, c) {
    var d,
    f,
    i = g,
    e,
    b = c[a];
    if (b && typeof b === 'object' && typeof b.toJSON === 'function') {
        b = b.toJSON(a)
    }
    if (typeof j === 'function') {
        b = j.call(c, a, b)
    }
    switch (typeof b) {
        case 'string':
            return n(b);
        case 'number':
            return isFinite(b) ? String(b)  : 'null';
        case 'boolean':
        case 'null':
            return String(b);
        case 'object':
            if (!b) {
                return 'null'
            }
            g += m;
            e = [
            ];
            if (Object.prototype.toString.apply(b) === '[object Array]') {
                f = b.length;
                for (a = 0; a < f; a += 1) {
                    e[a] = l(a, b) || 'null'
                }
                c = e.length === 0 ? '[]' : g ? '[\n' + g + e.join(',\n' + g) + '\n' + i + ']' : '[' + e.join(',') + ']';
                g = i;
                return c
            }
            if (j && typeof j === 'object') {
                f = j.length;
                for (a = 0; a < f; a += 1) {
                    d = j[a];
                    if (typeof d === 'string') {
                        if (c = l(d, b)) {
                            e.push(n(d) + (g ? ': ' : ':') + c)
                        }
                    }
                }
            } else {
                for (d in b) {
                    if (Object.hasOwnProperty.call(b, d)) {
                        if (c = l(d, b)) {
                            e.push(n(d) + (g ? ': ' : ':') + c)
                        }
                    }
                }
            }
            c = e.length === 0 ? '{}' : g ? '{\n' + g + e.join(',\n' + g) + '\n' + i + '}' : '{' + e.join(',') + '}';
            g = i;
            return c
    }
}
if (typeof Date.prototype.toJSON !== 'function') {
    Date.prototype.toJSON = function () {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + '-' + k(this.getUTCMonth() + 1) + '-' + k(this.getUTCDate()) + 'T' + k(this.getUTCHours()) + ':' + k(this.getUTCMinutes()) + ':' + k(this.getUTCSeconds()) + 'Z' : null
    };
    String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function () {
        return this.valueOf()
    }
}
var p = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
o = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
g,
m,
q = {
    '': '\\b',
    '\t': '\\t',
    '\n': '\\n',
    '\f': '\\f',
    '\r': '\\r',
    '"': '\\"',
    '\\': '\\\\'
},
j;
if (typeof JSON.stringify !== 'function') {
    JSON.stringify = function (a, c, d) {
        var f;
        m = g = '';
        if (typeof d === 'number') {
            for (f = 0; f < d; f += 1) {
                m += ' '
            }
        } else {
            if (typeof d === 'string') {
                m = d
            }
        }
        if ((j = c) && typeof c !== 'function' && (typeof c !== 'object' || typeof c.length !== 'number')) {
            throw new Error('JSON.stringify')
        }
        return l('', {
            '': a
        })
    }
}
if (typeof JSON.parse !== 'function') {
    JSON.parse = function (a, c) {
        function d(f, i) {
            var e,
            b,
            h = f[i];
            if (h && typeof h === 'object') {
                for (e in h) {
                    if (Object.hasOwnProperty.call(h, e)) {
                        b = d(h, e);
                        if (b !== undefined) {
                            h[e] = b
                        } else {
                            delete h[e]
                        }
                    }
                }
            }
            return c.call(f, i, h)
        }
        p.lastIndex = 0;
        if (p.test(a)) {
            a = a.replace(p, function (f) {
                return '\\u' + ('0000' + f.charCodeAt(0).toString(16)).slice( - 4)
            })
        }
        if (/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
            a = eval('(' + a + ')');
            return typeof c === 'function' ? d({
                '': a
            }, '')  : a
        }
        throw new SyntaxError('JSON.parse')
    }
}
}) (); (function (V) {
var E = V.fn.domManip,
S = '_tmplitem',
F = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /,
U = {
},
Q = {
},
R,
G = {
    key: 0,
    data: {
    }
},
N = 0,
T = 0,
K = [
];
function P(b, i, a, f) {
    var j = {
        data: f || (f === 0 || f === false) ? f : i ? i.data : {
        },
        _wrap: i ? i._wrap : null,
        tmpl: null,
        parent: i || null,
        nodes: [
        ],
        calls: B,
        nest: z,
        wrap: y,
        html: A,
        update: C
    };
    b && V.extend(j, b, {
        nodes: [
        ],
        parent: i
    });
    if (a) {
        j.tmpl = a;
        j._ctnt = j._ctnt || j.tmpl(V, j);
        j.key = ++N;
        (K.length ? Q : U) [N] = j
    }
    return j
}
V.each({
    appendTo: 'append',
    prependTo: 'prepend',
    insertBefore: 'before',
    insertAfter: 'after',
    replaceAll: 'replaceWith'
}, function (a, b) {
    V.fn[a] = function (s) {
        var r = [
        ],
        p = V(s),
        e,
        q,
        c,
        d,
        f = this.length === 1 && this[0].parentNode;
        R = U || {
        };
        if (f && f.nodeType === 11 && f.childNodes.length === 1 && p.length === 1) {
            p[b](this[0]);
            r = this
        } else {
            for (q = 0, c = p.length; q < c; q++) {
                T = q;
                e = (q > 0 ? this.clone(true)  : this).get();
                V(p[q]) [b](e);
                r = r.concat(e)
            }
            T = 0;
            r = this.pushStack(r, a, p.selector)
        }
        d = R;
        R = null;
        V.tmpl.complete(d);
        return r
    }
});
V.fn.extend({
    tmpl: function (e, f, a) {
        return V.tmpl(this[0], e, f, a)
    },
    tmplItem: function () {
        return V.tmplItem(this[0])
    },
    template: function (a) {
        return V.template(a, this[0])
    },
    domManip: function (q, a, b) {
        if (q[0] && V.isArray(q[0])) {
            var n = V.makeArray(arguments),
            l = q[0],
            c = l.length,
            e = 0,
            p;
            while (e < c && !(p = V.data(l[e++], 'tmplItem'))) {
            }
            if (p && T) {
                n[2] = function (d) {
                    V.tmpl.afterManip(this, d, b)
                }
            }
            E.apply(this, n)
        } else {
            E.apply(this, arguments)
        }
        T = 0;
        !R && V.tmpl.complete(U);
        return this
    }
});
V.extend({
    tmpl: function (j, f, g, l) {
        var b,
        a = !l;
        if (a) {
            l = G;
            j = V.template[j] || V.template(null, j);
            Q = {
            }
        } else {
            if (!j) {
                j = l.tmpl;
                U[l.key] = l;
                l.nodes = [
                ];
                l.wrapped && I(l, l.wrapped);
                return V(M(l, null, l.tmpl(V, l)))
            }
        }
        if (!j) {
            return []
        }
        if (typeof f === 'function') {
            f = f.call(l || {
            })
        }
        g && g.wrapped && I(g, g.wrapped);
        b = V.isArray(f) ? V.map(f, function (c) {
            return c ? P(g, l, j, c)  : null
        })  : [
            P(g, l, j, f)
        ];
        return a ? V(M(l, null, b))  : b
    },
    tmplItem: function (a) {
        var d;
        if (a instanceof V) {
            a = a[0]
        }
        while (a && a.nodeType === 1 && !(d = V.data(a, 'tmplItem')) && (a = a.parentNode)) {
        }
        return d || G
    },
    template: function (d, a) {
        if (a) {
            if (typeof a === 'string') {
                a = H(a)
            } else {
                if (a instanceof V) {
                    a = a[0] || {
                    }
                }
            }
            if (a.nodeType) {
                a = V.data(a, 'tmpl') || V.data(a, 'tmpl', H(a.innerHTML))
            }
            return typeof d === 'string' ? (V.template[d] = a)  : a
        }
        return d ? typeof d !== 'string' ? V.template(null, d)  : V.template[d] || V.template(null, F.test(d) ? d : V(d))  : null
    },
    encode: function (b) {
        return ('' + b).split('<').join('&lt;').split('>').join('&gt;').split('"').join('&#34;').split('\'').join('&#39;')
    }
});
V.extend(V.tmpl, {
    tag: {
        tmpl: {
            _default: {
                $2: 'null'
            },
            open: 'if($notnull_1){__=__.concat($item.nest($1,$2));}'
        },
        wrap: {
            _default: {
                $2: 'null'
            },
            open: '$item.calls(__,$1,$2);__=[];',
            close: 'call=$item.calls();__=call._.concat($item.wrap(call,__));'
        },
        each: {
            _default: {
                $2: '$index, $value'
            },
            open: 'if($notnull_1){$.each($1a,function($2){with(this){',
            close: '}});}'
        },
        'if': {
            open: 'if(($notnull_1) && $1a){',
            close: '}'
        },
        'else': {
            _default: {
                $1: 'true'
            },
            open: '}else if(($notnull_1) && $1a){'
        },
        html: {
            open: 'if($notnull_1){__.push($1a);}'
        },
        '=': {
            _default: {
                $1: '$data'
            },
            open: 'if($notnull_1){__.push($.encode($1a));}'
        },
        '!': {
            open: ''
        }
    },
    complete: function () {
        U = {
        }
    },
    afterManip: function (c, a, h) {
        var g = a.nodeType === 11 ? V.makeArray(a.childNodes)  : a.nodeType === 1 ? [
            a
        ] : [
        ];
        h.call(c, a);
        J(g);
        T++
    }
});
function M(i, d, h) {
    var a,
    j = h ? V.map(h, function (b) {
        return typeof b === 'string' ? i.key ? b.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, '$1 ' + S + '="' + i.key + '" $2')  : b : M(b, i, b._ctnt)
    })  : i;
    if (d) {
        return j
    }
    j = j.join('');
    j.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function (b, l, g, k) {
        a = V(g).get();
        J(a);
        if (l) {
            a = L(l).concat(a)
        }
        if (k) {
            a = a.concat(L(k))
        }
    });
    return a ? a : L(j)
}
function L(d) {
    var a = document.createElement('div');
    a.innerHTML = d;
    return V.makeArray(a.childNodes)
}
function H(a) {
    return new Function('jQuery', '$item', 'var $=jQuery,call,__=[],$data=$item.data;with($data){__.push(\'' + V.trim(a).replace(/([\\'])/g, '\\$1').replace(/[\r\t\n]/g, ' ').replace(/\$\{([^\}]*)\}/g, '{{= $1}}').replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function (h, n, p, s, x, w, v) {
        var q = V.tmpl.tag[p],
        r,
        u,
        t;
        if (!q) {
            throw 'Unknown template tag: ' + p
        }
        r = q._default || [
        ];
        if (w && !/\w$/.test(x)) {
            x += w;
            w = ''
        }
        if (x) {
            x = O(x);
            v = v ? ',' + O(v) + ')' : w ? ')' : '';
            u = w ? x.indexOf('.') > - 1 ? x + O(w)  : '(' + x + ').call($item' + v : x;
            t = w ? u : '(typeof(' + x + ')===\'function\'?(' + x + ').call($item):(' + x + '))'
        } else {
            t = u = r.$1 || 'null'
        }
        s = O(s);
        return '\');' + q[n ? 'close' : 'open'].split('$notnull_1').join(x ? 'typeof(' + x + ')!==\'undefined\' && (' + x + ')!=null' : 'true').split('$1a').join(t).split('$1').join(u).split('$2').join(s || r.$2 || '') + '__.push(\''
    }) + '\');}return __;')
}
function I(d, a) {
    d._wrap = M(d, true, V.isArray(a) ? a : [
        F.test(a) ? a : V(a).html()
    ]).join('')
}
function O(b) {
    return b ? b.replace(/\\'/g, '\'').replace(/\\\\/g, '\\')  : null
}
function D(c) {
    var d = document.createElement('div');
    d.appendChild(c.cloneNode(true));
    return d.innerHTML
}
function J(b) {
    var c = '_' + T,
    g,
    i,
    f = {
    },
    r,
    a,
    q;
    for (r = 0, a = b.length; r < a; r++) {
        if ((g = b[r]).nodeType !== 1) {
            continue
        }
        i = g.getElementsByTagName('*');
        for (q = i.length - 1; q >= 0; q--) {
            d(i[q])
        }
        d(g)
    }
    function d(s) {
        var v,
        t = s,
        n,
        u,
        l;
        if (l = s.getAttribute(S)) {
            while (t.parentNode && (t = t.parentNode).nodeType === 1 && !(v = t.getAttribute(S))) {
            }
            if (v !== l) {
                t = t.parentNode ? t.nodeType === 11 ? 0 : t.getAttribute(S) || 0 : 0;
                if (!(u = U[l])) {
                    u = Q[l];
                    u = P(u, U[t] || Q[t]);
                    u.key = ++N;
                    U[N] = u
                }
                T && w(l)
            }
            s.removeAttribute(S)
        } else {
            if (T && (u = V.data(s, 'tmplItem'))) {
                w(u.key);
                U[u.key] = u;
                t = V.data(s.parentNode, 'tmplItem');
                t = t ? t.key : 0
            }
        }
        if (u) {
            n = u;
            while (n && n.key != t) {
                n.nodes.push(s);
                n = n.parent
            }
            delete u._ctnt;
            delete u._wrap;
            V.data(s, 'tmplItem', u)
        }
        function w(e) {
            e = e + c;
            u = f[e] = f[e] || P(u, U[u.parent.key + c] || u.parent)
        }
    }
}
function B(f, g, h, e) {
    if (!f) {
        return K.pop()
    }
    K.push({
        _: f,
        tmpl: g,
        item: this,
        data: h,
        options: e
    })
}
function z(e, f, a) {
    return V.tmpl(V.template(e), f, a, this)
}
function y(a, e) {
    var f = a.options || {
    };
    f.wrapped = e;
    return V.tmpl(V.template(a.tmpl), a.data, f, a.item)
}
function A(e, f) {
    var a = this._wrap;
    return V.map(V(V.isArray(a) ? a.join('')  : a).filter(e || '*'), function (b) {
        return f ? b.innerText || b.textContent : b.outerHTML || D(b)
    })
}
function C() {
    var a = this.nodes;
    V.tmpl(null, null, null, this).insertBefore(a[0]);
    V(a).remove()
}
}) (jQuery); (function (b) {
b.postJSON = function (d, f, g, e) {
    var c = {
        type: 'POST',
        url: d,
        contentType: 'application/json; charset=UTF-8',
        data: JSON.stringify(f),
        dataType: 'json',
        success: g
    };
    if (e) {
        b.extend(c, e)
    }
    return jQuery.ajax(c)
};
b.download = function (e, g, h) {
    if (e && g) {
        var c = '',
        d,
        f = b('<form />').attr('action', e).attr('method', (h || 'post'));
        b.each(g, function (j, i) {
            d = b('<input type=\'hidden\' />');
            d.attr('name', j).attr('value', i);
            f.append(d)
        });
        f.appendTo('body').submit().remove()
    }
};
b.format = function () {
    if (arguments.length == 0) {
        return null
    }
    var e = arguments[0];
    for (var c = 1; c < arguments.length; c++) {
        var d = new RegExp('\\{' + (c - 1) + '\\}', 'gm');
        e = e.replace(d, arguments[c])
    }
    return e
};
b.formatHH = function (c) {
    if (b.trim(c) === '') {
        return '00'
    }
    c = parseInt(c, 10);
    if (c < 10) {
        return '0' + c
    } else {
        return c
    }
};
b.formatFileSize = function (c) {
    c = parseInt(c);
    if (c >= 1024 * 1024) {
        return new Number(c / (1024 * 1024)).toFixed(1) + ' MB'
    } else {
        if (c >= 1024) {
            return new Number(c / 1024).toFixed(1) + ' KB'
        } else {
            return c + ' B'
        }
    }
};
b.isDateTimeField = function (c) {
    return /(DATE)|(TIME)/.test(c)
};
b.formatDateTime = function (c) {
    if (typeof c === 'string') {
        return c
    } else {
        var c = new Date(c);
        return b.format('{0}-{1}-{2} {3}:{4}', c.getFullYear(), b.formatHH(c.getMonth() + 1), b.formatHH(c.getDate()), b.formatHH(c.getHours()), b.formatHH(c.getMinutes()))
    }
};
b.formatDate = function (c) {
    if (typeof c === 'string') {
        return c.split(' ') [0]
    } else {
        var c = new Date(c);
        return b.format('{0}-{1}-{2}', c.getFullYear(), b.formatHH(c.getMonth() + 1), b.formatHH(c.getDate()))
    }
};
b.formatTime = function (c) {
    if (typeof c === 'string') {
        return c.split(' ') [1]
    } else {
        var c = new Date(c);
        return b.format('{0}:{1}', b.formatHH(c.getHours()), b.formatHH(c.getMinutes()))
    }
};
b.formatHTMLValue = function (c) {
    return c
};
b.getDateFromStr = function (d) {
    if (!d) {
        return null
    }
    var c = d.split('-');
    if (c.length == 3) {
        return new Date(c[0], c[1] - 1, c[2])
    } else {
        return null
    }
};
b.getDate = function (g) {
    var f = g.find('.yyyy').val(),
    e = g.find('.mm').val(),
    d = g.find('.dd').val();
    if (f || e || d) {
        return f + '-' + b.formatHH(e) + '-' + b.formatHH(d)
    } else {
        return ''
    }
};
b.setDate = function (f, d) {
    if (d) {
        var e = d.split('-');
        f.find('.yyyy').val(e[0]);
        f.find('.mm').val(e[1]);
        f.find('.dd').val(e[2])
    }
};
b.getTime = function (g) {
    var e = g.find('.hh').val(),
    d = g.find('.mi').val(),
    f = g.find('.se').val();
    if (e || d || f) {
        return b.formatHH(e) + ':' + b.formatHH(d) + ':' + b.formatHH(f)
    } else {
        return ''
    }
};
b.setTime = function (f, d) {
    if (d) {
        var e = d.split(':');
        f.find('.hh').val(e[0]);
        f.find('.mi').val(e[1]);
        f.find('.se').val(e[2] || '00');
        f.find('input.val').val(d)
    }
};
b.getName = function (g) {
    var f = g.find('.n1').val(),
    e = g.find('.n2').val(),
    d = g.find('.n3').val();
    if (f || e || d) {
        return b.format('{0}-{1}-{2}', f, e, d)
    } else {
        return ''
    }
};
b.setName = function (f, d) {
    if (d) {
        var e = d.split('-');
        f.find('.n1').val(e[0]);
        f.find('.n2').val(e[1]);
        f.find('.n3').val(e[2])
    }
};
b.setPhone = function (f, d) {
    if (d) {
        var e = d.split('-');
        if (e.length == 3) {
            f.find('.tel1').val(e[0]);
            f.find('.tel2').val(e[1]);
            f.find('.tel3').val(e[2])
        }
    }
};
b.cloneJSON = function (c) {
    return JSON.parse(JSON.stringify(c))
};
b.closeLightBox = function () {
    var e = b('#lightBox'),
    c = b('#overlay'),
    d = b('#lbContent');
    if (e.data('opts')) {
        url = e.data('opts').url;
        if (url.indexOf('#') == 0) {
            var f = d.find('>div,>form');
            b('#divtmp').append(f)
        }
        e.addClass('hide');
        c.addClass('hide');
        b('#sIframe').hide()
    }
};
b.lightBox = function (l) {
    var e = {
        url: '',
        size: '',
        overlay: '#overlay',
        content: '#lbContent',
        lightBox: '#lightBox',
        btnConfirm: '#btnConfirm',
        btnCancel: '#btnCancel',
        showclose: '1',
        cache: '1',
        loaded: function () {
        },
        confirm: function () {
        },
        cancel: function () {
        }
    },
    c = b.extend(e, l),
    g = b(c.overlay),
    f = b(c.lightBox),
    h = b(c.content),
    d = function () {
        if (c.url.indexOf('#') == 0) {
            var m = h.find('>div,>form');
            b('#divtmp').append(m)
        }
        f.addClass('hide');
        g.addClass('hide');
        b('#sIframe').show();
        if (b('#lbContent').find('video.media')) {
            b('#lbContent').find('video.media').attr('src', '')
        }
    },
    i = function () {
        b(c.btnConfirm).unbind().click(function () {
            if (c.confirm() !== false) {
                d();
                return false
            }
        });
        b(c.btnCancel).unbind().click(function () {
            c.cancel();
            d();
            return false
        });
        h.find('a.close').unbind().click(function () {
            d();
            return false
        })
    },
    k = function () {
        var m = function () {
            if (c.size) {
                f.addClass(c.size)
            }
            var q = f.height(),
            p = b(window).height(),
            n = (q < p ? q : p) - 50;
            if (q > p) {
                h.css({
                    height: n - 50,
                    overflowY: 'auto'
                });
                h.find('.close-holder').css({
                    right: 10
                })
            }
            f.css({
                marginTop: - n / 2
            })
        };
        f.removeClass('ss s l cus cus1 cus2 cus3');
        h.css({
            height: ''
        });
        f.css({
            top: '50%',
            left: '50%'
        });
        if (b('img').length > 0) {
            b('img').load(function () {
                m()
            })
        }
        m();
        if (f.draggable) {
            f.draggable({
                handle: ('div.close-holder')
            })
        }
    };
    f.data('opts', c);
    g.removeClass('hide');
    f.removeClass('hide');
    if (c.url) {
        if (b.data(document, c.url) && c.cache == '1') {
            b(c.content).html(b.data(document, c.url));
            i();
            setTimeout(function () {
                c.loaded();
                k()
            }, 20)
        } else {
            if (c.url.indexOf('#') == 0) {
                h.html('');
                if (c.showclose == '1') {
                    h.append('<div class="close-holder"><a class="iconfont close" href="#">&#xe638;</a></div>')
                }
                h.append(b(c.url).show());
                i();
                c.loaded();
                k()
            } else {
                b.get(c.url, function (m) {
                    var m = '<div class="close-holder"><a class="iconfont close" href="#">&#xe638;</a></div>' + m;
                    h.html(m);
                    b.data(document, c.url, m);
                    i();
                    c.loaded();
                    k()
                })
            }
        }
    }
    if (b.browser.msie && b.browser.version === '6.0') {
        g.height(b(document).height());
        if (b('#sIframe').length === 0) {
            b('body').append('<iframe id=\'sIframe\' class=\'sIframe hide\'></iframe>')
        }
        var j = b('#sIframe');
        j.width(g.width());
        j.height(g.height());
        j.show().css({
            position: 'absolute',
            left: '0px',
            top: '0px'
        })
    }
};
b.confirm = function (e) {
    var d = {
        title: '确认',
        msg: '是否确认删除？',
        btntext: '删除',
        showyes: false,
        confirm: function () {
        },
        cancel: function () {
        }
    };
    var c = b('#overlay'),
    f = b('#deleteBox');
    if (e) {
        b.extend(d, e)
    }
    d.confirm = function () {
        if (d.showyes) {
            var g = f.find('#txtConfirmYes');
            if (g.val() != 'yes') {
                g.setErrorFlag('确认删除请输入yes');
                return false
            }
        }
        if (e.confirm) {
            e.confirm()
        }
        c.addClass('hide');
        f.addClass('hide');
        return false
    };
    d.cancel = function () {
        if (e.cancel) {
            e.cancel()
        }
        c.addClass('hide');
        f.addClass('hide');
        return false
    };
    if (c.length == 0) {
        c = b('<div id="overlay" class="overlay"></div>');
        b('body').append(c)
    }
    if (f.length == 0) {
        f = b('<div id="deleteBox" class="pop-box"><h4 class="title">' + d.title + '</h4><p class="msg">' + d.msg + '</p><div class="yes hide">确认删除请输入"yes"（不含引号）<input type="text" id="txtConfirmYes" class="ui-input-text center" maxlength="3" /></div><div class="btns clearfix">   <a href="#" class="btncancel btn small right gray">取消</a>   <a href="#" class="btnconfirm btn small right red">' + d.btntext + '</a> </div></div>');
        b('body').append(f)
    } else {
        f.find('.title').text(d.title);
        f.find('.msg').html(d.msg)
    }
    f.find('#txtConfirmYes').val('').clearErrorFlag();
    if (d.showyes) {
        f.find('.yes').removeClass('hide')
    } else {
        f.find('.yes').addClass('hide')
    }
    c.removeClass('hide');
    f.removeClass('hide');
    f.find('.btnconfirm').unbind().bind({
        click: d.confirm
    });
    f.find('.btncancel').unbind().bind({
        click: d.cancel
    });
    if (f.draggable) {
        f.draggable({
            handle: f.find('h4.title')
        })
    }
};
b.alert = function (e, f) {
    var d = b('#overlay'),
    c = b('#alertBox');
    if (d.length == 0) {
        d = b('<div id="overlay" class="overlay"></div>');
        b('body').append(d)
    }
    if (c.length == 0) {
        c = b('<div id="alertBox" class="pop-box"><h4 class="title">提示</h4><p class="msg">' + e + '</p><div class="btns clearfix">   <a href="#" class="btnconfirm btn right nobg">确定</a></div></div>');
        b('body').append(c)
    }
    d.removeClass('hide');
    c.removeClass('hide');
    c.find('p.msg').html(e);
    c.find('.btnconfirm').unbind().bind({
        click: function () {
            if (f) {
                f()
            }
            d.addClass('hide');
            c.addClass('hide');
            return false
        }
    });
    if (c.draggable) {
        c.draggable({
            handle: c.find('h4.title')
        })
    }
};
b.malert = function (c, g) {
    var e = b('#divErrorParent'),
    d = b('#divErrMsgMobile');
    if (e.length == 0) {
        e = b('<div id=\'divErrorParent\' class=\'error-msgMobile-container\'></div>');
        d = b('<div id=\'divErrMsgMobile\' class=\'error-msgMobile\'></div>');
        d.appendTo(e);
        e.appendTo('body')
    }
    d.text(c).animate({
        opacity: '1'
    }, '500');
    setTimeout(f, 2000);
    function f() {
        b('#divErrMsgMobile').animate({
            opacity: '0'
        }, '500', function () {
            b('#parentDiv').remove();
            if (g) {
                g()
            }
        })
    }
};
b.getCookie = function (c) {
    if (!c) {
        return ''
    }
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c + '=');
        if (c_start !== - 1) {
            c_start = c_start + c.length + 1;
            c_end = document.cookie.indexOf(';', c_start);
            if (c_end === - 1) {
                c_end = document.cookie.length
            }
            return unescape(document.cookie.substring(c_start, c_end))
        }
    }
    return ''
};
b.setCookie = function (d, e, c) {
    var f = new Date();
    f.setDate(f.getDate() + c);
    document.cookie = d + '=' + escape(e) + ((c == null) ? '' : ';expires=' + f.toGMTString())
};
b.delCookie = function a(c) {
    b.setCookie(c, '', - 1)
};
b.isWeixin = function () {
    var c = window.navigator.userAgent.toLowerCase();
    if (c.match(/MicroMessenger/i) == 'micromessenger') {
        return true
    } else {
        return false
    }
};
b.isYzjApp = function () {
    return navigator.userAgent.match(/Qing\/.*;(iPhone|Android).*/) ? true : false
};
b.isHide = function (c) {
    return (b(c).is(':hidden') && !b(c).is('input:hidden'))
};
b.mergJSON = function (d, c) {
    if (d === undefined) {
        return
    }
    b.each(c, function (f, e) {
        if (d[f] !== undefined) {
            c[f] = d[f]
        }
    });
    return c
};
b.encHTML = function (c) {
    if (!('string' == typeof (c))) {
        return c
    }
    return c.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
};
b.decHTML = function (c) {
    if (!('string' == typeof (c))) {
        return c
    }
    return c.replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
};
b.enterToBr = function (c) {
    if (!('string' == typeof (c))) {
        return c
    }
    return c.replace(/\n/g, '<br/>').replace(/<script/gim, '').replace(/script>/gim, '')
};
b.encodeScript = function (c) {
    if (!('string' == typeof (c))) {
        return c
    }
    return c.replace(/<script/gim, '').replace(/script>/gim, '')
};
b.isDate = function (c) {
    var d = new RegExp('^(?:(?:([0-9]{4}(-|/)(?:(?:0?[1,3-9]|1[0-2])(-|/)(?:29|30)|((?:0?[13578]|1[02])(-|/)31)))|([0-9]{4}(-|/)(?:0?[1-9]|1[0-2])(-|/)(?:0?[1-9]|1\\d|2[0-8]))|(((?:(\\d\\d(?:0[48]|[2468][048]|[13579][26]))|(?:0[48]00|[2468][048]00|[13579][26]00))(-|/)0?2(-|/)29))))$');
    return d.test(c)
};
b.isTime = function (c) {
    var d = new RegExp('^[0-9]{1,2}:[0-9]{1,2}');
    return d.test(c)
};
b.isEmail = function (c) {
    return /^(\w)+([\.\-]\w+)*@([\w\-])+(([\.\-]\w{2,10}){1,3})$/.test(c)
};
b.isImage = function (c) {
    if (!c) {
        return false
    }
    return /\.jpg$|\.jpeg$|\.png$|\.bmp$/.test(c.toLowerCase())
};
b.isObjectId = function (c) {
    return c.length == 24
};
b.isNumber = function (c) {
    var d = /^(-?\d+)(\.\d+)?$/;
    return d.test(c)
};
b.isMobile = function (c) {
    if (c.indexOf('+') == 0 && c.length > 9) {
        return true
    }
    return /^((13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[0-9]))\d{8}$/.test(c)
};
b.showStatus = function (c) {
    var d = b('#status');
    if (d.hasClass('mobile')) {
        d.show();
        return
    }
    if (!c) {
        c = '正在处理...'
    }
    if (d.length === 0) {
        d = b('<div id="status" class="status"><div id="y" class="y" style="top:0xp;left:0px"><div id="statusText" class="statusText">' + c + '</div></div></div>');
        b('body').append(d)
    }
    b('#statusText').text(c);
    d.data('startTime', new Date().getTime());
    d.show().animate({
        bottom: '25px'
    }, 300)
};
b.hideStatus = function () {
    var d = b('#status');
    if (d.hasClass('mobile')) {
        d.hide();
        return
    }
    var c = new Date().getTime(),
    e = d.data('startTime');
    if (c - e < 1000) {
        setTimeout(function () {
            d.animate({
                bottom: '0px'
            }, 300).hide()
        }, 1000 - (c - e))
    } else {
        d.animate({
            bottom: '0px'
        }, 300).hide()
    }
};
b.fn.setErrorFlag = function (c) {
    if (!this.hasClass('error')) {
        this.addClass('error');
        if (c) {
            var d = b('<div class="error-msg">' + c + '</div>');
            this.after(d)
        }
    } else {
        if (this.effect) {
            this.effect('shake', {
                distance: 10,
                times: 3
            }, 20)
        }
    }
};
b.fn.clearErrorFlag = function () {
    this.removeClass('error');
    this.parent().find('.error-msg').remove()
};
b.initDate = function (c, d) {
    var e = function (f, g) {
        var h = b(g).parent().parent();
        if (f) {
            h.find('input.yyyy').val(f.getFullYear());
            h.find('input.mm').val(b.formatHH(f.getMonth() + 1));
            h.find('input.dd').val(b.formatHH(f.getDate()))
        }
    };
    if (d) {
        e = d
    }
    c.find('.yyyy,.mm,.dd').bind({
        keypress: function (f) {
            if (!((f.which >= 48 && f.which <= 57) || f.which === 8 || f.which === 0)) {
                return false
            }
        }
    });
    if (b.fn.datepicker) {
        c.find('input.datepincker').datepicker({
            showOn: 'button',
            buttonImage: '/rs/css/images/calendar.png',
            buttonImageOnly: true,
            monthNames: Date.monthNames || [
                '一月',
                '二月',
                '三月',
                '四月',
                '五月',
                '六月',
                '七月',
                '八月',
                '九月',
                '十月',
                '十一月',
                '十二月'
            ],
            monthNamesShort: Date.abbrMonthNames || [
                '一',
                '二',
                '三',
                '四',
                '五',
                '六',
                '七',
                '八',
                '九',
                '十',
                '十一',
                '十二'
            ],
            dayNames: Date.abbrDayNames || [
                '星期日',
                '星期一',
                '星期二',
                '星期三',
                '星期四',
                '星期五',
                '星期六'
            ],
            dayNamesMin: Date.dayNames || [
                '日',
                '一',
                '二',
                '三',
                '四',
                '五',
                '六'
            ]
        }).bind({
            change: function () {
                e(b(this).datepicker('getDate'), this)
            }
        })
    }
};
b.fn.decorateIframe = function (c) {
    if (b.browser.msie && b.browser.version < 7) {
        var d = b.extend({
        }, b.fn.decorateIframe.defaults, c);
        b(this).each(function () {
            var e = b(this);
            var f = b('<iframe />');
            f.attr('id', d.iframeId);
            f.css('position', 'absolute');
            f.css('display', 'none');
            f.css('display', 'block');
            f.css('z-index', d.iframeZIndex);
            f.css('border');
            f.css('top', '0');
            f.css('left', '0');
            if (d.width == 0) {
                f.css('width', e.width() + parseInt(e.css('padding')) * 2 + 'px')
            }
            if (d.height == 0) {
                f.css('height', e.height() + parseInt(e.css('padding')) * 2 + 'px')
            }
            e.append(f)
        })
    }
};
b.fn.decorateIframe.defaults = {
    iframeId: 'decorateIframe1',
    iframeZIndex: - 1,
    width: 0,
    height: 0
};
b.fn.initNumber = function (c) {
    return this.each(function (e, d) {
        if (!c) {
            b(d).keyup(function () {
                b(this).val(b(this).val().replace(/\D|^0/g, ''))
            }).bind('paste', function () {
                b(this).val(b(this).val().replace(/\D|^0/g, ''))
            }).css('ime-mode', 'disabled')
        } else {
            b(d).keyup(function () {
                b(this).val(b(this).val().replace(/[^(\-?\d\.?)]/g, ''))
            }).bind('paste', function () {
                b(this).val(b(this).val().replace(/[^(\-?\d\.?)]/g, ''))
            }).css('ime-mode', 'disabled')
        }
    })
};
b.fn.textWidthBr = function (c) {
    this.html(b.enterToBr(b.encHTML(c)));
    return this
};
b.fn.outerHTML = function (c) {
    return (c) ? this.before(c).remove()  : b('').append(this.eq(0).clone()).html()
};
b.fn.setDateTimeValue = function (c) {
    var e = new Date(c);
    this.find(':text.yyyy').val(e.getFullYear());
    this.find(':text.mm').val(b.formatHH(e.getMonth() + 1));
    this.find(':text.dd').val(b.formatHH(e.getDate()));
    this.find('select.ho').val(e.getHours());
    this.find('select.mi').val(e.getMinutes());
    return this
};
b.fn.getValues = function () {
    var d = this;
    o = {
    };
    b(':text,select,input:checked,textarea,input[type=hidden],input[type=number],input[type=date],input[type=tel],input[type=email],input[type=url],input[type=time],:password', this).each(function (f, h) {
        var j = b(h),
        c = j.attr('name'),
        g = j.attr('type'),
        e = b.trim(j.val()) || '';
        if (!c) {
            return true
        }
        if (j.attr('exclude') !== '1') {
            if (o[c]) {
                if (!o[c].push) {
                    o[c] = [
                        o[c]
                    ]
                }
                o[c].push(e)
            } else {
                o[c] = e
            }
        }
    });
    b(':checkbox', this).each(function (e, f) {
        var h = b(f),
        c = h.attr('name'),
        g = b(':checkbox[name=\'' + c + '\']', d).length;
        if (!c) {
            return true
        }
        if (o[c] === undefined) {
            if (g > 1) {
                o[c] = [
                ]
            } else {
                o[c] = ''
            }
        } else {
            if (g > 1 && !o[c].push) {
                o[c] = [
                    o[c]
                ]
            }
        }
    });
    b(':radio', this).each(function (e, f) {
        var g = b(f),
        c = g.attr('name');
        if (!c) {
            return true
        }
        if (o[c] === undefined) {
            o[c] = ''
        }
    });
    return o
};
b.fn.setValues = function (e, f, d) {
    var h = this,
    g;
    b(':text,select,textarea,input[type=\'hidden\'],input[type=number],input[type=date],input[type=tel],input[type=email],:password', this).val('');
    b(':checkbox,:radio', this).removeAttr('checked');
    b.each(e, function (m, l) {
        if (!l) {
            return true
        }
        var c = ':input[name=\'' + m + '\']';
        if (d) {
            c = ':input[name=\'' + m + '\'],:input[name^=\'' + m + '_\']'
        }
        g = b(c, h);
        if (!f) {
            g = g.filter(':visible')
        }
        if (g.size() > 0) {
            if (g.is(':checkbox', h)) {
                var i;
                if (b.isArray(l)) {
                    b.each(l, function (k, p) {
                        p = b.formatHTMLValue(p);
                        i = g.filter('[value=\'' + p + '\']');
                        i.prop('checked', true);
                        if (i.attr('rel')) {
                            b(i.attr('rel')).removeClass('hide')
                        }
                    })
                } else {
                    l = b.formatHTMLValue(l);
                    i = g.filter('[value=\'' + l + '\']');
                    i.prop('checked', true);
                    if (i.attr('rel')) {
                        b(i.attr('rel')).removeClass('hide')
                    }
                    if (i.attr('relbg')) {
                        b(i.attr('relbg')).removeClass('bgwhite bggray').addClass('bggray')
                    }
                }
            } else {
                if (g.is(':radio', h)) {
                    l = b.formatHTMLValue(l);
                    var j = g.filter('[value=\'' + l + '\']');
                    b.each(j, function (p, s) {
                        var q = b(s);
                        q.prop('checked', true);
                        if (q.attr('rel')) {
                            var k = q.attr('name');
                            h.find(':radio[name=\'' + k + '\']').each(function (t, u) {
                                var r = b(u);
                                b(r.attr('rel')).addClass('hide')
                            });
                            b(q.attr('rel')).removeClass('hide')
                        }
                    })
                } else {
                    try {
                        g.val(l)
                    } catch (n) {
                    }
                }
            }
        }
    });
    b('input[type=\'hidden\']', h).each(function (c, j) {
        b(j).val(e[b(j).attr('name')])
    })
};
b.fn.helpTip = function () {
    b('#helpTip').click(function () {
        b('#sIframe').css('left', '').css('top', '');
        b('#sIframe').hide();
        b(this).fadeOut()
    });
    return this.each(function (c, d) {
        var d = b(d);
        d.click(function () {
            var e = b('#helpTip');
            if (e.is(':visible')) {
                e.fadeOut();
                b('#sIframe').css('left', '').css('top', '');
                b('#sIframe').hide()
            } else {
                e.css('left', '').css('top', '');
                e.find('b').text(d.attr('title'));
                e.find('em').html(d.attr('rel'));
                e.position({
                    of: d,
                    my: 'left top',
                    at: 'right bottom'
                });
                e.hide();
                e.fadeIn();
                if (b.browser.msie && b.browser.version === '6.0') {
                    if (b('#sIframe').length === 0) {
                        b('body').append('<iframe id=\'sIframe\' class=\'sIframe hide\'></iframe>')
                    }
                    var f = b('#sIframe');
                    f.width(e.outerWidth());
                    f.height(e.outerHeight());
                    f.position({
                        of: e,
                        my: 'left top',
                        at: 'left top'
                    });
                    f.show()
                }
            }
            return false
        })
    })
};
b.fn.autoHeightText = function () {
    function c(d) {
        if (parseInt(d.style.height) > 24) {
            d.style.height = 'auto'
        }
        d.scrollTop = 0;
        d.style.height = d.scrollHeight + 'px'
    }
    this.each(function () {
        c(this);
        b(this).bind({
            keyup: function () {
                c(this)
            }
        })
    })
}
}) (jQuery); Date.prototype.addDate = function (a, c) {
var b = this;
switch (a) {
    case 's':
        return new Date(b.getTime() + (1000) * c);
    case 'n':
        return new Date(b.getTime() + (60000) * c);
    case 'h':
        return new Date(b.getTime() + (3600000) * c);
    case 'd':
        return new Date(b.getTime() + (86400000) * c);
    case 'w':
        return new Date(b.getTime() + (86400000 * 7) * c);
    case 'm':
        return new Date(b.getFullYear(), b.getMonth() + c, b.getDate(), b.getHours(), b.getMinutes(), b.getSeconds());
    case 'y':
        return new Date(b.getFullYear() + c, b.getMonth(), b.getDate(), b.getHours(), b.getMinutes(), b.getSeconds())
}
};
Date.prototype.toString = function () {
return $.format('{0}-{1}-{2}', this.getFullYear(), $.formatHH(this.getMonth() + 1), $.formatHH(this.getDate()))
};
String.prototype.endWith = function (b) {
var a = new RegExp(b + '$');
return a.test(this)
};
Math.formatFloat = function (b, c) {
var a = Math.pow(10, c);
return parseInt(b * a, 10) / a
};
function playlightbox(a) {
$.lightBox({
    url: '../../web/video.jsp?URL=' + a,
    size: 'cus1',
    loaded: function () {
        $('#lightBox').find('a.close').attr('style', 'text-decoration:none');
        setTimeout(function () {
            $('#video1').attr('src', resRoot + '/' + a)
        }, 50)
    }
})
}
$(document).ready(function () {
if (!window.isOem) {
    $('a.help,a.video').removeClass('hide')
}
$('#nav').find('li.app').bind({
    mouseover: function () {
        $(this).find('>a').addClass('selected');
        $('#menuApps').show()
    }
});
$('#menuApps').bind({
    mouseout: function () {
        $(this).parent().find('>a').removeClass('selected');
        $(this).hide()
    }
})
});
