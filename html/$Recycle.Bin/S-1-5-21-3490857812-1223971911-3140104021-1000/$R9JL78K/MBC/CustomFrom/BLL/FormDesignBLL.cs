using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB;
namespace CustomFrom
{
     /// <summary>
     /// 表单信息表 业务类
     /// </summary>
     public class FormDesignBLL
     {
          DataHelper dh = new DataHelper("CustomFromDB");

          /// <summary>
          ///增加表单信息表
          /// </summary>
          /// <param name="model">实体</param>
          /// <returns>主键 ID</returns>
          public int AddFormDesign(FormDesign model)
          {
               return Convert.ToInt32(dh.AddEntity("AddFormDesign",model));
          }

          /// <summary>
          ///删除表单信息表
          /// </summary>
          /// <param name="ID">主索引</param>
          /// <returns>是否成功</returns>
          public bool DelFormDesign(int ID)
          {
               return dh.DelEntity("DelFormDesign", "ID", ID);
          }

          /// <summary>
          ///修改表单信息表
          /// </summary>
          /// <param name="model">实体</param>
          /// <returns>是否成功</returns>
          public bool UpdFormDesign(FormDesign model)
          {
               return dh.UpdEntity("UpdFormDesign", model);
          }

          /// <summary>
          ///获取单条表单信息表
          /// </summary>
          /// <param name="ID">主索引</param>
          /// <returns>表单信息表 实体</returns>
          public FormDesign GetFormDesign(int ID)
          {
               return dh.GetEntity<FormDesign>("GetFormDesign", "ID", ID);
          }

          /// <summary>
          /// 获取Top
          /// </summary>
          /// <param name="topNum">行数</param>
          /// <param name="wheres">条件</param>
          /// <param name="fields">字段</param>
          /// <returns>FormDesign 列表</returns>
          public IList<FormDesign> GetFormDesignTop(int topNum, string wheres, string fields)
          {
               return dh.GetEntityTopByProc<FormDesign>("GetFormDesignTop", topNum, wheres, fields);
          }

          /// <summary>
          /// 列表总行数
          /// </summary>
          /// <param name="wheres">查询条件</param>
          /// <returns>总行数</returns>
          public int GetFormDesignListCount(string wheres)
          {
               return dh.GetEntityListCount("GetFormDesignListCount", wheres);
          }

          /// <summary>
          /// 列表
          /// </summary>
          /// <param name="prows">每页行数</param>
          /// <param name="pages">当前页数</param>
          /// <param name="wheres">查询条件</param>
          /// <param name="orders">排序</param>
          /// <returns>FormDesign 列表</returns>
          public IList<FormDesign> GetFormDesignList(int prows, int pages, string wheres, string orders)
          {
               return dh.GetEntityList<FormDesign>("GetFormDesignList", prows, pages, wheres, orders);
          }

          /// <summary>
          /// 列表(指定字段)
          /// </summary>
          /// <param name="prows">每页行数</param>
          /// <param name="pages">当前页数</param>
          /// <param name="fields">需要的字段</param>
          /// <param name="wheres">查询条件</param>
          /// <param name="orders">排序</param>
          /// <returns>FormDesign 列表</returns>
          public IList<FormDesign> GetFormDesignListFields(int prows, int pages, string fields, string wheres, string orders)
          {
               return dh.GetEntityListFields<FormDesign>("GetFormDesignListFields", prows, pages, fields, wheres, orders);
          }

     }
}
