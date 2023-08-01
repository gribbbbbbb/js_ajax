const xmlString = `
    <list>
    <student>
        <name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
    </student>
    <student>
        <name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
    </student>
    </list>
`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const students = xmlDOM.querySelectorAll("student");

const result = [];

students.forEach((student) => {
    const nameNode = student.querySelector("first");
    const surnameNode = student.querySelector("second");
    const ageNode = student.querySelector("age");
    const profNode = student.querySelector("prof");
    const langNode = student.querySelector("name");
    const langAttr = langNode.getAttribute("lang");

    result.push({
        name: nameNode.textContent + " " + surnameNode.textContent, age: Number(ageNode.textContent), prof: profNode.textContent, lang: langAttr
    })
});

const finalResult = {list: result};
console.log(finalResult);