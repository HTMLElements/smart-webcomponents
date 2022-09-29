import { useEffect } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Editor } from '../../../smartImports';

import { defaultTitle } from '../../../contexts/themeContext';

function EditorPage() {

    useEffect(() => { document.title = `Editor - ${defaultTitle}` }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 mb-3"><h4>Editor</h4></div>
            </div>

            <div className="card">
                <div className="card-header">
                    <h4 className="label">HTMLElements Editor</h4>
                </div>
                <div className="card-body">
                    <p>Editor represents a ready-for-use HTML text editor which can simplify web content creation or be a replacement of your HTML Text Areas.</p>
                    <Editor>
                        <b>Editor</b> is a HTML text editor designed to simplify web content creation. You can use it as a replacement of your Textarea or you can create it from a DIV element.
                        <br />
                        <br />
                        Features include:
                        <br />
                        <ul>
                            <li>Text formatting</li>
                            <li>Text alignment</li>
                            <li>Hyperlink dialog</li>
                            <li>Image dialog</li>
                            <li>Bulleted list</li>
                            <li>Numbered list</li>
                        </ul>
                    </Editor>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(EditorPage)