var isValidate = true;
DEFFLD = {
    field_li: '<li class=""></li>',
    form_but: {
        html: ' <li class="pc-submit"><input id="btnSubmit" class="btn-submit" onclick="return false;" value="提交" type="submit"></li>'
    },
    text: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content textcontent"><input type="text"  maxlength="255" class="input fld" /></div>'
    },
    number: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><input type="text" maxlength="32" class="input fld" /></div>'
    },
    textarea: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><textarea  class="input fld"></textarea></div>'
    },
    checkbox: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"></div>'
    },
    goods: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><div class="nogoods-holder">请在右侧添加商品</div></div>'
    },
    goodsnoimg: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><div class="nogoods-holder">请在右侧添加商品</div></div>'
    },
    radio: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"></div>'
    },
    dropdown: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><select  class="m input fld"></select></div>'
    },
    dropdown2: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><select  class="m input fld"></select> <select  class="m input"></select></div>'
    },
    image: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><img style="width:100%;" src="/rs/images/defaultimg.png"></div>'
    },
    section: {
        html: '<div class="noLabelAlign"><label class="desc section">分隔符</label><div class="content">这里是分隔符说明</div></div>'
    },
    html: {
        html: '<div class="noLabelAlign"><label class="desc">HTML标题</label><div class="content"><p>这里可以显示HTML内容</p></div></div>'
    },
    date: {
        html: '<label class="desc">日期 <span class="req hide"> *</span></label><div class="content oneline reduction"><span>\t<input class="yyyy input"  maxlength="4" type="text"/>\t<label>YYYY</label></span><span class="split"> - </span><span>\t<input class="mm input"  maxlength="2" type="text"/>\t<label>MM</label></span><span class="split"> - </span><span>\t<input class="dd input"  maxlength="2" type="text"/>\t<label>DD</label></span><span><a class="icononly-date" title="选择日期"></a></span></div>'
    },
    date_ymd: '<label class="desc"><span class="req hide"> *</span></label><div class="content textcontent"><input type="text"  maxlength="255" onClick="WdatePicker()" class="input fld" /></div>',
    date_mdy: '<label class="desc"><span class="req hide"> *</span></label><div class="content textcontent"><input type="text"  maxlength="255" onClick="WdatePicker()" class="input fld" /></div>',
    date_dmy: '<label class="desc"><span class="req hide"> *</span></label><div class="content textcontent"><input type="text"  maxlength="255" onClick="WdatePicker()" class="input fld" /></div>',
    time: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content oneline reduction"><span>\t<select class="hh input" ></select></span><span class="split"> : </span><span>\t<select class="mm input" ></select></span></div>'
    },
     file: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><form method="post" target="hidden_frame" enctype="multipart/form-data" action="/CustomFrom/FormDesign/FileUpload"><input type="file"  class="m input" />&nbsp;<input type="submit" class="btn file-input"  value="提交..." /><iframe name="hidden_frame" id="hidden_frame" style="display: none"></iframe></form></div>'
    },
    phone: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content oneline reduction"><input type="text"  maxlength="32" class="s input fld" /> <button type="button" class="btn sendcode hide">发送验证码</button></div>'
    },
    item_checkbox_f: '<span><input type="checkbox" /><label></label></span>',
    item_radio_f: '<span><input type="radio" /><label></label></span>',
    phone_tel_cn: '<span><input class="input"  maxlength="4" size="4" type="text"/><label>区号</label></span><span class="split"> - </span><span><input class="input"   maxlength="8" size="8" type="text"/><label>总机</label></span><span class="split"> - </span><span><input class="input"   maxlength="4" size="4" type="text"/><label>分机</label></span>',
    phone_tel_en: '<span><input class="input"  maxlength="4" size="4" type="text"/><label>####</label></span><span class="split"> - </span><span><input class="input"   maxlength="8" size="8" type="text"/><label>########</label></span><span class="split"> - </span><span><input class="input"   maxlength="4" size="4" type="text"/><label>####</label></span>',
    phone_mobile_cn: '<input type="text"  maxlength="32" class="s input" /> <button type="button" class="btn sendcode hide">发送验证码</button>',
    phone_mobile_en: '<input type="text"  maxlength="32" class="s input" /> <button type="button" class="btn sendcode hide">发送验证码</button>',
    url: {
        html: '<label class="desc"> <span class="req hide"> *</span></label><div class="content"><input type="text"  maxlength="256" class="m input" value="http://" /></div>'
    },
    money: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><b>￥</b><input type="text"  maxlength="16" size="8" class="input" /></div>'
    },
    email: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><input type="text"  maxlength="64" class="m input" /></div>'
    },
    name: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content oneline reduction"><input type="text"  maxlength="128" value="" class="s input" /></div>'
    },
    name_short: '<input type="text"  maxlength="128" value="" class="s input" /></div>',
    name_extend_en: '<span><input class="input"   maxlength="128" size="6" type="text"/><label>Title</label></span><span class="split"> - </span><span><input class="input"  maxlength="128" size="10" type="text"/><label>First Name</label></span><span class="split"> - </span><span><input class="input"   maxlength="128" size="10" type="text"/><label>Last Name</label></span>',
    name_extend_cn: '<span><input class="input"  maxlength="4" size="4" type="text"/><label>姓</label></span><span class="split"> - </span><span><input class="input"   maxlength="4" size="8" type="text"/><label>名</label></span><span class="split"> - </span><span><input class="input"   maxlength="4" size="4" type="text"/><label>称呼</label></span>',
    map: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content"><input type="text" class="xxl location" readonly="readonly" /><div class="map"><img src="http://rs.jsform.com/rs/images/map.jpg"</div></div>'
    },
    address: {
        html: '<label class="desc"><span class="req hide"> *</span></label><div class="content onelineLeft reduction"><span class="left third clear"><select  class="xxl input province"><option value="">省/自治区/直辖市</option></select></span><span class="left third"><select  class="xxl input city" ><option value="">市</option></select></span><span class="left third"><select  class="xxl input zip" ><option value="">区/县</option></select></span><span class="left" style="margin:5px 5px 0px 0px;width:100%;"><textarea style="height:60px;"  class="input xxl detail" placeholder="详细地址" ></textarea></span></div>'
    },
    address_en: '<span class="left third clear"><select  class="xxl input province"><option value="">省/自治区/直辖市</option></select></span><span class="left third"><select  class="xxl input city" ><option value="">市</option></select></span><span class="left third"><select  class="xxl input zip" ><option value="">区/县</option></select></span><span class="left" style="margin:5px 5px 0px 0px;width:100%;"><textarea style="height:60px;"  class="input xxl detail" placeholder="Street"></textarea></span>',
    address_cn: '<span class="left third clear"><select  class="xxl input province"><option value="">省/自治区/直辖市</option></select></span><span class="left third"><select  class="xxl input city" ><option value="">市</option></select></span><span class="left third"><select  class="xxl input zip" ><option value="">区/县</option></select></span><span class="left" style="margin:5px 5px 0px 0px;width:100%;"><textarea style="height:60px;"  class="input xxl detail" placeholder="详细地址"></textarea></span>',
    likert: {
        html: '<div class="content noLabelAlign"><table class="table" cellspacing="0"><caption><label class="desc"><span class="req hide"> *</span></label></caption><thead><tr></tr></thead><tbody></tbody></table></div>'
    }
}
//初始化radio by wyl
function initRadio() {
    $('li[typ=\'radio\']', '#fields').each(function (g, r) {
        var e = $(r),
        n = e.find('div.content');
        if (e.has('fieldset').length > 0) {
            n = n.find('fieldset')
        }
        if (e.attr('random') == '1') {
            var d = [
            ],
            k = n.find('span');
            if (k.length == 0) {
                k = n.find('>label')
            }
            var q = $(k[k.length - 1]).find(':radio').hasClass('other'),
            m,
            f = k.length;
            if (q) {
                m = k[k.length - 1];
                f = k.length - 1
            }
            while (d.length < f) {
                var o = Math.random();
                o = Math.round(o * (f - 1));
                if ($.inArray(o, d) === -1) {
                    d.push(o)
                }
            }
            n.empty();
            for (j = 0; j < f; j++) {
                n.append(k[d[j]])
            }
            if (q) {
                n.append(m)
            }
        }
        n.find('>label:eq(0)').addClass('first');
        var b = function () {
            var s = $(this).parent().parent(),
            l = $.trim($(this).val());
            if (!l) {
                l = '其它'
            }
            s.find(':radio.other').val(l)
        };
        n.find(':text.other').bind({
            keyup: b,
            change: b,
            click: function (c) {
                $(this).parent().parent().find(':radio.other').prop('checked', true);
                highlight(c, this)
            }
        })
    });
    if (!window.isForMobile) {
        var a = null;
        $(':radio').bind({
            click: function (b) {
                if (a === this) {
                    $(a).prop('checked', false).trigger('change');
                    a = null
                } else {
                    a = this;
                    if ($(this).hasClass('other')) {
                        $(this).parent().find(':text.other').focus()
                    }
                }
                b.stopPropagation()
            }
        });
        $('table.table td').click(function () {
            var b = $(this).find(':radio');
            b.attr('checked', true)
        })
    }
}
function createRadioItemsPreview(b, f) {
    f.empty();
    var e;
    var a;
    var d = false;
    $.each(b.ITMS, function (g, c) {
        if (c.IMG) {
            d = true;
            return false
        }
    });
    $.each(b.ITMS, function (g, c) {
        e = $(DEFFLD.item_radio_f);
        e.find('label').text(c.VAL);
        e.find(':radio').prop('checked', c.CHKED === '1');
        if (d) {
            if (c.IMG) {
                a = $('<div class=\'goods-item\'><div class=\'image-center\'><img class=\'img\' src=\'' + IMAGESURL + c.IMG + '\'/></div><div class=\'text-wapper center\'><span>' + e.html() + '</span></div></div>')
            } else {
                a = $('<div class=\'goods-item\'><div class=\'image-center\'><img class=\'img\' src=\'\'/></div><div class=\'text-wapper center\'><span>' + e.html() + '</span></div></div>')
            }
            f.append(a)
        } else {
            f.append(e)
        }
    });
    e = $(DEFFLD.item_radio_other_f);
    if (b.OTHER === '1') {
        e.show()
    } else {
        e.hide()
    }
    f.append(e)
}
function isInstruct(a) {
    if (M.INSTR !== '1') {
        return false
    } else {
        if (a === 'likert' || a === 'section' || a === 'html' || a === 'goods' || a === 'image') {
            return false
        }
    }
    return true
}
function createFields() {
    var b,
	//标签对其方式
    a = $('#fields').empty();
    if ('L' === M.LBLAL) {
        a.addClass('leftLabel')
    } else {
        if ('R' === M.LBLAL) {
            a.addClass('leftLabel labelRight')
        }
    }
    var mwith = 0;
    //循环数据  typ="text" min="2323" max="432" reqd="1" uniq="1" def="默认值"
    $.each(F, function (d, c) {
        if (!c) {
            return true
        }

        b = $(DEFFLD.field_li);
        b.attr('id', M.GID + d);
        b.attr("typ", c.TYP);
        if (c.min != undefined && c.min != "") {
            b.attr("min", c.min)
        };
        if (c.max != undefined && c.max != "") {
            b.attr("max", c.max)
        }
        ;
        if (c.reqd != undefined && c.reqd != "0") {
            b.attr("reqd", c.reqd)
        };
        if (c.uniq != undefined && c.uniq != "0") {
            b.attr("uniq", c.uniq)
        };
        if (c.def != undefined && c.def != "") {
            b.attr("def", c.def)
        };
        if (c.LAYOUT != undefined && c.LAYOUT != "") {
            b.addClass(c.LAYOUT)
            mwith += 200;
        }
        if (c.INSTR != undefined && c.INSTR != "") {
            b.addClass("fieldInstruct");
        }
        createField(b, c, d + 1);

        a.append(b);
        // if (needHandle(c.TYP)) {
        // var e = $(DEFFLD.handle);
        // b.append(e);
        // resizeHandle(b)
        // }
    });
    if ($.isEmptyObject(F)) {
        $('#nofields').show();
        $('#formButtons').hide()
    }
    if (M.GID != "") {
        a.append(DEFFLD['form_but'].html);
    }
    //$('#fields').find('li.first').removeClass('first').end().find('li:first').addClass('first')
}
function createField(r, q, num) {
    if (!q) {
        return
    }
    var p,
    o,
    l,
    m;
    // r.removeClass('one two three oneByOne fieldInstruct');
    // r.attr('title', '点击编辑，拖动排序');
    r.empty();

    $('#nofields').hide();
    $('#formButtons').show();
    l = $(DEFFLD[q.TYP].html);
    //l.attr("name","F"+num);
    if ('goods' == q.TYP && '1' == q.NOIMG) {
        l = $(DEFFLD.goodsnoimg.html)
    }
    if (q.TYP === 'html' || q.TYP === 'section') {
        p = l.find('label.desc');
        m = l.find('div.content')
    } else {
        p = l.filter('label.desc');
        m = l.filter('div.content')
    }
    if (q.TYP === 'likert') {
        p = m.find('label.desc')
    }
    o = p.find('span');
    if (q.REQD === '1') {
        o.removeClass('hide')
    }
    p.text(q.LBL);
    p.append(o);
    if (q.TYP === 'text' && '1' == q.QRINPUT) {
        m.find('i.qrinput').removeClass('hide')
        m.find('text').attr('name', 'F' + num);

    } else {
        if (q.TYP === 'phone' && q.FMT) {
            m.html(DEFFLD[$.format('phone_{0}_{1}', q.FMT, M.LANG)]);
            '1' == q.AUTH ? m.find('.sendcode').show() : m.find('.sendcode').hide();
            '1' == q.AUTH ? $('#signcnt').show() : $('#signcnt').hide()
        } else {
            if (q.TYP === 'date' && q.FMT) {
                m.html(DEFFLD[$.format('date_{0}', q.FMT)])
            } else {
                if (q.TYP === 'name' && q.FMT) {
                    if (q.FMT === 'short') {
                        m.html(DEFFLD.name_short)
                    } else {
                        m.html(DEFFLD[$.format('name_{0}_{1}', q.FMT, M.LANG)])
                    }
                } else {
                    if (q.TYP === 'address') {
                        m.html(DEFFLD[$.format('address_{0}', M.LANG)]);
                        if (q.DEF) {
                            var g = q.DEF.split('-');
                            m.find('select.province').empty().append($.format('<option>{0}</option>', g[0] || '省/自治区/直辖市'));
                            m.find('select.city').empty().append($.format('<option>{0}</option>', g[1] || '市'));
                            m.find('select.zip').empty().append($.format('<option>{0}</option>', g[2] || '区/县'))
                        }
                    } else {
                        if (q.TYP === 'radio') {
                            createRadioItemsPreview(q, m)
                        } else {
                            if (q.TYP === 'checkbox') {
                                m.empty();
                                var b;
                                var a;
                                var i = false;
                                $.each(q.ITMS, function (j, c) {
                                    if (c.IMG) {
                                        i = true;
                                        return false
                                    }
                                });
                                $.each(q.ITMS, function (j, c) {
                                    b = $(DEFFLD.item_checkbox_f);
                                    b.find('label').text(c.VAL);
                                    b.find(':checkbox').prop('checked', c.CHKED === '1');
                                    if (i) {
                                        if (c.IMG) {
                                            a = $('<div class=\'goods-item\'><div class=\'image-center\'><img class=\'img\' src=\'' + IMAGESURL + c.IMG + '\'/></div><div class=\'text-wapper center\'><span>' + b.html() + '</span></div></div>')
                                        } else {
                                            a = $('<div class=\'goods-item\'><div class=\'image-center\'><img class=\'img\' src=\'\'/></div><div class=\'text-wapper center\'><span>' + b.html() + '</span></div></div>')
                                        }
                                        m.append(a)
                                    } else {
                                        m.append(b)
                                    }
                                })
                            } else {
                                if (q.TYP === 'image') {
                                    m.find('img').attr('src', q.IMG ? IMAGESURL + q.IMG : '/rs/images/defaultimg.png')
                                    //m.find('img').attr('name','F'+num);
                                } else {
                                    if (q.TYP === 'goods') {
                                        createGoodsItemsPreView(q, m)
                                    } else {
                                        if (q.TYP === 'section') {
                                            m.html($.enterToBr((q.SECDESC || '')))
                                        } else {
                                            if (q.TYP === 'html') {
                                                m.html($.encodeScript(q.HTML || ''))
                                            } else {
                                                if (q.TYP === 'likert') {
                                                    createLikertPreview(q, l)
                                                } else {
                                                    if (q.TYP === 'dropdown2') {
                                                        var d = q.pN || '2';
                                                        if (d !== '2') {
                                                            d = parseInt(d);
                                                            m.find('select').remove();
                                                            for (var f = 0; f < d; f++) {
                                                                m.append('<select disabled="disabled" class="input"></select>')
                                                            }
                                                            m.find('select').css({
                                                                width: (100 / d - 1) + '%',
                                                                'margin-right': '1%'
                                                            })
                                                        }
                                                        for (var e = 0; e < q.ITMS.length; e++) {
                                                            if (q.ITMS[e].CHKED === '1') {
                                                                m.find('select:first').empty().append($.format('<option>{0}</option>', q.ITMS[e].VAL));
                                                                break
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if (q.TYP === 'dropdown') {
        $.each(q.ITMS, function (j, c) {
            if (c.CHKED === '1' && c.VAL) {
                m.find('select').append($.tmpl('<option selected="true">${$data}</option>', c.VAL));
               // return false
            }
            else {
                m.find('select').append($.format('<option>{0}</option>', c.VAL));
            }
        })
    }
    if (q.DEF) {
        var s = [
            'text',
            'textarea',
            'number',
            'ulr',
            'email',
            'money',
            'phone'
        ];
        if ($.inArray(q.TYP, s) >= 0) {
            if (q.TYP === 'phone' && q.FMT === 'tel') {
                $.each(q.DEF.split('-'), function (j, c) {
                    m.find(':text:eq(' + j + ')').val(c)
                })
            } else {
                l.find(':input').val(q.DEF)
            }
        }
    }
    if (q.FLDSZ) {
        m.find(':text,textarea,select').removeClass('s m xxl').addClass(q.FLDSZ)
    }
    var h = $(DEFFLD.instruct);
    if (q.INSTR) {
        h.text(q.INSTR)
    }
    r.append(DEFFLD.icon).append(l).append(h).append(DEFFLD.fieldActions);
    if (isInstruct(q.TYP)) {
        r.addClass('fieldInstruct')
    }
    if (q.LAY) {
        r.addClass(q.LAY)
    }
    if (q.SCU == 'pri') {
        r.addClass('private')
    }
    m.find(':text,textarea,select,img,hidden').attr('name', 'F' + num);
}
//初始化 upload
function initUpload() {
    var b = function (d) {
        var k;
        if ($('#_id').val()) {
            var m = d.find('div.content'),
            l = m.find('input.fileSize').attr('name'),
            g = m.find('input.fileId').attr('name'),
            f = m.find('input.fileType').val(),
            e = [
                g.substring(0, l.indexOf('_')),
                m.find('input.fileType').attr('name'),
                l.substring(0, l.indexOf('_')),
                m.find('input.fileName').attr('name')
            ];
            k = {
                ENTRYID: $('#_id').val(),
                FRMID: $('#FRMID').val(),
                FILEID: m.find('input.fileId').val(),
                FILETYPE: f,
                FILEFIELDS: e,
                FLDID: d.attr('id')
            }
        } else {
            k = {
                FRMID: $('#FRMID').val(),
                FLDID: d.attr('id')
            }
        }
        return k
    },
    a = function (d, e) {
        var f = d.find('div.content');
        if (e.status === 'success') {
            d.removeClass('error').find('p.errMsg').remove();
            f.find('div.uploadedFile').show();
            if ($.isImage(e.fileName)) {
                f.find('span.uploadedFileName').html($.format('<img class="img-edit" src="{0}" />', IMAGEURL + e.fileId + e.fileType + FILEIMAGEEDITSTYLE))
            } else {
                f.find('span.uploadedFileName').text($.format('{0}({1})', e.fileName, $.formatFileSize(e.fileSize)))
            }
            f.find('input.fileId').val(e.fileId).trigger('change');
            f.find('input.fileName').val(e.fileName).trigger('change');
            f.find('input.fileSize').val(e.fileSize).trigger('change');
            f.find('input.fileType').val(e.fileType).trigger('change')
        } else {
            if (e.status === 'error') {
                showErrorMsg(d, $.format(msg[e.errCode], e.msg));
                f.find('input.fileId').val('').trigger('change');
                f.find('input.fileName').val('').trigger('change');
                f.find('input.fileSize').val('').trigger('change');
                f.find('input.fileType').val('').trigger('change')
            }
        }
        $('#btnSubmit').prop('disabled', false);
        $.hideStatus()
    };
    $('#fields').find('input.file').each(function (e, d) {
        var g = $(d),
        c = g.parent().parent(),
        k;
        g.localResizeIMG({
            cprs: c.attr('cprs'),
            quality: 0.5,
            before: function (l, f) {
                k = $(l).val().match(/[^\/\\]*$/)[0];
                $.showStatus('正在上传文件...')
            },
            unsupport: function () {
                ajaxUpload(c)
            },
            success: function (f) {
                var l = $.extend(b(c), {
                    IMAGENAME: k,
                    IMAGEDATA: f.clearBase64
                });
                if (l.FILEFIELDS) {
                    l.FILEFIELDS = l.FILEFIELDS.join(',')
                }
                jQuery.ajax({
                    url: '/web/formview/compressandupload',
                    data: l,
                    type: 'post',
                    contentType: 'application/x-www-form-urlencoded',
                    dataType: 'json',
                    success: function (n, m) {
                        a(c, n);
                        $.hideStatus()
                    },
                    error: function (n, m, o) {
                        showErrorMsg(c, $.format(msg.uploadError, o));
                        isValidate = true;
                        $('#btnSubmit').prop('disabled', false);
                        $.hideStatus();
                        return false
                    }
                })
            }
        })
    });
    $('a.deleteIcon', '#fields').live({
        click: function () {
            if ($(this).parent().find('.progress-bar').width() == 0) {
                $(this).parent().remove()
            } else {
                if (confirm('删除后不可恢复，确认删除吗？')) {
                    var r = $(this).parents('.content'),
                    q = $(this).parent(),
                    g,
                    m = '/web/formview/deletefile';
                    if ($('#_id').val()) {
                        var s = r.find('input.fileSize').attr('name'),
                        e = r.find('input.fileId').attr('name'),
                        t = r.find('input.fileType').val(),
                        k = [
                            e.substring(0, s.indexOf('_')),
                            r.find('input.fileType').attr('name'),
                            s.substring(0, s.indexOf('_')),
                            r.find('input.fileName').attr('name')
                        ];
                        var n = $(this).parent().index();
                        var l = $(this).parents('li').find('.fileName').val().split(',')[n];
                        var f = $(this).parents('li').find('.fileId').val().split(',')[n];
                        var o = l.split('.').length;
                        g = {
                            ENTRYID: $('#_id').val(),
                            FRMID: $('#FRMID').val(),
                            FILEID: f,
                            FILETYPE: '.' + l.split('.')[o - 1],
                            FILEFIELDS: k,
                            INITTIME: INITTIME
                        };
                        m = '/web/entries/deletefile'
                    } else {
                        var n = $(q).index();
                        g = {
                            FRMID: $('#FRMID').val(),
                            FILEID: r.find('input.fileId').val().toString().split(',')[n],
                            FILETYPE: r.find('input.fileType').val().toString().split(',')[n]
                        }
                    }
                    $.showStatus('正在删除文件...');
                    $.postJSON(m, g, function (D) {
                        if (D) {
                            $.alert(D.ERRMSG);
                            $.hideStatus();
                            return
                        }
                        var A = $(q).index();
                        var d = r.find('input.fileId').val().toString().split(',');
                        var x = r.find('input.fileName').val().toString().split(',');
                        var u = r.find('input.fileSize').val().toString().split(',');
                        var C = r.find('input.fileType').val().toString().split(',');
                        d.splice(A, 1);
                        x.splice(A, 1);
                        u.splice(A, 1);
                        C.splice(A, 1);
                        q.remove();
                        var B = r.find('input.fileId'),
                        z = r.find('input.fileName'),
                        v = r.find('input.fileSize'),
                        c = r.find('input.fileType');
                        B.val(d).trigger('change');
                        z.val(x).trigger('change');
                        v.val(u).trigger('change');
                        c.val(C).trigger('change');
                        if ($('#_id').val()) {
                            var y = {
                            };
                            y[B.attr('name').split('_')[0]] = d.join(',');
                            y[z.attr('name').split('_')[0]] = x.join(',');
                            y[v.attr('name').split('_')[0]] = u.join(',');
                            y[c.attr('name').split('_')[0]] = C.join(',');
                            $.postJSON('updateentry', {
                                FRMID: $('#FRMID').val(),
                                ENTRYID: $('#_id').val(),
                                DATA: y
                            }, function () {
                            })
                        }
                        $.hideStatus()
                    })
                }
            }
            return false
        }
    })
}
var calShopCard = function () {
    var k = false,
    a,
    l,
    g,
    n,
    d,
    b,
    f = 0,
    o = 0,
    m = 0;
    $('#fields>li[TYP=\'goods\']').each(function (r, q) {
        a = $(q);
        if (!a.is(':visible')) {
            return true
        }
        l = $('#ul' + a.attr('id')).empty();
        a.find('div.goods-item').each(function (s, t) {
            var u = $(t);
            d = parseFloat(u.find('input.number').val()) || 0;
            n = u.find('div.price').text();
            g = parseFloat(n.replace(/[¥$£€]/, '')) || 0;
            b = u.find('label.name').text();
            if (d > 0) {
                l.append($.format('<li><span class=\'goods-name\'>{0}</span><span class=\'price-number\'>{1} × {2}</span></li>', b, n, d));
                m += d * g;
                k = true
            }
        })
    });
    m = m.toFixed(2);
    f = m;
    var c = parseFloat($('#shopping_cart').find('span.salem').text()) || 0,
    e = parseFloat($('#shopping_cart').find('span.salej').text()) || 0;
    if (c > 0 && e > 0) {
        o = (Math.floor(m / c) * e).toFixed(2);
        f = (m - o).toFixed(2)
    }
    $('#amount').val(f);
    if (k) {
        $('#shopping_cart').show().find('span.total').text(m).end().find('span.amount').text(f);
        if (o > 0) {
            $('#shopping_cart').find('div.discount-container').show().find('span.discount').text(o)
        } else {
            $('#shopping_cart').find('div.discount-container').hide()
        }
    } else {
        $('#shopping_cart').hide()
    }
};
function initGoods() {
    $('#fields div.goods-item a.decrease,#fields div.goods-item a.increase').click(function () {
        var d = $(this).parent(),
        b = d.find('input.number'),
        a = parseFloat(b.val()) || 0;
        if (b.prop('disabled')) {
            return false
        }
        if ($(this).hasClass('decrease')) {
            if (a >= 1) {
                b.val(--a)
            }
        } else {
            b.val(++a)
        }
        calShopCard();
        return false
    });
    $('#fields div.goods-item').find('input.number').bind({
        blur: function () {
            calShopCard()
        }
    });
    $('#fields div.goods-item').find('input.number').trigger('blur')
}
//初始化验证码操作
function initAuthCode() {
    $('#fields').find('button.sendcode').click(function () {
        var b = $('div.content').has(this).find('input.phone').val();
        if ($.isMobile(b)) {
            var c = $(this),
            a = c.parent().find('span.ui-btn-text');
            $.showStatus('正在发送手机验证码...');
            $.postJSON('/web/formview/sendauthcode', {
                FRMID: $('#FRMID').val(),
                TEL: b,
                SIGN: $(this).attr('SIGN')
            }, function (e) {
                if (e <= 0) {
                    $.alert('发送验证码失败：可用短信量不足，需要充值，请与表单创建者联系。')
                } else {
                    c.text('120').prop('disabled', true);
                    a.text('120').css({
                        color: '#aaaaaa'
                    });
                    var d = setInterval(function () {
                        var f = parseInt(c.text());
                        if (f > 0) {
                            c.text(--f);
                            a.text(f)
                        } else {
                            c.text('发送验证码').prop('disabled', false);
                            a.text('发送验证码').css({
                                color: '#222222'
                            });
                            clearInterval(d)
                        }
                    }, 1000)
                }
                $.hideStatus()
            })
        }
    })
}
function initInstruct() {
    $('#fields>li').bind({
        mouseover: function () {
            $(this).find('p.instruct').removeClass('hide')
        },
        mouseout: function () {
            var a = $(this).find('p.instruct');
            if (!$('li').has(a).hasClass('focused')) {
                a.addClass('hide')
            }
        }
    })
}
//地址初始化 by wyl
function initAddress() {
    $('#fields>li[typ=\'address\']').each(function (d, b) {
        b = $(b);
        var f = b.attr('def'),
        a,
        g = b.find('select.province'),
        k = b.find('select.city'),
        e = b.find('select.zip'),
        c = '';
        if (f) {
            a = f.split('-')
        }
        $.each(address.provinces, function (m, l) {
            c += $.format('<option value=\'{0}\'>{1}</option>', m, m)
        });
        g.append(c);
        g.change(function () {
            var l = $(this).val();
            k.empty().append('<option value=\'\'>市</option>');
            e.empty().append('<option value=\'\'>区/县</option>');
            if (l) {
                var m = '';
                $.each(address.provinces[l], function (o, n) {
                    m += $.format('<option value="{0}">{1}</option>', o, o)
                });
                k.append(m)
            }
        });
        k.change(function () {
            var l = b.find('select.province').val(),
            n = $(this).val();
            e.empty().append('<option value=\'\'>区/县</option>');
            if (n) {
                var m = '';
                $.each(address.provinces[l][n], function (q, o) {
                    m += $.format('<option value="{0}">{1}</option>', o, o)
                });
                e.append(m)
            }
        });
        if (a && a[0]) {
            g.val(a[0]);
            g.trigger('change')
        }
        if (a && a[1]) {
            k.val(a[1]);
            k.trigger('change')
        }
        if (a && a[2]) {
            e.val(a[2])
        }
    })
}
//地图初始化 by wyl
function initMap() {
    $('#fields').find('div.map').each(function (e, r) {
        var o = $(r).parent(),
        f = o.find('input.location'),
        d = o.find('input.j'),
        q = o.find('input.w'),
        l = o.find('button.getlocation'),
        s = o.find('button.marker');
        var b,
        n,
        m;
        var a = function (u) {
            d.val(u.position.getLng());
            q.val(u.position.getLat());
            var t = new AMap.LngLat(u.position.getLng(), u.position.getLat());
            b.clearMap();
            var c = new AMap.Marker({
            });
            c.setPosition(t);
            c.setMap(b);
            b.setCenter(t);
            m.getAddress(t)
        },
        k = function () {
            $.alert('获取地址位置失败，请检查GPS是否打开，然后重试一次。');
            $.hideStatus()
        },
        g = function (c) {
            f.val(c.regeocode.formattedAddress);
            f.removeClass('hide').show();
            l.text('重新获取').parent();
            $.hideStatus()
        };
        var b = new AMap.Map($(r).attr('id'), {
            zoom: 13
        });
        b.plugin(['AMap.Geolocation',
        'AMap.Geocoder'], function () {
            n = new AMap.Geolocation({
            });
            m = new AMap.Geocoder({
                radius: 1000,
                extensions: 'all'
            });
            b.addControl(n);
            AMap.event.addListener(n, 'complete', a);
            AMap.event.addListener(n, 'error', k);
            AMap.event.addListener(m, 'complete', g)
        });
        $(r).data('map', b);
        AMap.event.addListener(b, 'click', function (u) {
            b.clearMap();
            var c = new AMap.Marker({
            });
            d.val(u.lnglat.getLng());
            q.val(u.lnglat.getLat());
            var t = new AMap.LngLat(u.lnglat.getLng(), u.lnglat.getLat());
            c.setPosition(t);
            c.setMap(b);
            m.getAddress(t)
        });
        l.click(function () {
            $.showStatus();
            n.getCurrentPosition()
        });
        s.click(function () {
            var c = o.find('div.map');
            if (!c.hasClass('hide')) {
                c.addClass('hide')
            } else {
                c.removeClass('hide')
            }
            o.find('input.location').show();
            return false
        });
        f.change(function () {
            if (!$(this).val()) {
                d.val('');
                q.val('')
            }
        })
    })
}
//高亮 by wyl
function highlight(d, b) {
    var a = $('li').has(b),
    c = a.attr('typ');
    $('li.focused').removeClass('focused');
    if (!a.hasClass('error')) {
        a.addClass('focused')
    }
    $('p.instruct').addClass('hide');
    a.find('p.instruct').removeClass('hide');
    d.stopPropagation()
}
//初始化获取焦点 by wyl
function initFocus() {
    if (window.isForMobile) {
        $('#fields').find('.controlgroup>label,table.table label').bind({
            click: function (a) {
                a.stopPropagation()
            }
        });
        $('[typ=\'file\']').click(function () {
            if (!$(this).hasClass('focused')) {
                $('li.focused').removeClass('focused');
                $('p.instruct').addClass('hide');
                var a = $(this).attr('typ');
                if (a != 'section' && a != 'html' && a != 'image' && a != 'goods') {
                    $(this).addClass('focused').find('p.instruct').removeClass('hide').end().find(':input:eq(0)').focus()
                }
            }
        });
        return
    }
    //控件高亮控制 by wyl
    $('.fld').bind({
        click: function (a) {
            highlight(a, this)
        },
        focus: function (a) {
            highlight(a, this)
        }
    });
    //控件点击时的样式 by wyl
    $('#fields>li[id]').click(function () {
        if (!$(this).hasClass('focused')) {
            $('li.focused').removeClass('focused');
            $('p.instruct').addClass('hide');
            var a = $(this).attr('typ');
            if (a != 'section' && a != 'html' && a != 'image' && a != 'goods') {
                $(this).addClass('focused').find('p.instruct').removeClass('hide').end().find(':input:eq(0)').focus()
            }
        }
    })
}
// 时间格式控制 by wyl
function updateSelects(a, b) {
    var d = $(b).is('li') ? $(b) : $(b).parent().parent();
    if (a && d.find('input.yyyy').length > 0) {
        d.find('input.yyyy').val(a.getFullYear());
        d.find('input.mm').val($.formatHH(a.getMonth() + 1));
        d.find('input.dd').val($.formatHH(a.getDate()));
        d.find('input.val').val($.getDate(d)).trigger('change')
    } else {
        d.find('input.val').val(a).trigger('change')
    }
}
//初始化数字控件 by wyl
function initNumberInput() {
    var e = function (m) {
        var l = m.find('input.tel1').val(),
        k = m.find('input.tel2').val(),
        g = m.find('input.tel3').val();
        if (l || k) {
            return $.format('{0}-{1}-{2}', l, k, g)
        } else {
            return ''
        }
    },
    f = function (k) {
        var g = $(this).val(),
        l = $(this).parent().parent();
        $(this).val(g.replace(/^\+\D/g, ''));
        l.find('.val').val(e(l))
    },
    b = function (k) {
        var g = $(this).val(),
        l = $(this).parent().parent();
        $(this).val(g.replace(/\D/g, ''));
        l.find('.val').val($.getTime(l)).trigger('change')
    },
    d = function (k) {
        var g = $(this).val(),
        l = $(this).parent().parent();
        $(this).val(g.replace(/\D/g, ''));
        l.find('.val').val($.getDate(l)).trigger('change')
    },
    c = function (k) {
        if (window.isForMobile) {
            return
        }
        var g = $(this).val();
        $(this).val(g.replace(/[^(\-?\d\.?)]/g, '').replace(/[\(\)\?]/g, ''))
    },
    a = function () {
        var g = $(this).val(),
        k = $(this).parent().parent();
        $(this).val(g.replace(/-/g, ''));
        k.find('.val').val($.getName(k)).trigger('change')
    };
    $('select.hh,select.mi', '#fields').bind({
        change: function () {
            var l = $(this).parent().parent(),
            k = l.find('select.hh').val(),
            g = l.find('select.mi').val();
            if (k && g) {
                l.find('.val').val($.format('{0}:{1}', k, g))
            } else {
                l.find('.val').val('')
            }
        }
    });
    $('input.yyyy,input.mm,input.dd', '#fields').bind({
        keyup: d,
        change: d
    });
    $('input.number,input.money', '#fields').bind({
        keyup: c,
        change: c
    });
    $('input.n1,input.n2,input.n3', '#fields').bind({
        keyup: a,
        change: a
    });
    $('input.authcode,input.phone,input.tel1,input.tel2,input.tel3', '#fields').bind({
        keyup: f,
        change: f
    })
}
//初始化 Dropdown by wyl
function initDropdown2() {
    var a = 5;
    for (var b = 1; b < a; b++) {
        $('#fields').find('select.dd' + b).bind({
            change: function () {
                var e = $(this).find('option:selected').attr('items');
                var f = [
                ];
                if (e) {
                    f = JSON.parse(e)
                } else {
                    f.push({
                        VAL: ''
                    })
                }
                var d = parseInt($(this).attr('level'));
                var c = $(this).parent().find('select.dd' + (d + 1));
                c.empty();
                $.each(f, function (g, k) {
                    if (k.ITMS) {
                        c.append($.format('<option items=\'{0}\' value=\'{1}\'>{1}</option>', JSON.stringify(k.ITMS), k.VAL))
                    } else {
                        c.append($.format('<option value=\'{0}\'>{0}</option>', k.VAL))
                    }
                });
                c.trigger('change')
            }
        }).trigger('change')
    }
}
FieldRelation = {
    fillAutoCompValue: function (a) {
        var c = a.val(),
        b = a.attr('matfrm'),
        e = a.attr('matfld'),
        d = a.data('liids');
        if (c && b && e) {
            $.postJSON('/web/formview/getmatchvalue', {
                FRMID: b,
                FLD: e,
                VAL: c,
                EXFLDS: '',
                FLDS: a.data('matflds'),
                EXMAT: '1'
            }, function (f) {
                if (f.length > 0) {
                    FieldRelation.setAutoCompValue(d, f[0])
                }
            })
        }
    },
    getMatchedText: function (b) {
        var a = b.indexOf(',');
        if (a > 0) {
            return b.substring(0, a)
        } else {
            return b
        }
    },
    updown: function (f, e) {
        var c = $(f),
        d = c.parent().find('ul.matul'),
        b = d.find('li').length,
        l = d.find('li.selected'),
        k = l.index(),
        g = c.data('oldval');
        if (e == 40) {
            if (k < b - 1) {
                l.removeClass('selected');
                var a = d.find('li:eq(' + (k + 1) + ')');
                a.addClass('selected');
                c.val(a.text())
            } else {
                l.removeClass('selected');
                c.val(g)
            }
        } else {
            if (e == 38) {
                if (k > 0) {
                    l.removeClass('selected');
                    var a = d.find('li:eq(' + (k - 1) + ')');
                    a.addClass('selected');
                    c.val(a.text())
                } else {
                    if (k == 0) {
                        l.removeClass('selected');
                        c.val(g)
                    } else {
                        var a = d.find('li:eq(' + (b - 1) + ')');
                        a.addClass('selected');
                        c.val(a.text())
                    }
                }
            }
        }
    },
    getmatchdata: function (k, d) {
        var f = d.which;
        if (f == 40 || f == 38 || f == 13) {
            FieldRelation.updown(k, f);
            return false
        }
        var a = $(k),
        m = a.val(),
        b = a.attr('matfrm'),
        n = a.attr('matfld'),
        l = a.attr('exmat');
        p = a.position(),
        h = a.outerHeight(),
        w = a.innerWidth();
        var c = a.parent().find('ul.matul'),
        g = $('#fields>li').has(a).attr('ex');
        a.data('oldval', m);
        if (m) {
            $.postJSON('/web/formview/getmatchvalue', {
                FRMID: b,
                FLD: n,
                VAL: m,
                EXFLDS: g ? JSON.parse(g).matfld : '',
                FLDS: a.data('matflds'),
                EXMAT: l
            }, function (e) {
                if (c.length == 0) {
                    c = $('<ul class=\'matul\'></ul>');
                    a.after(c)
                }
                c.css('top', p.top + h);
                c.css('left', p.left);
                c.css('minWidth', w);
                c.empty().show();
                $.each(e, function (s, q) {
                    var t = new RegExp('(' + a.data('oldval') + ')', 'g');
                    var u = '<li>' + q[n].replace(t, '<i>$1</i>');
                    if (g) {
                        var r = JSON.parse(g).matfld.split(',');
                        $.each(r, function (v, x) {
                            if (x && q[x]) {
                                u += ',' + q[x]
                            }
                        })
                    }
                    u += '</li>';
                    var o = $(u);
                    o.data('data', q);
                    c.append(o);
                    o.bind({
                        mouseover: function () {
                            $(this).addClass('selected')
                        },
                        mouseout: function () {
                            if ($(this).is(':visible')) {
                                $(this).removeClass('selected')
                            }
                        },
                        mousedown: function () {
                            var x = $(this).parent(),
                            v = x.parent().find('input.fld');
                            FieldRelation.setAutoCompValue(v.data('liids'), $(this).data('data'));
                            v.val(FieldRelation.getMatchedText($(this).text()));
                            $(this).addClass('selected');
                            x.hide()
                        }
                    })
                })
            })
        } else {
            c.hide()
        }
    },
    setAutoCompValue: function (c, b) {
        var a = function (d, f) {
            var l = d.find('select.province'),
            m = d.find('select.city'),
            e = d.find('select.zip'),
            k = d.find('textarea.detail'),
            g = d.attr('acmpfld').split(',');
            l.val('');
            m.val('');
            e.val('');
            k.val('');
            if (f[g[0]]) {
                l.val(f[g[0]]).trigger('change')
            }
            if (f[g[1]]) {
                m.val(f[g[1]]).trigger('change')
            }
            if (f[g[2]]) {
                e.val(f[g[2]])
            }
            if (f[g[3]]) {
                k.val(f[g[3]])
            }
        };
        $.each(c, function (g, o) {
            if (!o) {
                return true
            }
            var r = $('#' + o),
            m = r.attr('acmpfld'),
            n = r.attr('typ'),
            e = r.attr('fmt'),
            q = b[m];
            if (n != 'radio' && n != 'checkbox') {
                r.find('input').val('');
                r.find('input[name]').val(q || '')
            }
            if (n == 'date') {
                $.setDate(r, q)
            } else {
                if (n === 'time') {
                    $.setTime(r, q)
                } else {
                    if (n === 'name') {
                        $.setName(r, q)
                    } else {
                        if (n === 'phone') {
                            $.setPhone(r, q)
                        } else {
                            if (n == 'dropdown') {
                                r.find('select[name]').val('');
                                r.find('select[name]').val(q || '')
                            } else {
                                if (n == 'radio') {
                                    r.find('input[name]').prop('checked', false);
                                    r.find('input[value=\'' + q + '\']').prop('checked', true)
                                } else {
                                    if (n == 'address') {
                                        a(r, b)
                                    } else {
                                        if (n == 'name') {
                                            $.setName(r, q)
                                        } else {
                                            if (n == 'image') {
                                                var l = m.split(','),
                                                d = b[l[0]],
                                                k = b[l[1]],
                                                f = '';
                                                if (d && k) {
                                                    f = d.split(',')[0] + k.split(',')[0]
                                                }
                                                if ($.isImage(f)) {
                                                    r.find('.image-img').attr('src', IMAGEURL + f)
                                                } else {
                                                    r.find('.image-img').attr('src', '/rs/images/defaultimg.png')
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
    }
};
function initMatchAndAcmp() {
    $('#fields').find('input[matfrm],select[matfrm]').each(function (i, _txt) {
        var txt = $(_txt),
        ex = $('#fields>li').has(txt).attr('ex'),
        nm = txt.attr('name'),
        matfld = txt.attr('matfld'),
        fields = [
            matfld
        ],
        liids = [
        ];
        if (ex) {
            var obj = JSON.parse(ex);
            if (obj.matfld) {
                var matflds = obj.matfld.split(',');
                $.each(matflds, function (i, v) {
                    fields.push(v);
                    liids.push(null)
                })
            }
        }
        $('#fields>li[acmpsrcfld]').each(function (j, li) {
            var l = $(li),
            acmpsrcfld = l.attr('acmpsrcfld'),
            acmpfld = l.attr('acmpfld');
            if ((nm == acmpsrcfld || nm.indexOf(acmpsrcfld + '_') > -1) && acmpfld) {
                fields.push(acmpfld);
                liids.push(l.attr('id'))
            }
        });
        if (txt.is('select')) {
            txt.bind({
                change: function () {
                    var acmpData = eval('(' + $(this).find('option:selected').attr('acmp') + ')');
                    FieldRelation.setAutoCompValue(liids, acmpData)
                }
            })
        } else {
            txt.data('matflds', fields);
            txt.data('liids', liids);
            var keyupTime;
            var str = '',
            now = '',
            filter_time = function (e) {
                var time = setInterval(function () {
                    filter_staff_from_exist(e)
                }, 500);
                txt.bind('blur', function () {
                    clearInterval(time)
                })
            },
            filter_staff_from_exist = function (e) {
                now = $.trim(txt.val());
                if (now != str) {
                    FieldRelation.getmatchdata(txt, e)
                }
                str = now
            };
            txt.bind({
                focus: function (e) {
                    str = $.trim(txt.val());
                    filter_time(e)
                },
                keyup: function (e) {
                    keyupTime = new Date().getTime(),
                    _this = $(this);
                    var keycode = e.which;
                    if (keycode == 40 || keycode == 38) {
                        FieldRelation.getmatchdata(_this, e);
                        now = $.trim(txt.val());
                        str = now;
                        return false
                    }
                },
                keypress: function (e) {
                    var keycode = e.which;
                    if (keycode == 13) {
                        var txt = $(_txt),
                        ul = txt.parent().find('ul.matul'),
                        li = ul.find('li.selected'),
                        idx = li.index(),
                        oldVal = txt.data('oldval');
                        if (idx >= 0) {
                            txt.val(FieldRelation.getMatchedText(txt.val()));
                            FieldRelation.setAutoCompValue(txt.data('liids'), li.data('data'))
                        }
                        ul.hide();
                        return false
                    }
                },
                blur: function () {
                    var txt = $(_txt),
                    ul = txt.parent().find('ul.matul'),
                    li = ul.find('li.selected'),
                    idx = li.index();
                    if (idx >= 0) {
                        FieldRelation.setAutoCompValue(txt.data('liids'), li.data('data'))
                    } else {
                    }
                    ul.hide()
                }
            })
        }
    })
}
function initFieldsPermForView() {
    if (window.ADVPERM && '1' == ADVPERM.VIEWPERM) {
        $('#fields').find('li').each(function (c, b) {
            var a = $(b);
            if ('1' == ADVPERM.VIEWPERM && $.inArray(a.attr('id'), ADVPERM.VIEWFLDS) == -1) {
                var d = a.attr('typ') || '';
                if ($.inArray(d, [
                    'image',
                    'html',
                    'section',
                    ''
                ]) == -1) {
                    a.addClass('hide')
                }
            }
        })
    }
}
function showErrorMsg(a, b) {
    isValidate = false;
    a.addClass('error');
    if (a.find('p.errMsg').length === 0) {
        a.append('<p class=\'errMsg\'></p>')
    }
    a.find('p.errMsg').text(b);
    $('#btnSubmit,#btnSave,#btnActSave').prop('disabled', false);
    $.hideStatus()
}
//验证脚本 by wyl
function initValidate() {
    var b = function () {
        var l = $('li').has(this),
        k = parseInt(l.attr('max')),
        g = $(this).val().length;
        if (l.find('span.lengthLimit').length === 0) {
            l.find('label.desc').append('<span class=\'lengthLimit\'></span>')
        }
        if (k - g >= 0) {
            l.find('span.lengthLimit').text($.format(msg.lengthLimit, k - g))
        } else {
            $(this).val($(this).val().substring(0, k));
            l.find('span.lengthLimit').text($.format(msg.lengthLimit, 0))
        }
    },
    d = function () {
        isValidate = true;
        var g = $('#fields').find('li[id]:visible'),
        k = true,
        t,
        n,
        z,
        B,
        o,
        x,
        u,
        E,
        s,
        q;
        for (i = 0; i < g.length; i++) {
            t = $(g[i]);
            q = true;
            n = t.attr('TYP'),//类型
            z = t.attr('MIN'),//最小数数（文本字的的个数，数字框最大数字）
            B = t.attr('MAX'),//最大数（文本字的的个数，数字框最大数字）
            o = t.attr('REQD'),//是否必填
            x = t.attr('UNIQ'),//是否可重复
            u = t.attr('DEF'),
            E = t.attr('name'),
            s;
            //当为必填时，根据控件类型进行判断是否填写 by wyl
            if (o === '1') {
                var C = true;
                if (n === 'radio') {
                    var y = t.find(':checked');
                    if ((y.val() && !y.hasClass('other')) || (y.hasClass('other') && $.trim(t.find(':text').val()))) {
                        C = false
                    }
                } else {
                    if (n === 'checkbox' || n === 'likert') {
                        if (t.find(':checked').length > 0) {
                            C = false
                        }
                    } else {
                        if (n === 'goods') {
                            t.find('div.goods-item input.number').each(function (G, v) {
                                if ((parseFloat($(v).val()) || 0) > 0) {
                                    C = false;
                                    return false
                                }
                            })
                        } else {
                            if (n === 'address') {
                                var l = t.find('select.province').val(),
                                A = t.find('select.city').val(),
                                D = t.find('select.zip').val();
                                if (l && A && D) {
                                    C = false
                                }
                            } else {
                                t.find(':input[name]').each(function (v, G) {
                                    if ($.trim($(G).val())) {
                                        C = false;
                                        return
                                    }
                                })
                            }
                        }
                    }
                }
                if (C) {
                    k = false;
                    q = false;
                    showErrorMsg(t, "不能为空");
                    continue
                }
            }
            //判断最小数 by wyl
            if (z) {
                s = t.find('input,textarea').val();
                if (s) {
                    if (n === 'number' || n === 'money') {
                        if (parseFloat(s) < parseFloat(z)) {
                            k = false;
                            q = false;
                            showErrorMsg(t, $.format(msg.minNumberError, z));
                            continue
                        }
                    }
                }
                if (n === 'text' || n === 'textarea') {
                    if (s.length < parseFloat(z)) {
                        k = false;
                        q = false;
                        showErrorMsg(t, $.format(msg.minTextError, z));
                        continue
                    }
                } else {
                    if (n == 'checkbox') {
                        if (t.find(':checkbox:checked').length < parseFloat(z)) {
                            k = false;
                            q = false;
                            showErrorMsg(t, $.format(msg.minChkError, z));
                            continue
                        }
                    }
                }
            }
            //判断最大数 by wyl
            if (B) {
                s = t.find('input,textarea').val();
                if (s) {
                    if (n === 'number' || n === 'money') {
                        if (parseFloat(s) > parseFloat(B)) {
                            k = false;
                            q = false;
                            showErrorMsg(t, $.format(msg.maxNumberError, B));
                            continue
                        }
                    }
                }
                if (n === 'text' || n === 'textarea') {
                    if (s.length > parseFloat(B)) {
                        k = false;
                        q = false;
                        showErrorMsg(t, $.format(msg.maxTextError, B));
                        continue
                    }
                } else {
                    if (n == 'checkbox') {
                        if (t.find(':checkbox:checked').length > parseFloat(B)) {
                            k = false;
                            q = false;
                            showErrorMsg(t, $.format(msg.maxChkError, B));
                            continue
                        }
                    }
                }
            }
            if (n === 'number' || n === 'money') {
                s = t.find(':input[name]').val();
                if (s != '' && !$.isNumber(s)) {
                    k = false;
                    q = false;
                    showErrorMsg(t, msg.numberError);
                    continue
                }
            } else {
                if (n === 'date') {
                    s = t.find(':input[name]').val();
                    if (s != '' && !$.isDate(s)) {
                        k = false;
                        q = false;
                        showErrorMsg(t, msg.dateError);
                        continue
                    }
                } else {
                    if (n === 'email') {
                        s = t.find(':input[name]').val();
                        if (s != '' && !$.isEmail(s)) {
                            k = false;
                            q = false;
                            showErrorMsg(t, msg.emailError);
                            continue
                        }
                    } else {
                        if (n === 'phone') {
                            var r = t.find(':input[name]'),
                            m = r.attr('fmt'),
                            s = r.val();
                            if (s && m == 'mobile' && !$.isMobile(s)) {
                                k = false;
                                q = false;
                                showErrorMsg(t, msg.mobileError);
                                continue
                            }
                        }
                    }
                }
            }
            if (q) {
                t.removeClass('error');
                t.find('p.errMsg').remove()
            }
        }
        return k
    },
    c = function (r) {
        var g = $('li').has(r),
        l = g.find(':input[name]'),
        m = l.attr('name'),
        k = l.val(),
        o = false;
        var q = {
            FRMID: $('#FRMID').val(),
            SID: $('#SID').val(),
            ENTRYID: $('#_id').val(),
            NM: m,
            VAL: k
        };
        //验证是否存在 by wyl
        $.postJSON('/web/formview/existValidate', q, function (n) {
            o = !n;
            if (!o) {
                showErrorMsg(g, msg.uniqError)
            }
        }, {
            async: false
        });
        return o
    },
    f = function (m) {
        var g = $('li').has(m),
        k = true;
        var l = {
            kaptcha: g.find(':input[name=\'kaptcha\']').val()
        };
        $.postJSON('/web/formview/captchaValidate', l, function (n) {
            k = n;
            if (!k) {
                showErrorMsg(g, msg.captchaError)
            }
        }, {
            async: false
        });
        return k
    },
    a = function (g) {
        var k = $('#' + g.attr('id').substring(2)),
        l = true;
        var m = {
            TEL: k.find('input.phone').val(),
            CODE: g.find('input.authcode').val()
        };
        $.postJSON('/web/formview/authcodevalidate', m, function (n) {
            l = n;
            if (!l) {
                showErrorMsg(g, msg.authCodeError)
            }
        }, {
            async: false
        });
        return l
    },
	//限制提交数验证
    e = function () {
        var g = true;
        $.postJSON('/web/formview/checklimit', $('#form1').getValues(), function (k) {
            if (k && k.length > 0) {
                $.hideStatus();
                $.each(k, function (m, l) {
                    if ('goods' == l.TYP) {
                        g = false;
                        showErrorMsg($('[name=\'' + l.NM + '_' + l.TYP + '\']', '#fields').parents('div.goods-item'), $.format('{0}限购数量为{1},还可以购买{2}{3},你已超出限购数量,需修改。', l.VAL, l.AMOUNTLMT, l.BALANCE, l.UNT))
                    } else {
                        g = false;
                        showErrorMsg($('[name=\'' + l.NM + '_' + l.TYP + '\']', '#fields').parents('li'), $.format('{0}限制提交数量为{1},还可以提交{2}次,你已超出提交限制,需修改。', l.VAL, l.AMOUNTLMT, l.BALANCE))
                    }
                });
                return false
            }
        }, {
            async: false
        });
        return g
    };
    $('li[max]:has(textarea)', '#fields').find('textarea').bind({
        keyup: b,
        change: b
    });
    //页面提交 权限 by wyl
    $('#btnSubmit,#btnSave,#btnActSave').bind({
        click: function () {
            if ($(this).hasClass('disabled') || $(this).prop('disabled')) {
                return false
            }
            //判断是修改还是新增
            var k = $('#_id').val() ? 'edit' : 'new';
            //权限管理
            if (k == 'new' && '1' == ADVPERM.ADV && !'1' == ADVPERM.ADD) {
                $.alert('没有新增数据的权限，请与管理员联系。');
                return false
            }
            $.each(RULE.FIELDSRULE || [
            ], function (o, q) {
                if (!$('#' + q.RULEFLD).is(':visible')) {
                    $('#' + q.RULEFLD + ',#au' + q.RULEFLD).setValues({
                    }, true)
                }
            });
            calShopCard();
            if (!d()) {
                $('#fields').find('li.error:first').find(':input').focus();
                return false
            }
            $(this).prop('disabled', true);
            $.showStatus('正在验证数据...');
            if ($('#liCaptcha').length > 0) {
                isValidate = f($('#liCaptcha').find(':text'))
            }
            if (!isValidate) {
                return false
            }
            var m = $('li[uniq=\'1\']');
            if (m.length > 0) {
                m.each(function (q, o) {
                    isValidate = c($(o).find(':input[name]'));
                    if (!isValidate) {
                        return false
                    }
                })
            }
            if (!isValidate) {
                return false
            }
            $('#fields input.authcode').each(function (o, q) {
                var r = $(q);
                isValidate = a($(r).parent().parent());
                if (!isValidate) {
                    return false
                }
            });
            if (!isValidate) {
                return false
            }
            var l = $('li[ctlmt=\'DAY\'], li[ctlmt=\'ALL\']');
            if (l.length > 0) {
                isValidate = e();
                if (!isValidate) {
                    return false
                }
            }
            if (!isValidate) {
                $('#fields').find('li.error:first').find(':input').focus();
                $('#btnSubmit,#btnSave,#btnActSave').prop('disabled', false);
                $.hideStatus();
                return false
            } else {
                //判断是修改还是新增
                var k = $('#_id').val() ? 'edit' : 'new';
                if (k === 'new') {
                    var n = parseFloat($('#TMOUT').val());
                    $('#TMOUT').val(Math.round((new Date().getTime() - n) / 1000))
                }
                var g = $('#form1').getValues();
                $.each(g, function (q, o) {
                    if (/^t\d/.test(q)) {
                        delete g[q]
                    }
                });
                if ($(this).attr('id') === 'btnSubmit') {
                    if ($('#FRMID').attr('autofill') == '1') {
                        $.setCookie($('#FRMID').val(), JSON.stringify(g), 10)
                    } else {
                        $.delCookie($('#FRMID').val())
                    }
                    $.hideStatus();
                    $('#form1')[0].submit()
                } else {
                    $.showStatus('正在保存数据...');
                    g.INITTIME = $.trim(INITTIME.toString());
                    g.FRMNM = FRM.FRMNM;
                    $.postJSON('/web/entries/save', g, function (o) {
                        if (o && o.ERRMSG) {
                            alert(o.ERRMSG);
                            $.hideStatus();
                            return
                        }
                        $.closeLightBox();
                        if (window.query) {
                            if (k === 'new') {
                                query(null, 'FIRST', PAGESIZE, $('#entriesGrid').datagrid('getSortString'), $('#entriesGrid'))
                            } else {
                                if ('1' == ADVPERM.ADV && '1' == ADVPERM.FLT) {
                                    query(null, 'FIRST', PAGESIZE, $('#entriesGrid').datagrid('getSortString'), $('#entriesGrid'))
                                } else {
                                    var q = $('#entriesGrid'),
                                    t = q.data('rowsData'),
                                    s = q.data('total'),
                                    r = q.find('tbody>tr.rowSelected').index();
                                    t[r] = o;
                                    q.data('rowsData', t);
                                    q.datagrid('fillData', {
                                        total: s,
                                        rows: t
                                    });
                                    q.find('tbody>tr:eq(' + r + ')').addClass('rowSelected');
                                    $('a.view').click(function () {
                                        setTimeout(function () {
                                            $('#btnActView').trigger('click')
                                        }, 150)
                                    });
                                    $('a.edit').click(function () {
                                        setTimeout(function () {
                                            $('#btnActEdit').trigger('click')
                                        }, 150)
                                    });
                                    window.selectedData = o;
                                    $('#btnActVie').trigger('click')
                                }
                            }
                            $.hideStatus()
                        } else {
                            if (!window.isForMobile) {
                                alert('保存成功')
                            } else {
                                $.malert('保存成功，正在跳转...', function () {
                                    window.location.href = document.referrer + $.format('#l{0}', liIndex || 0)
                                })
                            }
                            $.hideStatus()
                        }
                        $('#btnSubmit,#btnSave,#btnActSave').prop('disabled', false)
                    });
                    return false
                }
            }
            return false
        }
    })
}
var getDateByReg = function (d) {
    var f,
    b = /^\+?(-?\d+) ?[Dd]ays$/,
    e = /^\+?(-?\d+) ?[Ww]eeks$/,
    c = /^\+?(-?\d+) ?[Mm]onths$/,
    a = new Date();
    if (d === 'today') {
        return a
    } else {
        if (b.test(d)) {
            f = parseInt(d.replace(b, '$1'));
            return a.addDate('d', f)
        } else {
            if (e.test(d)) {
                f = parseInt(d.replace(e, '$1'));
                return a.addDate('w', f)
            } else {
                if (c.test(d)) {
                    f = parseInt(d.replace(c, '$1'));
                    return a.addDate('m', f)
                } else {
                    if ($.isDate(d)) {
                        return Date.fromString(d)
                    }
                }
            }
        }
    }
},
getTimeByReg = function (d) {
    var e,
    b = /^\+?(-?\d+) ?[Mm]inutes$/,
    c = /^\+?(-?\d+) ?[Hh]ours$/,
    a = new Date();
    if (d === 'now') {
        return $.format('{0}:{1}', $.formatHH(a.getHours()), $.formatHH(a.getMinutes()))
    } else {
        if (b.test(d)) {
            e = parseInt(d.replace(b, '$1'));
            a = a.addDate('n', e);
            return $.format('{0}:{1}', $.formatHH(a.getHours()), $.formatHH(a.getMinutes()))
        } else {
            if (c.test(d)) {
                e = parseInt(d.replace(c, '$1'));
                a = a.addDate('h', e);
                return $.format('{0}:{1}', $.formatHH(a.getHours()), $.formatHH(a.getMinutes()))
            } else {
                if ($.isTime(d)) {
                    return d
                }
            }
        }
    }
};
function setDefaultValue(a) {
    if (window.ISMBLEDIT) {
        return
    }
    if (a) {
        $('#fields').setValues({
        }, true);
        $('#fields').find('select.dd1').trigger('change')
    } else {
        var d = $.getCookie($('#FRMID').val());
        if (d) {
            try {
                var b = JSON.parse(d);
                $('#fields').setValues(b, true);
                $('#fields').find('input[type=hidden],input.location').val('');
                $('#fields').find('li[typ=\'goods\']').find('input.number').trigger('blur')
            } catch (c) {
            }
        }
    }
    if (window.QPARAMS) {
        $('#fields').setValues(window.QPARAMS, true, true);
        $.each(window.QPARAMS, function (g, f) {
            var e = $(':text[name=\'' + g + '\']');
            if (e.length > 0 && e.attr('matfrm') && e.attr('matfld')) {
                FieldRelation.fillAutoCompValue(e)
            }
        })
    }
    $('li[def]', '#fields').each(function (g, f) {
        f = $(f);
        var m,
        k = f.attr('typ'),
        l = f.attr('def');
        if (!l) {
            return
        }
        if (k === 'date') {
            updateSelects(getDateByReg(l), f)
        } else {
            if (k === 'time') {
                $.setTime(f, getTimeByReg(l))
            } else {
                if (k === 'phone') {
                    var e = l.split('-');
                    if (e.length > 0) {
                        $(e).each(function (o, n) {
                            f.find(':text:eq(' + o + ')').val(n)
                        })
                    }
                    f.find(':input[name]').val(l)
                } else {
                    if (k === 'radio') {
                        f.find(':radio:eq(' + l + ')\'').prop('checked', true)
                    } else {
                        if (k === 'dropdown') {
                            f.find('option:eq(' + l + ')\'').prop('selected', true)
                        } else {
                            if (k === 'likert') {
                                f.find('tbody>tr').each(function (n, o) {
                                    $(o).find(':radio:eq(' + l + ')\'').prop('checked', true)
                                })
                            } else {
                                f.find('input.fld,textarea.fld').val(l)
                            }
                        }
                    }
                }
            }
        }
    })
}
function initRule() {
    var c = function (e, d) {
        var f = true;
        if (e === 'or') {
            f = false
        }
        $.each(d, function (l, g) {
            var n = true,
            k = $(':input[name=\'' + g.FLD + '\']'),
            q;
            if (k.length === 0) {
                k = $(':input[name^=\'' + g.FLD + '_\']')
            }
            q = k.val();
            if (k.is(':checkbox') || k.is(':radio')) {
                q = undefined;
                k.each(function (r, s) {
                    if ($(s).prop('checked')) {
                        q = $(s).val();
                        return false
                    }
                })
            }
            if (g.CTYP === 'eq') {
                if (g.DTYP === 'filesize') {
                    n = parseInt(q) === parseFloat(g.VAL) * 1024 * 1024
                } else {
                    if (g.DTYP === 'number') {
                        n = parseFloat(q) === parseFloat(g.VAL)
                    } else {
                        if (g.DTYP === 'date') {
                            n = q === $.formatDate(getDateByReg(g.VAL))
                        } else {
                            n = q === g.VAL
                        }
                    }
                }
            } else {
                if (g.CTYP === 'ne') {
                    if (g.DTYP === 'filesize') {
                        n = parseInt(q) != parseFloat(g.VAL) * 1024 * 1024
                    } else {
                        if (g.DTYP === 'number') {
                            n = parseFloat(q) != parseFloat(g.VAL)
                        } else {
                            n = q != g.VAL
                        }
                    }
                } else {
                    if (g.CTYP === 'bw') {
                        n = q.indexOf(g.VAL) === 0
                    } else {
                        if (g.CTYP === 'ew') {
                            var m = new RegExp('(' + g.VAL + ')$', 'gi');
                            n = m.test(q)
                        } else {
                            if (g.CTYP === 'ct') {
                                n = q.indexOf(g.VAL) >= 0
                            } else {
                                if (g.CTYP === 'nct') {
                                    n = q.indexOf(g.VAL) === -1
                                } else {
                                    if (g.CTYP === 'in') {
                                        var o = g.VAL.split(';');
                                        n = $.inArray(q, o) >= 0
                                    } else {
                                        if (g.CTYP === 'nin') {
                                            var o = g.VAL.split(';');
                                            n = $.inArray(q, o) === -1
                                        } else {
                                            if (g.CTYP === 'gt') {
                                                if (g.DTYP === 'filesize') {
                                                    n = parseInt(q) > parseFloat(g.VAL) * 1024 * 1024
                                                } else {
                                                    if (g.DTYP === 'number') {
                                                        n = parseFloat(q) > parseFloat(g.VAL)
                                                    } else {
                                                        n = q > g.VAL
                                                    }
                                                }
                                            } else {
                                                if (g.CTYP === 'gte') {
                                                    if (g.DTYP === 'filesize') {
                                                        n = parseInt(q) >= parseFloat(g.VAL) * 1024 * 1024
                                                    } else {
                                                        if (g.DTYP === 'number') {
                                                            n = parseFloat(q) >= parseFloat(g.VAL)
                                                        } else {
                                                            n = q >= g.VAL
                                                        }
                                                    }
                                                } else {
                                                    if (g.CTYP === 'lt') {
                                                        if (g.DTYP === 'filesize') {
                                                            n = parseInt(q) < parseFloat(g.VAL) * 1024 * 1024
                                                        } else {
                                                            if (g.DTYP === 'number') {
                                                                n = parseFloat(q) < parseFloat(g.VAL)
                                                            } else {
                                                                n = q < g.VAL
                                                            }
                                                        }
                                                    } else {
                                                        if (g.CTYP === 'lte') {
                                                            if (g.DTYP === 'filesize') {
                                                                n = parseInt(q) <= parseFloat(g.VAL) * 1024 * 1024
                                                            } else {
                                                                if (g.DTYP === 'number') {
                                                                    n = parseFloat(q) <= parseFloat(g.VAL)
                                                                } else {
                                                                    n = q = g.VAL
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            if (!n && e === 'and') {
                f = false;
                return false
            }
            if (n && e === 'or') {
                f = true;
                return false
            }
        });
        return f
    },
    b = function (d) {
        $.each(RULE.FIELDSRULE || [
        ], function (e, g) {
            if (d) {
                var f = false;
                $.each(g.CONS, function (m, l) {
                    if (d == l.FLD || d.indexOf(l.FLD + '_') == 0) {
                        f = true;
                        return false
                    }
                });
                if (!f) {
                    return true
                }
            }
            var k = c(g.ANDOR, g.CONS);
            if (!(g.RULEFLD instanceof Array)) {
                g.RULEFLD = [
                    g.RULEFLD
                ]
            }
            $.each(g.RULEFLD, function (m, l) {
                if (k) {
                    if (g.RULETYPE === 'show') {
                        $('#' + l + ',#au' + l).show()
                    } else {
                        $('#' + l + ',#au' + l).hide()
                    }
                } else {
                    if (g.RULETYPE === 'show') {
                        $('#' + l + ',#au' + l).hide()
                    } else {
                        $('#' + l + ',#au' + l).show()
                    }
                }
            });
            if ('goods' == $('#' + g.RULEFLD).attr('typ')) {
                calShopCard()
            }
        });
        if (window.isForMobile && window.iphoneFileUpload) {
            iphoneFileUpload()
        }
    };
    if (window.RULE && RULE.FIELDSRULE && RULE.ENABLERULE === '1') {
        $.each(RULE.FIELDSRULE, function (d, e) {
            if (e.RULETYPE === 'show') {
                if (!(e.RULEFLD instanceof Array)) {
                    e.RULEFLD = [
                        e.RULEFLD
                    ]
                }
                $.each(e.RULEFLD, function (g, f) {
                    $('#' + f).hide()
                })
            }
        });
        $(':text,input,select').change(function () {
            var d = $(this).attr('name');
            b(d)
        });
        $(':radio,:checkbox').click(function () {
            var d = $(this).attr('name');
            b(d)
        });
        b()
    }
    $('#container').removeClass('hide');
    var a = $('#form1').find('[typ=\'image\']').find('img').attr('src');
    if (typeof (a) != 'undefined' && a.length < 50) {
        $('#form1').find('[typ=\'image\']').find('img').attr('src', '/rs/images/defaultimg.png')
    }
}
function onBridgeReady() {
    WeixinJSBridge.call('hideOptionMenu')
}
function initWeixinShare() {
    if (window.F && F.DISSHARE === '1') {
        if (typeof WeixinJSBridge == 'undefined') {
            if (document.addEventListener) {
                document.addEventListener('WeixinJSBridgeReady', onBridgeReady, false)
            } else {
                if (document.attachEvent) {
                    document.attachEvent('WeixinJSBridgeReady', onBridgeReady);
                    document.attachEvent('onWeixinJSBridgeReady', onBridgeReady)
                }
            }
        } else {
            onBridgeReady()
        }
    }
}
function initOthers() {
    $('#TMOUT').val(new Date().getTime());
    $('#imgKaptcha').click(function () {
        $(this).attr('src', '/kaptcha.jpg?' + Math.floor(Math.random() * 100))
    });
    if ($('#needBuyInfo').length > 0) {
        $('#btnSubmit').prop('disabled', true)
    }
    $('#cornerQrcode').click(function () {
        var a = $('#qrcode');
        if (!a.attr('src')) {
            a.attr('src', '/qrcode.jpg?type=formview&c=' + $('#FRMID').val())
        }
        $('#qrcodeContainer').show()
    });
    $('#qrcode').click(function () {
        setTimeout(function () {
            $('#qrcodeContainer').hide()
        }, 10)
    })
}
function initLogo() {
    var b = $('#container').attr('mobile');
    if (b) {
        var c = $('#logo').find('a'),
        g = c.css('backgroundSize');
        if ('cover' == g) {
            var f = c.css('backgroundImage');
            if (f) {
                var e = f.substring(f.indexOf('(') + 1, f.lastIndexOf(')')).replace(/\"/g, '');
                var d = $($.format('<img src=\'{0}\' style=\'border:none;width:100%;\' />', e));
                c.append(d);
                d.load(function () {
                    c.css({
                        backgroundImage: 'none',
                        backgroundSize: 'initial',
                        height: $(this).height()
                    })
                })
            }
        }
    }
}
function initImg() {
    if (!window.query) {
        $('#fields>li[typ!=\'goods\']').find('div.content div.goods-item img.img').live('click', function () {
            var a = $(this).attr('src');
            $.lightBox({
                url: '#stage',
                size: 'l cus3',
                showclose: '0',
                loaded: function () {
                    $('img.img-option', '#stage').attr({
                        src: a
                    });
                    $('img.img-option', '#stage').unbind().click(function () {
                        $.closeLightBox()
                    })
                }
            })
        })
    }
}
//初始化复选框 by wyl 
function initCommitLmt() {
    if (typeof countLmtInfo != 'undefined' && countLmtInfo.length > 0) {
        for (var b = 0; b < countLmtInfo.length; b++) {
            var c = countLmtInfo[b];
            var a;
            if (c.TYP == 'radio') {
                a = $('input[name=\'' + c.NM + '_' + c.TYP + '\'][value=\'' + c.VAL + '\']');
                a.parent().append('<label style=\'color:#ccc;\'>(剩余可选: ' + c.BALANCE + ')</label>')
            } else {
                if (c.TYP == 'dropdown') {
                    a = $('select[name=\'' + c.NM + '_' + c.TYP + '\']').find('option[value=\'' + c.VAL + '\']');
                    a.append('<label style=\'color:#ccc;\'>(剩余可选:' + c.BALANCE + ')</label>')
                } else {
                    if (c.TYP == 'checkbox') {
                        a = $('#' + c.NM);
                        a.parent().append('<label style=\'color:#ccc;\'>(剩余可选:' + c.BALANCE + ')</label>')
                    } else {
                        if (c.TYP == 'goods') {
                            a = $('input[name=\'' + c.NM + '_' + c.TYP + '\']');
                            a.parents('div.text-wrapper').find('label.name').append('<label style=\'color:#ccc;\'>(剩余可选:' + c.BALANCE + ')</label>')
                        }
                    }
                }
            }
            if (c.BALANCE == 0) {
                a.prop('disabled', 'disabled')
            }
        }
    }
}
head.ready(function () {
    if (isEmbed) {
        $('body').css({
            background: 'none',
            padding: '0px',
            margin: '0px'
        });
        $('#form1').css({
            marginTop: '0px'
        });
        $('#container').css({
            width: '100%',
            'box-shadow': 'none'
        }).find('#form1').css({
            'padding-top': '20px'
        });
        $('#logo').hide()
    }
    createFields();
    initFocus();
    initInstruct();
    initRadio();
    initNumberInput();
    initGoods();
    initMap();
    initAddress();
    initAuthCode();
    initValidate();
    initMatchAndAcmp();
    setDefaultValue();
    initRule();
    initDropdown2();
    initFieldsPermForView();
    initLogo();
    initUpload();
    $.initDate($('#fields'), updateSelects);
    initOthers();
    initWeixinShare();
    initImg();
    initCommitLmt();
    //初始化高度。
    var a = $('#container').attr('mobile');
    if (a) {
        var b = $('#container').height(),
        c = $(window).height() - 6;
        if (b < c) {
            $('#container').css({
                minHeight: c
            })
        }
    }
});
