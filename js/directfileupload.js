(function (h) {
    var c = '';
    var o = '';
    var f = '';
    var e = '';
    var d = 0;
    var m = '';
    var n = '';
    var g = '';
    function l(p, q) {
        h.postJSON(p, q, function (r) {
            c = r.accessid;
            o = r.host;
            f = r.policy;
            e = r.signature;
            d = parseInt(r.expire);
            m = r.callback;
            g = r.SzLimitAlarm
        }, {
            async: false
        })
    }
    function b(q) {
        q = q || 32;
        var r = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        var p = r.length;
        var s = '';
        for (i = 0; i < q; i++) {
            s += r.charAt(Math.floor(Math.random() * p))
        }
        return s
    }
    function k(p) {
        var r = p.lastIndexOf('.');
        var q = '';
        if (r != - 1) {
            q = p.substring(r)
        }
        return q
    }
    function a(q, p) {
        var r = k(q);
        n = b(10) + r
    }
    function j(q, t, r) {
        if (r == false) {
            r = l(t.signature_url, t.signature_param)
        }
        n = '';
        if (t.filename && t.filename.length > 0) {
            a(t.filename, t.filename_type)
        }
        new_multipart_params = {
            key: n,
            policy: f,
            OSSAccessKeyId: c,
            success_action_status: '200',
            callback: m,
            signature: e
        };
        if (t.upload_extra_param) {
            for (var s in t.upload_extra_param) {
                new_multipart_params['x:' + s] = t.upload_extra_param[s]
            }
        }
        q.setOption({
            url: o,
            multipart_params: new_multipart_params
        });
        q.start()
    }
    h.extend({
        getFileSizeLeft: function () {
            return g
        },
        getOssObjectName: function () {
            return n
        },
        getHostUrl: function () {
            return o
        },
        set_upload_param: j,
        ossfileupload: function (p) {
            var s = {
                file_selection_button: '',
                file_multi_selection: true,
                file_duplication_forbidden: true,
                file_max_size: '1024KB',
                file_extensions: '*',
                filename_type: 'random',
                upload_extra_param: {
                },
                signature_url: '/web/oss/getsignature',
                signature_param: {
                },
                PostInit: function () {
                },
                FilesAdded: function (t, u) {
                    j(t, {
                        signature_url: q.signature_url,
                        signature_param: q.signature_param,
                        filename: u[0].name,
                        filename_type: q.filename_type,
                        upload_extra_param: q.upload_extra_param
                    }, false)
                },
                UploadProgress: function (t, u) {
                },
                BeforeUpload: function (t, u) {
                    j(t, {
                        signature_url: q.signature_url,
                        signature_param: q.signature_param,
                        filename: u.name,
                        filename_type: q.filename_type,
                        upload_extra_param: q.upload_extra_param
                    }, true)
                },
                FileUploaded: function (t, u, v) {
                },
                UploadComplete: function (t, u) {
                },
                UploadError: function (t, u) {
                    if (u.code == - 600) {
                        h.alert('选择的文件太大了')
                    } else {
                        if (u.code == - 601) {
                            h.alert('选择的文件类型不对')
                        } else {
                            if (u.code == - 602) {
                                h.alert('这个文件已经上传过一遍了')
                            } else {
                                h.alert('Error')
                            }
                        }
                    }
                }
            };
            var q = h.extend(s, p);
            var r = new plupload.Uploader({
                runtimes: 'html5,flash,silverlight,html4',
                browse_button: q.file_selection_button,
                multi_selection: q.file_multi_selection,
                container: h(q.file_selection_button).parent() [0],
                flash_swf_url: 'Moxie.swf',
                silverlight_xap_url: 'Moxie.xap',
                url: 'http://oss.aliyuncs.com',
                filters: {
                    mime_types: [
                        {
                            title: '文件上传',
                            extensions: q.file_extensions
                        }
                    ],
                    max_file_size: q.file_max_size,
                    prevent_duplicates: q.file_duplication_forbidden
                },
                init: {
                    PostInit: q.PostInit,
                    FilesAdded: q.FilesAdded,
                    BeforeUpload: q.BeforeUpload,
                    UploadProgress: q.UploadProgress,
                    FileUploaded: q.FileUploaded,
                    UploadComplete: q.UploadComplete,
                    Error: q.UploadError
                }
            });
            r.init();
            return r
        }
    })
}) (jQuery);
