import React, {Component} from 'react'
import classnames from 'classnames'

class TextInputGroup extends Component {

    render(){
        const { name , label , value , placeholder, type , onChange, error } = this.props
        
        return (
            <div>
                {/* <label htmlFor={name}>{label}</label> */}
                <input className={
                    classnames('bg-white focus:outline-none focus:shadow-outline py-1 px-4 block w-full appearance-none leading-normal rounded  text-lg shadow mt-2'
                    ,{ 'text-field-error border-red-400' : error })}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={onChange}
                          />
                {
                    error ? 
                    (<div className="text-left text-red-400 mt-1">{error}</div>) :
                    null
                }
                
            </div>
        )
    }

}

export default TextInputGroup