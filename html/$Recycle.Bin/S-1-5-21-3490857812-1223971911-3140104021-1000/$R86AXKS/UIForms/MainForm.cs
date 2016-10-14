using System;
using System.Drawing;
using System.Collections;
using System.ComponentModel;
using System.Windows.Forms;
using System.Data;
using System.IO;
using WeifenLuo.WinFormsUI;


namespace SharpFormEditorDemo
{
	/// <summary>
	/// Summary description for FormMain.
	/// </summary>
	public class MainForm : System.Windows.Forms.Form
	{
		/// <summary>
		/// Required designer variable.
		/// </summary>
		private System.ComponentModel.IContainer components;

		private ToolBox m_toolbox = new ToolBox();
		public static PropertyWindow m_propertyWindow = new PropertyWindow();

		private DockManager dockManager;

		private System.Windows.Forms.MainMenu mainMenu;
		private System.Windows.Forms.MenuItem menuItemView;
		private System.Windows.Forms.MenuItem menuItemPropertyWindow;
		private System.Windows.Forms.MenuItem menuItemToolbox;
		private System.Windows.Forms.MenuItem menuItemWindow;
		private System.Windows.Forms.MenuItem menuItemHelp;
		private System.Windows.Forms.MenuItem menuItemAbout;
		private System.Windows.Forms.MenuItem menuItemTools;
		private System.Windows.Forms.MenuItem menuItemOptions;
		private System.Windows.Forms.MenuItem menuItemToolBar;
		private System.Windows.Forms.MenuItem menuItemStatusBar;

		private System.Windows.Forms.StatusBar statusBar;
		private System.Windows.Forms.ToolBar toolBar;
		private System.Windows.Forms.ToolBarButton toolBarButtonNew;
		private System.Windows.Forms.ToolBarButton toolBarButtonOpen;
		private System.Windows.Forms.ToolBarButton toolBarButtonSeparator;
		private System.Windows.Forms.ToolBarButton toolBarButtonPropertyWindow;
		private System.Windows.Forms.ToolBarButton toolBarButtonToolbox;
		private System.Windows.Forms.ImageList imageList;
		private System.Windows.Forms.MenuItem menuItemFile;
		private System.Windows.Forms.MenuItem menuItemNew;
		private System.Windows.Forms.MenuItem menuItemOpen;
		private System.Windows.Forms.MenuItem menuItemClose;
		private System.Windows.Forms.MenuItem menuItemCloseAll;
		private System.Windows.Forms.MenuItem menuItemExit;
		private System.Windows.Forms.MenuItem menuItem2;
		private System.Windows.Forms.ToolBarButton toolBarButtonSave;
		private System.Windows.Forms.ToolBarButton toolBarButtonUndo;
		private System.Windows.Forms.ToolBarButton toolBarButtonRedo;
		private System.Windows.Forms.ToolBarButton toolBarButtonSeperator1;
		private System.Windows.Forms.ToolBarButton toolBarButtonSeperator2;
		private System.Windows.Forms.ToolBarButton toolBarButtonCut;
		private System.Windows.Forms.ToolBarButton toolBarButtonCopy;
		private System.Windows.Forms.ToolBarButton toolBarButtonPaste;
		private System.Windows.Forms.ToolBarButton toolBarButtonDelete;
		private System.Windows.Forms.MenuItem menuItemSave;
		private System.Windows.Forms.MenuItem menuItem1;

	
		public MainForm()
		{
			//
			// Required for Windows Form Designer support
			//
			InitializeComponent();
			dockManager.ActiveDocumentChanged += new System.EventHandler(this.dockManager_ActiveDocumentChanged);

			//
			// TODO: Add any constructor code after InitializeComponent call
			//
		}

		/// <summary>
		/// Clean up any resources being used.
		/// </summary>
		protected override void Dispose( bool disposing )
		{
			if( disposing )
			{
				if (components != null) 
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
			this.components = new System.ComponentModel.Container();
			System.Resources.ResourceManager resources = new System.Resources.ResourceManager(typeof(MainForm));
			this.mainMenu = new System.Windows.Forms.MainMenu();
			this.menuItemFile = new System.Windows.Forms.MenuItem();
			this.menuItemNew = new System.Windows.Forms.MenuItem();
			this.menuItemOpen = new System.Windows.Forms.MenuItem();
			this.menuItemSave = new System.Windows.Forms.MenuItem();
			this.menuItemClose = new System.Windows.Forms.MenuItem();
			this.menuItemCloseAll = new System.Windows.Forms.MenuItem();
			this.menuItem1 = new System.Windows.Forms.MenuItem();
			this.menuItemExit = new System.Windows.Forms.MenuItem();
			this.menuItemView = new System.Windows.Forms.MenuItem();
			this.menuItemPropertyWindow = new System.Windows.Forms.MenuItem();
			this.menuItemToolbox = new System.Windows.Forms.MenuItem();
			this.menuItem2 = new System.Windows.Forms.MenuItem();
			this.menuItemToolBar = new System.Windows.Forms.MenuItem();
			this.menuItemStatusBar = new System.Windows.Forms.MenuItem();
			this.menuItemTools = new System.Windows.Forms.MenuItem();
			this.menuItemOptions = new System.Windows.Forms.MenuItem();
			this.menuItemWindow = new System.Windows.Forms.MenuItem();
			this.menuItemHelp = new System.Windows.Forms.MenuItem();
			this.menuItemAbout = new System.Windows.Forms.MenuItem();
			this.dockManager = new WeifenLuo.WinFormsUI.DockManager();
			this.statusBar = new System.Windows.Forms.StatusBar();
			this.toolBar = new System.Windows.Forms.ToolBar();
			this.toolBarButtonNew = new System.Windows.Forms.ToolBarButton();
			this.toolBarButtonOpen = new System.Windows.Forms.ToolBarButton();
			this.toolBarButtonSave = new System.Windows.Forms.ToolBarButton();
			this.toolBarButtonSeparator = new System.Windows.Forms.ToolBarButton();
			this.toolBarButtonUndo = new System.Windows.Forms.ToolBarButton();
			this.toolBarButtonRedo = new System.Windows.Forms.ToolBarButton();
			this.toolBarButtonSeperator1 = new System.Windows.Forms.ToolBarButton();
			this.toolBarButtonCut = new System.Windows.Forms.ToolBarButton();
			this.toolBarButtonCopy = new System.Windows.Forms.ToolBarButton();
			this.toolBarButtonPaste = new System.Windows.Forms.ToolBarButton();
			this.toolBarButtonDelete = new System.Windows.Forms.ToolBarButton();
			this.toolBarButtonSeperator2 = new System.Windows.Forms.ToolBarButton();
			this.toolBarButtonToolbox = new System.Windows.Forms.ToolBarButton();
			this.toolBarButtonPropertyWindow = new System.Windows.Forms.ToolBarButton();
			this.imageList = new System.Windows.Forms.ImageList(this.components);
			this.SuspendLayout();
			// 
			// mainMenu
			// 
			this.mainMenu.MenuItems.AddRange(new System.Windows.Forms.MenuItem[] {
																					 this.menuItemFile,
																					 this.menuItemView,
																					 this.menuItemTools,
																					 this.menuItemWindow,
																					 this.menuItemHelp});
			// 
			// menuItemFile
			// 
			this.menuItemFile.Index = 0;
			this.menuItemFile.MenuItems.AddRange(new System.Windows.Forms.MenuItem[] {
																						 this.menuItemNew,
																						 this.menuItemOpen,
																						 this.menuItemSave,
																						 this.menuItemClose,
																						 this.menuItemCloseAll,
																						 this.menuItem1,
																						 this.menuItemExit});
			this.menuItemFile.Text = "&File";
			// 
			// menuItemNew
			// 
			this.menuItemNew.Index = 0;
			this.menuItemNew.Text = "&New";
			this.menuItemNew.Click += new System.EventHandler(this.menuItemNew_Click);
			// 
			// menuItemOpen
			// 
			this.menuItemOpen.Enabled = false;
			this.menuItemOpen.Index = 1;
			this.menuItemOpen.Text = "&Open...";
			// 
			// menuItemSave
			// 
			this.menuItemSave.Enabled = false;
			this.menuItemSave.Index = 2;
			this.menuItemSave.Text = "&Save";
			// 
			// menuItemClose
			// 
			this.menuItemClose.Index = 3;
			this.menuItemClose.Text = "&Close";
			this.menuItemClose.Click += new System.EventHandler(this.menuItemClose_Click);
			// 
			// menuItemCloseAll
			// 
			this.menuItemCloseAll.Index = 4;
			this.menuItemCloseAll.Text = "Close &All";
			this.menuItemCloseAll.Click += new System.EventHandler(this.menuItemCloseAll_Click);
			// 
			// menuItem1
			// 
			this.menuItem1.Index = 5;
			this.menuItem1.Text = "-";
			// 
			// menuItemExit
			// 
			this.menuItemExit.Index = 6;
			this.menuItemExit.Text = "&Exit";
			this.menuItemExit.Click += new System.EventHandler(this.menuItemExit_Click);
			// 
			// menuItemView
			// 
			this.menuItemView.Index = 1;
			this.menuItemView.MenuItems.AddRange(new System.Windows.Forms.MenuItem[] {
																						 this.menuItemPropertyWindow,
																						 this.menuItemToolbox,
																						 this.menuItem2,
																						 this.menuItemToolBar,
																						 this.menuItemStatusBar});
			this.menuItemView.MergeOrder = 2;
			this.menuItemView.Text = "&View";
			// 
			// menuItemPropertyWindow
			// 
			this.menuItemPropertyWindow.Index = 0;
			this.menuItemPropertyWindow.Text = "&Property Window";
			this.menuItemPropertyWindow.Click += new System.EventHandler(this.menuItemPropertyWindow_Click);
			// 
			// menuItemToolbox
			// 
			this.menuItemToolbox.Index = 1;
			this.menuItemToolbox.Text = "&Toolbox";
			this.menuItemToolbox.Click += new System.EventHandler(this.menuItemToolbox_Click);
			// 
			// menuItem2
			// 
			this.menuItem2.Index = 2;
			this.menuItem2.Text = "-";
			// 
			// menuItemToolBar
			// 
			this.menuItemToolBar.Checked = true;
			this.menuItemToolBar.Index = 3;
			this.menuItemToolBar.Text = "Tool Bar";
			this.menuItemToolBar.Click += new System.EventHandler(this.menuItemToolBar_Click);
			// 
			// menuItemStatusBar
			// 
			this.menuItemStatusBar.Checked = true;
			this.menuItemStatusBar.Index = 4;
			this.menuItemStatusBar.Text = "Status Bar";
			this.menuItemStatusBar.Click += new System.EventHandler(this.menuItemStatusBar_Click);
			// 
			// menuItemTools
			// 
			this.menuItemTools.Index = 2;
			this.menuItemTools.MenuItems.AddRange(new System.Windows.Forms.MenuItem[] {
																						  this.menuItemOptions});
			this.menuItemTools.MergeOrder = 3;
			this.menuItemTools.Text = "&Tools";
			// 
			// menuItemOptions
			// 
			this.menuItemOptions.Index = 0;
			this.menuItemOptions.Text = "Options...";
			// 
			// menuItemWindow
			// 
			this.menuItemWindow.Index = 3;
			this.menuItemWindow.MdiList = true;
			this.menuItemWindow.MergeOrder = 4;
			this.menuItemWindow.Text = "&Window";
			// 
			// menuItemHelp
			// 
			this.menuItemHelp.Index = 4;
			this.menuItemHelp.MenuItems.AddRange(new System.Windows.Forms.MenuItem[] {
																						 this.menuItemAbout});
			this.menuItemHelp.MergeOrder = 5;
			this.menuItemHelp.Text = "&Help";
			// 
			// menuItemAbout
			// 
			this.menuItemAbout.Index = 0;
			this.menuItemAbout.Text = "&About SharpFormEditorDemo...";
			this.menuItemAbout.Click += new System.EventHandler(this.menuItemAbout_Click);
			// 
			// dockManager
			// 
			this.dockManager.ActiveAutoHideContent = null;
			this.dockManager.Dock = System.Windows.Forms.DockStyle.Fill;
			this.dockManager.Location = new System.Drawing.Point(0, 28);
			this.dockManager.Name = "dockManager";
			this.dockManager.Size = new System.Drawing.Size(853, 600);
			this.dockManager.TabIndex = 1;
			// 
			// statusBar
			// 
			this.statusBar.Location = new System.Drawing.Point(0, 628);
			this.statusBar.Name = "statusBar";
			this.statusBar.ShowPanels = true;
			this.statusBar.Size = new System.Drawing.Size(853, 22);
			this.statusBar.TabIndex = 4;
			// 
			// toolBar
			// 
			this.toolBar.Appearance = System.Windows.Forms.ToolBarAppearance.Flat;
			this.toolBar.Buttons.AddRange(new System.Windows.Forms.ToolBarButton[] {
																					   this.toolBarButtonNew,
																					   this.toolBarButtonOpen,
																					   this.toolBarButtonSave,
																					   this.toolBarButtonSeparator,
																					   this.toolBarButtonUndo,
																					   this.toolBarButtonRedo,
																					   this.toolBarButtonSeperator1,
																					   this.toolBarButtonCut,
																					   this.toolBarButtonCopy,
																					   this.toolBarButtonPaste,
																					   this.toolBarButtonDelete,
																					   this.toolBarButtonSeperator2,
																					   this.toolBarButtonToolbox,
																					   this.toolBarButtonPropertyWindow});
			this.toolBar.DropDownArrows = true;
			this.toolBar.ImageList = this.imageList;
			this.toolBar.Location = new System.Drawing.Point(0, 0);
			this.toolBar.Name = "toolBar";
			this.toolBar.ShowToolTips = true;
			this.toolBar.Size = new System.Drawing.Size(853, 28);
			this.toolBar.TabIndex = 6;
			this.toolBar.ButtonClick += new System.Windows.Forms.ToolBarButtonClickEventHandler(this.toolBar_ButtonClick);
			// 
			// toolBarButtonNew
			// 
			this.toolBarButtonNew.ImageIndex = 0;
			this.toolBarButtonNew.ToolTipText = "New";
			// 
			// toolBarButtonOpen
			// 
			this.toolBarButtonOpen.ImageIndex = 1;
			this.toolBarButtonOpen.ToolTipText = "Open";
			// 
			// toolBarButtonSave
			// 
			this.toolBarButtonSave.ImageIndex = 2;
			// 
			// toolBarButtonSeparator
			// 
			this.toolBarButtonSeparator.Style = System.Windows.Forms.ToolBarButtonStyle.Separator;
			// 
			// toolBarButtonUndo
			// 
			this.toolBarButtonUndo.Enabled = false;
			this.toolBarButtonUndo.ImageIndex = 3;
			// 
			// toolBarButtonRedo
			// 
			this.toolBarButtonRedo.Enabled = false;
			this.toolBarButtonRedo.ImageIndex = 4;
			// 
			// toolBarButtonSeperator1
			// 
			this.toolBarButtonSeperator1.Style = System.Windows.Forms.ToolBarButtonStyle.Separator;
			// 
			// toolBarButtonCut
			// 
			this.toolBarButtonCut.ImageIndex = 5;
			// 
			// toolBarButtonCopy
			// 
			this.toolBarButtonCopy.ImageIndex = 6;
			// 
			// toolBarButtonPaste
			// 
			this.toolBarButtonPaste.ImageIndex = 7;
			// 
			// toolBarButtonDelete
			// 
			this.toolBarButtonDelete.ImageIndex = 8;
			// 
			// toolBarButtonSeperator2
			// 
			this.toolBarButtonSeperator2.Style = System.Windows.Forms.ToolBarButtonStyle.Separator;
			// 
			// toolBarButtonToolbox
			// 
			this.toolBarButtonToolbox.ImageIndex = 10;
			this.toolBarButtonToolbox.ToolTipText = "Tool Box";
			// 
			// toolBarButtonPropertyWindow
			// 
			this.toolBarButtonPropertyWindow.ImageIndex = 9;
			this.toolBarButtonPropertyWindow.ToolTipText = "Property Window";
			// 
			// imageList
			// 
			this.imageList.ImageSize = new System.Drawing.Size(16, 16);
			this.imageList.ImageStream = ((System.Windows.Forms.ImageListStreamer)(resources.GetObject("imageList.ImageStream")));
			this.imageList.TransparentColor = System.Drawing.Color.Silver;
			// 
			// MainForm
			// 
			this.AutoScaleBaseSize = new System.Drawing.Size(5, 13);
			this.ClientSize = new System.Drawing.Size(853, 650);
			this.Controls.Add(this.dockManager);
			this.Controls.Add(this.toolBar);
			this.Controls.Add(this.statusBar);
			this.IsMdiContainer = true;
			this.Menu = this.mainMenu;
			this.Name = "MainForm";
			this.StartPosition = System.Windows.Forms.FormStartPosition.CenterScreen;
			this.Text = "SharpFormEditorDemo";
			this.WindowState = System.Windows.Forms.FormWindowState.Maximized;
			this.Closing += new System.ComponentModel.CancelEventHandler(this.MainForm_Closing);
			this.Load += new System.EventHandler(this.MainForm_Load);
			this.ResumeLayout(false);

		}
		#endregion

		/// <summary>
		/// The main entry point for the application.
		/// </summary>
		[STAThread]
		static void Main() 
		{
			Application.Run(new MainForm());

		}

		private void MainForm_Load(object sender, System.EventArgs e)
		{
			InitToolBox();

			try
			{//restore the layout from config file
				string configFile = Path.Combine(Path.GetDirectoryName(Application.ExecutablePath), "SharpFormEditorDemo.config");
				if (File.Exists(configFile))
					dockManager.LoadFromXml(configFile, new GetContentCallback(GetContentFromPersistString));
                else{
                    m_toolbox.Show(dockManager);			
                    m_propertyWindow.Show(dockManager);	
                }
			}
			catch(Exception ex)
			{
				System.Diagnostics.Trace.WriteLine(ex.Message);
			}								
			
			menuItemNew_Click(null,null);//new a DesignerFrame			
			
			//register the message filter
			MessageFilter.frmMain = this;
			Application.AddMessageFilter(MessageFilter.msgFilter);
			
		}

		private void InitToolBox()
		{
			m_toolbox = new ToolBox();
			m_toolbox.AddTab("Windows Forms",0);

			m_toolbox[0].AddItem("Label",0,true,typeof(Label).Namespace);
			m_toolbox[0].AddItem("TextBox",0,true,typeof(TextBox).Namespace);
			m_toolbox[0].AddItem("PictureBox",0,true,typeof(PictureBox).Namespace);
			m_toolbox[0].AddItem("ListView",0,true,typeof(ListView).Namespace);
			m_toolbox[0].AddItem("ComboBox",0,true,typeof(ComboBox).Namespace);
			m_toolbox[0].AddItem("Button",0,true,typeof(Button).Namespace);
			m_toolbox[0].AddItem("CheckBox",0,true,typeof(CheckBox).Namespace);
			m_toolbox[0].AddItem("DateTimePicker",0,true,typeof(DateTimePicker).Namespace);
			m_toolbox[0].AddItem("GroupBox",0,true,typeof(GroupBox).Namespace);
			m_toolbox[0].AddItem("Panel",0,true,typeof(Panel).Namespace);
			m_toolbox[0].AddItem("RadioButton",0,true,typeof(RadioButton).Namespace);
			m_toolbox[0].AddItem("TabControl",0,true,typeof(TabControl).Namespace);
			m_toolbox[0].AddItem("MonthCalender",0,true,typeof(MonthCalendar).Namespace);
			m_toolbox[0].AddItem("ProgressBar",0,true,typeof(ProgressBar).Namespace);
			m_toolbox[0].AddItem("RichTextBox",0,true,typeof(RichTextBox).Namespace);
			m_toolbox[0].AddItem("TreeView",0,true,typeof(TreeView).Namespace);
			m_toolbox[0].AddItem("TrackBar",0,true,typeof(TrackBar).Namespace);
			m_toolbox[0].AddItem("NumericUpDown",0,true,typeof(NumericUpDown).Namespace);
			m_toolbox[0].AddItem("DomainUpDown",0,true,typeof(DomainUpDown).Namespace);
			m_toolbox[0].AddItem("VScrollBar",0,true,typeof(VScrollBar).Namespace);
			m_toolbox[0].AddItem("HScrollBar",0,true,typeof(HScrollBar).Namespace);
			m_toolbox[0].AddItem("ListBox",0,true,typeof(ListBox).Namespace);
			m_toolbox[0].AddItem("CheckedListBox",0,true,typeof(CheckedListBox).Namespace);

	
			m_toolbox.Font = new Font("Arial",8);
			m_toolbox.BackColor = SystemColors.Control;
			m_toolbox.ItemSelectedColor = Color.LightGray;
		}

		private void menuItemExit_Click(object sender, System.EventArgs e)
		{
			Close();
			Application.Exit();
		}

		private void menuItemPropertyWindow_Click(object sender, System.EventArgs e)
		{
			m_propertyWindow.Show(dockManager);
		}

		private void menuItemToolbox_Click(object sender, System.EventArgs e)
		{
			m_toolbox.Show(dockManager);
		}

		private void menuItemAbout_Click(object sender, System.EventArgs e)
		{
			AboutDialog aboutDialog = new AboutDialog();
			aboutDialog.ShowDialog(this);		
		}

		private Content FindContent(string text)
		{
			Content[] documents = dockManager.Documents;

			foreach (Content c in documents)
				if (c.Text == text)
					return c;

			return null;
		}

		private void menuItemNew_Click(object sender, System.EventArgs e)
		{
			DesignerFrame frm = new DesignerFrame();

			int count = 1;
			string text = frm.Text + count.ToString();
			while (FindContent(text) != null)
			{
				count ++;
				text = frm.Text + count.ToString();
			}
			frm.Text = text;
			frm.Show(dockManager);
			
		}

		private DesignerFrame FindDesignerFrame(string text)
		{
			Content[] documents = dockManager.Documents;

			foreach (Content c in documents)
			{
				DesignerFrame frm = c as DesignerFrame;
				if(frm != null)
				{
					if(frm.FileName == text)
						return frm;
				}
			}
			return null;
		}

	
		private void menuItemClose_Click(object sender, System.EventArgs e)
		{
			if (dockManager.ActiveDocument != null)
				dockManager.ActiveDocument.Close();
		}

		private void menuItemCloseAll_Click(object sender, System.EventArgs e)
		{
			foreach (Content c in dockManager.Documents)
				c.Close();
		}

		private void dockManager_ActiveDocumentChanged(object sender, System.EventArgs e)
		{
			DesignerFrame frmFrame = dockManager.ActiveDocument as DesignerFrame;
			if(frmFrame != null && m_propertyWindow != null)
			{
				frmFrame.UpdatePropertyWindow();

			}		
		}

		private Content GetContentFromPersistString(string persistString)
		{			
			if (persistString == typeof(PropertyWindow).ToString())
				return m_propertyWindow;
			else if (persistString == typeof(ToolBox).ToString())
				return m_toolbox;			
			else
				return null;
		}


		private void MainForm_Closing(object sender, System.ComponentModel.CancelEventArgs e)
		{
			menuItemCloseAll_Click(null,null);
			string configFile = Path.Combine(Path.GetDirectoryName(Application.ExecutablePath), "SharpFormEditorDemo.config");
			dockManager.SaveAsXml(configFile);
		}

		private void menuItemToolBar_Click(object sender, System.EventArgs e)
		{
			toolBar.Visible = menuItemToolBar.Checked = !menuItemToolBar.Checked;
		}

		private void menuItemStatusBar_Click(object sender, System.EventArgs e)
		{
			statusBar.Visible = menuItemStatusBar.Checked = !menuItemStatusBar.Checked;
		}

		private void toolBar_ButtonClick(object sender, System.Windows.Forms.ToolBarButtonClickEventArgs e)
		{
			if (e.Button == toolBarButtonNew)
				menuItemNew_Click(null, null);
			else if (e.Button == toolBarButtonPropertyWindow)
				menuItemPropertyWindow_Click(null, null);
			else if (e.Button == toolBarButtonToolbox)
				menuItemToolbox_Click(null, null);	
			else
			{
				DesignerFrame frmFrame = (DesignerFrame)dockManager.ActiveDocument;
				if(frmFrame == null) return;
				//
				if(e.Button == toolBarButtonCut)
					frmFrame.menuItemCut_Click(null,null);
				else if(e.Button == toolBarButtonCopy)
					frmFrame.menuItemCopy_Click(null,null);
				else if(e.Button == toolBarButtonPaste)
					frmFrame.menuItemPaste_Click(null,null);
				else if(e.Button == toolBarButtonDelete)
					frmFrame.menuItemDelete_Click(null,null);
			}
				
		}

	}
}
