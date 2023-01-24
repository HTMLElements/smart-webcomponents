import React from "react";
import ReactDOM from "react-dom";
import { Splitter, SplitterItem, SplitterBar } from 'smart-webcomponents-react/splitter';

class App extends React.Component {

	componentDidMount() {

	}

	render() {
		return (
			<div>
			    <Splitter id="splitter">
			        <SplitterItem size="25%" collapsible>
			             <h2>What is Lorem Ipsum?</h2>
			            <p><strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting
			                industry. Lorem Ipsum has been the industry's standard dummy text ever
			                since the 1500s, when an unknown printer took a galley of type and scrambled
			                it to make a type specimen book. It has survived not only five centuries,
			                but also the leap into electronic typesetting, remaining essentially unchanged.
			                It was popularised in the 1960s with the release of Letraset sheets containing
			                Lorem Ipsum passages, and more recently with desktop publishing software
			                like Aldus PageMaker including versions of Lorem Ipsum.</p>
			        </SplitterItem>
			        <SplitterItem size="25%" collapsible>
			             <h2>Why do we use it?</h2>
			            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed lobortis
			                mi. Sed at urna eget justo tincidunt finibus nec eu nulla. Sed vitae pretium
			                lorem. Sed tristique, risus non pellentesque pellentesque, ligula purus
			                ullamcorper diam, non iaculis enim orci semper nibh. Donec tincidunt ex
			                lacus, sed ornare dui commodo at. Nullam id lectus cursus felis posuere
			                venenatis. Phasellus gravida felis eu vestibulum luctus. Nunc convallis
			                diam sed pretium gravida. Fusce scelerisque leo sem, vitae accumsan arcu
			                tempus ac. Cras commodo augue mauris, eu posuere lectus lobortis auctor.
			                Sed euismod sit amet lectus et bibendum. Aenean congue felis nunc.</p>
			            <p>Vivamus placerat quam vel eros hendrerit, id sagittis eros suscipit. Cras
			                quis dapibus sem. Maecenas faucibus faucibus metus, sit amet viverra augue
			                auctor quis. Quisque sed lectus sed tellus dapibus vulputate. Aenean sem
			                est, aliquam non ornare ut, tristique et leo. Nulla vehicula urna non aliquet
			                rutrum. Nullam imperdiet nibh a aliquam elementum. Nullam vitae mi posuere,
			                sollicitudin magna at, ultricies magna. Aenean egestas, nulla nec faucibus
			                dictum, sapien elit vulputate odio, ut interdum nisi velit at leo. Proin
			                posuere ac neque id volutpat. In varius dignissim posuere.</p>
			            <p>Donec ut tortor eu lorem lobortis mollis non sit amet mauris. Cras molestie,
			                tortor nec gravida feugiat, metus leo tristique augue, ac tempor lacus
			                massa ac erat. Nullam sit amet euismod justo, pellentesque pellentesque
			                dolor. In hac habitasse platea dictumst. Etiam hendrerit eros tortor, vel
			                facilisis ex consectetur at. Nulla ac lorem at ipsum facilisis porttitor.
			                Duis at ullamcorper odio, ut vestibulum augue. Aliquam semper, mi at facilisis
			                vestibulum, urna felis pretium leo, in cursus augue metus vitae velit.</p>
			            <p>Quisque condimentum sed est eu consequat. Fusce vitae urna ut diam tempus
			                rhoncus eu eget felis. Pellentesque dignissim nulla non diam aliquam, ut
			                mattis lacus tristique. Suspendisse potenti. Duis nec lobortis magna, ac
			                egestas leo. Pellentesque erat ipsum, imperdiet a dui a, varius varius
			                lacus. Mauris condimentum sit amet enim vitae egestas. Mauris nec tristique
			                dui. Suspendisse in congue dolor. Vivamus ornare nulla id tincidunt maximus.
			                Etiam pharetra quam ligula, tempor lacinia tortor tincidunt ut. Nullam
			                orci sem, tincidunt in efficitur vel, maximus sed libero.</p>
			            <p>Nam mattis tristique lectus vitae vestibulum. Aenean efficitur nibh ut
			                facilisis pulvinar. Donec mattis eget augue ut maximus. Curabitur pellentesque
			                lacus in dignissim lacinia. Nulla tincidunt molestie porttitor. Praesent
			                iaculis dui vitae quam egestas maximus. Morbi ut elit sit amet velit lobortis
			                aliquet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
			                posuere cubilia Curae; Praesent rutrum posuere massa, at auctor lorem malesuada
			                sed. Nunc facilisis arcu a nunc imperdiet, eget ullamcorper neque auctor.
			                Nam condimentum ultrices malesuada. Pellentesque habitant morbi tristique
			                senectus et netus et malesuada fames ac turpis egestas.</p>
			            <p>Sed feugiat sem rutrum arcu blandit, vitae malesuada dui vehicula. Aenean
			                et metus rhoncus velit euismod tincidunt. Morbi et tempor lacus. Donec
			                quis sem vehicula, porttitor lorem at, gravida urna. Aenean ut ipsum quis
			                lectus aliquam dignissim nec sit amet ante. Donec nec felis aliquet, ultricies
			                lacus a, interdum leo. Aliquam eu dolor dui. Vestibulum non eros malesuada,
			                euismod arcu ac, interdum augue. Sed nisl augue, faucibus sed lectus at,
			                convallis tristique erat. Fusce sodales in risus quis placerat. Morbi rutrum
			                sapien et enim fermentum imperdiet. Ut ullamcorper a nulla vel ullamcorper.</p>
			            <p>Duis hendrerit sagittis sapien at pellentesque. Nunc viverra ligula eu
			                magna feugiat tempor at vel dui. Nunc consequat odio nec suscipit maximus.
			                In quis turpis vel odio viverra consequat a eu magna. Praesent at pellentesque
			                enim. Etiam ultricies lorem ac consequat vestibulum. Vivamus imperdiet
			                aliquet urna quis scelerisque. Vestibulum consectetur odio eu elit ultricies,
			                et maximus diam feugiat. Maecenas vel justo nec elit sollicitudin vulputate
			                eu eget libero. In facilisis non justo in lobortis. Nullam condimentum
			                erat non ipsum luctus aliquam. Nam gravida sagittis enim, non rutrum neque
			                consectetur vitae. In ut erat tortor.</p>
			            <p>Curabitur lacinia lectus eu tortor dictum rutrum. Aliquam bibendum facilisis
			                sapien, vulputate porttitor augue aliquet a. Duis metus sapien, aliquam
			                ac enim ut, maximus volutpat eros. Vivamus dapibus blandit porta. Sed ac
			                leo quis nulla venenatis iaculis. Donec tristique faucibus luctus. Class
			                aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos
			                himenaeos. Suspendisse nec varius lacus, in molestie leo. Nunc tincidunt
			                tempor posuere. Duis nunc quam, consectetur a vulputate at, aliquet et
			                justo. Curabitur ultricies et risus a consectetur.</p>
			            <p>Maecenas imperdiet est in efficitur commodo. Vestibulum eu aliquet justo.
			                Etiam nulla ligula, elementum rutrum vulputate id, fermentum ut felis.
			                Quisque sed tincidunt diam, eu ultrices tortor. In interdum mollis faucibus.
			                Proin eget ipsum iaculis, ultrices orci sed, facilisis massa. Nunc sit
			                amet interdum metus, eu condimentum lorem. Suspendisse aliquet nunc in
			                accumsan eleifend. Proin eget diam sit amet lectus finibus rhoncus. Maecenas
			                non venenatis nibh, quis tincidunt turpis. Curabitur interdum aliquam lectus
			                sit amet sagittis. Vestibulum ante ipsum primis in faucibus orci luctus
			                et ultrices posuere cubilia Curae; Quisque viverra rutrum massa, vitae
			                ornare nibh dapibus et.</p>
			            <p>Quisque egestas vel neque cursus vulputate. Duis libero neque, consectetur
			                id tortor vitae, aliquet dapibus urna. In iaculis consectetur imperdiet.
			                Sed lectus metus, efficitur at metus et, interdum vehicula nisi. Quisque
			                gravida nulla in dui placerat elementum eget pretium diam. Nulla vulputate,
			                magna et pulvinar dignissim, orci eros scelerisque tellus, eu mattis massa
			                magna sed leo. Aliquam rhoncus orci nibh, ac faucibus mi tincidunt vel.
			                Orci varius natoque penatibus et magnis dis parturient montes, nascetur
			                ridiculus mus. Etiam tristique venenatis nisl. Aenean auctor lorem odio,
			                ut gravida dolor interdum mattis. Vivamus ac eros quam.</p>
			            <p>Integer porta tellus vel magna placerat placerat. Fusce a purus euismod,
			                volutpat eros porttitor, semper magna. Mauris vestibulum tortor at rutrum
			                mollis. Phasellus eget velit sed lacus suscipit dignissim malesuada vulputate
			                ante. Praesent convallis erat nisl, et semper elit sollicitudin non. Orci
			                varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus
			                mus. Nulla leo odio, hendrerit sed diam id, scelerisque aliquam nulla.
			                Phasellus ultricies sem a finibus consequat. Nulla ac ligula pulvinar,
			                imperdiet magna nec, suscipit augue. Duis eu congue massa. Curabitur egestas
			                porta posuere. Donec eget posuere ligula. Interdum et malesuada fames ac
			                ante ipsum primis in faucibus. Quisque convallis convallis augue, accumsan
			                condimentum mauris imperdiet dictum.</p>
			            <p>Etiam placerat purus eget metus porttitor, nec vehicula velit accumsan.
			                Praesent diam erat, fermentum et sollicitudin et, commodo consectetur arcu.
			                Phasellus dolor leo, faucibus et cursus fringilla, placerat vel sapien.
			                Sed vel risus nec purus pellentesque volutpat. Morbi eu consectetur lacus.
			                Cras justo tellus, ornare et volutpat venenatis, commodo id ligula. Morbi
			                hendrerit nisl id lobortis mattis. Nunc placerat orci sit amet rutrum volutpat.
			                Praesent in euismod felis. Sed ultricies ante a sodales efficitur. Sed
			                tristique ultricies velit quis pellentesque.</p>
			        </SplitterItem>
			        <SplitterItem size="25%">
			             <h2>Why do we use it?</h2>
			            <p>It is a long established fact that a reader will be distracted by the
			                readable content of a page when looking at its layout. The point of using
			                Lorem Ipsum is that it has a more-or-less normal distribution of letters,
			                as opposed to using 'Content here, content here', making it look like readable
			                English. Many desktop publishing packages and web page editors now use
			                Lorem Ipsum as their default model text, and a search for 'lorem ipsum'
			                will uncover many web sites still in their infancy. Various versions have
			                evolved over the years, sometimes by accident, sometimes on purpose (injected
			                humour and the like).</p>
			        </SplitterItem>
			        <SplitterItem collapsible>
			             <h2>Where does it come from?</h2>
			            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It
			                has roots in a piece of classical Latin literature from 45 BC, making it
			                over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney
			                College in Virginia, looked up one of the more obscure Latin words, consectetur,
			                from a Lorem Ipsum passage, and going through the cites of the word in
			                classical literature, discovered the undoubtable source. Lorem Ipsum comes
			                from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
			                Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a
			                treatise on the theory of ethics, very popular during the Renaissance.
			                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
			                a line in section 1.10.32.</p>
			            <p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below
			                for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum
			                et Malorum" by Cicero are also reproduced in their exact original form,
			                accompanied by English versions from the 1914 translation by H. Rackham.</p>
			        </SplitterItem>
			    </Splitter>
			</div>
		);
	}
}

ReactDOM.render(<App />, document.querySelector("#root"));

export default App;
