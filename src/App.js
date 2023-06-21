import React, { useState } from "react";
import { Component } from "./componentes/Componentes";

const App = () => {
    const [moveableComponents, setMoveableComponents] = useState([]);
    const [selected, setSelected] = useState(null);

  
    const addMoveable = () => {
        const newMoveableId = Math.floor(Math.random() * Date.now());
        setMoveableComponents([
            ...moveableComponents,
            {
                id: newMoveableId,
                image: Math.floor(Math.random() * 4000),
                top: 10,
                left: 10,
                width: 150,
                height: 150,
                updateEnd: true,
            },
        ]);
        setSelected(newMoveableId);
    };

    
    const updateMoveable = (id, newComponent, updateEnd = false) => {
        const updatedMoveables = moveableComponents.map((moveable, i) => {
            if (moveable.id === id) {
                return { id, ...newComponent, updateEnd };
            }
            return moveable;
        });
        setMoveableComponents(updatedMoveables);
    };

   
    const deleteMoveable = () => {
        console.log(moveableComponents);
        console.log(selected);
        const new_moveables = moveableComponents.filter(
            (moveable) => moveable.id !== selected
        );
        console.log(new_moveables);
        setMoveableComponents(new_moveables);
        setSelected(null);
    };

    return (
        <main>
          <h1>Drawing app</h1>
            <div className="actions-container">
                <button className="btn primary-btn" onClick={addMoveable}>
                    Add new Moveable
                </button>
                {selected && (
                    <button className="btn danger-btn" onClick={deleteMoveable}>
                        Delete
                    </button>
                )}
            </div>
            <div id="parent">
                {moveableComponents.map((item, index) => (
                    <Component
                        {...item}
                        key={index}
                        updateMoveable={updateMoveable}
                        setSelected={setSelected}
                        isSelected={selected === item.id}
                    />
                ))}
            </div>
        </main>
    );
};

export default App;