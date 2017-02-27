import React,{PropTypes} from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
const CourseForm=({course,allAuthors,onSave,onChange,loading,errors})=>{
 return(
<form>
<h1>Manage Course</h1>
<TextInput
name="title"
label="title"
value={course.title}
onChange={onChange}
error={errors.title} />
<SelectInput
name="authorId"
label="Author"
value={course.authorId}
onChange={onChange}
defaultOption="Select Author"
options={allAuthors} error={errors.authorId} />
<TextInput
name="category"
label="category"
value={course.category}
onChange={onChange}
error={errors.length} />

<TextInput
name="length"
label="length"
onChange={onChange}
value={course.length}
error={errors.length} />
<input 
 type="submit"
 disabled={loading}
 value={loading? 'Saving..' :'Save'}
 className="btn btn-primary"
 onClick={onSave} />
</form>
);
};
CourseForm.propTypes={
  course:PropTypes.object.isRequired,
  allAuthors:PropTypes.array,
  onSave:PropTypes.func.isRequired,
  onChange:PropTypes.func.isRequired,
  loading:PropTypes.bool,
  errors:PropTypes.object  
};

export default CourseForm;