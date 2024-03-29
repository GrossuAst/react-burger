import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { useNavigate } from "react-router-dom";

import { createOrder } from "../../services/order-ingredients/action";

import { ConstructorElement, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "../constructor-item/constructor-item";

import diamond from "../../images/diamond36x36.svg";

import stylesBurgerConstructor from "./burger-constructor.module.css";

import { IIngredient, IIngredientInConstructor } from "../../types/types";

interface IBurgerConstructorProps {
  handleOpenModal: () => void;
  onDropHandler: (item: IIngredient) => void;
};

const BurgerConstructor = ({ handleOpenModal, onDropHandler }: IBurgerConstructorProps) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  const { ingredientsInConstructor, user } = useSelector((store: any) => ({
    ingredientsInConstructor: store.ingredientsInConstructor,
    orderDetails: store.orderDetails.orderDetails,
    user: store.userData.user
  }), shallowEqual);

  const topElement = ingredientsInConstructor.bun;
  const middleElements = ingredientsInConstructor.middleIngredients;
  const bottomElement = topElement;

  const bunsId = topElement && topElement._id;
  const middleElementsId = middleElements.map((i: IIngredient) => i._id);

  const allIngredients = [bunsId, ...middleElementsId, bunsId];

  const [{ canDropTop }, dropRefTop] = useDrop({
    accept: 'bun',
    drop: (item: IIngredient) => {
      onDropHandler(item)
    },
    collect: monitor => ({
      canDropTop: monitor.canDrop(),
    })
  });

  const [{ canDropMiddle }, dropRefMiddle] = useDrop({
    accept: 'mid',
    drop(item: IIngredient) {
      onDropHandler(item)
    },
    collect: monitor => ({
      canDropMiddle: monitor.canDrop(),
    })
  });

  const [{ canDropBottom }, dropRefBottom] = useDrop({
    accept: 'bun',
    drop(item: IIngredient) {
      onDropHandler(item)
    },
    collect: monitor => ({
      canDropBottom: monitor.canDrop(),
    })
  });

  function handleOrderButtonClick() {
    if(user) {
      dispatch(createOrder(allIngredients) as any);
      handleOpenModal();  
    } else if(!user) {
      navigate('/login');
    }
    return
  };

  // вычисление стоимости
  function calculatePrice() {
    const price = middleElements.map((i: IIngredient) => i.price).reduce((accumulator: any, current: any) => accumulator + current, 0) 
    + (topElement && topElement.price * 2);
    setTotalPrice(price);
  };

  useEffect(() => {
    calculatePrice();
  }, [topElement, middleElements, bottomElement]);
  
  return (
    <section className={ `pl-4 ${stylesBurgerConstructor.section}` }>
      <div className={ stylesBurgerConstructor.container }>

        {/* ______ верхняя булка ______ */}
        <div 
          className={ `mr-5 ${stylesBurgerConstructor.ingredientContainer} ${stylesBurgerConstructor.ingredientContainerTop}` }
          style={canDropTop ? { outline: '2px dashed #4C4CFF' } : undefined}
          ref={ dropRefTop }
        >
          { 
            topElement ?
            <ConstructorElement 
              type="top"
              isLocked={ true }
              text={ topElement.name + `${" (верх)"}` }
              price={ topElement.price }
              thumbnail={ topElement.image }
            /> : 
            (<p className={stylesBurgerConstructor.containerText}>Выберите булку</p>) 
          }
        </div>

        {/* ______ начинка ______ */}
        <ul 
          className={ `custom-scroll mt-4 mb-4 pt-1 pb-1 ${stylesBurgerConstructor.list}` }
          ref={ dropRefMiddle }
        >
          {
            middleElements.length > 0 ?
            middleElements.map((item: IIngredientInConstructor, index: number) => (
              <ConstructorItem
                key={ item.key }
                item={ item }
                index={ index }
              />
            ))
            : middleElements.length === 0 &&
            (<li className={ `mr-2 ${stylesBurgerConstructor.listItem}` }>
              <div
                className={ `${stylesBurgerConstructor.ingredientContainer}` }
                style={canDropMiddle ? { outline: '2px dashed #4C4CFF' } : undefined}
              >
                <p 
                  className={stylesBurgerConstructor.containerText} 
                >
                  Выберите начинку
                </p>
              </div>
            </li>)
          }
        </ul>

        {/* ______ нижняя булка ______ */}
        <div 
          className={ `mr-5 ${stylesBurgerConstructor.ingredientContainer} ${stylesBurgerConstructor.ingredientContainerBottom}` }
          style={canDropBottom ? { outline: '2px dashed #4C4CFF' } : undefined}
          ref={ dropRefBottom }
        >
          { 
            bottomElement ? 
            <ConstructorElement 
              type="bottom"
              isLocked={ true }
              text={ bottomElement.name + `${" (низ)"}` }
              price={ bottomElement.price }
              thumbnail={ bottomElement.image }
            /> : 
            (<p className={stylesBurgerConstructor.containerText}>Выберите булку</p>) 
          }
        </div>

      </div>
      <div className={ `mt-10 ${stylesBurgerConstructor.confirmation}` }>
        <div className={ `mr-10 ${stylesBurgerConstructor.total}` }>
          <p className="text mr-2">{ totalPrice }</p>
          <img alt="валюта- алмаз" src={ diamond }></img>
        </div>
        <Button htmlType="button" type="primary" size="large" 
          onClick={ handleOrderButtonClick }
          disabled={ allIngredients.includes(null) }
        >
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  handleOpenModal: PropTypes.func.isRequired,
  onDropHandler: PropTypes.func.isRequired
};

export default BurgerConstructor;
