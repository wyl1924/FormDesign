using System;
using System.Drawing;
using System.Collections;
using System.ComponentModel;
using System.Windows.Forms;
using WeifenLuo.WinFormsUI;

namespace SharpFormEditorDemo
{
	/// <summary>
	/// Summary description for PropertyWindow.
	/// </summary>
	public class PropertyWindow:WeifenLuo.WinFormsUI.Content
	{
		private System.Windows.Forms.PropertyGrid propertyGrid;
		private System.Windows.Forms.ComboBox comboBox;
		/// <summary>
		/// Required designer variable.
		/// </summary>
		private System.ComponentModel.Container components = null;

		public PropertyWindow()
		{
			//
			// Required for Windows Form Designer support
			//
			InitializeComponent();

			//
			// TODO: Add any constructor code after InitializeComponent call
			//

		}
		
		public void SetSelectedObject(Object obj)
		{
			propertyGrid.SelectedObject = obj;		
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
			this.propertyGrid = new System.Windows.Forms.PropertyGrid();
			this.comboBox = new System.Windows.Forms.ComboBox();
			this.SuspendLayout();
			// 
			// propertyGrid
			// 
			this.propertyGrid.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
				| System.Windows.Forms.AnchorStyles.Left) 
				| System.Windows.Forms.AnchorStyles.Right)));
			this.propertyGrid.CommandsVisibleIfAvailable = true;
			this.propertyGrid.LargeButtons = false;
			this.propertyGrid.LineColor = System.Drawing.SystemColors.ScrollBar;
			this.propertyGrid.Location = new System.Drawing.Point(0, 24);
			this.propertyGrid.Name = "propertyGrid";
			this.propertyGrid.Size = new System.Drawing.Size(208, 440);
			this.propertyGrid.TabIndex = 0;
			this.propertyGrid.Text = "PropertyGrid";
			this.propertyGrid.ViewBackColor = System.Drawing.SystemColors.Window;
			this.propertyGrid.ViewForeColor = System.Drawing.SystemColors.WindowText;
			this.propertyGrid.SelectedObjectsChanged += new System.EventHandler(this.propertyGrid_SelectedObjectsChanged);
			// 
			// comboBox
			// 
			this.comboBox.Dock = System.Windows.Forms.DockStyle.Top;
			this.comboBox.DropDownStyle = System.Windows.Forms.ComboBoxStyle.DropDownList;
			this.comboBox.ItemHeight = 13;
			this.comboBox.Location = new System.Drawing.Point(0, 3);
			this.comboBox.Name = "comboBox";
			this.comboBox.Size = new System.Drawing.Size(208, 21);
			this.comboBox.TabIndex = 1;
			// 
			// PropertyWindow
			// 
			this.AllowedStates = ((WeifenLuo.WinFormsUI.ContentStates)(((((WeifenLuo.WinFormsUI.ContentStates.Float | WeifenLuo.WinFormsUI.ContentStates.DockLeft) 
				| WeifenLuo.WinFormsUI.ContentStates.DockRight) 
				| WeifenLuo.WinFormsUI.ContentStates.DockTop) 
				| WeifenLuo.WinFormsUI.ContentStates.DockBottom)));
			this.AutoScaleBaseSize = new System.Drawing.Size(5, 13);
			this.ClientSize = new System.Drawing.Size(208, 462);
			this.Controls.Add(this.comboBox);
			this.Controls.Add(this.propertyGrid);
			this.DockPadding.Bottom = 3;
			this.DockPadding.Top = 3;
			this.HideOnClose = true;
			this.Name = "PropertyWindow";
			this.ShowHint = WeifenLuo.WinFormsUI.DockState.DockRight;
			this.Text = "Properties";
			this.ResumeLayout(false);

		}
		#endregion

		private void propertyGrid_SelectedObjectsChanged(object sender, System.EventArgs e)
		{
			comboBox.Items.Clear();
			comboBox.Items.AddRange(propertyGrid.SelectedObjects);
			comboBox.SelectedIndex = 0 ;
		}

	}
}
