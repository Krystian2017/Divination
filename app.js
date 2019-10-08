class Draw extends React.Component {
  state = {
    options: ["1", "2", "3"],
    option: null,
    value: ""
  };

  handleShowOption = () => {
    const index = Math.floor(Math.random() * this.state.options.length);
    this.setState({
      option: this.state.options[index]
    });
  };

  handleInputChange = e => {
    this.setState({
      value: e.target.value
    });
  };

  handleAddOption = () => {
    if (this.state.value === "") return alert("type something!");
    // const options = [...this.state.options]
    // options.push(this.state.value)
    const options = this.state.options.concat(this.state.value);
    this.setState({
      options,
      value: ""
    });
    alert(`Divination added. Current divination: ${options}`);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleShowOption}>see divination</button>
        <br />
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddOption}>Add a divination</button>
        {this.state.option ? <h1>{this.state.option}</h1> : null}
      </div>
    );
  }
}

ReactDOM.render(<Draw />, document.getElementById("root"));
