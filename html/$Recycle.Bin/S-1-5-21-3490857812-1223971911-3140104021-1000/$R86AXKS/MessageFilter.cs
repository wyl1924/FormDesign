using System;
using System.Windows.Forms;
using System.Diagnostics;

namespace SharpFormEditorDemo
{
	/// <summary>
	/// Summary description for MessageFilter.
	/// </summary>
	public class MessageFilter:System.Windows.Forms.IMessageFilter
	{
		public static MessageFilter msgFilter = new MessageFilter();
		public static Form frmMain = null;
		public static Form frmCtrlContainer = null;

		private const int WM_PAINT = 0x000F;

		public MessageFilter()
		{
			//
			// TODO: Add constructor logic here
			//
		}
		#region IMessageFilter Members

		public bool PreFilterMessage(ref System.Windows.Forms.Message m)
		{
			Debug.Assert(frmMain != null);
			Debug.Assert(frmCtrlContainer != null);
		
			Control ctrl = (Control)System.Windows.Forms.Control.FromHandle(m.HWnd);
			if(frmCtrlContainer.Contains(ctrl) && m.Msg == WM_PAINT)
			{
				frmMain.Refresh();//let the main form redraw other sub forms, controls
				return true;//prevent the controls in frmCtrlContainer from being painted
			}
			return false;
		}

		#endregion
	}
}
