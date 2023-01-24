<template>
	<div class="vue-root">
		<h3>Collapse</h3>
		<smart-button data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">Button with data-target</smart-button>
		<br/>
		<div class="collapse" id="collapseExample">
			<div class="card card-body">Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.</div>
		</div>
		<h3>Dropdown</h3>
		<smart-button id="dropdownMenuButton" data-target=".dropdown-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</smart-button>
		<br/>
		<br/>
		<smart-drop-down-list selected-indexes="[0]" class="dropdown-menu">
			<smart-list-item>Action</smart-list-item>
			<smart-list-item>Another action</smart-list-item>
			<smart-list-item>Something else</smart-list-item>
		</smart-drop-down-list>
		<h3>Modal</h3>
		<!-- Button trigger modal -->
		<smart-button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Launch demo modal</smart-button>
		<!-- Modal -->
		<smart-window header="Title" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div>
				<div id="article">
					<section>
						<h3>What is Lorem Ipsum?</h3>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
							It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
							desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
					</section>
					<section>
						<h3>Where does it come from?</h3>
						<p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked
							up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
							Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
							in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied
							by English versions from the 1914 translation by H. Rackham.</p>
					</section>
				</div>
				<div class="modal-footer">
					<smart-button type="button" class="btn btn-secondary" data-dismiss="modal">Close</smart-button>
				</div>
			</div>
		</smart-window>
		<h3>Tooltip</h3>
		<smart-button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" data-title="Tooltip on top">Tooltip on top</smart-button>
		<smart-button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" data-title="Tooltip on bottom">Tooltip on bottom</smart-button>
		<h3>Toast</h3>
		<smart-button type="button" data-target="#toast" data-toggle="toggle">Toggle Toast</smart-button>
		<smart-toast id="toast" position="top-left" show-close-button type="mail" class="blink">You have 2 new messages.
			<button data-dismiss="toast">Close</button>
		</smart-toast>
		<h3>List</h3>
		<ul class="nav nav-tabs" id="myTab" role="tablist">
			<li class="nav-item" role="presentation">
				<smart-button class="nav-link active" id="home-tab" data-toggle="tab" data-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</smart-button>
			</li>
			<li class="nav-item" role="presentation">
				<smart-button class="nav-link" id="profile-tab" data-toggle="tab" data-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</smart-button>
			</li>
			<li class="nav-item" role="presentation">
				<smart-button class="nav-link" id="contact-tab" data-toggle="tab" data-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Contact</smart-button>
			</li>
		</ul>
		<div class="tab-content" id="myTabContent">
			<div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Content 1</div>
			<div class="tab-pane fade smart-hidden" id="profile" role="tabpanel" aria-labelledby="profile-tab">Content 2</div>
			<div class="tab-pane fade smart-hidden" id="contact" role="tabpanel" aria-labelledby="contact-tab">Content 3</div>
		</div>
		<h3>Radio Button Group</h3>
  <div>
    Value is stored in a hidden field below the radio buttons.<br />
    <jqx-radio-button checked name="Cappucino" data-target="#radioGroup">Cappucino
    </jqx-radio-button>
    <jqx-radio-button name="Espresso" data-target="#radioGroup">Espresso</jqx-radio-button>
    <jqx-radio-button name="Americano" data-target="#radioGroup">Americano</jqx-radio-button>
    <input onchange="window.log.innerHTML = this.value" id="radioGroup" type="hidden">
    <div id="log"></div>
  </div>
  <h3>Radio Button Group 2</h3>
  <div>
    Value is stored in a visible input field below the radio buttons.
    <br />
    <jqx-radio-button checked name="Volvo" data-target="#radioGroup2">Volvo
    </jqx-radio-button><br />
    <jqx-radio-button name="Mercedes" data-target="#radioGroup2">Mercedes</jqx-radio-button><br />
    <jqx-radio-button name="Renault" data-target="#radioGroup2">Renault</jqx-radio-button><br />
    <input id="radioGroup2" readonly>
  </div>
  <h3>Checkboxes Group</h3>
  <div>
    Value is stored in a visible input field below the radio buttons.
    <br />
    <jqx-check-box checked name="Volvo" data-target="#checkGroup">Volvo
    </jqx-check-box><br />
    <jqx-check-box name="Mercedes" data-target="#checkGroup">Mercedes</jqx-check-box><br />
    <jqx-check-box name="Renault" data-target="#checkGroup">Renault</jqx-check-box><br />
    <input id="checkGroup" readonly>
  </div>
	</div>
</template>

<script>
import { onMounted } from 'vue'
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";
import "smart-webcomponents/source/modules/smart.dropdownlist.js";
import "smart-webcomponents/source/modules/smart.toast.js";
import "smart-webcomponents/source/modules/smart.window.js";


export default {
	name: "app",
	setup() {
		onMounted(() => {


		})
	}
};
</script>

<style>

</style>
