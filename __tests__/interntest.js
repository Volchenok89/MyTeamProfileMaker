const Intern = require("../lib/Intern");
const { exportAllDeclaration } = require("@babel/types");

test("Creates Intern", () => {
    const intern = new Intern("Mina", "4", "intern@jmail.com", "CyberSky University");

    expect(intern).toEqual(expect.any(Object));
});

test("Measures for intern are correct", () => {
    const intern = new Intern("Mina", "4", "intern@jmail.com", "CyberSky University");

    expect(intern.name).toBe("Mina");
    expect(intern.id).toBe("4");
    expect(intern.email).toBe("intern@jmail.com");
    expect(intern.school).toBe("CyberSky University");
});

test("Get school via getSchool()", () => {
    const intern = new Intern("Mina", "4", "intern@jmail.com", "CyberSky University");

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test("Get position via getPosition()", () => {
    const intern = new Intern("Mina", "4", "intern@jmail.com", "CyberSky University");

    expect(intern.getPosition()).toBe('Intern');
});