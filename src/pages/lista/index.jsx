import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";
import './listagem.css';

export default function Lista() {
  const [produtos, setProdutos] = useState([]);
  const navegate = useNavigate();

  useEffect(() => {
    var arrItens = localStorage.getItem("formData");

    if (arrItens) {

      const ProductOrder = JSON.parse(arrItens);

      const newOrder = ProductOrder.sort((a, b) => a.productValue - b.productValue);
      
      setProdutos(newOrder);
    }

  }, []);

  const handleRegister = () =>{

    navegate('/');
  }

  return (
    <main className="main">
      <h3 className="title">Tela de listagem</h3>
      {produtos.length > 0 ? (
        <table className="table" border="1" style={{ borderCollapse: "collapse", width: "50%" }}>
          <thead>
            <tr>
              <th className="th">Nome</th>
              <th className="th">Descrição</th>
              <th className="th">Valor (R$)</th>
              <th className="th">Disponível para Venda</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto, index) => (
              <tr key={index}>
                <td className="td">{produto.productName}</td>
                <td className="td">{produto.productDescription}</td>
                <td className="td">{produto.productValue}</td>
                <td className="td">{produto.availableForSale ? "Sim" : "Não"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum produto cadastrado.</p>
      )}
      <button className="button" onClick={handleRegister}>Cadastrar novo produto</button>
    </main>
  );
}
