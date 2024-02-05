import PropTypes from "prop-types";
import { useDrop } from "react-dnd";
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";

import { sendOrder } from "../../utils/constants";
import { CREATE_ORDER_SUCCES, CREATE_ORDER_FAILED } from "../../services/actions/order-ingredients";

import { ConstructorElement, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import ConstructorItem from "../constructor-item/constructor-item";

import diamond from "../../images/diamond36x36.svg";

import stylesBurgerConstructor from "./burger-constructor.module.css";

function BurgerConstructor({
  handleOpenModal,
  onDropHandler,
}) {
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);

  const { ingredientsInConstructor } = useSelector(store => ({
    ingredientsInConstructor: store.ingredientsInConstructor
  }));

  const topElement = ingredientsInConstructor.bun;
  const middleElements = ingredientsInConstructor.middleIngredients;
  const bottomElement = topElement;

  const bunsId = topElement && topElement._id;
  const middleElementsId = middleElements.map((i) => i._id);

  const allIngredients = [bunsId, ...middleElementsId, bunsId];

  const [{ canDropTop }, dropRefTop] = useDrop({
    accept: 'bun',
    drop(item) {
      onDropHandler(item)
    },
    collect: monitor => ({
      canDropTop: monitor.canDrop(),
    })
  });

  const [{ canDropMiddle }, dropRefMiddle] = useDrop({
    accept: 'mid',
    drop(item) {
      onDropHandler(item)
    },
    collect: monitor => ({
      canDropMiddle: monitor.canDrop(),
    })
  });

  const [{ canDropBottom }, dropRefBottom] = useDrop({
    accept: 'bun',
    drop(item) {
      onDropHandler(item)
    },
    collect: monitor => ({
      canDropBottom: monitor.canDrop(),
    })
  });

function createOrder(data) {
  return function(dispatch) {
    sendOrder(data)
      .then((res) => {
        if(res && res.success) {
          dispatch({
            type: CREATE_ORDER_SUCCES,
            payload: res
          })
          handleOpenModal();
        } else { dispatch({
          type: CREATE_ORDER_FAILED
        })
      }
      })
      .catch((err) => {
        dispatch({
          type: CREATE_ORDER_FAILED
        })
      })
  }
};

  function handleOrderButtonClick() {
    if(!allIngredients.includes(null)) {
      dispatch(createOrder(allIngredients));
    } else {
      // обработчик ошибки
    }
  };

  // вычисление стоимости
  function calculatePrice() {
    const price = middleElements.map((i) => i.price).reduce((accumulator, current) => accumulator + current, 0) 
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
          style={canDropTop ? { outline: '2px dashed #4C4CFF' } : null}
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
            middleElements.map((item, index) => (
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
                style={canDropMiddle ? { outline: '2px dashed #4C4CFF' } : null}
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
          style={canDropBottom ? { outline: '2px dashed #4C4CFF' } : null}
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
        <Button htmlType="button" type="primary" size="large" onClick={ handleOrderButtonClick }>
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
