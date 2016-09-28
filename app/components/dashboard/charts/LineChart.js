import AbstractChart from '../../../core/Chart';
import Chart from '../../../../node_modules/chart.js/dist/Chart';
const TYPE = 'line';

class LineChart {
    constructor(ctx, data = {}, options = {}) {
        console.info('Initialize Line Chart');
        this.ctx = ctx;
        this.data = data;
        this.options = options;
    }

    render() {
        return new Chart(this.ctx, {
            type: TYPE,
            data: this.data,
            options: this.options
        })
    }
}

export default LineChart;
