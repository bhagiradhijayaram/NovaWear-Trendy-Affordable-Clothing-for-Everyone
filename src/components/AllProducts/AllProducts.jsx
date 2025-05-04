import { useEffect, useState } from "react";
import ProductData from "../ProductCard/ProductData";
import "./AllProducts.css";
import FilterFeatures from "../FilterFeatures/FilterFeatures";
import { useDispatch } from "react-redux";
import { addItem } from "../../store";
import Pagination from "../Pagination/Pagination";

const itemsPerPage = 11;

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const fetchProductData = async () => {
    const response = await fetch("/data/clothes.json");
    const data = await response.json();
    setAllProducts(data.products);
    setFilteredProducts(data.products);
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  // category filter logic
  const filterProducts = (category) => {
    if (category === "All") {
      setFilteredProducts(allProducts);
      console.log(allProducts);
    } else {
      const filtered = allProducts.filter(
        (item) => item.category === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
    setCurrentPage(1);
  };

  // search filter logic
  const handleSearch = (value) => {
    setSearchTerm(value);
    const filtered = allProducts.filter((item) =>
      item.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  // Pagination based on filtered list
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Add Item To Cart Logic
  const addItemToCart = (id) => {
    console.log("cartItem Id:", id);
    const cartItem = allProducts.find((item) => item.id === id);
    dispatch(addItem(cartItem));
  };

  return (
    <>
      <section className="section-heading">
        <h2>Featured Products</h2>
      </section>

      <div className="products-section">
        <ul className="products-container">
          <div className="filter">
            <FilterFeatures
              filterProducts={filterProducts}
              handleSearch={handleSearch}
              searchTerm={searchTerm}
            />
          </div>
          {currentItems.length > 0 ? (
            currentItems.map((product) => (
              <ProductData
                key={product.id}
                productData={product}
                addItemToCart={addItemToCart}
              />
            ))
          ) : (
            <div className="no-product-found-container">
              <img
                src="https://res.cloudinary.com/dasvdkncm/image/upload/v1746262581/product_not_found-removebg-preview_qnjito.png"
                alt="no products"
                width={400}
              />
            </div>
          )}
        </ul>
      </div>
      {/*  pagination Component */}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default AllProducts;
