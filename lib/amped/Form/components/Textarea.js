import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg.css';

export const Textarea = ( { name, label, value, formValues, onFieldChange } ) => (
	<div className="amped-form__textarea-container">
		<textarea name={name}></textarea>
	</div>
);

export const RichTextarea = ( { name, label, value, formValues, onFieldChange } ) => (
	<div className="amped-form__textarea-container">
		<Editor name={name}
		        editorState={formValues[name]}
		        onEditorStateChange={(val) => onFieldChange(name, val)}/>
	</div>
);

export default Textarea;