import { scaleLinear } from 'd3-scale'
import * as shape from 'd3-shape'
import { parse } from 'react-native-redash'

import data from '../data.json'
import { DataPoints, Prices, SIZE } from '../types'

const values = data.data.prices as Prices
const POINTS = 60

const buildGraph = (datapoints: DataPoints, label: string) => {
  const priceList = datapoints.prices.slice(0, POINTS)
  const formattedValues = priceList.map(
    (price) => [parseFloat(price[0]), price[1]] as [number, number],
  )
  const prices = formattedValues.map((value) => value[0])
  const dates = formattedValues.map((value) => value[1])
  const scaleX = scaleLinear()
    .domain([Math.min(...dates), Math.max(...dates)])
    .range([0, SIZE])
  const minPrice = Math.min(...prices)
  const maxPrice = Math.max(...prices)
  const scaleY = scaleLinear().domain([minPrice, maxPrice]).range([SIZE, 0])
  return {
    label,
    maxPrice,
    minPrice,
    path: parse(
      shape
        .line()
        .x(([, x]) => scaleX(x) as number)
        .y(([y]) => scaleY(y) as number)
        .curve(shape.curveBasis)(formattedValues) as string,
    ),
    percentChange: datapoints.percent_change,
  }
}

export const graphs = [
  {
    data: buildGraph(values.hour, 'Last Hour'),
    label: '1H',
    value: 0,
  },
  {
    data: buildGraph(values.day, 'Today'),
    label: '1D',
    value: 1,
  },
  {
    data: buildGraph(values.month, 'Last Month'),
    label: '1M',
    value: 2,
  },
  {
    data: buildGraph(values.year, 'This Year'),
    label: '1Y',
    value: 3,
  },
  {
    data: buildGraph(values.all, 'All time'),
    label: 'all',
    value: 4,
  },
]
