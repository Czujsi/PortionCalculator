import React, { useState } from "react";
import { HandleAddingNewIngredient } from "./handlers/HandleAddingIngredient";
import { HandleMultiplierChanges } from "./handlers/HandleMultiplierChanges";
import { HandleQuantityCalculations } from "./handlers/HandleQuantityCalculations";
import { HTMLTable } from "./tableSetup/HTMLTableSetUp";
import { handleSettingNewIngredient as HandleSettingNewIngredient } from "./handlers/HandleIgredientsChange";
import { Ingredient } from "./IngredientPattern/IngredientPatternInterface";

const IngredientTable: React.FC = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]); //dlaczego tutaj są dwa useState???
  const [newIngredient, setNewIngredient] = useState<Ingredient>({
    name: "",
    quantity: 0,
    unit: ""
  });
  
  const [multiplier, setMultiplier] = useState<number>(1);

  const handleChange = HandleSettingNewIngredient(setNewIngredient);

  const handleAddIngredient = HandleAddingNewIngredient(newIngredient, setIngredients, ingredients, setNewIngredient);

  const handleMultiplierChange = HandleMultiplierChanges(setMultiplier);

  const handleCalculate = HandleQuantityCalculations(ingredients, multiplier, setIngredients);

  return (
    HTMLTable(
        ingredients,
        newIngredient,
        handleChange,
        handleAddIngredient,
        multiplier,
        handleMultiplierChange,
        handleCalculate)
  );
};

export default IngredientTable;




