using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Forms;？
using System.Windows.Input;
using System.Xml;



namespace HZC_Report
{

    public partial class MainReport : Form
    {

        
        //初始化设置
        Pen TD_Line = new Pen(Color.Black, 1);
        Font TD_Font = new Font("宋体", 16);

        int left_margin;        //左边距
        int top_margin;         //上边距
        int lineheight;         //行高
        int Font_Padding;       //文字间距

        int PageNum;             //页号
        decimal pageCount;           //页数
        int Page_Row;           //每页行数
        int Page_RowCount;       //数据行计数

        //通用参数   

        string Doc_MainTitle;
        string Doc_subtitle;
        string Doc_Foot;
        int Last_Row;           //
        double Temp_PageCount;

        public MainReport()
        {
            //程序初始化
            InitializeComponent();
            this.LoginMenu1.Text = AppDataList.UserName;

            //初始化数据
            XmlDocument RS = new XmlDocument();
            RS.Load("ReportSetting.xml");

    //        XmlNode RSRoot = RS.GetElementById("0").SelectSingleNode("name");
    //        AppDataList.Temp_Char = RSRoot.Value;

            ShowXml();


        }

        public void ShowXml()
        {
            XmlDocument xmlDoc = new XmlDocument();
            xmlDoc.Load("ReportSetting.xml"); //加载xml文件
            XmlNode xn = xmlDoc.SelectSingleNode("Reports");

            XmlNodeList xnl = xn.ChildNodes;

            foreach (XmlNode xnf in xnl)
            {
                XmlElement xe = (XmlElement)xnf;
                Console.WriteLine(xe.GetAttribute("Report"));//显示属性值 
                Console.WriteLine(xe.GetAttribute("ISBN"));

                XmlNodeList xnf1 = xe.ChildNodes;
                foreach (XmlNode xn2 in xnf1)
                {
                    Console.WriteLine(xn2.InnerText);//显示子节点点文本 
                }
            }
        }

        //提取数据
        private void button1_Click(object sender, EventArgs e)
        {
            //提取数据
            string connstr = "server=s1.hzcrj.com,1999;database=TRQC;user=sa;pwd=hc3232327";
            SqlConnection Conn1 = new SqlConnection(connstr);
            try
            {
                using (Conn1)
                {
                    Conn1.Open();
                    string sql = "select top 30 [存货编码] ,[存货名称],cast(cast([数量] as int) as varchar(50)) as 数量,[计量单位] as 单位 from [InvQC]";
                    SqlCommand Comm1 = new SqlCommand(sql, Conn1);
                    Comm1.CommandTimeout = 20;
                    SqlDataAdapter SDA = new SqlDataAdapter();
                    SDA.SelectCommand = Comm1;
                    DataSet ds = new DataSet();
                    SDA.Fill(ds, "cs");
                    dataGridView1.DefaultCellStyle.Font = new Font("Tahoma", 16);
                    dataGridView1.DataSource = ds.Tables[0];
                    Form pwd = new LoginBox();
                   
                    richTextBox1.Text = "提取成功"+ dataGridView1.Rows[1].Cells[1].Value+"|"+ AppDataList.Temp_Char;
                }
            }
            catch (Exception ex)
            {
                richTextBox1.Text = ex.Message;
            }
            finally
            {
                Conn1.Close();
            }

        }


        //打印预览
        private void button2_Click(object sender, EventArgs e)
        { //基本设置
            TD_Line = new Pen(Color.Black, 1);
            TD_Font = new Font("宋体", 16);

            left_margin = 10;        //左边距
            top_margin = 100;        //上边距
            lineheight = 40;         //行高
            Font_Padding = 10;       //文字间距

            PageNum = 1;             //页号
            pageCount = 1;           //总页数
            Page_Row = 11;           //每页行数
            Page_RowCount = 0;       //数据行计数    初始化为 0

            //数据初始化
            
            Last_Row   = 0;          //

            //获取打印分页总数
            if (checkBox1.Checked)
            {
                MessageBox.Show("即打即停功能暂未开通，请关注程序更新", "即打即停", MessageBoxButtons.OK);
                checkBox1.Checked = false;
            }

            Temp_PageCount = (double)dataGridView1.Rows.Count /(double) Page_Row;
            pageCount =(int)Math.Ceiling(Temp_PageCount);
           


            this.printPreviewDialog1.UseAntiAlias = true;
            this.printPreviewDialog1.Document = this.printDocument1;
            printPreviewDialog1.ShowDialog();
        }



        //打印
        private void button3_Click(object sender, EventArgs e)
        {
            //基本设置
            TD_Line = new Pen(Color.Black, 1);
            TD_Font = new Font("宋体", 16);

            left_margin = 10;        //左边距
            top_margin = 100;        //上边距
            lineheight = 40;         //行高
            Font_Padding = 10;       //文字间距

            PageNum = 1;             //页号
            pageCount = 1;           //总页数
            Page_Row = 11;           //每页行数
            Page_RowCount = 0;       //数据行计数    初始化为 0

            //数据初始化
                   //
            Last_Row = 0;          //

            //获取打印分页总数
            if (checkBox1.Checked)
            {
                MessageBox.Show("即打即停功能暂未开通，请关注程序更新", "即打即停", MessageBoxButtons.OK);
                checkBox1.Checked = false;
            }

            Temp_PageCount = (double)dataGridView1.Rows.Count / (double)Page_Row;
            pageCount = (int)Math.Ceiling(Temp_PageCount);

            if (MessageBox.Show("是否要预览打印文档？", "打印预览", MessageBoxButtons.YesNo) == DialogResult.Yes)
            {
                this.printPreviewDialog1.UseAntiAlias = true;
                this.printPreviewDialog1.Document = this.printDocument1;
                printPreviewDialog1.ShowDialog();
            }
            else
            {
                printDialog1.Document = printDocument1;
                printDialog1.AllowSomePages = true;
                printDialog1.ShowDialog();
                this.printDocument1.Print();
            }         
        }


        //纸张设置
        private void button4_Click(object sender, EventArgs e)
        {
            pageSetupDialog1.Document = printDocument1;
            this.pageSetupDialog1.AllowMargins = true;
            this.pageSetupDialog1.AllowPaper = true;
            this.pageSetupDialog1.AllowPrinter = true;
            this.pageSetupDialog1.ShowDialog();
        }


        //打印设置
        private void button5_Click(object sender, EventArgs e)
        {
            printDialog1.Document = printDocument1;
            printDialog1.AllowSomePages = true;
            printDialog1.ShowDialog();
        }


        //分页打印
        private void printDocument1_PrintPage(object sender, System.Drawing.Printing.PrintPageEventArgs e)
        {
            //打印设置初始化
          

            //以上数据在打印及预览按钮处初始化
            /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


            //数据初始化
            e.HasMorePages = true;
            int[] TR_TopMargin = new int[Page_Row];
            int[] Font_TopMargin = new int[Page_Row];
            
            
            //获取列宽
            int Col_Count = dataGridView1.Columns.Count;                    //总列数-1
            int[] TD_LeftMargin = new int[dataGridView1.Columns.Count];     //列左定位
            int[] TD_Width = new int[dataGridView1.Columns.Count];          //列宽度
            int[] Font_leftMargin = new int[dataGridView1.Columns.Count];   //单元格左定位
            int Table_Width=0;                                              //表格宽度

            for (int w = 0; w < dataGridView1.Columns.Count; w++)
            {
                if (w == 0)
                {
                    TD_LeftMargin[w] = left_margin;
                }
                else
                {
                    TD_LeftMargin[w] = TD_LeftMargin[w - 1] + dataGridView1.Columns[w-1].Width;
                }
                TD_Width[w] = dataGridView1.Columns[w].Width;
                Font_leftMargin[w] = TD_LeftMargin[w] + Font_Padding;
                Table_Width = Table_Width + TD_Width[w];
            }
           
                //页眉、页标题设置

                //表格列标题
                for (int c=0;c< Col_Count;c++)
                {
                    e.Graphics.DrawString(dataGridView1.Columns[c].HeaderText as string, TD_Font, Brushes.Black,Font_leftMargin[c],top_margin+Font_Padding);                          //列标题名
                    e.Graphics.DrawLine(TD_Line, new Point(TD_LeftMargin[c] + TD_Width[c], top_margin), new Point(TD_LeftMargin[c] + TD_Width[c], top_margin + lineheight));          //列标题右表格线
                }
                e.Graphics.DrawLine(TD_Line, new Point(left_margin, top_margin), new Point(left_margin+Table_Width, top_margin));                                                     //列标题上表格线
                e.Graphics.DrawLine(TD_Line, new Point(left_margin, top_margin+lineheight), new Point(left_margin + Table_Width, top_margin+ lineheight));                            //列标题下表格线
                e.Graphics.DrawLine(TD_Line, new Point(left_margin, top_margin), new Point(left_margin, top_margin+lineheight));                                                      //列标题左表格线


                
                //打印行设置
                for (int r = 0;( r < Page_Row) &&( Page_RowCount < dataGridView1.Rows.Count); r++)
                {
                    //获取行位置
                    TR_TopMargin[r] = top_margin + lineheight * (r+1);
                    Font_TopMargin[r] = TR_TopMargin[r] + Font_Padding;

                    //打印列单元格设置
                    for (int c = 0; c < dataGridView1.Columns.Count; c++)
                    {
                        e.Graphics.DrawString(dataGridView1.Rows[Page_RowCount].Cells[c].Value as string, TD_Font, Brushes.Black, TD_LeftMargin[c], Font_TopMargin[r]);                        //数据行
                        e.Graphics.DrawLine(TD_Line, new Point(TD_LeftMargin[c] + TD_Width[c], TR_TopMargin[r]), new Point(TD_LeftMargin[c] + TD_Width[c], TR_TopMargin[r] + lineheight));     //数据行右表格线
                        e.Graphics.DrawLine(TD_Line, new Point(left_margin, TR_TopMargin[r]), new Point(left_margin, TR_TopMargin[r] + lineheight));                                           //数据行左表格线
                     }
                    e.Graphics.DrawLine(TD_Line, new Point(left_margin, TR_TopMargin[r] + lineheight), new Point(left_margin + Table_Width, TR_TopMargin[r] + lineheight));                    //数据行下表格线
                    Page_RowCount++;
                    Last_Row = TR_TopMargin[r] + lineheight*2;
                }

            //页脚设置
            string foot_Page= "打印时间："+ DateTime.Now.ToString()+"  | 第" + PageNum + "页, "+"共" + pageCount + "页 | ";
            e.Graphics.DrawString(foot_Page, TD_Font, Brushes.Black, left_margin+Table_Width/3, Last_Row);

            //分页设置
            if (PageNum >= pageCount)
                {
                    e.HasMorePages = false;
                }
                else
                {
                    e.HasMorePages = true;
                }              
                PageNum++;
        }


    
        //退出软件
        private void ExitApp_Click(object sender, EventArgs e)
        {
            if (MessageBox.Show("确定要退出么？", "退出软件", MessageBoxButtons.YesNo) == DialogResult.Yes)
            {
                Application.Exit();
            }    
        }

        //注销登陆
        private void LogoutAPP_Click(object sender, EventArgs e)
        {
            if (MessageBox.Show("确定要注销登陆用户么？","注销登陆",MessageBoxButtons.YesNo)==DialogResult.Yes)
            {
                AppDataList.Logined = false;
                AppDataList.UserName = " ";
                this.Hide();
                Form MR = new LoginBox();
                MR.ShowDialog();
                this.Close();
            }   
        }
    }
}
