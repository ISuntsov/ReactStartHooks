import React from "react";
import CollapseWrapper from "../common/collapse";
import PropTypes from "prop-types";

const ListComponent = ({ children }) => {
    return React.Children.map(children, (child, i) => {
        return React.cloneElement(
            child,
            {
                ...child.props,
                textNum: i + 1
            }
        );

        // <div className='list-group list-group-horizontal'>
        //     {<p className='me-2'>{i + 1}.</p>{child}}
        // {</div>;}
    });
};
ListComponent.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
};

const Component = ({ textNum }) => {
    return <div>{textNum}. Компонент списка</div>;
};
Component.propTypes = {
    textNum: PropTypes.number
};

const ChildrenExercise = () => {
    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>

            <ListComponent>
                <Component/>
                <Component/>
                <Component/>
            </ListComponent>
        </CollapseWrapper>
    );
};

export default ChildrenExercise;
