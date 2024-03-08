import styles from './constructor-item.module.css';
import { DragIcon, ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import { useRef, useCallback } from "react";
import { useDrag, useDrop } from "react-dnd";
import { useDispatch } from "react-redux";
import { removeIngredient, moveInvgredient } from "../../services/burger-constructor/action";
import { IIngredientInConstructor } from '../../types/types';
import type { Identifier, XYCoord } from 'dnd-core'

interface IConstructorItem {
  item: IIngredientInConstructor;
  index: number;
}

interface DragItem {
  index: number
  id: string
  type: string
}

const ConstructorItem = ({ item, index }: IConstructorItem) => {
    const dispatch = useDispatch();

    const cardRef = useRef<HTMLLIElement>(null);

    // удаление ингредиента
    function handleDelete(id: string) {
        dispatch(removeIngredient(id));
    };

    const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
      dispatch(moveInvgredient(dragIndex, hoverIndex))
    }, []);

    const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
        accept: 'middle ingredient',
        collect(monitor) {
          return {
            handlerId: monitor.getHandlerId(),
          }
        },
        hover(item: DragItem, monitor) {
          if (!cardRef.current) {
            return
          }

          const dragIndex = item.index
          const hoverIndex = index

          if (dragIndex === hoverIndex) {
            return
          }

          const hoverBoundingRect = cardRef.current?.getBoundingClientRect()
          const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
          const clientOffset = monitor.getClientOffset()
          const hoverClientY =(clientOffset as XYCoord).y - hoverBoundingRect.top

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
            <DragIcon type='primary' />
            <ConstructorElement 
                isLocked={ false }
                text={ item.name }
                price={ item.price }
                thumbnail={ item.image_large }
            />
        </li>
    );
};

export default ConstructorItem;