using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace HZC_Report
{
    class AppDataList
    {
        public static int Report_SelectID;
        public static int ReportCount=1;
        public static string UserName;
        public static Boolean Logined;
        public static string Temp_Char;
    }

    class ReportSetting
    {

        public static string[,] ReportID         =   new string[8, AppDataList.ReportCount + 1];
        public static string[,] ReportName       =   new string[8, AppDataList.ReportCount + 1];
        public static string[,] ReportSQL        =   new string[8, AppDataList.ReportCount + 1];

        
        
    }


    
}
