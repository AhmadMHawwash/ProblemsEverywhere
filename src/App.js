import React, { Component } from 'react';
import cases from './Problems';

const styles = {
  headers: {
    title: {
      display: 'flex',
      flex: 1,
      padding: 5,
      margin: 5,
      backgroundColor: 'grey',
    },
    description: {
      display: 'flex',
      flex: 5,
      margin: 5,
      padding: 5,
      backgroundColor: 'grey',
    },
    runTestCases: {
      width: 140,
      padding: 5,
      textAlign: 'center',
      margin: 5,
      backgroundColor: 'grey',
    },
  },
  containers: {
    problems: {
      display: 'flex',
      flexDirection: 'column',
      margin: 10,
      height: 200,
      overflowX: 'scroll'
    },
    header: {
      display: 'flex',
      flexDirection: 'row',
      margin: 10
    },
    problem: {
      display: 'flex',
      flexDirection: 'row',
      minHeight: 80,
      overflowX: 'scroll'
    }
  },
  title: {
    display: 'flex',
    flex: 1,
    margin: 5,
    padding: 5,
  },
  description: {
    display: 'flex',
    flex: 5,
    margin: 5,
    padding: 5,
  },
  runTestCases: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 140,
    textAlign: 'center',
    margin: 7,
    padding: 5,
    height: 30,
  }
}

class App extends Component {
  state = {
    ProblemComponent: null
  };
  render() {
    const { ProblemComponent } = this.state;
    return (
      <div className="App">
        <div style={styles.containers.header}>
          <div style={styles.headers.title}>Title</div>
          <div style={styles.headers.description}>Description</div>
          <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
            <div style={styles.headers.runTestCases}>Run TestCases</div>
          </div>
        </div>
        <div style={styles.containers.problems}>
          {
            cases.Problems.map(problem => {
              return (
                <div key={problem.desc.title} style={styles.containers.problem}>
                  <div style={styles.title}>{problem.desc.title}</div>
                  <div style={styles.description}>{problem.desc.description}</div>
                  <div style={{ display: 'flex', flexDirection: 'row', flex: 1 }}>
                    <button onClick={() => this.setState({ ProblemComponent: problem.comp })} style={styles.runTestCases}>Run TestCases</button>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div>
          {ProblemComponent && <ProblemComponent />}
        </div>
      </div>
    );
  }
}

export default App;
