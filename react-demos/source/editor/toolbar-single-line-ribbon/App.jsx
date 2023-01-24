import React from "react";
import ReactDOM from "react-dom";
import { Editor } from 'smart-webcomponents-react/editor';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.editor = React.createRef();
	}

	toolbarMode = 'singleLineRibbon'

	init() {
	    this.editor.current.expandToolbar();
	}

	componentDidMount() {
		this.init();
	}

	render() {
		return (
			<div>
			    <Editor ref={this.editor} id="editor" toolbarMode={this.toolbarMode}>
			        <table>
			            <tbody>
			                <tr>
			                    <td>
			                        <div className="holiday">
			                            <img src="./../../../src/images/valentine-day-min.jpg" width="350px" height="250px"></img>
			                             <h2>Valentine's Day</h2>
			                            <p>Valentine's Day, also called Saint Valentine's Day or the Feast of Saint
			                                Valentine is celebrated annually on February 14. It originated as a Christian
			                                feast day honoring one or two early Christian martyrs named Saint Valentine
			                                and, through later folk traditions, has become a significant cultural,
			                                religious, and commercial celebration of romance and love in many regions
			                                of the world.</p>
			                            <p>There are a number of martyrdom stories associated with various Valentines
			                                connected to February 14, including an account of the imprisonment of Saint
			                                Valentine of Rome for ministering to Christians persecuted under the Roman
			                                Empire in the third century. According to an early tradition, Saint Valentine
			                                restored sight to the blind daughter of his jailer. Numerous later additions
			                                to the legend have better related it to the theme of love: an 18th-century
			                                embellishment to the legend claims he wrote the jailer's daughter a letter
			                                signed "Your Valentine" as a farewell before his execution; another addition
			                                posits that Saint Valentine performed weddings for Christian soldiers who
			                                were forbidden to marry.</p>
			                            <p>The Feast of Saint Valentine was established by Pope Gelasius I in AD
			                                496 to be celebrated on February 14 in honour of Saint Valentine of Rome,
			                                who died on that date in AD 269. The day became associated with romantic
			                                love in the 14th and 15th centuries when notions of courtly love flourished,
			                                apparently by association with the "lovebirds" of early spring. In 18th-century
			                                England, it grew into an occasion in which couples expressed their love
			                                for each other by presenting flowers, offering confectionery, and sending
			                                greeting cards (known as "valentines"). Valentine's Day symbols that are
			                                used today include the heart-shaped outline, doves, and the figure of the
			                                winged Cupid. Since the 19th century, handwritten valentines have given
			                                way to mass-produced greeting cards. In Italy, Saint Valentine's Keys are
			                                given to lovers "as a romantic symbol and an invitation to unlock the giver's
			                                heart", as well as to children to ward off epilepsy (called Saint Valentine's
			                                Malady).</p>
			                            <p>Saint Valentine's Day is not a public holiday in any country, although
			                                it is an official feast day in the Anglican Communion and the Lutheran
			                                Church. Many parts of the Eastern Orthodox Church also celebrate Saint
			                                Valentine's Day on July 6 in honor of Roman presbyter Saint Valentine,
			                                and on July 30 in honor of Hieromartyr Valentine, the Bishop of Interamna
			                                (modern Terni).</p>
			                        </div>
			                    </td>
			                </tr>
			            </tbody>
			        </table>
			    </Editor>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
