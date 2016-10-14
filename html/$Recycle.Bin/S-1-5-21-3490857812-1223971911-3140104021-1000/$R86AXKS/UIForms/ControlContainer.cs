using System;
using System.Drawing;
using System.Collections;
using System.ComponentModel;
using System.Windows.Forms;

namespace SharpFormEditorDemo
{
	/// <summary>
	/// Summary description for ControlContainer.
	/// </summary>
	public class ControlContainer : System.Windows.Forms.Form
	{
		/// <summary>
		/// Required designer variable.
		/// </summary>
		private System.ComponentModel.Container components = null;

		public ControlContainer()
		{
			//
			// Required for Windows Form Designer support
			//
			InitializeComponent();

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
			// 
			// ControlContainer
			// 
			this.AutoScaleBaseSize = new System.Drawing.Size(5, 13);
			this.ClientSize = new System.Drawing.Size(416, 462);
			this.Name = "ControlContainer";
			this.Text = "MyForm";
			this.Load += new System.EventHandler(this.ControlContainer_Load);
			this.Paint += new System.Windows.Forms.PaintEventHandler(this.ControlContainer_Paint);

		}
		#endregion

		private void ControlContainer_Load(object sender, System.EventArgs e)
		{
			//MessageFilter.frmCtrlContainer = this;
		}

		private void ControlContainer_Paint(object sender, System.Windows.Forms.PaintEventArgs e)
		{
			if(!this.TopLevel)
				ControlPaint.DrawGrid(e.Graphics,this.ClientRectangle,new Size(8,8),Color.White);
		}
	}
}
