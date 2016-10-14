using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace CustomFrom
{
     /// <summary>
     /// 自定义表单字段表 实体类
     /// </summary>
     public class CustomFromField
     {

          /// <summary>
          /// 浅拷贝
          /// </summary>
          /// <returns></returns>
          public CustomFromField Clone()
          {
               return (CustomFromField)this.MemberwiseClone();
          }

          private int CFF_ID_;
          /// <summary>
          ///主索引
          /// </summary>
          public int CFF_ID
          {
               set { CFF_ID_ = value; }
               get { return CFF_ID_; }
          }

          private string CFF_CFTGuid_="";
          /// <summary>
          ///主表的guid
          /// </summary>
          public string CFF_CFTGuid
          {
               set { if(value!=null) CFF_CFTGuid_ = value; }
               get { return CFF_CFTGuid_; }
          }

          private string CFF_Comment_="";
          /// <summary>
          ///备注
          /// </summary>
          public string CFF_Comment
          {
               set { if(value!=null) CFF_Comment_ = value; }
               get { return CFF_Comment_; }
          }

          private string CFF_Name_="";
          /// <summary>
          ///字段名称
          /// </summary>
          public string CFF_Name
          {
               set { if(value!=null) CFF_Name_ = value; }
               get { return CFF_Name_; }
          }

          private int CFF_Size_;
          /// <summary>
          ///字段长度
          /// </summary>
          public int CFF_Size
          {
               set { CFF_Size_ = value; }
               get { return CFF_Size_; }
          }

          private string CFF_Type_="";
          /// <summary>
          ///字段类型
          /// </summary>
          public string CFF_Type
          {
               set { if(value!=null) CFF_Type_ = value; }
               get { return CFF_Type_; }
          }

          private string CFF_IsNull_="";
          /// <summary>
          ///是否为空
          /// </summary>
          public string CFF_IsNull
          {
               set { if(value!=null) CFF_IsNull_ = value; }
               get { return CFF_IsNull_; }
          }

          private string CFF_IsKey_="";
          /// <summary>
          ///是否为主键
          /// </summary>
          public string CFF_IsKey
          {
               set { if(value!=null) CFF_IsKey_ = value; }
               get { return CFF_IsKey_; }
          }

          private string CFF_IsForeignkey_="";
          /// <summary>
          ///是否为外键
          /// </summary>
          public string CFF_IsForeignkey
          {
               set { if(value!=null) CFF_IsForeignkey_ = value; }
               get { return CFF_IsForeignkey_; }
          }

          private string CFF_Remark_="";
          /// <summary>
          ///备注
          /// </summary>
          public string CFF_Remark
          {
               set { if(value!=null) CFF_Remark_ = value; }
               get { return CFF_Remark_; }
          }

          private string CFF_Str1_="";
          /// <summary>
          ///备用1
          /// </summary>
          public string CFF_Str1
          {
               set { if(value!=null) CFF_Str1_ = value; }
               get { return CFF_Str1_; }
          }

          private string CFF_Str2_="";
          /// <summary>
          ///备用2
          /// </summary>
          public string CFF_Str2
          {
               set { if(value!=null) CFF_Str2_ = value; }
               get { return CFF_Str2_; }
          }

          private string CFF_Str3_="";
          /// <summary>
          ///备用3
          /// </summary>
          public string CFF_Str3
          {
               set { if(value!=null) CFF_Str3_ = value; }
               get { return CFF_Str3_; }
          }

          private string CFF_Str4_="";
          /// <summary>
          ///备用4
          /// </summary>
          public string CFF_Str4
          {
               set { if(value!=null) CFF_Str4_ = value; }
               get { return CFF_Str4_; }
          }

          private string CFF_Str5_="";
          /// <summary>
          ///备用5
          /// </summary>
          public string CFF_Str5
          {
               set { if(value!=null) CFF_Str5_ = value; }
               get { return CFF_Str5_; }
          }

     }
}
