import './topSales.scss';
import { teamSales } from '../../../../mockData/salesTeam';
import React from 'react';

const TopSales = () => {
  // Convert salesTotal to numeric value and sort in ascending order
  const sortedSales = teamSales.sort((a, b) => {
    const salesTotalA = parseFloat(a.salesTotal.replace(/[^0-9.-]+/g, ''));
    const salesTotalB = parseFloat(b.salesTotal.replace(/[^0-9.-]+/g, ''));
    return salesTotalA - salesTotalB;
  });

  // Reverse the order to sort in descending order
  const descendingSales = sortedSales.reverse();
  // Isolate the top 10 highest sales
  // const top10Sales = descendingSales.slice(0, 10);
  // Render the top 25 sales
  const top25Sales = descendingSales.slice(0, 25);
  // Isolate the lowest 10 sales
  // const lowestSales = descendingSales.slice(-10);
  //  Reorder lowest sales Low to High
  // const lowestSalesFlipped = lowestSales.reverse();

  return (
    <div className="topSales">
      <h1>Top Sales</h1>
      <div className="list">
        {top25Sales.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userText">
                <span className="username">
                  {user.firstName} {user.lastName}
                </span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">{user.salesTotal}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSales;
