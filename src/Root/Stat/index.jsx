import React from 'react';
import { PureComponent } from '@ktx/react-relax';

import { Histogram, BarSeries, withParentSize, XAxis, YAxis } from '@data-ui/histogram';

import NewsDiagramGet from 'api/connections/NewsDiagramGet';

import styles from './styles.scss';


const ResponsiveHistogram = withParentSize(({ parentWidth, parentHeight, ...rest}) => (
  <Histogram
    width={parentWidth}
    height={parentHeight}
    {...rest}
  />
));


class Stat extends PureComponent {

  constructor(props) {
    super(props);

    this._apiNewsDiagramGet = new NewsDiagramGet();

    this.state = {
      tags: null,
    };
  }

  componentDidMount = async () => {
    const [response] = await this._apiNewsDiagramGet.call({
      limit: 10,
    });

    if(response){
      this.setState({
        tags: response,
      })
    }
  };

  render() {
    const { tags } = this.state;

    if(tags === null){
      return null;
    }

    const binnedData = tags.map(data => ({ bin: data.tag, count: data.amount, id: data.tag }));

    return <div className={styles.root}>
      <ResponsiveHistogram
        binType="categorical"
        vertical
        height={700}
        renderTooltip={({ event, datum, data, color }) => (
          <div>
            <strong style={{ color }}>{datum.bin0} to {datum.bin1}</strong>
            <div><strong>count </strong>{datum.count}</div>
          </div>
        )}
      >
        <BarSeries
          fill="#ccc"
          stroke="#343a40"
          binnedData={binnedData}
        />
        <XAxis label="Ключевые слова" labelProps={{ style: { fontSize: '16px' }, y: 40 }}/>
        <YAxis label="Количество новостей" labelProps={{ style: { fontSize: '16px' }, x: -400 }}/>
      </ResponsiveHistogram>
    </div>;
  }
}


Stat.propTypes = {};

Stat.defaultProps = {};


export default Stat;
