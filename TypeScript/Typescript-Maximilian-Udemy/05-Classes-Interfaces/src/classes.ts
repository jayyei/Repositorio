// Code goes here!

abstract class Department {
    static fiscalYear = 2020;
    // readonly only with typescript
    // private readonly id: string;
    protected employees: string[] = [];
     
    constructor(protected readonly id: string, private name: string) {
        console.log(this.name)
    }

    static createEmployee(name: string) {
        return { name: name}
    }

    // with this parameter "this" here should always refer to an instance that's based
    // on the class (in this case Departent)
    // Could be similar to self ??
    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        // Cannot assign cause it is readonly
        // this.id = "3"
        this.employees.push(employee)
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees)
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: string, admins: string[]) {
        super(id, 'ITDepartment');
        this.admins = admins
    }

    describe() {
        console.log('IT Department -ID: ' + this.id);
    }
}

class AccountingDepartmet extends Department {

  private lastReport: string;
  private static instance: AccountingDepartmet;

  // with the private keyword we ensure we only have one class instance
  private constructor(id: string, private reports: string[]) {
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }

  static getInstance() {
      if (!AccountingDepartmet.instance) {
        AccountingDepartmet.instance = new AccountingDepartmet('d2', []);
      } 
      return AccountingDepartmet.instance;
  }

  describe() {
    console.log('Accounting Department - ID: ' + this.id)
  }

  get mostRecentReport () {
      if (this.lastReport) {
          return this.lastReport;
      }
       throw new Error('No report found');
  }

  set mostRecentReport (value: string) {
      if (!value) {
          throw new Error('Please pass in a valid value')
      }
    this.addReport(value);
  }


  addEmployee(name: string) {
      if (name === 'Max') {
          return;
      }
      // employees in the base classs is protected so, you can use it in and extended class
      this.employees.push(name)
  }
  
  addReport(text: string) {
      this.reports.push(text);
      this.lastReport = text;
  }

  printReports() {
    console.log(this.reports)
  }
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d2', ['Max']);
it.addEmployee('Max');
it.addEmployee('Manu');
it.describe();
it.printEmployeeInformation();

// const accounting = new AccountingDepartmet('d2', []);
const accounting = AccountingDepartmet.getInstance();
accounting.mostRecentReport = 'Year end report'
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);
accounting.addEmployee('Max');
accounting.addEmployee('Manu');
// accounting.printReports();
// accounting.printEmployeeInformation();
accounting.describe();


// const accountingCopy = {
//     name: 'se',
//     describe: accounting.describe
// }

// accountingCopy.describe();