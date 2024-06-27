const a = 56;
        const num = [4, 5, 6, 7, 8];
        const person = {
            name: 'sakib khan'
        };

        const message = `hi, ${person.name} has a : ${a} access to ${num[1]}`;
        console.log(message); // This will log: "hi, sakib khan has a : 56 access to 5"

        const square = x => x * x;
        const sum = (a, b) => a + b;

        const { age, z, ...others } = { x: 2, y: 5, z: 3, name: 'kuttaa', age: 44 };
        console.log(age); // This will log: 44
        console.log(z); // This will log: 3
        console.log(others); // This will log: { x: 2, y: 5, name: 'kuttaa' }

        const [first, second, ...remaining] = ['ram', 'sham', 'jodu', 'modu'];
        console.log(first); // This will log: 'ram'
        console.log(second); // This will log: 'sham'
        console.log(remaining); // This will log: ['jodu', 'modu']

        const data = [{ id: 1, name: 'abul', address: 'kochukhet' }];
        console.log(data[0].address); // This will log: 'kochukhet'
