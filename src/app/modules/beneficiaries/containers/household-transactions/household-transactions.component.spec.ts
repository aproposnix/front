import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HouseholdTransactionsComponent } from 'src/app/modules/beneficiaries/containers/household-transactions/household-transactions.component';
import { TransactionService } from 'src/app/core/api/transaction.service';
import { TransactionMockService } from 'src/app/core/api/mock/transaction-mock.service';
import { FormService } from 'src/app/core/utils/form.service';

describe('HouseholdTransactionsComponent', () => {
  let component: HouseholdTransactionsComponent;
  let fixture: ComponentFixture<HouseholdTransactionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: TransactionService, useClass: TransactionMockService },
        {
          provide: FormService,
          useValue: {
            getLocalCurrency: () => 'USD',
          },
        },
      ],
      declarations: [HouseholdTransactionsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
