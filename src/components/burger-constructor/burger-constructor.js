import { useMemo } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";

import {
  ConstructorElement,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import diamond from "../../images/diamond36x36.svg";

import stylesBurgerConstructor from "./burger-constructor.module.css";
import { ingredientStructure } from "../../utils/prop-types";

function BurgerConstructor({
  handleOpenModal,
}) {
  const { ingredients } = useSelector(store => ({
    ingredients: store.ingredients,
  }))

  const topElement = useMemo(() => ingredients.ingredients.find((e) => e.name.includes("Краторная булка")), [ingredients.ingredients]);
  const middleElements = useMemo(() => ingredients.ingredients.filter((e) => e.type === "main" || e.type === "sauce"), [ingredients.ingredients]);
  const bottomElement = useMemo(() => ingredients.ingredients.find((e) => e.name.includes("Флюоресцентная булка")), [ingredients.ingredients]);

  return (
    <section className={ `pl-4 ${stylesBurgerConstructor.section}` }>
      <div className={ stylesBurgerConstructor.container }>
        <div className="pr-5">
          <ConstructorElement
            type="top"
            isLocked={ true }
            text={ topElement.name + `${" (верх)"}` }
            price={ topElement.price }
            thumbnail={ topElement.image }
          />
        </div>
        <ul
          className={ `custom-scroll mt-4 mb-4 ${stylesBurgerConstructor.list}` }
        >
          {middleElements.map((i) => (
            <li
              key={i._id}
              className={ `mr-2 ${stylesBurgerConstructor.listItem}` }
            >
              {i.type !== "bun" ? <DragIcon /> : <></>}
              <ConstructorElement
                type={ i.type }
                isLocked={ false }
                text={ i.name }
                price={ i.price }
                thumbnail={ i.image_large }
              />
            </li>
          ))}
        </ul>
        <div className="pr-5">
          <ConstructorElement
            type="bottom"
            isLocked={ true }
            text={ bottomElement.name + `${" (низ)"}` }
            price={ bottomElement.price }
            thumbnail={ bottomElement.image }
          />
        </div>
      </div>
      <div className={ `mt-10 ${stylesBurgerConstructor.confirmation}` }>
        <div className={ `mr-10 ${stylesBurgerConstructor.total}` }>
          <p className="text mr-2">610</p>
          <img alt="валюта- алмаз" src={ diamond }></img>
        </div>
        <Button htmlType="button" type="primary" size="large" onClick={ handleOpenModal }>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientStructure).isRequired,
  handleOpenModal: PropTypes.func.isRequired
};

export default BurgerConstructor;
