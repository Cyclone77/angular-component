import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'way-input',
  templateUrl: './way-input.component.html',
  styleUrls: ['./way-input.component.css']
})
export class WayInputComponent implements OnInit, OnChanges {

  @Input() title: string;

  dataChange_List = [];
  private _descript: string;
  @Input()
  public set descript(v: string) {
    if (this._descript !== v) {
      this.dataChange_List.push(v);
    }
    this._descript = v;
  }
  public get descript() {
    return this._descript;
  }
  @Output() descriptChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  setDescript() {
    this.descript = '200';
    this.descriptChange.emit('200');
  }
}
