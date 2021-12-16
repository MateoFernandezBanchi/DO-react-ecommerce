import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { WishListItem } from "./WishListItem";

export const WishList = () => {
  const { user, displayName, wishList } = useAuthContext();
  return (
    <div className="">
      {user === null ? (
        <div style={{ backgroundColor: "rgba(0,0,0,0)" }} className="container">
          <h2 style={{ color: "white" }}>
            Tiene que iniciar sesion para guardar sus favoritos{" "}
          </h2>
          <img
            className="w-50 gifWaiting"
            src="https://raw.githubusercontent.com/dl2811/loginform/master/3.gif"
            alt=""
          />
          <div>
            <Link to="/iniciarSesion" className="buttonCount2">
              Iniciar Sesion
            </Link>
          </div>
        </div>
      ) : wishList.length > 0 ? (
        <>
          <h2
            style={{ fontSize: "25px", marginTop: "2rem" }}
            className="cartTitle"
          >
            Esta es su lista de favoritos {displayName}
          </h2>
          <div>
            {wishList.map((prod) => (
              <WishListItem prod={prod} key={prod.id} />
            ))}
          </div>
        </>
      ) : (
        <>
          <h2 className="cartTitle mt-5">
            Lista de favoritos vacía ¡Elija un producto!
          </h2>
          <img
            className="gifWaiting"
            src="https://cdn.dribbble.com/users/3008811/screenshots/5951349/dribbble.gif"
            alt=""
          />
          <div>
            <Link to="/productos">
              <button className="buttonCount mt-5">
                Seleccionar un producto
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
