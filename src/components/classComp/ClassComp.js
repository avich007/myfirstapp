import React from "react";

class ClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.count = 0;
  }

  render() {
    return (
      <div>
        <h2>This is a class component {this.count}</h2>
      </div>
    );
  }
}

export default ClassComp;

// phase 1 - Mounting
// constructor();          useState
// componentDidMount();    useEffect
// render()

// phase 2 - Updating
// shouldComponentUpdate();  useEffect
// componentDidUpdate();      useMemo

// phase 3 - UnMounting
// componentWillUnmount(){    useEffect()
// };
