using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DB;
namespace CustomFrom
{
     /// <summary>
     /// 自定义表单字段表 业务类
     /// </summary>
     public class CustomFromFieldBLL
     {
          DataHelper dh = new DataHelper("CustomFromDB");

          /// <summary>
          ///增加自定义表单字段表
          /// </summary>
          /// <param name="model">实体</param>
          /// <returns>主键 CFF_ID</returns>
          public int AddCustomFromField(CustomFromField model)
          {
               return Convert.ToInt32(dh.AddEntity("AddCustomFromField",model));
          }

          /// <summary>
          ///删除自定义表单字段表
          /// </summary>
          /// <param name="CFF_ID">主索引</param>
          /// <returns>是否成功</returns>
          public bool DelCustomFromField(int CFF_ID)
          {
               return dh.DelEntity("DelCustomFromField", "CFF_ID", CFF_ID);
          }

          /// <summary>
          ///修改自定义表单字段表
          /// </summary>
          /// <param name="model">实体</param>
          /// <returns>是否成功</returns>
          public bool UpdCustomFromField(CustomFromField model)
          {
               return dh.UpdEntity("UpdCustomFromField", model);
          }

          /// <summary>
          ///获取单条自定义表单字段表
          /// </summary>
          /// <param name="CFF_ID">主索引</param>
          /// <returns>自定义表单字段表 实体</returns>
          public CustomFromField GetCustomFromField(int CFF_ID)
          {
               return dh.GetEntity<CustomFromField>("GetCustomFromField", "CFF_ID", CFF_ID);
          }

          /// <summary>
          /// 获取Top
          /// </summary>
          /// <param name="topNum">行数</param>
          /// <param name="wheres">条件</param>
          /// <param name="fields">字段</param>
          /// <returns>CustomFromField 列表</returns>
          public IList<CustomFromField> GetCustomFromFieldTop(int topNum, string wheres, string fields)
          {
               return dh.GetEntityTopByProc<CustomFromField>("GetCustomFromFieldTop", topNum, wheres, fields);
          }

          /// <summary>
          /// 列表总行数
          /// </summary>
          /// <param name="wheres">查询条件</param>
          /// <returns>总行数</returns>
          public int GetCustomFromFieldListCount(string wheres)
          {
               return dh.GetEntityListCount("GetCustomFromFieldListCount", wheres);
          }

          /// <summary>
          /// 列表
          /// </summary>
          /// <param name="prows">每页行数</param>
          /// <param name="pages">当前页数</param>
          /// <param name="wheres">查询条件</param>
          /// <param name="orders">排序</param>
          /// <returns>CustomFromField 列表</returns>
          public IList<CustomFromField> GetCustomFromFieldList(int prows, int pages, string wheres, string orders)
          {
               return dh.GetEntityList<CustomFromField>("GetCustomFromFieldList", prows, pages, wheres, orders);
          }

          /// <summary>
          /// 列表(指定字段)
          /// </summary>
          /// <param name="prows">每页行数</param>
          /// <param name="pages">当前页数</param>
          /// <param name="fields">需要的字段</param>
          /// <param name="wheres">查询条件</param>
          /// <param name="orders">排序</param>
          /// <returns>CustomFromField 列表</returns>
          public IList<CustomFromField> GetCustomFromFieldListFields(int prows, int pages, string fields, string wheres, string orders)
          {
               return dh.GetEntityListFields<CustomFromField>("GetCustomFromFieldListFields", prows, pages, fields, wheres, orders);
          }

     }
}
