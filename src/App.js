import React, { Component } from 'react';

class ListItem extends Component {
  render() {
    return(
      <li key={this.props.key}>{this.props.itemContent}</li>
    )
  }
}

class UnorderedList extends Component {
    render() {
      const { data: buildings, title} = this.props;
      return(
          <div>
            <h3> Title </h3>
            <ul>
            {
                buildings.map( (building) => {
                    return(
                        <ListItem itemContent={building} />
                    )
                })
            }
            </ul>  
          </div>
      )
    }
}

class SubjectList extends Component {

// SubjectList has access to CMSCSubjects through its props. 
// ‘this.props’ is a convention in ReactJS. It’s how we access 
// all data passed to a component. ‘data’ is the name we gave to 
// the attribute when we passed it.

  render() {
    // Use of props structure
    // const subjects = this.props.data;
    // const title = this.props.title;
    /*      const itemContent = subject.code 
              + ' ' 
              + subject.description;
    */
    /*      subjects.map((subject) => {
            return (
              <li key={subject.id}>{subject.code} - {subject.description}</li>
            )
          }) 
    */

    // for destructuring topic
    const { data: subjects, title }    = this.props;

    /* <ListItem 
      key = subject.id
      itemContent = itemContent
    >  */

/*    <div><h3>{title} Subjects List </h3></div>
      <ol>
        {

          subjects.map((subject) => {

            const itemContent = subject.code + ' '
                + subject.description;

            return(
              <ListItem 
                key = {subject.id}
                itemContent = {itemContent}
              />
             )
          })
        }
      </ol>
*/

    // SubjectList
    // SubjectList component

    return (      
          <div><h3>{title} Subjects List </h3>          
          <ol>
            {
              subjects.map((subject) => {
                const itemContent = subject.code + ' ' + subject.description;
                return (
                  <ListItem
                    key={subject.id}
                    itemContent={itemContent} />
                )
              })
            }
          </ol>
          </div>
    )
  }
}



class App extends Component {

  render() {
   const CMSCSubjects = [
      { code: "CMSC100", description: "Web Programming", id: 1 },
      { code: "CMSC150", description: "Scientific Computation", id: 2 },
      { code: "CMSC22", description: "Object-Oriented Programming", id: 3 },
    ];

    const CHEMSubjects = [
      { code: "CHEM100", description: "Introduction to Organic Chemistry", id: 1 },
      { code: "CHEM10", description: "Chemical Kinetics", id: 2 },
      { code: "CHEM11", description: "Introduction to Biochemistry", id: 3 },
    ];

    const buildings = ['Physci','Biosci','Humanities','CAS Annex 1','CAS Annex 2'];


    //return createElement("div", null, "Hello World");
          
    return (
      <div>
        <SubjectList 
          data={CMSCSubjects}
          title={'CMSC'}
        />
        <SubjectList 
          data={CHEMSubjects}
          title={'CHEM'}
        />
        <UnorderedList 
          data={buildings}
          title={'Buildings'}
        />
      </div>
    );

  }
}


export default App;
