/** Can you explain the problem with the following code, and how to fix
it. **/

class Count extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.handleAddCount = this.handleAddCount.bind(this);
  }
  handleAddCount() {
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    this.setState({ count: this.state.count + 1 });
    /**
     * The problem of the code is that set state is async, so when we click the add button
     * we are actually setting 1 to count 3 times, which, eventually would be 1
     * 
     * We can fix it by adding 3 directly
        this.setState({ count: this.state.count + 3 });
     * or use the function version of set state
        this.setState((prev) => ({ count: prev.count + 1 }));
        this.setState((prev) => ({ count: prev.count + 1 }));
        this.setState((prev) => ({ count: prev.count + 1 }));
     */
  }

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleAddCount}>Add</button>
      </div>
    );
  }
}
ReactDOM.render(<Count />, document.getElementById('root'));

/** Please write the sample code to debounce handleOnChange (Do not use
any 3th party libs other than react) **/
const debounce = (callback, delay) => {
  let timeoutID;
  return function (...args) {
    if (timeoutID) {
      clearTimeout(timeoutID);
    }

    timeoutID = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

const SearchBox = () => {
  const handleOnChange = debounce((event) => {
    // make ajax call
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((json) => console.log(json));
  }, 2000);

  return (
    <input
      type='search'
      name='p'
      onChange={handleOnChange}
    />
  );
};
