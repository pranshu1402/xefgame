import React ,{Component} from 'react';


class Tab extends Component{


    render(){
        return (
           <div className="singleTab" onClick={()=>this.props.onChangeTab(this.props.label)}>
               {this.props.label}
           </div>
        )
    }
}

export default Tab;