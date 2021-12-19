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
    this.service.count$.subscribe((count) => this.VstavkaHTML(count));
    this.service.getArticle().subscribe(
    (art)=>{
      this.articles = art;
    }
    );
  }

}
