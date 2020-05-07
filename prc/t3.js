class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'test'
    }
  }
  render() {
    // change code below this line
    const name = this.state.name;

    return (
      <div>
        <h1>{name}</h1>

      </div>
    );
  }
};
