import Student from './Student'
import Record from './record'
import Childrenprops from './Childrenprops'
import Solvestate from './Solvestate'
import Onlick from './onclickevent'
import Test from './Test'
import Props from './Props'


function App() {
  return (
    <div>
      <Student
        name="Vivek"
        age={20}
        course="CSE"
      />

      <Student
        name="Rahul"
        age={21}
        course="IT"
      />

      <Record
        name="Vivek"
        age={20}
        course="CSE"
      />

      <Childrenprops>
        <h1>Vivek Singh</h1>
        <p>CSE Student</p>
      </Childrenprops>

<Solvestate />
<Onlick />
<Test />


<Props
category="iphone"
title="5412"
/>






    </div>
  )
}

export default App