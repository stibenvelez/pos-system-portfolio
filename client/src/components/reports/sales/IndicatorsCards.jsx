import React from 'react'
import Card from '../../ui/Card/Card'
import formatMoney from '../../../helpers/formatMoney'
import { useSelector } from 'react-redux'

const IndicatorsCards = () => {
    const { totalSold, totalCost, totalCommission, totalExpenses } =
        useSelector(({ reports }) => reports.sales);
    const loading = useSelector(({ reports }) => reports.loading);

    if (loading) {
        return (
            <div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 text-gray-600 animate-pulse">
                    <Card className="h-20 flex flex-col gap-2">
                        <h4 className="h-4 rounded bg-gray-300"></h4>
                        <p className="text-2xl font-bold h-4 rounded bg-green-200 text-green-700"></p>
                    </Card>
                    <Card className="h-20 flex flex-col gap-2">
                        <h4 className="h-4 rounded bg-gray-300"></h4>
                        <p className="text-2xl font-bold h-4 rounded  bg-rose-100 text-rose-900"></p>
                    </Card>
                    <Card className="h-20 flex flex-col gap-2">
                        <h4 className="h-4 rounded bg-gray-300"></h4>
                        <p className="text-2xl font-bold h-4 rounded bg-slate-200 text-rose-900"></p>
                    </Card>
                    <Card className="h-20 flex flex-col gap-2">
                        <h4 className="h-4 rounded bg-gray-300"></h4>
                        <p className="text-2xl font-bold h-4 rounded bg-slate-200 text-rose-900"></p>
                    </Card>
                </div>
            </div>
        );
    }

  return (
      <div>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 text-gray-600">
              <Card className="h-20">
                  <h4 className="">Venta total</h4>
                  <p className="text-2xl font-bold text-green-500">
                      {formatMoney.format(totalSold)}
                  </p>
              </Card>
              <Card className="h-20">
                  <h4 className="">Costo total</h4>
                  <p className="text-2xl font-bold text-amber-500">
                      {formatMoney.format(totalCost)}
                  </p>
              </Card>
              <Card className="h-20">
                  <h4 className="">Comision total</h4>
                  <p className="text-2xl font-bold text-sky-700">
                      {formatMoney.format(totalCommission)}
                  </p>
              </Card>
              <Card className="h-20">
                  <h4 className="">Gastos</h4>
                  <p className="text-2xl font-bold text-rose-900">
                      {formatMoney.format(totalExpenses)}
                  </p>
              </Card>
          </div>
      </div>
  );
}

export default IndicatorsCards