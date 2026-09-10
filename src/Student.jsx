function Student(props) {

  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Course: {props.course}</h3>
    </div>
  )

}

export default Student;