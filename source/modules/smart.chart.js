import "../smart.element.js";
import "../smart.button.js";
import "../smart.scrollbar.js";
import "../smart.data.js";
import "../smart.draw.js";
import "../smart.chart.core.js";
import "../smart.chart.rangeselector.js";
import "../smart.chart.api.js";
import "../smart.chart.waterfall.js";
import "../smart.chart.annotations.js";
import "../smart.export.js";

export class smartChart extends Smart.Component {
	get name() {
		return 'smartChart';
	}
}

export class smartDataAdapter extends Smart.DataAdapter {
}
