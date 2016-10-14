using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
namespace CustomFrom
{
     /// <summary>
     /// 表单信息表 实体类
     /// </summary>
     public class FormDesign
     {

          /// <summary>
          /// 浅拷贝
          /// </summary>
          /// <returns></returns>
          public FormDesign Clone()
          {
               return (FormDesign)this.MemberwiseClone();
          }

          private int ID_;
          /// <summary>
          ///主索引
          /// </summary>
          public int ID
          {
               set { ID_ = value; }
               get { return ID_; }
          }

          private string Form_Guid_="";
          /// <summary>
          ///表单guid
          /// </summary>
          public string Form_Guid
          {
               set { if(value!=null) Form_Guid_ = value; }
               get { return Form_Guid_; }
          }

          private string FRMNM_="";
          /// <summary>
          ///表单名称
          /// </summary>
          public string FRMNM
          {
               set { if(value!=null) FRMNM_ = value; }
               get { return FRMNM_; }
          }

          private string DESC_="";
          /// <summary>
          ///描述
          /// </summary>
          public string DESC
          {
               set { if(value!=null) DESC_ = value; }
               get { return DESC_; }
          }

          private string LBLAL_="";
          /// <summary>
          ///对齐方式
          /// </summary>
          public string LBLAL
          {
               set { if(value!=null) LBLAL_ = value; }
               get { return LBLAL_; }
          }

          private string CFMTYP_="";
          /// <summary>
          ///提示类型
          /// </summary>
          public string CFMTYP
          {
               set { if(value!=null) CFMTYP_ = value; }
               get { return CFMTYP_; }
          }

          private string CFMMSG_="";
          /// <summary>
          ///提示信息
          /// </summary>
          public string CFMMSG
          {
               set { if(value!=null) CFMMSG_ = value; }
               get { return CFMMSG_; }
          }

          private string CFMURL_="";
          /// <summary>
          ///URL地址
          /// </summary>
          public string CFMURL
          {
               set { if(value!=null) CFMURL_ = value; }
               get { return CFMURL_; }
          }

          private string SDMAIL_="";
          /// <summary>
          ///可见性（隐藏）
          /// </summary>
          public string SDMAIL
          {
               set { if(value!=null) SDMAIL_ = value; }
               get { return SDMAIL_; }
          }

          private int CAPTCHA_;
          /// <summary>
          ///验证码
          /// </summary>
          public int CAPTCHA
          {
               set { CAPTCHA_ = value; }
               get { return CAPTCHA_; }
          }

          private int IPLMT_;
          /// <summary>
          ///ip地址
          /// </summary>
          public int IPLMT
          {
               set { IPLMT_ = value; }
               get { return IPLMT_; }
          }

          private string INSTR_="";
          /// <summary>
          ///默认值
          /// </summary>
          public string INSTR
          {
               set { if(value!=null) INSTR_ = value; }
               get { return INSTR_; }
          }

          private string ISPUB_="";
          /// <summary>
          ///说明
          /// </summary>
          public string ISPUB
          {
               set { if(value!=null) ISPUB_ = value; }
               get { return ISPUB_; }
          }

          private string GID_="";
          /// <summary>
          ///选择项
          /// </summary>
          public string GID
          {
               set { if(value!=null) GID_ = value; }
               get { return GID_; }
          }

          private int HEIGHT_;
          /// <summary>
          ///高度
          /// </summary>
          public int HEIGHT
          {
               set { HEIGHT_ = value; }
               get { return HEIGHT_; }
          }

          private string FormInfo_="";
          /// <summary>
          ///表单信息
          /// </summary>
          public string FormInfo
          {
               set { if(value!=null) FormInfo_ = value; }
               get { return FormInfo_; }
          }

          private string FromControlInfo_="";
          /// <summary>
          ///表单控件信息
          /// </summary>
          public string FromControlInfo
          {
               set { if(value!=null) FromControlInfo_ = value; }
               get { return FromControlInfo_; }
          }

          private int HEIGHT_;
          /// <summary>
          ///高度
          /// </summary>
          public int HEIGHT
          {
               set { HEIGHT_ = value; }
               get { return HEIGHT_; }
          }

          private string From_Str1_="";
          /// <summary>
          ///备用1
          /// </summary>
          public string From_Str1
          {
               set { if(value!=null) From_Str1_ = value; }
               get { return From_Str1_; }
          }

          private string From_Str2_="";
          /// <summary>
          ///备用2
          /// </summary>
          public string From_Str2
          {
               set { if(value!=null) From_Str2_ = value; }
               get { return From_Str2_; }
          }

          private string From_Str3_="";
          /// <summary>
          ///备用3
          /// </summary>
          public string From_Str3
          {
               set { if(value!=null) From_Str3_ = value; }
               get { return From_Str3_; }
          }

          private string From_Str4_="";
          /// <summary>
          ///备用4
          /// </summary>
          public string From_Str4
          {
               set { if(value!=null) From_Str4_ = value; }
               get { return From_Str4_; }
          }

          private string From_Str5_="";
          /// <summary>
          ///备用5
          /// </summary>
          public string From_Str5
          {
               set { if(value!=null) From_Str5_ = value; }
               get { return From_Str5_; }
          }

     }
}
