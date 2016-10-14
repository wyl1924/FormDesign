//----------------------------------------------------------------------------
// File    : ToolBox.cs
// Date    : 17/09/2004
// Author  : Aju George
// Email   : aju_george_2002@yahoo.co.in ; george.aju@gmail.com
// 
// Updates :
//          11/06/2004 - DragDelay for toolbox items by Neal Stublen.
//                     - Minor change in PaintItems,DrawPartialItem
//                     - control logic by Neal Stublen
// 
//          11/07/2004 - Context menu with handlers for rename textbox
//                     - Positioning and font for textbox.
//                     - Item state change for both M-buttons on mousedown.
//                     - Timer/Scroll delay get/set methods.
//----------------------------------------------------------------------------
using System;
using System.Drawing;
using System.Drawing.Imaging;
using System.Collections;
using System.ComponentModel;
using System.Windows.Forms;
using System.Runtime.InteropServices;
using WeifenLuo.WinFormsUI;

namespace SharpFormEditorDemo
{
	#region Enumerations
	// The value of the enumerations are the char values
	// of marlett font which will be used to draw scroll arrow
	// for each direction. Only up and down directions are used now.
	public enum ScrollDirection
	{
		Left  = 3,
		Right = 4,
		Up    = 5,
		Down  = 6,
	}
	#endregion //Enumerations

	#region Delegates
	public delegate void TabSelectionChangedHandler  (ToolBoxTab  sender, EventArgs e     );
	public delegate void TabMouseEventHandler        (ToolBoxTab  sender, MouseEventArgs e);
	public delegate void ItemSelectionChangedHandler (ToolBoxItem sender, ToolBoxTab parent, EventArgs e );
	public delegate void ItemMouseEventHandler   (ToolBoxItem sender, ToolBoxTab parent, MouseEventArgs e);
	public delegate void DragDropFinishedHandler (ToolBoxItem sender, DragDropEffects e);
	public delegate bool RenameFinishedHandler   (ToolBoxItem sender, string newCaption, bool bCancelled);

	public delegate void LayoutFinished();
	#endregion //Delegates

	public class ToolObject
	{
		#region Protected Attributes
		protected Rectangle _rectangle;
		protected string    _toolTip;

		#endregion //Protected Attributes

		#region Properties
		//[Browsable(false)]
		[ReadOnly(true)]
		public virtual Rectangle Rectangle
		{
			get{return _rectangle;}
			set{_rectangle=value;}
		}

		[Browsable(false)]
		public virtual Point Location
		{
			get{return _rectangle.Location;}
			set{_rectangle.Location=value;}
		}

		[Browsable(false)]
		public virtual Size Size
		{
			get{return _rectangle.Size;}
			set{_rectangle.Size=value;}
		}

		[Browsable(false)]
		public virtual int X
		{
			get{return _rectangle.X;}
			set{_rectangle.X=value;}
		}

		[Browsable(false)]
		public virtual int Y
		{
			get{return _rectangle.Y;}
			set{_rectangle.Y=value;}
		}

		[Browsable(false)]
		public virtual int Width
		{
			get{return _rectangle.Width;}
			set{_rectangle.Width=value;}
		}

		[Browsable(false)]
		public virtual int Height
		{
			get{return _rectangle.Height;}
			set{_rectangle.Height=value;}
		}

		[Browsable(false)]
		public virtual int Left
		{
			get{return _rectangle.Left;}
		}

		[Browsable(false)]
		public virtual int Right
		{
			get{return _rectangle.Right;}
		}

		[Browsable(false)]
		public virtual int Top
		{
			get{return _rectangle.Top;}
		}

		[Browsable(false)]
		public virtual int Bottom
		{
			get{return _rectangle.Bottom;}
		}

		public virtual string ToolTip
		{
			get{return _toolTip;}
			set{_toolTip=value;}
		}

		#endregion //Properties

		#region Construction
		public ToolObject()
		{
			_rectangle = new Rectangle(0,0,0,0);
			_toolTip   = "";
		}

		public ToolObject(Rectangle rectangle)
		{
			_rectangle = new Rectangle(rectangle.Location,rectangle.Size);
			_toolTip   = "";
		}
		#endregion //Construction
	}

	[TypeConverter(typeof(ExpandableObjectConverter))]
	public class ToolBoxItem : ToolObject
	{
		#region Protected Attributes

		protected ToolBox _parent;
		protected string  _caption;
		protected int     _imageIndex;
		protected bool    _selected;
		protected bool    _enabled;
		protected bool    _mouseDown;
		protected bool    _mouseHover;
		protected bool    _allowDrag;
		protected bool    _isDragging;
		protected bool    _renamable;
		protected bool    _movable;
		protected bool    _deletable;
		protected object  _object;

		protected ToolBoxItem _parentItem;

		// Added by Neal Stublen
		protected Rectangle _dragSafeRect = Rectangle.Empty;

		#endregion //Protected Attributes

		#region Properties

		[Browsable(false)]
		public virtual ToolBox Parent
		{
			get{return _parent;}
			set{_parent=value;}
		}

		[Browsable(false)]
		public virtual ToolBoxItem ParentItem
		{
			get{return _parentItem;}
			set{_parentItem=value;}
		}

		public virtual string Caption
		{
			get{return _caption;}
			set
			{
				if(!value.Equals(_caption))
				{
					_caption=value;
					Invalidate();
				}
			}
		}

		public virtual int ImageIndex
		{
			get{return _imageIndex;}
			set
			{
				if(value != _imageIndex)
				{
					_imageIndex=value;
					Invalidate();
				}
			}
		}

		[Browsable(false)]
		public virtual bool Selected
		{
			get{return _selected;}
			set
			{
				if(value != _selected)
				{
					_selected=value;
					Invalidate();
				}
			}
		}

		[Browsable(false)]
		public virtual bool MouseDown
		{
			get{return _mouseDown;}
			set{_mouseDown=value;}
		}

		[Browsable(false)]
		public virtual bool MouseHover
		{
			get{return _mouseHover;}
			set{_mouseHover=value;}
		}

		public virtual bool Enabled
		{
			get{return _enabled;}
			set
			{
				if(value != _enabled)
				{
					_enabled=value;
					Invalidate();
				}
			}
		}

		public virtual bool AllowDrag
		{
			get{return _allowDrag;}
			set{_allowDrag=value;}
		}

		[Browsable(false)]
		public virtual bool IsDragging
		{
			get{return _isDragging;}
			set{_isDragging = value;}
		}

		public virtual bool Renamable
		{
			get{return _renamable;}
			set{_renamable = value;}
		}

		public virtual bool Movable
		{
			get{return _movable;}
			set{_movable = value;}
		}

		public virtual bool Deletable
		{
			get{return _deletable;}
			set{_deletable = value;}
		}

		public virtual object Object
		{
			get{return _object;}
			set{_object=value;}
		}

		// Added by Neal Stublen
		[Browsable(false)]
		internal virtual Point MouseDownLocation
		{
			set
			{
				_dragSafeRect.Location = value;
				_dragSafeRect.Size     = SystemInformation.DragSize;
				_dragSafeRect.Offset(-SystemInformation.DragSize.Width / 2, -SystemInformation.DragSize.Height / 2);
			}
		}

		#endregion //Properties

		#region Construction

		public ToolBoxItem()
		{
			_parent     = null;
			_imageIndex = -1;
			_caption    = "";
			_enabled    = true;
			_allowDrag  = true;
			_renamable  = true;
			_movable    = true;
			_deletable  = true;
		}

		public ToolBoxItem(string caption, int imageIndex):this()
		{
			_caption    = caption;
			_imageIndex = imageIndex;
		}

		public ToolBoxItem(string caption, int imageIndex, bool allowDrag)
			:this(caption,imageIndex)
		{
			_allowDrag  = allowDrag;
		}
		#endregion //Construction

		#region Public Methods

		public override string ToString()
		{
			return "(ToolBoxItem)";
		}

		public virtual bool HitTest(int x, int y)
		{
			bool bHit;
			ToolBoxTab parentTab = _parentItem as ToolBoxTab;
			Rectangle  rcTemp    = Rectangle.Empty;


			bHit = false;

			if(null != parentTab)
			{
				rcTemp = _rectangle;
				rcTemp.Y += parentTab.ItemArea.Y;
				bHit   = rcTemp.Contains(x,y);
			}
			else
			{
				bHit = _rectangle.Contains(x,y);
			}

			return bHit;
		}

		public virtual void CancelHover()
		{
			if(_mouseHover)
			{
				_mouseHover = false;
				Invalidate();
			}
		}

		public virtual void Rename()
		{
			_parent.RenameItem(this);
		}

		// Added by Neal Stublen
		public virtual bool CanStartDrag(int x, int y)
		{
			return AllowDrag && !_dragSafeRect.Contains(x, y);
		}

		public void Invalidate()
		{

			ToolBoxTab parentTab = _parentItem as ToolBoxTab;
			Rectangle  rcTemp    = Rectangle.Empty;

			if(null != _parent)
			{
				if(null != parentTab)
				{
					rcTemp = _rectangle;
					rcTemp.Y += parentTab.ItemArea.Y;
					rcTemp.Inflate(+1,+1);
					_parent.Invalidate(rcTemp);
				}
				else
				{
					_parent.Invalidate(_rectangle);
				}
			}
		}
		#endregion //Public Methods

	}

	public class ToolBoxTab : ToolBoxItem
	{
		#region Private Attributes

		private Rectangle  _itemArea;         // The rectangle where toolbox items are drawn
		private Delegate[] _delegates;        // Event registration delegates
		private ArrayList  _toolItems;        // Array of toolbox items.
			
		private int   _hotItemIndex    = -1;  // The item under mouse, set in mouse move event.
		private int   _selItemIndex    = -1;  // Selected Item's index
		private int   _oldSelItemIndex = -1;  // Old Selected item index.

		private int    _newItemIndex      = 0;// New item index which got added recently.
		private int   _visibleTopIndex    = 0;// Loop bounds (see UpdateItemLoopIndexes)
		private int   _visibleBottomIndex = 0;

		#endregion //Private Attributes

		#region Properties

		public ToolBoxItem this[int index]
		{
			get
			{
				ToolBoxItem item = null;
				try
				{
					item = _toolItems[index] as ToolBoxItem;
				}
				catch(Exception)
				{
					item = null;
				}
				return item;
			}
		}

		[Browsable(false)]
		public int ItemCount
		{
			get
			{
				int count = 0;
				if(null != _toolItems)
				{
					count = _toolItems.Count;
				}
				return count;
			}
		}

		[Browsable(false)]
		public Rectangle ItemArea
		{
			get{return _itemArea;}
			set{_itemArea=value;}
		}

		public override bool Enabled
		{
			get{return _enabled;}
			set
			{
				if(value != _enabled)
				{
					_enabled=value;
					if(_enabled)
					{
						RegisterEvents(false);
					}
					else
					{
						UnRegisterEvents(false);
					}
					if(null != _parent)
					{
						_parent.Invalidate(_rectangle);
						_parent.Invalidate(_itemArea);
					}
				}
			}
		}

		public override bool Selected
		{
			get
			{
				return _selected;
			}
			set
			{
				if(value != _selected)
				{
					_selected = value;
					if(_parent.SelectedTab != this)
					{
						_parent.OnTabSelectionChanged(this,null);
						Invalidate();
					}
				}
			}
		}


		public ToolBoxItem SelectedItem
		{
			get{return this[_selItemIndex];}
		}

		#endregion //Properties

		#region Construction
		public ToolBoxTab(string caption, int imageIndex)
			:base(caption,imageIndex)
		{
			_delegates    = new Delegate[5];

			_delegates[0] = new MouseEventHandler(On_MouseDown);
			_delegates[1] = new MouseEventHandler(On_MouseUp);
			_delegates[2] = new MouseEventHandler(On_MouseMove);
			_delegates[3] = new EventHandler     (On_MouseLeave);
			_delegates[4] = new PaintEventHandler(On_Paint);


		}
		#endregion //Construction

		#region Event Registration
		public bool RegisterEvents()
		{
			return RegisterEvents(true);
		}

		public bool UnRegisterEvents()
		{
			return UnRegisterEvents(true);
		}

		private bool RegisterEvents(bool registerPaint)
		{
			bool bOK = true;

			// Register the events with parent control.

			try
			{
				_parent.MouseDown  += (MouseEventHandler)_delegates[0];
				_parent.MouseUp    += (MouseEventHandler)_delegates[1];
				_parent.MouseMove  += (MouseEventHandler)_delegates[2];
				_parent.MouseLeave += (EventHandler     )_delegates[3];

				if(registerPaint)
				{
					_parent.Paint  += (PaintEventHandler)_delegates[4];
				}
			}
			catch(Exception)
			{
				bOK = false;
			}
			return bOK;
		}

		private bool UnRegisterEvents(bool unRegisterPaint)
		{
			bool bOK = true;

			// Unregister the events from parent control.
			try
			{
				_parent.MouseDown  -= (MouseEventHandler)_delegates[0];
				_parent.MouseUp    -= (MouseEventHandler)_delegates[1];
				_parent.MouseMove  -= (MouseEventHandler)_delegates[2];
				_parent.MouseLeave -= (EventHandler     )_delegates[3];
					
				if(unRegisterPaint)
				{
					_parent.Paint  -= (PaintEventHandler)_delegates[4];
				}

			}
			catch(Exception)
			{
				bOK = false;
			}
			return bOK;
		}

		#endregion //Event Registration

		#region Mouse Event Handlers
		private void On_MouseDown(object sender, MouseEventArgs e)
		{
			Point mousePt = Point.Empty;
			if(HitTest(e.X,e.Y))
			{
				// Mouse down occured in the tab, if left button
				// was pressed lock the mouse move until mouse button
				// is released. Invalidate the rect to draw the tab
				// in depressed state.
				if(MouseButtons.Left == e.Button)
				{
					_mouseDown = true;
					_parent.LockMouseMove();
					Invalidate();
				}

				// parent might have delegates registered for itemMousedown event.
				// this will make parent invoke them.
				_parent.OnTabMouseDown(this,e);

			}
			else
			{
				if(-1 == _hotItemIndex)
				{
					_hotItemIndex = HitTestItem(e.X,e.Y);
				}
				if(-1 != _hotItemIndex)
				{
					// There is a hotItem under mouse.

					//if(MouseButtons.Left == e.Button) // Handling both buttons.
					{
						// If mouse button was pressed, the selected item is going
						// to be changed. 
						// SelectedItem goes as OldSelectedItem and the new Item will be
						// the SelectedItem.
						_oldSelItemIndex = _selItemIndex;

						if(-1 != _oldSelItemIndex && this[_oldSelItemIndex].Selected)
						{
							// Update mouse flags for old selected item and
							// mark it for redraw.
							this[_oldSelItemIndex].MouseDown = false;
							this[_oldSelItemIndex].Selected  = false;
							this[_oldSelItemIndex].Invalidate();
						}

						_selItemIndex    = _hotItemIndex;
						if(!this[_selItemIndex].MouseDown)
						{
							// Update flags for the new selected item
							this[_selItemIndex].MouseDown = true;
							this[_selItemIndex].Selected  = true;

							// Added by Neal Stublen
							mousePt.X = e.X;
							mousePt.Y = e.Y;
							this[_selItemIndex].MouseDownLocation = mousePt;

							//EnsureItemVisible(_selItemIndex);
						}
						// Mark the new selected item for redraw.
						this[_selItemIndex].Invalidate();

						//force the parent to redraw the invalidated rects.
						_parent.Update();
					}

					// Allow parent to call its registered delegates for itemMouseDownEvent.
					_parent.OnItemMouseDown(this[_selItemIndex],this,e);
				}
			}
		}

		private void On_MouseUp(object sender, MouseEventArgs e)
		{
			bool bHit = HitTest(e.X,e.Y);

			if(_mouseDown || bHit)
			{
				// Mouse down occured inside the tab.
				if(_mouseDown)
				{
					_mouseDown = false;

					if(MouseButtons.Left == e.Button && bHit)
					{
						// Selection changed event.
						_parent.OnTabSelectionChanged(this,null);
					}
					// Unlock the mousemove.
					_parent.UnLockMouseMove();

					//Mark for redraw.
					Invalidate();
				}

				if(bHit)
				{
					// TabMouseUp event.
					_parent.OnTabMouseUp(this,e);
				}
			}
			else if(Selected && -1 != _selItemIndex)
			{
				// Mouse up for item
				if(this[_selItemIndex].MouseDown)
				{
					this[_selItemIndex].MouseDown = false;
					// Make item visible in the itemArea
					EnsureItemVisible(_selItemIndex);

					if(_oldSelItemIndex != _selItemIndex)
					{
						// Item selection change
						_parent.OnItemSelectionChanged(this[_selItemIndex],this);
					}
				}
				_oldSelItemIndex = _selItemIndex;

				if(-1 != _hotItemIndex)
				{
					// Item mouse up event
					_parent.OnItemMouseUp(this[_hotItemIndex],this,e);
				}
			}
		}

		public void CancelHotItemHover()
		{
			try
			{
				if(-1 != _hotItemIndex)
				{
					this[_hotItemIndex].CancelHover();
					_hotItemIndex = -1;
				}
			}
			catch(Exception)
			{
				_hotItemIndex = -1;
			}
		}

		private void CheckMouseMoveForItems(MouseEventArgs e)
		{
			bool        bFound = false;
			int         index  = -1;
			ToolBoxItem item   = null;

			if(_itemArea.Contains(e.X,e.Y))
			{
				// Mouse coords inside the itemArea, check if
				// any item lies in the mouse coords.

				index  = HitTestItem(e.X,e.Y);
				bFound = (-1 != index);

				if(bFound)
				{
					// If an item was found, swap the hotitem
					// with this new item.
					if(_hotItemIndex != index)
					{
						CancelHotItemHover();
						_hotItemIndex = index;
						item = this[_hotItemIndex];
						item.MouseHover = true;
						item.Invalidate();
						_parent.UpdateToolTip(item);
					}
				}
				else
				{
					CancelHotItemHover();
					_parent.UpdateToolTip("");
				}
			}
			else
			{
				CancelHotItemHover();
				if(HitTest(e.X,e.Y))
				{
					_parent.UpdateToolTip(this);
				}
			}

		}

		private bool DragSelectedItem(MouseEventArgs e)
		{
			bool bDragged    = false;
			ToolBoxItem item = null;
			DragDropEffects effect = DragDropEffects.None;

			if(MouseButtons.Left == e.Button && _parent.Focused && -1 != _selItemIndex)
			{
				item = this[_selItemIndex];
			}
			if(null != item && item.Enabled && item.MouseDown && item.CanStartDrag(e.X,e.Y) && null != item.Object)
			{
				item.IsDragging = true;
				effect = _parent.DoDragDropItem(item,DragDropEffects.Copy);

				item.MouseDown  = false;
				item.IsDragging = false;
				EnsureItemVisible(_selItemIndex);


				if(_oldSelItemIndex != _selItemIndex)
				{
					// Item selection change
					_parent.OnItemSelectionChanged(this[_selItemIndex],this);
				}

				bDragged = true;
			}

			return bDragged;
		}

		private void On_MouseMove(object sender, MouseEventArgs e)
		{
			if(HitTest(e.X,e.Y))
			{
				_parent.UpdateToolTip(this);
				CancelHotItemHover();
				if(_mouseDown)
				{
					if(_allowDrag)
					{
						/*
						DragDropEffects effect = DragDropEffects.None;

						_parent.PatBltOnItem(this);
						_parent.DoDragDrop(this,DragDropEffects.All);
						_mouseDown = false;
						Invalidate();

						if(null != _parent.DragDropFinished)
						{
							_parent.DragDropFinished(this,effect);
						}
						*/
					}
				}
			}
			else if(Selected)
			{
				// Drag drop?
				if(!DragSelectedItem(e))
				{
					CheckMouseMoveForItems(e);
				}
			}
		}

		private void On_MouseLeave(object sender, EventArgs e)
		{
			CancelHotItemHover();
		}

		#endregion Mouse Event Handlers

		#region Paint Handlers

		private void DrawImage(Graphics g, int index, Rectangle rImage, bool bEnabled, bool bPartial)
		{
			if(0 < rImage.Height)
			{
				if(bPartial)
				{
					if(bEnabled )
					{
						g.DrawImage(
							_parent.ImageList.Images[index],
							rImage,0,0,
							rImage.Width,
							rImage.Height,
							GraphicsUnit.Pixel);
					}
					else
					{
						g.DrawImage(
							_parent.ImageList.Images[index],
							rImage,0,0,
							rImage.Width,
							rImage.Height,
							GraphicsUnit.Pixel,_parent.DisabledImageAttribs);
					}

				}
				else
				{
					if(bEnabled)
					{
						_parent.ImageList.Draw(g,rImage.X,rImage.Y,index);
					}
					else
					{
						g.DrawImage(_parent.GetImage(index),
							rImage,0,0,
							rImage.Width,
							_parent.ImageHeight,
							GraphicsUnit.Pixel,
							_parent.DisabledImageAttribs);
					}
				}
			}
		}

		private void PaintItems(Graphics g, Rectangle clipRect,StringFormat strFormat)
		{
			int           iLoop  = 0;
			int           offset = 0;
			ToolBoxItem   item   = null;
			Rectangle     rect   = Rectangle.Empty;
			Brush[]       brushes= null;

			if(! (0 >= _itemArea.Height)  && null != _toolItems)
			{
				brushes = new Brush[3];

				rect = _itemArea;

				rect.Height -= 2;

				g.SetClip(rect);

				for(iLoop=_visibleTopIndex;iLoop<_visibleBottomIndex;iLoop++)
				{
					item = _toolItems[iLoop] as ToolBoxItem;

					rect    = item.Rectangle;
					rect.Y += _itemArea.Y;
					rect.X  = _itemArea.X;

					if(rect.Top <= _itemArea.Top)
					{
						// In this case, no need to call DrawPartialItem, cos
						// no items will be partially visible at the top at any instance.
						// Scrolling will place the items to the top by moving each item
						// by itemHeight in one step.
						continue;
					}

					if(!rect.IntersectsWith(clipRect))
					{
						continue;
					}

					// Draw background.
					// Thanks to Neal Stublen for the suggestions to make the
					// items paint "more" like the VS.NET ToolBox control.

					if(item.MouseHover && !item.MouseDown)
					{
						if(null == brushes[1])
						{
							brushes[1] = new SolidBrush(_parent.ItemHoverColor);
						}
						g.FillRectangle(brushes[1],rect);
					}
					else if(item.Selected)
					{
						if(null == brushes[2])
						{
							brushes[2] = new SolidBrush(_parent.ItemSelectedColor);
						}
						g.FillRectangle(brushes[2],rect);
					}
					else
					{
						if(null == brushes[0])
						{
							brushes[0] = new SolidBrush(_parent.ItemNormalColor);
						}
						g.FillRectangle(brushes[0],rect);
					}

					// Draw border
					if((item.MouseDown || item.Selected))
					{
						ToolBox.DrawBorders(g,rect,true);
						/*g.DrawLine(SystemPens.ControlDark,rect.Left,rect.Top,rect.Right-1,rect.Top);
						g.DrawLine(SystemPens.ControlDark,rect.Left,rect.Top,rect.Left,rect.Bottom);
						g.DrawLine(SystemPens.ControlLightLight,rect.Right-1,rect.Top+1,rect.Right-1,rect.Bottom);
						g.DrawLine(SystemPens.ControlLightLight,rect.Left,rect.Bottom,rect.Right-1,rect.Bottom);
						*/
					}
					else if(item.MouseHover)
					{
						ToolBox.DrawBorders(g,rect,false);

						/*g.DrawLine(SystemPens.ControlLightLight,rect.Left,rect.Top,rect.Right-1,rect.Top);
						g.DrawLine(SystemPens.ControlLightLight,rect.Left,rect.Top,rect.Left,rect.Bottom);
						g.DrawLine(SystemPens.ControlDark,rect.Right-1,rect.Top+1,rect.Right-1,rect.Bottom);
						g.DrawLine(SystemPens.ControlDark,rect.Left,rect.Bottom,rect.Right-1,rect.Bottom);
						*/
					}

					if(item.MouseDown)
					{
						rect.Offset(1,1);
					}

					// Draw image
					if(-1 != item.ImageIndex && item.ImageIndex < _parent.ImageList.Images.Count)
					{
						Rectangle rImage;

						rect.X     += 2;
						rect.Width -= 2;
						offset      = (rect.Height-_parent.ImageHeight)/2;

						rImage        = rect;
						rImage.Width  = _parent.ImageWidth;
						rImage.Height = _parent.ImageHeight;
						rImage.Y     += offset;

						if(rImage.Bottom > _itemArea.Bottom)
						{
							rImage.Height = (_itemArea.Bottom - rImage.Top);
							DrawImage(g,item.ImageIndex,rImage,Enabled && item.Enabled,true);
						}
						else
						{
							DrawImage(g,item.ImageIndex,rImage,Enabled && item.Enabled,false);
						}
						rect.X     += rImage.Width+1;
						rect.Width -= rImage.Width+1;
					}

					rect.X++;rect.Width--;

					// Draw caption
					g.DrawString(item.Caption,_parent.Font,(Enabled && item.Enabled)?SystemBrushes.ControlText:SystemBrushes.InactiveCaption,rect,strFormat);

					if(rect.Bottom >= _itemArea.Bottom)
					{
						// Exit loop.
						iLoop = _toolItems.Count + 1;
					}
				}

				// Thanks brushes. Good job.
				if(null != brushes[0])brushes[0].Dispose();
				if(null != brushes[1])brushes[1].Dispose();
				if(null != brushes[2])brushes[2].Dispose();

				g.ResetClip();
			}
		}

		private void On_Paint(object sender, PaintEventArgs e)
		{
			Graphics     g         = e.Graphics;
			Rectangle    r         = e.ClipRectangle;
			StringFormat strFormat = new StringFormat();
			int          offset    = 0;

			strFormat.FormatFlags  = StringFormatFlags.NoWrap;
			strFormat.LineAlignment= StringAlignment.Center;
			strFormat.Trimming     = StringTrimming.EllipsisWord;

			if(_rectangle.IntersectsWith(r))
			{
				r = _rectangle;

				// Draw border
				//ControlPaint.DrawBorder3D(g,r,_mouseDown?Border3DStyle.SunkenOuter:Border3DStyle.RaisedInner);

				ToolBox.DrawBorders(g,r,_mouseDown);

				if(_mouseDown)
				{
					r.Offset(1,1);
				}

				// Draw image
				if(-1 != ImageIndex && ImageIndex < _parent.ImageList.Images.Count)
				{
					Rectangle rImage;

					r.X       += 2;
					r.Width   -= 2;
					offset     = (r.Height-_parent.ImageHeight)/2;

					rImage    = r;
					rImage.Y += offset;

					rImage.Width  = _parent.ImageWidth;
					rImage.Height = _parent.ImageHeight;

					if(_enabled)
					{
						//g.DrawImage(img,rImage,0,0,img.Width,img.Height,GraphicsUnit.Pixel);
						_parent.ImageList.Draw(g,r.X,r.Y+offset,ImageIndex);
					}
					else
					{
						g.DrawImage(_parent.GetImage(ImageIndex),rImage,0,0,rImage.Width,rImage.Height,GraphicsUnit.Pixel,_parent.DisabledImageAttribs);
						//ControlPaint.DrawImageDisabled(g,_parent.ImageList.Images[ImageIndex],r.X+1,r.Y+1,_parent.BackColor);
					}
					r.X     += _parent.ImageList.ImageSize.Width+1;
					r.Width -= _parent.ImageList.ImageSize.Width+1;
				}

				r.X++;r.Width--;
				// Draw caption
				g.DrawString(_caption,_parent.Font,_enabled?SystemBrushes.ControlText:SystemBrushes.InactiveCaption,r,strFormat);
			}

			PaintItems(g,e.ClipRectangle,strFormat);
		}
		#endregion //Paint Handlers

		#region Public Methods

		public override string ToString()
		{
			return "(ToolBoxTab)";
		}

		public bool ItemVisible(int index)
		{
			bool bVisible = false;
			Rectangle rcTemp;

			try
			{
				rcTemp    = this[index].Rectangle;
				rcTemp.X  = _itemArea.X;
				rcTemp.Y += _itemArea.Y;
				bVisible  = _itemArea.Contains(rcTemp);
			}
			catch(Exception)
			{
				bVisible = false;
			}
			return bVisible;
		}

		public bool ItemVisible(ToolBoxItem item)
		{
			bool bVisible = false;
			try
			{
				bVisible = ItemVisible(_toolItems.IndexOf(item));
			}
			catch(Exception)
			{
				bVisible = false;
			}

			return bVisible;
		}

		public bool Contains(ToolBoxItem item)
		{
			bool bContains = false;
			if(null != _toolItems)
			{
				bContains = _toolItems.Contains(item);
			}
			return bContains;
		}

		public int IndexOfItem(ToolBoxItem item)
		{
			int index = -1;

			if(null != _toolItems)
			{
				index = _toolItems.IndexOf(item);
			}
			return index;
		}

		public bool DeleteItem(ToolBoxItem item)
		{
			bool bDeleted = false;

			try
			{
				bDeleted = DeleteItem(_toolItems.IndexOf(item));
			}
			catch(Exception)
			{
			}
			return bDeleted;
		}

		public bool DeleteItem(int index)
		{
			bool bDeleted    = false;
			bool bOK         = true;
			Rectangle rcItem = Rectangle.Empty;
			Rectangle rcTemp = Rectangle.Empty;

			try
			{
				// Is the item being edited?
				if(_parent.EditingItem != this[index])
				{
					// End the editing before continuing
					bOK = _parent.EndRenameItem(true);
				}
				if(bOK)
				{
					// Delete only if deletable.
					bOK = this[index].Deletable;
				}
				if(bOK)
				{
					rcItem = this[index].Rectangle;

					//Item was selected?
					if(index == _selItemIndex)
					{
						// clear old-selected and selected item index
						_selItemIndex    = -1;
						_oldSelItemIndex = -1;
					}
					_toolItems.RemoveAt(index);

					// Assign new rectangles for rest of items.
					for(int iLoop=index;iLoop<_toolItems.Count;iLoop++)
					{
						if(this[iLoop].Selected)
						{
							_oldSelItemIndex = _selItemIndex;
							_selItemIndex = iLoop;
						}
						rcTemp = this[iLoop].Rectangle;
						this[iLoop].Rectangle = rcItem;
						rcItem = rcTemp;
					}

					_visibleTopIndex    = 0;
					_visibleBottomIndex = _toolItems.Count;

					rcTemp   = _itemArea;
					rcTemp.X = _parent.Left;
					rcTemp.Width = _parent.Width;

					if(0 >= _toolItems.Count)
					{
						_oldSelItemIndex = -1;
						_selItemIndex    = -1;
						_visibleTopIndex    = -1;
						_visibleBottomIndex = -1;
						_parent.Invalidate(rcTemp);
					}
					else
					{

						index = (index >=_toolItems.Count) ? index-1 : index;
						index = (-1 > index) ? (index+1) : index;

						if(null == this[_selItemIndex])
						{
							_oldSelItemIndex = -1;
							_selItemIndex    = index;
							this[_selItemIndex].Selected = true;
						}

						if(!EnsureItemVisible(index))
						{
							UpdateItemLoopIndexes();
							_parent.Invalidate(rcTemp);
						}
					}
					bDeleted = true;
				}
			}
			catch(Exception)
			{
			}
			return bDeleted;
		}

		public bool CanMoveItemUp(ToolBoxItem item)
		{
			bool bCanMoveUp  = false;
			int  index1      = -1;
			ToolBoxItem prev = null;

			try
			{
				index1     = _toolItems.IndexOf(item);
				prev       = _toolItems[index1-1] as ToolBoxItem;
				bCanMoveUp = item.Movable && prev.Movable;
			}
			catch(Exception)
			{
				bCanMoveUp = false;
			}

			return bCanMoveUp;
		}

		public bool CanMoveItemDown(ToolBoxItem item)
		{
			bool bCanMoveDn  = false;
			int  index1      = -1;
			ToolBoxItem next = null;

			try
			{
				index1     = _toolItems.IndexOf(item);
				next       = _toolItems[index1+1] as ToolBoxItem;
				bCanMoveDn = item.Movable && next.Movable;
			}
			catch(Exception)
			{
				bCanMoveDn = false;
			}

			return bCanMoveDn;
		}

		public bool MoveItemUp(ToolBoxItem item)
		{
			bool bMoved = false;
			int  index1 = -1;

			try
			{
				index1  = _toolItems.IndexOf(item);
				bMoved  = SwapItems(index1,index1-1);
			}
			catch(Exception)
			{
				bMoved = false;
			}

			return bMoved;
		}

		public bool MoveItemDown(ToolBoxItem item)
		{
			bool bMoved = false;
			int  index1 = -1;

			try
			{
				index1  = _toolItems.IndexOf(item);
				bMoved  = SwapItems(index1,index1+1);
			}
			catch(Exception)
			{
				bMoved = false;
			}

			return bMoved;
		}

		public bool SwapItems(ToolBoxItem item1,ToolBoxItem item2)
		{
			bool bSwaped = false;

			int  index1 = -1;
			int  index2 = -1;

			try
			{
				index1  = _toolItems.IndexOf(item1);
				index2  = _toolItems.IndexOf(item2);
				bSwaped = SwapItems(index1,index2);
			}
			catch(Exception)
			{
				bSwaped = false;
			}

			return bSwaped;
		}

		public int HitTestItem(int x, int y)
		{
			int         iLoop  = 0;
			int         index  = -1;
			ToolBoxItem item   = null;

			for(iLoop=_visibleTopIndex;iLoop<_visibleBottomIndex;iLoop++)
			{
				item = _toolItems[iLoop] as ToolBoxItem;

				if(item.HitTest(x,y))
				{
					index = iLoop;
					iLoop = _visibleBottomIndex +1;
				}
			}

			return index;
		}

		public int AddItem(ToolBoxItem item)
		{
			int   index      = -1;

			if(_parent.EndRenameItem(true))
			{
				if(null == _toolItems)
				{
					_toolItems = new ArrayList();
				}
				item.Parent      = _parent;
				item.ParentItem  = this;

				index = _toolItems.Add(item);

				if(_parent.Created)
				{
					if(_parent.LayoutTimerActive && -1 != _newItemIndex)
					{
						_parent.EndTimedLayout();
						OnLayoutFinished();
					}
					if(!_selected)
					{
						_selected     = true;
						_newItemIndex = index;
						_parent.OnTabSelectionChanged(this,new LayoutFinished(OnLayoutFinished));
					}
					else
					{
						UpdateNewItem(index);
					}
				}
				else
				{
					_oldSelItemIndex = _selItemIndex;
					if(-1 != _selItemIndex)
					{
						this[_selItemIndex].Selected = false;
					}
					_selItemIndex    = index;
					item.Selected    = true;
				}
			}

			return index;
		}

		public int AddItem(string caption, int imageIndex, bool allowDrag, object obj)
		{
			ToolBoxItem item = null;

			item = new ToolBoxItem(caption,imageIndex,allowDrag);
			item.Object = obj;
			return AddItem(item);
		}

		public void DoItemLayout(bool bScrollSelected)
		{
			/*
			if(bScrollSelected)
			{
				if(-1 != _selItemIndex)
				{
					if(!EnsureItemVisible(_selItemIndex))
					{
						UpdateItemLoopIndexes();
					}
				}
			}
			*/
			UpdateItemLoopIndexes();
		}

		public void DoItemLayout()
		{
			DoItemLayout(true);
		}

		public bool CanScroll(ScrollDirection scrollDir)
		{
			bool bCanScroll = true;


			if(null != _toolItems && 0 < _toolItems.Count)
			{

				if(this[0].Top - _parent.ItemSpacing >= _itemArea.Top && 
					(this[_toolItems.Count-1].Bottom+_parent.ItemSpacing) <= _itemArea.Bottom)
				{
					bCanScroll = false;
				}
				else
				{
					if(ScrollDirection.Up == scrollDir)
					{
						bCanScroll = (this[0].Top+_itemArea.Top+_parent.ItemSpacing) < _itemArea.Top;
					}
					else if(ScrollDirection.Down == scrollDir)
					{
						bCanScroll = (this[_toolItems.Count-1].Bottom+_itemArea.Top+_parent.ItemSpacing) > _itemArea.Bottom;
					}
				}
			}
			else
			{
				bCanScroll = false;
			}

			return bCanScroll;
		}

		public bool ScrollItems(ScrollDirection scrollDir)
		{
			return ScrollItems(scrollDir,true);
		}

		public bool ScrollItems(ScrollDirection scrollDir,bool bRedraw)
		{
			int  scrollOffset = _parent.ItemHeight + _parent.ItemSpacing;
			bool bScrolled    = false;
			try
			{
				if(CanScroll(scrollDir))
				{
					if(ScrollDirection.Up == scrollDir)
					{
						ScrollItems(+scrollOffset,bRedraw);
					}
					else if(ScrollDirection.Down == scrollDir)
					{
						ScrollItems(-scrollOffset,bRedraw);
					}
					bScrolled = true;
				}
			}
			catch(Exception)
			{
				bScrolled = false;
			}
			return bScrolled;
		}

		private void UpdateItemLoopIndexes(int index, bool[] bUpdates)
		{

			if(!bUpdates[0] && this[index].Top+_itemArea.Top >= _itemArea.Top)
			{
				_visibleTopIndex  = index;
				bUpdates[0] = true;
			}
			if(!bUpdates[1] && this[index].Top+_itemArea.Top >= _itemArea.Bottom)
			{
				_visibleBottomIndex  = index;
				bUpdates[1] = true;
			}

		}

		private void UpdateItemLoopIndexes()
		{
			int    iItem    = 0;
			bool[] bUpdates = new bool[2];

			bUpdates[0] = false;
			bUpdates[1] = false;

			if(null != _toolItems)
			{
				_visibleTopIndex    = 0;
				_visibleBottomIndex = _toolItems.Count;

				for(iItem=0;iItem<_toolItems.Count;iItem++)
				{
					UpdateItemLoopIndexes(iItem,bUpdates);
					if(true == bUpdates[0] && true == bUpdates[1])
					{
						iItem = _toolItems.Count+1;
					}
				}
			}
		}

		public bool EnsureItemVisible(ToolBoxItem item)
		{
			bool bScrolled = false;
			int  index = -1;

			if(null != _toolItems)
			{
				index = _toolItems.IndexOf(item);
			}

			if(-1 != index)
			{
				bScrolled = EnsureItemVisible(index);
			}
			return bScrolled;
		}

		public bool EnsureItemVisible(int index)
		{
			bool bScrolled = false;
			bool bLoop     = true;
			bool bUpState  = true; 
			bool bDnState  = true; 

			ScrollDirection dir = ScrollDirection.Up;
			try
			{
				bUpState = _parent.UpScroll.Enabled;
				bDnState = _parent.DownScroll.Enabled;

				// Check if scrolling is needed or not.
				bLoop = !ItemVisible(index);

				if(bLoop)
				{
					// Determine the scroll direction. This is
					// to prevent from infinite swinging scrolling
					// when the item area is too low.
					if(this[index].Bottom+_itemArea.Top > _itemArea.Bottom)
					{
						dir = ScrollDirection.Down;
					}
				}
				while(bLoop)
				{
					// Scroll in one direction only to prevent infinite
					// looping. :)
					if(ScrollDirection.Up == dir)
					{
						if(this[index].Top+_itemArea.Top < _itemArea.Top+_parent.ItemSpacing)
						{
							bLoop = ScrollItems(dir);
						}
						else
						{
							bLoop = false;
						}
					}
					else if(ScrollDirection.Down == dir)
					{
						if(this[index].Bottom+_itemArea.Top > _itemArea.Bottom)
						{
							bLoop = ScrollItems(dir);
						}
						else
						{
							bLoop = false;
						}
					}
					bScrolled |= bLoop;
				}

				if(!bScrolled)
				{
					this[index].Invalidate();
				}

				_parent.UpScroll.Enabled   = CanScroll(ScrollDirection.Up  );
				_parent.DownScroll.Enabled = CanScroll(ScrollDirection.Down);
					
				if(bUpState != _parent.UpScroll.Enabled)
				{
					_parent.Invalidate(_parent.UpScroll.Rectangle);
				}
				if(bDnState != _parent.DownScroll.Enabled)
				{
					_parent.Invalidate(_parent.DownScroll.Rectangle);
				}

			}
			catch(Exception)
			{
				bScrolled = false;
			}

			return bScrolled;
		}

		public void UpdateItemRects(bool bRedraw)
		{
			UpdateItemRects(true,true,bRedraw);
		}

		public void UpdateItemRects(bool bUpdateXY, bool bUpdateSize, bool bRedraw)
		{
			bool[] bUpdates = new bool[2];

			bUpdates[0] = false;
			bUpdates[1] = false;
			Rectangle rect = Rectangle.Empty;

			if(null != _toolItems)
			{
				_visibleTopIndex    = 0;
				_visibleBottomIndex = _toolItems.Count;

				for(int iLoop=0;iLoop<_toolItems.Count;iLoop++)
				{
					if(0 == iLoop)
					{
						rect   = this[iLoop].Rectangle;
						rect.Y = _parent.ItemSpacing;
					}
					rect.Height = _parent.ItemHeight;
					rect.Width  = _parent.DisplayRectangle.Width - 2;

					if(bUpdateXY)
					{
						this[iLoop].Location = rect.Location;
					}
					if(bUpdateSize)
					{
						this[iLoop].Size = rect.Size;
					}

					rect.Y += _parent.ItemHeight + _parent.ItemSpacing;

					UpdateItemLoopIndexes(iLoop,bUpdates);
				}
				if(bRedraw)
				{
					_parent.Invalidate(_itemArea);
				}
			}
			_parent.UpScroll.Enabled   = CanScroll(ScrollDirection.Up);
			_parent.DownScroll.Enabled = CanScroll(ScrollDirection.Down);
		}


		#endregion //Public Methods

		#region Private Methods

		private void UpdateNewItem(int index)
		{
			Point itemPos    = Point.Empty;

			_oldSelItemIndex = _selItemIndex;
			_selItemIndex    = index;

			if(-1 != _oldSelItemIndex)
			{
				this[_oldSelItemIndex].Selected = false;
			}
			if(0 < _toolItems.Count)
			{
				if(0 < _selItemIndex)
				{
					itemPos    = this[index-1].Location;
					itemPos.Y += _parent.ItemHeight + _parent.ItemSpacing;
				}
				else
				{
					itemPos    = this[_toolItems.Count-1].Location;
					itemPos.Y += _parent.ItemHeight + _parent.ItemSpacing;
				}
			}
			else
			{
				itemPos.X = _itemArea.X;
				itemPos.Y = _parent.ItemSpacing;
			}

			this[index].Selected = true;
			this[index].Width    = _itemArea.Width;
			this[index].Height   = _parent.ItemHeight;
			this[index].Location = itemPos;

			if(!_itemArea.IsEmpty)
			{
				if(!EnsureItemVisible(_selItemIndex))
				{
					UpdateItemLoopIndexes();
				}
			}
		}

		private void OnLayoutFinished()
		{
			if(-1 != _newItemIndex)
			{
				UpdateNewItem(_newItemIndex);
			}
			_newItemIndex = -1;
		}

		private bool SwapItems(int index1, int index2)
		{
			bool bSwaped = false;
			ToolBoxItem item1 = null;
			ToolBoxItem item2 = null;
			Rectangle   rcTmp = Rectangle.Empty;

			try
			{
				item1 = _toolItems[index1] as ToolBoxItem;
				item2 = _toolItems[index2] as ToolBoxItem;

				if(item1.Movable && item2.Movable)
				{
					rcTmp = item2.Rectangle;

					item2.Rectangle = item1.Rectangle;
					item1.Rectangle = rcTmp;

					item1.MouseHover = false;
					item2.MouseHover = false;

					_toolItems[index2] = item1;
					_toolItems[index1] = item2;

					_parent.Invalidate(_itemArea);
				}
				
			}
			catch(Exception)
			{
				bSwaped = false;
			}

			return bSwaped;
		}

		private void ScrollItems(int offset)
		{
			ScrollItems(offset,true);
		}

		private void ScrollItems(int offset, bool bRedraw)
		{
			int    iItem    = 0;
			bool[] bUpdates = new bool[2];

			bUpdates[0] = false;
			bUpdates[1] = false;

			if(null != _toolItems)
			{
				_visibleTopIndex    = 0;
				_visibleBottomIndex = _toolItems.Count;

				for(iItem=0;iItem<_toolItems.Count;iItem++)
				{
					this[iItem].Y += offset;

					if(false == bUpdates[0] || false == bUpdates[1])
					{
						UpdateItemLoopIndexes(iItem,bUpdates);
					}
				}

				//_visibleTopIndex    += (0 > offset) ? +1 : -1; 
				//_visibleBottomIndex += (0 > offset) ? +1 : -1; 


				if(bRedraw)
				{
					Rectangle rInv = Rectangle.Empty;
					rInv.X = _parent.Left;
					rInv.Y = _itemArea.Y;
					rInv.Width  = _parent.Width;
					rInv.Height = _itemArea.Height;
					_parent.Invalidate(rInv);
				}
			}
		}

		#endregion //Private Methods
	}

	public class ToolBox : WeifenLuo.WinFormsUI.Content
	{
		#region Interop
		private const int DSTINVERT = 0x00550009;

		[DllImport("gdi32.dll", SetLastError=true )]
		private static extern bool PatBlt(IntPtr hDC,int x,int y,int width, int height, int rop);

		#endregion //Interop

		#region Static Methods
		public static void DrawBorders(Graphics g, Rectangle rect, bool bDepressed)
		{
			if(bDepressed)
			{
				g.DrawLine(SystemPens.ControlDark,rect.Left,rect.Top+0,rect.Right-1,rect.Top+0);
				g.DrawLine(SystemPens.ControlDark,rect.Left,rect.Top+0,rect.Left,rect.Bottom-1);
				g.DrawLine(SystemPens.ControlLightLight,rect.Right-1,rect.Top+0,rect.Right-1,rect.Bottom-1);
				g.DrawLine(SystemPens.ControlLightLight,rect.Left,rect.Bottom-1,rect.Right-1,rect.Bottom-1);
			}
			else
			{
				g.DrawLine(SystemPens.ControlLightLight,rect.Left,rect.Top+0,rect.Right-1,rect.Top+0);
				g.DrawLine(SystemPens.ControlLightLight,rect.Left,rect.Top+0,rect.Left,rect.Bottom-1);
				g.DrawLine(SystemPens.ControlDark,rect.Right-1,rect.Top+0,rect.Right-1,rect.Bottom-1);
				g.DrawLine(SystemPens.ControlDark,rect.Left,rect.Bottom-1,rect.Right-1,rect.Bottom-1);
			}
		}
		#endregion //Static Methods

		public class ToolScrollButton : ToolObject
		{
			#region Private Attributes
			private bool      _mouseDown;
			private bool      _mouseHover;
			private bool      _enabled;
			private ScrollDirection _direction;
			#endregion //Private Attributes

			#region Properties

			[Browsable(false)]
			public bool MouseDown
			{
				get{return _mouseDown;}
				set{_mouseDown=value;}
			}

			[Browsable(false)]
			public bool MouseHover
			{
				get{return _mouseHover;}
				set{_mouseHover=value;}
			}

			public bool Enabled
			{
				get{return _enabled;}
				set{_enabled=value;}
			}

			public ScrollDirection ScrollDirection
			{
				get{return _direction;}
				set{_direction=value;}
			}

			#endregion //Properties

			#region Construction
			public ToolScrollButton(ScrollDirection direction, int width, int height)
			{
				_rectangle = new Rectangle(0,0,width,height);
				_direction = direction;
				_toolTip   = (ScrollDirection.Up == direction) ? "Scroll Up" : "Scroll Down";
			}
			#endregion //Construction

			#region Public Methods
			public void Paint(Graphics g, Rectangle clipRect)
			{
				Rectangle    rect   = Rectangle.Empty;
				StringFormat format = null;
				Font      font  = null;
				Brush     brush = null;
				string    text  = "";

				if(_rectangle.IntersectsWith(clipRect))
				{
					brush  = new SolidBrush(_enabled ? Color.Black : SystemColors.GrayText);
					font   = new Font("Marlett",11);
					format = new StringFormat();
					rect   = _rectangle;

					format.Alignment     = StringAlignment.Center;
					format.LineAlignment = StringAlignment.Center;

					ToolBox.DrawBorders(g,rect,_mouseDown);
					if(_mouseDown)
					{
						//ControlPaint.DrawBorder3D(g,rect,Border3DStyle.SunkenOuter);
						rect.Offset(0,1);
					}
					else
					{
						//ControlPaint.DrawBorder3D(g,rect,Border3DStyle.RaisedInner);
					}

					text = Enum.Format(typeof(ScrollDirection),_direction,"d");
					g.DrawString(text,font,brush,rect,format);

					brush.Dispose();
					font.Dispose();
					format.Dispose();
				}
			}

			public bool HitTest(int x, int y)
			{
				return _rectangle.Contains(x,y);
			}
			#endregion //Public Methods
		}


		#region Private Attributes (ToolBox)
		private ArrayList _toolBoxTabs;
		private ImageList _imageList;

		private int _tabHeight   = 18;
		private int _itemHeight  = 20;
		private int _itemSpacing = 1;
		private int _tabSpacing  = 1;
		private int _layoutDelay = 20;
		private int _scrollWait  = 500;
		private int _scrollDelay = 60;

		private ToolScrollButton _upScroll;
		private ToolScrollButton _dnScroll;
		private ToolTip          _toolTip;
		private RichTextBox      _textBox;
		private ToolBoxTab       _selectedTab;
		private ToolBoxTab       _oldselectedTab;
		private ToolBoxItem      _patBltItem;
		private ToolBoxItem      _dragItem;
		private LayoutFinished   _layoutFinished;

		private Color _selectedItemColor = Color.White;
		private Color _itemHoverColor    = Color.BurlyWood;
		private Color _itemNormalColor   = SystemColors.Control;

		private Timer _timer;
		private bool  _timerIsForLayout;
		private bool  _mouseMoveFreezed;
		private ImageAttributes _dImgAttr = null;

		#endregion //Private Attributes (ToolBox)

		#region Public Attributes (ToolBox)
		public event TabSelectionChangedHandler  TabSelectionChanged;
		public event ItemSelectionChangedHandler ItemSelectionChanged;
		public event TabMouseEventHandler    TabMouseDown;
		public event TabMouseEventHandler    TabMouseUp;
		public event ItemMouseEventHandler   ItemMouseDown;
		public event ItemMouseEventHandler   ItemMouseUp;
		public event DragDropFinishedHandler DragDropFinished;
		public event RenameFinishedHandler   RenameFinished;

		#endregion //Public Attributes (ToolBox)

		#region Construction
		public ToolBox()
		{
			Initialize();
		}
		#endregion //Construction

		#region Properties

		[Category("ToolBox")]
		public int LayoutDelay
		{
			get{return _layoutDelay;}
			set{_layoutDelay = value;}
		}

		[Category("ToolBox")]
		public int ScrollDelay
		{
			get{return _scrollDelay;}
			set{_scrollDelay = value;}
		}

		[Category("ToolBox")]
		public int InitialScrollDelay
		{
			get{return _scrollWait;}
			set{_scrollWait = value;}
		}

		[Category("ToolBox")]
		public Color ItemSelectedColor
		{
			get{return _selectedItemColor;}
			set
			{
				if(value != _selectedItemColor)
				{
					_selectedItemColor = value;
					Invalidate();
				}
			}
		}

		[Category("ToolBox")]
		public Color ItemHoverColor
		{
			get{return _itemHoverColor;}
			set
			{
				if(value != _itemHoverColor)
				{
					_itemHoverColor = value;
					Invalidate();
				}
			}
		}

		[Category("ToolBox")]
		public Color ItemNormalColor
		{
			get{return _itemNormalColor;}
			set
			{
				if(value != _itemNormalColor)
				{
					_itemNormalColor = value;
					Invalidate();
				}
			}
		}

		[Category("ToolBox")]
		public ImageList ImageList
		{
			get{return _imageList;}
			set{_imageList=value;}
		}

		[Category("ToolBox")]
		public int TabHeight
		{
			get{return _tabHeight;}
			set
			{
				if(value != _tabHeight)
				{
					_tabHeight=value;
					DoLayout(true,true,true);
				}
			}
		}

		[Category("ToolBox")]
		public int ItemHeight
		{
			get{return _itemHeight;}
			set
			{
				if(value != _itemHeight)
				{
					_itemHeight=value;
					DoLayout(true,true,true);
				}
			}
		}

		[Category("ToolBox")]
		public int ItemSpacing
		{
			get{return _itemSpacing;}
			set
			{
				if(value != _itemSpacing)
				{
					_itemSpacing = value;
					DoLayout(true,true,true);
				}
			}
		}

		[Browsable(false)]
		[Category("ToolBox")]
		public ToolBoxTab this[int tabIndex]
		{
			get
			{
				ToolBoxTab tab = null;
				try
				{
					if(0 <=  tabIndex && tabIndex < _toolBoxTabs.Count)
					{
						tab = _toolBoxTabs[tabIndex] as ToolBoxTab;
					}
				}
				catch(Exception)
				{
					tab = null;
				}
				return tab;
			}
		}

		[Category("ToolBox")]
		public ToolBoxTab SelectedTab
		{
			get{return _selectedTab;}
		}

		[Browsable(false)]
		[Category("ToolBox")]
		public ToolBoxItem EditingItem
		{
			get{return _textBox.Tag as ToolBoxItem;}
		}

		[Category("ToolBox")]
		public int SelectedTabIndex
		{
			get
			{
				int index = -1;
				try
				{
					index = _toolBoxTabs.IndexOf(_selectedTab);
				}
				catch(Exception)
				{
					index = -1;
				}
				return index;
			}
			set
			{
				int selIndex = -1;
				int newIndex = -1;
				selIndex = _toolBoxTabs.IndexOf(_selectedTab);
				newIndex = value;

				if(0 <= newIndex && newIndex < _toolBoxTabs.Count && selIndex != newIndex)
				{
					_oldselectedTab = _selectedTab;
					if(null != _oldselectedTab)
					{
						_oldselectedTab.Selected = false;
					}
					_selectedTab = this[newIndex];
					_selectedTab.Selected = true;
					DoLayout(true,true);

					if(null != TabSelectionChanged)
					{
						TabSelectionChanged(_selectedTab,EventArgs.Empty);
					}
				}
			}
		}

		[Browsable(false)]
		[Category("ToolBox")]
		public int ImageWidth
		{
			get{return _imageList.ImageSize.Width;}
		}

		[Browsable(false)]
		[Category("ToolBox")]
		public int ImageHeight
		{
			get{return _imageList.ImageSize.Height;}
		}

		[Browsable(false)]
		[Category("ToolBox")]
		public ImageAttributes DisabledImageAttribs
		{
			get
			{
				if(null == _dImgAttr)
				{
					ColorMatrix cmtx   = null;
					float[][]   matrix = new float[][]
						{
							new float[] {0.3f ,0.3f ,0.3f ,1, 1},
							new float[] {0.1f ,0.1f ,0.1f ,1, 1},
							new float[] {0.1f ,0.1f ,0.1f ,1, 1},
							new float[] {0.3f ,0.3f ,0.3f ,1, 1},
							new float[] {0.08f,0.08f,0.08f,0, 1},
							new float[] {1    ,1    ,1    ,1, 1},
					};
					cmtx      = new ColorMatrix(matrix);
					_dImgAttr = new ImageAttributes();

					_dImgAttr.SetColorMatrix(cmtx);
				}
				return _dImgAttr;
			}
		}

		[Browsable(false)]
		[Category("ToolBox")]
		public ToolScrollButton UpScroll
		{
			get{return _upScroll;}
		}

		[Browsable(false)]
		[Category("ToolBox")]
		public ToolScrollButton DownScroll
		{
			get{return _dnScroll;}
		}

		[Browsable(false)]
		[Category("ToolBox")]
		public bool LayoutTimerActive
		{
			get{return null != _timer && _timerIsForLayout;}
		}

		#endregion //Properties

		#region Internal Methods

		internal void LockMouseMove()
		{
			_mouseMoveFreezed = true;
		}

		internal void UnLockMouseMove()
		{
			_mouseMoveFreezed = false;
		}

		internal void PatBltOnItem(ToolBoxItem item)
		{
			Graphics g   = null;
			IntPtr   hdc = IntPtr.Zero;
			try
			{
				if(null != _patBltItem || null != item)
				{
					g   = CreateGraphics();
					hdc = g.GetHdc();
				}
				if(null != _patBltItem)
				{
					PatBlt(hdc,_patBltItem.X+1,_patBltItem.Y+1,_patBltItem.Width-2,_patBltItem.Height-2,DSTINVERT);
				}
				if(_patBltItem != item)
				{
					PatBlt(hdc,item.X+1,item.Y+1,item.Width-2,item.Height-2,DSTINVERT);
					_patBltItem = item;
				}
			}
			catch(Exception)
			{
			}
			finally
			{
				if(IntPtr.Zero != hdc && null != g)
				{
					g.ReleaseHdc(hdc);
				}
				if(null != g)
				{
					g.Dispose();
				}
			}
		}

		internal void StopTimer()
		{
			if(null != _timer)
			{
				_timer.Enabled  = false;

				if(_timerIsForLayout)
				{
					_oldselectedTab = null;
					DoLayout(false,true);
				}
				_timer.Dispose();
			}
			_timer = null;
		}

		internal void UpdateToolTip(ToolObject obj)
		{
			UpdateToolTip(obj.ToolTip);
		}

		internal void UpdateToolTip(string toolTip)
		{
			if(!toolTip.Equals(_toolTip.GetToolTip(this)))
			{
				_toolTip.SetToolTip(this,toolTip);
			}
		}

		internal void OnTabSelectionChanged(ToolBoxTab tab, LayoutFinished layoutFinished)
		{
			ToolBoxTab oldTab = _selectedTab;

			StopTimer();

			_layoutFinished = layoutFinished;

			if(oldTab != tab)
			{
				if(null != oldTab)
				{
					oldTab.Selected = false;
				}

				_selectedTab          = tab;
				_selectedTab.Selected = true;

				_oldselectedTab          = oldTab;
				//_oldselectedTab.ItemArea = oldTab.ItemArea;

				if(this.Created)
				{
					_timer            = new Timer();
					_timer.Tick      += new EventHandler(OnTimer_LayoutElapsed);
					_timer.Interval   = _layoutDelay;
					_timer.Enabled    = true;
					_timerIsForLayout = true;

					if(null != TabSelectionChanged)
					{
						TabSelectionChanged(tab,null);
					}
				}
				else
				{
					DoLayout(true,true,false);
				}
			}

		}

		internal void OnItemSelectionChanged(ToolBoxItem item, ToolBoxTab tab)
		{
			if(null != ItemSelectionChanged)
			{
				ItemSelectionChanged(item,tab,EventArgs.Empty);
			}
		}

		internal void OnTabMouseDown(ToolBoxTab tab, MouseEventArgs e)
		{
			if(null != TabMouseDown)
			{
				TabMouseDown(tab,e);
			}
		}

		internal void OnTabMouseUp(ToolBoxTab tab, MouseEventArgs e)
		{
			if(null != TabMouseUp)
			{
				TabMouseUp(tab,e);
			}
		}

		internal void OnItemMouseDown(ToolBoxItem sender, ToolBoxTab parent, MouseEventArgs e)
		{
			if(null != ItemMouseDown)
			{
				ItemMouseDown(sender,parent,e);
			}
		}

		internal void OnItemMouseUp(ToolBoxItem sender, ToolBoxTab parent, MouseEventArgs e)
		{
			if(null != ItemMouseUp)
			{
				ItemMouseUp(sender,parent,e);
			}
		}

		internal void RenameItem(ToolBoxItem item)
		{
			Point ptLocation = Point.Empty;
			bool  bOK        = true;
			bool  bIsTab     = true;
			ToolBoxTab tab   = null;

			try
			{
				if(item.GetType() != typeof(ToolBoxTab))
				{
					bOK = null != _selectedTab && _selectedTab.Contains(item);

					if(bOK)
					{
						_selectedTab.EnsureItemVisible(item);
					}
					bIsTab = false;
				}

				if(bOK)
				{
					bOK = EndRenameItem(false);
				}

				if(bOK && item.Renamable)
				{
					if(!bIsTab)
					{
						tab = item.ParentItem as ToolBoxTab;
					}

					_textBox.Font   = this.Font;
					_textBox.Text   = item.Caption;
					_textBox.Width  = item.Width  - 4;
					_textBox.Height = item.Height - 2;
					ptLocation      = item.Location;

					if(null != tab)
					{
						ptLocation.Y += tab.ItemArea.Y;
					}

					if(-1 != item.ImageIndex)
					{
						_textBox.Width -= ImageWidth+2;
						ptLocation.X   += ImageWidth+4;
					}

					ptLocation.X +=2;
					ptLocation.Y +=1;

					_textBox.Select(item.Caption.Length,0);
					_textBox.Location= ptLocation;
					_textBox.Tag     = item;
					_textBox.Visible = true;
					_textBox.Focus();
				}
			}
			catch(Exception)
			{
			}
		}

		#endregion //Internal Methods

		#region Public Methods

		public DragDropEffects DoDragDropItem(ToolBoxItem item, DragDropEffects allowedEffects)
		{
			DragDropEffects e;
			_dragItem = item;

			e = DoDragDrop(item,allowedEffects);

			if(null != DragDropFinished)
			{
				DragDropFinished(item,e);
			}

			return e;
		}

		public void EndTimedLayout()
		{
			StopTimer();
		}

		public int HitTestTab(int x, int y)
		{
			int index = -1;

			for(int iLoop=0;iLoop<_toolBoxTabs.Count;iLoop++)
			{
				if(this[iLoop].HitTest(x,y))
				{
					index = iLoop;
					iLoop = _toolBoxTabs.Count + 1;
				}
			}
			return index;
		}

		public int IndexOfTab(ToolBoxTab tab)
		{
			return _toolBoxTabs.IndexOf(tab);
		}

		public bool CanMoveTabUp(ToolBoxTab tab)
		{
			bool bCanMoveUp = false;
			int  index1     = -1;
			ToolBoxTab prev = null;

			try
			{
				index1 = _toolBoxTabs.IndexOf(tab);
				prev   = _toolBoxTabs[index1-1] as ToolBoxTab;
				bCanMoveUp = tab.Movable && prev.Movable;
			}
			catch(Exception)
			{
				bCanMoveUp = false;
			}

			return bCanMoveUp; 
		}

		public bool CanMoveTabDown(ToolBoxTab tab)
		{
			bool bCanMoveDn = false;
			int  index1     = -1;
			ToolBoxTab next = null;

			try
			{
				index1 = _toolBoxTabs.IndexOf(tab);
				next   = _toolBoxTabs[index1+1] as ToolBoxTab;
				bCanMoveDn = tab.Movable && next.Movable;
			}
			catch(Exception)
			{
				bCanMoveDn = false;
			}

			return bCanMoveDn; 
		}

		public bool MoveTabUp(ToolBoxTab tab)
		{
			bool bMoved = false;
			int  index1 = -1;

			try
			{
				index1 = _toolBoxTabs.IndexOf(tab);
				bMoved = SwapTabs(index1,index1-1);
			}
			catch(Exception)
			{
				bMoved = false;
			}
			return bMoved;
		}

		public bool MoveTabDown(ToolBoxTab tab)
		{
			bool bMoved = false;
			int  index1 = -1;
			try
			{
				index1 = _toolBoxTabs.IndexOf(tab);
				bMoved = SwapTabs(index1,index1+1);
			}
			catch(Exception)
			{
				bMoved = false;
			}

			return bMoved;
		}

		public bool SwapTabs(ToolBoxTab tab1, ToolBoxTab tab2)
		{
			bool bSwaped = false;
			int  index1 = -1;
			int  index2 = -1;

			try
			{
				index1  = _toolBoxTabs.IndexOf(tab1);
				index2  = _toolBoxTabs.IndexOf(tab2);
				bSwaped = SwapTabs(index1,index2);
			}
			catch(Exception)
			{
				bSwaped = false;
			}

			return bSwaped;
		}

		public bool EndRenameItem(bool bSave)
		{
			bool bOK = true;

			if(_textBox.Visible)
			{
				if(bSave)
				{
					if(OnRenameFinished(false))
					{
						UpdateItemFromTextBox();
					}
					else
					{
						_textBox.Focus();
						bOK = false;
					}
				}
				else
				{
					if(OnRenameFinished(true))
					{
						_textBox.Visible = false;
					}
					else
					{
						_textBox.Focus();
						bOK = false;
					}
				}
			}
			return bOK;
		}

		public void RefreshTabs()
		{
			DoLayout(true,false);
			foreach(ToolBoxTab tab in _toolBoxTabs)
			{
				tab.UpdateItemRects(false);
			}
			if(null != _selectedTab)
			{
				_upScroll.Enabled = _selectedTab.CanScroll(ScrollDirection.Up  );
				_dnScroll.Enabled = _selectedTab.CanScroll(ScrollDirection.Down);
			}
			Invalidate();
		}

		public Image GetImage(int index)
		{
			return _imageList.Images[index];
		}

		public bool SetImageList(Image image, Size size, Color transparentColor)
		{
			ImageListFromImage(image,size,transparentColor);
			return (_imageList.Images.Count > 0);
		}

		public int AddTab(ToolBoxTab tab)
		{
			return AddTab(tab,true);
		}

		public int AddTab(ToolBoxTab tab, bool bRedraw)
		{
			int        index = -1;
			try
			{
				if(EndRenameItem(true))
				{

					index = _toolBoxTabs.Add(tab);

					tab.Parent   = this;
					tab.Selected = true;
					tab.RegisterEvents();

					if(Created)
					{
						DoLayout(true,bRedraw);
					}
				}
			}
			catch(Exception)
			{
				index = -1;
			}
			return index;
		}

		public int AddTab(string caption, int imageIndex)
		{
			return AddTab(caption,imageIndex,true);
		}

		public int AddTab(string caption, int imageIndex, bool bRedraw)
		{
			ToolBoxTab tab   = new ToolBoxTab(caption,imageIndex);
			return AddTab(tab,bRedraw);
		}

		public bool DeleteTab(ToolBoxTab tab, bool bRedraw)
		{
			bool bOK = true;
			int  index = -1;
			try
			{
				index = _toolBoxTabs.IndexOf(tab);
				bOK   = DeleteTab(index,bRedraw);
			}
			catch(Exception)
			{
				bOK = false;
			}
			return bOK;
		}

		public bool DeleteTab(int index, bool bRedraw)
		{
			bool       bOK  = true;
			bool       bSel = false;
			ToolBoxTab tab  = null;

			try
			{
				if(EditingItem != this[index])
				{
					bOK = EndRenameItem(true);
				}

				if(bOK)
				{
					tab  = this[index];
					bSel = tab.Selected;
					tab.UnRegisterEvents();
					_toolBoxTabs.RemoveAt(index);

					if(bSel)
					{
						tab = this[index-1];
						if(null == tab)
						{
							tab = this[index+1];
						}
						if(null == tab)
						{
							tab = this[0];
						}

						if(null != tab)
						{
							if(null != _oldselectedTab)
							{
								_oldselectedTab.Selected = false;
							}
							_oldselectedTab = _selectedTab;
							_selectedTab    = tab;
							_selectedTab.Selected = true;
						}
						else
						{
							_selectedTab = null;
						}
					}
					DoLayout(true,bRedraw);
				}
			}
			catch(Exception)
			{
				bOK = false;
			}
			return bOK;
		}

		#endregion //Public Methods

		#region Initialization

		private void Initialize()
		{
			SetStyle(ControlStyles.AllPaintingInWmPaint,true);
			SetStyle(ControlStyles.DoubleBuffer        ,true);

			AllowDrop     = true;
			_toolBoxTabs  = new ArrayList();
			_imageList    = new ImageList();
			_upScroll     = new ToolScrollButton(ScrollDirection.Up  ,_tabHeight,_tabHeight);
			_dnScroll     = new ToolScrollButton(ScrollDirection.Down,_tabHeight,_tabHeight);
			_toolTip      = new ToolTip();
			_textBox      = new RichTextBox();
			this.Load	 += new EventHandler(OnToolBox_Load);

			_textBox.Font      = Font;
			_textBox.BorderStyle = BorderStyle.None;
			_textBox.Visible   = false;
			//_textBox.Multiline = true;
			_textBox.WordWrap  = false;
			_textBox.ScrollBars= RichTextBoxScrollBars.None;
			_textBox.KeyDown   += new KeyEventHandler(OnTextBox_KeyDown);
			_textBox.LostFocus += new EventHandler(OnTextBox_LostFocus);

			//Prepare richTextbox's context menu.
			ContextMenu theMenu;
			MenuItem    menuItem;

			theMenu = new ContextMenu();

			menuItem = new MenuItem("Undo");
			menuItem.Click += new EventHandler(OnTexBoxMenu_Undo);
			theMenu.MenuItems.Add(menuItem);

			menuItem = new MenuItem("-");
			theMenu.MenuItems.Add(menuItem);

			menuItem = new MenuItem("Cut");
			menuItem.Click += new EventHandler(OnTexBoxMenu_Cut);
			theMenu.MenuItems.Add(menuItem);

			menuItem = new MenuItem("Copy");
			menuItem.Click += new EventHandler(OnTexBoxMenu_Copy);
			theMenu.MenuItems.Add(menuItem);

			menuItem = new MenuItem("Paste");
			menuItem.Click += new EventHandler(OnTexBoxMenu_Paste);
			theMenu.MenuItems.Add(menuItem);

			menuItem = new MenuItem("Delete");
			menuItem.Click += new EventHandler(OnTexBoxMenu_Delete);
			theMenu.MenuItems.Add(menuItem);

			menuItem = new MenuItem("-");
			theMenu.MenuItems.Add(menuItem);

			menuItem = new MenuItem("Select All");
			menuItem.Click += new EventHandler(OnTexBoxMenu_SelectAll);
			theMenu.MenuItems.Add(menuItem);

			theMenu.Popup += new EventHandler(OnTexBoxMenu_Popup);

			_textBox.ContextMenu = theMenu;

			Controls.Add(_textBox);

			_upScroll.Enabled = false;
			_dnScroll.Enabled = false;

			this.AllowedStates = ((WeifenLuo.WinFormsUI.ContentStates)(((((WeifenLuo.WinFormsUI.ContentStates.Float | WeifenLuo.WinFormsUI.ContentStates.DockLeft) 
				| WeifenLuo.WinFormsUI.ContentStates.DockRight) 
				| WeifenLuo.WinFormsUI.ContentStates.DockTop) 
				| WeifenLuo.WinFormsUI.ContentStates.DockBottom)));
			this.AutoScaleBaseSize = new System.Drawing.Size(5, 13);
			this.ClientSize = new System.Drawing.Size(180,300);
			this.DockPadding.Bottom = 3;
			this.DockPadding.Top = 3;
			this.HideOnClose = true;
			this.Name = "Toolbox";
			this.ShowHint = WeifenLuo.WinFormsUI.DockState.DockLeft;
			this.Text = "Toolbox";
		}
		
		#endregion //Initialization

		#region Private Methods

		private void UpdateItemFromTextBox()
		{
			try
			{
				if(_textBox.Visible)
				{
					ToolBoxItem item = _textBox.Tag as ToolBoxItem;
					item.Caption     = _textBox.Text;
					_textBox.Visible = false;
					_textBox.Tag     = null;
					//Focus();
				}
			}
			catch(Exception)
			{
			}
		}

		private bool SwapTabs(int index1, int index2)
		{
			bool bSwaped = false;
			ToolBoxTab tab1 = null;
			ToolBoxTab tab2 = null;

			try
			{
				tab1 = _toolBoxTabs[index1] as ToolBoxTab;
				tab2 = _toolBoxTabs[index2] as ToolBoxTab;

				_toolBoxTabs[index2] = tab1;
				_toolBoxTabs[index1] = tab2;

				DoLayout(true,false);

				if(tab1 == _selectedTab || tab2 == _selectedTab)
				{
					_selectedTab.UpdateItemRects(false);
				}
				Invalidate();
				
			}
			catch(Exception)
			{
				bSwaped = false;
			}

			return bSwaped;
		}

		private void CreateScrollTimer(ScrollDirection dir)
		{
			StopTimer(); 
			_timer = new Timer();
			_timer.Interval	 = _scrollWait;

			_timerIsForLayout = false;
			if(ScrollDirection.Up == dir)
			{
				_timer.Tick +=new EventHandler(OnTimer_UpScrollElapsed);
			}
			else
			{
				_timer.Tick +=new EventHandler(OnTimer_DnScrollElapsed);
			}
			_timer.Enabled = true;
		}

		private void OnTimer_UpScrollElapsed(object sender, EventArgs e)
		{
			if(null != _selectedTab)
			{
				_selectedTab.ScrollItems(ScrollDirection.Up);

				if(!_selectedTab.CanScroll(ScrollDirection.Up))
				{
					StopTimer();
					_upScroll.MouseDown = false;
					_upScroll.Enabled   = false;
					Invalidate(_upScroll.Rectangle);
				}
				else if(null != _timer && _scrollWait == _timer.Interval)
				{
					_timer.Interval	 = _scrollDelay;
				}

			}
		}

		private void OnTimer_DnScrollElapsed(object sender, EventArgs e)
		{
			if(null != _selectedTab)
			{
				_selectedTab.ScrollItems(ScrollDirection.Down);

				if(!_selectedTab.CanScroll(ScrollDirection.Down))
				{
					StopTimer();
					_dnScroll.MouseDown = false;
					_dnScroll.Enabled   = false;
					Invalidate(_dnScroll.Rectangle);
				}
				else if(null != _timer && 500 == _timer.Interval)
				{
					_timer.Interval	 = 60;
				}
			}
		}

		private void OnTimer_LayoutElapsed(object sender, EventArgs e)
		{
			try
			{
				if(DoTimedLayout(_oldselectedTab))
				{
					_timer.Stop();
					_timer.Dispose();
					_timer = null;
					if(null != _selectedTab)
					{
						if(null != _layoutFinished)
						{
							_layoutFinished();
							_layoutFinished = null;
						}
						else
						{
							//_selectedTab.EnsureItemVisible(_selectedTab.Sele);
							_selectedTab.DoItemLayout();
						}
					}
					//Invalidate();
					//DoLayout(true,true);
				}
			}
			catch(Exception)
			{
				_timer.Stop();
				_timer.Dispose();
				_timer = null;
				DoLayout(true,true);
			}
		}

		private void ImageListFromImage(Image image, Size size, Color transparentColor)
		{
			Rectangle rImage = Rectangle.Empty;
			Rectangle rBmp   = Rectangle.Empty;
			Graphics  gmp    = null;
			Bitmap    bmp    = null;
			int       count  = 0;
			int       index  = 0;

			try
			{
				_imageList.Images.Clear();

				rImage.Size = size;
				rBmp.Size   = size;
				count       = image.Width / size.Width;

				_imageList.ImageSize = size;

				for(index=0;index<count;index++)
				{
					bmp = new Bitmap(size.Width,size.Height);
					gmp = Graphics.FromImage(bmp);

					gmp.DrawImage(image,rBmp,rImage,GraphicsUnit.Pixel);
					gmp.Dispose();

					_imageList.Images.Add(bmp);
					rImage.Offset(size.Width,0);
				}

				_imageList.TransparentColor = transparentColor;
			}
			catch(Exception)
			{
			}
		}

		private bool DoTimedLayout(ToolBoxTab oldSelectedTab)
		{
			bool bFinished = false;

			if(null == _oldselectedTab)
			{
				return true;
			}

			int        oldTabIndex;
			int        selTabIndex;
			int        iLoop = 0;
			ToolBoxTab tab   = null;
			Rectangle  oldItemArea;
			Rectangle  selItemArea;
			Rectangle  paintRect = DisplayRectangle;

			oldTabIndex = _toolBoxTabs.IndexOf(_oldselectedTab);
			selTabIndex = _toolBoxTabs.IndexOf(_selectedTab   );
			
			oldItemArea = _oldselectedTab.ItemArea;
			selItemArea = _selectedTab.ItemArea;


			int maxY = 0;
			int inc  = 0;

			inc = (_tabHeight/2 >= inc) ? (oldItemArea.Height/6)-2 : inc;
			inc = (_tabHeight/2 >= inc) ? (oldItemArea.Height/3)-2 : inc;
			inc = (_tabHeight/2 >= inc) ? (oldItemArea.Height/2)-2 : inc;
			inc = (_tabHeight/2 >= inc) ? _tabHeight/2             : inc;


			if(oldTabIndex < selTabIndex)
			{
				// Selected tab is below the old tab.
				tab = this[oldTabIndex+1];

				maxY = _oldselectedTab.Bottom + _tabSpacing;

				if((tab.Y-inc) <= maxY)
				{
					inc = tab.Y - maxY;
				}

				paintRect.Y = _oldselectedTab.Top;

				for(iLoop=oldTabIndex+1;iLoop<=selTabIndex;iLoop++)
				{
					this[iLoop].Y -= inc;
				}

				tab       = this[oldTabIndex+1];
				tab.Width = DisplayRectangle.Width - 2;
				
				oldItemArea.Height    = (tab.Top-1) - (_oldselectedTab.Bottom-1);
				_selectedTab.Width    = (DisplayRectangle.Width-2) - (_upScroll.Width+1);
				_oldselectedTab.Width = DisplayRectangle.Width - 2;
				tab                   = this[selTabIndex+1];
				if(null != tab)
				{
					tab.Width         = (DisplayRectangle.Width-2) - (_upScroll.Width+1);
					_dnScroll.Y       = tab.Y;
					paintRect.Height  = _dnScroll.Bottom - paintRect.Y;
				}
				else
				{
					_dnScroll.Y       = _selectedTab.Bottom + _tabSpacing + _itemHeight;
					_dnScroll.Y       = _dnScroll.Bottom < DisplayRectangle.Bottom ? DisplayRectangle.Bottom - _tabHeight : _dnScroll.Y;
				}

				_upScroll.Y           = _selectedTab.Y;

				tab = this[oldTabIndex+1];

				if(tab.Y <= maxY)
				{
					oldItemArea.Height = 0;
					bFinished = true;
				}
			}
			else
			{
				maxY = DisplayRectangle.Bottom - ((_tabHeight + _tabSpacing) * (_toolBoxTabs.Count - (selTabIndex+1)));
				//maxY = (maxY <= _selectedTab.Y + (_itemHeight + _itemSpacing) ) ? _selectedTab.Y + (2*_itemHeight) + 2*_itemSpacing : maxY; 
				maxY = (maxY <= _selectedTab.Y + (_itemHeight + _itemSpacing) ) ? _selectedTab.Bottom + (_itemHeight+_itemSpacing+_tabSpacing) : maxY; 

				paintRect.Y = _selectedTab.Top;

				tab = this[selTabIndex+1];
				if((tab.Y+inc) >= maxY)
				{
					inc = maxY - tab.Y;
				}

				for(iLoop=selTabIndex+1;iLoop<=oldTabIndex;iLoop++)
				{
					this[iLoop].Y += inc;
				}

				tab = this[selTabIndex+1];

				_selectedTab.Width    = (DisplayRectangle.Width-2) - (_upScroll.Width+1);
				tab.Width             = _selectedTab.Width;
				_upScroll.Y           = _selectedTab.Y;
				_dnScroll.Y           = tab.Y;

				if(selTabIndex+1 != oldTabIndex)
				{
					oldSelectedTab.Width= DisplayRectangle.Width - 2;
				}

				tab = this[oldTabIndex+1];

				if(null != tab)
				{
					tab.Width          = DisplayRectangle.Width - 2;
					paintRect.Height   = tab.Bottom - paintRect.Y;
					oldItemArea.Height = (tab.Top-1) - (_oldselectedTab.Bottom+1);

				}
				else
				{
					oldItemArea.Height = (DisplayRectangle.Bottom) - ((_oldselectedTab.Bottom-1)+_itemHeight);
				}

				tab = this[selTabIndex+1];

				if(tab.Y >= maxY)
				{
					oldItemArea.Height = 0;
					bFinished = true;
				}

			}

			selItemArea.X         = _selectedTab.X;
			selItemArea.Y         = _selectedTab.Bottom;
			selItemArea.Width     = DisplayRectangle.Width - 2;

			oldItemArea.X         = _oldselectedTab.X;
			oldItemArea.Y         = _oldselectedTab.Bottom;
			oldItemArea.Width     = DisplayRectangle.Width - 2;

			selItemArea.Height    = (_dnScroll.Y) - (_selectedTab.Bottom);

			_oldselectedTab.ItemArea = oldItemArea;
			_selectedTab.ItemArea    = selItemArea;

			_upScroll.Enabled = _selectedTab.CanScroll(ScrollDirection.Up  );
			_dnScroll.Enabled = _selectedTab.CanScroll(ScrollDirection.Down);

			Invalidate(paintRect);
			return bFinished;
		}

		private void DoLayout(bool bInitial, bool bRepaint)
		{
			DoLayout(bInitial,false,bRepaint);
		}

		private void DoLayout(bool bInitial, bool bUpdateItems, bool bRepaint)
		{
			ToolBoxTab tab1   = null;
			ToolBoxTab tab2   = null;
			Rectangle  rect   = Rectangle.Empty;
			Rectangle  rcItem = Rectangle.Empty;

			bool       bOK          = true;
			bool       bScrollUpSet = false;
			bool       bScrollDnSet = false;
			int        iLoop        = 0;

			if(!Created)
			{
				return;
			}

			rect.Height = _tabHeight;
			rect.Width  = DisplayRectangle.Width-2;
			rect.X      = 1;
			rect.Y      = 1;

			if(_upScroll.Height != _tabHeight)
			{
				_upScroll.Height = _tabHeight;
			}

			if(_dnScroll.Height != _tabHeight)
			{
				_dnScroll.Height = _tabHeight;
			}

			_upScroll.Width = _tabHeight;
			_dnScroll.Width = _tabHeight;

			for(iLoop=0;bOK && iLoop<_toolBoxTabs.Count;iLoop++)
			{
				if(!bInitial && (_tabHeight + (_toolBoxTabs.Count*rect.Height)) > DisplayRectangle.Height)
				{
					bOK = false;
					bScrollUpSet=true;
					bScrollDnSet=true;
				}

				if(bOK)
				{
					tab1 = _toolBoxTabs[iLoop] as ToolBoxTab;
					tab1.Rectangle = rect;
					tab1.ItemArea  = Rectangle.Empty; //ATTN

					if(null != tab2)
					{
						tab2        = null;
						tab1.Width  = tab1.Width - (_dnScroll.Width +1);
						_dnScroll.X = tab1.Right+1;
						_dnScroll.Y = tab1.Y;
						bScrollDnSet=true;

					}
					else if(tab1.Selected)
					{
						int newY    = 0; 
						tab1.Width  = tab1.Width - (_upScroll.Width+1);
						_upScroll.X = tab1.Right+1;
						_upScroll.Y = tab1.Y;
						tab2        = this[iLoop+1];
						bScrollUpSet= true;

						if(null != tab2)
						{
							newY   = (DisplayRectangle.Bottom - ((_tabHeight + _tabSpacing) * (_toolBoxTabs.Count - (iLoop))));
							newY   = (newY <= rect.Y+(_itemHeight + _itemSpacing) ) ? rect.Y + (_itemHeight + _itemSpacing) : newY; 
							rect.Y = newY;
						}
						else
						{
							rect.Y += (_tabHeight + _tabSpacing + _itemSpacing);
						}
					}
					rect.Y += _tabHeight + _tabSpacing;
				}
			}

			if(0 < _toolBoxTabs.Count)
			{
	
				// Scroll button positions
				if(!bScrollUpSet)
				{
					_upScroll.X = DisplayRectangle.Right  - (_upScroll.Rectangle.Width+1);
					_upScroll.Y = 1;
				}

				if(!bScrollDnSet)
				{
					rect.Y      = Math.Max(rect.Bottom,DisplayRectangle.Bottom);
					_dnScroll.X = DisplayRectangle.Right  - (_dnScroll.Rectangle.Width+1);
					_dnScroll.Y = rect.Y - (_tabHeight);
				}

				if(null != _selectedTab)
				{
					rcItem.X     = _selectedTab.X;
					rcItem.Y     = _selectedTab.Bottom;
					rcItem.Width = DisplayRectangle.Width -2;
					rcItem.Height= (_dnScroll.Y- rcItem.Y);

					_selectedTab.ItemArea = rcItem;
				}

			}

			if(null != _selectedTab)
			{
				if(bUpdateItems)
				{
					_selectedTab.UpdateItemRects(false);
				}

				//_selectedTab.DoItemLayout();
				_upScroll.Enabled = _selectedTab.CanScroll(ScrollDirection.Up  );
				_dnScroll.Enabled = _selectedTab.CanScroll(ScrollDirection.Down);
			}
			if(null != _oldselectedTab)
			{
				//_oldselectedTab.DoItemLayout();
			}

			if(bRepaint && Visible)
			{
				Invalidate();
			}
		}

		private void PaintBackground(Graphics g, Rectangle clipRect)
		{
			Brush brush = new SolidBrush(BackColor);
			g.FillRectangle(brush,clipRect);
			brush.Dispose();
		}

		private void PaintScrollButtons(Graphics g, Rectangle clipRect)
		{
			if(0 < _toolBoxTabs.Count)
			{
				_upScroll.Paint(g,clipRect);

				if(_dnScroll.Y >= _upScroll.Bottom)
				{
					_dnScroll.Paint(g,clipRect);
				}
			}
		}
		#endregion //Private Methods

		#region Sizing Overrides
		protected override void OnSizeChanged(EventArgs e)
		{
			DoLayout(true,false);
			foreach(ToolBoxTab tab in _toolBoxTabs)
			{
				tab.UpdateItemRects(false,true,false);
			}
			if(null != _selectedTab)
			{
				_upScroll.Enabled = _selectedTab.CanScroll(ScrollDirection.Up  );
				_dnScroll.Enabled = _selectedTab.CanScroll(ScrollDirection.Down);
			}
			Invalidate();
		}

		protected override void OnResize(EventArgs e)
		{
			DoLayout(true,true,true);
		}
		#endregion //Sizing Overrides

		#region Paint Overrides
		protected override void OnPaint(PaintEventArgs e)
		{
			Graphics  g = e.Graphics;
			Rectangle r = e.ClipRectangle;

			PaintBackground(g,r);
			PaintScrollButtons(g,r);
			base.OnPaint(e);
		}

		protected override void OnPaintBackground(PaintEventArgs e)
		{
		}

		#endregion //Paint Overrides

		#region Mouse Overrides

		protected override void OnMouseMove(MouseEventArgs e)
		{
			if(!LayoutTimerActive)
			{
				//UpdateToolTip("");
				if(_upScroll.HitTest(e.X,e.Y))
				{
					if(null != _selectedTab)
					{
						_selectedTab.CancelHotItemHover();
						_selectedTab.CancelHover();
					}
					UpdateToolTip(_upScroll);
				}
				else if(_dnScroll.HitTest(e.X,e.Y))
				{
					if(null != _selectedTab)
					{
						_selectedTab.CancelHotItemHover();
						_selectedTab.CancelHover();
					}
					UpdateToolTip(_dnScroll);
				}
				else
				{
					//UpdateToolTip("");
					if(!_mouseMoveFreezed)
					{
						base.OnMouseMove(e);
					}
				}
			}
		}

		protected override void OnMouseWheel(MouseEventArgs e)
		{
			bool oldUpScrollState = _upScroll.Enabled;
			bool oldDnScrollState = _dnScroll.Enabled;

			UpdateItemFromTextBox();

			if(!LayoutTimerActive &&  null != _selectedTab)
			{
				if(0 < e.Delta)
				{
					_selectedTab.ScrollItems(ScrollDirection.Up);
					_upScroll.Enabled = _selectedTab.CanScroll(ScrollDirection.Up  );
					_dnScroll.Enabled = _selectedTab.CanScroll(ScrollDirection.Down);
				}
				else
				{
					_selectedTab.ScrollItems(ScrollDirection.Down);
					_upScroll.Enabled = _selectedTab.CanScroll(ScrollDirection.Up  );
					_dnScroll.Enabled = _selectedTab.CanScroll(ScrollDirection.Down);
				}

				if(_dnScroll.Enabled != oldDnScrollState)
				{
					Invalidate(_dnScroll.Rectangle);
				}

				if(_upScroll.Enabled != oldUpScrollState)
				{
					Invalidate(_upScroll.Rectangle);
				}
			}
		}

		protected override void OnMouseDown(MouseEventArgs e)
		{
			bool bOldState;

			if(LayoutTimerActive)
			{
				return;
			}

			if(_textBox.Visible)
			{
				return;
			}

			if(!Focused)
			{
				Focus();
			}

			if(_upScroll.HitTest(e.X,e.Y))
			{
				if(_upScroll.Enabled)
				{
					bOldState = _dnScroll.Enabled;
					_upScroll.MouseDown = true;
					
					_selectedTab.ScrollItems(ScrollDirection.Up);

					_upScroll.Enabled = _selectedTab.CanScroll(ScrollDirection.Up  );
					_dnScroll.Enabled = _selectedTab.CanScroll(ScrollDirection.Down);

					if(bOldState != _dnScroll.Enabled)
					{
						_dnScroll.MouseDown = false;
						Invalidate(_dnScroll.Rectangle);
					}
					Invalidate(_upScroll.Rectangle);

					StopTimer();
					CreateScrollTimer(ScrollDirection.Up);
				}
			}
			else if(_dnScroll.HitTest(e.X,e.Y))
			{
				if(_dnScroll.Enabled)
				{
					bOldState = _upScroll.Enabled;
					_dnScroll.MouseDown = true;

					_selectedTab.ScrollItems(ScrollDirection.Down);
					
					_upScroll.Enabled = _selectedTab.CanScroll(ScrollDirection.Up  );
					_dnScroll.Enabled = _selectedTab.CanScroll(ScrollDirection.Down);

					if(!_dnScroll.Enabled)
					{
						//_dnScroll.MouseDown = false;
					}

					if(bOldState != _upScroll.Enabled)
					{
						_upScroll.MouseDown = false;
						Invalidate(_upScroll.Rectangle);
					}
					Invalidate(_dnScroll.Rectangle);

					StopTimer();
					CreateScrollTimer(ScrollDirection.Down);
				}
			}
			else
			{
				base.OnMouseDown(e);
			}

		}

		protected override void OnMouseUp(MouseEventArgs e)
		{
			Rectangle rcPaint = Rectangle.Empty;
			if(_upScroll.MouseDown)
			{
				StopTimer();
				_upScroll.MouseDown = false;
				rcPaint = Rectangle.Union(rcPaint,_upScroll.Rectangle);
			}

			if(_dnScroll.MouseDown)
			{
				StopTimer();
				_dnScroll.MouseDown = false;
				rcPaint = Rectangle.Union(rcPaint,_dnScroll.Rectangle);
			}

			if(!_upScroll.HitTest(e.X,e.Y) && !_dnScroll.HitTest(e.X,e.Y))
			{
				base.OnMouseUp(e);
			}

			if(!rcPaint.IsEmpty)
			{
				Invalidate(rcPaint);
			}
		}

		#endregion //Mouse Overrides

		#region Drag Drop

		protected override void OnDragEnter(DragEventArgs e)
		{
			//if(e.Data.GetDataPresent(typeof(Silver.UI.ToolBox.ToolBoxItem)))
			//{
			//	e.Effect = DragDropEffects.Copy;
			//}
			base.OnDragEnter(e);
		}

		protected override void OnDragOver(DragEventArgs e)
		{
			//int   index;
			//Point ptPos = Point.Empty;

			//if(e.Data.GetDataPresent(typeof(Silver.UI.ToolBox.ToolBoxTab)))
			//{
			//	ptPos.X  = e.X;
			//	ptPos.Y  = e.Y;
			//	ptPos    = PointToClient(ptPos);
			//	e.Effect = DragDropEffects.Move;
			//	index    = HitTestTab(ptPos.X,ptPos.Y);

			//	if(-1 != index && _patBltItem != this[index])
			//	{
			//		PatBltOnItem(this[index]);
			//	}
			//}
			base.OnDragOver(e);
		}

		protected override void OnDragDrop(DragEventArgs e)
		{
			base.OnDragDrop(e);
		}

		#endregion //Drag Drop

		#region Internal Events

		private bool OnRenameFinished(bool bCancelled)
		{
			bool bOK = true;
			if(null != RenameFinished)
			{
				bOK = RenameFinished(_textBox.Tag as ToolBoxItem,_textBox.Text, bCancelled);
			}
			return bOK;
		}

		private void OnToolBox_Load(object sender, EventArgs e)
		{
			RefreshTabs();
		}

		private void OnTextBox_KeyDown(object sender, KeyEventArgs e)
		{
			if(Keys.Enter == e.KeyCode)
			{
				EndRenameItem(true);
			}
			else if(Keys.Escape == e.KeyCode)
			{
				EndRenameItem(false);
			}
		}

		private void OnTextBox_LostFocus(object sender, EventArgs e)
		{
			if(_textBox.Visible && !_textBox.Focused)
			{
				if(Focused)
				{
					EndRenameItem(true);
				}
				else
				{
					EndRenameItem(0 < _textBox.TextLength);
				}
			}
		}

		private void OnTexBoxMenu_Popup(object sender, EventArgs e)
		{
			ContextMenu theMenu = sender as ContextMenu;
			bool bHasSelection  = (0 < _textBox.SelectionLength);

			theMenu.MenuItems[0].Enabled = _textBox.CanUndo; //Undo
			theMenu.MenuItems[2].Enabled = bHasSelection; //Cut
			theMenu.MenuItems[3].Enabled = bHasSelection; //Copy
			theMenu.MenuItems[5].Enabled = bHasSelection; //Delete
		}

		private void OnTexBoxMenu_Undo(object sender, EventArgs e)
		{
			_textBox.Undo();
		}

		private void OnTexBoxMenu_Cut(object sender, EventArgs e)
		{
			_textBox.Cut();
		}

		private void OnTexBoxMenu_Copy(object sender, EventArgs e)
		{
			_textBox.Copy();
		}

		private void OnTexBoxMenu_Paste(object sender, EventArgs e)
		{
			string clipboardString;

			// Performing custom paste to prevent richtext formatted
			// texts in the clipboard from altering the font of the text.
			if(true == Clipboard.GetDataObject().GetDataPresent(DataFormats.Text))
			{
				clipboardString = Clipboard.GetDataObject().GetData(DataFormats.Text) as string;

				_textBox.SelectionStart = _textBox.SelectionStart + _textBox.SelectionLength;
				_textBox.SelectedText   = clipboardString;
				clipboardString         = null;
			}
		}

		private void OnTexBoxMenu_Delete(object sender, EventArgs e)
		{
			_textBox.SelectedText = "";
		}

		private void OnTexBoxMenu_SelectAll(object sender, EventArgs e)
		{
			_textBox.SelectAll();
		}

		#endregion //Internal Events

	}
}

//----------------------------------------------------------------------------
