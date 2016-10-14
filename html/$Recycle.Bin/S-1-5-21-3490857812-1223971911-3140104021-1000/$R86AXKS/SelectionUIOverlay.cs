using System;
using System.Collections;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Windows.Forms;

namespace SharpFormEditorDemo
{
	/// <summary>
	/// Summary description for SelectionUIOverlay.
	/// </summary>
	public class SelectionUIOverlay : System.Windows.Forms.Control
	{
		/// <summary>
		/// Required designer variable.
		/// </summary>
		private System.ComponentModel.Container components = null;
		private Form m_Form;
		private RectTracker m_tracker = new RectTracker();
		private FormRectTracker  m_FormTracker = new FormRectTracker();
		private Control m_seletedCtrl = null;

		public SelectionUIOverlay(Form frm)
		{
			m_Form = frm;
			// This call is required by the Windows.Forms Form Designer.
			InitializeComponent();		
			// TODO: Add any initialization after the InitComponent call
		}
	
		/// <summary>
		/// Clean up any resources being used.
		/// </summary>
		protected override void Dispose( bool disposing )
		{
			if( disposing )
			{
				if( components != null )
					components.Dispose();
			}
			base.Dispose( disposing );
		}

		#region Component Designer generated code
		/// <summary>
		/// Required method for Designer support - do not modify 
		/// the contents of this method with the code editor.
		/// </summary>
		private void InitializeComponent()
		{
			components = new System.ComponentModel.Container();
			this.Name = "SelectionUIOverlay";
			this.AllowDrop = true;
			this.MouseDown += new System.Windows.Forms.MouseEventHandler(this.SelectionUIOverlay_MouseDown);
			this.DragDrop += new System.Windows.Forms.DragEventHandler(this.SelectionUIOverlay_DragDrop);
			this.Paint += new System.Windows.Forms.PaintEventHandler(this.SelectionUIOverlay_Paint);
			this.MouseMove += new System.Windows.Forms.MouseEventHandler(this.SelectionUIOverlay_MouseMove);
			this.DragEnter += new System.Windows.Forms.DragEventHandler(this.SelectionUIOverlay_DragEnter);			
			
		}
		#endregion
		
		protected override CreateParams CreateParams 
		{ 
			get 
			{ 
				CreateParams cp=base.CreateParams; 
				cp.ExStyle|=0x00000020; //WS_EX_TRANSPARENT 
				return cp; 

			} 

		} 

		protected override void OnCreateControl()
		{
			base.OnCreateControl ();
			m_FormTracker.m_rect = GetFormRect();
			MainForm.m_propertyWindow.SetSelectedObject(m_Form);
		}

		private Rectangle GetFormRect()
		{
			Rectangle rc = m_Form.Bounds;
			rc = Parent.RectangleToScreen(rc);
			rc = this.RectangleToClient(rc);
			return rc;
		}

		public void UpdatePropertyWindow()
		{
			if(m_seletedCtrl != null)
			{
				MainForm.m_propertyWindow.SetSelectedObject(m_seletedCtrl);
			}
			else
			{
				m_FormTracker.m_rect = GetFormRect();
				MainForm.m_propertyWindow.SetSelectedObject(m_Form);

			}

		}

		protected override void OnPaintBackground(PaintEventArgs pevent) 
		{ 
			//base.OnPaintBackground(pevent); 
		} 

		private void InvalidateEx() 
		{
			Invalidate();
			//let parent redraw the background
			if(Parent==null) 
				return;   
			Rectangle rc=new Rectangle(this.Location,this.Size); 
			Parent.Invalidate(rc,true);	
		
			if(!m_FormTracker.IsEmpty())
			{
				rc = m_FormTracker.m_rect;
				rc = this.RectangleToScreen(rc);
				rc = Parent.RectangleToClient(rc);
				m_Form.SetBounds(rc.Left, rc.Top, rc.Width, rc.Height);
				m_Form.Refresh();
			}

			if(m_seletedCtrl != null)
			{
				rc = m_tracker.m_rect;
				rc = this.RectangleToScreen(rc);
				rc = m_Form.RectangleToClient(rc);
				m_seletedCtrl.SetBounds(rc.Left, rc.Top, rc.Width, rc.Height);
						
				m_seletedCtrl.Refresh();	
			
			}						
	
		}

		private void SelectionUIOverlay_MouseDown(object sender, System.Windows.Forms.MouseEventArgs e)
		{			
			if(e.Button != MouseButtons .Left)
				return;
			//
			Point pt=new Point(e.X,e.Y);			
			Rectangle rcForm = GetFormRect();

			if(rcForm.Contains(pt)){		
				Rectangle rcObject;
				if (m_tracker.HitTest(pt) == RectTracker.TrackerHit.hitNothing) {	
					m_seletedCtrl = null;
					m_tracker.m_rect = new Rectangle(0,0,0,0);
					// just to demonstrate RectTracker::TrackRubberBand
					RectTracker tracker=new RectTracker();
					if (tracker.TrackRubberBand(this, pt, false)){
						// see if rubber band intersects with the doc's tracker		
                        tracker.NormalizeRect(ref tracker.m_rect); 
						Rectangle rectIntersect = tracker.m_rect;
						foreach (Control ctrl in m_Form.Controls){
							rcObject = ctrl.Bounds;
							rcObject = m_Form.RectangleToScreen(rcObject);
							rcObject = this.RectangleToClient(rcObject);
							if(tracker.m_rect.Contains(rcObject)){
								m_tracker.m_rect = rcObject;
								m_seletedCtrl = ctrl;
                                MainForm.m_propertyWindow.SetSelectedObject(m_seletedCtrl);
								break;
							}
						}
					}
					else{
						// No rubber band, see if the point selects an object.
						foreach (Control ctrl in m_Form.Controls){
							rcObject = ctrl.Bounds ;
							rcObject = m_Form.RectangleToScreen(rcObject);
							rcObject = this.RectangleToClient(rcObject);
							if(rcObject.Contains(pt)){
								m_tracker.m_rect = rcObject;
								m_seletedCtrl = ctrl;
								MainForm.m_propertyWindow.SetSelectedObject(ctrl);
								break;
							}
						}
					}
					if(m_seletedCtrl == null){
						MainForm.m_propertyWindow.SetSelectedObject(m_Form);
						m_FormTracker.m_rect = rcForm;
					}
					else{
						m_FormTracker.Clear();
					}
				}
				else if(m_seletedCtrl != null){// normal tracking action, when tracker is hit	
					m_tracker.Track(this, pt, false,null);

				}

			}
			else{
				if(m_seletedCtrl == null){//select the container form	
					MainForm.m_propertyWindow.SetSelectedObject(m_Form);
					if(m_FormTracker.HitTest(pt) == RectTracker.TrackerHit.hitNothing) 
					{
						m_FormTracker.m_rect = rcForm;		
					}
					else if(!m_FormTracker.IsEmpty()) 
					{
						m_FormTracker.Track(this, pt, false,null);
					}
				}
				else{
					m_FormTracker.Clear();
				}
			}
			InvalidateEx();
		}

		private void SelectionUIOverlay_MouseMove(object sender, System.Windows.Forms.MouseEventArgs e)
		{
			Point mousept=new Point(e.X,e.Y);
			if(m_seletedCtrl != null){
				if(!m_tracker.SetCursor(this,0,mousept))
					this.Cursor=Cursors.Arrow;
			}
			else{
				if(!m_FormTracker.SetCursor(this,0,mousept))
					this.Cursor=Cursors.Arrow;
			}		

		}

		private void SelectionUIOverlay_DragEnter(object sender, System.Windows.Forms.DragEventArgs e)
		{
			e.Effect = DragDropEffects.Copy;
		}

		private void SelectionUIOverlay_Paint(object sender, System.Windows.Forms.PaintEventArgs e)
		{
			if(m_seletedCtrl != null)
				m_tracker.Draw(e.Graphics);
			else
				m_FormTracker.Draw(e.Graphics);
			
		}

		private void SelectionUIOverlay_DragDrop(object sender, System.Windows.Forms.DragEventArgs e)
		{
			ToolBoxItem DragData = (ToolBoxItem)e.Data.GetData(typeof(ToolBoxItem));				
			Control ctrl = ControlFactory.CreateControl(DragData.Caption,DragData.Object.ToString()) as Control;
				
			ctrl.Location = m_Form.PointToClient(new Point(e.X,e.Y));							
			if(! (ctrl is DateTimePicker))//DateTimePicker can not set Text property
				ctrl.Text = DragData.Caption;		
			Rectangle rect = ctrl.Bounds;
			rect = m_Form.RectangleToScreen(rect);
			rect = this.RectangleToClient(rect);

			m_Form.Controls.Add(ctrl);
			ctrl.BringToFront();
			m_tracker.m_rect = rect;
			m_seletedCtrl = ctrl;
			m_FormTracker.Clear();
			MainForm.m_propertyWindow.SetSelectedObject(ctrl);

			InvalidateEx();

		}
		
		public void Cut()
		{
			if(m_seletedCtrl != null)
			{
				Copy();
				Delete();
			}

		}

		public void Copy()
		{
			if(m_seletedCtrl != null)
			{				
				ControlFactory.CopyCtrl2ClipBoard(m_seletedCtrl);

			}
		}
		
		public void Paste()
		{			
			Control ctrl = ControlFactory.GetCtrlFromClipBoard() as Control;
			
			Rectangle rcObject = ctrl.Bounds;
			rcObject.Offset(10,10);
			ctrl.SetBounds(rcObject.X,rcObject.Y,rcObject.Width,rcObject.Height);

			m_Form.Controls.Add(ctrl);
			ctrl.BringToFront();
;
			rcObject = m_Form.RectangleToScreen(rcObject);
			rcObject = this.RectangleToClient(rcObject);
			m_tracker.m_rect = rcObject;
			m_seletedCtrl = ctrl;
			MainForm.m_propertyWindow.SetSelectedObject(m_seletedCtrl);

			InvalidateEx();
		}

		public void Delete()
		{
			if(m_seletedCtrl != null)
			{
				m_Form.Controls.Remove(m_seletedCtrl);
				m_seletedCtrl = null;
				MainForm.m_propertyWindow.SetSelectedObject(m_Form);
				m_FormTracker.m_rect = GetFormRect();

				InvalidateEx();
			}
			
		}

	}
}
