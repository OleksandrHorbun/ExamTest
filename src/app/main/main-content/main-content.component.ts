import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MainServiceService } from 'src/app/services/main-service.service';
import { Iarticle } from 'src/app/interfaces/Iarticle'

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.sass'],
  encapsulation: ViewEncapsulation.None,
})
export class MainContentComponent implements OnInit {

  articleID = this.service.ID$
  articles: Iarticle[]=[];
  constructor(private service:MainServiceService) {}

  private VstavkaHTML(data: number): void{
  }

  public ToSubscribe(): Iarticle[]{
    this.service.count$.subscribe((count) => this.VstavkaHTML(count));
    this.service.getArticle().subscribe(
    (art)=>{
      console.log(art);
      this.articles = art;
    }
    );
    return (this.articles);
  }

  ngOnInit(): void {
    this.ToSubscribe()
    this.changeVisible(0)
    this.changeVisible(1)
    this.changeVisible(2)
  }
  
  opened:string[] = ["../assets/img/open.png", "../assets/img/open.png", "../assets/img/open.png"]
  visible:string[] = ["", "", ""]
  changeVisible(num:number) {
    if (this.visible[num] == ""){
      this.visible[num] = "nodisplay" //display:NONE
      this.opened[num] = "../assets/img/open.png" //Icon to open
    }
    else{
      this.visible[num] = "" //Visible
      this.opened[num] = "../assets/img/close.png" //Icon to close
    }
  }

}

function num(num: any) {
  throw new Error('Function not implemented.');
}
