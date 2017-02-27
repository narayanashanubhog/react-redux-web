import React from 'react';
import {connect} from 'react-redux';
import * as courseActions from '../../actions/courseActions';
import {bindActionCreators} from 'redux';
class CoursePage extends React.Component {
    constructor(props,context){
        super(props,context);
        this.state={
            course:{title:""}
        };
        this.onTitleChange=this.onTitleChange.bind(this);
        this.onClickSave=this.onClickSave.bind(this);
    }

    onTitleChange(event){
        const course=this.state.course;
        course.title=event.target.value;
        this.setState({course:course});
    }
    onClickSave(){
        this.props.actions.createCourse(this.state.course);
       //  this.props.createCourse(this.state.course);
      //  this.props.dispatch(courseActions.createCourse(this.state.course));
        alert(`saving ${this.state.course.title}`);
    }
    courseRow(course,index){
        return <div key={index}>{course.title}</div>;
    }

    render(){
        return(
         <div className="jumbotron">
         <h1>CoursePage</h1>
          {this.props.courses.map(this.courseRow)}
          <h2>Add Course</h2>
          <input type="text" onChange={this.onTitleChange}
          value={this.state.course.title} />
          
          <input type="submit"
          value="Save"
          onClick={this.onClickSave} />
           
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
  //actions:PropTypes.object.isRequired
};

function mapDispacthToProps(dispatch)
{
    return{
        actions:bindActionCreators(courseActions,dispatch)
       // createCourse:course=>dispatch(courseActions.createCourse(course))
    };
}

export default connect(mapStateToProps,mapDispacthToProps)( CoursePage);