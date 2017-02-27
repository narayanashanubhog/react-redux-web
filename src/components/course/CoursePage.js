import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
class CoursePage extends React.Component {
    constructor(props,context){
        super(props,context);
    }
    courseRow(course,index){
        return <div key={index}>{course.title}</div>;
    }

    render(){
        const {courses}=this.props;
        return(
        <div>
         <h1>CoursePage</h1> 
         <CourseList courses={courses} />
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