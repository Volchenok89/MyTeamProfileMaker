const Engineer = require("../lib/Engineer");


test("Create Engineer", () => {
    const engineer = new Engineer("Volchenok", "2", "engineer@jmail.com", "engineer@github.com");

    expect(engineer).toEqual(expect.any(Object));
});

test("Measures for engineer are correct", () => {
    const engineer = new Engineer("Volchenok", "2", "engineer@jmail.com", "engineer@github.com");

    expect(engineer.name).toBe("Volchenok");
    expect(engineer.id).toBe("2");
    expect(engineer.email).toBe("engineer@jmail.com");
    expect(engineer.github).toBe("engineer@github.com");
});

test("Get github via getGithub()", () => {
    const engineer = new Engineer("Volchenok", "2", "engineer@jmail.com", "engineer@github.com");

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test("Get position", () => {
    const engineer = new Engineer("Volchenok", "2", "engineer@jmail.com", "engineer@github.com");

    expect(engineer.getPosition()).toBe("Engineer");
});