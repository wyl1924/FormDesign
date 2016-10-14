------------------------表单信息表---------------------------------------
if exists(select * from sysobjects where name='FormDesign')
drop table FormDesign 
go
create table FormDesign
(
   ID int(4) identity(1,1) primary key ,  --主索引
   Form_Guid varchar(100) ,  --表单guid
   FRMNM varchar(100) ,  --表单名称
   DESC varchar(100) ,  --描述
   LBLAL varchar(100) ,  --对齐方式
   CFMTYP varchar(50) ,  --提示类型
   CFMMSG varchar(50) ,  --提示信息
   CFMURL varchar(50) ,  --URL地址
   SDMAIL varchar(50) ,  --可见性（隐藏）
   CAPTCHA INT(4) ,  --验证码
   IPLMT INT(4) ,  --ip地址
   INSTR varchar(1000) ,  --默认值
   ISPUB varchar(500) ,  --说明
   GID varchar(100) ,  --选择项
   HEIGHT INT(4) ,  --高度
   FormInfo varchar(max) ,  --表单信息
   FromControlInfo varchar(max) ,  --表单控件信息
   HEIGHT INT(4) ,  --高度
   From_Str1 varchar(500) ,  --备用1
   From_Str2 varchar(500) ,  --备用2
   From_Str3 varchar(500) ,  --备用3
   From_Str4 varchar(500) ,  --备用4
   From_Str5 varchar(500)   --备用5
)
go

