use CustomFromDB
go 
------------------------------------------------------------------------------------
--------------------------------FormDesign ----------------------------------

-----------------增加 表单信息表
if exists(select 1 from sysobjects where id=OBJECT_ID('AddFormDesign') and xtype='p')
drop proc AddFormDesign
go
create proc AddFormDesign
    @ID_ int output ,
    @Form_Guid_ varchar(100) ,
    @FRMNM_ varchar(100) ,
    @DESC_ varchar(100) ,
    @LBLAL_ varchar(100) ,
    @CFMTYP_ varchar(50) ,
    @CFMMSG_ varchar(50) ,
    @CFMURL_ varchar(50) ,
    @SDMAIL_ varchar(50) ,
    @CAPTCHA_ INT(4) ,
    @IPLMT_ INT(4) ,
    @INSTR_ varchar(1000) ,
    @ISPUB_ varchar(500) ,
    @GID_ varchar(100) ,
    @HEIGHT_ INT(4) ,
    @FormInfo_ varchar(max) ,
    @FromControlInfo_ varchar(max) ,
    @HEIGHT_ INT(4) ,
    @From_Str1_ varchar(500) ,
    @From_Str2_ varchar(500) ,
    @From_Str3_ varchar(500) ,
    @From_Str4_ varchar(500) ,
    @From_Str5_ varchar(500) 
as
insert into FormDesign(Form_Guid,FRMNM,DESC,LBLAL,CFMTYP,CFMMSG,CFMURL,SDMAIL,CAPTCHA,
    IPLMT,INSTR,ISPUB,GID,HEIGHT,FormInfo,FromControlInfo,HEIGHT,From_Str1,
    From_Str2,From_Str3,From_Str4,From_Str5)
values(@Form_Guid_,@FRMNM_,@DESC_,@LBLAL_,@CFMTYP_,@CFMMSG_,@CFMURL_,@SDMAIL_,@CAPTCHA_,
    @IPLMT_,@INSTR_,@ISPUB_,@GID_,@HEIGHT_,@FormInfo_,@FromControlInfo_,@HEIGHT_,@From_Str1_,
    @From_Str2_,@From_Str3_,@From_Str4_,@From_Str5_)
    set @ID_ =SCOPE_IDENTITY()
go

-----------------删除 表单信息表
if exists(select 1 from sysobjects where id=OBJECT_ID('DelFormDesign') and xtype='p')
drop proc DelFormDesign
go
create proc DelFormDesign
    @ID_ int(4)
as
delete FormDesign
    where ID=@ID_
go

-----------------修改 表单信息表
if exists(select 1 from sysobjects where id=OBJECT_ID('UpdFormDesign') and xtype='p')
drop proc UpdFormDesign
go
create proc UpdFormDesign
    @ID_ int(4) ,
    @Form_Guid_ varchar(100) ,
    @FRMNM_ varchar(100) ,
    @DESC_ varchar(100) ,
    @LBLAL_ varchar(100) ,
    @CFMTYP_ varchar(50) ,
    @CFMMSG_ varchar(50) ,
    @CFMURL_ varchar(50) ,
    @SDMAIL_ varchar(50) ,
    @CAPTCHA_ INT(4) ,
    @IPLMT_ INT(4) ,
    @INSTR_ varchar(1000) ,
    @ISPUB_ varchar(500) ,
    @GID_ varchar(100) ,
    @HEIGHT_ INT(4) ,
    @FormInfo_ varchar(max) ,
    @FromControlInfo_ varchar(max) ,
    @HEIGHT_ INT(4) ,
    @From_Str1_ varchar(500) ,
    @From_Str2_ varchar(500) ,
    @From_Str3_ varchar(500) ,
    @From_Str4_ varchar(500) ,
    @From_Str5_ varchar(500) 
as
    update FormDesign set Form_Guid=@Form_Guid_,FRMNM=@FRMNM_,DESC=@DESC_,LBLAL=@LBLAL_,CFMTYP=@CFMTYP_,
    CFMMSG=@CFMMSG_,CFMURL=@CFMURL_,SDMAIL=@SDMAIL_,CAPTCHA=@CAPTCHA_,IPLMT=@IPLMT_,
    INSTR=@INSTR_,ISPUB=@ISPUB_,GID=@GID_,HEIGHT=@HEIGHT_,FormInfo=@FormInfo_,
    FromControlInfo=@FromControlInfo_,HEIGHT=@HEIGHT_,From_Str1=@From_Str1_,From_Str2=@From_Str2_,From_Str3=@From_Str3_,
    From_Str4=@From_Str4_,From_Str5=@From_Str5_
    where ID=@ID_
go

-----------------获取 表单信息表
if exists(select 1 from sysobjects where id=OBJECT_ID('GetFormDesign') and xtype='p')
drop proc GetFormDesign
go
create proc GetFormDesign
    @ID_ int(4)
as
    select ID,Form_Guid,FRMNM,DESC,LBLAL,CFMTYP,CFMMSG,CFMURL,SDMAIL,
    CAPTCHA,IPLMT,INSTR,ISPUB,GID,HEIGHT,FormInfo,FromControlInfo,HEIGHT,
    From_Str1,From_Str2,From_Str3,From_Str4,From_Str5
    from FormDesign
    where ID=@ID_
go

-----------------获取TOP 表单信息表
if exists(select 1 from sysobjects where id=OBJECT_ID('GetFormDesignTop') and xtype='p')
drop proc GetFormDesignTop
go
create proc GetFormDesignTop
    @topNum_ int, --需要的数据行数
    @wheres_ varchar(1000),
    @fields_ varchar(500)
as
    if @fields_ is null or len(@fields_)=0
    set @fields_='ID,Form_Guid,FRMNM,DESC,LBLAL,CFMTYP,CFMMSG,CFMURL,SDMAIL,
    CAPTCHA,IPLMT,INSTR,ISPUB,GID,HEIGHT,FormInfo,FromControlInfo,HEIGHT,
    From_Str1,From_Str2,From_Str3,From_Str4,From_Str5'
    declare @sql varchar(2000)
    set @sql='select top('+CONVERT(varchar, @topNum_)+') '+@fields_+' From FormDesign Where '+@wheres_
    exec (@sql)
go

-----------------总行数 表单信息表
if exists(select 1 from sysobjects where id=OBJECT_ID('GetFormDesignListCount') and xtype='p')
drop proc GetFormDesignListCount
go
create proc GetFormDesignListCount
    @wheres_ varchar(1000)
as
    declare @sql varchar(2000)
    set @sql='select COUNT(ID) From FormDesign Where '+@wheres_
    exec (@sql)
go

-----------------列表 表单信息表
if exists(select 1 from sysobjects where id=OBJECT_ID('GetFormDesignList') and xtype='p')
drop proc GetFormDesignList
go
create proc GetFormDesignList
    @prows_ int,
    @pages_ int,
    @wheres_ varchar(1000),
    @orders_ varchar(200)
as
    declare @sql varchar(2000)
    set @sql='select  top('+convert(varchar,@prows_)+')
    ID,Form_Guid,FRMNM,DESC,LBLAL,CFMTYP,CFMMSG,CFMURL,SDMAIL,
    CAPTCHA,IPLMT,INSTR,ISPUB,GID,HEIGHT,FormInfo,FromControlInfo,HEIGHT,
    From_Str1,From_Str2,From_Str3,From_Str4,From_Str5
    from
    (select row_number() over(order by'+@orders_+') rn,
    ID,Form_Guid,FRMNM,DESC,LBLAL,CFMTYP,CFMMSG,CFMURL,SDMAIL,
    CAPTCHA,IPLMT,INSTR,ISPUB,GID,HEIGHT,FormInfo,FromControlInfo,HEIGHT,
    From_Str1,From_Str2,From_Str3,From_Str4,From_Str5
    from FormDesign
    where '+@wheres_+')
    as T
    WHERE rn >('+convert(varchar,@prows_)+'*('+convert(varchar,@pages_)+'-1))'
    +' AND rn <( '+convert(varchar,@prows_)+'*('+convert(varchar,@pages_)+'+1))'
    exec (@sql)
go

-----------------指定字段列表 表单信息表
if exists(select 1 from sysobjects where id=OBJECT_ID('GetFormDesignListFields') and xtype='p')
drop proc GetFormDesignListFields
go
create proc GetFormDesignListFields
    @prows_ int,
    @pages_ int,
    @fields_ varchar(2000),
    @wheres_ varchar(1000),
    @orders_ varchar(200)
    as
    declare @sql varchar(2000)
    set @sql='select  top('+convert(varchar,@prows_)+') 
    '+@fields_+'
    from(
    select row_number() over(order by  '+@orders_+') rn,
    '+@fields_+'
    from FormDesign where  '+@wheres_+' 
    ) as T
    WHERE rn >('+convert(varchar,@prows_)+'*('+convert(varchar,@pages_)+'-1))'
    +' AND rn <( '+convert(varchar,@prows_)+'*('+convert(varchar,@pages_)+'+1))'
    exec (@sql)
    go


