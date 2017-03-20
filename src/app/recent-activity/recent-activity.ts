export class RecentActivity
{
    constructor(
      public user: string,
      public item: string,
      public primary: string,
      public itemId: string,
      public image: string,
      public width: number,
      public height: number,
      public type: string,
      public iconCls: string,
      public iconPos: string,
      public category: string,
      public categoryId: string,
      public path: string,
      public activityDate: string
      //public others: number
    ){}


// {"user": "LisburnLad",
// "item":"Samsung 850 EVO 500 GB 2.5 inch Solid State Drive",
// "primary":"Samsung",
// "itemId":"w:20337",
// "image":"http://ecx.images-amazon.com/images/I/419p%2BD3kufL._SL75_.jpg",
// "width":75,
// "height":38,
// "type": "reviewed",
// "activityDate": "12/07/2016",
// "categoryId":"13336",
// "category":"Components",
// "path":"13336,13131,3",
// "iconCls": "witaSprites",
// "iconPos": "-222px -69px"}    
}