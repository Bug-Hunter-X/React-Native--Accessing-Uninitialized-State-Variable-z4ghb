```javascript
// Correct - Using conditional rendering
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myVariable: null,
    };
  }

  componentDidMount(){
    setTimeout(()=>{this.setState({myVariable: 'Hello'})},1000)
  }
  render() {
    return (
      <View>
        {this.state.myVariable ? <Text>{this.state.myVariable}</Text> : <Text>Loading...</Text>}
      </View>
    );
  }
}

// Correct - Setting a default state value
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myVariable: 'Initial Value',
    };
  }
  render() {
    return (
      <View>
        <Text>{this.state.myVariable}</Text>
      </View>
    );
  }
}
```