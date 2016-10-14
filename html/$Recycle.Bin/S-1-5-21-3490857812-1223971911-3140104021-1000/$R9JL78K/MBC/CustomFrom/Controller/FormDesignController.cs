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
using StrokeBase;
namespace CustomFrom
{
    /// <summary>
    /// 表单信息表控制器
    /// </summary>
    public class FormDesignController : ExtendController
    {
        FormDesignBLL bll = new FormDesignBLL();

        /// <summary>
        /// 表单信息表增加
        /// </summary>
        /// <returns></returns>
        [HttpGet]
        public ActionResult FormDesignAdd(string aid ,string acid)
        {
            string checkResult = base.CheckAddGetUsersPerm();
            if (!String.IsNullOrEmpty(checkResult))
                        return Content("<script>" + checkResult + "</script>");
            return View();
        }

        /// <summary>
        /// 表单信息表增加
        /// </summary>
        /// <param name="entity">表单信息表对象</param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult FormDesignAdd(FormDesign entity)
        {
            entity.Aid = ParmEncryp.DecryptInt(Request.Form["aid"]);
            entity.ACid = ParmEncryp.DecryptInt(Request.Form["acid"]);
            ArchivesCases ac = acbll.GetArchivesCases(entity.ACid);
            ActionResult result = base.AddExecuteScript(ac, bll.GetFormDesignListCount, entity, "FormDesign", "表单信息表", "FormDesignAdd");
            if (result != null)
                return result;
            Users u = userHelper.GetUser();
            int flag = bll.AddFormDesign(entity);
            if (flag > 0)
                return pageHelper.AlertCloseWin("FormDesignAdd", "新增成功！");
            else
                return pageHelper.ExtAlert("新增失败！");
        }

        /// <summary>
        /// 表单信息表修改
        /// </summary>
        /// <param name="ID">ID</param>
        /// <returns></returns>
        [HttpGet]
        public ActionResult FormDesignEdit(string ID)
        {
            int ID_ = ParmEncryp.DecryptInt(ID);
            if (ID_ == 0)
                return Content("<script>top.extAlert('非法访问！')</script>");
            ViewBag.ID = ID;
            FormDesign entity = bll.GetFormDesign(ID_);
            string checkResult = base.CheckEditGetUsersPerm("FormDesignEdit", entity);
            if (!String.IsNullOrEmpty(checkResult))
                return Content("<script>" + checkResult + "</script>");
            return View(entity);
        }

        /// <summary>
        /// 表单信息表修改
        /// </summary>
        /// <param name="entity">表单信息表对象</param>
        /// <returns></returns>
        [HttpPost]
        public ActionResult FormDesignEdit(FormDesign entity)
        {
            int ID_ = ParmEncryp.DecryptInt(Request.Form["ID"]);
            if (ID_ == 0)
                return Content("<script>top.extAlert('非法访问！')</script>");
            FormDesign entity_ = bll.GetFormDesign(ID_);
            ActionResult result = base.EditExecuteScript(entity_, Request.Form["ACid"], "FormDesignEdit");
            if (result != null)
                return result;
            Users u = userHelper.GetUser();
            if (bll.UpdFormDesign(entity))
                return pageHelper.AlertCloseWin("FormDesignEdit", "修改成功！");
            else
                return pageHelper.ExtAlert("修改失败！");
        }

        /// <summary>
        /// 表单信息表详情
        /// </summary>
        /// <param name="ID">ID</param>
        /// <returns></returns>
        public ActionResult FormDesignDetail(string ID)
        {
            int ID_ = ParmEncryp.DecryptInt(ID);
            if (ID_ == 0)
                return Content("<script>top.extAlert('非法访问！')</script>");
            FormDesign entity = bll.GetFormDesign(ID_);
            string checkResult = base.CheckDetailGetUsersPerm("ID", ID, "FormDesign", "表单信息表", entity);
            if (!String.IsNullOrEmpty(checkResult))
                return Content("<script>" + checkResult + "</script>");
            Users u = userHelper.GetUser();
            return View(entity);
        }

        /// <summary>
        /// 删除数据 
        /// </summary>
        /// <param name="ID">表单信息表主键</param>
        /// <returns></returns>
        [HttpPost]
        public string DelFormDesign(string ID)
        {
            int ID_ = ParmEncryp.DecryptInt(ID);
            if (ID_ == 0)
                return "top.extAlert('非法访问！');";
            FormDesign entity = bll.GetFormDesign(ID_);
            string checkRresult = base.CheckDelGetUsersPerm();
            if (!String.IsNullOrEmpty(checkRresult))
                return checkRresult;
            else if (bll.DelFormDesign(ID_) && acbll.UpdArchivesCasesDataLog(entity.ACid, "FormDesign", 0))
                return "$('#refreshdataBtn').click();top.extAlert('删除成功！');";
            else
                return "top.extAlert('删除失败！');";
        }
    }
}
