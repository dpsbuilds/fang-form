import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosManagement } from './todos';

describe('Todos', () => {
  let component: TodosManagement;
  let fixture: ComponentFixture<TodosManagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosManagement],
    }).compileComponents();

    fixture = TestBed.createComponent(TodosManagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
