namespace HZC_Report
{
    partial class MainReport
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要修改
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(MainReport));
            this.button1 = new System.Windows.Forms.Button();
            this.dataGridView1 = new System.Windows.Forms.DataGridView();
            this.richTextBox1 = new System.Windows.Forms.RichTextBox();
            this.button2 = new System.Windows.Forms.Button();
            this.button3 = new System.Windows.Forms.Button();
            this.printDocument1 = new System.Drawing.Printing.PrintDocument();
            this.printPreviewDialog1 = new System.Windows.Forms.PrintPreviewDialog();
            this.pageSetupDialog1 = new System.Windows.Forms.PageSetupDialog();
            this.printDialog1 = new System.Windows.Forms.PrintDialog();
            this.button4 = new System.Windows.Forms.Button();
            this.button5 = new System.Windows.Forms.Button();
            this.checkBox1 = new System.Windows.Forms.CheckBox();
            this.menuStrip1 = new System.Windows.Forms.MenuStrip();
            this.LoginMenu1 = new System.Windows.Forms.ToolStripMenuItem();
            this.LogoutAPP = new System.Windows.Forms.ToolStripMenuItem();
            this.ExitApp = new System.Windows.Forms.ToolStripMenuItem();
            this.选择脚本ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.脚本ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.数据库1ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.数据库2ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.数据库2ToolStripMenuItem1 = new System.Windows.Forms.ToolStripMenuItem();
            this.报表ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.测试表单1ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.测试表单2ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.报表设置ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.报表1ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.报表2ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.报表2ToolStripMenuItem1 = new System.Windows.Forms.ToolStripMenuItem();
            this.打印设置ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.纸张设置ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            this.页面设置ToolStripMenuItem = new System.Windows.Forms.ToolStripMenuItem();
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).BeginInit();
            this.menuStrip1.SuspendLayout();
            this.SuspendLayout();
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(24, 42);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(75, 23);
            this.button1.TabIndex = 0;
            this.button1.Text = "提取数据";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // dataGridView1
            // 
            this.dataGridView1.Anchor = ((System.Windows.Forms.AnchorStyles)((((System.Windows.Forms.AnchorStyles.Top | System.Windows.Forms.AnchorStyles.Bottom) 
            | System.Windows.Forms.AnchorStyles.Left) 
            | System.Windows.Forms.AnchorStyles.Right)));
            this.dataGridView1.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.AutoSize;
            this.dataGridView1.Location = new System.Drawing.Point(24, 80);
            this.dataGridView1.Name = "dataGridView1";
            this.dataGridView1.RowTemplate.Height = 23;
            this.dataGridView1.Size = new System.Drawing.Size(1312, 504);
            this.dataGridView1.TabIndex = 1;
            // 
            // richTextBox1
            // 
            this.richTextBox1.Location = new System.Drawing.Point(603, 38);
            this.richTextBox1.Name = "richTextBox1";
            this.richTextBox1.Size = new System.Drawing.Size(437, 31);
            this.richTextBox1.TabIndex = 2;
            this.richTextBox1.Text = "";
            // 
            // button2
            // 
            this.button2.Location = new System.Drawing.Point(409, 42);
            this.button2.Name = "button2";
            this.button2.Size = new System.Drawing.Size(75, 23);
            this.button2.TabIndex = 3;
            this.button2.Text = "打印预览";
            this.button2.UseVisualStyleBackColor = true;
            this.button2.Click += new System.EventHandler(this.button2_Click);
            // 
            // button3
            // 
            this.button3.Location = new System.Drawing.Point(506, 42);
            this.button3.Name = "button3";
            this.button3.Size = new System.Drawing.Size(75, 23);
            this.button3.TabIndex = 4;
            this.button3.Text = "直接打印";
            this.button3.UseVisualStyleBackColor = true;
            this.button3.Click += new System.EventHandler(this.button3_Click);
            // 
            // printDocument1
            // 
            this.printDocument1.PrintPage += new System.Drawing.Printing.PrintPageEventHandler(this.printDocument1_PrintPage);
            // 
            // printPreviewDialog1
            // 
            this.printPreviewDialog1.AutoScrollMargin = new System.Drawing.Size(0, 0);
            this.printPreviewDialog1.AutoScrollMinSize = new System.Drawing.Size(0, 0);
            this.printPreviewDialog1.ClientSize = new System.Drawing.Size(400, 300);
            this.printPreviewDialog1.Enabled = true;
            this.printPreviewDialog1.Icon = ((System.Drawing.Icon)(resources.GetObject("printPreviewDialog1.Icon")));
            this.printPreviewDialog1.Name = "printPreviewDialog1";
            this.printPreviewDialog1.Visible = false;

            // 
            // printDialog1
            // 
            this.printDialog1.UseEXDialog = true;
            // 
            // button4
            // 
            this.button4.Location = new System.Drawing.Point(215, 42);
            this.button4.Name = "button4";
            this.button4.Size = new System.Drawing.Size(75, 23);
            this.button4.TabIndex = 5;
            this.button4.Text = "纸张设置";
            this.button4.UseVisualStyleBackColor = true;
            this.button4.Click += new System.EventHandler(this.button4_Click);
            // 
            // button5
            // 
            this.button5.Location = new System.Drawing.Point(312, 42);
            this.button5.Name = "button5";
            this.button5.Size = new System.Drawing.Size(75, 23);
            this.button5.TabIndex = 6;
            this.button5.Text = "打印选项";
            this.button5.UseVisualStyleBackColor = true;
            this.button5.Click += new System.EventHandler(this.button5_Click);
            // 
            // checkBox1
            // 
            this.checkBox1.AutoSize = true;
            this.checkBox1.Location = new System.Drawing.Point(121, 45);
            this.checkBox1.Name = "checkBox1";
            this.checkBox1.Size = new System.Drawing.Size(72, 16);
            this.checkBox1.TabIndex = 7;
            this.checkBox1.Text = "即打即停";
            this.checkBox1.UseVisualStyleBackColor = true;
            // 
            // menuStrip1
            // 
            this.menuStrip1.Items.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.LoginMenu1,
            this.选择脚本ToolStripMenuItem,
            this.打印设置ToolStripMenuItem});
            this.menuStrip1.Location = new System.Drawing.Point(0, 0);
            this.menuStrip1.Name = "menuStrip1";
            this.menuStrip1.Size = new System.Drawing.Size(1370, 25);
            this.menuStrip1.TabIndex = 8;
            this.menuStrip1.Text = "menuStrip1";
            // 
            // LoginMenu1
            // 
            this.LoginMenu1.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.LogoutAPP,
            this.ExitApp});
            this.LoginMenu1.Name = "LoginMenu1";
            this.LoginMenu1.Size = new System.Drawing.Size(44, 21);
            this.LoginMenu1.Text = "登陆";
            
            // 
            // LogoutAPP
            // 
            this.LogoutAPP.Name = "LogoutAPP";
            this.LogoutAPP.Size = new System.Drawing.Size(152, 22);
            this.LogoutAPP.Text = "注销";
            this.LogoutAPP.Click += new System.EventHandler(this.LogoutAPP_Click);
            // 
            // ExitApp
            // 
            this.ExitApp.Name = "ExitApp";
            this.ExitApp.Size = new System.Drawing.Size(152, 22);
            this.ExitApp.Text = "退出";
            this.ExitApp.Click += new System.EventHandler(this.ExitApp_Click);
            // 
            // 选择脚本ToolStripMenuItem
            // 
            this.选择脚本ToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.脚本ToolStripMenuItem,
            this.报表ToolStripMenuItem,
            this.报表设置ToolStripMenuItem});
            this.选择脚本ToolStripMenuItem.Name = "选择脚本ToolStripMenuItem";
            this.选择脚本ToolStripMenuItem.Size = new System.Drawing.Size(68, 21);
            this.选择脚本ToolStripMenuItem.Text = "报表设置";
            
            // 
            // 脚本ToolStripMenuItem
            // 
            this.脚本ToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.数据库1ToolStripMenuItem,
            this.数据库2ToolStripMenuItem,
            this.数据库2ToolStripMenuItem1});
            this.脚本ToolStripMenuItem.Name = "脚本ToolStripMenuItem";
            this.脚本ToolStripMenuItem.Size = new System.Drawing.Size(124, 22);
            this.脚本ToolStripMenuItem.Text = "数据源";
            // 
            // 数据库1ToolStripMenuItem
            // 
            this.数据库1ToolStripMenuItem.Name = "数据库1ToolStripMenuItem";
            this.数据库1ToolStripMenuItem.Size = new System.Drawing.Size(160, 22);
            this.数据库1ToolStripMenuItem.Text = "新建数据库连接";
            // 
            // 数据库2ToolStripMenuItem
            // 
            this.数据库2ToolStripMenuItem.Name = "数据库2ToolStripMenuItem";
            this.数据库2ToolStripMenuItem.Size = new System.Drawing.Size(160, 22);
            this.数据库2ToolStripMenuItem.Text = "数据库1";
            // 
            // 数据库2ToolStripMenuItem1
            // 
            this.数据库2ToolStripMenuItem1.Name = "数据库2ToolStripMenuItem1";
            this.数据库2ToolStripMenuItem1.Size = new System.Drawing.Size(160, 22);
            this.数据库2ToolStripMenuItem1.Text = "数据库2";
            // 
            // 报表ToolStripMenuItem
            // 
            this.报表ToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.测试表单1ToolStripMenuItem,
            this.测试表单2ToolStripMenuItem});
            this.报表ToolStripMenuItem.Name = "报表ToolStripMenuItem";
            this.报表ToolStripMenuItem.Size = new System.Drawing.Size(124, 22);
            this.报表ToolStripMenuItem.Text = "表单";
            // 
            // 测试表单1ToolStripMenuItem
            // 
            this.测试表单1ToolStripMenuItem.Name = "测试表单1ToolStripMenuItem";
            this.测试表单1ToolStripMenuItem.Size = new System.Drawing.Size(131, 22);
            this.测试表单1ToolStripMenuItem.Text = "测试表单1";
            // 
            // 测试表单2ToolStripMenuItem
            // 
            this.测试表单2ToolStripMenuItem.Name = "测试表单2ToolStripMenuItem";
            this.测试表单2ToolStripMenuItem.Size = new System.Drawing.Size(131, 22);
            this.测试表单2ToolStripMenuItem.Text = "测试表单2";
            // 
            // 报表设置ToolStripMenuItem
            // 
            this.报表设置ToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.报表1ToolStripMenuItem,
            this.报表2ToolStripMenuItem,
            this.报表2ToolStripMenuItem1});
            this.报表设置ToolStripMenuItem.Name = "报表设置ToolStripMenuItem";
            this.报表设置ToolStripMenuItem.Size = new System.Drawing.Size(124, 22);
            this.报表设置ToolStripMenuItem.Text = "表单设置";
            // 
            // 报表1ToolStripMenuItem
            // 
            this.报表1ToolStripMenuItem.Name = "报表1ToolStripMenuItem";
            this.报表1ToolStripMenuItem.Size = new System.Drawing.Size(124, 22);
            this.报表1ToolStripMenuItem.Text = "新建报表";
            // 
            // 报表2ToolStripMenuItem
            // 
            this.报表2ToolStripMenuItem.Name = "报表2ToolStripMenuItem";
            this.报表2ToolStripMenuItem.Size = new System.Drawing.Size(124, 22);
            this.报表2ToolStripMenuItem.Text = "报表1";
            // 
            // 报表2ToolStripMenuItem1
            // 
            this.报表2ToolStripMenuItem1.Name = "报表2ToolStripMenuItem1";
            this.报表2ToolStripMenuItem1.Size = new System.Drawing.Size(124, 22);
            this.报表2ToolStripMenuItem1.Text = "报表2";
            // 
            // 打印设置ToolStripMenuItem
            // 
            this.打印设置ToolStripMenuItem.DropDownItems.AddRange(new System.Windows.Forms.ToolStripItem[] {
            this.纸张设置ToolStripMenuItem,
            this.页面设置ToolStripMenuItem});
            this.打印设置ToolStripMenuItem.Name = "打印设置ToolStripMenuItem";
            this.打印设置ToolStripMenuItem.Size = new System.Drawing.Size(68, 21);
            this.打印设置ToolStripMenuItem.Text = "打印设置";
            // 
            // 纸张设置ToolStripMenuItem
            // 
            this.纸张设置ToolStripMenuItem.Name = "纸张设置ToolStripMenuItem";
            this.纸张设置ToolStripMenuItem.Size = new System.Drawing.Size(124, 22);
            this.纸张设置ToolStripMenuItem.Text = "页面设置";
            // 
            // 页面设置ToolStripMenuItem
            // 
            this.页面设置ToolStripMenuItem.Name = "页面设置ToolStripMenuItem";
            this.页面设置ToolStripMenuItem.Size = new System.Drawing.Size(124, 22);
            this.页面设置ToolStripMenuItem.Text = "纸张设置";
            // 
            // MainReport
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(1370, 606);
            this.Controls.Add(this.checkBox1);
            this.Controls.Add(this.button5);
            this.Controls.Add(this.button4);
            this.Controls.Add(this.button3);
            this.Controls.Add(this.button2);
            this.Controls.Add(this.richTextBox1);
            this.Controls.Add(this.dataGridView1);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.menuStrip1);
            this.MainMenuStrip = this.menuStrip1;
            this.Name = "MainReport";
            this.Text = "海汇软件-自定义报表";
            ((System.ComponentModel.ISupportInitialize)(this.dataGridView1)).EndInit();
            this.menuStrip1.ResumeLayout(false);
            this.menuStrip1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.DataGridView dataGridView1;
        private System.Windows.Forms.RichTextBox richTextBox1;
        private System.Windows.Forms.Button button2;
        private System.Windows.Forms.Button button3;
        private System.Drawing.Printing.PrintDocument printDocument1;
        private System.Windows.Forms.PrintPreviewDialog printPreviewDialog1;
        private System.Windows.Forms.PageSetupDialog pageSetupDialog1;
        private System.Windows.Forms.PrintDialog printDialog1;
        private System.Windows.Forms.Button button4;
        private System.Windows.Forms.Button button5;
        private System.Windows.Forms.CheckBox checkBox1;
        private System.Windows.Forms.MenuStrip menuStrip1;
        private System.Windows.Forms.ToolStripMenuItem LoginMenu1;
        private System.Windows.Forms.ToolStripMenuItem 选择脚本ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 脚本ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 数据库1ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 数据库2ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 报表ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 测试表单1ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 测试表单2ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 报表设置ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 报表1ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 报表2ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 打印设置ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem LogoutAPP;
        private System.Windows.Forms.ToolStripMenuItem ExitApp;
        private System.Windows.Forms.ToolStripMenuItem 数据库2ToolStripMenuItem1;
        private System.Windows.Forms.ToolStripMenuItem 报表2ToolStripMenuItem1;
        private System.Windows.Forms.ToolStripMenuItem 纸张设置ToolStripMenuItem;
        private System.Windows.Forms.ToolStripMenuItem 页面设置ToolStripMenuItem;
    }
}

