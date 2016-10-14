Use master
go
--检查数据库是否存在
if exists(select * from sysdatabases where name='CustomFromDB')
drop database CustomFromDB
go
--创建数据库
create database CustomFromDB
on
(
name='CustomFromDB',
filename='e:\DB\CustomFromDB.mdf',
size=500,
maxsize=unlimited,
filegrowth=30%	
)
go
use CustomFromDB
go



------------------------自定义表单字段表---------------------------------------
if exists(select * from sysobjects where name='CustomFromField')
drop table CustomFromField 
go
create table CustomFromField
(
   CFF_ID int(4) identity(1,1) primary key ,  --主索引
   CFF_CFTGuid varchar(100) ,  --主表的guid
   CFF_Comment varchar(100) ,  --备注
   CFF_Name varchar(100) ,  --字段名称
   CFF_Size int(4) ,  --字段长度
   CFF_Type varchar(50) ,  --字段类型
   CFF_IsNull varchar(10) ,  --是否为空
   CFF_IsKey varchar(10) ,  --是否为主键
   CFF_IsForeignkey varchar(10) ,  --是否为外键
   CFF_Remark varchar(500) ,  --备注
   CFF_Str1 varchar(500) ,  --备用1
   CFF_Str2 varchar(500) ,  --备用2
   CFF_Str3 varchar(500) ,  --备用3
   CFF_Str4 varchar(500) ,  --备用4
   CFF_Str5 varchar(500)   --备用5
)
go


