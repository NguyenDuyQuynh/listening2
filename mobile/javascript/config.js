	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	;bookConfig.loadingCaption="Đợi một xíu";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#182329";bookConfig.appLogoIcon="files/mobile-ext/appLogoIcon.png";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.HomeURL="%first page%";bookConfig.appLogoOpenWindow="Blank";bookConfig.toolbarColor="#182329";bookConfig.iconColor="#b2a394";bookConfig.pageNumColor="#333333";bookConfig.FlipSound="Enable";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.ShareButtonVisible="Hide";bookConfig.ThumbnailsButtonVisible="Hide";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ZoomButtonVisible="Yes";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Hide";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.PrintButtonVisible="No";bookConfig.BackgroundSoundButtonVisible="Enable";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="No";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.minZoomWidth="700";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="yes";bookConfig.DownloadButtonVisible="Hide";bookConfig.bgBeginColor="#056474";bookConfig.bgEndColor="#056474";bookConfig.bgMRotation="120";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Hide";bookConfig.HardPageEnable="No";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.3";bookConfig.retainBookCenter="Yes";bookConfig.FlipStyle="Flip";bookConfig.showDoublePage="Yes";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="60";bookConfig.rightMargin="60";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.showLinkHint="No";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=2;bookConfig.largePageWidth=1024;bookConfig.largePageHeight=1325;;bookConfig.securityType="1";bookConfig.bookTitle="English Listening Practice Test";bookConfig.productName="Flip PDF Professional";bookConfig.homePage="http://www.flipbuilder.com";bookConfig.searchPositionJS="mobile/javascript/search_config.js";bookConfig.searchTextJS="mobile/javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";bookConfig.UIBaseURL='mobile/';var language = [{ language : "English",btnFirstPage:"First",btnNextPage:"Next Page",btnLastPage:"Last",btnPrePage:"Previous Page",btnDownload:"Download",btnPrint:"Print",btnSearch:"Search",btnClearSearch:"Clear",btnBookMark:"Table of contents",btnHelp:"Help",btnFullScreen:"Enable FullScreen",btnDisableFullScreen:"Disable FullScreen",btnSoundOn:"Sound On",btnSoundOff:"Sound Off",btnShareEmail:"Share",btnSocialShare:"Social Share",btnZoomIn:"Zoom In",btnZoomOut:"Zoom Out",btnDragToMove:"Move by mouse drag",btnAutoFlip:"Auto Flip",btnStopAutoFlip:"Stop Auto Flip",btnGoToHome:"Return Home",frmHelpCaption:"Help",frmHelpTip1:"Double click to zoom in or out",frmHelpTip2:"Drag the page corner to view",frmPrintCaption:"Print",frmPrintBtnCaption:"Print",frmPrintPrintAll:"Print All Pages",frmPrintPrintCurrentPage:"Print Current Page",frmPrintPrintRange:"Print Range",frmPrintExampleCaption:"Example: 2,5,8-26",frmPrintPreparePage:"Preparing Page:",frmPrintPrintFailed:"Print Failed:",pnlSearchInputInvalid:"(Minimal request length is 3 symbols)",loginCaption:"Login",loginInvalidPassword:"Not a valid password!",loginPasswordLabel:"Password:",loginBtnLogin:"Login",loginBtnCancel:"Cancel",btnThumb:"Thumbnails",lblPages:"Pages:",lblPagesFound:"Pages:",lblPageIndex:"Page",btnAbout:"About",frnAboutCaption:"About & Contact",btnSinglePage:"Single Page",btnDoublePage:"Double Page",btnSwicthLanguage:"Switch Language",tipChangeLanguage:"Please select a language below...",btnMoreOptionsLeft:"More Options",btnMoreOptionsRight:"More Options",btnFit:"Fit Window",smallModeCaption:"Click to view in fullscreen",btnAddAnnotation:"Add Annotations",btnAnnotation:"Annotations",FlipPageEditor_SaveAndExit:"Save and Exit",FlipPageEditor_Exit:"Exit",DrawToolWindow_Redo:"Redo",DrawToolWindow_Undo:"Undo",DrawToolWindow_Clear:"Clear",DrawToolWindow_Brush:"Brush",DrawToolWindow_Width:"Width",DrawToolWindow_Alpha:"Alpha",DrawToolWindow_Color:"Color",DrawToolWindow_Eraser:"Eraser",DrawToolWindow_Rectangular:"Rectangular",DrawToolWindow_Ellipse:"Ellipse",TStuff_BorderWidth:"Border Width",TStuff_BorderAlph:"Border Alpha",TStuff_BorderColor:"Border Color",DrawToolWindow_TextNote:"Text Note",AnnotMark:"Bookmarks",lastpagebtnHelp:"Last page",firstpagebtnHelp:"First page",homebtnHelp:"Return to home page",aboubtnHelp:"About",screenbtnHelp:"Open this application in full-screen mode",helpbtnHelp:"Show help",searchbtnHelp:"Search from pages",pagesbtnHelp:"Take a look at the thumbnail of this brochure",bookmarkbtnHelp:"Open Bookmarks",AnnotmarkbtnHelp:"Open Table of contents",printbtnHelp:"Print the brochure",soundbtnHelp:"Turn on or off the sound",sharebtnHelp:"Send Email to",socialSharebtnHelp:"Social Share",zoominbtnHelp:"Zoom in",downloadbtnHelp:"Downdlaod this brochure",pagemodlebtnHelp:"Switch Single and double page mode",languagebtnHelp:"Switch Lauguage",annotationbtnHelp:"Add Annotation",addbookmarkbtnHelp:"Add Bookmark",removebookmarkbtnHelp:"Remove BookMark",updatebookmarkbtnHelp:"Update Bookmark",btnShoppingCart:"Shopping Cart",Help_ShoppingCartbtn:"Shopping Cart",Help_btnNextPage:"Next page",Help_btnPrePage:"Previous page",Help_btnAutoFlip:"Auto filp",Help_StopAutoFlip:"Stop atuo filp",btnaddbookmark:"Add",btndeletebookmark:"Delete",btnupdatebookmark:"Update",frmyourbookmarks:"Your bookmarks",frmitems:"items",DownloadFullPublication:"Full Publication",DownloadCurrentPage:"Current Page",DownloadAttachedFiles:"Attached Files",lblLink:"Link",btnCopy:"Copy Button",restorePage:"Would you like to restore previous session",tmpl_Backgoundsoundon:"Background Sound On",tmpl_Backgoundsoundoff:"Background Sound Off",tmpl_Flipsoundon:"Flip Sound On",tmpl_Flipsoundoff:"Flip Sound Off",Help_PageIndex:"The current page number",tmpl_PrintPageRanges:"PAGE RANGES",tmpl_PrintPreview:"PREVIEW",btnSelection:"Select Text",loginNameLabel:"Name:",btnGotoPage:"Go",btnSettings:"Setting",soundSettingTitle:"Sound Setting",closeFlipSound:"Close Flip Sound",closeBackgroundSound:"Close Backgorund Sound",frmShareCaption:"Share",frmShareLinkLabel:"Link:",frmShareBtnCopy:"Copy",frmShareItemsGroupCaption:"Social Share",TAnnoActionPropertyStuff_GotoPage:"Go to page",btnPageBack:"Back",btnPageForward:"Forward",SelectTextCopy:"Copy Text",selectCopyButton:"Copy",TStuffCart_TypeCart:"Shopping Cart",TStuffCart_DetailedQuantity:"Quantity",TStuffCart_DetailedPrice:"Price",ShappingCart_Close:"Close",ShappingCart_CheckOut:"Checkout",ShappingCart_Item:"Item",ShappingCart_Total:"Total",ShappingCart_AddCart:"Add to cart",ShappingCart_InStock:"In Stock",TStuffCart_DetailedCost:"Shipping cost",TStuffCart_DetailedTime:"Delivery time",TStuffCart_DetailedDay:"day(s)",ShappingCart_NotStock:"Not enough in stock",btnCrop:"Crop",btnDragButton:"Drag",btnFlipBook:"Flip Book",btnSlideMode:"Slide Mode",btnSinglePageMode:"Single Page Mode",btnVertical:"Vertical Mode",btnHotizontal:"Horizontal Mode",btnClose:"Close",btnDoublePage:"Double Page",btnBookStatus:"Book View",checkBoxInsert:"Insert Current Page",lblLast:"This is the last page.",lblFirst:"This is the first page.",lblFullscreen:"Click to view in fullscreen",lblName:"Name",lblPassword:"Password",lblLogin:"Login",lblCancel:"Cancel",lblNoName:"User name can not be empty.",lblNoPassword:"Password can not be empty.",lblNoCorrectLogin:"Please enter the correct user name and password.",btnVideo:"Video Gallery",btnSlideShow:"Slide Show",pnlSearchInputInvalid:"(Minimal request length is 3 symbols)",btnDragToMove:"Move by mouse drag",btnPositionToMove:"Move by mouse position",lblHelp1:"Drag the page corner to view",lblHelp2:"Double click to zoom in, out",lblCopy:"Copy",lblAddToPage:"add to page",lblPage:"Page",lblTitle:"Title",lblEdit:"Edit",lblDelete:"Delete",lblRemoveAll:"Remove All",tltCursor:"cursor",tltAddHighlight:"add highlight",tltAddTexts:"add texts",tltAddShapes:"add shapes",tltAddNotes:"add notes",tltAddImageFile:"add image file",tltAddSignature:"add signature",tltAddLine:"add line",tltAddArrow:"add arrow",tltAddRect:"add rect",tltAddEllipse:"add ellipse",lblDoubleClickToZoomIn:"Double click to zoom in.",frmShareCaption:"Share",frmShareLabel:"Share",frmShareInfo:"You can easily share this publication to social networks.Just cilck the appropriate button below.",frminsertLabel:"Insert to Site",frminsertInfo:"Use the code below to embed this publication to your website."}];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{"annoPlaying":"true","shoppingCartHTML":"false","shoppingCartOptinon":{"type":"PayPal","paypal":"","method":"POST","sandbox":"false","address":"","theme":"","body":"Hi xxx<br/>   I'm going to buy below product(s):<br/>    ${shopping}<br/>Full Name","showPrice":"true","showTime":"true"}}, "pageAnnos":[[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2021122347512227","alpha":"1","location":{"tannoName":"Q1","x":"0.4019607843137255","y":"0.17045454545454544","width":"0.2542483660130719","height":"0.038825757575757576","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer","className":"StandardAudioPlayer","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/Part 1 Q1.mp3"}}}},{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2021122347512129","alpha":"1","location":{"tannoName":"Q2","x":"0.4997276688453159","y":"0.3903619528619529","width":"0.2542483660130719","height":"0.038825757575757576","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer","className":"StandardAudioPlayer","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/Part 1 Q2.mp3"}}}},{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2021122347516602","alpha":"1","location":{"tannoName":"Q3","x":"0.4765795206971678","y":"0.6197390572390572","width":"0.2542483660130719","height":"0.038825757575757576","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer","className":"StandardAudioPlayer","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/Part 1 Q3.mp3"}}}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"2021122347511705","alpha":"1","location":{"tannoName":"correct1","x":"0.7156862745098039","y":"0.3442760942760943","width":"0.060076252723311546","height":"0.04642255892255892","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Blue Glow.swf","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":{"photo":{"title":"","desc":"","url":"./files/pageConfig/Correct.jpg"}},"sliderType":"1"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"2021122347518768","alpha":"1","location":{"tannoName":"incorrect1","x":"0.485838779956427","y":"0.3442760942760943","width":"0.060076252723311546","height":"0.04642255892255892","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Blue Glow.swf","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":{"photo":{"title":"","desc":"","url":"./files/pageConfig/incorrect.jpg"}},"sliderType":"1"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"2021122347517888","alpha":"1","location":{"tannoName":"incorrect1","x":"0.24183006535947713","y":"0.3442760942760943","width":"0.060076252723311546","height":"0.04642255892255892","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Blue Glow.swf","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":{"photo":{"title":"","desc":"","url":"./files/pageConfig/incorrect.jpg"}},"sliderType":"1"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"20211223475122","alpha":"1","location":{"tannoName":"incorrect2","x":"0.7135076252723311","y":"0.5614478114478114","width":"0.060076252723311546","height":"0.04642255892255892","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Blue Glow.swf","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":{"photo":{"title":"","desc":"","url":"./files/pageConfig/incorrect.jpg"}},"sliderType":"1"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"2021122347519560","alpha":"1","location":{"tannoName":"correct2","x":"0.48366013071895425","y":"0.5614478114478114","width":"0.060076252723311546","height":"0.04642255892255892","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Blue Glow.swf","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":{"photo":{"title":"","desc":"","url":"./files/pageConfig/Correct.jpg"}},"sliderType":"1"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"2021122347519443","alpha":"1","location":{"tannoName":"incorrect2","x":"0.23965141612200433","y":"0.5614478114478114","width":"0.060076252723311546","height":"0.04642255892255892","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Blue Glow.swf","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":{"photo":{"title":"","desc":"","url":"./files/pageConfig/incorrect.jpg"}},"sliderType":"1"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"2021122347516602","alpha":"1","location":{"tannoName":"incorrect3","x":"0.7135076252723311","y":"0.7912457912457912","width":"0.060076252723311546","height":"0.04642255892255892","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Blue Glow.swf","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":{"photo":{"title":"","desc":"","url":"./files/pageConfig/incorrect.jpg"}},"sliderType":"1"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"2021122347514623","alpha":"1","location":{"tannoName":"correct3","x":"0.48366013071895425","y":"0.7912457912457912","width":"0.060076252723311546","height":"0.04642255892255892","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Blue Glow.swf","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":{"photo":{"title":"","desc":"","url":"./files/pageConfig/Correct.jpg"}},"sliderType":"1"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"2021122347512909","alpha":"1","location":{"tannoName":"incorrect3","x":"0.23965141612200433","y":"0.7912457912457912","width":"0.060076252723311546","height":"0.04642255892255892","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Blue Glow.swf","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":{"photo":{"title":"","desc":"","url":"./files/pageConfig/incorrect.jpg"}},"sliderType":"1"}},{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoText","annoId":"2021122347519343","alpha":"1","location":{"tannoName":"text1","x":"0.55","y":"0.844949494949495","width":"0.3272058823529412","height":"0.04292929292929293","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"false","selectable":"false","auto":"true","textStr":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"20\" COLOR=\"#0000FF\" LETTERSPACING=\"0\" KERNING=\"0\">Answer: Next page</FONT></P></TEXTFORMAT>","lineHeightRation":"0.045696999999999995","formats":{"defaultFormat":{"htmlText":"<TEXTFORMAT LEADING=\"5\"><P ALIGN=\"CENTER\"><FONT FACE=\"Tahoma,Arial,Verdana\" SIZE=\"20\" COLOR=\"#0000FF\" LETTERSPACING=\"0\" KERNING=\"0\">Answer: Next page</FONT></P></TEXTFORMAT>","pageH":"792","pageW":"612"}},"background":{"alpha":"0.7","fillBg":"false","color":"16777215"}},{"annotype":"com.mobiano.flipbook.pageeditor.shapes::TAnnoDovetailed","annoId":"2021122347513448","alpha":"1","spType":"null","fillStyle":"Pure","color":"255","gradientColorA":"255","gradientColorB":"255","angle":"90","spalpha":"0.7","borderWidth":"1","borderColor":"255","borderAlpha":"1","round":"false","ellipseWidth":"5","ellipseHeight":"5","triangleRight":"false","triangleLeft":"false","arrowWidth":"60","arrowTailHeight":"40","arrowType":"false","crossWidht":"40","crossType":"false","cylinderRadius":"60","bottomLength":"80","location":{"tannoName":"shape1","x":"0.8660130718954249","y":"0.8472222222222222","width":"0.04294117647058824","height":"0.033030303030303035","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"}}],[{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2021122347519438","alpha":"1","location":{"tannoName":"sound1","x":"0.4455337690631809","y":"0.0361952861952862","width":"0.2543300653594771","height":"0.03888888888888889","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer","className":"StandardAudioPlayer","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/Part 1 Q4.mp3"}}}},{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2021122347518817","alpha":"1","location":{"tannoName":"Q4","x":"0.511437908496732","y":"0.2588383838383838","width":"0.2543300653594771","height":"0.03888888888888889","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer","className":"StandardAudioPlayer","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/Part 1 Q5.mp3"}}}},{"annotype":"com.mobiano.flipbook.pageeditor::TAnnoPlugIn","annoId":"2021122347515715","alpha":"1","location":{"tannoName":"Section 2","x":"0.20016339869281047","y":"0.47664141414141414","width":"0.2543300653594771","height":"0.03888888888888889","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"cpName":"StandardAudioPlayer","className":"StandardAudioPlayer","componentData":{"playEvt":"none","stopEvt":"EVT_PageOffView","songs":{"song":{"url":"./files/pageConfig/Part 2.mp3"}}}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"2021122347515151","alpha":"1","location":{"tannoName":"correct4","x":"0.7140522875816994","y":"0.20959595959595959","width":"0.060076252723311546","height":"0.04642255892255892","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Blue Glow.swf","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":{"photo":{"title":"","desc":"","url":"./files/pageConfig/Correct.jpg"}},"sliderType":"1"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"2021122347516169","alpha":"1","location":{"tannoName":"incorrect4","x":"0.4852941176470588","y":"0.20959595959595959","width":"0.060076252723311546","height":"0.04642255892255892","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Blue Glow.swf","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":{"photo":{"title":"","desc":"","url":"./files/pageConfig/incorrect.jpg"}},"sliderType":"1"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"2021122347511164","alpha":"1","location":{"tannoName":"incorrect4","x":"0.24074074074074076","y":"0.20959595959595959","width":"0.060076252723311546","height":"0.04642255892255892","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Blue Glow.swf","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":{"photo":{"title":"","desc":"","url":"./files/pageConfig/incorrect.jpg"}},"sliderType":"1"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"2021122347513262","alpha":"1","location":{"tannoName":"incorrect5","x":"0.7169117647058824","y":"0.4253472222222222","width":"0.060076252723311546","height":"0.04642255892255892","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Blue Glow.swf","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":{"photo":{"title":"","desc":"","url":"./files/pageConfig/incorrect.jpg"}},"sliderType":"1"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"202112234751742","alpha":"1","location":{"tannoName":"incorrect5","x":"0.4881535947712418","y":"0.4253472222222222","width":"0.060076252723311546","height":"0.04642255892255892","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Blue Glow.swf","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":{"photo":{"title":"","desc":"","url":"./files/pageConfig/incorrect.jpg"}},"sliderType":"1"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoHotSpots","annoId":"202112234751783","alpha":"1","location":{"tannoName":"correct5","x":"0.24305555555555555","y":"0.4253472222222222","width":"0.060076252723311546","height":"0.04642255892255892","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"hotSpotsURL":"./files/pageConfig/Blue Glow.swf","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":{"photo":{"title":"","desc":"","url":"./files/pageConfig/Correct.jpg"}},"sliderType":"1"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"2021122347513127","alpha":"1","mouseOverEffect":"1","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScale":"false","location":{"tannoName":"image1","x":"0.761437908496732","y":"0.8838383838383839","width":"0.22549019607843132","height":"0.04419191919191919","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"true","highlightsURL":"","highlightsLabel":"none","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","url":"./files/pageConfig/Answer.png","originalURL":"./files/pageConfig/Answer.png","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":{"photo":{"title":"","desc":"","url":"./files/pageConfig/Answer2.png"}},"sliderType":"1"},"effect":{"effectType":"com.mobiano.flipbook.pageeditor.effect::TFadeInEffect","triggerAction":"Fade In","duration":"1","position":"left"}},{"annotype":"com.mobiano.flipbook.pageeditor.TAnnoImage","annoId":"2021122347514299","alpha":"1","mouseOverEffect":"1","borderColor":"16737792","Gifview":"-1","imgOriginalProportions":"true","imgScale":"false","location":{"tannoName":"image1","x":"0.7712418300653595","y":"0.43308080808080807","width":"0.22549019607843132","height":"0.04419191919191919","rotation":"0","reflection":"false","reflectionType":"0","reflectionAlpha":"0","pageWidth":"612","pageHeight":"792"},"hint":{"hintShapeColor":"0","hintShapeColor2":"8388736","hintShapeAlpha":"1","hintW":"0","hintH":"0","hintAuto":"true","hintShapeType":"2","text":""},"shadow":{"hasDropShadow":"false","shadowDistance":"4","shadowAngle":"270","shadowColor":"0","shadowAlpha":"0.6","shadowBlurX":"4","shadowBlurY":"4"},"highlightsBool":"true","highlightsURL":"","highlightsLabel":"none","imgPosition":"","popUpImage":"false","frame":"frame0","colorMatrix":"original","imgScale":"1","imgRotation":"0","imgContX":"0","imgContY":"0","url":"./files/pageConfig/Answer.png","originalURL":"./files/pageConfig/Answer.png","action":{"triggerEventType":"mouseUp","actionType":"com.mobiano.flipbook.pageeditor.TAnnoActionPhotoSlide","cpName":"fbp","className":"com.mobiano.flipbook.Action.TAnnoActionPhotoSlide","photos":{"photo":{"title":"","desc":"","url":"./files/pageConfig/Answer1.png"}},"sliderType":"1"},"effect":{"effectType":"null","triggerAction":"Note","duration":"1","position":"left"}}]]}; bookConfig.isFlipPdf=false;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}
