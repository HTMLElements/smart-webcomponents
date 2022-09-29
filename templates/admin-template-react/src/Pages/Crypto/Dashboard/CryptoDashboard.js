import './CryptoDashboard.scss';
import { useEffect, useMemo, useRef } from 'react';

import withAnimation from '../../../hoc/withAnimation';

import { Button, Chart, Table, Smart } from '../../../smartImports';

import { useThemeContext, defaultTitle } from '../../../contexts/themeContext';

function CryptoDashboard({ openTodayMenu }) {

    const btcToUsdtExchangeData = [
        { date: new Date(2020, 6, 25), o: 9538.82, h: 9733.33, l: 9529.46, c: 9703.25 },
        { date: new Date(2020, 6, 26), o: 9703.22, h: 10160, l: 9652.03, c: 9927.02 },
        { date: new Date(2020, 6, 27), o: 9929.12, h: 11377.5, l: 9922.14, c: 11023.7 },
        { date: new Date(2020, 6, 28), o: 11031.4, h: 11241.7, l: 10569, c: 10919.3 },
        { date: new Date(2020, 6, 29), o: 10910.4, h: 11344.6, l: 10834.1, c: 11100.9 },
        { date: new Date(2020, 6, 30), o: 11100.9, h: 11172.5, l: 10834.5, c: 11101.6 },
        { date: new Date(2020, 6, 31), o: 11102.7, h: 11438.7, l: 10963.8, c: 11339 }
    ];

    const monthFormatter = new Intl.DateTimeFormat('en', { month: 'short' });

    const currencyPrices = [
        { currency: 'BTC', price: 10732.6, volume: 50315567171, change: 0.37 },
        { currency: 'ETH', price: 356.26, volume: 12148917583, change: 0.93 },
        { currency: 'USDT', price: 1, volume: 36915715574, change: -0.07 },
        { currency: 'XRP', price: 0.240869, volume: 1651813883, change: -0.41 },
        { currency: 'BCH', price: 228.84, volume: 1440967601, change: 1.15 },
        { currency: 'BNB', price: 28.58, volume: 612001852, change: 3.69 },
        { currency: 'POT', price: 4.36, volume: 469759239, change: -3.33 },
        { currency: 'LINK', price: 9.74, volume: 1924067658, change: -4.59 },
        { currency: 'BSV', price: 175.64, volume: 625571669, change: 4.48 },
        { currency: 'CRO', price: 0.152656, volume: 62829032, change: -0.14 }
    ];

    const numberRenderer = new Smart.Utilities.NumberRenderer();

    const baseLinePrices = { price: 0.03892189, eth: 7.81612747, btc: 0.08005164, sum: 1.51080382 };

    const sellOrdersData = useMemo(() => {

        const data = [];

        for (let i = 0; i < 30; i++) {
            const dataPoint = {};

            dataPoint.price = parseFloat((baseLinePrices.price + (Math.random() > 0.5 ? 1 : -1) * (Math.random() * (0.09 - 0.01) + 0.01)).toFixed(10));
            dataPoint.eth = parseFloat((baseLinePrices.eth + (Math.random() > 0.5 ? 1 : -1) * (Math.random() * (1.5 - 0.05) + 0.05)).toFixed(10));
            dataPoint.btc = parseFloat((baseLinePrices.btc + (Math.random() > 0.5 ? 1 : -1) * (Math.random() * (0.02 - 0.005) + 0.005)).toFixed(10));
            dataPoint.sum = parseFloat((baseLinePrices.sum + (Math.random() > 0.5 ? 1 : -1) * (Math.random() * (1 - 0.09) + 0.09)).toFixed(10));

            if (i < 15) {
                data.push(dataPoint);
            }
        }

        return data;

    }, [baseLinePrices.btc, baseLinePrices.eth, baseLinePrices.price, baseLinePrices.sum]);

    const buyOrdersData = useMemo(() => {

        const data = [];

        for (let i = 0; i < 30; i++) {
            const dataPoint = {};

            dataPoint.price = parseFloat((baseLinePrices.price + (Math.random() > 0.5 ? 1 : -1) * (Math.random() * (0.09 - 0.01) + 0.01)).toFixed(10));
            dataPoint.eth = parseFloat((baseLinePrices.eth + (Math.random() > 0.5 ? 1 : -1) * (Math.random() * (1.5 - 0.05) + 0.05)).toFixed(10));
            dataPoint.btc = parseFloat((baseLinePrices.btc + (Math.random() > 0.5 ? 1 : -1) * (Math.random() * (0.02 - 0.005) + 0.005)).toFixed(10));
            dataPoint.sum = parseFloat((baseLinePrices.sum + (Math.random() > 0.5 ? 1 : -1) * (Math.random() * (1 - 0.09) + 0.09)).toFixed(10));

            if (i >= 15) {
                data.push(dataPoint);
            }
        }

        return data;

    }, [baseLinePrices.btc, baseLinePrices.eth, baseLinePrices.price, baseLinePrices.sum]);

    const { themeObj, customColors } = useThemeContext();

    const exchangeChartRef = useRef(null);
    const salesComparisonChartRef = useRef(null);
    const weeklySalesChartRef = useRef(null);

    useEffect(() => { document.title = `Crypto - ${defaultTitle}` }, []);

    useEffect(() => {

        if (customColors) {

            exchangeChartRef?.current?.addColorScheme('custom', customColors);
            exchangeChartRef?.current?.refresh();

            salesComparisonChartRef?.current?.addColorScheme('custom', customColors);
            salesComparisonChartRef?.current?.refresh();

            weeklySalesChartRef?.current?.addColorScheme('custom', customColors);
            weeklySalesChartRef?.current?.refresh();
        }

    }, [customColors]);

    const exchangeChartData = {
        animation: 'none',
        theme: themeObj.theme,
        caption: 'Caption',
        description: 'Description',
        showLegend: true,
        showBorderLine: true,
        enableCrosshairs: true,
        padding: { left: 5, top: 5, right: 5, bottom: 5 },
        dataSource: btcToUsdtExchangeData,
        colorScheme: 'scheme30',
        xAxis: {
            dataField: 'date',
            displayText: 'Date',
            labels: {
                formatFunction: function (value) {
                    return value.getDate() + '-' + monthFormatter.format(value) + '<br>' + value.getFullYear().toString();
                }
            },
            type: 'basic',
            valuesOnTicks: true,
            gridLines: {
                visible: false
            }
        },
        seriesGroups: [
            {
                type: 'candlestick',
                series: [
                    {
                        dataFieldClose: 'c',
                        displayTextClose: 'Close',
                        dataFieldOpen: 'o',
                        displayTextOpen: 'Open',
                        dataFieldHigh: 'h',
                        displayTextHigh: 'High',
                        dataFieldLow: 'l',
                        displayTextLow: 'Low',
                        lineWidth: 1
                    }
                ]
            }
        ]
    }

    const currencyTableData = {
        dataSource: currencyPrices,
        sortMode: 'one',
        columns: [
            { label: 'Cryptocurrency', dataField: 'currency', dataType: 'string' },
            {
                label: 'Price', dataField: 'price', dataType: 'number', formatFunction(settings) {
                    settings.template = numberRenderer.formatNumber(settings.value, 'C');
                }
            },
            {
                label: 'Volume', dataField: 'volume', dataType: 'number', width: 160, formatFunction(settings) {
                    settings.template = numberRenderer.formatNumber(settings.value, 'C0');
                }
            },
            {
                label: 'Change', dataField: 'change', dataType: 'number', formatFunction(settings) {
                    settings.cell.classList.add(settings.value > 0 ? 'positive' : 'negative');

                    settings.template = settings.value + '%';
                }
            }
        ]
    }

    const sellTableData = {
        dataSource: sellOrdersData,
        columns: [
            { label: 'Price', dataField: 'price', dataType: 'number' },
            { label: 'ETH', dataField: 'eth', dataType: 'number' },
            { label: 'BTC', dataField: 'btc', dataType: 'number' },
            { label: 'Sum(BTC)', dataField: 'sum', dataType: 'number' }
        ]
    }

    const buyTableData = {
        dataSource: buyOrdersData,
        columns: [
            { label: 'Price', dataField: 'price', dataType: 'number' },
            { label: 'ETH', dataField: 'eth', dataType: 'number' },
            { label: 'BTC', dataField: 'btc', dataType: 'number' },
            { label: 'Sum(BTC)', dataField: 'sum', dataType: 'number' }
        ]
    }

    return (
        <div className="container crypto-dashboard">
            <div className="row">
                <div className="col">
                    <div className="header-menu">
                        <div className="welcome">Welcome back, John!</div>
                        <Button
                            className="today-button settings-button"
                            onClick={(e) => openTodayMenu(e)}
                            onPointerUp={(e) => e.stopPropagation()}
                        >
                            <span className="material-icons">calendar_today</span>
                            Today
                            <span className="material-icons">keyboard_arrow_down</span>
                        </Button>
                        <Button className="primary"><span className="material-icons">filter_alt</span></Button>
                        <Button className="primary"><span className="material-icons">refresh</span></Button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6 col-xl-3 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="font-weight-bold mb-0">BTC/USDT</h5>
                                <span className="text-danger">-0.37%</span>
                            </div>
                            <p className=" mb-0">10688.27</p>
                            <p className="mb-0">Volume: 240611229</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-xl-3 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="font-weight-bold mb-0">BCH/USDT</h5>
                                <span className="text-warning">0.4%</span>
                            </div>
                            <p className=" mb-0">227.30</p>
                            <p className="mb-0">Volume: 21193756</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-xl-3 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="font-weight-bold mb-0">LTC/BTC</h5>
                                <span className="text-success">1.18%</span>
                            </div>
                            <p className=" mb-0">0.0042867</p>
                            <p className="mb-0">Volume: 9359876</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-xl-3 mb-5">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="d-flex justify-content-between align-items-center mb-3">
                                <h5 className="font-weight-bold mb-0">ETH/BTC</h5>
                                <span className="text-success">0.22%</span>
                            </div>
                            <p className=" mb-0">0.033165</p>
                            <p className="mb-0">Volume: 8546909</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Markets</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body">
                            <Table
                                id="currencyTable"
                                className="crypto-table no-border table-striped maxh-350"
                                {...currencyTableData}
                            ></Table>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h5 className="label">BTC/USDT</h5>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body">
                            <Chart
                                ref={exchangeChartRef}
                                {...exchangeChartData}
                                id="exchangeChart"
                                className='w-100 h-100 maxh-350'
                            >
                            </Chart>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Sell Orders</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body">
                            <Table
                                id="sellTable"
                                className="crypto-table no-border table-striped maxh-350"
                                {...sellTableData}
                            ></Table>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 mb-5">
                    <div className="card h-100">
                        <div className="card-header">
                            <h4 className="label">Buy Orders</h4>
                            <div
                                className="settings-button"
                                onClick={(e) => openTodayMenu(e)}
                                onPointerUp={(e) => e.stopPropagation()}
                            >…</div>
                        </div>
                        <div className="card-body">
                            <Table
                                id="buyTable"
                                className="crypto-table no-border table-striped maxh-350"
                                {...buyTableData}
                            ></Table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withAnimation(CryptoDashboard)