import { snacks } from "../constants/snacksData";
import "../App.css";
import { useState } from "react";

export const SnackTable = () => {
  const [allSnacks, setAllSnacks] = useState(snacks);
  const [ascOrder, setAscOrder] = useState(true);
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
    if (searchText.length > 1) {
      setAllSnacks(
        allSnacks.filter(
          ({ product_name, ingredients }) =>
            product_name
              .toLowerCase()
              .trim()
              .includes(searchText.toLowerCase()) ||
            ingredients
              .join("")
              .toLowerCase()
              .trim()
              .includes(searchText.toLowerCase())
        )
      );
    } else {
      setAllSnacks(snacks);
    }
  };

  const sortByIdHandler = () => {
    if (ascOrder) {
      setAllSnacks([...allSnacks.sort((a, b) => b.id - a.id)]);
      setAscOrder(false);
    } else {
      setAllSnacks([...allSnacks.sort((a, b) => a.id - b.id)]);
      setAscOrder(true);
    }
  };
  console.log(allSnacks);
  const sortByNameHandler = () => {
    if (ascOrder) {
      setAllSnacks([
        ...allSnacks.sort((a, b) => {
          const nameA = a.product_name.toUpperCase(); // ignore upper and lowercase
          const nameB = b.product_name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }),
      ]);
      setAscOrder(false);
    } else {
      setAllSnacks([
        ...allSnacks.sort((a, b) => {
          const nameA = a.product_name.toUpperCase(); // ignore upper and lowercase
          const nameB = b.product_name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -11;
          }
          return 0;
        }),
      ]);
      setAscOrder(true);
    }
  };
  const sortByWeightHandler = () => {
    if (ascOrder) {
      setAllSnacks([
        ...allSnacks.sort(
          (a, b) => parseInt(b.product_weight) - parseInt(a.product_weight)
        ),
      ]);
      setAscOrder(false);
    } else {
      setAllSnacks([
        ...allSnacks.sort(
          (a, b) => parseInt(a.product_weight) - parseInt(b.product_weight)
        ),
      ]);
      setAscOrder(true);
    }
  };
  const sortByPriceHandler = () => {
    if (ascOrder) {
      setAllSnacks([...allSnacks.sort((a, b) => b.price - a.price)]);
      setAscOrder(false);
    } else {
      setAllSnacks([...allSnacks.sort((a, b) => a.price - b.price)]);
      setAscOrder(true);
    }
  };
  const sortByCaloriesHandler = () => {
    if (ascOrder) {
      setAllSnacks([...allSnacks.sort((a, b) => b.calories - a.calories)]);
      setAscOrder(false);
    } else {
      setAllSnacks([...allSnacks.sort((a, b) => a.calories - b.calories)]);
      setAscOrder(true);
    }
  };
  const sortByIngredientsHandler = () => {
    if (ascOrder) {
      setAllSnacks([
        ...allSnacks.sort((a, b) => {
          const nameA = a.product_name.toUpperCase(); // ignore upper and lowercase
          const nameB = b.product_name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        }),
      ]);
      setAscOrder(false);
    } else {
      setAllSnacks([
        ...allSnacks.sort((a, b) => {
          const nameA = a.ingredients.join("").toUpperCase(); // ignore upper and lowercase
          const nameB = b.ingredients.join("").toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return 1;
          }
          if (nameA > nameB) {
            return -1;
          }
          return 0;
        }),
      ]);
      setAscOrder(true);
    }
  };
  return (
    <>
      <div className="snack-table-container">
        <h2>Snack Table</h2>
        <input
          placeholder="Searh by products or Ingredients... "
          onChange={(e) => handleSearch(e)}
        ></input>
        <table>
          <tr>
            <th onClick={sortByIdHandler}>ID</th>
            <th onClick={sortByNameHandler}>Product Name</th>
            <th onClick={sortByWeightHandler}>Product Weight</th>
            <th onClick={sortByPriceHandler}>Price</th>
            <th onClick={sortByCaloriesHandler}>Calories</th>
            <th onClick={sortByIngredientsHandler}>Ingredients</th>
          </tr>
          {allSnacks.map(
            ({
              id,
              product_name,
              product_weight,
              price,
              calories,
              ingredients,
            }) => (
              <tr>
                <td>{id}</td>
                <td>{product_name}</td>
                <td>{product_weight}</td>
                <td>{price}</td>
                <td>{calories}</td>
                <td>{ingredients.join()}</td>
              </tr>
            )
          )}
        </table>
      </div>
    </>
  );
};
