using System;
using System.Drawing;
using System.Collections;
using System.ComponentModel;
using System.Windows.Forms;
using WeifenLuo.WinFormsUI;

namespace SharpFormEditorDemo
{
	/// <summary>
	/// Summary description for DesignerFrame.
	/// </summary>
	public class DesignerFrame : WeifenLuo.WinFormsUI.Content
	{
		/// <summary>
		/// Required designer variable.
		/// </summary>
		private System.ComponentModel.Container components = null;
		private ControlContainer ctrlContainer = null;
		private System.Windows.Forms.MainMenu mainMenu;
		private System.Windows.Forms.MenuItem menuItemEdit;
		private System.Windows.Forms.MenuItem menuItemUndo;
		private System.Windows.Forms.MenuItem menuItemRedo;
		private System.Windows.Forms.MenuItem menuItem1;
		private System.Windows.Forms.MenuItem menuItemCut;
		private System.Windows.Forms.MenuItem menuItemCopy;
		private System.Windows.Forms.MenuItem menuItemPaste;
		private System.Windows.Forms.MenuItem menuItemDelete;		
		private System.Windows.Forms.ContextMenu contextMenu;
		private System.Windows.Forms.MenuItem menuItemUndo1;
		private System.Windows.Forms.MenuItem menuItemRedo1;
		private System.Windows.Forms.MenuItem menuItemCut1;
		private System.Windows.Forms.MenuItem menuItem11;
		private System.Windows.Forms.MenuItem menuItemCopy1;
		private System.Windows.Forms.MenuItem menuItemPaste1;
		private System.Windows.Forms.MenuItem menuItemDelete1;

		//
		private SelectionUIOverlay overlay = null;
		private System.Windows.Forms.MenuItem menuItemFormat;
		private System.Windows.Forms.MenuItem menuItemAlign;
		private System.Windows.Forms.MenuItem menuItemMakeSameSize;
		private System.Windows.Forms.MenuItem menuItem5;
		private System.Windows.Forms.MenuItem menuItemFormPreview;
		private string m_fileName = "";

		public DesignerFrame()
		{
			//
			// Required for Windows Form Designer support
			//
			InitializeComponent();
			//
			// TODO: Add any constructor code after InitializeComponent call
			//
			ctrlContainer = new ControlContainer();			
			MessageFilter.frmCtrlContainer = ctrlContainer;
			//
			ctrlContainer.TopLevel = false;//use as a sub form 
			ctrlContainer.Location = new Point(8,8);
			this.Controls.Add(ctrlContainer);
			ctrlContainer.Show();
			
			overlay = new SelectionUIOverlay(ctrlContainer);
			overlay.Bounds = this.Bounds;
			overlay.Anchor = ((AnchorStyles)((AnchorStyles.Bottom | AnchorStyles.Right | AnchorStyles.Left | AnchorStyles.Top)));
			this.Controls.Add(overlay);
			overlay.BringToFront();
			overlay.Show();			
		}

		/// <summary>
		/// Clean up any resources being used.
		/// </summary>
		protected override void Dispose( bool disposing )
		{
			if( disposing )
			{
				if(components != null)
				{
					components.Dispose();
				}
			}
			base.Dispose( disposing );
		}

		#region Windows Form Designer generated code
		/// <summary>
		/// Required method for Designer support - do not modify
		/// the contents of this method with the code editor.
		/// </summary>
		private void InitializeComponent()
		{
			this.mainMenu = new System.Windows.Forms.MainMenu();
			this.menuItemEdit = new System.Windows.Forms.MenuItem();
			this.menuItemUndo = new System.Windows.Forms.MenuItem();
			this.menuItemRedo = new System.Windows.Forms.MenuItem();
			this.menuItem1 = new System.Windows.Forms.MenuItem();
			this.menuItemCut = new System.Windows.Forms.MenuItem();
			this.menuItemCopy = new System.Windows.Forms.MenuItem();
			this.menuItemPaste = new System.Windows.Forms.MenuItem();
			this.menuItemDelete = new System.Windows.Forms.MenuItem();
			this.menuItemFormat = new System.Windows.Forms.MenuItem();
			this.menuItemAlign = new System.Windows.Forms.MenuItem();
			this.menuItemMakeSameSize = new System.Windows.Forms.MenuItem();
			this.menuItem5 = new System.Windows.Forms.MenuItem();
			this.menuItemFormPreview = new System.Windows.Forms.MenuItem();
			this.contextMenu = new System.Windows.Forms.ContextMenu();
			this.menuItemUndo1 = new System.Windows.Forms.MenuItem();
			this.menuItemRedo1 = new System.Windows.Forms.MenuItem();
			this.menuItem11 = new System.Windows.Forms.MenuItem();
			this.menuItemCut1 = new System.Windows.Forms.MenuItem();
			this.menuItemCopy1 = new System.Windows.Forms.MenuItem();
			this.menuItemPaste1 = new System.Windows.Forms.MenuItem();
			this.menuItemDelete1 = new System.Windows.Forms.MenuItem();
			// 
			// mainMenu
			// 
			this.mainMenu.MenuItems.AddRange(new System.Windows.Forms.MenuItem[] {
																					 this.menuItemEdit,
																					 this.menuItemFormat});
			// 
			// menuItemEdit
			// 
			this.menuItemEdit.Index = 0;
			this.menuItemEdit.MenuItems.AddRange(new System.Windows.Forms.MenuItem[] {
																						 this.menuItemUndo,
																						 this.menuItemRedo,
																						 this.menuItem1,
																						 this.menuItemCut,
																						 this.menuItemCopy,
																						 this.menuItemPaste,
																						 this.menuItemDelete});
			this.menuItemEdit.Text = "&Edit";
			// 
			// menuItemUndo
			// 
			this.menuItemUndo.Enabled = false;
			this.menuItemUndo.Index = 0;
			this.menuItemUndo.Text = "&Undo";
			// 
			// menuItemRedo
			// 
			this.menuItemRedo.Enabled = false;
			this.menuItemRedo.Index = 1;
			this.menuItemRedo.Text = "&Redo";
			// 
			// menuItem1
			// 
			this.menuItem1.Index = 2;
			this.menuItem1.Text = "-";
			// 
			// menuItemCut
			// 
			this.menuItemCut.Index = 3;
			this.menuItemCut.Text = "Cu&t";
			this.menuItemCut.Click += new System.EventHandler(this.menuItemCut_Click);
			// 
			// menuItemCopy
			// 
			this.menuItemCopy.Index = 4;
			this.menuItemCopy.Text = "&Copy";
			this.menuItemCopy.Click += new System.EventHandler(this.menuItemCopy_Click);
			// 
			// menuItemPaste
			// 
			this.menuItemPaste.Index = 5;
			this.menuItemPaste.Text = "&Paste";
			this.menuItemPaste.Click += new System.EventHandler(this.menuItemPaste_Click);
			// 
			// menuItemDelete
			// 
			this.menuItemDelete.Index = 6;
			this.menuItemDelete.Text = "&Delete";
			this.menuItemDelete.Click += new System.EventHandler(this.menuItemDelete_Click);
			// 
			// menuItemFormat
			// 
			this.menuItemFormat.Index = 1;
			this.menuItemFormat.MenuItems.AddRange(new System.Windows.Forms.MenuItem[] {
																						   this.menuItemAlign,
																						   this.menuItemMakeSameSize,
																						   this.menuItem5,
																						   this.menuItemFormPreview});
			this.menuItemFormat.Text = "Format";
			// 
			// menuItemAlign
			// 
			this.menuItemAlign.Enabled = false;
			this.menuItemAlign.Index = 0;
			this.menuItemAlign.Text = "Align";
			// 
			// menuItemMakeSameSize
			// 
			this.menuItemMakeSameSize.Enabled = false;
			this.menuItemMakeSameSize.Index = 1;
			this.menuItemMakeSameSize.Text = "Make Same Size";
			// 
			// menuItem5
			// 
			this.menuItem5.Index = 2;
			this.menuItem5.Text = "-";
			// 
			// menuItemFormPreview
			// 
			this.menuItemFormPreview.Enabled = false;
			this.menuItemFormPreview.Index = 3;
			this.menuItemFormPreview.Text = "Form Preview";
			// 
			// contextMenu
			// 
			this.contextMenu.Popup += new System.EventHandler(this.contextMenu_Popup);
			// 
			// menuItemUndo1
			// 
			this.menuItemUndo1.Enabled = false;
			this.menuItemUndo1.Index = -1;
			this.menuItemUndo1.Text = "&Undo";
			// 
			// menuItemRedo1
			// 
			this.menuItemRedo1.Enabled = false;
			this.menuItemRedo1.Index = -1;
			this.menuItemRedo1.Text = "&Redo";
			// 
			// menuItem11
			// 
			this.menuItem11.Index = -1;
			this.menuItem11.Text = "-";
			// 
			// menuItemCut1
			// 
			this.menuItemCut1.Index = -1;
			this.menuItemCut1.Text = "Cu&t";
			this.menuItemCut1.Click += new System.EventHandler(this.menuItemCut_Click);
			// 
			// menuItemCopy1
			// 
			this.menuItemCopy1.Index = -1;
			this.menuItemCopy1.Text = "&Copy";
			this.menuItemCopy1.Click += new System.EventHandler(this.menuItemCopy_Click);
			// 
			// menuItemPaste1
			// 
			this.menuItemPaste1.Index = -1;
			this.menuItemPaste1.Text = "&Paste";
			this.menuItemPaste1.Click += new System.EventHandler(this.menuItemPaste_Click);
			// 
			// menuItemDelete1
			// 
			this.menuItemDelete1.Index = -1;
			this.menuItemDelete1.Text = "&Delete";
			this.menuItemDelete1.Click += new System.EventHandler(this.menuItemDelete_Click);
			// 
			// DesignerFrame
			// 
			this.AllowedStates = WeifenLuo.WinFormsUI.ContentStates.Document;
			this.AutoScaleBaseSize = new System.Drawing.Size(5, 13);
			this.AutoScroll = true;
			this.AutoScrollMargin = new System.Drawing.Size(10, 10);
			this.BackColor = System.Drawing.SystemColors.ActiveCaptionText;
			this.ClientSize = new System.Drawing.Size(536, 457);
			this.ContextMenu = this.contextMenu;
			this.Menu = this.mainMenu;
			this.Name = "DesignerFrame";
			this.Text = "DesignerFrame";

		}
		#endregion

	

		public void UpdatePropertyWindow()
		{
			overlay.UpdatePropertyWindow();
		}

	
		public bool IsFileNameAlreadySet()
		{
			return m_fileName != "";
		}

		private void contextMenu_Popup(object sender, System.EventArgs e)
		{
			this.contextMenu.MenuItems.Clear();
			// 
			// contextMenu
			// 
			this.contextMenu.MenuItems.AddRange(new System.Windows.Forms.MenuItem[] {
																						this.menuItemUndo1,
																						this.menuItemRedo1,
																						this.menuItem11,
																						this.menuItemCut1,
																						this.menuItemCopy1,
																						this.menuItemPaste1,
																						this.menuItemDelete1});
		}

		public void menuItemCut_Click(object sender, System.EventArgs e)
		{
			overlay.Cut();
		}

		public void menuItemCopy_Click(object sender, System.EventArgs e)
		{
			overlay.Copy();
		}

		public void menuItemPaste_Click(object sender, System.EventArgs e)
		{
			overlay.Paste();
		}

		public void menuItemDelete_Click(object sender, System.EventArgs e)
		{
			overlay.Delete();
		}

		public string FileName
		{
			get{
				return m_fileName;
			}
			set{
				m_fileName = value;
			}
		}
	}
}
