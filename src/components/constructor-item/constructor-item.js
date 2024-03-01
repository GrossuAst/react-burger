import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientStructure } from "../../utils/prop-types";
import PropTypes from 'prop-types';

import { useRef, useCallback } from "react";
import { useDrag, useDrop } from "react-dnd";

import { useDispatch } from "react-redux";
import { removeIngredient, moveInvgredient } from "../../services/burger-constructor/action";

import styles from './constructor-item.module.css';

function ConstructorItem({ item, index }) {
    const dispatch = useDispatch();

    const cardRef = useRef();

    // удаление ингредиента
    function handleDelete(id) {
        dispatch(removeIngredient(id));
    };

    const moveCard = useCallback((dragIndex, hoverIndex) => {
      dispatch(moveInvgredient(dragIndex, hoverIndex))
    }, []);

    const [{ handlerId }, drop] = useDrop({
        accept: 'middle ingredient',
        collect(monitor) {
          return {
            handlerId: monitor.getHandlerId(),
          }
        },
        hover(item, monitor) {
          if (!cardRef.current) {
            return
          }
          const dragIndex = item.index
          const hoverIndex = index
          if (dragIndex === hoverIndex) {
            return
          }
          const hoverBoundingRect = cardRef.current?.getBoundingClientRect()
          const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
          const clientOffset = monitor.getClientOffset()
          const hoverClientY = clientOffset.y - hoverBoundingRect.top

          if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return
          }
          if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return
          }
          moveCard(dragIndex, hoverIndex)
          item.index = hoverIndex
        },
      })

    const [{ isDragging }, drag] = useDrag({
        type: 'middle ingredient',
        item: () => {
          return { key: item.key, index }
        },
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
    });

    drag(drop(cardRef));

    return (
        <li
            ref={ cardRef }
            className={ `mr-2 ${styles.listItem}` }
        >
            <DragIcon />
            <ConstructorElement 
                type={ item.type }
                isLocked={ false }
                text={ item.name }
                price={ item.price }
                thumbnail={ item.image_large }
                handleClose={ () => handleDelete(item.key) }
            />
        </li>
    );
};



ConstructorItem.propTypes = {
  item: ingredientStructure.isRequired,
  index: PropTypes.number.isRequired,
};

export default ConstructorItem;