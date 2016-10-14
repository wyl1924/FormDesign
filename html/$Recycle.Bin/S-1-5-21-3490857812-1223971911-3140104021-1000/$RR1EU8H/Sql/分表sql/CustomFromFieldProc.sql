------------------------------------------------------------------------------------
--------------------------------CustomFromField ----------------------------------

-----------------增加 自定义表单字段表
if exists(select 1 from sysobjects where id=OBJECT_ID('AddCustomFromField') and xtype='p')
drop proc AddCustomFromField
go
create proc AddCustomFromField
    @CFF_ID_ int output ,
    @CFF_CFTGuid_ varchar(100) ,
    @CFF_Comment_ varchar(100) ,
    @CFF_Name_ varchar(100) ,
    @CFF_Size_ int,
    @CFF_Type_ varchar(50) ,
    @CFF_IsNull_ varchar(10) ,
    @CFF_IsKey_ varchar(10) ,
    @CFF_IsForeignkey_ varchar(10) ,
    @CFF_Remark_ varchar(500) ,
    @CFF_Str1_ varchar(500) ,
    @CFF_Str2_ varchar(500) ,
    @CFF_Str3_ varchar(500) ,
    @CFF_Str4_ varchar(500) ,
    @CFF_Str5_ varchar(500) 
as
insert into CustomFromField(CFF_CFTGuid,CFF_Comment,CFF_Name,CFF_Size,CFF_Type,CFF_IsNull,CFF_IsKey,CFF_IsForeignkey,CFF_Remark,
    CFF_Str1,CFF_Str2,CFF_Str3,CFF_Str4,CFF_Str5)
values(@CFF_CFTGuid_,@CFF_Comment_,@CFF_Name_,@CFF_Size_,@CFF_Type_,@CFF_IsNull_,@CFF_IsKey_,@CFF_IsForeignkey_,@CFF_Remark_,
    @CFF_Str1_,@CFF_Str2_,@CFF_Str3_,@CFF_Str4_,@CFF_Str5_)
    set @CFF_ID_ =SCOPE_IDENTITY()
go

-----------------删除 自定义表单字段表
if exists(select 1 from sysobjects where id=OBJECT_ID('DelCustomFromField') and xtype='p')
drop proc DelCustomFromField
go
create proc DelCustomFromField
   @CFF_CFTGuid_ varchar(100)
as
delete CustomFromField
    where CFF_CFTGuid=@CFF_CFTGuid_
go

-----------------修改 自定义表单字段表
if exists(select 1 from sysobjects where id=OBJECT_ID('UpdCustomFromField') and xtype='p')
drop proc UpdCustomFromField
go
create proc UpdCustomFromField
    @CFF_ID_ int ,
    @CFF_CFTGuid_ varchar(100) ,
    @CFF_Comment_ varchar(100) ,
    @CFF_Name_ varchar(100) ,
    @CFF_Size_ int ,
    @CFF_Type_ varchar(50) ,
    @CFF_IsNull_ varchar(10) ,
    @CFF_IsKey_ varchar(10) ,
    @CFF_IsForeignkey_ varchar(10) ,
    @CFF_Remark_ varchar(500) ,
    @CFF_Str1_ varchar(500) ,
    @CFF_Str2_ varchar(500) ,
    @CFF_Str3_ varchar(500) ,
    @CFF_Str4_ varchar(500) ,
    @CFF_Str5_ varchar(500) 
as
    update CustomFromField set CFF_CFTGuid=@CFF_CFTGuid_,CFF_Comment=@CFF_Comment_,CFF_Name=@CFF_Name_,CFF_Size=@CFF_Size_,CFF_Type=@CFF_Type_,
    CFF_IsNull=@CFF_IsNull_,CFF_IsKey=@CFF_IsKey_,CFF_IsForeignkey=@CFF_IsForeignkey_,CFF_Remark=@CFF_Remark_,CFF_Str1=@CFF_Str1_,
    CFF_Str2=@CFF_Str2_,CFF_Str3=@CFF_Str3_,CFF_Str4=@CFF_Str4_,CFF_Str5=@CFF_Str5_
    where CFF_CFTGuid=@CFF_CFTGuid_
go

-----------------获取 自定义表单字段表
if exists(select 1 from sysobjects where id=OBJECT_ID('GetCustomFromField') and xtype='p')
drop proc GetCustomFromField
go
create proc GetCustomFromField
    @CFF_ID_ int
as
    select CFF_ID,CFF_CFTGuid,CFF_Comment,CFF_Name,CFF_Size,CFF_Type,CFF_IsNull,CFF_IsKey,CFF_IsForeignkey,
    CFF_Remark,CFF_Str1,CFF_Str2,CFF_Str3,CFF_Str4,CFF_Str5
    from CustomFromField
    where CFF_ID=@CFF_ID_
go

-----------------获取TOP 自定义表单字段表
if exists(select 1 from sysobjects where id=OBJECT_ID('GetCustomFromFieldTop') and xtype='p')
drop proc GetCustomFromFieldTop
go
create proc GetCustomFromFieldTop
    @topNum_ int, --需要的数据行数
    @wheres_ varchar(1000),
    @fields_ varchar(500)
as
    if @fields_ is null or len(@fields_)=0
    set @fields_='CFF_ID,CFF_CFTGuid,CFF_Comment,CFF_Name,CFF_Size,CFF_Type,CFF_IsNull,CFF_IsKey,CFF_IsForeignkey,
    CFF_Remark,CFF_Str1,CFF_Str2,CFF_Str3,CFF_Str4,CFF_Str5'
    declare @sql varchar(2000)
    set @sql='select top('+CONVERT(varchar, @topNum_)+') '+@fields_+' From CustomFromField Where '+@wheres_
    exec (@sql)
go

-----------------总行数 自定义表单字段表
if exists(select 1 from sysobjects where id=OBJECT_ID('GetCustomFromFieldListCount') and xtype='p')
drop proc GetCustomFromFieldListCount
go
create proc GetCustomFromFieldListCount
    @wheres_ varchar(1000)
as
    declare @sql varchar(2000)
    set @sql='select COUNT(CFF_ID) From CustomFromField Where '+@wheres_
    exec (@sql)
go

-----------------列表 自定义表单字段表
if exists(select 1 from sysobjects where id=OBJECT_ID('GetCustomFromFieldList') and xtype='p')
drop proc GetCustomFromFieldList
go
create proc GetCustomFromFieldList
    @prows_ int,
    @pages_ int,
    @wheres_ varchar(1000),
    @orders_ varchar(200)
as
    declare @sql varchar(2000)
    set @sql='select  top('+convert(varchar,@prows_)+')
    CFF_ID,CFF_CFTGuid,CFF_Comment,CFF_Name,CFF_Size,CFF_Type,CFF_IsNull,CFF_IsKey,CFF_IsForeignkey,
    CFF_Remark,CFF_Str1,CFF_Str2,CFF_Str3,CFF_Str4,CFF_Str5
    from
    (select row_number() over(order by'+@orders_+') rn,
    CFF_ID,CFF_CFTGuid,CFF_Comment,CFF_Name,CFF_Size,CFF_Type,CFF_IsNull,CFF_IsKey,CFF_IsForeignkey,
    CFF_Remark,CFF_Str1,CFF_Str2,CFF_Str3,CFF_Str4,CFF_Str5
    from CustomFromField
    where '+@wheres_+')
    as T
    WHERE rn >('+convert(varchar,@prows_)+'*('+convert(varchar,@pages_)+'-1))'
    +' AND rn <( '+convert(varchar,@prows_)+'*('+convert(varchar,@pages_)+'+1))'
    exec (@sql)
go

-----------------指定字段列表 自定义表单字段表
if exists(select 1 from sysobjects where id=OBJECT_ID('GetCustomFromFieldListFields') and xtype='p')
drop proc GetCustomFromFieldListFields
go
create proc GetCustomFromFieldListFields
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
    from CustomFromField where  '+@wheres_+' 
    ) as T
    WHERE rn >('+convert(varchar,@prows_)+'*('+convert(varchar,@pages_)+'-1))'
    +' AND rn <( '+convert(varchar,@prows_)+'*('+convert(varchar,@pages_)+'+1))'
    exec (@sql)
    go

