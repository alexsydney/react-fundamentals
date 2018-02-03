//8------------------------------------------------



//import React from 'react';

//class App extends React.Component {
//  constructor(){
// super();
//  this.state = { txt: 'this is the state txt'
//  }
// }

// update( e ){
//    this.setState({txt: e.target.value})
// }

//render(){
//    return (
//      <div>
//        <Widget update={this.update.bind(this)}/>
//        <h1>{this.state.txt}</h1>
//    </div>
//    )
//  }
//}

//const Widget = (props) =>
//  <input type="text" onChange={props.update} />

//export default App







//9--------------------------------------------------


//Add Custom propType Validation to React Components

//import React from 'react';

//class App extends React.Component {
//  render(){
//    return <Title text="Five" />
//  }
//}

//const Title = (props) => <h1>Title: {props.text}</h1>

//Title.propTypes = {
//  text(props, propName, component){
//    if (!(propName in props)){
//      return new Error(`missing ${propName}`)
//    }
//    if(props[propName].length < 6){
//      return new Error(`${propName} was too short`)
//    }
//  }
//}

//export default App







//10----------------------------------------------------

//Normalize Events with React Synthetic Event System

//import React from 'react';

//class App extends React.Component {
//  constructor(){
//    super();
//    this.state = {currentEvent: '---'}
//    this.update = this.update.bind(this)
//  }

//  update(e){
//    this.setState({currentEvent: e.type})
//  }

//  render(){
//    return (
//      <div>
//       <textarea
//       onKeyPress={this.update}
//       onCopy={this.update}
//       onCut={this.update}
//       onPaste={this.update}
//       onFocus={this.update}
//       onBlur={this.update}
//       onDoubleClick={this.update}
//       onTouchStart={this.update}
//       onTouchMove={this.update}
//       onTouchEnd={this.update}

//       cols="30"
//       rows="10 "/>
//       <h1>{this.state.currentEvent}</h1>
//      </div>
//    )
//  }
//}

//export default App





//11----------------------------------------------

//Use React ref to get a specific reference to qa react component

//import React from 'react';

//class App extends React.Component {
//  constructor(){
//    super();
//    this.state = {a: ''}
//  }

//  update(){
//    this.setState({
//      a: this.a.refs.input.value,
//      b: this.refs.b.value
//    })
//  }

//  render(){
//    return (
//      <div>
//        <Input
//        ref={ component => this.a = component}
//        type="text"
//        onChange={this.update.bind(this)}
//          />{this.state.a}
//          <hr/>
//        <input
//          ref="b"
//          type="text"
//          onChange={this.update.bind(this)}
//        />{this.state.b} 
//      </div>
//    )
//  }
//}

//class Input extends React.Component {
//  render(){
//    return<div>
//  <input ref="input" type="text"
//    onChange={this.props.update}/>
//    </div>
//  }
//}

//export default App







//12----------------------------------------------

//Understand the Reacy Component Lifecycle Method

//import React from 'react';
//import ReactDOM from 'react-dom';

//class App extends React.Component {
//  constructor(){
//    super();
//    this.state = {val: 0}
//    this.update = this.update.bind(this)
//  }

//  update(){
//    this.setState({val: this.state.val + 1})
//  }

//  componentWillMount(){
//    console.log('componentWillMount')
//  }

  

//  render(){
//    console.log('render')
//    return <button onClick={this.update}>
//    {this.state.val}</button>
//  }
//  componentDidMount() {
//    console.log('componentDidMount')
//  }

//  componentWillUnmount(){
//    console.log('componentWillUnmount')
//  }
//}

//class Wrapper extends React.component {
//  mount(){
//    ReactDOM.render(<App />, document.getElementById('a'))
//  }
//  unmount(){
//    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//  }
//  render(){
//    return (
//      <div>
//        <button onClick={this.mount.bind(this)}>Mount</button>
//        <button onClick={this.unmount.bind(this)}>Unmount</button>
//        <div id="a"></div>
//      </div>
//    )
//  }
//}

//export default Wrapper






//13-----------------------------------------------------------------

//Manage React Componenet State with LifeCycle Methods

//import React from 'react';
//import ReactDOM from 'react-dom';

//class App extends React.Component {
//  constructor(){
//    super();
//    this.state = {val: 0}
//    this.update = this.update.bind(this)
//  }

//  update(){
//    this.setState({val: this.state.val + 1})
//  }

//  componentWillMount(){
//    console.log('componentWillMount')
//    this.setState({m: 2})
//  }

//  render(){
//    console.log('render')
//    return <button onClick={this.update}>
//    {this.state.val * this.state.m}
//    </button>
//  }
//  componentDidMount() {
//    console.log('componentDidMount')
//    this.inc = setInterval(this.update,500)
//  }

//  componentWillUnmount(){
//    console.log('componentWillUnmount')
//    clearInterval(this.inc)
//  }
//}

//class Wrapper extends React.component {
//  mount(){
//    ReactDOM.render(<App />, document.getElementById('a'))
//  }
//  unmount(){
//    ReactDOM.unmountComponentAtNode(document.getElementById('a'))
//  }
//  render(){
//    return (
//      <div>
//        <button onClick={this.mount.bind(this)}>Mount</button>
//        <button onClick={this.unmount.bind(this)}>Unmount</button>
//        <div id="a"></div>
//      </div>
//    )
//  }
//}

//
//export default Wrapper





//14-----------------------------------------------------------------

//Control React component updates when new props are recieved

//import React from 'react';
//import ReactDOM from 'react-dom';

//class App extends React.Component {
//  constructor(){
//    super();
//    this.state = {increasing: false}
//  }
//  update(){
//    ReactDOM.render(
//    <App val={this.props.val+1}/>, 
//    document.getElementById('root'))
//  }

//  componentWillReceiveProps(nextProps){
//    this.setState({increasing: nextProps.val > this.props.val})
//  } 
  
//  shouldComponentUpdate(nextProps, nextState){
//    return nextProps.val % 5 === 0;
//  }

//  render(){
//    console.log(this.state.increasing)
//    return(
//      <button onClick={this.update.bind(this)}>
//      {this.props.val}
//      </button>
//    )
//  }
//  componentDidUpdate(prevProps, prevState) {
//    console.log(`prevProps: ${prevProps.val}`)
//  }
//}

//App.defaultProps = {val: 0}

//export default App







//15---------------------------------------------------------

//Use map to create React Componets from arrays of data

//import React from 'react';

//class App extends React.Component {
//  constructor(){
//    super();
//    this.state = {items: []}
//  }
//  componentWillMount(){
//    fetch( 'http://swapi.co/api/people/?format=json' )
//    .then( response => response.json())
//    .then( ({results: items}) => this.setState({items}))
//  }
//  filter(e) {
//    this.setState({filter: e.target.value})
//  }
//  render(){
//    let items = this.state.items
//    if(this.state.filter){
//      items = items.filter( item =>
//      item.name.toLowerCase()
//    .includes(this.state.filter.toLowerCase()))
//    }
//    return (
//      <div>
//        <input type="text" onChange={this.filter.bind(this)}
//        />
//        {items.map(item =>
//        <Person key={item.name} person={item} />)}
//      </div>
//    )
//  }
//}

//const Person = (props) => <h4>{props.person.name}</h4>



//export default App





//16------------------------------------------------------


//Compose react Components Behaviour with Higher Order componenets

//import React from 'react';

//const HOC = (InnerComponent) => class extends React.Component {
//  constructor(){
//    super();
//    this.state = {count: 0}
//  }
// update(){
//    this.setState({count: this.state.count + 1})
//  }
//  componentWillMount(){
//    console.log('will mount')
//  }
  
//  render(){
//    return (
//      <InnerComponent 
//        {...this.props}
//        {...this.state}
//        update={this.componentDidUpdate.bind(this)}
//      />
//    )
//  }
//}

//class App extends React.Component {
//  render(){
//    return (
//      <div>
//        <Button>button</Button>
//        <hr />
//        <LabelHOC>label</LabelHOC>
//      </div>
//    )
//  }
//}

//const Button = HOC((props) => 
//<button onClick={props.update}>{props.children} - {props.count}</button>)


//class Label extends React.Component {
//  componentWillMount(){
//    console.log('will mount')
//  }
//  render(){
//    return (
//      <label onmouseMove={this.props.update}>{this.props.children} - {this.props.count}</label>
//    )
//  }
//}

//const LabelHOC = HOC(Label)

//export default App






//17------------------------------------------------

//Build a JSX Live Complier as a React Component

//import React from 'react';
//import 'App.css'

//class App extends React.component {
//  constructor(){
//    super();
//    this.state = {
//      input: '/* add your jsx here */',
//      output: '',
//      err: ''
//    }
//  }
//  update(e){
//    let code = e.target.value;
//    try {
//      this.setState({
//        output: window.Babel.
//        transform(code, {presets: ['es2015', 'react']})
//        .code,
//        err: ''
//      })
//    }
//    catch(err){
//      this.setState({err: err.message})

//    }
//  }
//  render(){
//    return(
//      <div>
//       <header>{this.state.err}</header>
//        <div classNamne="container">
//         <textarea
//         onChange={this.update.bind(this)}
//         defaultValue={this.state.input}/>
//         <pre>
//         {this.state.output}
//         </pre>
//        </div> 
//      </div>
//    )
//  }
//}

//export default App





//18---------------------------------------------------------

//Understand JSX at a deeper level


//19---------------------------------------------------------

//Understand React.Children Ultilies

//import React from 'react';

//class App extends React.Component {
//  render(){
//    return(
//      <Parent>
//        <div className="childA"></div> 
//        <div className="childB"></div> 
//      </Parent> 
//    )
//  }
//}

//class Parent extends React.Component {
//  render(){
//    --//console.log(this.props.children)
//    --//let items = React.Children
//    --//.forEach(this.props.children, child => console.log(child.pprops.className))
//    --//let items = React.Children.toArray(this.props.children)
//    let items = React.Children.only(this.props.children)
//    console.log(items)
//    return null
    
//  }
//}

//export default App





//20---------------------------------------------

//Use React.cloneElement to extend functionality of Children Components

//import react from 'react';

//class Appp extends React.Component {
//  render(){
//    return (
//      <Buttons>
//        <button value="A">A</button>
//        <button value="B">B</button>
//        <button value="C">C</button>
//      </Buttons>
//    )
//  }
//}

//class Buttons extends React.Components {
//  constructor(){
//    super();
//    this.state = {selected: 'None'}
//  }
//  selectItem(selected){
//    this.setState({selected})
//  }
//  render(){
//    let fn = child =>
//    React.cloneElement(child, {
//      onClick: TouchList.selectItem.bind(this, child.props.value)
//   })
//    let items = React.Children.map(this.props.child,fn);
//    return (
//      <div>
//        <h2>You have Selected: {this.state.selected}</h2>
//        {items}
//        </div>
//    )
//  }
//}

//export default App



//21-----------------------------------------------------

//Write more usable React Components with composable API's

