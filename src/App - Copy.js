import React, { Component } from 'react';

/*
class SubjectList extends Component {

// SubjectList has access to CMSCSubjects through its props. 
// ‘this.props’ is a convention in ReactJS. It’s how we access 
// all data passed to a component. ‘data’ is the name we gave to 
// the attribute when we passed it.

  render() {
    const subjects = this.props.data;

    return (
      
      <ol>
      {
        subjects.map(
          (subject) => {
            <li>{subject.code} - {subject.description}</li>
          }
        )
      }

      </ol>

    )
  }


}
*/


class App extends Component {
  render() {
 /*   const CMSCSubjects = [
      { code: "CMSC100", description: "Web Programming", id: 1 },
      { code: "CMSC150", description: "Scientific Computation", id: 2 },
      { code: "CMSC22", description: "Object-Oriented Programming", id: 3 },
    ];

    const CHEMSubjects = [
      { code: "CHEM100", description: "Introduction to Organic Chemistry", id: 1 },
      { code: "CHEM10", description: "Chemical Kinetics", id: 2 },
      { code: "CHEM11", description: "Introduction to Biochemistry", id: 3 },
    ];

*/
  //      <SubjectList data={CMSCSubjects}/>
    return (
      <div>

      </div>
    );

  }
}


export default App;
