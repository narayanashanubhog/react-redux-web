import React,{PropTypes} from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';

class CoursePage extends React.Component {
    constructor(props,context){
        super(props,context);
        this.redirectToAddCoursePage=this.redirectToAddCoursePage.bind(this);
    }
    courseRow(course,index){
        return <div key={index}>{course.title}</div>;
    }
    redirectToAddCoursePage(){
        browserHistory.push('/course');
    }
    render(){
        const {courses}=this.props;
        return(
        <div>
         <h1>CoursePage</h1> 
         <input type="submit"
         value="Add course"
         className="btn btn-primary"
         onClick={this.redirectToAddCoursePage} 
         />
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