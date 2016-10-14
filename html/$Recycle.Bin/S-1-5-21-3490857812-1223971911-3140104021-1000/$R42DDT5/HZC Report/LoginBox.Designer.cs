namespace HZC_Report
{
    partial class LoginBox
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.PwdBox = new System.Windows.Forms.TextBox();
            this.PwdMessage = new System.Windows.Forms.TextBox();
            this.button1 = new System.Windows.Forms.Button();
            this.UserName = new System.Windows.Forms.TextBox();
            this.textBox1 = new System.Windows.Forms.TextBox();
            this.textBox2 = new System.Windows.Forms.TextBox();
            this.SuspendLayout();
            // 
            // PwdBox
            // 
            this.PwdBox.Location = new System.Drawing.Point(102, 92);
            this.PwdBox.Name = "PwdBox";
            this.PwdBox.PasswordChar = '*';
            this.PwdBox.Size = new System.Drawing.Size(155, 21);
            this.PwdBox.TabIndex = 0;
            // 
            // PwdMessage
            // 
            this.PwdMessage.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.PwdMessage.Location = new System.Drawing.Point(39, 235);
            this.PwdMessage.Name = "PwdMessage";
            this.PwdMessage.ReadOnly = true;
            this.PwdMessage.ShortcutsEnabled = false;
            this.PwdMessage.Size = new System.Drawing.Size(155, 14);
            this.PwdMessage.TabIndex = 1;
            this.PwdMessage.TabStop = false;
            this.PwdMessage.WordWrap = false;
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(75, 147);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(127, 47);
            this.button1.TabIndex = 2;
            this.button1.Text = "登  陆";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // UserName
            // 
            this.UserName.Location = new System.Drawing.Point(102, 39);
            this.UserName.Name = "UserName";
            this.UserName.Size = new System.Drawing.Size(155, 21);
            this.UserName.TabIndex = 3;
            // 
            // textBox1
            // 
            this.textBox1.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.textBox1.Location = new System.Drawing.Point(27, 42);
            this.textBox1.Name = "textBox1";
            this.textBox1.ReadOnly = true;
            this.textBox1.ShortcutsEnabled = false;
            this.textBox1.Size = new System.Drawing.Size(53, 14);
            this.textBox1.TabIndex = 4;
            this.textBox1.TabStop = false;
            this.textBox1.Text = "用户名：";
            this.textBox1.WordWrap = false;
            // 
            // textBox2
            // 
            this.textBox2.BorderStyle = System.Windows.Forms.BorderStyle.None;
            this.textBox2.Location = new System.Drawing.Point(27, 95);
            this.textBox2.Name = "textBox2";
            this.textBox2.ReadOnly = true;
            this.textBox2.ShortcutsEnabled = false;
            this.textBox2.Size = new System.Drawing.Size(53, 14);
            this.textBox2.TabIndex = 5;
            this.textBox2.TabStop = false;
            this.textBox2.Text = "密  码：";
            this.textBox2.WordWrap = false;
            // 
            // LoginBox
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(284, 261);
            this.Controls.Add(this.textBox2);
            this.Controls.Add(this.textBox1);
            this.Controls.Add(this.UserName);
            this.Controls.Add(this.button1);
            this.Controls.Add(this.PwdMessage);
            this.Controls.Add(this.PwdBox);
            this.Name = "LoginBox";
            this.Text = "登陆";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.TextBox PwdBox;
        private System.Windows.Forms.TextBox PwdMessage;
        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.TextBox UserName;
        private System.Windows.Forms.TextBox textBox1;
        private System.Windows.Forms.TextBox textBox2;
    }
}