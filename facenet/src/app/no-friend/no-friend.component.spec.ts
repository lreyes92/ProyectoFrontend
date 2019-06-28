import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFriendComponent } from './no-friend.component';

describe('NoFriendComponent', () => {
  let component: NoFriendComponent;
  let fixture: ComponentFixture<NoFriendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoFriendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoFriendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
