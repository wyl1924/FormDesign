using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;
using System.Web.Mvc;
using CommonHelper;
using Dictionary;
using UsersInfo;
using Dispose;
namespace CustomFrom
{
    /// <summary>
    /// 自定义表单字段表控制器
    /// </summary>
    public class CustomFromFieldController : ExtendController
    {
        CustomFromFieldBLL bll = new CustomFromFieldBLL();

        /// <summary>
        /// 自定义表单字段表增加
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult CustomFromFieldAdd()
        {
            string checkResult = base.CheckAddGetUsersPerm();
            if (!String.IsNullOrEmpty(checkResult))
                        return Content("<script>" + checkResult + "</script>");
            return View();
        }

        /// <summary>
        /// 自定义表单字段表增加
        /// </summary>
        /// <param name="entity">自定义表单字段表对象</param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult CustomFromFieldAdd(CustomFromField entity)
        {
            ActionResult result = base.AddExecuteScript();
            if (result != null)
                return result;
            Users u = userHelper.GetUser();
            int flag = bll.AddCustomFromField(entity);
            if (flag > 0)
                return pageHelper.AlertCloseWin("CustomFromFieldAdd", "新增成功！");
            else
                return pageHelper.ExtAlert("新增失败！");
        }

        /// <summary>
        /// 自定义表单字段表修改
        /// </summary>
        /// <param name="CFF_ID">ID</param>
        /// <returns></returns>
        [HttpGet]
        public ActionResult CustomFromFieldEdit(string CFF_ID)
        {
            int CFF_ID_ = ParmEncryp.DecryptInt(CFF_ID);
            if (CFF_ID_ == 0)
                return Content("<script>top.extAlert('非法访问！')</script>");
            CustomFromField entity = bll.GetCustomFromField(lsid_);
            string checkResult = base.CheckEditGetUsersPerm();
            if (!String.IsNullOrEmpty(checkResult))
                return Content("<script>" + checkResult + "</script>");
            return View(entity);
        }

        /// <summary>
        /// 自定义表单字段表修改
        /// </summary>
        /// <param name="entity">自定义表单字段表对象</param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult CustomFromFieldEdit(CustomFromField entity)
        {
            int CFF_ID_ = ParmEncryp.DecryptInt(Request.Form["CFF_ID"]);
            if (CFF_ID_ == 0)
                return Content("<script>top.extAlert('非法访问！')</script>");
            CustomFromField entity_ = bll.GetCustomFromField(CFF_ID_);
            ActionResult result = base.EditExecuteScript();
            if (result != null)
                return result;
            Users u = userHelper.GetUser();
            if (bll.UpdCustomFromField(entity))
                return pageHelper.AlertCloseWin("CustomFromFieldEdit", "修改成功！");
            else
                return pageHelper.ExtAlert("修改失败！");
        }

        /// <summary>
        /// 自定义表单字段表详情
        /// </summary>
        /// <param name="CFF_ID">ID</param>
        /// <returns></returns>
        public ActionResult CustomFromFieldDetail(string CFF_ID)
        {
            int CFF_ID_ = ParmEncryp.DecryptInt(CFF_ID);
            if (CFF_ID_ == 0)
                return Content("<script>top.extAlert('非法访问！')</script>");
            CustomFromField entity = bll.GetCustomFromField(CFF_ID_);
            string checkResult = base.CheckDetailGetUsersPerm();
            if (!String.IsNullOrEmpty(checkResult))
                return Content("<script>" + checkResult + "</script>");
            Users u = userHelper.GetUser();
            return View(entity);
        }

        /// <summary>
        /// 删除数据 
        /// </summary>
        /// <param name="CFF_ID">自定义表单字段表主键</param>
        /// <returns></returns>
        [HttpPost]
        public string DelCustomFromField(string CFF_ID)
        {
            int CFF_ID_ = ParmEncryp.DecryptInt(CFF_ID);
            if (CFF_ID_ == 0)
                return "top.extAlert('非法访问！');";
            CustomFromField entity = bll.GetCustomFromField(CFF_ID_);
            string checkRresult = base.CheckDelGetUsersPerm();
            if (!String.IsNullOrEmpty(checkRresult))
                return checkRresult;
            else if (bll.DelCustomFromField(CFF_ID_))
                return "$('#refreshdataBtn').click();top.extAlert('删除成功！');";
            else
                return "top.extAlert('删除失败！');";
        }
    }
}
