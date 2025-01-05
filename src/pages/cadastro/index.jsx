import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cadastro.css";

export default function Cadastro() {
  const navegate = useNavigate();

  const [formData, setFormData] = useState({
    productName: "",
    productDescription: "",
    productValue: 0,
    availableForSale: false,
  });

  const handleChange = (event) => {
    const { name, value, type } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "radio" ? value === "true" : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const storedData = localStorage.getItem("formData");
    const dataArray = storedData ? JSON.parse(storedData) : [];

    const updatedData = [...dataArray, formData];

    localStorage.setItem("formData", JSON.stringify(updatedData));

    setFormData({
      productName: "",
      productDescription: "",
      productValue: 0,
      availableForSale: false,
    });

    console.log("Produto cadastrado com sucesso!");

    navegate("/Listagem");
  };
  return (
    <main className="main">
      <h3 className="title">Cadastre um novo produto</h3>
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="divisoria">
          <label className="label">produto:</label>
          <input
            className="inputs"
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            placeholder="nome do produto"
            onChange={handleChange}
            required
          />
        </div>

        <div className="divisoria">
          <label className="label">Descrição de produto:</label>
          <textarea
          className="textarea"
            type="text"
            id="productDescription"
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
            placeholder="Descrição do produto"
            required
          />
        </div>

        <div className="divisoria">
          <label className="label">Valor do produto:</label>
          <input
            className="inputs"
            type="number"
            id="producctValue"
            name="productValue"
            value={formData.productValue}
            onChange={handleChange}
            placeholder="R$: "
            required
          />
        </div>

        <div className="divisoria">
          <label className="label">Disponível para venda:</label>
          <label>
            <input
              type="radio"
              id="availableForSale"
              name="availableForSale"
              onChange={handleChange}
              value="true"
            />
            sim
          </label>
          <label>
            <input
              type="radio"
              id="availableForSale"
              name="availableForSale"
              onChange={handleChange}
              value="false"
            />
            Não
          </label>
        </div>

        <button className="button" type="submit">
          Cadastrar Produto
        </button>
      </form>
    </main>
  );
}
