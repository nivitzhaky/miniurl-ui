import { Component,Renderer2, OnInit, Inject } from '@angular/core';
import {MiniUrlResponse,miniurl,bookmark, DataService} from '../../services/data.service'
import {Observable} from 'rxjs/Rx';
import { DOCUMENT } from '@angular/platform-browser';


@Component({
  selector: 'app-miniurl-table',
  templateUrl: './miniurl-table.component.html',
  styleUrls: ['./miniurl-table.component.css']
})
export class MiniurlTableComponent implements OnInit {
  urls:miniurl[];
  addurl : string = "";
  addalias : string = "";
  username : string = "";
  loginouttext :string = "LOGIN";
  public isCollapsed: boolean = true;
  
    public collapsed(event: any): void {
      console.log(event);
    }
  
    public expanded(event: any): void {
      console.log(event);
    }
  
   constructor(private dataService:DataService,private _renderer2: Renderer2, @Inject(DOCUMENT) private _document ){ }
   ngOnInit() {


    console.log("apppended!!!");
    this.getUrls();
  };

  public getUrls() {
    this.dataService.getMiniUrls(this.username).subscribe((urls) => {
      //console.log(posts);
      this.urls = urls;
    })

  }
  public myshow(staticModal ) {
    console.log("loginout called!!!");
   if (this.loginouttext == "LOGIN") {
      console.log("showing!!!");
     staticModal.show();
   }else {
    console.log("LOGOUT!!!");
     this.loginouttext  = "LOGIN";
     this.username = "";
     this.getUrls();
   }
  };

   mylogin(staticModal) {
   
   if (!(this.username == "")) {
    this.loginouttext  =   "LOGOUT";
   }
   staticModal.hide();
   this.getUrls();
}
    

  addMiniUrl() {
    console.log(this.addurl)
    console.log(this.addalias)
    var jstr  = ' {"url":"' + this.addurl + '", "alias":"' + this.addalias + '"';
    if (this.username != "") {
      jstr  = jstr +  ' ,"user":"' + this.username  + '"';
    } 
    jstr = jstr + "}"
    console.log(jstr);
    var b : bookmark=  JSON.parse(jstr);

    this.dataService.addMiniUrl(b).map(res => <MiniUrlResponse>res.json()).subscribe((ur) => {
      var url : miniurl = {id:ur.postfix,link:ur.link,user:this.username, clicks:0, url:this.addurl, alias:this.addalias};
      this.urls.unshift(url)
    })  
    
  }

   delete(id : string) {
    this.dataService.deleteMiniUrl(id).subscribe((urls) => {
      console.log("deleted");
      this.urls = this.urls.filter(item => item.id !== id);
    });
  }
}
