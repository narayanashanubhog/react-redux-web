import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
class CoursePage extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    courseRow(course,index){
        return <div key={index}>{course.title}</div>;
    }

    render(){
        return(
         <div className="jumbotron">
         <h1>CoursePage</h1>
          {this.props.courses.map(this.courseRow)}
         </div>
        );
    }
}



function  mapStateToProps(state,ownProps){
    return{
        courses:state.courses
    };
}

CoursePage.propTypes = {
  actions:PropTypes.object.isRequired,
  courses:PropTypes.array.isRequired
};

function mapDispacthToProps(dispatch)
{
    return{
        actions:bindActionCreators(courseActions,dispatch)
       // createCourse:course=>dispatch(courseActions.createCourse(course))
    };
}

export default connect(mapStateToProps,mapDispacthToProps)( CoursePage);