<template>
	<div class="vue-root">
		<smart-calendar
			class="special-days"
			important-dates="['2020-6-9', '2020-7-1', '2020-7-30', '2020-12-24']"
			tooltip
		></smart-calendar>
		<div class="options">
			<div class="caption">Important Dates</div>
			<div class="option" id="importantDates"></div>
		</div>
	</div>
</template>

<script>
	import { onMounted } from "vue";
	import "smart-webcomponents/source/styles/smart.default.css";
	import "smart-webcomponents/source/modules/smart.calendar.js";

	export default {
		name: "app",
		setup() {
			onMounted(() => {
				const calendar = document.querySelector("smart-calendar");
				calendar.whenRendered(() => {
					const importantDates = calendar.importantDates;
					const template = document.createElement('template');

					template.id = "importantDatesTemplate";
					template.innerHTML = `<span>{{day}}</span><span>&#127874</span>`;

					document.body.appendChild(template);
					calendar.importantDatesTemplate = "importantDatesTemplate";

					function formatDate(date) {
						const monthNames = [
							"January",
							"February",
							"March",
							"April",
							"May",
							"June",
							"July",
							"August",
							"September",
							"October",
							"November",
							"December",
						];
						const day = date.getDate();
						const monthIndex = date.getMonth();
						const monthName = monthNames[monthIndex];
						const year = date.getFullYear();
						return day + " " + monthName + " " + year;
					}
					if (importantDates) {
						for (let d = 0; d < importantDates.length; d++) {
							document.getElementById("importantDates").innerHTML +=
								formatDate(importantDates[d]) + "</br>";
						}
					}
					calendar.addEventListener("open", function (event) {
						const date = new Date(event.detail.value);
						if (date.getFullYear() === 2020) {
							const tooltip = event.detail.target;
							calendar.tooltipPosition = "top";
							if (date.getMonth() === 5 && date.getDate() === 9) {
								tooltip.innerHTML = "Ivan's Birthday !";
							} else if (date.getMonth() === 6) {
								if (date.getDate() === 1) {
									tooltip.innerHTML = "Filip's Birthday !";
								} else {
									tooltip.innerHTML = "Anthony's Birthday !";
									calendar.tooltipPosition = "right";
								}
							}
						}
					});
				});
			});
		}
	};
</script>

<style>
</style>
