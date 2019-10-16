import React, { Component } from 'react'
import classnames from 'classnames'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { app } from '../store';
import { getTestData, getSingleTestData, addTestData } from '../actions/testAction';
import TextInputgroup from '../base/TextInputGroup'


class Home extends Component {



constructor(props){
    super(props)
    this.state = {isToggleOn: true, 
        text : '',
        tech : '',
        author : '',
        errors : {}
    };
    }

async componentDidMount(){
    this.props.getTestData()
    app.service('ideas').on('created', (d) => {
        this.props.getSingleTestData(d)
    })

}


initAdd = (e) => {
    e.preventDefault()

    
    const { text, tech, author } = this.state
    let errors = {}
    
   
    if(text === ''){
        errors.email = 'Text is required' 
        this.setState({ errors })
        return
    } 
    if(tech === ''){
        errors.tech = 'Tech is required' 
        this.setState({ errors })
        return
    }

    if(author === ''){
        errors.author = 'Author is required' 
        this.setState({ errors })
        return
    }

    const _d = { text , tech, author }
    this.props.addTestData(_d);
  }

  onChange = e => {
    this.setState({
        [e.target.name] : e.target.value
    })
  }

  render() {

    const { text, tech, author, errors } = this.state

    const { testData } = this.props.test
    let _d = []
    
    if(testData.length > 0){
         _d = testData.map(d=> {
            return (<li 
            key={testData.indexOf(d)}    
            className="shadow rounded bg-gray-200 w-full p-4 lg:mx-4 mt-2">
            <h1 className="text-lg">{d.text}</h1>
            <p>Tech {d.tech}</p>
            <p>Submitted by {d.author}</p>
            <p className="pb-1">Time : {d.createdAt}</p>
        </li>)
        })
    }




    return (
      <div>
        <section className="header">
        <div className="mx-auto container bg-white-900 w-full flex h-16 px-4 sm:px-12 md:px-24">
            <div className="text-gray-900 text-center self-center my-auto mx-auto md:mx-0 text-xl">
                Live Stream Project Idea
            </div>
        </div>
      </section>

      <section className="main-body bg-gray-700 min-h-screen">
          <div className="mx-auto container w-full flex px-4 sm:px-12 md:px-24 flex-wrap">
              {/* <!-- // Form Section --> */}
              <div className="lg:w-1/2 w-full flex flex-col my-6">
                  <h2 className="self-center text-lg text-white">Submit Your Ideas</h2>
                  <form onSubmit={this.initAdd} className="mx-2 form">

                    <TextInputgroup
                        name = "text" 
                        label = "Text"
                        value = {text}
                        placeholder = "Text"
                        type = "text" 
                      onChange = {this.onChange}
                      error = { errors.text }
                      />      

                    <TextInputgroup
                        name = "tech" 
                        label = "Tech"
                        value = {tech}
                        placeholder = "Tech"
                        type = "text" 
                      onChange = {this.onChange}
                      error = { errors.tech }
                      />      


                    <TextInputgroup
                        name = "author" 
                        label = "Author"
                        value = {author}
                        placeholder = "Author"
                        type = "author" 
                      onChange = {this.onChange}
                      error = { errors.author }
                      />      

                      {/* <input 
                      id="idea-text"
                      className="shadow mt-4 appearance-none border rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Idea name"/>
                      <input 
                      id="idea-tech"
                      className="shadow mt-4 appearance-none border rounded w-full py-2 px-3 text-white-800 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Tech"/>
                      <input 
                      id="idea-viewer"
                      className="shadow mt-4 appearance-none border rounded w-full py-2 px-3 text-white-800 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Author"/> */}
                      <button 
                      className="bg-indigo-500 mt-4 w-full hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                          Suggest Idea
                      </button>
                  </form>
              </div>
              {/* <!-- // List Section --> */}
              <div className="lg:w-1/2 w-full my-6">
                  <ul className="lg:mt-10 mx-2" id="ideas">
                      {_d}
                  </ul>
              </div>
          </div>
      </section>  
      </div>
    )
  }
}


Home.propTypes = {
    test : PropTypes.object.isRequired
  }
  
  
  const mapStateToProps = (state) => ({
    test : state.test
  })
  
  
  
  export default connect(mapStateToProps, { getTestData, getSingleTestData, addTestData })(Home)
  
    


