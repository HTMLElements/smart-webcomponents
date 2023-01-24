<template>
	<div class="vue-root">
		<div id="form">
			<smart-date-time-picker class="outlined" calendar-button id="dateTimePicker" v-on:change="date = $event.detail.value.toDate()" v-model="date"></smart-date-time-picker> <br/><br/><span>{{date}}</span>
		</div>
	</div>
</template>

<script>
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.datetimepicker.js";
import "smart-webcomponents/source/smart.core.js";


export default {
name: "app",
   data: function () {
    return {
      date: new Date()
    }
  },
  methods: {

  }
};
</script>

<style>
smart-date-time-picker {
	margin-left: 50px;
}
</style>
