import Student from './Student'
import Record from './record'
import Childrenprops from './Childrenprops'
import Solvestate from './Solvestate'
import Onlick from './onclickevent'
import Test from './Test'
import Props from './Props'
import Counter from './Counter'
import Input from './Inputname'
import Text from './ShowHide'
import Loginform from './Loginpage'
import Conditionalrendering from './Conditionalrendering'
import Ternaryoperator from './Ternaryoperator'
import Array from './components/Array'


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



<Counter/>
<Input/>
<Text/>
<Loginform/>
<Conditionalrendering/>
<Ternaryoperator/>
<Array/>

    </div>
  )
}

export default App