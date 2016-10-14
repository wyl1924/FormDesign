var CHANGED=false,PREGOODS=[],DSFRMS,IDX=-2,ITEMIDX=-2,delConfirmMsg="建议您先将数据导出后再删除字段！\n删除将导致已提交的数据和报表中此字段对应的值被清空，且不可恢复。确认删除吗？",htmlEditor,descEditor,secdescEditor,DEFFLD=
{
  handle:'<div class="handle"><i title="拖动排序" class="iconfont move hide">&#xe63d;</i></div>',icon:"",instruct:'<p class="instruct hide"></p>',fieldActions:'<div class="fieldActions hide"><i title="复制" href="#" class="iconfont faDup">&#xe60b;</i><i title="删除" href="#" class="iconfont faDel">&#xe619;</i></div>',field_li:'<li class="field default"></li>',item_checkbox:'<li><input name="CHKED" value="1" class="checkbox" type="checkbox" title="默认选中此项" /><div class="item-upload"><span>上传图片<br>(限1MB)</span><img class="img hide" style="width:60px;"/></div><input name="VAL" type="text" class="xs"/><a class="icononly-add iconfont icon-pos" title="添加一个新的选择项">&#xe60b;</a><a class="icononly-del iconfont icon-pos" title="删除此选择项">&#xe619;</a><a class="icononly-mov iconfont icon-pos" title="排序">&#xe63d;</a><a class="icononly-limit iconfont icon-pos" title="添加提交次数限制">&#xe632;</a></li>',item_goods:'<li class="clearfix"><div class="goods-item"><div class="goods-item-inner"> <div class="goods-image"> <img src="" class="img"> </div> <a class="goods-name-view" href="#" title="点击编辑，拖动排序">商品名称</a> <div class="attrs"> <div class="goods-name-edit"> <a href="#" class="edit-img" title="修改商品图片"><span>更换图片</span><input title="添加配图商品" name="editImg" class="file-prew edit-img-input" type="file" size="3" accept="image/gif,image/jpeg,image/png,image/bmp"></a> <label for="goodsItemVal">名称：</label><input id="goodsItemVal" value="商品名称" type="text" name="VAL" class="val" maxlength="16" /> </div> <div class="goods-price"> <label class="goods-price-label">单价：</label><input value="0" type="text" name="PRC" class="price" maxlength="6" /> </div> <div class="goods-unit"> <label>单位：</label><input type="text" name="UNT" class="unt" maxlength="4" /> </div> <div class="goods-def"> <label>默认：</label><input type="text" name="DEF" class="def number" maxlength="4" /> </div> <div class="goods-hide"> <input type="checkbox" name="HD" class="hd" value="1" /> <label>隐藏</label> </div> <div class="goods-currency"> <select name="CNY" class="cny" title="币别" ><option value="">币别</option><option value="¥">人民币</option><option value="$">美元</option><option value="£">英镑</option><option value="€">欧元</option></select> </div>	<div name="goods-limit" style="margin-bottom:3px;">	<label>限购：</label><select style="width:25%;" name="COMMITLMT"><option value="ALL">累计</option><option value="DAY">每天</option></select>&nbsp;&nbsp;限制购买&nbsp;<input style="width:25%;" class="number" type="text" name="AMOUNTLMT" maxlength="10"/>	</div> <div class="goods-description"> <label for="goodsItemDes" style="vertical-align: top;">描述：</label><textarea id="goodsItemDes" name="DES" class="des"></textarea> </div> </div></div></div> <a class="icononly-del iconfont" title="删除此选商品">&#xe619;</a> </li>',item_radio:'<li><input name="CHKED" value="1" class="radio" type="radio" title="默认选中此择项" /><div class="item-upload"><span>上传图片<br>(限1MB)</span><img class="img hide" style="width:60px;"/></div><input name="VAL" type="text" class="xs"/><a class="icononly-add iconfont icon-pos" title="添加一个新的选择项">&#xe60b;</a><a class="icononly-del iconfont icon-pos" title="删除此选择项">&#xe619;</a><a class="icononly-mov iconfont icon-pos" title="排序">&#xe63d;</a><a class="icononly-limit iconfont icon-pos" title="添加提交次数限制">&#xe632;</a></li>',item_dropdown:'<li><input name="CHKED" value="1" class="radio" type="radio" title="默认选中此择项" /><input name="VAL" type="text" class="sl"/><a class="icononly-add iconfont" title="添加一个新的选择项">&#xe60b;</a><a class="icononly-del iconfont" title="删除此选择项">&#xe619;</a><a class="icononly-mov iconfont" title="排序">&#xe63d;</a><a class="icononly-limit iconfont" title="添加提交次数限制">&#xe632;</a></li>',item_dropdown2:'<li><input name="CHKED" value="1" class="radio" type="radio" title="默认选中此择项" /><input name="VAL" type="text" class="sl"/><a class="icononly-add iconfont" title="添加一个新的选择项">&#xe60b;</a><a class="icononly-del iconfont" title="删除此选择项">&#xe619;</a><a class="icononly-mov iconfont" title="排序">&#xe63d;</a></li>',item_other:'<li class="dropReq hide"><input name="CHKED" disabled="disabled" type="radio" title="默认选中此择项" /><label>其他</label><input name="OTHER" disabled="disabled" type="text" class="m"/></li>',item_likert_row:'<li><input name="LBL" class="xl" value="1" type="text"/><a class="icononly-add iconfont" title="添加新行">&#xe60b;</a><a class="icononly-del iconfont" title="删除此行">&#xe619;</a><a class="icononly-mov iconfont" title="排序">&#xe63d;</a></li>',item_likert_col:'<li><input name="CHKED" value="1" class="radio" type="radio" title="默认选中此列" /><input name="VAL" type="text" class="l"/><a class="icononly-add iconfont" title="添加新列">&#xe60b;</a><a class="icononly-del iconfont" title="删除此列">&#xe619;</a><a class="icononly-mov iconfont" title="排序">&#xe63d;</a></li>',item_radio_f:'<span><input type="radio" disabled="disabled" /><label></label></span>',item_checkbox_f:'<span><input type="checkbox" disabled="disabled" /><label></label></span>',item_goods_f:'<div class="goods-item"><div class="image-center"><img src="" class="img"></div>	<div class="text-wrapper">	<label class="name">商品名称</label><label class="des"></label>	<div class="price-number clearfix">	<div class="price">0</div>	<div class="number-container"><span class="number-pre hide">¥</span>	<a href="#" class="decrease"><i class="icon-minus">-</i></a><input class="number" type="text" maxlength="6" value="0"><a href="#" class="increase"><i class="icon-plus">+</i></a>	</div>	</div>	</div></div>',item_imgselect:'<div class="goods-item"><div class="image-center"><img src="" class="img"></div>	<div class="text-wrapper">	<div class="clearfix">	</div>	</div></div>',likert_td:'<td><input type="radio" disabled="disabled" /><label></label></td>',item_radio_other_f:'<span class="hide"><input type="radio" value="other" disabled="disabled" /><label>其他</label><input name="OTHER" disabled="disabled" type="text" class="m" /></span>',text:
  {
    html:'<label class="control-label col-md-4"><span class="req hide"> *</span></label><div class="content textcontent"><input type="text" disabled="disabled" maxlength="255" class="input" /><i class="iconfont qrinput hide">&#xe67d;</i></div>',json:'({LBL:"单行文本",TYP:"text",FLDSZ:"m",REQD:"0",UNIQ:"0",SCU:"pub"})',holder:'<li class="field prefocus" style="height:71px;width:97%"></li>'
  }
  ,number:
  {
    html:'<label class="desc"><span class="req hide"> *</span></label><div class="content"><input type="text" disabled="disabled" maxlength="32" class="input" /></div>',json:'({LBL:"数字框",TYP:"number",FLDSZ:"s",REQD:"0",UNIQ:"0",SCU:"pub"})',holder:'<li class="field prefocus" style="height:71px;width:97%"></li>'
  }
  ,textarea:
  {
    html:'<label class="desc"><span class="req hide"> *</span></label><div class="content"><textarea disabled="disabled" class="input"></textarea></div>',json:'({LBL:"多行文本",TYP:"textarea",FLDSZ:"s",REQD:"0",UNIQ:"0",SCU:"pub",MIN:"",MAX:"",DEF:"",INSTR:"",CSS:""})',holder:'<li class="field prefocus" style="height:119px;width:97%"></li>'
  }
  ,checkbox:
  {
    html:'<label class="desc"><span class="req hide"> *</span></label><div class="content"></div>',json:'({LBL:"多选框",TYP:"checkbox",LAY:"one",REQD:"0",SCU:"pub",INSTR:"",CSS:"",ITMS:[{VAL:"选项 1",CHKED:"0"},{VAL:"选项 2",CHKED:"0"},{VAL:"选项 3",CHKED:"0"}]})',holder:'<li class="field prefocus" style="height:106px;width:97%"></li>'
  }
  ,goods:
  {
    html:'<label class="desc"><span class="req hide"> *</span></label><div class="content"><div class="nogoods-holder">请在右侧添加商品</div></div>',json:'({LBL:"商品",TYP:"goods",REQD:"0",SCU:"pub",INSTR:"",ITMS:[],FBUY:"0",UNT:"",NOIMG:""})',holder:'<li class="field prefocus" style="height:148px;width:97%"></li>'
  }
  ,goodsnoimg:
  {
    html:'<label class="desc"><span class="req hide"> *</span></label><div class="content"><div class="nogoods-holder">请在右侧添加商品</div></div>',json:'({LBL:"商品",TYP:"goods",REQD:"0",SCU:"pub",INSTR:"",ITMS:[],FBUY:"0",UNT:"",NOIMG:"1"})',holder:'<li class="field prefocus" style="height:148px;width:97%"></li>'
  }
  ,radio:
  {
    html:'<label class="desc"><span class="req hide"> *</span></label><div class="content"></div>',json:'({LBL:"单选框",TYP:"radio",LAY:"one",REQD:"0",OTHER:"0",RDM:"0",SCU:"pub",INSTR:"",CSS:"",ITMS:[{VAL:"选项 1",CHKED:"0"},{VAL:"选项 2",CHKED:"0"},{VAL:"选项 3",CHKED:"0"}]})',holder:'<li class="field prefocus" style="height:106px;width:97%"></li>'
  }
  ,dropdown:
  {
    html:'<label class="desc"><span class="req hide"> *</span></label><div class="content"><select disabled="disabled" class="m input"></select></div>',json:'({LBL:"下拉框",TYP:"dropdown",FLDSZ:"m",REQD:"0",SCU:"pub",INSTR:"",CSS:"",ITMS:[{VAL:"选项 1",CHKED:"0"},{VAL:"选项 2",CHKED:"0"},{VAL:"选项 3",CHKED:"0"}]})',holder:'<li class="field prefocus" style="height:71px;width:97%"></li>'
  }
  ,dropdown2:
  {
    html:'<label class="desc"><span class="req hide"> *</span></label><div class="content"><select disabled="disabled" class="m input"></select> <select disabled="disabled" class="m input"></select></div>',json:'({LBL:"多级下拉框",TYP:"dropdown2",FLDSZ:"m",pN:"2",REQD:"0",SCU:"pub",INSTR:"",CSS:"",SUBFLDS:{DD1:{},DD2:{}},ITMS:[{VAL:"选项 1",CHKED:"0",ITMS:[{VAL:"选项 11"},{VAL:"选项 12"}]},{VAL:"选项 2",CHKED:"0",ITMS:[{VAL:"选项 21"},{VAL:"选项 22"}]}]})',holder:'<li class="field prefocus" style="height:71px;width:97%"></li>'
  }
  ,image:
  {
    html:'<label class="desc"><span class="req hide"> *</span></label><div class="content"><img style="width:100%;" src="/rs/images/defaultimg.png"></div>',json:'({LBL:"图片",TYP:"image",IMG:"",REQD:"0",SCU:"pub",INSTR:"",CSS:""})',holder:'<li class="field prefocus" style="height:194px;width:97%"></li>'
  }
  ,section:
  {
    html:'<div class="noLabelAlign"><label class="desc section">分隔符</label><div class="content">这里是分隔符说明</div></div>',json:'({LBL:"分隔符",TYP:"section",SCU:"pub",SECDESC:"这里是分隔符说明",CSS:""})',holder:'<li class="field prefocus" style="height:58px;width:97%"></li>'
  }
  ,html:
  {
    html:'<div class="noLabelAlign"><label class="desc">HTML标题</label><div class="content"><p>这里可以显示HTML内容</p></div></div>',json:'({LBL:"HTML标题",TYP:"html",SCU:"pub",HTML:"<p>这里可以显示HTML内容</p>",CSS:""})',holder:'<li class="field prefocus" style="height:54px;width:97%"></li>'
  }
  ,date:
  {
    html:'<label class="desc">日期 <span class="req hide"> *</span></label><div class="content oneline reduction"><span>	<input class="yyyy input" disabled="disabled" maxlength="4" type="text"/>	<label>YYYY</label></span><span class="split"> - </span><span>	<input class="mm input" disabled="disabled" maxlength="2" type="text"/>	<label>MM</label></span><span class="split"> - </span><span>	<input class="dd input" disabled="disabled" maxlength="2" type="text"/>	<label>DD</label></span><span><a class="icononly-date" title="选择日期"></a></span></div>',json:'({LBL:"日期",TYP:"date",REQD:"0",UNIQ:"0",SCU:"pub",FMT:"ymd",DEF:"",INSTR:"",CSS:""})',holder:'<li class="field prefocus" style="height:87px;width:97%"></li>'
  }
  ,date_ymd:'<span><input class="yyyy input" disabled="disabled" maxlength="4" type="text"/><label>YYYY</label></span><span class="split"> - </span><span><input class="mm input" disabled="disabled" maxlength="2" type="text"/><label>MM</label></span><span class="split"> - </span><span><input class="dd input" disabled="disabled" maxlength="2" type="text"/><label>DD</label></span><span><a class="icononly-date" title="选择日期"></a></span>',date_mdy:'<span><input class="mm input" disabled="disabled" maxlength="2" type="text"/><label>MM</label></span><span class="split"> / </span><span><input class="dd input" disabled="disabled" maxlength="2" type="text"/><label>DD</label></span><span class="split"> / </span><span><input class="yyyy input" disabled="disabled" maxlength="4" type="text"/><label>YYYY</label></span><span><a class="icononly-date" title="选择日期"></a></span>',date_dmy:'<span><input class="dd input" disabled="disabled" maxlength="2" type="text"/>	<label>DD</label></span><span class="split"> / </span><span>	<input class="mm input" disabled="disabled" maxlength="2" type="text"/>	<label>MM</label></span><span class="split"> / </span><span>	<input class="yyyy input" disabled="disabled" maxlength="4" type="text"/>	<label>YYYY</label></span><span><a class="icononly-date" title="选择日期"></a></span>',time:
  {
    html:'<label class="desc"><span class="req hide"> *</span></label><div class="content oneline reduction"><span>	<select class="hh input" disabled="disabled"></select></span><span class="split"> : </span><span>	<select class="mm input" disabled="disabled"></select></span></div>',json:'({LBL:"时间",TYP:"time",REQD:"0",UNIQ:"0",SCU:"pub",DEF:"",INSTR:"",CSS:""})',holder:'<li class="field prefocus" style="height:71px;width:97%"></li>'
  }
  ,file:
  {
    html:'<label class="desc"><span class="req hide"> *</span></label><div class="content"><input type="text" disabled="disabled" class="m input" />&nbsp;<input type="button" class="btn file-input" disabled="disabled" value="浏览..." /></div>',json:'({LBL:"上传文件",TYP:"file",FLDSZ:"m",REQD:"0",UNIQ:"0",SCU:"pub",INSTR:"",CSS:"",SUBFLDS:{ID:{},TYP:{},SZ:{},NM:{}}})',holder:'<li class="field prefocus" style="height:71px;width:97%"></li>'
  }
  ,phone:
  {
    html:'<label class="desc"><span class="req hide"> *</span></label><div class="content oneline reduction"><input type="text" disabled="disabled" maxlength="32" class="s input" /> <button type="button" class="btn sendcode hide">发送验证码</button></div>',json:'({LBL:"手机",TYP:"phone",REQD:"0",UNIQ:"0",SCU:"pub",FMT:"mobile",DEF:"",INSTR:"",CSS:""})',holder:'<li class="field prefocus" style="height:71px;width:97%"></li>'
  }
  ,phone_tel_cn:'<span><input class="input" disabled="disabled" maxlength="4" size="4" type="text"/><label>区号</label></span><span class="split"> - </span><span><input class="input" disabled="disabled" maxlength="8" size="8" type="text"/><label>总机</label></span><span class="split"> - </span><span><input class="input" disabled="disabled" maxlength="4" size="4" type="text"/><label>分机</label></span>',phone_tel_en:'<span><input class="input" disabled="disabled" maxlength="4" size="4" type="text"/><label>####</label></span><span class="split"> - </span><span><input class="input" disabled="disabled" maxlength="8" size="8" type="text"/><label>########</label></span><span class="split"> - </span><span><input class="input" disabled="disabled" maxlength="4" size="4" type="text"/><label>####</label></span>',phone_mobile_cn:'<input type="text" disabled="disabled" maxlength="32" class="s input" /> <button type="button" class="btn sendcode hide">发送验证码</button>',phone_mobile_en:'<input type="text" disabled="disabled" maxlength="32" class="s input" /> <button type="button" class="btn sendcode hide">发送验证码</button>',url:
  {
    html:'<label class="desc"> <span class="req hide"> *</span></label><div class="content"><input type="text" disabled="disabled" maxlength="256" class="m input" value="http://" /></div>',json:'({LBL:"网址",TYP:"url",FLDSZ:"xxl",REQD:"0",UNIQ:"0",SCU:"pub",DEF:"",INSTR:"",CSS:""})',holder:'<li class="field prefocus" style="height:71px;width:97%"></li>'
  }
  ,money:
  {
    html:'<label class="desc"><span class="req hide"> *</span></label><div class="content"><b>￥</b><input type="text" disabled="disabled" maxlength="16" size="8" class="input" /></div>',json:'({LBL:"价格",TYP:"money",REQD:"0",UNIQ:"0",SCU:"pub",FMT:"yen",DEF:"",INSTR:"",CSS:""})',holder:'<li class="field prefocus" style="height:71px;width:97%"></li>'
  }
  ,email:
  {
    html:'<label class="desc"><span class="req hide"> *</span></label><div class="content"><input type="text" disabled="disabled" maxlength="64" class="m input" /></div>',json:'({LBL:"Email",TYP:"email",FLDSZ:"m",REQD:"0",UNIQ:"0",SCU:"pub",DEF:"",INSTR:"",CSS:""})',holder:'<li class="field prefocus" style="height:71px;width:97%"></li>'
  }
  ,name:
  {
    html:'<label class="desc"><span class="req hide"> *</span></label><div class="content oneline reduction"><input type="text" disabled="disabled" maxlength="128" value="" class="s input" /></div>',json:'({LBL:"姓名",TYP:"name",REQD:"0",UNIQ:"0",SCU:"pub",FMT:"short",DEF:"",INSTR:"",CSS:""})',holder:'<li class="field prefocus" style="height:71px;width:97%"></li>'
  }
  ,name_short:'<input type="text" disabled="disabled" maxlength="128" value="" class="s input" /></div>',name_extend_en:'<span><input class="input" disabled="disabled" maxlength="128" size="6" type="text"/><label>Title</label></span><span class="split"> - </span><span><input class="input" disabled="disabled" maxlength="128" size="10" type="text"/><label>First Name</label></span><span class="split"> - </span><span><input class="input" disabled="disabled" maxlength="128" size="10" type="text"/><label>Last Name</label></span>',name_extend_cn:'<span><input class="input" disabled="disabled" maxlength="4" size="4" type="text"/><label>姓</label></span><span class="split"> - </span><span><input class="input" disabled="disabled" maxlength="4" size="8" type="text"/><label>名</label></span><span class="split"> - </span><span><input class="input" disabled="disabled" maxlength="4" size="4" type="text"/><label>称呼</label></span>',map:
  {
    html:'<label class="desc"><span class="req hide"> *</span></label><div class="content"><input type="text" class="xxl location" readonly="readonly" /><div class="map"><img src="http://rs.jsform.com/rs/images/map.jpg"</div></div>',json:'({LBL:"地理位置",TYP:"map",REQD:"0",SCU:"pub",INSTR:"",CSS:"",SUBFLDS:{TXT:{},J:{},W:{}}})',holder:'<li class="field prefocus" style="height:310px;width:97%"></li>'
  }
  ,address:
  {
    html:'<label class="desc"><span class="req hide"> *</span></label><div class="content onelineLeft reduction"><span class="left third clear"><select disabled="disabled" class="xxl input province"><option value="">省/自治区/直辖市</option></select></span><span class="left third"><select disabled="disabled" class="xxl input city" ><option value="">市</option></select></span><span class="left third"><select disabled="disabled" class="xxl input zip" ><option value="">区/县</option></select></span><span class="left" style="margin:5px 5px 0px 0px;width:100%;"><textarea style="height:60px;" disabled="disabled" class="input xxl detail" placeholder="详细地址" ></textarea></span></div>',json:'({LBL:"地址",TYP:"address",REQD:"0",SCU:"pub",INSTR:"",CSS:"",SUBFLDS:{ZIP:{},PRV:{},CITY:{},DTL:{}}})',holder:'<li class="field prefocus" style="height:141px;width:97%"></li>'
  }
  ,address_en:'<span class="left third clear"><select disabled="disabled" class="xxl input province"><option value="">省/自治区/直辖市</option></select></span><span class="left third"><select disabled="disabled" class="xxl input city" ><option value="">市</option></select></span><span class="left third"><select disabled="disabled" class="xxl input zip" ><option value="">区/县</option></select></span><span class="left" style="margin:5px 5px 0px 0px;width:100%;"><textarea style="height:60px;" disabled="disabled" class="input xxl detail" placeholder="Street"></textarea></span>',address_cn:'<span class="left third clear"><select disabled="disabled" class="xxl input province"><option value="">省/自治区/直辖市</option></select></span><span class="left third"><select disabled="disabled" class="xxl input city" ><option value="">市</option></select></span><span class="left third"><select disabled="disabled" class="xxl input zip" ><option value="">区/县</option></select></span><span class="left" style="margin:5px 5px 0px 0px;width:100%;"><textarea style="height:60px;" disabled="disabled" class="input xxl detail" placeholder="详细地址"></textarea></span>',likert:
  {
    html:'<div class="content noLabelAlign"><table class="table" cellspacing="0"><caption><label class="desc"><span class="req hide"> *</span></label></caption><thead><tr></tr></thead><tbody></tbody></table></div>',json:'({LBL:"组合单选框",TYP:"likert",REQD:"0",HDNM:"0",SCU:"pub",CSS:"",ITMS:[{LBL:"行标签 1",ITMS:[{VAL:"列标签 1",CHKED:"0"},{VAL:"列标签 2",CHKED:"0"},{VAL:"列标签 3",CHKED:"0"},{VAL:"列标签 4",CHKED:"0"}]}, {LBL:"行标签 2",ITMS:[{VAL:"列标签 1",CHKED:"0"},{VAL:"列标签 2",CHKED:"0"},{VAL:"列标签 3",CHKED:"0"},{VAL:"列标签 4",CHKED:"0"}]}, {LBL:"行标签 3",ITMS:[{VAL:"列标签 1",CHKED:"0"},{VAL:"列标签 2",CHKED:"0"},{VAL:"列标签 3",CHKED:"0"},{VAL:"列标签 4",CHKED:"0"}]}]})',holder:'<li class="field prefocus" style="height:184px;width:97%"></li>'
  }
};
(function()
{
  $.formatPrice=function(g,f,e,d,a,b)
  {
    a=f?a:"";
    if(!e)
    {
      e="¥"
    }
    g.find("input.number").val(b||"0");
    if("1"==d)
    {
      f=f||"";
      g.find("div.price").text(f+(a||""));
      g.find("a.decrease,a.increase").css(
      {
        display:"none"
      }
      );
      g.find("span.number-pre").show();
      g.find("input.number").addClass("noincrease")
    }
    else
    {
      f=f||"0";
      g.find("div.price").text(e+f+(a?"/"+a:""));
      g.find("a.decrease,a.increase").css(
      {
        display:"inline-block"
      }
      );
      g.find("span.number-pre").hide();
      g.find("input.number").removeClass("noincrease")
    }
  }
}
)(jQuery);
function resizeHandle(b)
{
  var a=function(c)
  {
    var f=c.find("div.handle");
    if(f.length==0)
    {
      f=$(DEFFLD.handle);
      c.append(f)
    }
    f.position(
    {
      of:c,my:"left top",at:"left top"
    }
    );
    var d=c.outerWidth(),e=c.outerHeight();
    f.css("width",d).css("height",e);
    f.find("i.move").css("lineHeight",(e-2)+"px")
  };
  if(b=="all")
  {
$("#fields").find("li.field").each(function(d,c)
{
  a($(c))
}
)
}
else
{
a(b)
}
}
function showProperties(c)
{
  var b=["ptype","pfldsize","playout","pdateformat","pphoneformat","pmoneyformat","pnameformat","plikert","pitems","pitems2","pitems_other","pitems_radio","pitems_batchedit","pitems_checkbox","poptions","pgoods","pimage","popt_required","popt_unique","popt_random","popt_allowother","popt_hidenum","popt_qrinput","pN","popt_authcode","popt_compress","popt_dismark","psecurity","prange","pconfine","pconfine1","pconfine2","pdefval_text","pdefval_number","pdefval_date","pdefval_time","pdefval_phone_tel","pdefval_phone_mobile","pdefval_addr","pinstruct","psection","phtml"],a=
  {
    text:["ptype","pfldsize","poptions","popt_required","popt_unique","popt_qrinput","psecurity","prange","pdefval_text","pinstruct","pconfine","pconfine1","pconfine2"],number:["ptype","pfldsize","poptions","popt_required","popt_unique","psecurity","prange","pdefval_number","pinstruct","pconfine","pconfine2"],textarea:["ptype","pfldsize","poptions","popt_required","popt_unique","psecurity","prange","pdefval_text","pinstruct","pconfine","pconfine2"],checkbox:["ptype","playout","poptions","popt_required","psecurity","prange","pitems","pitems_batchedit","pinstruct"],goods:["ptype","poptions","popt_required","psecurity","pgoods"],goodsnoimg:["ptype","poptions","popt_required","psecurity","pgoods"],radio:["ptype","playout","poptions","popt_required","popt_random","popt_allowother","psecurity","pitems","pitems_other","pitems_radio","pinstruct","pconfine","pconfine2"],dropdown:["ptype","pfldsize","poptions","popt_required","psecurity","pitems","pitems_radio","pinstruct","pconfine","pconfine1","pconfine2"],dropdown2:["ptype","poptions","popt_required","psecurity","pitems","pitems_batchedit","pitems2","pinstruct","pN"],image:["ptype","pimage","psecurity"],map:["poptions","popt_required","psecurity","pinstruct","popt_dismark"],section:["psecurity","psection"],html:["psecurity","phtml"],likert:["ptype","plikert","poptions","popt_required","popt_hidenum","psecurity"],date:["ptype","pdateformat","poptions","popt_required","popt_unique","psecurity","pdefval_date","pinstruct","pconfine","pconfine2"],time:["ptype","poptions","popt_required","popt_unique","psecurity","pdefval_time","pinstruct","pconfine","pconfine2"],phone:["ptype","poptions","popt_required","popt_unique","popt_authcode","psecurity","pdefval_phone_mobile","pphoneformat","pinstruct","pconfine","pconfine1","pconfine2"],file:["ptype","poptions","popt_required","popt_compress","psecurity","pinstruct"],url:["ptype","pfldsize","poptions","popt_required","popt_unique","psecurity","pdefval_text","pinstruct","pconfine","pconfine2"],money:["ptype","pmoneyformat","poptions","popt_required","popt_unique","psecurity","prange","pdefval_number","pinstruct","pconfine","pconfine2"],email:["ptype","pfldsize","poptions","popt_required","popt_unique","psecurity","pdefval_text","pinstruct","pconfine","pconfine1","pconfine2"],name:["ptype","pnameformat","poptions","popt_required","psecurity","pinstruct","pconfine","pconfine1","pconfine2"],address:["ptype","poptions","popt_required","psecurity","pconfine","pconfine2","pdefval_addr","pinstruct"]
  };
  $.each(b,function(d,e)
  {
    $("#"+e).hide()
  }
  );
  $.each(a[c],function(d,e)
  {
    $("#"+e).show()
  }
  );
  if(c==="text"||c==="textarea")
  {
    $("label.min","#prange").text("最小长度");
    $("label.max","#prange").text("最大长度")
  }
  else
  {
    if(c=="checkbox")
    {
      $("label.min","#prange").text("最少选择几项");
      $("label.max","#prange").text("最多选择几项")
    }
    else
    {
      $("label.min","#prange").text("最小值");
      $("label.max","#prange").text("最大值")
    }
  }
}
function preFocused(c,b)
{
  if(b===0&&IDX!==-1&&!$(c).hasClass("form-focused"))
  {
    $(c).removeClass("form-default").addClass("form-prefocus")
  }
  if(b!==0&&IDX+1!==b)
  {
    $(c).removeClass("default").addClass("prefocus");
    var a=$("p.instruct",c);
    if(a.html())
    {
      a.hide().fadeIn()
    }
  }
}
function reDefault(b,a)
{
  if(a===0&&IDX!==-1)
  {
    $(b).removeClass("form-prefocus").addClass("form-default")
  }
  if(a!==0&&IDX+1!==a)
  {
    $(b).removeClass("prefocus").addClass("default").find("p.instruct").hide()
  }
}
function setFocused(a,c)
{
  var d=$(a);
  if(c>0)
  {
    $("#formProperties,#noFieldSelected").addClass("hide");
    $("#fieldProperties").removeClass("hide");
    if(IDX+1===c)
    {
      setPropertieValues(F[c-1]);
      return
    }
  }
  else
  {
    $("#formProperties").removeClass("hide");
    $("#fieldProperties,#noFieldSelected").addClass("hide")
  }
  $("li.focused","#fields").removeClass("focused").addClass("default").find("img.arrow,p.instruct,div.fieldActions").hide();
  if(c==-1)
  {
    IDX=-2;
    return
  }
  if(c===0)
  {
    d.removeClass("form-default form-prefocus").addClass("form-focused")
  }
  else
  {
    $("#fbForm").removeClass("form-focused").addClass("form-default");
    d.removeClass("default prefocus").addClass("focused")
  }
  var b=$("p.instruct",d);
  if(b.html())
  {
    b.show()
  }
  $("img.arrow,div.fieldActions",d).show();
  IDX=c-1;
  if(c>0)
  {
    showProperties(F[IDX].TYP);
    setPropertieValues(F[IDX])
  }
  else
  {
    $("#liGoods").hide();
    $("#salem,#salej").prop("disabled",!M.SALE);
$(F).each(function(e,g)
{
  if("goods"===g.TYP)
  {
    $("#liGoods").show();
    return false
  }
}
);
if(c===0)
{
  setFormValues(M)
}
IDX=-1
}
}
function createItems(f,b,d)
{
  var e,a=
  {
    checkbox:DEFFLD.item_checkbox,goods:DEFFLD.item_goods,radio:DEFFLD.item_radio,dropdown:DEFFLD.item_dropdown,dropdown2:DEFFLD.item_dropdown2,likertRow:DEFFLD.item_likert_row,likertCol:DEFFLD.item_likert_col
  };
  if(a[b]===undefined)
  {
    return
  }
  f.empty();
  $.each(d,function(h,g)
  {
    e=$(a[b]);
    f.append(e);
    if("goods"===b)
    {
      e.setValues(g,true);
      if(g.IMG)
      {
        e.find("img.img").attr("src",GOODSIMAGEURL+g.IMG+GOODSIMAGESTYLE)
      }
      e.find("input.edit-img-input").attr("id",$.format("F{0}ITMS{1}UPLOAD",IDX,h));
      e.find(".goods-name-view").text(g.VAL);
      var c=e.find("div.goods-hide");
      c.find("input").attr("id",$.format("F{0}ITMS{1}HIDE",IDX,h));
      c.find("label").attr("for",$.format("F{0}ITMS{1}HIDE",IDX,h))
    }
    else
    {
      e.setValues(g)
    }
    if(("checkbox"==b||"radio"==b)&&g.IMG)
    {
      e.find("img.img").removeClass("hide").attr("src",IMAGESURL+g.IMG);
      e.find("span").addClass("hide")
    }
  }
  );
  if(b==="radio")
  {
    e=$(DEFFLD.item_other);
    if($("#allowOther").prop("checked"))
    {
      e.removeClass("hide")
    }
    f.append(e)
  }
  else
  {
    if("dropdown2"==b&&d.length>0)
    {
      f.find(":text:first").focus()
    }
  }
  if("goods"!=b)
  {
  }
}
function setFormValues(a)
{
  if(a.CFMTYP==="T")
  {
    $("#confirmMsg_text").show()
  }
  else
  {
    if(a.CFMTYP==="U")
    {
      $("#confirmMsg_url").show()
    }
  }
  descEditor.$txt.html(a.DESC||"");
  $("#formProperties").setValues(a,true)
}
function showPhoneFormat(a)
{
  if(a==="tel")
  {
    $("#pdefval_phone_tel").show();
    $("#pdefval_phone_mobile").hide();
    $("#popt_authcode").hide().setValues(
    {
    }
    )
  }
  else
  {
    $("#pdefval_phone_tel").hide();
    $("#pdefval_phone_mobile").show();
    $("#popt_authcode").show()
  }
}
function setSplitTelValue()
{
  var a=$("#defval_phone_tel").val().split("-");
  $.each(a,function(b,c)
  {
    $(":text:eq("+b+")","#pdefval_phone_tel").val(a[b])
  }
  )
}
function setPropertieValues(c)
{
  $("#allProps").setValues(c);
  if(c.SECDESC)
  {
    $(".wangEditor-txt").html(c.SECDESC)
  }
  else
  {
    if(c.HTML)
    {
      $(".wangEditor-txt").html(c.HTML)
    }
  }
  if(c.TYP==="phone"&&c.FMT)
  {
    $("#phoneformat").val(c.FMT);
    showPhoneFormat(c.FMT);
    if(c.FMT==="tel")
    {
      $("#defval_phone_mobile").val("");
      $("#defval_phone_tel").val(c.DEF);
      setSplitTelValue()
    }
    else
    {
      $("#defval_phone_tel").val("");
      $("#defval_phone_mobile").val(c.DEF)
    }
  }
  else
  {
    if(c.TYP=="address"&&c.DEF)
    {
      var b=c.DEF.split("-"),a=b[0],f=b[1],e=b[2];
      $("#defval_province").val(a);
      if(a)
      {
        $("#f"+IDX).find("select.province").empty().append($.format("<option>{0}</option>",a));
        $("#defval_city").empty().append("<option value=''>市</option>");
        if(a)
        {
          var d="";
          $.each(address.provinces[a],function(h,g)
          {
            d+=$.format('<option value="{0}">{1}</option>',h,h)
          }
          );
          $("#defval_city").append(d);
          $("#defval_city").val(f)
        }
      }
      if(f)
      {
        $("#f"+IDX).find("select.city").empty().append($.format("<option>{0}</option>",f));
        $("#defval_zip").empty().append("<option value=''>区/县</option>");
        var d="";
        $.each(address.provinces[a][f],function(h,g)
        {
          d+=$.format('<option value="{0}">{1}</option>',g,g)
        }
        );
        $("#defval_zip").append(d);
        $("#defval_zip").val(e)
      }
      if(e)
      {
        $("#f"+IDX).find("select.zip").empty().append($.format("<option>{0}</option>",e))
      }
    }
    else
    {
      if(c.TYP=="file")
      {
        if(c.CPRS)
        {
          $("#chkCompress").prop("checked",true);
          $("#divCompress").removeClass("hide")
        }
        else
        {
          $("#chkCompress").prop("checked",false);
          $("#divCompress").addClass("hide")
        }
      }
    }
  }
  if(c.TYP==="likert")
  {
    createItems($("#likertRows"),"likertRow",c.ITMS);
    createItems($("#likertCols"),"likertCol",c.ITMS[0].ITMS)
  }
  else
  {
    if(c.TYP=="goods")
    {
      createItems($("#goodsList"),c.TYP,c.ITMS);
      if("1"==c.FBUY)
      {
        $("#goodsList").find(".goods-price-label").text("数量：")
      }
      else
      {
        $("#goodsList").find(".goods-price-label").text("单价：")
      }
      if("1"==c.NOIMG)
      {
        $("#goodsList").addClass("noimg");
        $("#pgoods").addClass("noimg");
        $("#type").val("goodsnoimg")
      }
      else
      {
        $("#goodsList").removeClass("noimg");
        $("#pgoods").removeClass("noimg")
      }
    }
    else
    {
      if(c.ITMS)
      {
        createItems($("#itemList"),c.TYP,c.ITMS)
      }
    }
  }
  if(c.FLDID)
  {
    $("#type,#N").prop("disabled",true)
  }
  else
  {
    $("#type,#N").prop("disabled",false)
  }
}
function isInstruct(a)
{
  if(M.INSTR!=="1")
  {
    return false
  }
  else
  {
    if(a==="likert"||a==="section"||a==="html"||a==="goods"||a==="image")
    {
      return false
    }
  }
  return true
}
function isOneCol(a)
{
  if(a==="radio"||a==="checkbox")
  {
    return true
  }
  else
  {
    return false
  }
}
function setDefFieldDom(li,type,index,srcJSON)
{
  var newJSON=eval(DEFFLD[type].json);
  $.mergJSON(srcJSON,newJSON);
  F[index]=newJSON;
  createField(li,newJSON);
  if(li.index()==0)
  {
    li.addClass("first")
  }
  else
  {
    li.removeClass("first")
  }
  resizeHandle(li)
}
function addDefFieldDom(c,type,index,srcJSON)
{
  var newJSON=eval(DEFFLD[type].json);
  $.mergJSON(srcJSON,newJSON);
  F.splice(index,0,newJSON);
  createField(c,newJSON);
  resizeHandle(c)
}
function fieldInit()
{
  var a="63%";
  $("#fields").sortable(
  {
    axis:"y",delay:100
  }
  ).disableSelection();
  $("li","#addFields").draggable(
  {
    revert:"invalid",helper:"clone",connectToSortable:"#fields",start:function(c,b)
    {
      b.helper.find("a.btn-field").addClass("btn-field-helper")
    }
  }
  ).disableSelection();
  $("#fields").live(
  {
    sortstart:function(c,b)
    {
      if(!b.item.hasClass("field"))
      {
        return
      }
      b.item.css("left","");
      b.placeholder.css("height",b.item.height())
    }
    ,sortover:function(g,f)
    {
      if(f.helper.hasClass("field"))
      {
        return
      }
      var d=f.item.attr("ftype"),i=f.item.attr("subtype")||"",b=$(DEFFLD[d+i].holder).css("height");
      f.placeholder.addClass("field default").css(
      {
        height:b,width:"100%"
      }
      );
      var c=$(DEFFLD[d+i].holder);
      if(isInstruct(d))
      {
        f.placeholder.css(
        {
          width:a,height:b
        }
        )
      }
      c.css(
      {
        width:f.placeholder.css("width"),height:b
      }
      );
      f.helper.empty().append(c);
      CHANGED=true
    }
    ,sortupdate:function(h,d)
    {
      var i=d.item.index();
      if(!d.item.hasClass("field"))
      {
        var g=$(this).find("li.field").size();
        if(g>=fieldsLimit)
        {
          $.alert("最多只能添加"+fieldsLimit+"个字段。");
setTimeout(function()
{
  d.item.remove()
}
,50);
return false
}
var c=d.item.attr("ftype")+(d.item.attr("subtype")||"");
if(c=="image")
{
var j=0;
$(F).each(function(e,k)
{
  if("image"===k.TYP)
  {
    j++
  }
}
);
if(j>=imageNumber)
{
  $.alert("最多只能添加"+imageNumber+"张图片");
setTimeout(function()
{
  d.item.remove()
}
,50);
return false
}
}
$("#fields>li").each(function(k,e)
{
  $(e).attr("id","f"+k)
}
);
addDefFieldDom(d.item,c,i)
}
else
{
var f=parseInt(d.item.attr("id").substring(1)),b=F[f];
F.splice(f,1);
F.splice(i,0,b);
$("li.field","#fields").each(function(k,e)
{
  $(e).attr("id","f"+k)
}
);
IDX=f;
setFocused(d.item,i+1)
}
$("#fields").find("li.first").removeClass("first").end().find("li.field:first").addClass("first");
CHANGED=true
}
}
);
$("#fbForm").hover(function()
{
  preFocused(this,0)
}
,function()
{
  reDefault(this,0)
}
);
$("#fbForm").click(function()
{
  setFocused(this,0)
}
);
$("li.field","#fields").live(
{
  mouseenter:function()
  {
    preFocused(this,$("li.field","#fields").index(this)+1);
    $(this).find("i.move").removeClass("hide");
    var b=$(this).innerHeight()+"px";
    $(this).find("div.handle").css("height",b);
    $(this).find("i.move").css("lineHeight",b)
  }
  ,mouseleave:function()
  {
    reDefault(this,$("li.field","#fields").index(this)+1);
    $(this).find("i.move").addClass("hide")
  }
  ,click:function()
  {
    setFocused(this,$("li.field","#fields").index(this)+1);
    $(this).find("i.move").addClass("hide")
  }
}
)
}
function createRadioItemsPreview(b,f)
{
  f.empty();
  var e;
  var a;
  var d=false;
  $.each(b.ITMS,function(g,c)
  {
    if(c.IMG)
    {
      d=true;
      return false
    }
  }
  );
  $.each(b.ITMS,function(g,c)
  {
    e=$(DEFFLD.item_radio_f);
    e.find("label").text(c.VAL);
    e.find(":radio").prop("checked",c.CHKED==="1");
    if(d)
    {
      if(c.IMG)
      {
        a=$("<div class='goods-item'><div class='image-center'><img class='img' src='"+IMAGESURL+c.IMG+"'/></div><div class='text-wapper center'><span>"+e.html()+"</span></div></div>")
      }
      else
      {
        a=$("<div class='goods-item'><div class='image-center'><img class='img' src=''/></div><div class='text-wapper center'><span>"+e.html()+"</span></div></div>")
      }
      f.append(a)
    }
    else
    {
      f.append(e)
    }
  }
  );
  e=$(DEFFLD.item_radio_other_f);
  if(b.OTHER==="1")
  {
    e.show()
  }
  else
  {
    e.hide()
  }
  f.append(e)
}
function createGoodsItemsPreView(a,d)
{
  if(a.ITMS.length>0)
  {
    d.empty()
  }
  var b;
  $.each(a.ITMS,function(e,c)
  {
    b=$(DEFFLD.item_goods_f);
    if("1"==a.NOIMG)
    {
      b.find("div.image-center").hide()
    }
    else
    {
      b.find("img.img").attr("src",GOODSIMAGEURL+c.IMG+GOODSIMAGESTYLE)
    }
    b.find("label.name").text(c.VAL);
    b.find("label.des").html($.enterToBr(c.DES||""));
    $.formatPrice(b.find("div.price-number"),c.PRC,c.CNY,a.FBUY,c.UNT,c.DEF);
    if("1"==c.HD)
    {
      b.hide()
    }
    d.append(b)
  }
  )
}
function createLikertPreview(i,f)
{
  var h=i.ITMS[0].ITMS,j=i.ITMS,e=f.find("table.table>thead>tr"),d=f.find("table.table>tbody"),g,a;
  e.empty();
  d.empty();
  var b=Math.ceil((100-30)/h.length)+"%";
  $.each(h,function(k,c)
  {
    if(k===0)
    {
      e.append("<th>&nbsp;</th>")
    }
    e.append($.tmpl('<td style="width:${width}">${val}</td>',
    {
      width:b,val:c.VAL
    }
    ))
  }
  );
  $.each(j,function(c,k)
  {
    g=$($.tmpl("<tr><th>${$data}</th></tr>",k.LBL));
    $.each(h,function(n,l)
    {
      a=$(DEFFLD.likert_td);
      a.find("label").text(n+1);
      if(l.CHKED==="1")
      {
        a.find(":radio").prop("checked",true)
      }
      if(i.HDNM==="1")
      {
        a.find("label").hide()
      }
      g.append(a)
    }
    );
    d.append(g)
  }
  )
}
function propertyInit()
{
  var T=null;
  $(":radio:not('#sec_pub','#sec_pri')","#allProps").live(
  {
    click:function()
    {
      if(T===this)
      {
        $(T).prop("checked",false);
        T=null
      }
      else
      {
        T=this
      }
      CHANGED=true
    }
  }
  );
function r(U)
{
  if(T==U)
  {
    T.checked=false;
    T=null
  }
  else
  {
    T=U
  }
}
var e=function(aa,ab)
{
  var ah=$("#prepop");
  var ad=[],Z=ah.val().split("\n");
  for(Y=0,i1=0;Y<Z.length;Y++)
  {
    var ac=
    {
      VAL:Z[Y],CHKED:"0"
    };
    if(ab=="radio"||ab=="dropdown")
    {
      if(F[IDX].ITMS[i1]&&F[IDX].ITMS[i1].ITMID)
      {
        ac.ITMID=F[IDX].ITMS[i1].ITMID
      }
    }
    if(ab=="checkbox")
    {
      if(F[IDX].ITMS[i1]&&F[IDX].ITMS[i1].NM)
      {
        ac.NM=F[IDX].ITMS[i1].NM
      }
    }
    ad.push(ac)
  }
  if(ab==="dropdown2")
  {
    var ae=
    {
    };
    ae.ITMS=[];
    var af=ae;
    var V=0;
    for(var Y=0;Y<Z.length;Y++)
    {
      var ag=$.trim(Z[Y]);
      var U=ag.lastIndexOf("-")+1;
      ag=ag.substring(U);
      if(ag&&ag.length>0)
      {
        var X=
        {
        };
        X.VAL=ag;
        if(V==U)
        {
          af.ITMS.push(X)
        }
        else
        {
          if(V<U)
          {
            V++;
            af=af.ITMS[af.ITMS.length-1];
            af.ITMS=[];
            af.ITMS.push(X)
          }
          else
          {
            if(V>U)
            {
              var W=0;
              af=ae;
              while(W<U)
              {
                W++;
                af=af.ITMS[af.ITMS.length-1]
              }
              V=U;
              if(!af.ITMS)
              {
                af.ITMS=[]
              }
              af.ITMS.push(X)
            }
          }
        }
      }
    }
    ad=ae.ITMS
  }
  createItems(aa,ab,ad);
  if(ab==="radio"||ab==="dropdown"||ab=="checkbox"||ab=="dropdown2")
  {
    F[IDX].ITMS=ad
  }
  else
  {
    if(ab==="likertCol")
    {
      $.each(F[IDX].ITMS,function(ak,aj)
      {
        var ai=JSON.parse(JSON.stringify(ad));
        $.each(ai,function(al,am)
        {
          if(F[IDX].ITMS[ak]&&F[IDX].ITMS[ak].ITMS[al]&&F[IDX].ITMS[ak].ITMS[al].ITMID)
          {
            ai[al].ITMID=F[IDX].ITMS[ak].ITMS[al].ITMID
          }
        }
        );
        aj.ITMS=ai
      }
      )
    }
  }
}
,A=function(U)
{
  e($("#itemList"),U);
  if(F[IDX].TYP==="radio")
  {
    createRadioItemsPreview(F[IDX],$("#f"+IDX).find("div.content"))
  }
  else
  {
    if(F[IDX].TYP==="dropdown")
    {
      $("#f"+IDX).find("select").empty()
    }
  }
};
$("#btnItemsPredefine").click(function()
{
  if($.browser.msie&&$.browser.version==="6.0")
  {
    $("#lightBox").css("margin-top",$(document).scrollTop()-210)
  }
  $.lightBox(
  {
    url:"/rs/html/predefinechoices.html",size:"s",confirm:function()
    {
      A("radio");
      CHANGED=true
    }
    ,loaded:function()
    {
      var U="";
      $.each(F[IDX].ITMS,function(V,W)
      {
        if(V>0)
        {
          U+="\n"
        }
        U+=W.VAL
      }
      );
      $("#prepop").val(U)
    }
  }
  );
  $("li a","#choiceMenu").live("click",function()
  {
    $("#prepop").val($(this).attr("list").replace(/;
    /gi,"\n"));
    return false
  }
  );
  return false
}
);
$("#btnItemsBatch").click(function()
{
  if($.browser.msie&&$.browser.version==="6.0")
  {
    $("#lightBox").css("margin-top",$(document).scrollTop()-210)
  }
  $.lightBox(
  {
    url:"/rs/html/itembatchedit.html",size:"s",confirm:function()
    {
      A(F[IDX].TYP);
      $("#itemList").find("input[name='VAL']:first").trigger("focus");
      CHANGED=true
    }
    ,loaded:function()
    {
      var V="";
      if(F[IDX].TYP=="dropdown2")
      {
        var W='<div>"-"的个数表示层级数（"-"为英文减号）。</div>';
        $(".info").append(W);
function U(X,Y)
{
  if(!X)
  {
    return
  }
  $.each(X,function(aa,ab)
  {
    for(var Z=0;Z<Y;Z++)
    {
      V+="-"
    }
    V+=ab.VAL+"\n";
    U(ab.ITMS,Y+1)
  }
  )
}
U(F[IDX].ITMS,0)
}
else
{
$.each(F[IDX].ITMS,function(X,Y)
{
  V+=Y.VAL;
  if(X!=F[IDX].ITMS.length-1)
  {
    V+="\n"
  }
}
)
}
$("#prepop").val(V)
}
}
);
$("li a","#choiceMenu").live("click",function()
{
$("#prepop").val($(this).attr("list").replace(/;
/gi,"\n"));
return false
}
);
return false
}
);
$("#btnLikertPredefine").click(function()
{
  if($.browser.msie&&$.browser.version==="6.0")
  {
    $("#lightBox").css("margin-top",$(document).scrollTop()-210)
  }
  $.lightBox(
  {
    url:"/rs/html/predefinelikert.html",size:"s",confirm:function()
    {
      e($("#likertCols"),"likertCol");
      createLikertPreview(F[IDX],$("#f"+IDX).find("div.content"));
      CHANGED=true
    }
    ,loaded:function()
    {
      var U="";
      $.each(F[IDX].ITMS[0].ITMS,function(V,W)
      {
        if(V>0)
        {
          U+="\n"
        }
        U+=W.VAL
      }
      );
      $("#prepop").val(U)
    }
  }
  );
  $("li a","#choiceMenu").live("click",function()
  {
    $("#prepop").val($(this).attr("list").replace(/;
    /gi,"\n"));
    return false
  }
  );
  return false
}
);
var u=function()
{
  var V=$("#f"+IDX),U=V.find("label.desc span");
  V.find("label:first").text($(this).val()).append(U);
  F[IDX].LBL=$.trim($(this).val());
  CHANGED=true
};
$("#lbl").bind(
{
  keyup:u,change:u
}
);
$("#type").change(function()
{
  var W=$("#f"+IDX),U=F[IDX];
  U.TYP=$(this).val();
  if(U.ITMS)
  {
    U.ITMS=DEFFLD[U.TYP].json.ITMS
  }
  if(U.SUBFLDS)
  {
    U.SUBFLDS=DEFFLD[U.TYP].json.SUBFLDS
  }
  if(U.TYP=="goodsnoimg")
  {
    U.NOIMG="1";
    U.TYP="goods"
  }
  else
  {
    if(U.TYP=="goods")
    {
      U.NOIMG=""
    }
  }
  setDefFieldDom(W,U.TYP,IDX,U);
  var V=IDX;
  IDX=-2;
  setFocused(W,V+1);
  CHANGED=true
}
);
$("#fldsize").change(function()
{
  $("#f"+IDX).find("select,:text,textarea").removeClass("s m l xl xxl").addClass($(this).val());
  F[IDX].FLDSZ=$(this).val();
  resizeHandle($("#f"+IDX));
  CHANGED=true
}
);
$("#layout").change(function()
{
  $("#f"+IDX).removeClass("one two three oneByOne").addClass($(this).val());
  F[IDX].LAY=$(this).val();
  resizeHandle($("#f"+IDX));
  CHANGED=true
}
);
$("#dateformat").change(function()
{
  $("#f"+IDX).find("div.content").html(DEFFLD["date_"+$(this).val()]);
  F[IDX].FMT=$(this).val();
  CHANGED=true
}
);
$("#nameformat").change(function()
{
  var U;
  if($(this).val()==="extend")
  {
    U="name_extend_"+M.LANG
  }
  else
  {
    U="name_"+$(this).val()
  }
  $("#f"+IDX).find("div.content").html(DEFFLD[U]);
  F[IDX].FMT=$(this).val();
  CHANGED=true
}
);
$("#moneyfomat").change(function()
{
  $("#f"+IDX).find("div.content>b").text(currencys[$(this).val()]);
  F[IDX].FMT=$(this).val();
  CHANGED=true
}
);
$("#N").change(function()
{
  F[IDX].pN=$(this).val()||"2";
  var X=parseInt(F[IDX].pN);
  F[IDX].SUBFLDS=
  {
  };
  for(var V=0;V<X;V++)
  {
    F[IDX].SUBFLDS["DD"+(V+1)]=
    {
    }
  }
function W(aa,ab)
{
  if(ab==0)
  {
    return
  }
  aa.ITMS=[];
  for(var Z=1;Z<=2;Z++)
  {
    var Y=
    {
    };
    if(aa.VAL)
    {
      Y.VAL=aa.VAL+Z
    }
    else
    {
      Y.VAL="选项 "+Z
    }
    W(Y,ab-1);
    aa.ITMS.push(Y)
  }
}
var U=
{
};
W(U,X);
F[IDX].ITMS=U.ITMS;
$("#f"+IDX).find("div.content>select").remove();
for(var V=0;V<X;V++)
{
  $("#f"+IDX).find("div.content").append('<select disabled="disabled" class="input"></select>')
}
$("#f"+IDX).find("div.content>select").css(
{
  width:(100/X-1)+"%","margin-left":"1%"
}
);
CHANGED=true
}
);
$("#itemList>li>a.icononly-limit").live(
{
click:function()
{
  var W=this,U=$(this).parent(),X=U.index();
  var V=U.find("div.limit");
  if(V.length==0)
  {
    var Z="lmt"+X;
    var Y='<div id="'+Z+'" class="limit hide" style="margin-top:5px;"><select class="s" style="margin-left:18px;" name="COMMITLMT"><option value="DAY">每天</option><option value="ALL">累计</option></select> 限制填写 <input class="s number" type="text" name="AMOUNTLMT" maxlength="10"/> 次</div>';
    V=$(Y);
    U.append(V)
  }
  if(V.hasClass("hide"))
  {
    V.removeClass("hide");
    if(F[IDX].COMMITLMT||F[IDX].ITMS[X].COMMITLMT)
    {
      V.find("select>option[value='"+(F[IDX].COMMITLMT||F[IDX].ITMS[X].COMMITLMT)+"']").prop("selected",true);
      if(F[IDX].ITMS[X].AMOUNTLMT)
      {
        V.find("input").val(F[IDX].ITMS[X].AMOUNTLMT)
      }
    }
    if(U.find("div.item-upload").length>0)
    {
      U.find("a.icononly-add,a.icononly-del,a.icononly-mov,a.icononly-limit").css(
      {
        "margin-top":"-32px"
      }
      )
    }
  }
  else
  {
    V.addClass("hide");
    if(U.find("div.item-upload").length>0)
    {
      U.find("a.icononly-add,a.icononly-del,a.icononly-mov,a.icononly-limit").css(
      {
        "margin-top":"-14px"
      }
      )
    }
  }
}
}
);
$("#itemList>li>div.limit>select, #goodsList>li div[name='goods-limit']>select").live(
{
change:function()
{
  var aa=$(this),W=aa.parent();
  var ab;
  if(W.attr("name")=="goods-limit")
  {
    ab=W.parent().parent().parent().parent()
  }
  else
  {
    ab=W.parent()
  }
  var X=ab.index(),Y=ab.parent(),U=aa.siblings("input");
  var Z=U.val(),ac=aa.val();
  F[IDX].COMMITLMT=ac;
  if(Z)
  {
    F[IDX].ITMS[X].COMMITLMT=ac;
    F[IDX].ITMS[X].AMOUNTLMT=Z
  }
  for(var V=0;V<F[IDX].ITMS.length;V++)
  {
    if(F[IDX].ITMS[V].COMMITLMT)
    {
      F[IDX].ITMS[V].COMMITLMT=ac
    }
  }
  Y.find("li>div.limit, li div[name='goods-limit']").find("select[name='COMMITLMT']>option[value='"+F[IDX].COMMITLMT+"']").prop("selected",true)
}
}
);
$("#itemList>li>div.limit>input, #goodsList>li div[name='goods-limit']>input").live(
{
change:function()
{
  var U=$(this),X=U.parent();
  var ab;
  if(X.attr("name")=="goods-limit")
  {
    ab=X.parent().parent().parent().parent()
  }
  else
  {
    ab=X.parent()
  }
  var Y=ab.index(),aa=U.siblings("select");
  var Z=U.val(),ac=aa.val();
  if(Z)
  {
    F[IDX].COMMITLMT=ac;
    F[IDX].ITMS[Y].COMMITLMT=ac;
    F[IDX].ITMS[Y].AMOUNTLMT=Z
  }
  else
  {
    delete F[IDX].ITMS[Y]["COMMITLMT"];
    delete F[IDX].ITMS[Y]["AMOUNTLMT"];
    var W=false;
    for(var V=0;V<F[IDX].ITMS.length;V++)
    {
      if(F[IDX].ITMS[V].COMMITLMT&&F[IDX].ITMS[V].AMOUNTLMT)
      {
        W=true;
        break
      }
    }
    if(!W)
    {
      delete F[IDX]["COMMITLMT"]
    }
  }
}
}
);
var s=function()
{
var U=$("#likertRows>li>:text").index(this);
$("#f"+IDX).find("div.content>table>tbody>tr:eq("+U+") th").text($(this).val());
F[IDX].ITMS[U].LBL=$.trim($(this).val());
CHANGED=true
};
$("#likertRows>li>:text").live(
{
keyup:s,change:s
}
);
var b=function(V)
{
var U=$(V).parent().index();
$(V).parent().remove();
$("#f"+IDX).find("div.content>table>tbody>tr:eq("+U+")").remove();
F[IDX].ITMS.splice(U,1);
CHANGED=true
};
$("#likertRows>li>a.icononly-del").live(
{
click:function()
{
  var W=this,U=$(this).parent(),X=U.parent(),V=U.index();
  if(X.find(">li").length<=1)
  {
    $.alert("至少要保留一个选项。");
    return false
  }
  if(F[IDX].ITMS[V].NM&&M.MXID>0)
  {
    $.confirm(
    {
      msg:delConfirmMsg,showyes:true,confirm:function()
      {
        $.showStatus("正在执行删除操作 ...");
        var Y="deleteItem";
        $.postJSON(Y,
        {
          _id:M._id,FLDID:F[IDX].FLDID,NM:F[IDX].ITMS[V].NM
        }
        ,function()
        {
          b(W);
          $.hideStatus()
        }
        )
      }
    }
    )
  }
  else
  {
    b(W)
  }
}
}
);
$("#likertRows>li>a.icononly-add").live(
{
click:function()
{
  var U=$("#likertRows>li>a.icononly-add").index(this);
  var W=$(this).parent().clone();
  $(this).parent().after(W);
  var V=$("#f"+IDX).find("div.content>table>tbody>tr:eq("+U+")");
  V.after($(V).clone());
  var X=JSON.parse(JSON.stringify(F[IDX].ITMS[U]));
  delete X.FLDID;
  delete X.NM;
  $.each(X.ITMS,function(Y,Z)
  {
    delete Z.ITMID
  }
  );
  F[IDX].ITMS.splice(U+1,0,X);
  resizeHandle($("#f"+IDX));
  CHANGED=true
}
}
);
var c,m;
$("#likertRows").sortable(
{
axis:"y",delay:100,handler:".icononly-mov",start:function(V,U)
{
  c=U.item.index()
}
,stop:function(W,V)
{
  m=V.item.index();
  if(c!=m)
  {
    var U=F[IDX].ITMS[c];
    F[IDX].ITMS.splice(c,1);
    F[IDX].ITMS.splice(m,0,U);
    createLikertPreview(F[IDX],$("#f"+IDX).find("div.content"));
    CHANGED=true
  }
}
}
);
var B=function()
{
var V=$.trim($(this).val()),U=$("#likertCols>li>:text").index(this);
$("#f"+IDX).find("div.content>table>thead>tr>td:eq("+U+")").text(V);
$.each(F[IDX].ITMS,function(X,W)
{
  W.ITMS[U].VAL=V
}
);
CHANGED=true
};
$("#likertCols>li>:text").live(
{
keyup:B,change:B
}
);
$("#likertCols>li>:radio").live(
{
click:function()
{
  var U=$("#likertCols>li>:radio").index(this),V=$(this).prop("checked");
  $("div.content>table>tbody :radio").prop("checked",false);
$("#f"+IDX).find("div.content>table>tbody>tr").each(function(W,X)
{
  $("td:eq("+U+")",X).find(":radio").prop("checked",V)
}
);
$.each(F[IDX].ITMS,function(X,W)
{
  $.each(W.ITMS,function(Y,Z)
  {
    Z.CHKED="0"
  }
  );
  W.ITMS[U].CHKED=V?"1":"0"
}
);
F[IDX].DEF=V?""+U:"";
CHANGED=true
}
}
);
$("#likertCols>li>a.icononly-add").live(
{
click:function()
{
var U=$("#likertCols>li>a.icononly-add").index(this);
var V=$(this).parent().clone().find(":radio").prop("checked",false).end();
$(this).parent().after(V);
$("#f"+IDX).find("div.content>table tr").each(function(W,Y)
{
  var Z=$("td:eq("+U+")",Y);
  Z.after(Z.clone().find(":radio").prop("checked",false).end());
  if(W>0)
  {
$("td",Y).each(function(ac,ad)
{
  if(ac>U)
  {
    var aa=$(ad).find("label"),ab=parseInt(aa.text())+1;
    aa.text(ab)
  }
}
)
}
else
{
if(W===0)
{
  var X=Math.ceil((100-30)/(F[IDX].ITMS[0].ITMS.length+1))+"%";
$("td",Y).each(function(aa,ab)
{
  $(ab).css("width",X)
}
)
}
}
}
);
$.each(F[IDX].ITMS,function(X,W)
{
var Y=JSON.parse(JSON.stringify(W.ITMS[U]));
Y.CHKED="0";
delete Y.ITMID;
W.ITMS.splice(U+1,0,Y)
}
);
CHANGED=true
}
}
);
var O=function(V)
{
var U=$("#likertCols>li>a.icononly-del").index(V);
$(V).parent().remove();
$("#f"+IDX).find("div.content>table tr").each(function(W,Y)
{
  if(W>0)
  {
$("td",Y).each(function(ab,ac)
{
  if(ab>U)
  {
    var Z=$(ac).find("label"),aa=parseInt(Z.text())-1;
    Z.text(aa)
  }
}
)
}
else
{
if(W===0)
{
  var X=Math.ceil((100-30)/(F[IDX].ITMS[0].ITMS.length-1))+"%";
$("td",Y).each(function(Z,aa)
{
  $(aa).css("width",X)
}
)
}
}
$("td:eq("+U+")",Y).remove()
}
);
$.each(F[IDX].ITMS,function(X,W)
{
W.ITMS.splice(U,1)
}
);
CHANGED=true
};
$("#likertCols>li>a.icononly-del").live(
{
click:function()
{
var V=this,U=$("#likertCols>li>a.icononly-del").index(V),W=$("#likertCols");
if(W.find(">li").length<=1)
{
$.alert("至少要保留一个选项。");
return false
}
if(F[IDX].ITMS[0].ITMS[U].ITMID&&M.MXID>0)
{
$.confirm(
{
msg:delConfirmMsg,showyes:true,confirm:function()
{
  $.showStatus("正在执行删除操作 ...");
  var X="deleteLikertCol";
  $.postJSON(X,
  {
    _id:M._id,FLDID:F[IDX].FLDID,COLINDEX:U
  }
  ,function()
  {
    O(V);
    $.hideStatus()
  }
  )
}
}
)
}
else
{
O(V)
}
CHANGED=true;
return false
}
}
);
var J,a;
$("#likertCols").sortable(
{
axis:"y",delay:100,handler:".icononly-mov",start:function(V,U)
{
J=U.item.index()
}
,stop:function(V,U)
{
a=U.item.index();
if(J!=a)
{
$.each(F[IDX].ITMS,function(X,Y)
{
var W=Y.ITMS[J];
Y.ITMS.splice(J,1);
Y.ITMS.splice(a,0,W)
}
);
createLikertPreview(F[IDX],$("#f"+IDX).find("div.content"));
CHANGED=true
}
}
}
);
$("#reqd").click(function()
{
  var V=$(this).prop("checked"),U=$("#f"+IDX).find("span.req");
  if(V)
  {
    U.show()
  }
  else
  {
    U.hide()
  }
  F[IDX].REQD=V?"1":"0";
  CHANGED=true
}
);
$("#uniq").click(function()
{
  F[IDX].UNIQ=$(this).prop("checked")?"1":"0";
  CHANGED=true
}
);
$("#qrinput").click(function()
{
  F[IDX].QRINPUT=$(this).prop("checked")?"1":"0";
  var U=$("#f"+IDX).find("i.qrinput");
  if($(this).prop("checked"))
  {
    U.removeClass("hide")
  }
  else
  {
    U.addClass("hide")
  }
  CHANGED=true
}
);
$("#random").click(function()
{
  F[IDX].RDM=$(this).prop("checked")?"1":"0";
  CHANGED=true
}
);
$("#hidenum").click(function()
{
  var U=$(this).prop("checked");
  if(U)
  {
    $("#f"+IDX).find("div.content>table>tbody label").css("display","none")
  }
  else
  {
    $("#f"+IDX).find("div.content>table>tbody label").css("display","block")
  }
  F[IDX].HDNM=U?"1":"0";
  CHANGED=true
}
);
$("#allowOther").click(function()
{
  var W=$(this).prop("checked"),U=$("li.dropReq","#itemList"),V=$("span:last","#f"+IDX);
  if(W)
  {
    U.show();
    V.show()
  }
  else
  {
    U.find(":radio").prop("checked",false).end().hide();
    V.find(":radio").prop("checked",false).end().hide()
  }
  F[IDX].OTHER=W?"1":"0";
  CHANGED=true
}
);
$("#internal").click(function()
{
  F[IDX].INTERNAL=$(this).prop("checked")?"1":"0";
  F[IDX].DEF=$(this).prop("checked")?"+":"";
  $("#defval_phone_mobile").val(F[IDX].DEF).trigger("change")
}
);
$("#authcode").click(function()
{
  if($(this).prop("checked"))
  {
    $("#f"+IDX).find("div.content .sendcode").show();
    $("#signcnt").show();
    F[IDX].AUTH="1"
  }
  else
  {
    $("#f"+IDX).find("div.content .sendcode").hide();
    $("#signcnt").hide();
    F[IDX].AUTH="0"
  }
  $("#internal").prop("checked",F[IDX].INTERNAL=="1")
}
);
$("#sign").change(function()
{
  F[IDX].SIGN=$.trim($(this).val())
}
);
$("#btnSignSumbmit").click(function()
{
  var U=$(this).attr("href");
  if(U.indexOf("?")>0)
  {
    U=U.substring(0,U.indexOf("?"))
  }
  $(this).attr("href",U+"?field2="+$("#sign").val())
}
);
$("#chkCompress").click(function()
{
  if($(this).prop("checked"))
  {
    $("#divCompress").removeClass("hide");
    $("#selCompress").val("30");
    F[IDX]["CPRS"]="30"
  }
  else
  {
    $("#divCompress").addClass("hide");
    delete F[IDX]["CPRS"]
  }
}
);
$("#selCompress").change(function()
{
  F[IDX].CPRS=$(this).val()
}
);
$("#chkDismark").click(function()
{
  F[IDX].DISMK=$(this).prop("checked")?"1":"0";
  CHANGED=true
}
);
var d=function(Y)
{
  if($(Y).parent().hasClass("dropReq"))
  {
    $(Y).parent().find(":radio,:checkbox").prop("checked",false).end().hide();
    span=$("span:last","#f"+IDX).find(":radio,:checkbox").prop("checked",false).end().hide();
    $("#allowOther").prop("checked",false);
    return
  }
  var X=$(Y).parent().index(),Z=$(Y).parent().parent();
  $(Y).parent().remove();
  if(!$("#f"+IDX).find("div.content>div.goods-item").length)
  {
    $("#f"+IDX).find("div.content>span:eq("+X+")").remove()
  }
  $("#f"+IDX).find("div.content>div.goods-item:eq("+X+")").remove();
  if(F[IDX].TYP==="goods"&&$("#f"+IDX).find("div.content>div.goods-item").length==0)
  {
    $("#f"+IDX).find("div.content").empty().append('<div class="nogoods-holder">请在左侧添加商品</div>')
  }
  if("itemList2"==Z.attr("id"))
  {
    var U=parseInt(Z.attr("IDX"));
    F[IDX].ITMS[U].ITMS.splice(X,1)
  }
  else
  {
    F[IDX].ITMS.splice(X,1);
    if($("#itemList2").is(":visible"))
    {
      $("#itemList2").hide()
    }
  }
  var V=true;
  for(var W=0;W<F[IDX].ITMS.length;W++)
  {
    if(F[IDX].ITMS[W].IMG)
    {
      V=false;
      break
    }
  }
  if(V)
  {
$("#f"+IDX).find("div.content").children().each(function(ab,aa)
{
  if($(aa).hasClass("goods-item"))
  {
    $(aa).after("<span>"+$(aa).find("span").html()+"</span>");
    $(aa).remove()
  }
}
)
}
};
var D=function()
{
var X=this,U=$(this).parent(),Y=U.parent(),W=U.index();
if((Y.find("li.dropReq").length==0&&Y.find(">li").length<=1)||(Y.find("li.dropReq").length>0&&Y.find(">li").length<=2))
{
$.alert("至少要保留一个选项。");
return false
}
if(F[IDX].ITMS[W].NM||F[IDX].ITMS[W].ITMID&&M.MXID>0)
{
$.confirm(
{
  msg:delConfirmMsg,showyes:true,confirm:function()
  {
    $.showStatus("正在执行删除操作 ...");
    var aa="deleteItem",ab;
    if(F[IDX].ITMS[W].NM)
    {
      ab=
      {
        _id:M._id,FLDID:F[IDX].FLDID,NM:F[IDX].ITMS[W].NM
      };
      if(F[IDX].ITMS[W].IMG)
      {
        ab.IMG=F[IDX].ITMS[W].IMG
      }
    }
    else
    {
      ab=
      {
        _id:M._id,FLDID:F[IDX].FLDID,ITMID:F[IDX].ITMS[W].ITMID,TYP:F[IDX].TYP
      }
    }
    $.postJSON(aa,ab,function()
    {
      d(X);
      $.hideStatus()
    }
    )
  }
}
)
}
else
{
if(F[IDX].ITMS[W].IMG)
{
  $.showStatus("正在执行删除操作 ...");
  var V="deleteItem",Z=
  {
  };
  Z.IMG=F[IDX].ITMS[W].IMG;
  $.postJSON(V,Z,function()
  {
    d(X);
    $.hideStatus()
  }
  )
}
else
{
  d(X)
}
}
CHANGED=true;
return false
}
,f=function()
{
var W=this,V=$(this).parent().index(),X=$("#itemList2"),U=parseInt(X.attr("IDX"));
if(X.find(">li").length<=1)
{
$.alert("至少要保留一个选项。");
return false
}
if(F[IDX].ITMS[U].ITMS[V].ITMID&&M.MXID>0)
{
$.confirm(
{
  msg:delConfirmMsg,showyes:true,confirm:function()
  {
    $.showStatus("正在执行删除操作 ...");
    var Y=
    {
      _id:M._id,FLDID:F[IDX].FLDID,ITMID1:F[IDX].ITMS[U].ITMID,ITMID:F[IDX].ITMS[U].ITMS[V].ITMID,TYP:"dropdown"
    };
    $.postJSON("deleteItem",Y,function()
    {
      d(W);
      $.hideStatus()
    }
    )
  }
}
)
}
else
{
d(W)
}
CHANGED=true;
return false
};
$("a.icononly-del","#itemList2").live(
{
click:f
}
);
$("a.icononly-del","#itemList").live(
{
click:D
}
);
$("a.icononly-del","#goodsList").live(
{
click:D
}
);
$("#itemList").find("a.icononly-add").live(
{
click:function()
{
var V=$("a.icononly-add","#itemList").index(this);
var X=$(this).parent().clone();
X.find(":radio,:checkbox").prop("checked",false);
X.find("img.img").addClass("hide").attr(
{
  src:""
}
);
X.find("span").removeClass("hide");
$(this).parent().after(X);
var W=$("#f"+IDX).find("div.content").children(":eq("+V+")");
W.after($(W).clone().find(":radio,:checkbox").prop("checked",false).end().find("img.img").attr(
{
  src:""
}
).end());
var Y=JSON.parse(JSON.stringify(F[IDX].ITMS[V]));
Y.CHKED="0";
delete Y.ITMID;
delete Y.NM;
delete Y.IMG;
function U(Z)
{
  delete Z.ITMID;
  if(Z.ITMS)
  {
    $.each(Z.ITMS,function(aa,ab)
    {
      U(ab)
    }
    )
  }
}
U(Y);
F[IDX].ITMS.splice(V+1,0,Y);
X.find(":text").focus();
resizeHandle($("#f"+IDX));
CHANGED=true;
return false
}
}
);
$("#itemList2").find("a.icononly-add").live(
{
click:function()
{
var V=$("a.icononly-add","#itemList2").index(this),U=parseInt($("#itemList2").attr("IDX"));
var W=$(this).parent().clone();
$(this).parent().after(W);
var X=JSON.parse(JSON.stringify(F[IDX].ITMS[U].ITMS[V]));
delete X.ITMID;
delete X.NM;
F[IDX].ITMS[U].ITMS.splice(V+1,0,X);
CHANGED=true;
return false
}
}
);
var z,y;
$("#itemList").sortable(
{
axis:"y",delay:100,handler:".icononly-mov",start:function(V,U)
{
z=U.item.index()
}
,stop:function(W,V)
{
y=V.item.index();
if(z!=y)
{
  var U=F[IDX].ITMS[z];
  F[IDX].ITMS.splice(z,1);
  F[IDX].ITMS.splice(y,0,U);
  createField($("#f"+IDX),F[IDX]);
  $("#f"+IDX).find(".fieldActions").show();
  CHANGED=true
}
}
}
);
var I=function()
{
if($(this).parent().hasClass("dropReq"))
{
return
}
var U=$(":text.sl,:text.xs","#itemList").index(this);
$("#f"+IDX).find("div.content span:eq("+U+") label").text($(this).val());
F[IDX].ITMS[U].VAL=$.trim($(this).val());
CHANGED=true
};
$(":text.sl, :text.xs","#itemList").live(
{
keyup:I,change:I
}
);
$(":radio","#itemList").live(
{
click:function()
{
var V=$(":radio","#itemList").index(this),W=$(this).prop("checked");
$(":radio","#f"+IDX).prop("checked",false);
$("select","#f"+IDX).empty();
$.each(F[IDX].ITMS,function(Y,X)
{
  X.CHKED="0"
}
);
if(F[IDX].TYP==="radio")
{
  $("#f"+IDX).find("div.content>span:eq("+V+") :radio").prop("checked",W)
}
else
{
  if((F[IDX].TYP==="dropdown"||F[IDX].TYP==="dropdown2")&&W)
  {
    var U=$(this).parent().find(":text").val();
    if(U)
    {
      $("#f"+IDX).find("select:first").empty().append($.tmpl("<option>${$data}</option>",U))
    }
  }
}
F[IDX].ITMS[V].CHKED=W?"1":"0";
F[IDX].DEF=W?""+V:"";
CHANGED=true
}
}
);
$(":checkbox","#itemList").live(
{
click:function()
{
var U=$(":checkbox","#itemList").index(this),V=$(this).prop("checked");
$("#f"+IDX).find("div.content>span:eq("+U+") :checkbox").prop("checked",V);
F[IDX].ITMS[U].CHKED=V?"1":"0";
CHANGED=true
}
}
);
$.ossfileupload(
{
file_selection_button:"itemselectbtn",file_multi_selection:false,file_duplication_forbidden:false,file_max_size:"1MB",file_extensions:"jpg,jpeg,png,bmp",signature_url:"/web/oss/getsignaturenocallback",signature_param:
{
BUCKETNAME:IMGBUCKET
}
,FileUploaded:function(U,W,Y)
{
if(F[IDX].ITMS[ITEMIDX].IMG)
{
  var V="/app/form/deleteItemImg";
  var aa=
  {
    IMG:F[IDX].ITMS[ITEMIDX].IMG
  };
  $.postJSON(V,aa,function(ab)
  {
  }
  )
}
F[IDX].ITMS[ITEMIDX].IMG=$.getOssObjectName();
var X=$.getHostUrl();
var Z=X+F[IDX].ITMS[ITEMIDX].IMG;
$($("#itemList").find("div.item-upload")[ITEMIDX]).find("img").removeClass("hide").attr("src",Z);
$($("#itemList").find("div.item-upload")[ITEMIDX]).find("span").addClass("hide");
$("#f"+IDX).find("div.content").children().each(function(ab,ac)
{
  if($(ac)[0].tagName=="SPAN"&&!($(ac).hasClass("hide")))
  {
    var ad=$("<div class='goods-item'><div class='image-center'><img class='img'/></div><div class='text-wapper center'><span>"+$(ac).html()+"</span></div></div>");
    $(ac).after(ad);
    $(ac).remove()
  }
}
);
$("#f"+IDX).find("div.content").children().eq(ITEMIDX).find("img").attr("src",Z);
CHANGED=true
}
}
);
$("#itemList").find("div.item-upload").live(
{
click:function()
{
ITEMIDX=$("#itemList").find("li").has(this).index();
$("#itemselectbtn").trigger("click")
}
}
);
var E=function()
{
var U=$("#goodsList").find("li").has(this),W=U.index(),V=$.trim($(this).val());
$("#f"+IDX).find("div.content>div:eq("+W+")").find("label.name").text(V);
F[IDX].ITMS[W].VAL=V;
U.find("a.goods-name-view").text(V);
CHANGED=true
}
,K=function()
{
var U=$("#goodsList").find("li").has(this).index();
$("#f"+IDX).find("div.content>div:eq("+U+")").find("label.des").html($.enterToBr($(this).val()));
F[IDX].ITMS[U].DES=$.trim($(this).val());
CHANGED=true
}
,H=function()
{
var U=$("#goodsList").find("li").has(this).index();
F[IDX].ITMS[U].PRC=parseFloat($.trim($(this).val()))||0;
$.formatPrice($("#f"+IDX).find("div.content>div:eq("+U+")").find("div.price-number"),F[IDX].ITMS[U].PRC,F[IDX].ITMS[U].CNY,F[IDX].FBUY,F[IDX].ITMS[U].UNT,F[IDX].ITMS[U].DEF);
CHANGED=true
}
,g=function()
{
var U=$("#goodsList").find("li").has(this).index();
F[IDX].ITMS[U].CNY=$(this).val();
$.formatPrice($("#f"+IDX).find("div.content>div:eq("+U+")").find("div.price-number"),F[IDX].ITMS[U].PRC,F[IDX].ITMS[U].CNY,F[IDX].FBUY,F[IDX].ITMS[U].UNT,F[IDX].ITMS[U].DEF);
CHANGED=true
}
,n=function()
{
var U=$("#goodsList").find("li").has(this).index();
F[IDX].ITMS[U].UNT=$.trim($(this).val());
$.formatPrice($("#f"+IDX).find("div.content>div:eq("+U+")").find("div.price-number"),F[IDX].ITMS[U].PRC,F[IDX].ITMS[U].CNY,F[IDX].FBUY,F[IDX].ITMS[U].UNT,F[IDX].ITMS[U].DEF);
CHANGED=true
}
,Q=function()
{
var U=$("#goodsList").find("li").has(this).index();
F[IDX].ITMS[U].DEF=$.trim($(this).val());
$.formatPrice($("#f"+IDX).find("div.content>div:eq("+U+")").find("div.price-number"),F[IDX].ITMS[U].PRC,F[IDX].ITMS[U].CNY,F[IDX].FBUY,F[IDX].ITMS[U].UNT,F[IDX].ITMS[U].DEF);
CHANGED=true
}
,C=function()
{
var U=$("#goodsList").find("li").has(this).index();
if($(this).prop("checked"))
{
F[IDX].ITMS[U].HD="1";
$("#f"+IDX).find("div.content>div.goods-item:eq("+U+")").hide()
}
else
{
F[IDX].ITMS[U].HD="0";
$("#f"+IDX).find("div.content>div.goods-item:eq("+U+")").show()
}
CHANGED=true
}
,l=function()
{
if($(this).attr("checked"))
{
F[IDX].FBUY="1";
$("#goodsList").find(".goods-price-label").text("数量：")
}
else
{
F[IDX].FBUY="0";
$("#goodsList").find(".goods-price-label").text("单价：")
}
$("#f"+IDX).find("div.price-number").each(function(U,V)
{
  $.formatPrice($(V),F[IDX].ITMS[U].PRC,F[IDX].ITMS[U].CNY,F[IDX].FBUY,F[IDX].ITMS[U].UNT)
}
)
};
$("#goodsList").find("input.val").live(
{
keyup:E,change:E
}
);
$("#goodsList").find("textarea.des").live(
{
keyup:K,change:K
}
);
$("#goodsList").find("input.price").live(
{
keyup:H,change:H
}
);
$("#goodsList").find("input.unt").live(
{
keyup:n,change:n
}
);
$("#goodsList").find("input.hd").live(
{
click:C
}
);
$("#goodsList").find("select.cny").live(
{
change:g
}
);
$("#goodsList").find("input.def").live(
{
keyup:Q
}
);
$("#goodsForBuy").click(l);
$("#goodsList").find("a.goods-name-view").live(
{
click:function()
{
  $("#goodsList").find("div.expand").removeClass("expand");
  $(this).parent().parent().addClass("expand");
  return false
}
}
);
var x=function()
{
var X=0,V=$(this).hasClass("edit-img-input"),W=-1,U="fileToUpload";
if(!V)
{
$(F).each(function(Y,Z)
{
  if("goods"===Z.TYP)
  {
    X+=Z.ITMS.length
  }
}
);
if(X>=goodsNumber)
{
  $.alert("最多只能添加"+goodsNumber+"件商品。");
  return false
}
}
else
{
W=$("#goodsList").find("li").has(this).index();
U=$.format("F{0}ITMS{1}UPLOAD",IDX,W)
}
$.showStatus("正在上传图片...");
$.ajaxFileUpload(
{
url:"ajaxuploadgoods",secureuri:false,fileElementId:U,dataType:"json",data:
{
  FRMID:M._id,OLDIMG:V?F[IDX].ITMS[W].IMG:""
}
,success:function(ac,Z)
{
  if(ac.status!="success")
  {
    var ab=
    {
      emptyFile:"上传文件为空，请重新选择。",sizeMsg:"单张图片不能大于500KB。",formatMsg:"只能导入jpg,gif,png,bmp类型的图片文件。"
    };
    $.alert(ab[ac.msgCode])
  }
  else
  {
    var Y=V?$("#goodsList").find("li:eq("+W+")"):$(DEFFLD.item_goods);
    Y.find("input[name='IMG']").val(ac.filePath);
    Y.find("img.img").attr("src",GOODSIMAGEURL+ac.filePath+GOODSIMAGESTYLE);
    if("1"==F[IDX].FBUY)
    {
      Y.find("label.goods-price-label").text("数量：")
    }
    if(!V)
    {
      $("#goodsList").append(Y)
    }
    if(F[IDX].COMMITLMT)
    {
      $("div[name='goods-limit']",Y).find("select>option[value='"+F[IDX].COMMITLMT+"']").prop("selected",true)
    }
    var aa=V?$("#f"+IDX).find("div.goods-item:eq("+W+")"):$(DEFFLD.item_goods_f);
    aa.find("img.img").attr("src",GOODSIMAGEURL+ac.filePath+GOODSIMAGESTYLE);
    if(V)
    {
      F[IDX].ITMS[W].IMG=ac.filePath
    }
    else
    {
      $("#f"+IDX).find("div.content").find("div.nogoods-holder").remove().end().append(aa);
      if(!F[IDX].ITMS)
      {
        F[IDX].ITMS=[]
      }
      F[IDX].ITMS.push(
      {
        IMG:ac.filePath,VAL:"商品名称",DES:"",PRC:0,UNT:""
      }
      )
    }
  }
  $.hideStatus()
}
,error:function(Z,Y,aa)
{
  $.hideStatus();
  $.alert("上传图片时发生错误："+aa)
}
}
);
CHANGED=true;
return false
};
$("#item-upload").live(
{
click:x
}
);
$("#fileToUpload").live(
{
change:x
}
);
$("#goodsList input.edit-img-input").live(
{
change:x
}
);
$("#btnAddNoImgGoods").click(function()
{
  var W=0;
$(F).each(function(X,Y)
{
  if("goods"===Y.TYP)
  {
    W+=Y.ITMS.length
  }
}
);
if(W>=goodsNumber)
{
  $.alert("最多只能添加"+goodsNumber+"件商品。");
  return false
}
var U=$(DEFFLD.item_goods).addClass("noimg");
if("1"==F[IDX].FBUY)
{
  U.find("label.goods-price-label").text("数量：")
}
$("#goodsList").append(U);
if(F[IDX].COMMITLMT)
{
  $("div[name='goods-limit']",U).find("select>option[value='"+F[IDX].COMMITLMT+"']").prop("selected",true)
}
var V=$(DEFFLD.item_goods_f);
$("#f"+IDX).find("div.content").find("div.nogoods-holder").remove().end().append(V).find("div.image-center").hide();
if(!F[IDX].ITMS)
{
  F[IDX].ITMS=[]
}
F[IDX].ITMS.push(
{
  VAL:"商品名称",DES:"",PRC:0,UNT:""
}
);
return false
}
);
var o,w;
$("#goodsList").sortable(
{
axis:"y",delay:100,start:function(V,U)
{
  o=U.item.index()
}
,stop:function(X,W)
{
  w=W.item.index();
  if(o!=w)
  {
    var V=F[IDX].ITMS[o];
    F[IDX].ITMS.splice(o,1);
    F[IDX].ITMS.splice(w,0,V);
    var U=$("#f"+IDX).find("div.content").find("div.goods-item:eq("+o+")");
    U.remove();
    if(w==0)
    {
      $("#f"+IDX).find("div.content").find("div.goods-item:eq("+w+")").before(U)
    }
    else
    {
      $("#f"+IDX).find("div.content").find("div.goods-item:eq("+(w-1)+")").after(U)
    }
    CHANGED=true
  }
}
}
);
$("#uploadImage").live(
{
change:function()
{
  $.showStatus("正在上传图片...");
  $.ajaxFileUpload(
  {
    url:"ajaxuploadimage",fileElementId:"uploadImage",secureuri:false,dataType:"json",data:
    {
      OLDIMG:F[IDX].IMG,FRMID:M._id
    }
    ,success:function(W,U)
    {
      if(W.status!="success")
      {
        var V=
        {
          emptyFile:"上传文件为空，请重新选择。",sizeMsg:"单张图片不能大于500KB。",formatMsg:"只能导入jpg,gif,png,bmp类型的图片文件。"
        };
        $.alert(V[W.msgCode])
      }
      else
      {
        $("#f"+IDX).find("div.content img").attr("src",IMAGESURL+W.filePath);
        F[IDX].IMG=W.filePath
      }
      $.hideStatus()
    }
    ,error:function(V,U,W)
    {
      $.hideStatus();
      $.alert("上传图片时发生错误："+W)
    }
  }
  );
  CHANGED=true
}
}
);
var q=function()
{
var U=$.trim($(this).val());
if(U)
{
  F[IDX].MIN=U
}
else
{
  delete F[IDX]["MIN"]
}
CHANGED=true
}
,N=function()
{
var U=$.trim($(this).val());
if(U)
{
  F[IDX].MAX=U
}
else
{
  delete F[IDX]["MAX"]
}
CHANGED=true
};
$("#min").bind(
{
keyup:q
}
);
$("#max").bind(
{
keyup:N
}
);
$("#sec_pub,#sec_pri").click(function()
{
  if($("#sec_pub").prop("checked"))
  {
    F[IDX].SCU="pub";
    $("#f"+IDX).removeClass("private")
  }
  else
  {
    F[IDX].SCU="pri";
    $("#f"+IDX).addClass("private")
  }
  CHANGED=true
}
);
var h=function()
{
  var U=$.trim($(this).val());
  if("defval_number"===$(this).attr("id"))
  {
    U=U.replace(/[^(\d\.?)]/g,"").replace(/[\(\)\?]/g,"");
    $(this).val(U)
  }
  $("#f"+IDX).find("div.content :input").val(U);
  if(U)
  {
    F[IDX].DEF=U
  }
  else
  {
    delete F[IDX]["DEF"]
  }
  CHANGED=true
};
$("#defval_text").bind(
{
  keyup:h,fucusout:h
}
);
$("#defval_number").bind(
{
  keyup:h
}
);
var j=function()
{
  var U=$.trim($(this).val());
  if(U)
  {
    F[IDX].DEF=U
  }
  else
  {
    delete F[IDX]["DEF"]
  }
  CHANGED=true
};
$("#defval_date").bind(
{
  keyup:j
}
);
$("#defval_time").bind(
{
  keyup:j
}
);
$("#phoneformat").change(function()
{
  $("#f"+IDX).find("div.content").html(DEFFLD[$.format("phone_{0}_{1}",$(this).val(),M.LANG)]);
  showPhoneFormat($(this).val());
  $("#defval_phone_mobile").val("");
  $("#defval_phone_tel").val("");
  $("#defval_phone_tel_1,#defval_phone_tel_2,#defval_phone_tel_3").val("");
  delete F[IDX]["DEF"];
  F[IDX].FMT=$(this).val();
  CHANGED=true
}
);
$("#defval_phone_mobile").bind(
{
  keyup:h,change:h
}
);
var G=function()
{
  var U=$("#defval_phone_tel_1").val()+"-"+$("#defval_phone_tel_2").val()+"-"+$("#defval_phone_tel_3").val();
  $("#defval_phone_tel").val(U);
  $.each(U.split("-"),function(W,V)
  {
    $("#f"+IDX).find(":text:eq("+W+")").val(V)
  }
  );
  F[IDX].DEF=U;
  CHANGED=true
};
$("#pdefval_phone_tel :input").bind(
{
  keyup:G
}
);
var t="<option value=''>省/自治区/直辖市</option>";
$.each(address.provinces,function(V,U)
{
  t+=$.format('<option value="{0}">{1}</option>',V,V)
}
);
$("#defval_province").append(t);
var p=function()
{
  var U=$("#defval_province").val(),W=$("#defval_city").val(),V=$("#defval_zip").val();
  if(U||W)
  {
    return U+"-"+W+"-"+V
  }
  else
  {
    return""
  }
};
$("#defval_province").change(function()
{
  var U=$(this).val();
  $("#f"+IDX).find("select.province").empty().append($.format("<option>{0}</option>",U||"省/自治区/直辖市"));
  $("#f"+IDX).find("select.city").empty().append($.format('<option value="">{0}</option>',"市"));
  $("#f"+IDX).find("select.zip").empty().append($.format('<option value="">{0}</option>',"区/县"));
  $("#defval_city").empty().append("<option value=''>市</option>");
  $("#defval_zip").empty().append("<option value=''>区/县</option>");
  if(U)
  {
    var V="";
    $.each(address.provinces[U],function(X,W)
    {
      V+=$.format('<option value="{0}">{1}</option>',X,X)
    }
    );
    $("#defval_city").append(V)
  }
  F[IDX].DEF=p();
  if(!F[IDX].DEF)
  {
    delete F[IDX].DEF
  }
  CHANGED=true
}
);
$("#defval_city").change(function()
{
  var W=$(this).val(),U=$("#defval_province").val();
  $("#f"+IDX).find("select.city").empty().append($.format('<option value="">{0}</option>',W||"市"));
  $("#f"+IDX).find("select.zip").empty().append($.format('<option value="">{0}</option>',"区/县"));
  $("#defval_zip").empty().append("<option value=''>区/县</option>");
  if(W)
  {
    var V="";
    $.each(address.provinces[U][W],function(Y,X)
    {
      V+=$.format('<option value="{0}">{1}</option>',X,X)
    }
    );
    $("#defval_zip").append(V)
  }
  F[IDX].DEF=p();
  if(!F[IDX].DEF)
  {
    delete F[IDX].DEF
  }
  CHANGED=true
}
);
$("#defval_zip").change(function()
{
  var U=$(this).val();
  $("#f"+IDX).find("select.zip").empty().append($.format('<option value="">{0}</option>',U||"区/县"));
  F[IDX].DEF=p();
  if(!F[IDX].DEF)
  {
    delete F[IDX].DEF
  }
  CHANGED=true
}
);
var v=function(U)
{
  if(U)
  {
    M.INSTR="1"
  }
  else
  {
    M.INSTR="0";
    $.each(F,function(W,V)
    {
      if(V.INSTR)
      {
        M.INSTR="1";
        return false
      }
    }
    )
  }
  $.each(F,function(W,V)
  {
    if(M.INSTR==="1"&&V.TYP!=="likert"&&V.TYP!=="html"&&V.TYP!=="section"&&V.TYP!=="goods"&&V.TYP!=="image")
    {
      $("#f"+W).addClass("fieldInstruct")
    }
    else
    {
      if(M.INSTR!=="1")
      {
        $("#f"+W).removeClass("fieldInstruct")
      }
    }
  }
  )
}
,k=function(U)
{
  var W=$("#f"+IDX).find("p.instruct"),V=$.trim($(U).val());
  W.text(V);
  if(V)
  {
    W.show()
  }
  else
  {
    W.hide()
  }
  if(V)
  {
    F[IDX].INSTR=V
  }
  else
  {
    delete F[IDX]["INSTR"]
  }
  CHANGED=true
};
$("#instruct").bind(
{
  keyup:function()
  {
    k(this);
    if((M.INSTR!=="1"&&$(this).val())||(M.INSTR==="1"&&!$(this).val()))
    {
      v($(this).val())
    }
  }
  ,change:function()
  {
    k(this);
    v($(this).val())
  }
}
);
var L=function()
{
  var U=$.trim($("#secdesc").val());
  $("#f"+IDX).find("div.content").html(U);
  if(U)
  {
    F[IDX].SECDESC=U
  }
  else
  {
    delete F[IDX]["SECDESC"]
  }
};
$("#secdesc").bind(
{
  keyup:L,change:L
}
);
var i=function()
{
  var U=$.trim($("#html").val());
  $("#f"+IDX).find("div.content").html(U);
  if(U)
  {
    F[IDX].HTML=U
  }
  else
  {
    delete F[IDX]["HTML"]
  }
};
$("#html").bind(
{
  keyup:i,change:i
}
);
var S=function()
{
  var U=$.trim($(this).val());
  if(U)
  {
    F[IDX].CSS=$(this).val()
  }
  else
  {
    delete F[IDX]["CSS"]
  }
  CHANGED=true
};
$("#css").bind(
{
  keyup:S,change:S
}
);
var P=function()
{
  var U=$.trim($(this).val());
  if(U)
  {
    F[IDX].LAYOUT=$(this).val()
  }
  else
  {
    delete F[IDX]["LAYOUT"]
  }
  CHANGED=true
};
$("#selLayout").bind(
{
  click:P
}
);
$("#exprop").bind(
{
  change:function()
  {
    var U=$.trim($(this).val());
    if(U)
    {
      F[IDX].EX=$(this).val()
    }
    else
    {
      delete F[IDX]["EX"]
    }
    CHANGED=true
  }
}
);
$("#btnDup,#fields i.faDup").live(
{
  click:function()
  {
    var Y=$("#fields>li.field").size();
    if(Y>=fieldsLimit)
    {
      $.alert("最多只能添加"+fieldsLimit+"个字段。");
      return false
    }
    if(F[IDX].TYP=="image")
    {
      var ab=0;
$(F).each(function(ac,ad)
{
  if("image"===ad.TYP)
  {
    ab++
  }
}
);
if(ab>=imageNumber)
{
  $.alert("最多只能添加"+imageNumber+"个图片字段，<a href='/app/account/manage' target='_blank' class='link'>升级</a>可添加更多。");
  return false
}
}
if(F[IDX].TYP=="goods")
{
var W=0;
$(F).each(function(ac,ad)
{
  if("goods"===ad.TYP)
  {
    W+=ad.ITMS.length
  }
}
);
if(W>=goodsNumber)
{
  $.alert("最多只能添加"+goodsNumber+"件商品。");
  return false
}
}
var X=JSON.parse(JSON.stringify(F[IDX])),V=$("#f"+IDX).clone();
V.find("img.arrow,p.instruct,div.fieldActions").hide();
V.removeClass("prefocus focused").addClass("default");
$("#f"+IDX).after(V);
$("li.field","#fields").each(function(ad,ac)
{
  if(ad>IDX)
  {
    $(ac).attr("id","f"+ad)
  }
}
);
delete X.NM;
delete X.FLDID;
if(X.TYP==="likert")
{
  $.each(X.ITMS,function(ac,ad)
  {
    $.each(ad.ITMS,function(ae,af)
    {
      delete af.ITMID
    }
    )
  }
  )
}
else
{
  if(X.TYP==="address")
  {
    delete X.SUBFLDS["ZIP"]["NM"];
    delete X.SUBFLDS["PRV"]["NM"];
    delete X.SUBFLDS["CITY"]["NM"];
    delete X.SUBFLDS["DTL"]["NM"]
  }
  else
  {
    if(X.TYP==="map")
    {
      delete X.SUBFLDS["TXT"]["NM"];
      delete X.SUBFLDS["J"]["NM"];
      delete X.SUBFLDS["W"]["NM"]
    }
    else
    {
      if(X.TYP==="file")
      {
        delete X.SUBFLDS["ID"]["NM"];
        delete X.SUBFLDS["TYP"]["NM"];
        delete X.SUBFLDS["SZ"]["NM"];
        delete X.SUBFLDS["NM"]["NM"]
      }
      else
      {
        if(X.TYP==="dropdown2")
        {
          var U=2;
          if(X.pN)
          {
            U=parseInt(X.pN)
          }
          for(var aa=1;aa<=U;aa++)
          {
            delete X.SUBFLDS["DD"+aa]["NM"]
          }
        }
        else
        {
          if(X.TYP==="image")
          {
            var Z=[X.IMG];
            $.showStatus("正在复制字段...");
            $.postJSON("duplicateimages",
            {
              FRMID:M._id,IMGS:Z
            }
            ,function(ac)
            {
              X.IMG=ac[0];
              $.hideStatus()
            }
            )
          }
        }
      }
    }
  }
}
if(X.ITMS)
{
  if(X.TYP==="goods")
  {
    var Z=[];
    $.each(X.ITMS,function(ac,ad)
    {
      if(ad.IMG)
      {
        Z.push(ad.IMG)
      }
    }
    );
    if(Z.length>0)
    {
      $.showStatus("正在复制字段...");
      $.postJSON("duplicategoods",
      {
        FRMID:M._id,IMGS:Z
      }
      ,function(ac)
      {
        $.each(X.ITMS,function(ad,ae)
        {
          X.ITMS[ad].IMG=ac[ad]
        }
        );
        $.hideStatus()
      }
      )
    }
  }
  $.each(X.ITMS,function(ad,ae)
  {
    delete ae.ITMID;
    delete ae.NM;
    if(X.TYP==="dropdown2")
    {
function ac(af)
{
  delete af.ITMID;
  if(af.ITMS)
  {
    $.each(af.ITMS,function(ag,ah)
    {
      ac(ah)
    }
    )
  }
}
$.each(ae.ITMS,function(af,ag)
{
  ac(ag)
}
)
}
}
)
}
F.splice(IDX+1,0,X);
CHANGED=true;
return false
}
}
);
var R=function()
{
$("#f"+IDX).remove();
F.splice(IDX,1);
IDX=-2;
v("");
$("#fieldProperties").addClass("hide");
$("#noFieldSelected").removeClass("hide");
if($.isEmptyObject(F))
{
$("#nofields").show();
$("#formButtons").hide()
}
$("li.field","#fields").each(function(V,U)
{
  if(V>=IDX)
  {
    $(U).attr("id","f"+V)
  }
}
)
};
$("#btnDel,#fields i.faDel").live(
{
click:function()
{
  if(F[IDX].FLDID!==undefined&&F[IDX].TYP!=="section"&&F[IDX].TYP!=="html"&&M.MXID>0)
  {
    $.confirm(
    {
      msg:delConfirmMsg,showyes:true,confirm:function()
      {
        $.showStatus("正在执行删除操作 ...");
        var U="deleteField";
        $.postJSON(U,
        {
          _id:M._id,FLDID:F[IDX].FLDID,TYP:F[IDX].TYP
        }
        ,function()
        {
          R();
          $.hideStatus()
        }
        )
      }
    }
    )
  }
  else
  {
    R()
  }
  CHANGED=true;
  return false
}
}
)
}
function saveForm(e,f,c)
{
  M.HEIGHT=$("#middle").outerHeight()+50;
  if(window.isForTemplate&&!M.CODE)
  {
    M.CODE=prompt("请输入模块代码","")
  }
  delete M.F;
  var a=$("#liSale").getValues();
  if(a.SALE=="1")
  {
    $.extend(true,M,a)
  }
  else
  {
    delete M.SALE;
    delete M.SALEM;
    delete M.SALEJ
  }
  $.each(F,function(g,h)
  {
    if(!h)
    {
      F.splice(g,1)
    }
  }
  );
  var d=
  {
    M:M,F:F
  }
  ,b="save";
  if(e)
  {
    $.showStatus("正在保存表单数据 ...")
  }
  $.postJSON(b,d,function(g)
  {
    $.hideStatus();
    if(g.ERRMSG)
    {
      $.alert(g.ERRMSG);
      return
    }
    $.extend(true,M,g.M);
    $.extend(true,F,g.F);
    $("#type,#N").prop("disabled",true);
    if(f)
    {
      f(M)
    }
    CHANGED=false;
    var h=$("#divActions");
    h.find("a.preview").attr("href",$.format("/web/formview/{0}",M._id));
    h.find("a.setting").attr("href",$.format("/app/basicsetting/{0}?menuid=m01",M._id));
    h.find("a.publish").attr("href",$.format("/app/formcode/{0}?menuid=m02",M._id));
    h.removeClass("hide")
  }
  ,
  {
    async:!c
  }
  )
}
function addFieldsInit()
{
$("#addFields").find("li").click(function()
{
  var b=$("#fields>li").size(),a=b-1,d="f"+b,f=$(DEFFLD.field_li);
  if(b===0)
  {
    $("#fields").append(f)
  }
  else
  {
    if(b>=fieldsLimit)
    {
      $.alert("最多只能添加"+fieldsLimit+"个字段。");
      return false
    }
    if($(this).attr("ftype")=="image")
    {
      var e=0;
$(F).each(function(c,g)
{
  if("image"===g.TYP)
  {
    e++
  }
}
);
if(e>=imageNumber)
{
  $.alert("最多只能添加"+imageNumber+"个图片字段，<a href='/app/account/manage' target='_blank' class='link'>升级</a>可添加更多。");
  return false
}
}
$(".field:eq("+a+")","#fields").after(f)
}
f.attr("id",d);
setDefFieldDom(f,$(this).attr("ftype")+($(this).attr("subtype")||""),a+1);
CHANGED=true;
return false
}
);
$("#addFromButton").click(function()
{
  $("#left").effect("shake",
  {
    distance:10,times:3
  }
  ,20)
}
);
$("#saveForm").click(function()
{
  if(window.CURUSER&&window.CURUSER.USERNAME==testUser)
  {
    return true
  }
  saveForm(true);
  return false
}
);
$("#preview").click(function()
{
  if(window.CURUSER&&window.CURUSER.USERNAME==testUser)
  {
    return true
  }
  saveForm(false,function(a)
  {
  }
  ,true);
  $("#preview").attr("href",$.format("/web/formview/{0}",M._id));
  return true
}
);
window.onbeforeunload=function()
{
  if(CHANGED)
  {
    return"离开此页将导致数据丢失，建议先保存数据。"
  }
}
}
function needHandle(b)
{
  var a=[];
  if($.inArray(b,a)>=0)
  {
    return false
  }
  else
  {
    return true
  }
}
function createField(r,q)
{
  if(!q)
  {
    return
  }
  var p,o,l,m;
  r.removeClass("one two three oneByOne fieldInstruct").addClass("field default");
  r.attr("title","点击编辑，拖动排序");
  r.empty();
  $("#nofields").hide();
  $("#formButtons").show();
  l=$(DEFFLD[q.TYP].html);
  if("goods"==q.TYP&&"1"==q.NOIMG)
  {
    l=$(DEFFLD.goodsnoimg.html)
  }
  if(q.TYP==="html"||q.TYP==="section")
  {
    p=l.find("label.desc");
    m=l.find("div.content")
  }
  else
  {
    p=l.filter("label.desc");
    m=l.filter("div.content")
  }
  if(q.TYP==="likert")
  {
    p=m.find("label.desc")
  }
  o=p.find("span");
  if(q.REQD==="1")
  {
    o.removeClass("hide")
  }
  p.text(q.LBL);
  p.append(o);
  if(q.TYP==="text"&&"1"==q.QRINPUT)
  {
    m.find("i.qrinput").removeClass("hide")
  }
  else
  {
    if(q.TYP==="phone"&&q.FMT)
    {
      m.html(DEFFLD[$.format("phone_{0}_{1}",q.FMT,M.LANG)]);
      "1"==q.AUTH?m.find(".sendcode").show():m.find(".sendcode").hide();
      "1"==q.AUTH?$("#signcnt").show():$("#signcnt").hide()
    }
    else
    {
      if(q.TYP==="date"&&q.FMT)
      {
        m.html(DEFFLD[$.format("date_{0}",q.FMT)])
      }
      else
      {
        if(q.TYP==="name"&&q.FMT)
        {
          if(q.FMT==="short")
          {
            m.html(DEFFLD.name_short)
          }
          else
          {
            m.html(DEFFLD[$.format("name_{0}_{1}",q.FMT,M.LANG)])
          }
        }
        else
        {
          if(q.TYP==="address")
          {
            m.html(DEFFLD[$.format("address_{0}",M.LANG)]);
            if(q.DEF)
            {
              var g=q.DEF.split("-");
              m.find("select.province").empty().append($.format("<option>{0}</option>",g[0]||"省/自治区/直辖市"));
              m.find("select.city").empty().append($.format("<option>{0}</option>",g[1]||"市"));
              m.find("select.zip").empty().append($.format("<option>{0}</option>",g[2]||"区/县"))
            }
          }
          else
          {
            if(q.TYP==="radio")
            {
              createRadioItemsPreview(q,m)
            }
            else
            {
              if(q.TYP==="checkbox")
              {
                m.empty();
                var b;
                var a;
                var i=false;
                $.each(q.ITMS,function(j,c)
                {
                  if(c.IMG)
                  {
                    i=true;
                    return false
                  }
                }
                );
                $.each(q.ITMS,function(j,c)
                {
                  b=$(DEFFLD.item_checkbox_f);
                  b.find("label").text(c.VAL);
                  b.find(":checkbox").prop("checked",c.CHKED==="1");
                  if(i)
                  {
                    if(c.IMG)
                    {
                      a=$("<div class='goods-item'><div class='image-center'><img class='img' src='"+IMAGESURL+c.IMG+"'/></div><div class='text-wapper center'><span>"+b.html()+"</span></div></div>")
                    }
                    else
                    {
                      a=$("<div class='goods-item'><div class='image-center'><img class='img' src=''/></div><div class='text-wapper center'><span>"+b.html()+"</span></div></div>")
                    }
                    m.append(a)
                  }
                  else
                  {
                    m.append(b)
                  }
                }
                )
              }
              else
              {
                if(q.TYP==="image")
                {
                  m.find("img").attr("src",q.IMG?IMAGESURL+q.IMG:"/rs/images/defaultimg.png")
                }
                else
                {
                  if(q.TYP==="goods")
                  {
                    createGoodsItemsPreView(q,m)
                  }
                  else
                  {
                    if(q.TYP==="section")
                    {
                      m.html($.enterToBr((q.SECDESC||"")))
                    }
                    else
                    {
                      if(q.TYP==="html")
                      {
                        m.html($.encodeScript(q.HTML||""))
                      }
                      else
                      {
                        if(q.TYP==="likert")
                        {
                          createLikertPreview(q,l)
                        }
                        else
                        {
                          if(q.TYP==="dropdown2")
                          {
                            var d=q.pN||"2";
                            if(d!=="2")
                            {
                              d=parseInt(d);
                              m.find("select").remove();
                              for(var f=0;f<d;f++)
                              {
                                m.append('<select disabled="disabled" class="input"></select>')
                              }
                              m.find("select").css(
                              {
                                width:(100/d-1)+"%","margin-right":"1%"
                              }
                              )
                            }
                            for(var e=0;e<q.ITMS.length;e++)
                            {
                              if(q.ITMS[e].CHKED==="1")
                              {
                                m.find("select:first").empty().append($.format("<option>{0}</option>",q.ITMS[e].VAL));
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
  if(q.TYP==="dropdown")
  {
    $.each(q.ITMS,function(j,c)
    {
      if(c.CHKED==="1"&&c.VAL)
      {
        m.find("select").append($.tmpl("<option>${$data}</option>",c.VAL));
        return false
      }
    }
    )
  }
  if(q.DEF)
  {
    var s=["text","textarea","number","ulr","email","money","phone"];
    if($.inArray(q.TYP,s)>=0)
    {
      if(q.TYP==="phone"&&q.FMT==="tel")
      {
        $.each(q.DEF.split("-"),function(j,c)
        {
          m.find(":text:eq("+j+")").val(c)
        }
        )
      }
      else
      {
        l.find(":input").val(q.DEF)
      }
    }
  }
  if(q.FLDSZ)
  {
    m.find(":text,textarea,select").removeClass("s m xxl").addClass(q.FLDSZ)
  }
  var h=$(DEFFLD.instruct);
  if(q.INSTR)
  {
    h.text(q.INSTR)
  }
  r.append(DEFFLD.icon).append(l).append(h).append(DEFFLD.fieldActions);
  if(isInstruct(q.TYP))
  {
    r.addClass("fieldInstruct")
  }
  if(q.LAY)
  {
    r.addClass(q.LAY)
  }
  if(q.SCU=="pri")
  {
    r.addClass("private")
  }
}
function createFields()
{
  var b,a=$("#fields").empty();
  if("L"===M.LBLAL)
  {
    a.addClass("leftLabel")
  }
  else
  {
    if("R"===M.LBLAL)
    {
      a.addClass("leftLabel labelRight")
    }
  }
  $.each(F,function(d,c)
  {
    if(!c)
    {
      return true
    }
    b=$(DEFFLD.field_li);
    b.attr("id","f"+d);
    createField(b,c);
    a.append(b);
    if(needHandle(c.TYP))
    {
      var e=$(DEFFLD.handle);
      b.append(e);
      resizeHandle(b)
    }
  }
  );
  if($.isEmptyObject(F))
  {
    $("#nofields").show();
    $("#formButtons").hide()
  }
  $("#fields").find("li.first").removeClass("first").end().find("li:first").addClass("first")
}
function createForm()
{
  $("#fTitle,#lblFormNm").text(M.FRMNM);
  $("#fDescription").html($.enterToBr(M.DESC));
  setFormValues(M)
}
function formInit()
{
  var b=function()
  {
    var e=$(this).val();
    $("#fTitle,#lblFormNm").text(e);
    M.FRMNM=e;
    CHANGED=true
  };
  $("#formName").bind(
  {
    keyup:b,change:b
  }
  );
  var d=function()
  {
    var e=$(this).val();
    $("#fDescription").html(M.DESC);
    M.DESC=e;
    CHANGED=true
  };
  $("#desc").bind(
  {
    keyup:d,change:d
  }
  );
$("#labelAlign").change(function()
{
  var f=$(this).val(),e=$("#fields");
  e.removeClass("leftLabel labelRight");
  if(f==="L")
  {
    e.addClass("leftLabel")
  }
  else
  {
    if(f==="R")
    {
      e.addClass("leftLabel labelRight")
    }
  }
  M.LBLAL=f;
  resizeHandle("all");
  CHANGED=true
}
);
if(M._id)
{
  var c=$("#divActions");
  c.find("a.preview").attr("href",$.format("/web/formview/{0}",M._id));
  c.find("a.setting").attr("href",$.format("/app/basicsetting/{0}?menuid=m01",M._id));
  c.find("a.publish").attr("href",$.format("/app/formcode/{0}?menuid=m02",M._id));
  c.removeClass("hide")
}
$("#confirmType_text").click(function()
{
  $("#confirmMsg_text").show().focus();
  $("#confirmMsg_url").hide();
  M.CFMTYP="T";
  CHANGED=true
}
);
$("#confirmType_url").click(function()
{
  $("#confirmMsg_url").show().focus();
  $("#confirmMsg_text").hide();
  M.CFMTYP="U";
  CHANGED=true
}
);
var a=function()
{
  if(M.CFMTYP==="U")
  {
    M.CFMURL=$(this).val()
  }
  else
  {
    M.CFMMSG=$(this).val()
  }
  CHANGED=true
};
$("#confirmMsg_url").bind(
{
  keyup:a,change:a
}
);
$("#confirmMsg_text").bind(
{
  keyup:a,change:a
}
)
}
function initWangEditor()
{
  htmlEditor=new wangEditor($("#html"));
  descEditor=new wangEditor($("#desc"));
  secdescEditor=new wangEditor($("#secdesc"));
  htmlEditor.config.menus=["source","bold","italic","eraser","forecolor","bgcolor","img","fontsize","unorderlist","alignleft","aligncenter","alignright","link","unlink","table","fullscreen"];
  descEditor.config.menus=["source","bold","italic","eraser","forecolor","bgcolor","img","fontsize","unorderlist","alignleft","aligncenter","alignright","link","unlink","table","fullscreen"];
  secdescEditor.config.menus=["source","bold","italic","eraser","forecolor","bgcolor","img","fontsize","unorderlist","alignleft","aligncenter","alignright","link","unlink","table","fullscreen"];
  htmlEditor.onchange=function()
  {
    $("#html").val(this.$txt.html()).trigger("change")
  };
  descEditor.onchange=function()
  {
    $("#desc").val(this.$txt.html()).trigger("change")
  };
  secdescEditor.onchange=function()
  {
    $("#secdesc").val(this.$txt.html()).trigger("change")
  };
  htmlEditor.create();
  descEditor.create();
  secdescEditor.create()
}
head.ready(function()
{
  if(window.CURUSER&&CURUSER.USERNAME==testUser)
  {
    $("#menu").find("li.frm,li.rpt,li.usr,li.act,li.app,li.thm").hide();
    $("#saveForm").attr("href","/web/register").html("<b></b>注册即可保存")
  }
  $("a.help","#right").helpTip();
  initWangEditor();
  createForm();
  createFields();
  fieldInit();
  propertyInit();
  addFieldsInit();
  formInit();
  $("#helpLink").attr("href",resRoot+"/help/formbuilder.html");
  var b=function(d)
  {
    var c=$(this).val();
    $(this).val(c.replace(/\D/g,""))
  }
  ,a=function(d)
  {
    var c=$(this).val();
    $(this).val(c.replace(/[^(\d\.?\-?)]/g,""))
  };
  $("input.yyyy,input.mm,input.dd,input.intnumber","#left").bind(
  {
    keyup:b,change:b
  }
  );
  $("input.number,input.money,input.price").live(
  {
    keyup:a,change:a
  }
  );
setInterval(function()
{
  saveForm(false)
}
,5*60*1000);
$("#allPropsContainer").css(
{
  maxHeight:$(window).height()-160
}
).mCustomScrollbar();
$("a.video").live(
{
  click:function()
  {
    var c=$(this).attr("videosrc");
    $.lightBox(
    {
      url:"../../web/video.jsp?URL="+c,size:"cus1"
    }
    )
  }
}
)
}
);
