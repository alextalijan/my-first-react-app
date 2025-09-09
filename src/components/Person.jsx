import { useState } from 'react';
import Input from './Input.jsx';

function Person() {
  const [person, setPerson] = useState({ firstName: "John", lastName: "Arbacle", age: 100 });

  const handleIncreaseAge = () => {
    setPerson({ ...person, age: person.age + 1 });
  };

  return (
    <>
      <h1>{person.firstName + ' ' + person.lastName}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <Input label="First Name" handleChange={(event) => setPerson({...person, firstName: event.target.value})} />
      <Input label="Last Name" handleChange={(event) => setPerson({...person, lastName: event.target.value})} />
    </>
  );
}

export default Person;
