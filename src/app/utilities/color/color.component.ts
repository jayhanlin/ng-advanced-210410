import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  type = 0;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // 寫法1
    this.type = +this.route.snapshot.paramMap.get('type');

    // 寫法2
    this.route.paramMap.subscribe(params => {
      this.type = +params.get('type');
    });

    // 寫法3  舊寫法，不建議用此寫法，因為弱型別
    // this.type = this.route.snapshot.params['type'];

    // 寫法4  舊寫法，不建議用此寫法，因為弱型別
    // this.route.params.subscribe(params => {
    //   this.type = params.get('type');
    // });
  }

  plusOne() {
    this.router.navigate(['/utilities/color/', this.type + 1])
  }
}
