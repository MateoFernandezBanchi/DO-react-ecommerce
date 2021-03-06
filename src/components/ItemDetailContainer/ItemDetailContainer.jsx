import { useState, useEffect } from "react";
import { ItemDetail } from "./ItemDetail";
import { useParams } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { getFirestore } from "../../services/getFirestore";

export default function ItemDetailContainer() {
  const [productos, setProductos] = useState({});
  const [loading, setLoading] = useState(true);
  const [addCart, setAddCart] = useState(true);
  const [count, setCount] = useState(0);
  const { detailID } = useParams();

  useEffect(() => {
    const dbQuery = getFirestore();
    dbQuery
      .collection("items")
      .doc(detailID)
      .get()
      .then((resp) => setProductos({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [detailID]);

  const { agregarCarrito } = useCartContext();
  const onAdd = (cant) => {
    setCount(cant);
    setAddCart(false);
    agregarCarrito({ ...productos, cantidad: cant });
  };

  return (
    <div>
      {loading ? (
        <div className="spinner-border text-light" role="status">
          <span className="sr-only">Loading...</span>{" "}
        </div>
      ) : (
        <ItemDetail prod={productos} onAdd={onAdd} state={addCart} />
      )}
    </div>
  );
}
