using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Threading;
using System.Windows.Forms;


namespace HZC_Report
{
    public partial class LoginBox : Form
    {
        
        public LoginBox()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (PwdBox.Text != "123")
            {
                this.PwdMessage.Text = "密码错误,请重新输入密码!";
            }
            else
            {
                AppDataList.Logined = true;
                AppDataList.UserName = this.UserName.Text;
                this.Hide();
                Form MR = new MainReport();
                MR.ShowDialog();
                this.Close();


            }
        }


  
    }
}
