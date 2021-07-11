const Employee = require("../lib/Employee");


test("Create Employee", () => {
    const employee = new Employee("Volchenok", "89", "employee@jmail.com")

    expect(employee).toEqual(expect.any(Object));
});

test("Measures for employee are correct", () => {
    const employee = new Employee("Volchenok", "89", "employee@jmail.com")

    expect(employee.name).toBe("Volchenok");
    expect(employee.id).toBe("89");
    expect(employee.email).toBe("employee@jmail.com");
})

test("Get Name", () => {
    const employee = new Employee("Volchenok", "89", "employee@jmail.com")

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
});

test("Get ID", () => {
    const employee = new Employee("Volchenok", "89", "employee@jmail.com")

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("Get email", () => {
    const employee = new Employee("Volchenok", "89", "employee@jmail.com")

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test("Get Position", () => {
    const employee = new Employee("Volchenok", "89", "employee@jmail.com")

    expect(employee.getPosition()).toBe("Employee");
});