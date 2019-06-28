import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesFriendComponent } from './yes-friend.component';

describe('YesFriendComponent', () => {
  let component: YesFriendComponent;
  let fixture: ComponentFixture<YesFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
