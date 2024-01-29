import { useMemo } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useDrop } from "react-dnd";

import { ConstructorElement, DragIcon, Button } from "@ya.praktikum/react-developer-burger-ui-components";

import diamond from "../../images/diamond36x36.svg";

import stylesBurgerConstructor from "./burger-constructor.module.css";
import { ingredientStructure } from "../../utils/prop-types";

function BurgerConstructor({
  handleOpenModal,
  onDropHandler,
}) {
  const { ingredientsInConstructor } = useSelector(store => ({
    ingredientsInConstructor: store.ingredientsInConstructor
  }))

  const topElement = ingredientsInConstructor.bun;
  const middleElements = ingredientsInConstructor.middleIngredients;
  const bottomElement = ingredientsInConstructor.bun;

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
            middleElements.map((item) => (
              <li               
                key={item.key}
                className={ `mr-2 ${stylesBurgerConstructor.listItem}` }
              >
                <DragIcon />
                <ConstructorElement 
                  type={ item.type }
                  isLocked={ false }
                  text={ item.name }
                  price={ item.price }
                  thumbnail={ item.image_large }
                />
              </li>
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
