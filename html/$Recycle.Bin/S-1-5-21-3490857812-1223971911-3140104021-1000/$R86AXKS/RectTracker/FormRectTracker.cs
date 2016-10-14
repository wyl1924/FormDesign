using System;

namespace SharpFormEditorDemo
{
	/// <summary>
	/// Summary description for FormRectTracker.
	/// </summary>
	public class FormRectTracker:RectTracker
	{
		public FormRectTracker()
		{
			base.Construct();
			m_nHandleSize = 6;
			m_nStyle = StyleFlags.resizeOutside;

		}

		protected override TrackerHit HitTestHandles(System.Drawing.Point point)
		{
			TrackerHit hit = base.HitTestHandles (point);
			switch(hit) {
				case TrackerHit.hitTopLeft:
				case TrackerHit.hitTop:
				case TrackerHit.hitLeft:
				case TrackerHit.hitTopRight:
				case TrackerHit.hitBottomLeft:
				case TrackerHit.hitMiddle:
					hit = TrackerHit.hitNothing;
					break;
			default:
				break;
			}
			return hit;
		}

		public override void Draw(System.Drawing.Graphics gs)
		{
			if(!this.IsEmpty())
				base.Draw (gs);
		}
		
		public void Clear()
		{ 
			m_rect = new System.Drawing.Rectangle(0,0,0,0);
		}

		public bool IsEmpty()
		{
			return m_rect.Equals(new System.Drawing.Rectangle(0,0,0,0));
		}
	}
}
